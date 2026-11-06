-- CurioUS database setup. Paste this whole file into Supabase > SQL Editor > New query, then click Run.
-- Safe to run more than once.

-- Anonymous visitors (one row per browser)
create table if not exists public.visitors (
  id uuid primary key,
  first_seen timestamptz not null default now(),
  themes text[] not null default '{}',
  device text check (char_length(device) <= 20),
  referrer text check (char_length(referrer) <= 200),
  user_id uuid references auth.users(id) on delete set null
);

-- Everything people do in the app
create table if not exists public.events (
  id bigint generated always as identity primary key,
  visitor_id uuid not null references public.visitors(id) on delete cascade,
  type text not null check (type in ('start','keep','skip','deeper','learn','quiz','rom','share','session_end','waitlist','tune')),
  card_id text check (char_length(card_id) <= 80),
  theme text check (char_length(theme) <= 40),
  value jsonb check (pg_column_size(value) <= 2000),
  created_at timestamptz not null default now()
);
create index if not exists events_created_at_idx on public.events (created_at);
create index if not exists events_visitor_idx on public.events (visitor_id);
create index if not exists events_card_idx on public.events (type, card_id);

-- Who can see the dashboard
create table if not exists public.admins (email text primary key);
insert into public.admins (email) values ('adelina@modishsocial.com') on conflict do nothing;

-- Security: the public can only ADD rows. Nobody can read anything except admins (through admin_stats below).
alter table public.visitors enable row level security;
alter table public.events enable row level security;
alter table public.admins enable row level security;

drop policy if exists "anyone can register a visitor" on public.visitors;
create policy "anyone can register a visitor" on public.visitors for insert to anon, authenticated with check (true);
drop policy if exists "anyone can log events" on public.events;
create policy "anyone can log events" on public.events for insert to anon, authenticated with check (true);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where email = (auth.jwt() ->> 'email'));
$$;

-- Everything the dashboard shows, in one call
create or replace function public.admin_stats(days int default 30) returns json
language plpgsql stable security definer set search_path = public as $$
declare result json;
begin
  if not public.is_admin() then
    raise exception 'not allowed';
  end if;

  select json_build_object(
    'totals', json_build_object(
      'visitors',       (select count(*) from visitors),
      'visitors_today', (select count(*) from visitors where first_seen >= date_trunc('day', now())),
      'visitors_7d',    (select count(*) from visitors where first_seen > now() - interval '7 days'),
      'active_7d',      (select count(distinct visitor_id) from events where created_at > now() - interval '7 days'),
      'returning',      (select count(*) from (select visitor_id from events group by visitor_id
                          having count(distinct created_at::date) > 1) r),
      'cards_seen',     (select count(*) from events where type in ('keep','skip','deeper')),
      'deeper',         (select count(*) from events where type = 'deeper'),
      'shares',         (select count(*) from events where type = 'share'),
      'quiz_right',     (select coalesce(sum((value->>'right')::int), 0) from events where type in ('quiz','rom')),
      'quiz_total',     (select coalesce(sum((value->>'total')::int), 0) from events where type in ('quiz','rom')),
      'waitlist',       (select count(distinct visitor_id) from events where type = 'waitlist')
    ),
    'daily', (select coalesce(json_agg(d order by d.day), '[]'::json) from (
      select gs::date as day,
        (select count(*) from visitors v where v.first_seen::date = gs::date) as new_visitors,
        (select count(distinct e.visitor_id) from events e where e.created_at::date = gs::date) as active
      from generate_series(current_date - (days - 1), current_date, interval '1 day') gs
    ) d),
    'themes', (select coalesce(json_agg(t order by t.picks desc), '[]'::json) from (
      select unnest(themes) as theme, count(*) as picks from visitors group by 1
    ) t),
    'cards', (select coalesce(json_agg(c), '[]'::json) from (
      select card_id, max(theme) as theme,
        count(*) filter (where type = 'keep')   as keeps,
        count(*) filter (where type = 'skip')   as skips,
        count(*) filter (where type = 'deeper') as deeper,
        count(*) filter (where type = 'share')  as shares
      from events where card_id is not null
      group by card_id
      order by count(*) filter (where type = 'deeper') desc, count(*) filter (where type = 'keep') desc
      limit 300
    ) c),
    'sources', (select coalesce(json_agg(s order by s.visitors desc), '[]'::json) from (
      select coalesce(nullif(referrer, ''), 'direct') as source, count(*) as visitors from visitors group by 1
    ) s),
    'devices', (select coalesce(json_agg(dv order by dv.visitors desc), '[]'::json) from (
      select coalesce(device, 'unknown') as device, count(*) as visitors from visitors group by 1
    ) dv),
    'recent', (select coalesce(json_agg(r), '[]'::json) from (
      select v.id, v.first_seen, v.themes, v.device, v.referrer,
        (select max(e.created_at) from events e where e.visitor_id = v.id) as last_seen,
        (select count(*) from events e where e.visitor_id = v.id and e.type in ('keep','skip','deeper')) as cards,
        (select count(*) from events e where e.visitor_id = v.id and e.type = 'deeper') as deeper
      from visitors v order by v.first_seen desc limit 50
    ) r)
  ) into result;

  return result;
end;
$$;

revoke all on function public.admin_stats(int) from public, anon;
grant execute on function public.admin_stats(int) to authenticated;

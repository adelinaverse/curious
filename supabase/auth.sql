-- CurioUS sign-in and leads. Paste this whole file into Supabase > SQL Editor > New query, then click Run.
-- Run it after schema.sql. Safe to run more than once.

-- One profile per signed-in person
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  first_name text check (char_length(first_name) <= 60),
  marketing_opt_in boolean not null default false,
  opt_in_at timestamptz,
  progress jsonb check (pg_column_size(progress) <= 200000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles for select to authenticated using (auth.uid() = id);
drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- People can change their name, email preference and saved progress, never their email or id.
revoke update on public.profiles from authenticated, anon;
grant select on public.profiles to authenticated;
grant update (first_name, marketing_opt_in, opt_in_at, progress, updated_at) on public.profiles to authenticated;

-- Create the profile automatically when someone signs up, using the name and opt-in from the form
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare opt boolean := coalesce((new.raw_user_meta_data ->> 'marketing_opt_in')::boolean, false);
begin
  insert into public.profiles (id, email, first_name, marketing_opt_in, opt_in_at)
  values (
    new.id,
    new.email,
    nullif(left(trim(coalesce(new.raw_user_meta_data ->> 'first_name', '')), 60), ''),
    opt,
    case when opt then now() end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Profiles for anyone who already signed in (for example the admin)
insert into public.profiles (id, email) select id, email from auth.users on conflict (id) do nothing;

-- Connect a browser's anonymous history to the person who just signed in
create or replace function public.link_visitor(vid uuid) returns void
language sql security definer set search_path = public as $$
  update public.visitors set user_id = auth.uid()
  where id = vid and user_id is null and auth.uid() is not null;
$$;
revoke all on function public.link_visitor(uuid) from public, anon;
grant execute on function public.link_visitor(uuid) to authenticated;

-- Let people delete their own account and data
create or replace function public.delete_me() returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  delete from public.visitors where user_id = auth.uid();
  delete from auth.users where id = auth.uid();
end;
$$;
revoke all on function public.delete_me() from public, anon;
grant execute on function public.delete_me() to authenticated;

-- Dashboard numbers, now with sign-ups and leads
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
      'waitlist',       (select count(distinct visitor_id) from events where type = 'waitlist'),
      'signups',        (select count(*) from profiles p where not exists (select 1 from admins a where a.email = p.email)),
      'signups_7d',     (select count(*) from profiles p where p.created_at > now() - interval '7 days'
                          and not exists (select 1 from admins a where a.email = p.email)),
      'opted_in',       (select count(*) from profiles p where p.marketing_opt_in
                          and not exists (select 1 from admins a where a.email = p.email))
    ),
    'daily', (select coalesce(json_agg(d order by d.day), '[]'::json) from (
      select gs::date as day,
        (select count(*) from visitors v where v.first_seen::date = gs::date) as new_visitors,
        (select count(distinct e.visitor_id) from events e where e.created_at::date = gs::date) as active,
        (select count(*) from profiles p where p.created_at::date = gs::date) as signups
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
      limit 500
    ) c),
    'sources', (select coalesce(json_agg(s order by s.visitors desc), '[]'::json) from (
      select coalesce(nullif(referrer, ''), 'direct') as source, count(*) as visitors from visitors group by 1
    ) s),
    'devices', (select coalesce(json_agg(dv order by dv.visitors desc), '[]'::json) from (
      select coalesce(device, 'unknown') as device, count(*) as visitors from visitors group by 1
    ) dv),
    'recent', (select coalesce(json_agg(r), '[]'::json) from (
      select v.id, v.first_seen, v.themes, v.device, v.referrer, (v.user_id is not null) as signed_up,
        (select max(e.created_at) from events e where e.visitor_id = v.id) as last_seen,
        (select count(*) from events e where e.visitor_id = v.id and e.type in ('keep','skip','deeper')) as cards,
        (select count(*) from events e where e.visitor_id = v.id and e.type = 'deeper') as deeper
      from visitors v order by v.first_seen desc limit 50
    ) r),
    'leads', (select coalesce(json_agg(l order by l.created_at desc), '[]'::json) from (
      select p.email, p.first_name, p.marketing_opt_in, p.opt_in_at, p.created_at,
        coalesce((select v.themes from visitors v where v.user_id = p.id order by v.first_seen limit 1),
                 array(select jsonb_array_elements_text(p.progress -> 'picked'))) as themes,
        (select coalesce(nullif(v.referrer, ''), 'direct') from visitors v where v.user_id = p.id order by v.first_seen limit 1) as source,
        (select max(e.created_at) from events e join visitors v on v.id = e.visitor_id where v.user_id = p.id) as last_seen,
        coalesce(jsonb_array_length(p.progress -> 'seen'), 0) as cards_seen,
        coalesce(jsonb_array_length(p.progress -> 'holes'), 0) as rabbit_holes
      from profiles p
      where not exists (select 1 from admins a where a.email = p.email)
      order by p.created_at desc
      limit 5000
    ) l)
  ) into result;

  return result;
end;
$$;

revoke all on function public.admin_stats(int) from public, anon;
grant execute on function public.admin_stats(int) to authenticated;

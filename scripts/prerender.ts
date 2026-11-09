// Runs after `vite build`. Writes a real, crawlable HTML page for every card and theme,
// plus sitemap.xml, llms.txt and llms-full.txt, so search engines and AI assistants can
// read CurioUS without running JavaScript. New cards get pages automatically on every deploy.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { cards, themes, truthLabels, type Card, type Theme } from '../src/content';

const SITE = 'https://www.swipecurious.com';
const OUT = 'dist';
const today = new Date().toISOString().slice(0, 10);

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n - 1)) + '…');
const themeOf = (c: Card) => themes.find(t => t.id === c.theme)!;
const cardUrl = (c: Card) => `${SITE}/cards/${c.id}`;
const themeUrl = (t: Theme) => `${SITE}/themes/${t.id}`;
const ld = (o: object) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`;

const org = { '@type': 'Organization', name: 'CurioUS', url: SITE, parentOrganization: { '@type': 'Organization', name: 'Modish' } };

const css = `
*{box-sizing:border-box}body{margin:0;font:17px/1.6 'Schibsted Grotesk',system-ui,sans-serif;color:#000;background:#fff;-webkit-font-smoothing:antialiased}
a{color:inherit}header.top{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;max-width:760px;margin:0 auto}
.wm{font-weight:500;letter-spacing:-.04em;font-size:24px;text-decoration:none}.wm b{font-weight:800}
.cta{background:#000;color:#fff;text-decoration:none;font-weight:600;padding:10px 18px;border-radius:12px;font-size:15px}
.hero{color:#fff;padding:56px 20px 36px}.hero>div{max-width:720px;margin:0 auto}
.crumbs{font-size:14px;opacity:.85}.crumbs a{text-decoration:none}
h1{font-size:clamp(30px,6vw,46px);line-height:1.05;letter-spacing:-.035em;margin:14px 0 0}
.meta{display:flex;gap:14px;align-items:center;font-size:14px;font-weight:600;margin-top:14px}
.dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
main{max-width:720px;margin:0 auto;padding:28px 20px 48px}
.lead{font-size:20px;line-height:1.5}h2{font-size:24px;letter-spacing:-.025em;margin:40px 0 10px}
h3{font-size:18px;margin:20px 0 4px}p{margin:0 0 12px;color:#2b2b2a}ol,ul{padding-left:22px}li{margin-bottom:8px}
details{background:#f2f2f0;border-radius:14px;padding:14px 16px;margin:10px 0}summary{font-weight:600;cursor:pointer}
.note{font-size:14px;color:#6e6e6b}.band{background:#f2f2f0;border-radius:18px;padding:22px;margin-top:40px}
.band .cta{display:inline-block;margin-top:8px}.list{list-style:none;padding:0}.list li{border-top:1px solid #e4e4e1;padding:14px 0;margin:0}
.list a{font-weight:650;text-decoration:none;letter-spacing:-.015em}.list p{font-size:15px;margin:4px 0 0}
footer{max-width:720px;margin:0 auto;padding:24px 20px 40px;font-size:14px;color:#6e6e6b}footer a{margin-right:14px}
`;

const truthColour = { established: '#12a37c', debated: '#f08a00', speculative: '#9d5cff' } as const;
const heroBg = (hue: number) =>
  `background:radial-gradient(60% 90% at 85% 0%,hsl(${hue} 85% 58%),transparent 70%),radial-gradient(60% 90% at 0% 100%,hsl(${(hue + 40) % 360} 80% 45%),transparent 70%),hsl(${hue} 70% 14%)`;

function page(o: { title: string; description: string; url: string; body: string; jsonld: object[] }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}" />
<link rel="canonical" href="${o.url}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="CurioUS" />
<meta property="og:url" content="${o.url}" />
<meta property="og:title" content="${esc(o.title)}" />
<meta property="og:description" content="${esc(o.description)}" />
<meta property="og:image" content="${SITE}/og.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>${css}</style>
${o.jsonld.map(ld).join('\n')}
</head>
<body>
<header class="top"><a class="wm" href="/" aria-label="CurioUS home">curio<b>US</b></a><a class="cta" href="/">Open the app</a></header>
${o.body}
<footer><a href="/">Home</a><a href="/explore">Explore all cards</a><a href="/privacy">Privacy</a>${themes.map(t => `<a href="/themes/${t.id}">${esc(t.name)}</a>`).join('')}<p>CurioUS is a Modish experiment. Every card tells you how sure we are: Established, Debated or Speculative.</p></footer>
</body>
</html>`;
}

const truthTag = (c: Card) =>
  `<span><i class="dot" style="background:${truthColour[c.truth]}"></i>${truthLabels[c.truth].name}</span>`;

function cardPage(c: Card) {
  const t = themeOf(c);
  const related = cards.filter(x => x.theme === c.theme && x.id !== c.id).slice(0, 6);
  const body = `
<section class="hero" style="${heroBg(t.hue)}"><div>
<nav class="crumbs"><a href="/explore">Explore</a> › <a href="/themes/${t.id}">${esc(t.name)}</a></nav>
<h1>${esc(c.hook)}</h1>
<div class="meta"><span>${esc(t.name)}</span>${truthTag(c)}</div>
</div></section>
<main>
<p class="lead">${esc(c.body)}</p>
<p class="note">Truth label: <strong>${truthLabels[c.truth].name}</strong>. ${esc(truthLabels[c.truth].meaning)}</p>
<h2>Go deeper</h2>
${c.deeper.map(d => `<h3>${esc(d.title)}</h3><p>${esc(d.body)}</p>`).join('\n')}
<h2>Learn</h2>
<ol>${c.learn.map(l => `<li><strong>${esc(l.step)}.</strong> ${esc(l.body)}</li>`).join('')}</ol>
<h2>Test yourself</h2>
${c.quiz.map(q => `<details><summary>${esc(q.q)}</summary><p><strong>${esc(q.options[q.answer])}.</strong> ${esc(q.why)}</p></details>`).join('\n')}
<h2>Sources</h2>
<ul>${c.sources.map(s => `<li><a href="${esc(s.url)}" rel="noopener">${esc(s.label)}</a></li>`).join('')}</ul>
<div class="band"><h2 style="margin-top:0">Swipe more like this</h2><p>CurioUS is a feed you steer. Pick what you're curious about and every swipe tunes what comes next.</p><a class="cta" href="/?card=${c.id}">Open this card in the app</a></div>
${related.length ? `<h2>More from ${esc(t.name)}</h2><ul class="list">${related.map(r => `<li><a href="/cards/${r.id}">${esc(r.hook)}</a></li>`).join('')}</ul>` : ''}
</main>`;
  return page({
    title: `${clip(c.hook, 70)} | CurioUS`,
    description: clip(c.body, 155),
    url: cardUrl(c),
    body,
    jsonld: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: clip(c.hook, 110),
        description: c.body,
        articleSection: t.name,
        url: cardUrl(c),
        mainEntityOfPage: cardUrl(c),
        inLanguage: 'en',
        isAccessibleForFree: true,
        dateModified: today,
        author: org,
        publisher: org,
        image: `${SITE}/og.jpg`,
        citation: c.sources.map(s => ({ '@type': 'CreativeWork', name: s.label, url: s.url })),
        keywords: [t.name, truthLabels[c.truth].name].join(', '),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: c.quiz.map(q => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: { '@type': 'Answer', text: `${q.options[q.answer]}. ${q.why}` },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Explore', item: `${SITE}/explore` },
          { '@type': 'ListItem', position: 2, name: t.name, item: themeUrl(t) },
          { '@type': 'ListItem', position: 3, name: clip(c.hook, 80), item: cardUrl(c) },
        ],
      },
    ],
  });
}

function themePage(t: Theme) {
  const list = cards.filter(c => c.theme === t.id);
  const body = `
<section class="hero" style="${heroBg(t.hue)}"><div>
<nav class="crumbs"><a href="/explore">Explore</a></nav>
<h1>${esc(t.name)}</h1>
<div class="meta"><span>${esc(t.line)}</span><span>${list.length} cards</span></div>
</div></section>
<main>
<p class="lead">Short, surprising cards on ${esc(t.name.toLowerCase())}. Each one is labelled Established, Debated or Speculative, so you always know how solid the evidence is.</p>
<ul class="list">${list.map(c => `<li><a href="/cards/${c.id}">${esc(c.hook)}</a><p>${truthLabels[c.truth].name}. ${esc(clip(c.body, 140))}</p></li>`).join('')}</ul>
<div class="band"><h2 style="margin-top:0">Make ${esc(t.name)} part of your feed</h2><p>Pick it as a theme in CurioUS and the feed will lean towards it as you swipe.</p><a class="cta" href="/">Start exploring</a></div>
</main>`;
  return page({
    title: `${t.name}: ${t.line} | CurioUS`,
    description: clip(`${list.length} bite-size cards on ${t.name.toLowerCase()}. ${list.slice(0, 3).map(c => c.hook).join(' ')}`, 155),
    url: themeUrl(t),
    body,
    jsonld: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t.name,
        description: t.line,
        url: themeUrl(t),
        publisher: org,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: list.map((c, i) => ({ '@type': 'ListItem', position: i + 1, url: cardUrl(c), name: c.hook })),
        },
      },
    ],
  });
}

function explorePage() {
  const body = `
<section class="hero" style="${heroBg(262)}"><div>
<h1>Explore CurioUS</h1>
<div class="meta"><span>${themes.length} themes</span><span>${cards.length} cards</span></div>
</div></section>
<main>
<p class="lead">Hidden history, consciousness, sacred science, strange nature, space and the unexplained, in short cards that tell you how sure we are.</p>
${themes
  .map(t => {
    const list = cards.filter(c => c.theme === t.id);
    return `<h2><a href="/themes/${t.id}">${esc(t.name)}</a></h2><p class="note">${esc(t.line)}</p><ul class="list">${list.map(c => `<li><a href="/cards/${c.id}">${esc(c.hook)}</a></li>`).join('')}</ul>`;
  })
  .join('\n')}
</main>`;
  return page({
    title: 'Explore all cards | CurioUS',
    description: `Browse ${cards.length} bite-size cards across ${themes.length} themes: hidden history, consciousness, sacred science, nature, space and the unexplained.`,
    url: `${SITE}/explore`,
    body,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Explore CurioUS', url: `${SITE}/explore`, publisher: org }],
  });
}

// ── Write pages ──
mkdirSync(`${OUT}/cards`, { recursive: true });
mkdirSync(`${OUT}/themes`, { recursive: true });
for (const c of cards) writeFileSync(`${OUT}/cards/${c.id}.html`, cardPage(c));
for (const t of themes) writeFileSync(`${OUT}/themes/${t.id}.html`, themePage(t));
writeFileSync(`${OUT}/explore.html`, explorePage());

// ── Privacy policy ──
function privacyPage() {
  const body = `
<section class="hero" style="${heroBg(230)}"><div><h1>Privacy policy</h1><div class="meta"><span>Last updated ${today}</span></div></div></section>
<main>
<p class="lead">CurioUS is a free app made by Modish. We collect as little as we can, and we never sell your data.</p>
<h2>If you just use the app</h2>
<p>Your picks and progress are saved in your own browser. To understand what people enjoy, we also record anonymous usage: a random ID for your browser, the themes you pick, which cards you keep, skip or explore, quiz scores, your device type (mobile or desktop) and the website that sent you. This is not linked to your name or email.</p>
<h2>If you sign in</h2>
<p>When you save your progress, we store your email address, the first name you give us, and your progress, so you can pick up on any device. Your earlier anonymous usage on that browser is linked to your account.</p>
<h2>Emails</h2>
<p>We only send you sign-in links, unless you tick the box to receive occasional emails with new rabbit holes. You can untick it any time in the You tab, or use the unsubscribe link in any email.</p>
<h2>Who handles your data</h2>
<p>Data is stored with Supabase, our database provider, and the site is hosted by Vercel. Sign-in emails are sent by our email provider. They process data only to run CurioUS.</p>
<h2>Your choices</h2>
<p>You can delete your account and everything saved with it from the You tab at any time. To clear anonymous data from a browser, use "Start fresh" in the You tab or clear your browser storage. For any question or request, email <a href="mailto:adelina@modishsocial.com">adelina@modishsocial.com</a>.</p>
</main>`;
  return page({ title: 'Privacy policy | CurioUS', description: 'What CurioUS collects, why, and how to delete your data.', url: `${SITE}/privacy`, body, jsonld: [] });
}
writeFileSync(`${OUT}/privacy.html`, privacyPage());

// ── Homepage: crawlable content inside #root (React replaces it when the app loads) ──
const indexPath = `${OUT}/index.html`;
const index = readFileSync(indexPath, 'utf8');
const homeStatic = `<div id="root"><main style="max-width:640px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif">
<h1>CurioUS: the feed you steer</h1>
<p>Short, surprising cards about hidden history, consciousness, sacred science, strange nature, space and the unexplained. Every swipe tunes your feed, and every card is labelled Established, Debated or Speculative so you know how sure we are.</p>
<h2>Themes</h2><ul>${themes.map(t => `<li><a href="/themes/${t.id}">${esc(t.name)}</a>: ${esc(t.line)}</li>`).join('')}</ul>
<h2>Popular cards</h2><ul>${themes.map(t => cards.find(c => c.theme === t.id)).filter(Boolean).map(c => `<li><a href="/cards/${c!.id}">${esc(c!.hook)}</a></li>`).join('')}</ul>
<p><a href="/explore">Explore all ${cards.length} cards</a></p>
</main></div>`;
writeFileSync(indexPath, index.replace('<div id="root"></div>', homeStatic));

// ── sitemap.xml ──
const urls = [
  { loc: `${SITE}/`, pri: '1.0' },
  { loc: `${SITE}/explore`, pri: '0.9' },
  ...themes.map(t => ({ loc: themeUrl(t), pri: '0.8' })),
  ...cards.map(c => ({ loc: cardUrl(c), pri: '0.7' })),
];
writeFileSync(
  `${OUT}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(u => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.pri}</priority></url>`)
    .join('\n')}\n</urlset>\n`,
);

// ── llms.txt (index for AI assistants) and llms-full.txt (all card text) ──
writeFileSync(
  `${OUT}/llms.txt`,
  `# CurioUS

> CurioUS (swipecurious.com) is a free web app of short, surprising cards about hidden history, lost knowledge, consciousness, sacred science, strange nature, space and the unexplained. People pick themes and swipe; every swipe tunes their feed. Every card carries an honest truth label: Established (strong evidence, broad expert agreement), Debated (serious people disagree, both sides shown) or Speculative (an idea without solid evidence yet). Cards cite their sources. A Modish experiment.

- [Explore all cards](${SITE}/explore): every theme and card in one place
- [Full text of every card](${SITE}/llms-full.txt): plain-text version for AI assistants

## Themes
${themes.map(t => `- [${t.name}](${themeUrl(t)}): ${t.line}`).join('\n')}

## Cards
${cards.map(c => `- [${c.hook}](${cardUrl(c)}): ${themeOf(c).name}, ${truthLabels[c.truth].name}`).join('\n')}
`,
);
writeFileSync(
  `${OUT}/llms-full.txt`,
  `# CurioUS: full card text\n\nSource: ${SITE}. Truth labels: Established, Debated, Speculative.\n\n` +
    cards
      .map(
        c => `## ${c.hook}
URL: ${cardUrl(c)}
Theme: ${themeOf(c).name}. Truth label: ${truthLabels[c.truth].name}.

${c.body}

${c.deeper.map(d => `${d.title}: ${d.body}`).join('\n')}
${c.learn.map(l => `${l.step}: ${l.body}`).join('\n')}
${c.quiz.map(q => `Q: ${q.q} A: ${q.options[q.answer]}. ${q.why}`).join('\n')}
Sources: ${c.sources.map(s => `${s.label} (${s.url})`).join('; ')}
`,
      )
      .join('\n'),
);

console.log(`prerendered ${cards.length} cards, ${themes.length} themes, sitemap with ${urls.length} urls`);

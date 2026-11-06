// ─────────────────────────────────────────────────────────────
// CurioUS content
// Everything people read in the app lives in this one file.
// Edit text freely. Keep the shape of each entry the same.
//
// truth: "established" | "debated" | "speculative"
// image: optional. Paste any image URL to replace the pattern art.
// sources: starter links are overviews. Swap in primary sources as you check each card.
// ─────────────────────────────────────────────────────────────

export type Truth = 'established' | 'debated' | 'speculative';

export type ThemeId = 'history' | 'knowledge' | 'nature' | 'space' | 'unexplained' | 'consciousness' | 'sacred';

export interface Theme {
  id: ThemeId;
  name: string;
  line: string;
  hue: number; // drives the card colours
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number; // index of the right option
  why: string;
}

export interface Card {
  id: string;
  theme: ThemeId;
  truth: Truth;
  hook: string; // the headline question or statement
  body: string; // 2 to 3 sentences
  image?: string;
  deeper: { title: string; body: string }[];
  learn: { step: string; body: string; branches?: string[] }[];
  quiz: QuizQuestion[];
  sources: { label: string; url: string }[];
}

export const themes: Theme[] = [
  { id: 'history', name: 'Hidden History', line: 'What the textbooks skipped', hue: 18 },
  { id: 'knowledge', name: 'Lost Knowledge', line: 'Ancient minds, surprising tools', hue: 268 },
  { id: 'nature', name: 'Strange Nature', line: 'Life that breaks the rules', hue: 162 },
  { id: 'space', name: 'Space & Time', line: 'The scale of everything', hue: 222 },
  { id: 'unexplained', name: 'Unexplained', line: 'Open questions, honest answers', hue: 338 },
  { id: 'consciousness', name: 'Consciousness', line: 'The mind and what we can\'t explain yet', hue: 292 },
  { id: 'sacred', name: 'Sacred Science', line: 'Where pattern, sound and spirit meet', hue: 48 },
];

export const truthLabels: Record<Truth, { name: string; meaning: string }> = {
  established: { name: 'Established', meaning: 'Strong evidence and broad agreement among experts.' },
  debated: { name: 'Debated', meaning: 'Serious people disagree. You get both sides.' },
  speculative: { name: 'Speculative', meaning: 'A fascinating idea without solid evidence yet.' },
};

export const cards: Card[] = [
  {
    id: 'gobekli-tepe',
    theme: 'history',
    truth: 'established',
    hook: 'Someone built a stone temple 6,000 years before Stonehenge.',
    body: 'Göbekli Tepe in southern Turkey is around 11,600 years old. Its giant T-shaped pillars are carved with foxes, boars and vultures. The builders were hunter-gatherers, before farming was supposed to make monuments possible.',
    deeper: [
      { title: 'Before farming', body: 'The old story said people settled, farmed, then built temples. Göbekli Tepe suggests gathering came first, and farming may have followed to feed the crowds.' },
      { title: 'The pillars are people', body: 'Some pillars have carved arms and hands wrapping around the front, with belts and loincloths. They may represent ancestors or spirits.' },
      { title: 'Most of it is still underground', body: 'Geophysical surveys suggest only a small part of the site has been excavated. Nearby Karahan Tepe shows it was not alone.' },
    ],
    learn: [
      { step: 'Where and when', body: 'A hilltop near Şanlıurfa, Turkey. The oldest layers date to roughly 9600 BCE, right after the last Ice Age ended.', branches: ['Why the Ice Age matters', 'Who found it'] },
      { step: 'What it looks like', body: 'Circular enclosures ringed with stone pillars up to 5.5 metres tall, with two larger pillars standing in the centre of each.' },
      { step: 'Why it changed the story', body: 'It pushed the start of monumental building back by thousands of years and raised a big question: what else have we underestimated?' },
    ],
    quiz: [
      { q: 'Roughly how old is Göbekli Tepe?', options: ['3,000 years', '5,000 years', '11,600 years'], answer: 2, why: 'Its oldest layers date to around 9600 BCE.' },
      { q: 'Who built it?', options: ['Farmers', 'Hunter-gatherers', 'Roman engineers'], answer: 1, why: 'There is no sign of farmed crops or domesticated animals at the site.' },
    ],
    sources: [{ label: 'Göbekli Tepe overview', url: 'https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe' }],
  },
  {
    id: 'antikythera',
    theme: 'knowledge',
    truth: 'established',
    hook: 'The ancient Greeks built a pocket computer for the sky.',
    body: 'In 1901 divers found a lump of corroded bronze in a shipwreck off the island of Antikythera. Inside were dozens of precise gears. It could predict eclipses and track the planets, more than 2,000 years ago.',
    deeper: [
      { title: 'Nothing like it for a thousand years', body: 'Gearing this complex does not appear again in the historical record until medieval astronomical clocks.' },
      { title: 'It ran on a hand crank', body: 'Turn the handle and dials showed the date, the phase of the moon and upcoming eclipses.' },
      { title: 'It even tracked the Olympics', body: 'One small dial counted down the four-year cycle of the Panhellenic games.' },
    ],
    learn: [
      { step: 'What survives', body: '82 fragments and around 30 surviving bronze gears, the largest about 13 cm across.', branches: ['How they scanned it'] },
      { step: 'How it worked', body: 'Interlocking gears turned in ratios matching known astronomical cycles that Babylonian astronomers had recorded.' },
      { step: 'Why it matters', body: 'It shows ancient technical skill was far more advanced than surviving objects usually suggest.' },
    ],
    quiz: [
      { q: 'Where was the mechanism found?', options: ['In a tomb', 'In a shipwreck', 'In a library'], answer: 1, why: 'Sponge divers found it in a Roman-era wreck in 1901.' },
      { q: 'What could it predict?', options: ['Earthquakes', 'Eclipses', 'The weather'], answer: 1, why: 'Its gears modelled the cycles of the sun and moon.' },
    ],
    sources: [{ label: 'Antikythera mechanism overview', url: 'https://en.wikipedia.org/wiki/Antikythera_mechanism' }],
  },
  {
    id: 'mammoths',
    theme: 'history',
    truth: 'established',
    hook: 'Woolly mammoths were still alive when the Great Pyramid was built.',
    body: 'The Great Pyramid of Giza was finished around 4,500 years ago. A small population of mammoths survived on Wrangel Island in the Arctic until about 4,000 years ago.',
    deeper: [
      { title: 'An island refuge', body: 'Rising seas cut Wrangel Island off from the mainland, and its mammoths outlived the rest by thousands of years.' },
      { title: 'Cleopatra is closer to us', body: 'Cleopatra lived nearer in time to the Moon landing than to the building of the Great Pyramid.' },
    ],
    learn: [
      { step: 'Timelines overlap', body: 'We picture "prehistoric" and "ancient" as separate eras. In reality they ran side by side in different places.' },
      { step: 'Why they vanished', body: 'Small, isolated populations lose genetic diversity, making them fragile when something changes.', branches: ['What DNA tells us'] },
    ],
    quiz: [
      { q: 'Which came first?', options: ['The Great Pyramid', 'The last mammoths dying out'], answer: 0, why: 'The pyramid is roughly 500 years older than the last mammoths.' },
    ],
    sources: [{ label: 'Wrangel Island mammoths', url: 'https://en.wikipedia.org/wiki/Wrangel_Island' }],
  },
  {
    id: 'octopus',
    theme: 'nature',
    truth: 'established',
    hook: 'An octopus tastes with its arms.',
    body: 'Octopus suckers are lined with receptors that taste what they touch. About two thirds of an octopus\'s neurons sit in its arms, so each arm can explore and decide on its own.',
    deeper: [
      { title: 'Nine brains, sort of', body: 'There is a central brain plus a cluster of nerves in each of the eight arms that acts almost like a mini brain.' },
      { title: 'Blue blood, three hearts', body: 'Their blood uses copper rather than iron to carry oxygen, which turns it blue.' },
    ],
    learn: [
      { step: 'Touch is taste', body: 'Special receptors in the suckers detect chemicals, so grabbing food and tasting it happen at once.' },
      { step: 'Distributed thinking', body: 'An arm can keep reacting even when cut off from the brain, which is why scientists call octopus intelligence "distributed".', branches: ['Octopus problem solving'] },
    ],
    quiz: [
      { q: 'Where are most of an octopus\'s neurons?', options: ['In its head', 'In its arms', 'In its heart'], answer: 1, why: 'Around two thirds of them are in the arms.' },
    ],
    sources: [{ label: 'Octopus overview', url: 'https://en.wikipedia.org/wiki/Octopus' }],
  },
  {
    id: 'tardigrades',
    theme: 'nature',
    truth: 'established',
    hook: 'There is an animal that can survive the vacuum of space.',
    body: 'Tardigrades, or water bears, are about half a millimetre long. In 2007 scientists sent them into orbit, exposed to open space, and some came back alive and went on to have babies.',
    deeper: [
      { title: 'They dry themselves out', body: 'When conditions get harsh they curl into a "tun", losing almost all their water and slowing their metabolism to almost nothing.' },
      { title: 'They are everywhere', body: 'Moss in your garden almost certainly has some.' },
    ],
    learn: [
      { step: 'Tough by design', body: 'In their dried state they can survive extreme cold, heat, pressure and radiation.' },
      { step: 'Not invincible', body: 'Active tardigrades are far more fragile. Their superpower is pausing life, not ignoring danger.' },
    ],
    quiz: [
      { q: 'What do tardigrades do to survive?', options: ['Grow a shell', 'Dry out into a tun', 'Hibernate underground'], answer: 1, why: 'Losing water lets them pause their metabolism.' },
    ],
    sources: [{ label: 'Tardigrade overview', url: 'https://en.wikipedia.org/wiki/Tardigrade' }],
  },
  {
    id: 'oracle-bones',
    theme: 'knowledge',
    truth: 'established',
    hook: 'Kings once asked questions of the future by cracking bones with fire.',
    body: 'In Shang dynasty China, around 3,200 years ago, diviners carved questions into ox bones and turtle shells, then heated them until they cracked. The cracks were read as answers.',
    deeper: [
      { title: 'The oldest Chinese writing', body: 'The carved questions are the earliest large body of Chinese writing we have. Many characters are still recognisable today.' },
      { title: 'Found by accident', body: 'For years the bones were ground up and sold as "dragon bones" for medicine, until a scholar noticed the writing in 1899.' },
      { title: 'Try it soon', body: 'Ancient ways of reading the unknown are coming to CurioUS. Tap the bookmark to hear first.' },
    ],
    learn: [
      { step: 'What they asked', body: 'Will it rain? Will the harvest be good? Will the king\'s toothache pass? Small questions sit beside matters of state.' },
      { step: 'How it worked', body: 'Hollows were drilled into the back of the bone, heat was applied, and a crack shaped like the character 卜 appeared.', branches: ['The meaning of 卜'] },
    ],
    quiz: [
      { q: 'What were oracle bones mostly made from?', options: ['Ox bones and turtle shells', 'Human bones', 'Jade'], answer: 0, why: 'Cattle shoulder blades and turtle plastrons were the main materials.' },
    ],
    sources: [{ label: 'Oracle bones overview', url: 'https://en.wikipedia.org/wiki/Oracle_bone' }],
  },
  {
    id: 'venus-day',
    theme: 'space',
    truth: 'established',
    hook: 'A day on Venus is longer than its year.',
    body: 'Venus takes about 243 Earth days to spin once, but only 225 days to go around the Sun. It also spins backwards, so the Sun rises in the west.',
    deeper: [
      { title: 'Why backwards?', body: 'One idea is that a huge collision long ago flipped it. Another is that its thick atmosphere slowly dragged its spin around.' },
    ],
    learn: [
      { step: 'Day versus year', body: 'A day is one spin on its axis. A year is one trip around the Sun. On Venus, the spin is slower than the trip.' },
      { step: 'A runaway greenhouse', body: 'Its atmosphere is so thick with carbon dioxide that the surface is hot enough to melt lead.' },
    ],
    quiz: [
      { q: 'On Venus, where does the Sun rise?', options: ['In the east', 'In the west', 'It never rises'], answer: 1, why: 'Venus spins in the opposite direction to most planets.' },
    ],
    sources: [{ label: 'Venus overview', url: 'https://en.wikipedia.org/wiki/Venus' }],
  },
  {
    id: 'andromeda-light',
    theme: 'space',
    truth: 'established',
    hook: 'The light from Andromeda left before humans existed.',
    body: 'On a dark night you can see the Andromeda galaxy with your bare eyes. That light set off around 2.5 million years ago, before our species walked the Earth.',
    deeper: [
      { title: 'Looking is time travel', body: 'Everything you see in the night sky is a view of the past. The further away, the older the picture.' },
    ],
    learn: [
      { step: 'Light takes time', body: 'Light travels about 300,000 km every second. Across the vastness of space, that still adds up to millions of years.' },
    ],
    quiz: [
      { q: 'Roughly how old is the Andromeda light you can see tonight?', options: ['2,500 years', '2.5 million years', '2.5 billion years'], answer: 1, why: 'Andromeda is about 2.5 million light years away.' },
    ],
    sources: [{ label: 'Andromeda Galaxy overview', url: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy' }],
  },
  {
    id: 'younger-dryas',
    theme: 'unexplained',
    truth: 'debated',
    hook: 'Did a comet end the last Ice Age, then bring it back?',
    body: 'Around 12,900 years ago, the world was warming fast. Then it suddenly plunged back into cold for about 1,200 years. Some researchers think a comet impact triggered it. Many others disagree.',
    deeper: [
      { title: 'The case for an impact', body: 'Supporters point to a layer of sediment at many sites with tiny spheres, platinum spikes and soot, which they say came from a cosmic event.' },
      { title: 'The case against', body: 'Critics say these markers are not found consistently, and that melting ice sheets changing ocean currents explain the cold snap well enough.' },
      { title: 'Why it matters', body: 'If true, a catastrophe hit just as people were on the edge of farming. It is at the heart of many "lost civilisation" theories.' },
    ],
    learn: [
      { step: 'What everyone agrees on', body: 'The sudden cold snap, called the Younger Dryas, really happened. The question is what caused it.' },
      { step: 'The two main explanations', body: 'A cosmic impact, or a flood of meltwater shutting down the Atlantic currents that keep the north warm.', branches: ['The meltwater theory', 'The impact evidence'] },
      { step: 'What would settle it', body: 'A crater of the right age, or impact markers found consistently at the same moment worldwide.' },
    ],
    quiz: [
      { q: 'Which part of this story is established?', options: ['A comet hit Earth', 'A sudden cold snap happened', 'A civilisation was lost'], answer: 1, why: 'The cold snap is well documented. Its cause is what is debated.' },
    ],
    sources: [
      { label: 'Younger Dryas impact hypothesis, both sides', url: 'https://en.wikipedia.org/wiki/Younger_Dryas_impact_hypothesis' },
    ],
  },
  {
    id: 'sphinx-erosion',
    theme: 'unexplained',
    truth: 'debated',
    hook: 'Is the Great Sphinx much older than we think?',
    body: 'Geologist Robert Schoch argued in the 1990s that deep weathering around the Sphinx was caused by heavy rainfall, which would point to a much earlier date. Most Egyptologists and many geologists reject this.',
    deeper: [
      { title: 'The rain argument', body: 'Rounded, rippled grooves in the enclosure walls look like water running down them over a very long time, in a climate much wetter than Egypt\'s for the last 5,000 years.' },
      { title: 'The mainstream view', body: 'The Sphinx is usually dated to Pharaoh Khafre, around 4,500 years ago. Critics say salt and soft limestone can weather this way without heavy rain.' },
    ],
    learn: [
      { step: 'Both sides agree', body: 'The Sphinx was carved directly out of the bedrock, and the rock it sits in is unusually soft and layered.' },
      { step: 'Where they split', body: 'Whether the weathering needs rain over thousands of years, or can be explained by salt, wind and occasional floods.' },
    ],
    quiz: [
      { q: 'What kind of evidence is the "older Sphinx" idea based on?', options: ['Written records', 'Weathering of the rock', 'Carbon dating'], answer: 1, why: 'The argument comes from how the limestone has worn away.' },
    ],
    sources: [{ label: 'Sphinx water erosion hypothesis', url: 'https://en.wikipedia.org/wiki/Sphinx_water_erosion_hypothesis' }],
  },
  {
    id: 'atlantis',
    theme: 'unexplained',
    truth: 'speculative',
    hook: 'Where did the story of Atlantis come from?',
    body: 'Atlantis first appears in two dialogues by the Greek philosopher Plato, written around 360 BCE. He describes a powerful island that sank in a single day. No archaeological trace of it has been found.',
    deeper: [
      { title: 'A lesson or a memory?', body: 'Many scholars read Atlantis as a moral tale about arrogance. Others think Plato was retelling a real event.' },
      { title: 'The Thera connection', body: 'A huge volcanic eruption on Santorini, around 3,600 years ago, devastated the Minoan world. Some see it as a seed of the legend.' },
    ],
    learn: [
      { step: 'The source', body: 'Everything starts with Plato\'s Timaeus and Critias. There are no earlier written mentions.' },
      { step: 'The candidates', body: 'Santorini, the Atlantic, Antarctica and many more. Each has its fans, and none has convincing evidence.' },
    ],
    quiz: [
      { q: 'Who first wrote about Atlantis?', options: ['Homer', 'Plato', 'Herodotus'], answer: 1, why: 'It appears in Plato\'s dialogues Timaeus and Critias.' },
    ],
    sources: [{ label: 'Atlantis overview', url: 'https://en.wikipedia.org/wiki/Atlantis' }],
  },
  {
    id: 'immortal-jellyfish',
    theme: 'nature',
    truth: 'established',
    hook: 'One jellyfish can turn itself young again.',
    body: 'When injured or stressed, Turritopsis dohrnii can turn back into an earlier life stage and start over. In theory it can do this again and again.',
    deeper: [
      { title: 'Not truly immortal', body: 'It still gets eaten and catches diseases. But ageing alone does not have to end it.' },
    ],
    learn: [
      { step: 'Running life backwards', body: 'The adult reverts to a blob-like polyp, which then grows into a fresh colony of jellyfish.' },
    ],
    quiz: [
      { q: 'What can the "immortal jellyfish" do?', options: ['Live without water', 'Revert to an earlier life stage', 'Regrow its brain'], answer: 1, why: 'It can transform back into a polyp and begin again.' },
    ],
    sources: [{ label: 'Turritopsis dohrnii overview', url: 'https://en.wikipedia.org/wiki/Turritopsis_dohrnii' }],
  },
  // ── Consciousness ─────────────────────────────────────────
  {
    id: 'gateway-process',
    theme: 'consciousness',
    truth: 'established',
    hook: 'The US Army once wrote a report on leaving your body.',
    body: 'In 1983, Army intelligence officer Lt. Col. Wayne McDonnell assessed the Gateway Process, a meditation method taught at the Monroe Institute in Virginia. The report was declassified in 2003 and went viral two decades later. The document is real. What it describes is not proven.',
    deeper: [
      { title: 'What Gateway is', body: 'A training programme using sound, breathing and focus to reach deep, altered states. Its creator, Robert Monroe, wrote about his own out-of-body experiences.' },
      { title: 'What the report argues', body: 'McDonnell explains the method using ideas from physics, including holograms and energy fields. It is one officer\'s analysis, written to judge whether the method was worth exploring.' },
      { title: 'The missing page', body: 'Page 25 was missing from the public copy for years, which fuelled endless theories. It surfaced in 2021 and turned out to be fairly ordinary.' },
    ],
    learn: [
      { step: 'The sound trick', body: 'Gateway uses "binaural beats": a slightly different tone in each ear, which the brain hears as a third, pulsing beat.', branches: ['Do binaural beats change brainwaves?'] },
      { step: 'Why the military cared', body: 'During the Cold War, US agencies explored many unusual ideas in case rivals were ahead. Gateway was looked at alongside remote viewing.' },
      { step: 'How to read it', body: 'The report proves the Army took the method seriously enough to study it. It does not prove that out-of-body travel works.' },
    ],
    quiz: [
      { q: 'What does the 1983 Gateway report prove?', options: ['Astral projection is real', 'The Army studied the method', 'The CIA invented meditation'], answer: 1, why: 'The report shows official interest, not that the experiences are real.' },
      { q: 'What sound technique does Gateway use?', options: ['Binaural beats', 'Silence', 'Chanting in Latin'], answer: 0, why: 'A different tone in each ear creates a perceived beat.' },
    ],
    sources: [{ label: 'The 1983 report, full text', url: 'https://archive.org/details/1983-analysis-of-gateway-process' }],
  },
  {
    id: 'stargate',
    theme: 'consciousness',
    truth: 'established',
    hook: 'For over 20 years, the US government paid people to spy with their minds.',
    body: 'From the early 1970s to 1995, US agencies funded research into "remote viewing": describing a distant place using only the mind. By the end it was called the Stargate Project. A 1995 review split down the middle, and the programme was shut down.',
    deeper: [
      { title: 'How a session worked', body: 'A viewer was given only a set of numbers linked to a hidden target, then sketched and described whatever came to mind.' },
      { title: 'Two experts, two verdicts', body: 'Statistician Jessica Utts concluded the effect was real. Psychologist Ray Hyman concluded it had not been shown. Both reviewed the same data.' },
      { title: 'Why it ended', body: 'The final report said remote viewing had never produced intelligence that was actually useful in an operation.' },
    ],
    learn: [
      { step: 'Where it began', body: 'Early experiments ran at the Stanford Research Institute in California, partly out of fear the Soviet Union was ahead in psychic research.' },
      { step: 'What is established', body: 'The programme existed, ran for decades and is now documented in declassified files.' },
      { step: 'What is still debated', body: 'Whether any viewer did better than chance in a way that can be repeated under strict conditions.', branches: ['How the experiments were scored'] },
    ],
    quiz: [
      { q: 'What was remote viewing meant to do?', options: ['Read minds', 'Describe distant places', 'Predict the weather'], answer: 1, why: 'Viewers tried to describe hidden targets far away.' },
    ],
    sources: [
      { label: 'Stargate Project overview', url: 'https://en.wikipedia.org/wiki/Stargate_Project' },
      { label: 'Federation of American Scientists', url: 'https://irp.fas.org/program/collect/stargate.htm' },
    ],
  },
  {
    id: 'monk-gamma',
    theme: 'consciousness',
    truth: 'established',
    hook: 'Long-time meditators produce brainwaves most people rarely reach.',
    body: 'In 2004, neuroscientists in Wisconsin measured Tibetan Buddhist practitioners with tens of thousands of hours of meditation. During compassion meditation, their brains produced strong, synchronised gamma waves, far beyond what beginners showed.',
    deeper: [
      { title: 'What gamma waves are', body: 'Fast brain rhythms linked with focus and binding information together. They are usually brief and patchy.' },
      { title: 'Practice changes the brain', body: 'The more hours someone had practised, the stronger the effect. It suggests attention can be trained like a muscle.' },
      { title: 'The limits', body: 'It was a small study of very experienced monks. It shows what is possible, not what a ten-minute app session does.' },
    ],
    learn: [
      { step: 'Brainwaves in brief', body: 'Delta is deep sleep, theta drowsiness, alpha calm rest, beta alert thinking, gamma high focus.', branches: ['What alpha waves do'] },
      { step: 'Neuroplasticity', body: 'The brain rewires with use throughout life. Meditation is one of the most studied ways of shaping it on purpose.' },
    ],
    quiz: [
      { q: 'What did the monks\' brains show during meditation?', options: ['Strong gamma waves', 'Almost no activity', 'Deep sleep waves'], answer: 0, why: 'Gamma activity was unusually strong and synchronised.' },
    ],
    sources: [{ label: 'Research on meditation', url: 'https://en.wikipedia.org/wiki/Research_on_meditation' }],
  },
  {
    id: 'open-placebo',
    theme: 'consciousness',
    truth: 'established',
    hook: 'A placebo can work even when you know it is a placebo.',
    body: 'In a 2010 Harvard study, people with irritable bowel syndrome were openly given sugar pills, clearly labelled as such. They still reported feeling better than a group given nothing. Expectation and ritual seem to shape how we feel.',
    deeper: [
      { title: 'The ritual matters', body: 'Studies suggest the colour, price and even the way a treatment is given change how much people feel it helps.' },
      { title: 'What it is not', body: 'Placebos change how symptoms feel. They do not shrink tumours or cure infections, so they are no replacement for real care.' },
    ],
    learn: [
      { step: 'Why it happens', body: 'Expecting relief can trigger the brain\'s own chemistry, including natural painkillers.' },
      { step: 'The flip side', body: 'The "nocebo" effect is the opposite: expecting harm can make people feel worse.' },
    ],
    quiz: [
      { q: 'In the 2010 study, did patients know they were taking a placebo?', options: ['Yes', 'No'], answer: 0, why: 'The pills were openly labelled as sugar pills.' },
    ],
    sources: [{ label: 'Placebo overview', url: 'https://en.wikipedia.org/wiki/Placebo' }],
  },
  {
    id: 'aware-study',
    theme: 'consciousness',
    truth: 'debated',
    hook: 'Can awareness continue after the heart stops?',
    body: 'The AWARE study followed more than 2,000 cardiac arrests in hospitals across the UK, US and Austria. One patient accurately described events in the room during around three minutes without a heartbeat. Researchers disagree on what that means.',
    deeper: [
      { title: 'What patients reported', body: 'Of those well enough to be interviewed, a small share described fear, bright light, a sense of peace, or watching from above.' },
      { title: 'The case for', body: 'If accurate recall happens when the brain should not be working, it raises questions about how consciousness relates to the brain.' },
      { title: 'The case against', body: 'Critics point out it was one case, and the brain may keep some activity, or memories may form as people recover.' },
    ],
    learn: [
      { step: 'The hidden images', body: 'Researchers placed pictures on high shelves, visible only from above. No patient who reported watching from above was in a room with one.' },
      { step: 'Why it is hard to study', body: 'Cardiac arrests are unpredictable, and most survivors are too unwell to interview soon after.' },
    ],
    quiz: [
      { q: 'How many verified cases of recall did the study report?', options: ['None', 'One', 'Hundreds'], answer: 1, why: 'One patient\'s account could be checked against events.' },
    ],
    sources: [{ label: 'University of Southampton, 2014', url: 'https://www.southampton.ac.uk/news/2014/10/07-worlds-largest-near-death-experiences-study.page' }],
  },
  {
    id: 'global-consciousness',
    theme: 'consciousness',
    truth: 'speculative',
    hook: 'Do moments of mass emotion ripple through random numbers?',
    body: 'Since 1998, the Global Consciousness Project has run random number generators around the world. It asks whether big shared moments, like 9/11 or New Year\'s Eve, nudge them away from pure chance. Its founder says they do. Most scientists say the method cannot show it.',
    deeper: [
      { title: 'How it works', body: 'Dozens of devices produce random numbers every second. Researchers then check the output around major world events.' },
      { title: 'The criticism', body: 'Sceptics say the choice of which events and time windows to test leaves too much room to find patterns by accident.' },
    ],
    learn: [
      { step: 'The idea behind it', body: 'If minds are connected in some way, collective attention might leave a faint trace in physical systems.' },
      { step: 'What would convince sceptics', body: 'Predictions locked in before events happen, tested the same way every time.' },
    ],
    quiz: [
      { q: 'What does the project measure?', options: ['Heart rates', 'Random number generators', 'Earthquakes'], answer: 1, why: 'It looks for non-random patterns in random number devices.' },
    ],
    sources: [{ label: 'Global Consciousness Project overview', url: 'https://en.wikipedia.org/wiki/Global_Consciousness_Project' }],
  },
  {
    id: 'hard-problem',
    theme: 'consciousness',
    truth: 'debated',
    hook: 'Nobody can explain why you experience anything at all.',
    body: 'Science can map which brain areas light up when you see red. What it cannot yet explain is why there is an inner feeling of red at all. In 1995 philosopher David Chalmers called this "the hard problem of consciousness".',
    deeper: [
      { title: 'Easy versus hard', body: 'The "easy" problems are how the brain processes information. The hard one is why any of it feels like something from the inside.' },
      { title: 'The big camps', body: 'Some think consciousness comes from the brain. Others think it is a basic feature of the universe, present in some form everywhere.' },
    ],
    learn: [
      { step: 'Why it matters now', body: 'As AI grows more capable, the question of what has an inner life is no longer just philosophy.' },
    ],
    quiz: [
      { q: 'Who named "the hard problem of consciousness"?', options: ['Albert Einstein', 'David Chalmers', 'Carl Jung'], answer: 1, why: 'Chalmers framed it in 1995.' },
    ],
    sources: [{ label: 'Hard problem of consciousness', url: 'https://en.wikipedia.org/wiki/Hard_problem_of_consciousness' }],
  },

  // ── Sacred Science ────────────────────────────────────────
  {
    id: 'cymatics',
    theme: 'sacred',
    truth: 'established',
    hook: 'Sound can draw geometry.',
    body: 'In 1787, Ernst Chladni scattered sand on a metal plate and drew a violin bow along its edge. The sand jumped into intricate geometric patterns. Higher notes make more complex shapes.',
    deeper: [
      { title: 'Why it happens', body: 'The plate vibrates everywhere except along still lines called nodes. The sand is shaken off the moving parts and gathers on the still ones.' },
      { title: 'A prize for the maths', body: 'Napoleon was so struck by a demonstration that the French Academy offered a prize to explain it. Mathematician Sophie Germain won it in 1816.' },
      { title: 'Cymatics', body: 'In the 1960s, Hans Jenny filmed vibrations in sand, liquids and pastes and named the study "cymatics".' },
    ],
    learn: [
      { step: 'Try it yourself', body: 'A speaker, a thin metal plate and a pinch of salt is enough to see the patterns at home.' },
      { step: 'Where it shows up', body: 'Instrument makers use the same patterns to tune the backs of violins and guitars.' },
    ],
    quiz: [
      { q: 'Where does the sand gather on a Chladni plate?', options: ['Where it vibrates most', 'Along the still lines', 'Randomly'], answer: 1, why: 'Sand collects on the nodes, where the plate does not move.' },
    ],
    sources: [{ label: 'Cymatics overview', url: 'https://en.wikipedia.org/wiki/Cymatics' }],
  },
  {
    id: 'sunflower-fibonacci',
    theme: 'sacred',
    truth: 'established',
    hook: 'Sunflowers count in Fibonacci numbers.',
    body: 'Count the spirals in a sunflower head and you usually get two neighbouring Fibonacci numbers, like 34 and 55. Each new seed grows at about 137.5 degrees from the last, the "golden angle", which packs in the most seeds.',
    deeper: [
      { title: 'The sequence', body: 'Each number is the sum of the two before: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. The ratio between them closes in on the golden ratio, about 1.618.' },
      { title: 'Where it holds up', body: 'Pinecones, pineapples and many plants show the same spiral counts.' },
      { title: 'Where it does not', body: 'Claims that the Parthenon or the Mona Lisa were built on the golden ratio rest on choosing convenient measurements.' },
    ],
    learn: [
      { step: 'Why plants do it', body: 'Growing each new seed at the golden angle means none line up, so no space is wasted.' },
      { step: 'Spotting it', body: 'Look for two sets of spirals turning in opposite directions. Count each set.' },
    ],
    quiz: [
      { q: 'Which pair is consecutive Fibonacci numbers?', options: ['34 and 55', '30 and 50', '36 and 64'], answer: 0, why: '21 + 34 = 55.' },
      { q: 'Was the Parthenon proven to be built on the golden ratio?', options: ['Yes', 'No'], answer: 1, why: 'The evidence for that claim is weak.' },
    ],
    sources: [{ label: 'Golden angle', url: 'https://en.wikipedia.org/wiki/Golden_angle' }],
  },
  {
    id: 'music-of-spheres',
    theme: 'sacred',
    truth: 'established',
    hook: 'The ancient Greeks heard mathematics in music.',
    body: 'Followers of Pythagoras noticed that pleasing musical intervals come from simple ratios. Halve a string and it sounds an octave higher, 2:1. Two thirds of it gives a fifth, 3:2. From this grew the idea that the whole cosmos is tuned.',
    deeper: [
      { title: 'Music of the spheres', body: 'They imagined the planets moving in harmony, making a music we cannot hear. The ratios are real. The cosmic music is a poetic idea.' },
      { title: 'Kepler took it seriously', body: 'In 1619, astronomer Johannes Kepler wrote melodies for each planet based on its speed. In the same book, he found a true law of planetary motion.' },
    ],
    learn: [
      { step: 'The core ratios', body: 'Octave 2:1, fifth 3:2, fourth 4:3. These still shape almost every musical scale on Earth.' },
      { step: 'Why it was sacred', body: 'For Pythagoreans, number was the hidden order behind everything, so music was a way of hearing that order.', branches: ['Who were the Pythagoreans?'] },
    ],
    quiz: [
      { q: 'What ratio gives an octave?', options: ['3:2', '2:1', '4:3'], answer: 1, why: 'Halving a string doubles its pitch.' },
    ],
    sources: [{ label: 'Musica universalis', url: 'https://en.wikipedia.org/wiki/Musica_universalis' }],
  },
  {
    id: 'newgrange',
    theme: 'sacred',
    truth: 'established',
    hook: 'A 5,000-year-old tomb in Ireland lights up on the shortest day.',
    body: 'Newgrange was built around 3200 BCE, before the Great Pyramid. At sunrise around the winter solstice, a beam of light enters through a gap above the door, travels 19 metres down the passage and lights the chamber floor for about 17 minutes.',
    deeper: [
      { title: 'The roof-box', body: 'The light does not come through the door but through a specially built opening above it, angled precisely for the solstice.' },
      { title: 'The carvings', body: 'Huge stones at the entrance are carved with spirals, including a famous triple spiral whose meaning is unknown.' },
    ],
    learn: [
      { step: 'Why the solstice', body: 'For farming people, the moment the days began to lengthen again marked the return of light and life.' },
      { step: 'You can witness it', body: 'Each year, a lottery picks a small number of people to stand inside on solstice mornings.' },
    ],
    quiz: [
      { q: 'Which is older?', options: ['Newgrange', 'The Great Pyramid'], answer: 0, why: 'Newgrange dates to around 3200 BCE, centuries before the Great Pyramid.' },
    ],
    sources: [{ label: 'Newgrange overview', url: 'https://en.wikipedia.org/wiki/Newgrange' }],
  },
  {
    id: 'schumann',
    theme: 'sacred',
    truth: 'established',
    hook: 'The Earth hums at about 7.83 hertz.',
    body: 'Lightning strikes around the planet set off electromagnetic waves that echo between the ground and the upper atmosphere. They settle into a steady resonance near 7.83 cycles per second. Physicist Winfried Otto Schumann predicted it in 1952.',
    deeper: [
      { title: 'Close to our brainwaves', body: 'The frequency sits near the brain\'s alpha range of calm rest. That overlap has inspired many ideas.' },
      { title: 'Where it gets speculative', body: 'Claims that the resonance shapes our mood or health, or that it is rising, are not supported by solid evidence.' },
    ],
    learn: [
      { step: 'A planet-sized instrument', body: 'The gap between the Earth and the ionosphere acts like a giant cavity, ringing at certain notes when lightning strikes.' },
    ],
    quiz: [
      { q: 'What powers the Schumann resonance?', options: ['The Moon', 'Lightning', 'Ocean tides'], answer: 1, why: 'Around 50 lightning strikes a second keep it ringing.' },
    ],
    sources: [{ label: 'Schumann resonances', url: 'https://en.wikipedia.org/wiki/Schumann_resonances' }],
  },
  {
    id: 'flower-of-life',
    theme: 'sacred',
    truth: 'debated',
    hook: 'How old is the Flower of Life at Abydos?',
    body: 'The overlapping-circle pattern on a granite pillar in the Osireion at Abydos, Egypt, is famous in sacred geometry. The temple dates to around 1290 BCE. Many researchers think the pattern was drawn centuries later, but its exact age is unknown.',
    deeper: [
      { title: 'Drawn, not carved', body: 'The circles appear to be drawn onto the stone rather than cut into it, which makes them very hard to date.' },
      { title: 'A pattern found everywhere', body: 'Versions appear on an Assyrian palace floor, in Roman mosaics, in Chinese temples and in Leonardo da Vinci\'s notebooks.' },
    ],
    learn: [
      { step: 'How it is built', body: 'Start with one circle. Place the next circles on its edge, each the same size. Keep going and the flower appears.' },
      { step: 'Why people find it sacred', body: 'Many see it as a map of creation, with simpler shapes like the "Seed of Life" hidden inside it.' },
    ],
    quiz: [
      { q: 'Why is the Abydos pattern hard to date?', options: ['It was drawn, not carved', 'It is underwater', 'It has been destroyed'], answer: 0, why: 'Surface drawings can be added at any time.' },
    ],
    sources: [{ label: 'Overlapping circles grid', url: 'https://en.wikipedia.org/wiki/Overlapping_circles_grid' }],
  },
  {
    id: 'water-memory',
    theme: 'sacred',
    truth: 'speculative',
    hook: 'Can water remember what was dissolved in it?',
    body: 'In 1988, French scientist Jacques Benveniste published a study in Nature suggesting water kept an effect after a substance was diluted away. Nature sent investigators, and under controlled conditions the result could not be repeated.',
    deeper: [
      { title: 'Why it mattered', body: 'If true, it would have supported homeopathy, which relies on extreme dilutions.' },
      { title: 'Where it stands', body: 'The idea lives on in popular culture, but repeated controlled tests have not supported it.' },
    ],
    learn: [
      { step: 'What makes water strange anyway', body: 'Water really is unusual: ice floats, and it holds heat remarkably well. Its real properties are surprising enough.' },
    ],
    quiz: [
      { q: 'What happened when Benveniste\'s results were tested?', options: ['They were confirmed', 'They could not be repeated', 'They were never tested'], answer: 1, why: 'Controlled tests did not reproduce the effect.' },
    ],
    sources: [{ label: 'Water memory', url: 'https://en.wikipedia.org/wiki/Water_memory' }],
  },

  // ── Unexplained: disclosure and signals ───────────────────
  {
    id: 'grusch-hearing',
    theme: 'unexplained',
    truth: 'debated',
    hook: 'A former intelligence officer told Congress the US has "non-human" remains.',
    body: 'On 26 July 2023, David Grusch testified under oath that the US runs a secret programme to retrieve crashed craft of non-human origin. He said his claims came from others, not first-hand. In 2024, the Pentagon\'s UFO office said it found no verifiable evidence.',
    deeper: [
      { title: 'Why it was taken seriously', body: 'Grusch had worked on a Pentagon UFO task force and gave his claims under oath, in public, in front of Congress.' },
      { title: 'Why it is disputed', body: 'He said key evidence was classified, so it could not be shown. The Pentagon\'s review found no programme of the kind he described.' },
    ],
    learn: [
      { step: 'What is established', body: 'The hearing happened, and the US now officially studies "unidentified anomalous phenomena".' },
      { step: 'What is not', body: 'No crashed craft or remains have been publicly shown.', branches: ['What AARO concluded'] },
    ],
    quiz: [
      { q: 'What did the Pentagon\'s 2024 report find?', options: ['Proof of alien craft', 'No verifiable evidence', 'It refused to look'], answer: 1, why: 'It reported no verifiable evidence of extraterrestrial technology.' },
    ],
    sources: [{ label: 'Space.com on the 2024 AARO report', url: 'https://www.space.com/pentagon-ufo-office-aaro-historical-report-no-emprical-evidence-alien-technology' }],
  },
  {
    id: 'tic-tac',
    theme: 'unexplained',
    truth: 'established',
    hook: 'Navy pilots chased something they still cannot explain.',
    body: 'In 2004, pilots from the USS Nimitz encountered a white, oblong object off California that seemed to move in ways no known aircraft could. Footage became public in 2017, and in 2020 the Pentagon officially released it as "unidentified".',
    deeper: [
      { title: 'The pilots\' account', body: 'Commander David Fravor described an object with no wings or visible engines that dropped and accelerated suddenly.' },
      { title: 'Ordinary explanations', body: 'Some analysts suggest sensor glitches, distant aircraft or optical effects. None has been confirmed.' },
    ],
    learn: [
      { step: 'Why it changed the conversation', body: 'Trained military witnesses, radar data and official footage made it hard to dismiss as a story.' },
    ],
    quiz: [
      { q: 'What did the Pentagon call the object in 2020?', options: ['A weather balloon', 'Unidentified', 'A drone'], answer: 1, why: 'It released the footage as unidentified.' },
    ],
    sources: [{ label: 'USS Nimitz UFO incident', url: 'https://en.wikipedia.org/wiki/USS_Nimitz_UFO_incident' }],
  },
  {
    id: 'wow-signal',
    theme: 'unexplained',
    truth: 'established',
    hook: 'In 1977, a radio telescope caught a signal so strong someone wrote "Wow!".',
    body: 'On 15 August 1977, the Big Ear telescope in Ohio picked up a 72-second burst of radio waves from the direction of Sagittarius. Astronomer Jerry Ehman circled it on the printout and wrote "Wow!". It has never been heard again.',
    deeper: [
      { title: 'Why it stood out', body: 'It was narrow, strong and close to a frequency hydrogen gives off naturally, one scientists expected aliens might use.' },
      { title: 'A natural answer?', body: 'A 2024 study suggested a cold hydrogen cloud briefly brightened by a passing star. It remains a possibility, not a solution.' },
    ],
    learn: [
      { step: 'Why one signal is not enough', body: 'Science needs repeats. Searches have returned to the same patch of sky many times with no luck.' },
    ],
    quiz: [
      { q: 'How long did the Wow! signal last?', options: ['72 seconds', '7 hours', '7 days'], answer: 0, why: 'The telescope swept past the source in about 72 seconds.' },
    ],
    sources: [{ label: 'Wow! signal', url: 'https://en.wikipedia.org/wiki/Wow!_signal' }],
  },
];

// Statements for the Real or Myth game. real: true means it is true.
export const realOrMyth: { text: string; real: boolean; why: string }[] = [
  { text: 'Vikings wore horned helmets into battle.', real: false, why: 'No horned Viking battle helmet has ever been found. The look comes from 1800s opera costumes.' },
  { text: 'Honey found in Egyptian tombs was still edible.', real: true, why: 'Honey is so low in water and so acidic that it can last for thousands of years.' },
  { text: 'Goldfish have a three-second memory.', real: false, why: 'Goldfish can be trained and remember things for months.' },
  { text: 'There are more trees on Earth than stars in the Milky Way.', real: true, why: 'Earth has about 3 trillion trees. The Milky Way has roughly 100 to 400 billion stars.' },
  { text: 'The Great Wall of China is visible from the Moon.', real: false, why: 'It is far too narrow. Astronauts say it is hard to spot even from low orbit.' },
  { text: 'Oxford University is older than the Aztec Empire.', real: true, why: 'Teaching at Oxford began by 1096. Tenochtitlan was founded in 1325.' },
  { text: 'Bananas are berries but strawberries are not.', real: true, why: 'Botanically, a berry grows from one flower with one ovary. Bananas fit, strawberries do not.' },
  { text: 'Humans only use 10% of their brains.', real: false, why: 'Brain scans show activity across the whole brain, even during sleep.' },
  { text: 'A US Army officer wrote a report on out-of-body travel.', real: true, why: 'The 1983 Gateway Process assessment is now public.' },
  { text: 'Sound can arrange sand into geometric patterns.', real: true, why: 'Chladni showed this with a violin bow in 1787.' },
  { text: 'The Parthenon was designed using the golden ratio.', real: false, why: 'There is no good evidence its builders used it. The claim relies on convenient measurements.' },
  { text: 'Lightning never strikes the same place twice.', real: false, why: 'The Empire State Building is struck around 20 to 25 times a year.' },
];

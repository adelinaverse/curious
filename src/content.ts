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

export type ThemeId = 'history' | 'knowledge' | 'nature' | 'space' | 'unexplained';

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
  { id: 'history', name: 'Hidden History', line: 'What the textbooks skipped', hue: 32 },
  { id: 'knowledge', name: 'Lost Knowledge', line: 'Ancient minds, surprising tools', hue: 268 },
  { id: 'nature', name: 'Strange Nature', line: 'Life that breaks the rules', hue: 162 },
  { id: 'space', name: 'Space & Time', line: 'The scale of everything', hue: 222 },
  { id: 'unexplained', name: 'Unexplained', line: 'Open questions, honest answers', hue: 338 },
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
  { text: 'Lightning never strikes the same place twice.', real: false, why: 'The Empire State Building is struck around 20 to 25 times a year.' },
];

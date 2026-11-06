// Sacred Science cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const sacred: Card[] = [
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
  {
    id: "pyramid-north",
    theme: "sacred",
    truth: "established",
    hook: "The Great Pyramid points to true north almost perfectly.",
    body: "The sides of the Great Pyramid of Giza line up with the compass directions to within about a fifteenth of a degree. It was built around 4,500 years ago, with no compass and no telescope.",
    deeper: [
      { title: "How they did it", body: "Ideas include tracking stars circling the pole, or using the shadow of a pole on the autumn equinox." },
      { title: "More precise than later work", body: "Its alignment is better than many buildings made thousands of years later." },
    ],
    learn: [
      { step: "Why north mattered", body: "For Egyptians, the northern stars that never set were linked with eternal life for the king." },
    ],
    quiz: [
      { q: "How closely is the Great Pyramid aligned to north?", options: ["Within 10 degrees", "Within 1 degree", "Within a fifteenth of a degree"], answer: 2, why: "Its error is only a few arcminutes." },
    ],
    sources: [{ label: "Great Pyramid of Giza", url: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza" }],
  },
  {
    id: "chichen-itza-serpent",
    theme: "sacred",
    truth: "established",
    hook: "On the equinox, a shadow serpent slides down a Maya pyramid.",
    body: "At El Castillo in Chichén Itzá, Mexico, the late afternoon sun around the spring and autumn equinoxes casts a row of triangles down the staircase. They join a carved serpent head at the bottom, like a snake descending.",
    deeper: [
      { title: "A calendar in stone", body: "The four staircases have 91 steps each. With the top platform, that makes 365, one for each day." },
      { title: "Deliberate?", body: "Many think the effect was designed. Some scholars say it may be a happy accident of the angles." },
    ],
    learn: [
      { step: "Kukulkan", body: "The serpent is Kukulkan, a feathered serpent god linked with wind and renewal." },
    ],
    quiz: [
      { q: "How many steps does El Castillo have in total, with the top?", options: ["100", "365", "500"], answer: 1, why: "4 × 91 plus the platform makes 365." },
    ],
    sources: [{ label: "El Castillo, Chichén Itzá", url: "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza" }],
  },
  {
    id: "solfeggio",
    theme: "sacred",
    truth: "speculative",
    hook: "Is 528 Hz really the 'love frequency'?",
    body: "Solfeggio frequencies like 528 Hz are said to heal and repair DNA. They are often called ancient, but the set was popularised in the 1970s and 1990s, drawing on numerology. No good studies show they heal.",
    deeper: [
      { title: "The real history", body: "The original solfège syllables, ut-re-mi, come from an 11th-century hymn. They named notes, not set frequencies." },
      { title: "Why it still helps", body: "Calming sound can genuinely help people relax. That does not need special numbers." },
    ],
    learn: [
      { step: "How to read claims", body: "When a claim says 'ancient', it is worth asking where the oldest written source actually is." },
    ],
    quiz: [
      { q: "When were the modern Solfeggio frequencies popularised?", options: ["Ancient Egypt", "The Middle Ages", "The late 1900s"], answer: 2, why: "They spread from the 1970s onward." },
    ],
    sources: [{ label: "Solfège", url: "https://en.wikipedia.org/wiki/Solf%C3%A8ge" }],
  },
  {
    id: "chartres-labyrinth",
    theme: "sacred",
    truth: "established",
    hook: "There's an 800-year-old meditation path on a cathedral floor.",
    body: "Chartres Cathedral in France has a labyrinth set into its floor around 1200. Unlike a maze, it has one path with no dead ends. People walk it slowly as prayer or meditation, winding in towards the centre.",
    deeper: [
      { title: "A pilgrimage in miniature", body: "Some say walking it stood in for a journey to Jerusalem for those who could not travel." },
      { title: "A revival", body: "Labyrinths have returned in hospitals, parks and retreat centres as walking meditation." },
    ],
    learn: [
      { step: "Maze or labyrinth?", body: "A maze is a puzzle to solve. A labyrinth is a single path to follow." },
    ],
    quiz: [
      { q: "How many paths does a labyrinth have?", options: ["One", "Two", "Many with dead ends"], answer: 0, why: "A labyrinth has one winding path." },
    ],
    sources: [{ label: "Labyrinth", url: "https://en.wikipedia.org/wiki/Labyrinth" }],
  },
  {
    id: "sri-yantra",
    theme: "sacred",
    truth: "established",
    hook: "The Sri Yantra is so precise that drawing it perfectly is a maths puzzle.",
    body: "This Hindu sacred diagram has nine interlocking triangles around a central point. For their corners to meet exactly, the lines must be placed with great precision. Mathematicians have studied how to construct it.",
    deeper: [
      { title: "What it represents", body: "Four upward triangles and five downward ones are often read as masculine and feminine energies uniting." },
      { title: "A focus for meditation", body: "Practitioners gaze from the outer edges inward to the central dot, the bindu." },
    ],
    learn: [
      { step: "Yantras", body: "Yantras are geometric diagrams used in Hindu and Buddhist practice as tools for focus and devotion." },
    ],
    quiz: [
      { q: "How many interlocking triangles form the Sri Yantra?", options: ["Seven", "Nine", "Twelve"], answer: 1, why: "Nine triangles surround the central point." },
    ],
    sources: [{ label: "Sri Yantra", url: "https://en.wikipedia.org/wiki/Sri_Yantra" }],
  },
  {
    id: "stonehenge-acoustics",
    theme: "sacred",
    truth: "established",
    hook: "Stonehenge once worked like a sound chamber.",
    body: "In 2020, acoustic engineers built a one-twelfth scale model of Stonehenge as it stood around 2200 BCE. Inside, voices and music were amplified and echoed briefly, like in a small hall. Outside the circle, sound faded quickly.",
    deeper: [
      { title: "Private ceremonies?", body: "The effect would suit rituals meant for those inside the ring, not the crowd outside." },
      { title: "Intentional?", body: "Nobody knows if the builders planned the sound or whether it came with the design." },
    ],
    learn: [
      { step: "The model", body: "The team rebuilt all 157 stones using 3D printing and measured the sound in a special chamber." },
    ],
    quiz: [
      { q: "What did the model show about sound inside Stonehenge?", options: ["It was amplified", "It was silenced", "No change"], answer: 0, why: "Voices and music carried and echoed inside." },
    ],
    sources: [{ label: "Stonehenge", url: "https://en.wikipedia.org/wiki/Stonehenge" }],
  },
  {
    id: "ley-lines",
    theme: "sacred",
    truth: "speculative",
    hook: "Do ancient sites line up along energy lines?",
    body: "In 1921, Alfred Watkins noticed that old churches, standing stones and hilltops in England often fell in straight lines. He thought they were ancient paths. In the 1960s, others reimagined them as lines of earth energy. There is no measurable evidence for that energy.",
    deeper: [
      { title: "The chance problem", body: "With enough sites on a map, straight lines through several of them appear by chance alone." },
      { title: "Why they endure", body: "Ley lines give a way of feeling connected to the land and its ancient places." },
    ],
    learn: [
      { step: "Watkins' idea", body: "Watkins only claimed they were old trade and travel routes, not energy lines." },
    ],
    quiz: [
      { q: "What did Alfred Watkins think ley lines were?", options: ["Energy lines", "Old travel routes", "Alien landing strips"], answer: 1, why: "The energy idea came decades later." },
    ],
    sources: [{ label: "Ley line", url: "https://en.wikipedia.org/wiki/Ley_line" }],
  },
];

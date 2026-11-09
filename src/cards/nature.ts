// Strange Nature cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const nature: Card[] = [
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
  {
    id: "wood-wide-web",
    theme: "nature",
    truth: "debated",
    hook: "Do trees talk to each other underground?",
    body: "Fungi wrap around tree roots and link them in vast underground networks, sometimes called the 'wood wide web'. Some researchers say older 'mother trees' share food and warnings through them. Others say the evidence for that is much thinner than the story.",
    deeper: [
      { title: "What is established", body: "Fungal networks connecting roots are real, and trees trade sugars with fungi for water and nutrients." },
      { title: "What is debated", body: "A 2023 review found little direct evidence that trees deliberately help their offspring or neighbours through these links." },
    ],
    learn: [
      { step: "A partnership", body: "Most plants rely on fungal partners. The relationship is older than trees themselves." },
    ],
    quiz: [
      { q: "Which part of the 'wood wide web' is well established?", options: ["Fungal networks link roots", "Trees warn their children"], answer: 0, why: "The networks exist. Deliberate sharing is debated." },
    ],
    sources: [{ label: "Mycorrhizal network", url: "https://en.wikipedia.org/wiki/Mycorrhizal_network" }],
  },
  {
    id: "slime-mould",
    theme: "nature",
    truth: "established",
    hook: "A brainless slime mould redesigned the Tokyo rail network.",
    body: "In 2010, researchers placed oat flakes on a map in the positions of cities around Tokyo, with a slime mould at the centre. It spread out, then pruned itself into a network of tubes strikingly similar to the real railway.",
    deeper: [
      { title: "No brain needed", body: "The slime mould is a single giant cell. It strengthens tubes that carry food well and lets others fade." },
      { title: "Maze solver", body: "It can also find the shortest route through a maze to reach food." },
    ],
    learn: [
      { step: "Learning from it", body: "Engineers study its simple rules to design efficient, resilient networks." },
    ],
    quiz: [
      { q: "What did the slime mould recreate?", options: ["A city map", "A rail network", "A river"], answer: 1, why: "Its tubes mirrored the Tokyo rail system." },
    ],
    sources: [{ label: "Physarum polycephalum", url: "https://en.wikipedia.org/wiki/Physarum_polycephalum" }],
  },
  {
    id: "crow-faces",
    theme: "nature",
    truth: "established",
    hook: "Crows remember your face, and tell their friends.",
    body: "At the University of Washington, researchers wearing a mask trapped and released some crows. For years after, crows scolded anyone in that mask, including birds that were never caught. They had learned it from others.",
    deeper: [
      { title: "Grudges and gifts", body: "Crows also seem to remember kindness. Some people who feed them report small gifts left behind." },
      { title: "Tool makers", body: "New Caledonian crows bend twigs into hooks to fish out insects." },
    ],
    learn: [
      { step: "Bird brains", body: "Crows have small brains packed with neurons, giving them problem-solving skills that rival some apes." },
    ],
    quiz: [
      { q: "How did untrapped crows learn to scold the mask?", options: ["From other crows", "By chance", "From TV"], answer: 0, why: "They learned it socially from other crows." },
    ],
    sources: [{ label: "Corvidae intelligence", url: "https://en.wikipedia.org/wiki/Corvidae" }],
  },
  {
    id: "mantis-shrimp",
    theme: "nature",
    truth: "established",
    hook: "The mantis shrimp punches so fast the water boils.",
    body: "Its club-like arms strike at around 80 km/h, among the fastest movements in the animal world. The strike creates bubbles that collapse with a flash of light and heat, hitting the prey twice.",
    deeper: [
      { title: "Unbreakable fists", body: "The club's layered structure absorbs repeated impacts that would shatter most materials. Engineers copy it for armour." },
      { title: "Strange eyes", body: "They have 12 to 16 types of colour receptors to our 3, yet tests suggest they are not better at telling colours apart." },
    ],
    learn: [
      { step: "Cavitation", body: "The bubbles form because the water is pushed aside faster than it can follow, then snap back." },
    ],
    quiz: [
      { q: "How many types of colour receptor do humans have?", options: ["3", "12", "16"], answer: 0, why: "We have three. Mantis shrimp have up to 16." },
    ],
    sources: [{ label: "Mantis shrimp", url: "https://en.wikipedia.org/wiki/Mantis_shrimp" }],
  },
  {
    id: "axolotl",
    theme: "nature",
    truth: "established",
    hook: "The axolotl can regrow a leg, part of its heart and even its brain.",
    body: "This Mexican salamander can replace lost limbs, spinal cord and pieces of organs, without scarring. Scientists study it to learn how healing might one day go further in humans.",
    deeper: [
      { title: "Forever young", body: "Axolotls keep juvenile features like feathery gills all their lives." },
      { title: "In danger", body: "In the wild they live only in the lake canals of Xochimilco in Mexico City, and are critically endangered." },
    ],
    learn: [
      { step: "How it regrows", body: "Cells at the wound turn back into a flexible state, then rebuild the missing part in the right order." },
    ],
    quiz: [
      { q: "Where do wild axolotls live?", options: ["The Amazon", "Mexico City's canals", "Japan"], answer: 1, why: "Only in the Xochimilco canals." },
    ],
    sources: [{ label: "Axolotl", url: "https://en.wikipedia.org/wiki/Axolotl" }],
  },
  {
    id: "pando",
    theme: "nature",
    truth: "established",
    hook: "One of the heaviest living things on Earth is a forest that is a single tree.",
    body: "Pando, in Utah, looks like a grove of about 47,000 aspen trees. They all share one root system and the same DNA. Together it weighs an estimated 6,000 tonnes.",
    deeper: [
      { title: "How old?", body: "Estimates vary widely, from thousands of years to far more. It is certainly ancient." },
      { title: "Shrinking", body: "Grazing deer and cattle eat new shoots, so the grove is slowly thinning." },
    ],
    learn: [
      { step: "Clonal colonies", body: "Aspens spread by sending up new stems from their roots, so one organism can cover a whole hillside." },
    ],
    quiz: [
      { q: "What do Pando's trees share?", options: ["One root system", "Nothing", "Only soil"], answer: 0, why: "They are all one connected organism." },
    ],
    sources: [{ label: "Pando (tree)", url: "https://en.wikipedia.org/wiki/Pando_(tree)" }],
  },
  {
    id: "bird-compass",
    theme: "nature",
    truth: "debated",
    hook: "Birds may see Earth's magnetic field using quantum physics.",
    body: "Migrating birds can sense magnetic north. A leading idea is that a protein in their eyes, cryptochrome, reacts to the magnetic field through a quantum effect, possibly letting them see it as a pattern over their vision.",
    deeper: [
      { title: "The evidence", body: "Lab studies show the robin's cryptochrome is sensitive to magnetic fields, and birds lose their compass under certain radio noise." },
      { title: "Still open", body: "Exactly how the signal reaches the brain, and what birds experience, is not yet known." },
    ],
    learn: [
      { step: "Quantum biology", body: "Quantum effects were once thought impossible in warm, wet living things. Bird navigation is a key test case." },
    ],
    quiz: [
      { q: "Which protein is linked to the bird compass?", options: ["Cryptochrome", "Keratin", "Insulin"], answer: 0, why: "Cryptochrome in the eye is the leading candidate." },
    ],
    sources: [{ label: "Magnetoreception", url: "https://en.wikipedia.org/wiki/Magnetoreception" }],
  },
  {
    id: "bees-zero",
    theme: "nature",
    truth: "established",
    hook: "Bees understand the idea of zero.",
    body: "In a 2018 study, honeybees were trained to choose cards with fewer shapes. When shown a blank card, they understood it as fewer than one. Zero is a concept many young children take years to grasp.",
    deeper: [
      { title: "Bees can count", body: "Other studies show they can track up to about four landmarks to find food." },
      { title: "Tiny brains", body: "A bee's brain has under a million neurons, suggesting maths needs less brainpower than we thought." },
    ],
    learn: [
      { step: "Why it matters", body: "If bees get there, the roots of number sense may be very old and widespread in nature." },
    ],
    quiz: [
      { q: "What did bees treat as fewer than one shape?", options: ["A blank card", "A red card", "Two shapes"], answer: 0, why: "They placed the empty card below one." },
    ],
    sources: [{ label: "Bee learning and communication", url: "https://en.wikipedia.org/wiki/Bee_learning_and_communication" }],
  },
  {
    id: "monarch-migration",
    theme: "nature",
    truth: "established",
    hook: "Monarch butterflies fly to a place none of them has ever been.",
    body: "Each autumn, millions of monarchs fly up to 4,000 km from North America to the same mountain forests in Mexico. The trip north takes several generations. The ones flying south are great-grandchildren of last year's travellers.",
    deeper: [
      { title: "The super generation", body: "The autumn generation lives up to eight months, far longer than its parents, just to make the journey." },
      { title: "Sun compass", body: "They navigate using the Sun's position and an internal clock in their antennae." },
    ],
    learn: [
      { step: "Same trees", body: "They often return to the very same groves of fir trees their ancestors used." },
    ],
    quiz: [
      { q: "How do monarchs know the way south?", options: ["Parents show them", "Built-in navigation", "They follow birds"], answer: 1, why: "No butterfly makes the trip twice. The route is inborn." },
    ],
    sources: [{ label: "Monarch butterfly migration", url: "https://en.wikipedia.org/wiki/Monarch_butterfly_migration" }],
  },
  {
    id: "greenland-shark",
    theme: "nature",
    truth: "established",
    hook: "There may be sharks alive today that were born before Shakespeare.",
    body: "Greenland sharks grow about a centimetre a year in icy Arctic waters. In 2016, scientists dated the lenses of their eyes. The oldest was estimated at around 400 years old, the longest-living vertebrate known.",
    deeper: [
      { title: "How they dated it", body: "The core of the eye lens forms before birth and never changes, so it can be carbon dated." },
      { title: "Slow life", body: "They may not have young until they are around 150 years old." },
    ],
    learn: [
      { step: "A big range", body: "The 400-year estimate has wide margins, from about 270 to 500 years." },
    ],
    quiz: [
      { q: "How was the shark's age estimated?", options: ["Counting teeth", "Dating its eye lens", "Measuring fins"], answer: 1, why: "The eye lens core was carbon dated." },
    ],
    sources: [{ label: "Greenland shark", url: "https://en.wikipedia.org/wiki/Greenland_shark" }],
  },
  {
    id: "dolphin-names",
    theme: "nature",
    truth: "established",
    hook: "Dolphins call each other by name.",
    body: "Each bottlenose dolphin develops its own 'signature whistle'. Others copy that whistle to call it, and dolphins respond when they hear their own. They seem to remember the whistles of old companions for decades.",
    deeper: [
      { title: "Twenty years later", body: "Dolphins separated for over 20 years still responded to a former companion's whistle." },
      { title: "Choosing a name", body: "Calves develop their whistle in their first year, often shaped by sounds around them." },
    ],
    learn: [
      { step: "Rare in nature", body: "Using learned names for individuals is very rare. Humans and dolphins are among the few." },
    ],
    quiz: [
      { q: "What is a dolphin's 'name'?", options: ["A signature whistle", "A colour", "A smell"], answer: 0, why: "Each dolphin has its own signature whistle." },
    ],
    sources: [{ label: "Signature whistle", url: "https://en.wikipedia.org/wiki/Signature_whistle" }],
  },
  {
    id: "mimosa-memory",
    theme: "nature",
    truth: "debated",
    hook: "A plant with no brain seemed to remember a lesson for a month.",
    body: "The sensitive plant, Mimosa pudica, folds its leaves when touched. In a 2014 study, Monica Gagliano's team dropped potted plants 15 centimetres again and again. They soon stopped folding for the harmless drop, and still ignored it at least 28 days later.",
    deeper: [
      { title: "Not just tired", body: "The plants still folded when shaken, so they had not simply worn out. They seemed to learn that the drop was safe." },
      { title: "Why bother?", body: "Folding has a cost. While the leaves are shut, the plant's photosynthesis drops by about 40 percent." },
      { title: "Why it's debated", body: "Scientists disagree on whether this should be called learning and memory, since plants have no neurons. Neither proposed mechanism for it is generally accepted yet." },
    ],
    learn: [
      { step: "How it folds", body: "A touch sends an electrical signal to small joints at the base of each leaflet. Water rushes out of cells there, and the leaflets collapse.", branches: ["Can plants learn?"] },
    ],
    quiz: [
      { q: "How long did the plants keep ignoring the drop?", options: ["A few minutes", "At least 28 days", "One year"], answer: 1, why: "They did not react to dropping for at least 28 days after training." },
    ],
    sources: [{ label: "Mimosa pudica", url: "https://en.wikipedia.org/wiki/Mimosa_pudica" }],
  },
  {
    id: "frozen-frog",
    theme: "nature",
    truth: "established",
    hook: "Every winter, the wood frog freezes solid, then thaws and hops away.",
    body: "The North American wood frog can survive with around 65 to 70 percent of its body water turned to ice. While frozen it has no heartbeat, no breathing and no detectable brain activity. In spring it thaws and carries on as if nothing happened.",
    deeper: [
      { title: "Sugar antifreeze", body: "As ice starts to form, the frog's liver floods its body with glucose. This sugar, along with urea, helps protect its cells from ice damage." },
      { title: "Months on ice", body: "In Alaska, frogs studied in the wild stayed frozen for about 193 days in a row." },
    ],
    learn: [
      { step: "Arctic frog", body: "It is the only North American frog found north of the Arctic Circle." },
    ],
    quiz: [
      { q: "What does the wood frog use as antifreeze?", options: ["Salt", "Glucose", "Fat"], answer: 1, why: "Its liver turns stored glycogen into glucose, which protects its cells." },
    ],
    sources: [{ label: "Wood frog", url: "https://en.wikipedia.org/wiki/Wood_frog" }],
  },
];

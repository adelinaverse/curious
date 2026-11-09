// Lost Knowledge cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const knowledge: Card[] = [
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
    id: "baghdad-battery",
    theme: "knowledge",
    truth: "debated",
    hook: "Did ancient people make electricity?",
    body: "A clay jar found near Baghdad holds a copper tube and an iron rod. Filled with vinegar, a replica makes a small electric current. Some think it was used for electroplating. Most archaeologists think it simply stored scrolls.",
    deeper: [
      { title: "The case for", body: "The parts match a basic battery, and replicas really do produce about half a volt." },
      { title: "The case against", body: "No wires or other electrical parts were found, and similar jars held sacred scrolls that had rotted away." },
    ],
    learn: [
      { step: "When it is from", body: "It is usually dated to the Parthian or Sasanian era, roughly 2,000 years ago." },
    ],
    quiz: [
      { q: "What do most archaeologists think the jar held?", options: ["Electricity", "Scrolls", "Perfume"], answer: 1, why: "Similar jars were used to store sacred scrolls." },
    ],
    sources: [{ label: "Baghdad Battery", url: "https://en.wikipedia.org/wiki/Baghdad_Battery" }],
  },
  {
    id: "voynich",
    theme: "knowledge",
    truth: "established",
    hook: "There's a 600-year-old book no one can read.",
    body: "The Voynich manuscript is written in an unknown script and filled with drawings of strange plants, stars and bathing women. Its vellum dates to the early 1400s. Codebreakers, linguists and computers have all failed to crack it.",
    deeper: [
      { title: "Language or hoax?", body: "The text follows patterns real languages have, which makes a meaningless hoax less likely. But no proposed decoding has held up." },
      { title: "Famous failures", body: "Top Second World War codebreakers tried and gave up." },
    ],
    learn: [
      { step: "Where it is", body: "It lives at Yale University's Beinecke Library, and every page is online to view." },
    ],
    quiz: [
      { q: "Has the Voynich manuscript been deciphered?", options: ["Yes", "No"], answer: 1, why: "No proposed solution is accepted." },
    ],
    sources: [{ label: "Voynich manuscript", url: "https://en.wikipedia.org/wiki/Voynich_manuscript" }],
  },
  {
    id: "eratosthenes",
    theme: "knowledge",
    truth: "established",
    hook: "A Greek scholar measured the Earth with a stick and a shadow.",
    body: "Around 240 BCE, Eratosthenes heard that at noon on midsummer, the Sun shone straight down a well in Syene, Egypt. In Alexandria, a stick cast a short shadow at the same moment. From the angle and the distance, he worked out Earth's size remarkably closely.",
    deeper: [
      { title: "The maths", body: "The shadow angle was about 7.2 degrees, one fiftieth of a circle. So the Earth's circumference was 50 times the distance between the cities." },
      { title: "How close?", body: "Depending on how long his unit of distance was, he was within a few percent." },
    ],
    learn: [
      { step: "Try it", body: "Schools around the world repeat the experiment together each year, comparing shadows at the same moment." },
    ],
    quiz: [
      { q: "What did Eratosthenes use to measure the Earth?", options: ["A telescope", "Shadows", "A ship"], answer: 1, why: "He compared shadow angles in two cities." },
    ],
    sources: [{ label: "Eratosthenes", url: "https://en.wikipedia.org/wiki/Eratosthenes" }],
  },
  {
    id: "damascus-steel",
    theme: "knowledge",
    truth: "established",
    hook: "Medieval swordsmiths made nanotubes without knowing it.",
    body: "Damascus steel blades were famed for their wavy patterns and sharp, tough edges. In 2006, scientists found carbon nanotubes inside a 17th-century blade. The method was lost by the 1700s.",
    deeper: [
      { title: "Special steel", body: "The blades were forged from wootz steel from India and Sri Lanka, which held tiny amounts of other metals." },
      { title: "Why it was lost", body: "The ore supply may have changed, and smiths passed skills on in secret. When either broke, the method vanished." },
    ],
    learn: [
      { step: "Modern copies", body: "Today's 'Damascus' knives are usually layered steel. They look similar but are made differently." },
    ],
    quiz: [
      { q: "What did scientists find inside a Damascus blade?", options: ["Gold", "Carbon nanotubes", "Bone"], answer: 1, why: "A 2006 study found carbon nanotubes." },
    ],
    sources: [{ label: "Damascus steel", url: "https://en.wikipedia.org/wiki/Damascus_steel" }],
  },
  {
    id: "greek-fire",
    theme: "knowledge",
    truth: "established",
    hook: "The Byzantines had a fire that water couldn't put out. Its recipe is lost.",
    body: "From the 600s, the Byzantine Empire sprayed 'Greek fire' at enemy ships through tubes. It kept burning on water. The formula was a state secret so closely guarded that it was eventually forgotten.",
    deeper: [
      { title: "What was in it?", body: "Guesses include crude oil, pine resin and quicklime. Nobody has recreated it with certainty." },
      { title: "It saved a city", body: "It helped Constantinople fight off Arab fleets in the 670s and 717." },
    ],
    learn: [
      { step: "Secrets can backfire", body: "Knowledge kept too secret can die with the few who hold it." },
    ],
    quiz: [
      { q: "Why was Greek fire feared?", options: ["It burned on water", "It was invisible", "It froze ships"], answer: 0, why: "It kept burning on the sea's surface." },
    ],
    sources: [{ label: "Greek fire", url: "https://en.wikipedia.org/wiki/Greek_fire" }],
  },
  {
    id: "lycurgus-cup",
    theme: "knowledge",
    truth: "established",
    hook: "A Roman cup changes colour when light shines through it.",
    body: "The Lycurgus Cup, from the 300s CE, looks jade green in normal light. Light it from inside and it glows red. Scientists found tiny particles of gold and silver in the glass, a kind of nanotechnology.",
    deeper: [
      { title: "How small?", body: "The particles are about 70 nanometres across, around a thousandth of the width of a human hair." },
      { title: "Accident or skill?", body: "The Romans could not have understood the physics, but they clearly knew how to repeat the effect." },
    ],
    learn: [
      { step: "Where to see it", body: "It is on display at the British Museum in London." },
    ],
    quiz: [
      { q: "What colour does the cup glow when lit from inside?", options: ["Blue", "Red", "Gold"], answer: 1, why: "Light passing through turns it red." },
    ],
    sources: [{ label: "Lycurgus Cup", url: "https://en.wikipedia.org/wiki/Lycurgus_Cup" }],
  },
  {
    id: "maya-zero",
    theme: "knowledge",
    truth: "established",
    hook: "The Maya invented zero on their own.",
    body: "Zero as a number seems obvious now, but most ancient cultures had none. The Maya developed a symbol for zero independently, shaped like a shell, and used it in their calendar inscriptions.",
    deeper: [
      { title: "Counting in twenties", body: "Maya numbers used base 20, written with dots, bars and the shell for zero." },
      { title: "Others who got there", body: "Babylonians used a placeholder sign, and Indian mathematicians later treated zero as a number in its own right, the version we use today." },
    ],
    learn: [
      { step: "The Long Count", body: "Maya dates counted days from a starting point in 3114 BCE. The famous 2012 date was just the end of one cycle." },
    ],
    quiz: [
      { q: "What base did Maya numbers use?", options: ["10", "20", "60"], answer: 1, why: "They counted in twenties." },
    ],
    sources: [{ label: "Maya numerals", url: "https://en.wikipedia.org/wiki/Maya_numerals" }],
  },
  {
    id: "nebra-sky-disc",
    theme: "knowledge",
    truth: "established",
    hook: "The oldest known map of the sky was recovered in a police sting.",
    body: "The Nebra sky disc is a bronze plate inlaid with a gold Sun or Moon, a crescent and stars, including what looks like the Pleiades. It is about 3,600 years old. Looters dug it up in Germany in 1999, and police seized it in 2002.",
    deeper: [
      { title: "A farming calendar?", body: "Gold arcs on the edges match the angle between sunset at midsummer and midwinter where it was found." },
      { title: "The Pleiades", body: "This star cluster's appearance and disappearance marked planting and harvest times for many ancient cultures." },
    ],
    learn: [
      { step: "Why it matters", body: "It shows Bronze Age Europeans were tracking the sky with real precision." },
    ],
    quiz: [
      { q: "Which star cluster may appear on the disc?", options: ["Orion's Belt", "The Pleiades", "The Big Dipper"], answer: 1, why: "A tight group of seven stars is usually read as the Pleiades." },
    ],
    sources: [{ label: "Nebra sky disc", url: "https://en.wikipedia.org/wiki/Nebra_sky_disc" }],
  },
  {
    id: "ishango-bone",
    theme: "knowledge",
    truth: "debated",
    hook: "Is a 20,000-year-old bone our first maths homework?",
    body: "The Ishango bone, found in what is now the Democratic Republic of Congo, is a baboon leg bone notched in groups. Some researchers see prime numbers or a lunar calendar. Others say it is a simple tally.",
    deeper: [
      { title: "The patterns", body: "One column holds 11, 13, 17 and 19 notches, the primes between 10 and 20. That might be chance." },
      { title: "A Moon calendar?", body: "Another reading counts about six months of lunar phases." },
    ],
    learn: [
      { step: "Counting is ancient", body: "Whatever its purpose, it shows people were recording numbers long before writing." },
    ],
    quiz: [
      { q: "What is the Ishango bone made from?", options: ["A mammoth tusk", "A baboon bone", "A human bone"], answer: 1, why: "It is the fibula of a baboon." },
    ],
    sources: [{ label: "Ishango bone", url: "https://en.wikipedia.org/wiki/Ishango_bone" }],
  },
  {
    id: "delhi-pillar",
    theme: "knowledge",
    truth: "established",
    hook: "A 1,600-year-old iron pillar in Delhi has barely rusted.",
    body: "The iron pillar in Delhi's Qutb complex stands over seven metres tall and dates to around 400 CE. It has survived centuries of monsoons with very little rust. The secret is a thin protective layer on its surface.",
    deeper: [
      { title: "The chemistry", body: "The iron is rich in phosphorus. It helped form a thin, stable film that blocks further rusting." },
      { title: "Forged, not cast", body: "It was hammered together from hot lumps of iron, an enormous task for the time." },
    ],
    learn: [
      { step: "A royal record", body: "An inscription in Sanskrit honours a king, usually identified as Chandragupta II." },
    ],
    quiz: [
      { q: "What protects the Delhi pillar from rust?", options: ["Paint", "A thin protective film", "Gold plating"], answer: 1, why: "Phosphorus-rich iron formed a protective layer." },
    ],
    sources: [{ label: "Iron pillar of Delhi", url: "https://en.wikipedia.org/wiki/Iron_pillar_of_Delhi" }],
  },
  {
    id: "polynesian-wayfinding",
    theme: "knowledge",
    truth: "established",
    hook: "Polynesian navigators crossed thousands of kilometres of ocean with no instruments.",
    body: "Using stars, swells, birds and clouds, Polynesian voyagers settled islands across the Pacific, from Hawaii to New Zealand. In 1976, the canoe Hōkūleʻa sailed from Hawaii to Tahiti the traditional way, proving it could be done.",
    deeper: [
      { title: "Reading the ocean", body: "Navigators felt swell patterns through the hull and watched for land birds that only fly so far from shore." },
      { title: "The star compass", body: "They memorised where dozens of stars rise and set on the horizon to hold a course." },
    ],
    learn: [
      { step: "A living tradition", body: "Mau Piailug, a navigator from Micronesia, guided the 1976 voyage and taught a new generation." },
    ],
    quiz: [
      { q: "Which canoe sailed from Hawaii to Tahiti in 1976?", options: ["Kon-Tiki", "Hōkūleʻa", "Endeavour"], answer: 1, why: "Hōkūleʻa made the voyage with traditional navigation." },
    ],
    sources: [{ label: "Polynesian navigation", url: "https://en.wikipedia.org/wiki/Polynesian_navigation" }],
  },
  {
    id: "iching-binary",
    theme: "knowledge",
    truth: "established",
    hook: "The I Ching and your phone speak the same language.",
    body: "The ancient Chinese I Ching builds 64 hexagrams from broken and solid lines. In 1703, mathematician Gottfried Leibniz, who developed binary numbers, saw his system of 0s and 1s mirrored in them. Binary now runs every computer.",
    deeper: [
      { title: "Yin and yang lines", body: "Each line is broken (yin) or solid (yang). Six lines give 64 possible combinations, which is 2 to the power of 6." },
      { title: "A book of change", body: "The I Ching has been used for divination and reflection for around 3,000 years." },
      { title: "Try it soon", body: "Ancient ways of reading the unknown are coming to CurioUS. Tap the bookmark to hear first." },
    ],
    learn: [
      { step: "How a reading works", body: "Coins or yarrow stalks are cast six times to build a hexagram, which points to a passage of text." },
    ],
    quiz: [
      { q: "How many hexagrams are in the I Ching?", options: ["12", "64", "100"], answer: 1, why: "Six lines, each with two options, make 64." },
    ],
    sources: [{ label: "I Ching", url: "https://en.wikipedia.org/wiki/I_Ching" }],
  },
  {
    id: "piri-reis",
    theme: "knowledge",
    truth: "speculative",
    hook: "Does a map from 1513 show Antarctica?",
    body: "Ottoman admiral Piri Reis drew a world map in 1513 from older sources, including one he said came from Columbus. Some claim its southern coast shows Antarctica without ice. Historians say it is South America's coast, bent to fit the page.",
    deeper: [
      { title: "Why the claim spread", body: "Antarctica was not officially seen until 1820, so an earlier map would be extraordinary." },
      { title: "What the map shows", body: "It is a skilled combination of many sources, and one of the oldest maps to show the Americas." },
    ],
    learn: [
      { step: "Reading old maps", body: "Mapmakers often squeezed coastlines to fit their parchment, which can create shapes that look like other places." },
    ],
    quiz: [
      { q: "What do most historians think the map's southern coast shows?", options: ["Antarctica", "South America", "Australia"], answer: 1, why: "It is usually read as a distorted South American coast." },
    ],
    sources: [{ label: "Piri Reis map", url: "https://en.wikipedia.org/wiki/Piri_Reis_map" }],
  },
  {
    id: "archimedes-palimpsest",
    theme: "knowledge",
    truth: "established",
    hook: "Lost works of Archimedes were hiding under a medieval religious text.",
    body: "In 1229, monks scraped and washed an old book of Archimedes and reused the pages for a Christian liturgical text. Beneath the new writing lay the only known copy of his work The Method. Scientists spent years using light and X-rays to read it again.",
    deeper: [
      { title: "What was hidden", body: "Besides The Method, it holds the only surviving Greek text of On Floating Bodies and his Ostomachion, plus speeches by Hypereides and a commentary on Aristotle." },
      { title: "Reading the invisible", body: "From 1999 to 2008, a team at the Walters Art Museum in Baltimore imaged every page. In 2005, X-ray fluorescence at the Stanford Linear Accelerator Center revealed text hidden under forged gold-leaf paintings." },
    ],
    learn: [
      { step: "What a palimpsest is", body: "A manuscript page that has been scraped clean and written over. Parchment was precious, so this was common." },
      { step: "Sold at auction", body: "An anonymous buyer bought it at Christie's in New York in 1998 for $2 million." },
    ],
    quiz: [
      { q: "When was the Archimedes text overwritten?", options: ["229 BCE", "1229", "1929"], answer: 1, why: "It was scraped and reused in 1229." },
    ],
    sources: [{ label: "Archimedes Palimpsest", url: "https://en.wikipedia.org/wiki/Archimedes_Palimpsest" }],
  },
];

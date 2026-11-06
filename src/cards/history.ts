// Hidden History cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const history: Card[] = [
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
    id: "catalhoyuk",
    theme: "history",
    truth: "established",
    hook: "9,000 years ago, a town of thousands had no streets. People walked on the roofs.",
    body: "Çatalhöyük in central Turkey was home to thousands of people around 7000 BCE. Houses were packed wall to wall, so people climbed in through holes in the roof. The dead were buried under the floors.",
    deeper: [
      { title: "A town with no rulers?", body: "There are no palaces or grand houses. Homes were remarkably similar, which suggests a fairly equal society." },
      { title: "Painted walls", body: "Inside, walls were plastered and painted with bulls, vultures and hunting scenes, then replastered again and again." },
    ],
    learn: [
      { step: "Living with ancestors", body: "Families buried relatives beneath the platforms they slept on, keeping the dead close." },
      { step: "Why it matters", body: "It is one of the best-preserved early towns, showing how people lived as farming took hold." },
    ],
    quiz: [
      { q: "How did people enter houses at Çatalhöyük?", options: ["Through side doors", "Through the roof", "Through tunnels"], answer: 1, why: "Houses had no street doors. Ladders led down from roof openings." },
    ],
    sources: [{ label: "Çatalhöyük overview", url: "https://en.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk" }],
  },
  {
    id: "first-writing",
    theme: "history",
    truth: "established",
    hook: "The first writing wasn't poetry. It was receipts.",
    body: "Writing appeared in Sumer, in today's Iraq, around 3200 BCE. The earliest clay tablets mostly record things like grain, beer and sheep. Stories and laws came later.",
    deeper: [
      { title: "From tokens to marks", body: "Before writing, people tracked goods with small clay tokens. Pressing tokens into clay may have led to drawing signs instead." },
      { title: "Cuneiform", body: "Scribes pressed a cut reed into wet clay, leaving wedge-shaped marks. It was used for over 3,000 years." },
    ],
    learn: [
      { step: "Who could write", body: "Scribes trained for years in schools called 'tablet houses'. Most people never learned." },
      { step: "Later uses", body: "In time, cuneiform carried letters, medicine, astronomy and the Epic of Gilgamesh.", branches: ["The Epic of Gilgamesh"] },
    ],
    quiz: [
      { q: "What did most of the earliest writing record?", options: ["Prayers", "Goods and trade", "Love poems"], answer: 1, why: "Early tablets were mostly accounting records." },
    ],
    sources: [{ label: "Cuneiform overview", url: "https://en.wikipedia.org/wiki/Cuneiform" }],
  },
  {
    id: "library-alexandria",
    theme: "history",
    truth: "established",
    hook: "The Library of Alexandria probably didn't burn in one great fire.",
    body: "The famous library in Egypt is often imagined going up in flames in a single day. Historians think it faded over centuries instead, through cuts in funding, political purges and several separate fires.",
    deeper: [
      { title: "Julius Caesar's fire", body: "In 48 BCE, a fire Caesar's forces started in the harbour may have burned some books, but the library seems to have carried on afterwards." },
      { title: "A slow decline", body: "Scholars were expelled, money dried up and the city was fought over many times. Knowledge was lost bit by bit." },
    ],
    learn: [
      { step: "What it held", body: "Estimates range widely, from tens of thousands to hundreds of thousands of scrolls." },
      { step: "Why the myth lasts", body: "One dramatic fire makes a better story than centuries of neglect." },
    ],
    quiz: [
      { q: "What do historians think ended the library?", options: ["One great fire", "A slow decline over centuries", "An earthquake"], answer: 1, why: "It declined gradually, with several fires along the way." },
    ],
    sources: [{ label: "Library of Alexandria", url: "https://en.wikipedia.org/wiki/Library_of_Alexandria" }],
  },
  {
    id: "roman-concrete",
    theme: "history",
    truth: "established",
    hook: "Roman concrete heals its own cracks.",
    body: "Some Roman structures have stood for 2,000 years, even in seawater. A 2023 study found small lumps of lime in the concrete. When water seeps into a crack, they dissolve and seal it.",
    deeper: [
      { title: "Hot mixing", body: "Researchers think Romans mixed quicklime in hot, which left those lime lumps behind rather than a smooth mix." },
      { title: "Stronger with the sea", body: "In harbour walls, seawater reacts with volcanic ash in the mix to grow new minerals that make it tougher over time." },
    ],
    learn: [
      { step: "The Pantheon", body: "Its dome in Rome is still the largest unreinforced concrete dome in the world, nearly 1,900 years later." },
    ],
    quiz: [
      { q: "What helps Roman concrete seal cracks?", options: ["Lumps of lime", "Iron bars", "Animal blood"], answer: 0, why: "Lime lumps dissolve in water and fill the crack." },
    ],
    sources: [{ label: "Roman concrete overview", url: "https://en.wikipedia.org/wiki/Roman_concrete" }],
  },
  {
    id: "baalbek",
    theme: "history",
    truth: "established",
    hook: "There's a stone block in Lebanon heavier than four loaded jumbo jets.",
    body: "At Baalbek, Romans built a vast temple to Jupiter. In the nearby quarry lie cut blocks weighing around 1,000 tonnes. The largest, found in 2014, is thought to weigh about 1,650 tonnes.",
    deeper: [
      { title: "The Trilithon", body: "Three blocks of about 800 tonnes each sit in the temple's foundations, lifted several metres off the ground." },
      { title: "Who and how", body: "Archaeologists credit Roman engineers using levers, ramps and huge numbers of workers. Some alternative researchers argue the base is far older. The excavated evidence points to Rome." },
    ],
    learn: [
      { step: "Left in the quarry", body: "The biggest blocks never left the quarry. Nobody knows whether they were abandoned or never meant to move." },
    ],
    quiz: [
      { q: "Roughly how heavy is the largest block found at Baalbek?", options: ["16 tonnes", "165 tonnes", "1,650 tonnes"], answer: 2, why: "The 2014 find is estimated at about 1,650 tonnes." },
    ],
    sources: [{ label: "Baalbek overview", url: "https://en.wikipedia.org/wiki/Baalbek" }],
  },
  {
    id: "inca-walls",
    theme: "history",
    truth: "established",
    hook: "Inca stones fit so tightly you can't slide a blade between them.",
    body: "At Sacsayhuamán above Cusco, Peru, giant stones with many angled sides lock together without mortar. Some weigh over 100 tonnes. The walls have survived centuries of earthquakes.",
    deeper: [
      { title: "How they did it", body: "Experiments suggest masons shaped stones by pounding them with harder hammerstones, testing the fit and grinding again." },
      { title: "Built to move", body: "The irregular shapes and slightly inward-leaning walls help them shift and settle back during quakes." },
    ],
    learn: [
      { step: "Who built it", body: "The Inca built it in the 1400s. Spanish conquerors later took stones from it to build Cusco's churches." },
    ],
    quiz: [
      { q: "What holds Sacsayhuamán's stones together?", options: ["Mortar", "Metal clamps only", "A precise fit"], answer: 2, why: "The stones were shaped to lock together without mortar." },
    ],
    sources: [{ label: "Sacsayhuamán overview", url: "https://en.wikipedia.org/wiki/Sacsayhuam%C3%A1n" }],
  },
  {
    id: "nan-madol",
    theme: "history",
    truth: "established",
    hook: "In the Pacific, there's a ruined city built on artificial islands of stone.",
    body: "Nan Madol, off the island of Pohnpei in Micronesia, is made of nearly 100 small islands built from stacked basalt columns. Construction began around 1180 CE. How the heavy columns were moved is still unclear.",
    deeper: [
      { title: "Log-cabin stone", body: "Long six-sided basalt columns were stacked crosswise like logs, filled with coral rubble." },
      { title: "Local legend", body: "Pohnpeian tradition says two sorcerers flew the stones into place. It is a reminder of how remarkable the feat seemed." },
    ],
    learn: [
      { step: "A seat of power", body: "It was the centre of the Saudeleur dynasty, which ruled the island for centuries." },
    ],
    quiz: [
      { q: "What is Nan Madol built from?", options: ["Basalt columns", "Mud bricks", "Wood"], answer: 0, why: "Natural basalt columns were stacked to build the islets." },
    ],
    sources: [{ label: "Nan Madol overview", url: "https://en.wikipedia.org/wiki/Nan_Madol" }],
  },
  {
    id: "derinkuyu",
    theme: "history",
    truth: "established",
    hook: "A man knocked down a wall in his house and found an underground city.",
    body: "In 1963, a renovation in Cappadocia, Turkey, revealed a tunnel. It led to Derinkuyu, a city carved into soft rock, reaching about 85 metres deep. It could shelter thousands of people with their animals.",
    deeper: [
      { title: "A city below", body: "It had stables, wells, chapels, wine presses and air shafts. Huge rolling stone doors sealed each level from inside." },
      { title: "Who used it", body: "Its origins are uncertain. It was expanded over centuries, and people hid there during raids well into the 1900s." },
    ],
    learn: [
      { step: "Connected cities", body: "Cappadocia has hundreds of underground settlements, some linked by tunnels kilometres long." },
    ],
    quiz: [
      { q: "How was Derinkuyu rediscovered?", options: ["By satellite", "During a home renovation", "By a farmer's plough"], answer: 1, why: "A man knocking through a wall in 1963 found the entrance." },
    ],
    sources: [{ label: "Derinkuyu underground city", url: "https://en.wikipedia.org/wiki/Derinkuyu_underground_city" }],
  },
  {
    id: "bronze-age-collapse",
    theme: "history",
    truth: "established",
    hook: "Around 1177 BCE, the ancient world's great powers fell within a few decades.",
    body: "The Hittites, Mycenaean Greece and many trading cities collapsed in a short span. Egypt survived but was weakened. Writing disappeared in parts of Greece for centuries.",
    deeper: [
      { title: "The Sea Peoples", body: "Egyptian records describe raiders arriving by sea. Who they were is still unclear." },
      { title: "A perfect storm", body: "Many historians think drought, earthquakes, famine, raids and broken trade links all hit at once." },
    ],
    learn: [
      { step: "A connected world", body: "The Bronze Age relied on long trade routes for tin and copper. When those broke, everything wobbled." },
      { step: "What is debated", body: "The collapse is well documented. Which cause mattered most is still argued over." },
    ],
    quiz: [
      { q: "Which mysterious group appears in Egyptian records of this time?", options: ["The Sea Peoples", "The Vikings", "The Huns"], answer: 0, why: "Egyptian inscriptions describe invasions by the Sea Peoples." },
    ],
    sources: [{ label: "Late Bronze Age collapse", url: "https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse" }],
  },
  {
    id: "terracotta-army",
    theme: "history",
    truth: "established",
    hook: "Farmers digging a well found an army of 8,000 clay soldiers.",
    body: "In 1974, farmers near Xi'an, China, struck pottery while digging. They had found the Terracotta Army, buried with China's first emperor, Qin Shi Huang, over 2,200 years ago. Each soldier's face is different.",
    deeper: [
      { title: "Rivers of mercury", body: "An ancient historian wrote that the emperor's tomb held rivers of mercury. Soil tests above it show unusually high mercury levels." },
      { title: "Still sealed", body: "The emperor's own burial chamber has never been opened. Archaeologists are waiting for methods that will not damage it." },
    ],
    learn: [
      { step: "Painted originally", body: "The soldiers were once brightly painted. Most colour flaked off within minutes of meeting the air." },
    ],
    quiz: [
      { q: "Has Qin Shi Huang's burial chamber been opened?", options: ["Yes", "No"], answer: 1, why: "It remains sealed." },
    ],
    sources: [{ label: "Terracotta Army", url: "https://en.wikipedia.org/wiki/Terracotta_Army" }],
  },
  {
    id: "doggerland",
    theme: "history",
    truth: "established",
    hook: "You could once walk from Britain to Denmark.",
    body: "After the last Ice Age, a land called Doggerland joined Britain to mainland Europe. People hunted and fished there. Rising seas swallowed it, and by around 6000 BCE it was mostly gone.",
    deeper: [
      { title: "Found by fishermen", body: "Trawlers in the North Sea have dragged up mammoth bones, tools and a carved harpoon point." },
      { title: "A tsunami", body: "Around 6150 BCE, a huge undersea landslide off Norway sent a tsunami across what was left." },
    ],
    learn: [
      { step: "Lost lands everywhere", body: "Seas rose about 120 metres after the Ice Age, drowning coastlines where people lived all around the world." },
    ],
    quiz: [
      { q: "What covers Doggerland today?", options: ["The North Sea", "A forest", "Ice"], answer: 0, why: "It lies beneath the North Sea." },
    ],
    sources: [{ label: "Doggerland", url: "https://en.wikipedia.org/wiki/Doggerland" }],
  },
  {
    id: "gunung-padang",
    theme: "history",
    truth: "speculative",
    hook: "Is a hill in Java the world's oldest pyramid?",
    body: "Gunung Padang in West Java is a terraced hilltop site of stone columns. A 2023 paper claimed parts were built over 20,000 years ago, which would rewrite history. In 2024 the journal retracted it, saying the dates did not prove human construction.",
    deeper: [
      { title: "What the paper said", body: "Drilling found buried layers with ancient dates. The authors argued they were built structures." },
      { title: "Why it was retracted", body: "The dated soil had no sign of human activity, so its age says nothing about when people built anything." },
    ],
    learn: [
      { step: "What is known", body: "The terraces on top are a genuine megalithic site, probably built within the last few thousand years." },
      { step: "Why it draws attention", body: "If an advanced culture existed in the Ice Age, Southeast Asia's drowned coastline is one place people look.", branches: ["Sundaland, the lost landmass"] },
    ],
    quiz: [
      { q: "What happened to the 2023 Gunung Padang paper?", options: ["It won a prize", "It was retracted", "It was ignored"], answer: 1, why: "The journal retracted it in 2024." },
    ],
    sources: [{ label: "Gunung Padang", url: "https://en.wikipedia.org/wiki/Gunung_Padang" }],
  },
  {
    id: "heracleion",
    theme: "history",
    truth: "established",
    hook: "A lost Egyptian city was found under the sea in 2000.",
    body: "Heracleion was a busy port at the mouth of the Nile, mentioned by ancient writers but never found. Divers located it in Abu Qir Bay. Statues, temples and dozens of shipwrecks lie on the seabed.",
    deeper: [
      { title: "How it sank", body: "Earthquakes and rising water likely turned the soft ground to mush, and the city slid beneath the sea." },
      { title: "Giant statues", body: "Divers raised statues over five metres tall of a king, a queen and the god Hapi." },
    ],
    learn: [
      { step: "A city from legend", body: "Greek historian Herodotus wrote about it. For centuries many thought it might be myth." },
    ],
    quiz: [
      { q: "Where was Heracleion found?", options: ["In the desert", "Under the sea", "Under a modern city"], answer: 1, why: "It lies underwater in Abu Qir Bay, Egypt." },
    ],
    sources: [{ label: "Thonis-Heracleion", url: "https://en.wikipedia.org/wiki/Thonis-Heracleion" }],
  },
];

// Unexplained cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const unexplained: Card[] = [
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
  {
    id: "bimini-road",
    theme: "unexplained",
    truth: "debated",
    hook: "A stone 'road' appeared off the Bahamas just when a psychic said Atlantis would rise.",
    body: "In 1938, Edgar Cayce predicted part of Atlantis would be found near Bimini in 1968 or 1969. In 1968, divers found a long line of flat, rectangular stones there. Geologists say it is natural beachrock. Some researchers still see a wall or road.",
    deeper: [
      { title: "The natural view", body: "Beachrock forms quickly and cracks into straight-edged blocks as it dries, which can look man-made." },
      { title: "The alternative view", body: "Supporters point to stones that seem stacked and the line's tidy shape." },
    ],
    learn: [
      { step: "Who was Cayce?", body: "An American who gave thousands of trance readings in the early 1900s, many about Atlantis and healing." },
    ],
    quiz: [
      { q: "What do geologists say Bimini Road is?", options: ["A Roman road", "Natural beachrock", "A shipwreck"], answer: 1, why: "They identify it as natural beachrock." },
    ],
    sources: [{ label: "Bimini Road", url: "https://en.wikipedia.org/wiki/Bimini_Road" }],
  },
  {
    id: "yonaguni",
    theme: "unexplained",
    truth: "debated",
    hook: "Is there a sunken pyramid off Japan?",
    body: "In 1986, a diver off Yonaguni Island found huge underwater rock terraces with flat surfaces and sharp right angles. Marine geologist Masaaki Kimura argues they were shaped by people. Most geologists think the rock simply split that way.",
    deeper: [
      { title: "The case for", body: "Kimura points to what he sees as steps, a road and carved shapes." },
      { title: "The case against", body: "Sandstone here naturally fractures along straight lines, and similar shapes appear on land nearby." },
    ],
    learn: [
      { step: "If it were built", body: "It would have been above water at the end of the Ice Age, over 10,000 years ago." },
    ],
    quiz: [
      { q: "What kind of rock forms the Yonaguni monument?", options: ["Granite", "Sandstone", "Marble"], answer: 1, why: "It is mostly sandstone and mudstone, which splits in straight lines." },
    ],
    sources: [{ label: "Yonaguni Monument", url: "https://en.wikipedia.org/wiki/Yonaguni_Monument" }],
  },
  {
    id: "the-hum",
    theme: "unexplained",
    truth: "debated",
    hook: "Some people hear a low hum that no microphone picks up.",
    body: "In places like Taos in New Mexico and Bristol in England, a small share of people report a constant low droning sound, like a distant engine. Many others nearby hear nothing. The cause is still unknown.",
    deeper: [
      { title: "Possible causes", body: "Ideas include industrial machinery, ocean waves shaking the seabed, and the ear producing its own sound." },
      { title: "Real distress", body: "Whatever its source, those who hear it can find it disturbing and sleep-robbing." },
    ],
    learn: [
      { step: "Why it is hard to study", body: "If only some people hear it and equipment does not, it may be partly in how individual ears and brains work." },
    ],
    quiz: [
      { q: "Do recording devices pick up the Hum?", options: ["Usually not", "Always"], answer: 0, why: "In most cases, it has not been recorded." },
    ],
    sources: [{ label: "The Hum", url: "https://en.wikipedia.org/wiki/The_Hum" }],
  },
  {
    id: "dyatlov-pass",
    theme: "unexplained",
    truth: "debated",
    hook: "Nine hikers fled their tent into a frozen night. Why?",
    body: "In 1959, nine experienced hikers died in Russia's Ural Mountains. Their tent was cut open from inside, and some were found barefoot in the snow, a few with severe injuries. A 2021 study suggested a small slab avalanche. Others are not convinced.",
    deeper: [
      { title: "The avalanche theory", body: "Snow cut into the slope above the tent may have slid at night, forcing them out in panic." },
      { title: "Other theories", body: "Theories have included military tests, infrasound and attacks. None is proven." },
    ],
    learn: [
      { step: "Official verdicts", body: "Soviet investigators blamed 'a compelling natural force'. Russia reopened the case in 2019 and pointed to an avalanche." },
    ],
    quiz: [
      { q: "How was the tent opened?", options: ["Cut from inside", "Torn by wind", "Unzipped"], answer: 0, why: "It was cut open from the inside." },
    ],
    sources: [{ label: "Dyatlov Pass incident", url: "https://en.wikipedia.org/wiki/Dyatlov_Pass_incident" }],
  },
  {
    id: "phaistos-disc",
    theme: "unexplained",
    truth: "debated",
    hook: "A clay disc from Crete holds a message no one can read.",
    body: "The Phaistos Disc, found in 1908, is covered in a spiral of 241 stamped symbols on both sides. It is thought to date from around 1700 BCE. Nothing else with the same script has ever been found.",
    deeper: [
      { title: "The first printing?", body: "The symbols were pressed in with stamps, making it an early example of movable type." },
      { title: "Is it real?", body: "A few scholars have questioned whether it is a forgery, since it is one of a kind." },
    ],
    learn: [
      { step: "Why it cannot be cracked", body: "With so few symbols and no other examples, there is not enough text to decode." },
    ],
    quiz: [
      { q: "How were the symbols made?", options: ["Painted", "Carved with a knife", "Pressed with stamps"], answer: 2, why: "They were stamped into wet clay." },
    ],
    sources: [{ label: "Phaistos Disc", url: "https://en.wikipedia.org/wiki/Phaistos_Disc" }],
  },
  {
    id: "mary-celeste",
    theme: "unexplained",
    truth: "debated",
    hook: "In 1872, a ship was found sailing with no one on board.",
    body: "The Mary Celeste was found drifting in the Atlantic, in fair condition, with food, water and cargo aboard. The captain, his wife, their daughter and the crew were gone, along with the lifeboat. They were never seen again.",
    deeper: [
      { title: "A leading idea", body: "Fumes from the cargo of alcohol, or fear the ship was sinking, may have sent everyone into the lifeboat in a hurry." },
      { title: "The legend grows", body: "A short story by Arthur Conan Doyle added invented details, like half-eaten breakfasts, that many still believe." },
    ],
    learn: [
      { step: "What is known", body: "The lifeboat was missing and some cargo barrels were empty. Beyond that, it is guesswork." },
    ],
    quiz: [
      { q: "What was missing from the Mary Celeste?", options: ["The lifeboat", "The cargo", "The sails"], answer: 0, why: "The lifeboat was gone." },
    ],
    sources: [{ label: "Mary Celeste", url: "https://en.wikipedia.org/wiki/Mary_Celeste" }],
  },
  {
    id: "ball-lightning",
    theme: "unexplained",
    truth: "established",
    hook: "Glowing balls of light sometimes float through storms, and even into houses.",
    body: "For centuries, people have reported ball lightning: glowing orbs that hover, drift and vanish, sometimes indoors. Scientists long doubted it. In 2012, researchers in China caught one on camera by chance and recorded its light.",
    deeper: [
      { title: "What it was made of", body: "The recording showed elements from the soil, supporting the idea that lightning vaporises earth into a glowing cloud." },
      { title: "Still unexplained", body: "Other theories exist, and no one can yet reliably make it in a lab." },
    ],
    learn: [
      { step: "Rare but real", body: "Sightings are rare and unpredictable, which is why it took so long to measure one." },
    ],
    quiz: [
      { q: "What did the 2012 recording suggest ball lightning contains?", options: ["Soil elements", "Pure water", "Gold"], answer: 0, why: "Its light showed silicon, iron and calcium from the soil." },
    ],
    sources: [{ label: "Ball lightning", url: "https://en.wikipedia.org/wiki/Ball_lightning" }],
  },
  {
    id: "tunguska",
    theme: "unexplained",
    truth: "established",
    hook: "In 1908, something flattened 80 million trees in Siberia but left no crater.",
    body: "A huge explosion over the Tunguska River in Russia flattened forest across about 2,000 square kilometres. People 60 km away were knocked off their feet. No crater or large fragments were ever found.",
    deeper: [
      { title: "The explanation", body: "Most scientists think a space rock or comet tens of metres wide exploded in the air before hitting the ground." },
      { title: "Wild theories", body: "Its mystery invited ideas from crashing spaceships to tiny black holes. The airburst is far better supported." },
    ],
    learn: [
      { step: "A warning", body: "Had it struck a city, it would have been devastating. It helped inspire today's asteroid tracking." },
    ],
    quiz: [
      { q: "Why was there no crater at Tunguska?", options: ["It exploded in the air", "It landed in a lake", "It was a volcano"], answer: 0, why: "The object burst in the air above the ground." },
    ],
    sources: [{ label: "Tunguska event", url: "https://en.wikipedia.org/wiki/Tunguska_event" }],
  },
];

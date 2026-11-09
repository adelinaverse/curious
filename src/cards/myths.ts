// Myths & Legends cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const myths: Card[] = [
  {
    id: "flood-tablet",
    theme: "myths",
    truth: "established",
    hook: "A self-taught printer found a flood story older than Noah's on a clay tablet.",
    body: "In 1872, George Smith, a British Museum assistant who had left school young, was sorting tablets from an ancient library at Nineveh. On one he read of a man warned by the gods to build a great boat, save his family and the animals, and send out birds to find dry land. It was part of the Epic of Gilgamesh, and the parallels with Noah stunned Victorian London.",
    deeper: [
      { title: "The man in the boat", body: "His name is Utnapishtim. After the storm his boat comes to rest on Mount Nimush. He sends out a dove and a swallow, which come back, then a raven, which does not. That is how he knows the waters have gone down." },
      { title: "A famous reaction", body: "Accounts say that when Smith realised what he was reading, he leapt up and ran around the room in such excitement that he began taking off his clothes." },
      { title: "Where it came from", body: "The tablet was dug up at Nineveh, in today's Iraq, from the library of the Assyrian king Ashurbanipal, who reigned in the 600s BCE. It is in the British Museum as K.3375." },
    ],
    learn: [
      { step: "A self-made scholar", body: "Smith had almost no schooling. He worked as a printer's apprentice and taught himself to read cuneiform in his spare time at the museum.", branches: ["How cuneiform was deciphered"] },
      { step: "Back to Nineveh", body: "A London newspaper paid for him to travel to Mesopotamia to find more pieces of the story. He died there on a later trip in 1876, aged just 36." },
    ],
    quiz: [
      { q: "Which bird did NOT return to Utnapishtim's boat?", options: ["The dove", "The swallow", "The raven"], answer: 2, why: "The raven found land and stayed away, a sign the flood was over." },
      { q: "When did George Smith announce the flood story?", options: ["1772", "1872", "1972"], answer: 1, why: "He read his translation to the Society of Biblical Archaeology in December 1872." },
    ],
    sources: [
      { label: "The Flood Tablet (British Museum, Google Arts & Culture)", url: "https://artsandculture.google.com/asset/the-flood-tablet-relating-part-of-the-epic-of-gilgamesh/wQGL1dmyVmXRYA" },
      { label: "George Smith, Linda Hall Library", url: "https://www.lindahall.org/about/news/scientist-of-the-day/george-smith/" },
    ],
  },
  {
    id: "troy-real",
    theme: "myths",
    truth: "debated",
    hook: "Was there a real Trojan War?",
    body: "For centuries, Troy was thought to be pure legend. In the 1870s, Heinrich Schliemann dug into a mound called Hisarlik in Turkey and found a city, layer upon layer. Whether a war like Homer's ever happened there is still an open question.",
    deeper: [
      { title: "The case for", body: "Hittite records mention a place called Wilusa, which many scholars link to Ilios, Homer's other name for Troy. A treaty from about 1280 BCE names its ruler as Alaksandu, which sounds a lot like Alexander, another name for Paris." },
      { title: "The case against", body: "Some historians, like Finley, argued none of the Iliad's events are historical. Others say the evidence is too thin to decide, and that the question may never be answerable." },
      { title: "Schliemann's mistake", body: "The layer Schliemann thought was Homer's Troy turned out to be about a thousand years too old." },
    ],
    learn: [
      { step: "Cities on cities", body: "Hisarlik holds many settlements stacked on top of each other, built over thousands of years. Archaeologists still argue about which layer matches the story." },
    ],
    quiz: [
      { q: "What is the name of the mound in Turkey identified as Troy?", options: ["Hisarlik", "Mycenae", "Knossos"], answer: 0, why: "Hisarlik, in northwest Turkey, is the site Schliemann excavated." },
    ],
    sources: [{ label: "Historicity of the Iliad", url: "https://en.wikipedia.org/wiki/Historicity_of_the_Iliad" }],
  },
  {
    id: "crater-lake-legend",
    theme: "myths",
    truth: "debated",
    hook: "A Native American story may remember a volcano that exploded 7,700 years ago.",
    body: "About 7,700 years ago, Mount Mazama in Oregon erupted so violently that it collapsed, leaving the bowl that now holds Crater Lake. The Klamath people tell of a battle between Llao, spirit of the underworld, and Skell, spirit of the sky, that destroyed the mountain. Many see the story as a memory of the real eruption, though that link is hard to prove.",
    deeper: [
      { title: "The legend", body: "In the story, Skell defeats Llao and seals his underworld with the top of the mountain, then fills the pit with water. Llao's head is said to be Wizard Island, which rises from the lake today." },
      { title: "The real blast", body: "The climactic eruption lasted only a few days and was more than forty times as powerful as Mount St. Helens in 1980." },
      { title: "Why it's debated", body: "A story about fire and a fallen mountain fits the geology well. But oral traditions change over time, so it is hard to be sure how much of the tale goes back to people who saw it." },
    ],
    learn: [
      { step: "Deepest lake in the US", body: "Crater Lake is 1,943 feet deep, the deepest freshwater lake in the United States." },
      { step: "Geomythology", body: "This is a field that asks whether myths preserve memories of real natural events, like eruptions, floods and earthquakes.", branches: ["Other myths that may record real events"] },
    ],
    quiz: [
      { q: "In the Klamath story, who is Llao?", options: ["The sky spirit", "The underworld spirit", "A great chief"], answer: 1, why: "Llao rules the underworld and fights Skell, the sky spirit." },
    ],
    sources: [
      { label: "Llao", url: "https://en.wikipedia.org/wiki/Llao" },
      { label: "Mount Mazama, Oregon Encyclopedia", url: "https://oregonencyclopedia.org/articles/mt_mazama/" },
    ],
  },
  {
    id: "kraken-squid",
    theme: "myths",
    truth: "established",
    hook: "The kraken was real. We just call it the giant squid.",
    body: "Sailors' tales of a huge many-armed sea monster go back at least to a Norwegian account from 1180. In 1853, a giant squid washed up on a Danish beach, and a scientist named it Architeuthis. The largest recorded reached about 18 metres, counting its two long tentacles.",
    deeper: [
      { title: "A scientist believed it", body: "Carl Linnaeus included the kraken among real animals in the first edition of his great catalogue of nature in 1735." },
      { title: "Finally on film", body: "In 2005, Japanese researchers T. Kubodera and K. Mori released the first footage of a live giant squid in the wild, about 900 metres down in the North Pacific." },
    ],
    learn: [
      { step: "Built for the dark", body: "Giant squid live deep, down to around 1,100 metres and perhaps 2,000. That is why so few people have ever seen one alive." },
      { step: "Still a puzzle", body: "Scientists still debate whether there is one species of giant squid or as many as 20." },
    ],
    quiz: [
      { q: "About how long was the largest giant squid on record?", options: ["5 metres", "18 metres", "40 metres"], answer: 1, why: "About 18 metres, including its very long tentacles. Most are much smaller." },
    ],
    sources: [{ label: "The real-life origins of the legendary Kraken, The Conversation", url: "https://theconversation.com/the-real-life-origins-of-the-legendary-kraken-52058" }],
  },
  {
    id: "cyclops-skulls",
    theme: "myths",
    truth: "speculative",
    hook: "Did elephant skulls give the Greeks the idea of the Cyclops?",
    body: "Dwarf elephants once lived on Mediterranean islands like Sicily, Malta, Crete and Cyprus. Their skulls have one big hole in the middle, which is really the opening for the trunk, and it looks a lot like a single eye socket. In 1914, palaeontologist Othenio Abel suggested this might be where the one-eyed giants came from.",
    deeper: [
      { title: "Why it's appealing", body: "Sicily is where the Cyclops Polyphemus lives in Homer's Odyssey. And ancient Greeks did collect and puzzle over giant bones they found." },
      { title: "Why it's unproven", body: "Historian Adrienne Mayor, who has studied fossils in myth, says we cannot know which came first, the bones or the stories. One-eyed giants also appear in folklore far from these islands." },
    ],
    learn: [
      { step: "Tiny elephants", body: "Island elephants shrank over many generations. Some stood only about three feet tall at the shoulder." },
      { step: "Before Alexander", body: "Most Greeks had never seen a living elephant before the time of Alexander the Great, so a skull would have been a mystery.", branches: ["Other myths linked to fossils"] },
    ],
    quiz: [
      { q: "What is the 'eye' in a dwarf elephant skull really?", options: ["An eye socket", "The opening for the trunk", "A wound"], answer: 1, why: "It is the nasal opening where the trunk attached. The real eye sockets are small and on the sides." },
    ],
    sources: [
      { label: "How misread fossil skulls influenced the Cyclops myth, The Collector", url: "https://www.thecollector.com/cyclops-fossil-greek-myth/" },
      { label: "Did fossils inspire the Cyclops? Discover Magazine", url: "https://www.discovermagazine.com/the-sciences/one-eyed-looking-mammoth-fossils-may-have-inspired-origins-of-the-cyclops" },
    ],
  },
  {
    id: "lost-pleiad",
    theme: "myths",
    truth: "speculative",
    hook: "Could the story of the Seven Sisters be 100,000 years old?",
    body: "Look at the Pleiades star cluster and you will probably count six stars. Yet cultures across the world, from ancient Greece to Aboriginal Australia, call them seven sisters and tell of one who is missing. Astronomers Ray and Barnaby Norris have suggested a reason: long ago, a seventh star may really have been visible.",
    deeper: [
      { title: "The idea", body: "Two stars in the cluster, Pleione and Atlas, now sit so close they look like one. The Norrises calculate that about 100,000 years ago they were far enough apart for sharp eyes to see both." },
      { title: "Why it's speculative", body: "If true, the story would be older than humans leaving Africa. The authors frame it as a possibility, not a proof, and similar stories could also have arisen separately." },
    ],
    learn: [
      { step: "The missing sister", body: "In the Greek myth, one daughter of Atlas hides after falling in love with a mortal. In Aboriginal versions, a sister has died, is hiding, is too young, or was taken away." },
    ],
    quiz: [
      { q: "How many Pleiades stars do most people see with the naked eye?", options: ["Four", "Six", "Twelve"], answer: 1, why: "Most people see about six, even though the stories speak of seven sisters." },
    ],
    sources: [{ label: "The world's oldest story? The Conversation", url: "https://www.theconversation.com/the-worlds-oldest-story-astronomers-say-global-myths-about-seven-sisters-stars-may-reach-back-100-000-years-151568" }],
  },
  {
    id: "narwhal-unicorn",
    theme: "myths",
    truth: "established",
    hook: "For centuries, Europe's 'unicorn horns' were whale teeth.",
    body: "The spiral horns sold as unicorn horn in Europe came from the narwhal, a small Arctic whale. The 'horn' is really a tooth that grows out through its upper lip, twisting as it goes, up to about 2.5 metres long. People believed it could detect poison, and royalty paid fortunes for one.",
    deeper: [
      { title: "A gift for a queen", body: "The explorer Sir Humphrey Gilbert gave Elizabeth I a jewelled narwhal tusk said to be worth £10,000, enough at the time to buy a small castle." },
      { title: "The 'sea unicorn'", body: "An account of Martin Frobisher's Arctic voyage in 1577 describes a 'sea unicorne', and his men took its horn home." },
    ],
    learn: [
      { step: "What the tusk is for", body: "Nobody is sure. The tusk has about ten million nerve endings, so it may sense the water around it. It may also help males impress mates." },
      { step: "Usually on the left", body: "In males, it is normally the left tooth that grows into the long tusk." },
    ],
    quiz: [
      { q: "What is a narwhal's tusk?", options: ["A horn made of keratin", "A tooth", "A bone in the skull"], answer: 1, why: "It is an elongated tooth that grows out through the upper lip." },
    ],
    sources: [
      { label: "Consider the narwhal, London Review of Books", url: "https://www.lrb.co.uk/v41/n01/katherine-rundell/consider-the-narwhal" },
      { label: "Narwhal, 1911 Encyclopaedia Britannica", url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Narwhal" },
    ],
  },
  {
    id: "weekday-gods",
    theme: "myths",
    truth: "established",
    hook: "You say the names of Norse gods every week.",
    body: "Tuesday is Tiw's day, Wednesday is Woden's day, Thursday is Thor's day and Friday is Frigg's day. These names come from Old English. Germanic peoples took the Roman week, named after the planets and their gods, and swapped in their own gods.",
    deeper: [
      { title: "The swap", body: "Mars became Tiw, Mercury became Woden (Odin), Jupiter became Thor and Venus became Frigg." },
      { title: "The one they kept", body: "Saturday was never swapped. It is still Saturn's day, straight from the Roman name." },
    ],
    learn: [
      { step: "Seven planets, seven days", body: "The Roman week named its days after the seven wandering lights of the sky: Sun, Moon, Mars, Mercury, Jupiter, Venus and Saturn." },
      { step: "Very old roots", body: "Most historians trace the seven-day week back to the Babylonians, about 4,000 years ago. Constantine made it official in Rome in 321 CE.", branches: ["Why seven days?"] },
    ],
    quiz: [
      { q: "Which day is named after the god Woden, or Odin?", options: ["Tuesday", "Wednesday", "Thursday"], answer: 1, why: "Wednesday comes from the Old English Wōdnesdæg, Woden's day." },
      { q: "Which English weekday keeps a Roman god's name?", options: ["Friday", "Saturday", "Thursday"], answer: 1, why: "Saturday is Saturn's day. The others were swapped for Germanic gods." },
    ],
    sources: [{ label: "Names of the days of the week", url: "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week" }],
  },
];

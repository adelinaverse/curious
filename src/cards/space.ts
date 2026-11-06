// Space & Time cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const space: Card[] = [
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
    id: "voyager",
    theme: "space",
    truth: "established",
    hook: "A spacecraft launched in 1977 is still sending messages from interstellar space.",
    body: "Voyager 1 left Earth in 1977 and is now more than 24 billion kilometres away, the most distant human-made object. Its signal takes over 22 hours to reach us. It carries a golden record of sounds and images from Earth.",
    deeper: [
      { title: "The Golden Record", body: "It holds greetings in 55 languages, music from Bach to Chuck Berry, and the sounds of rain, laughter and a heartbeat." },
      { title: "Leaving the Sun's bubble", body: "In 2012, Voyager 1 crossed the edge of the Sun's influence into interstellar space." },
    ],
    learn: [
      { step: "Running on less", body: "Its power is slowly fading, and engineers switch off instruments one by one to keep it talking." },
    ],
    quiz: [
      { q: "When did Voyager 1 launch?", options: ["1969", "1977", "1990"], answer: 1, why: "It launched in September 1977." },
    ],
    sources: [{ label: "Voyager 1", url: "https://en.wikipedia.org/wiki/Voyager_1" }],
  },
  {
    id: "neutron-star",
    theme: "space",
    truth: "established",
    hook: "A teaspoon of neutron star would weigh about a billion tonnes.",
    body: "When a giant star explodes, its core can collapse into a ball about 20 km across holding more mass than the Sun. Atoms are crushed together so tightly that a spoonful weighs as much as a mountain.",
    deeper: [
      { title: "Spinning lighthouses", body: "Some neutron stars, called pulsars, spin hundreds of times a second and sweep beams of radio waves across space." },
      { title: "Gold factories", body: "When two neutron stars collide, they forge heavy elements, including much of the universe's gold." },
    ],
    learn: [
      { step: "How they form", body: "A star many times heavier than the Sun runs out of fuel, explodes as a supernova and leaves its crushed core behind." },
    ],
    quiz: [
      { q: "Roughly how wide is a neutron star?", options: ["20 km", "2,000 km", "200,000 km"], answer: 0, why: "They are about the size of a city." },
    ],
    sources: [{ label: "Neutron star", url: "https://en.wikipedia.org/wiki/Neutron_star" }],
  },
  {
    id: "stardust",
    theme: "space",
    truth: "established",
    hook: "The calcium in your bones was made inside a star.",
    body: "The Big Bang made mostly hydrogen and helium. Almost every other element in your body, from the carbon in your cells to the iron in your blood, was forged inside stars and scattered when they died.",
    deeper: [
      { title: "Star furnaces", body: "Stars fuse light elements into heavier ones in their cores, all the way up to iron." },
      { title: "Explosions do the rest", body: "Supernovae and star collisions create heavier elements and spread them through space." },
    ],
    learn: [
      { step: "Recycled", body: "The Sun and Earth formed from gas and dust left by earlier generations of stars." },
    ],
    quiz: [
      { q: "Where was most of the iron in your blood made?", options: ["In the Big Bang", "Inside stars", "On Earth"], answer: 1, why: "Iron is forged in the cores of massive stars." },
    ],
    sources: [{ label: "Nucleosynthesis", url: "https://en.wikipedia.org/wiki/Nucleosynthesis" }],
  },
  {
    id: "saturn-rings-age",
    theme: "space",
    truth: "debated",
    hook: "Saturn's rings might be younger than the dinosaurs.",
    body: "Data from the Cassini spacecraft suggested the rings are bright and clean, as if only 100 to 400 million years old. Saturn itself is 4.5 billion years old. Other scientists argue the rings could be ancient and simply stay clean.",
    deeper: [
      { title: "The young camp", body: "Dust from space should darken ice over time. The rings look too fresh to be billions of years old." },
      { title: "The old camp", body: "Some models suggest impacts might not leave as much dirt behind as assumed." },
    ],
    learn: [
      { step: "Rings are vanishing", body: "Ice slowly rains down onto Saturn. The rings may be gone in a few hundred million years." },
    ],
    quiz: [
      { q: "Which spacecraft studied Saturn's rings up close?", options: ["Voyager", "Cassini", "Hubble"], answer: 1, why: "Cassini orbited Saturn from 2004 to 2017." },
    ],
    sources: [{ label: "Rings of Saturn", url: "https://en.wikipedia.org/wiki/Rings_of_Saturn" }],
  },
  {
    id: "olympus-mons",
    theme: "space",
    truth: "established",
    hook: "Mars has a volcano almost three times taller than Everest.",
    body: "Olympus Mons rises about 22 km above the Martian plains. It is so wide, about 600 km, that if you stood on it the slope would vanish past the horizon.",
    deeper: [
      { title: "Why so big?", body: "Mars has no moving tectonic plates, so lava kept piling up in one spot for millions of years." },
      { title: "Gentle slopes", body: "The sides average only about five degrees. You could walk up most of it." },
    ],
    learn: [
      { step: "Low gravity", body: "Mars's gravity is about a third of Earth's, letting mountains grow taller without collapsing." },
    ],
    quiz: [
      { q: "Why could Olympus Mons grow so tall?", options: ["No moving plates", "More rain", "More oxygen"], answer: 0, why: "Lava piled up in one place for ages." },
    ],
    sources: [{ label: "Olympus Mons", url: "https://en.wikipedia.org/wiki/Olympus_Mons" }],
  },
  {
    id: "moon-drifting",
    theme: "space",
    truth: "established",
    hook: "The Moon is drifting away from us, about as fast as your fingernails grow.",
    body: "Apollo astronauts left mirrors on the Moon. By bouncing lasers off them, scientists measure that it moves about 3.8 cm further away each year. Earth's days are slowly getting longer as a result.",
    deeper: [
      { title: "Tidal tug", body: "The Moon's pull raises tides, and the friction drags on Earth's spin while giving the Moon a push outward." },
      { title: "Ancient long nights", body: "Hundreds of millions of years ago, a day lasted less than 22 hours." },
    ],
    learn: [
      { step: "Still working", body: "The Apollo mirrors placed over 50 years ago are still used today." },
    ],
    quiz: [
      { q: "How do we measure the Moon's distance so precisely?", options: ["Lasers and mirrors", "Rulers", "Radio music"], answer: 0, why: "Lasers bounce off mirrors left by Apollo crews." },
    ],
    sources: [{ label: "Lunar Laser Ranging", url: "https://en.wikipedia.org/wiki/Lunar_Laser_Ranging_experiments" }],
  },
  {
    id: "dark-universe",
    theme: "space",
    truth: "established",
    hook: "About 95% of the universe is made of something we can't see.",
    body: "Everything we can detect, every star, planet and person, makes up only about 5% of the universe. The rest is 'dark matter' and 'dark energy'. We can measure their effects, but nobody knows what they are.",
    deeper: [
      { title: "Dark matter", body: "Galaxies spin so fast they should fly apart. Something unseen, with gravity, holds them together." },
      { title: "Dark energy", body: "The universe's expansion is speeding up. Something is pushing it, and we call that dark energy." },
    ],
    learn: [
      { step: "Names for unknowns", body: "Both terms are placeholders. They describe what we observe, not what the stuff actually is." },
    ],
    quiz: [
      { q: "Roughly how much of the universe is ordinary matter?", options: ["5%", "50%", "95%"], answer: 0, why: "Only about 5% is the matter we know." },
    ],
    sources: [{ label: "Dark matter", url: "https://en.wikipedia.org/wiki/Dark_matter" }],
  },
  {
    id: "diamond-rain",
    theme: "space",
    truth: "debated",
    hook: "It may rain diamonds on Neptune and Uranus.",
    body: "Deep inside these ice giants, crushing pressure may squeeze carbon into diamonds that sink like hail. Lab experiments have made tiny diamonds under similar conditions, but no one has seen it happen on the planets.",
    deeper: [
      { title: "In the lab", body: "In 2017, scientists blasted plastic with lasers to mimic the pressure and saw nanodiamonds form." },
      { title: "Oceans of diamond?", body: "Some models suggest liquid carbon layers deep inside, with diamond 'icebergs' floating in them." },
    ],
    learn: [
      { step: "Why it matters", body: "It could explain the strange magnetic fields of these planets." },
    ],
    quiz: [
      { q: "Has diamond rain been seen on Neptune?", options: ["Yes", "No, only made in labs"], answer: 1, why: "It is predicted and recreated in labs, not observed." },
    ],
    sources: [{ label: "Neptune overview", url: "https://en.wikipedia.org/wiki/Neptune" }],
  },
  {
    id: "betelgeuse",
    theme: "space",
    truth: "established",
    hook: "In 2019, one of the brightest stars in the sky suddenly dimmed.",
    body: "Betelgeuse, the red shoulder of Orion, lost more than half its brightness over a few months. People wondered if it was about to explode. Astronomers found it had burped out a cloud of dust that blocked its light.",
    deeper: [
      { title: "A future supernova", body: "Betelgeuse will explode one day, but probably not for around 100,000 years." },
      { title: "When it goes", body: "It will shine as bright as the half Moon for weeks and be visible in daylight." },
    ],
    learn: [
      { step: "Huge", body: "If it sat where the Sun is, it would swallow the orbits of Mars and possibly Jupiter." },
    ],
    quiz: [
      { q: "Why did Betelgeuse dim?", options: ["It exploded", "A dust cloud", "A planet passed"], answer: 1, why: "A cloud of dust it released blocked its light." },
    ],
    sources: [{ label: "Betelgeuse", url: "https://en.wikipedia.org/wiki/Betelgeuse" }],
  },
  {
    id: "oumuamua",
    theme: "space",
    truth: "debated",
    hook: "In 2017, an object from another star system flew past us.",
    body: "ʻOumuamua was the first object seen passing through our solar system from interstellar space. It was long, tumbling, and sped up slightly as it left. Harvard astronomer Avi Loeb suggested it could be alien technology. Most astronomers favour a natural explanation.",
    deeper: [
      { title: "The puzzle", body: "Its small push away from the Sun had no visible gas jet, which comets usually show." },
      { title: "Natural ideas", body: "Suggestions include a fragment of hydrogen ice or a piece of a shattered planet." },
    ],
    learn: [
      { step: "Not the last", body: "More interstellar visitors have been found since, including a comet in 2019 and 3I/ATLAS in 2025." },
    ],
    quiz: [
      { q: "What made ʻOumuamua special?", options: ["It came from another star system", "It hit the Moon", "It glowed green"], answer: 0, why: "It was the first known interstellar object." },
    ],
    sources: [{ label: "ʻOumuamua", url: "https://en.wikipedia.org/wiki/%CA%BBOumuamua" }],
  },
  {
    id: "eclipse-coincidence",
    theme: "space",
    truth: "established",
    hook: "Perfect eclipses happen because of a cosmic coincidence.",
    body: "The Sun is about 400 times wider than the Moon, and also about 400 times further away. So from Earth they look almost exactly the same size, letting the Moon cover the Sun precisely.",
    deeper: [
      { title: "A temporary gift", body: "As the Moon drifts away, total eclipses will eventually stop happening, in hundreds of millions of years." },
      { title: "The corona", body: "Only during totality can you see the Sun's glowing outer atmosphere with the naked eye." },
    ],
    learn: [
      { step: "Annular eclipses", body: "When the Moon is a bit further away, it leaves a ring of fire around the edge." },
    ],
    quiz: [
      { q: "How many times further away is the Sun than the Moon?", options: ["About 4", "About 40", "About 400"], answer: 2, why: "Matching its 400 times greater width." },
    ],
    sources: [{ label: "Solar eclipse", url: "https://en.wikipedia.org/wiki/Solar_eclipse" }],
  },
  {
    id: "ancient-sunlight",
    theme: "space",
    truth: "established",
    hook: "The sunlight on your skin began its journey thousands of years ago.",
    body: "Light takes about 8 minutes to reach us from the Sun's surface. But the energy was made in the core, and bouncing its way out through the dense inside of the Sun takes tens of thousands of years or more.",
    deeper: [
      { title: "A random walk", body: "Energy is absorbed and re-emitted countless times, zigzagging slowly outward." },
      { title: "Estimates vary", body: "Calculations range from about 10,000 to over 100,000 years." },
    ],
    learn: [
      { step: "What powers it", body: "In the core, hydrogen fuses into helium at around 15 million degrees Celsius." },
    ],
    quiz: [
      { q: "How long does sunlight take to reach Earth from the Sun's surface?", options: ["8 seconds", "8 minutes", "8 days"], answer: 1, why: "About 8 minutes and 20 seconds." },
    ],
    sources: [{ label: "Sun overview", url: "https://en.wikipedia.org/wiki/Sun" }],
  },
];

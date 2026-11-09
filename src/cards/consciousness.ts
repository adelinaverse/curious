// Consciousness cards. Copy any card below to make a new one.
import type { Card } from '../types';

export const consciousness: Card[] = [
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
  {
    id: "lucid-dreaming",
    theme: "consciousness",
    truth: "established",
    hook: "Scientists have talked to people while they were dreaming.",
    body: "In a lucid dream, you know you are dreaming. In the late 1970s, researchers showed lucid dreamers could signal from inside a dream using agreed eye movements. In 2021, teams in four countries asked dreamers maths questions, and some answered correctly with their eyes.",
    deeper: [
      { title: "Proof from the lab", body: "Eye movements are one of the few muscles free during REM sleep, so they became a window into the dream." },
      { title: "Learnable", body: "Many people can learn to have lucid dreams with practice, like checking reality during the day." },
    ],
    learn: [
      { step: "A simple technique", body: "Ask yourself 'am I dreaming?' several times a day. The habit can carry over into dreams.", branches: ["Dream journalling"] },
    ],
    quiz: [
      { q: "How did dreamers answer questions in the 2021 study?", options: ["By talking", "With eye movements", "By writing"], answer: 1, why: "They used agreed eye signals while still asleep." },
    ],
    sources: [{ label: "Lucid dream", url: "https://en.wikipedia.org/wiki/Lucid_dream" }],
  },
  {
    id: "split-brain",
    theme: "consciousness",
    truth: "established",
    hook: "Cutting the brain in half can create two minds that disagree.",
    body: "To treat severe epilepsy, some patients had the bridge between their brain's halves cut. Roger Sperry's experiments, which won a Nobel Prize in 1981, showed each half could see, know and want different things.",
    deeper: [
      { title: "Two hands, two wills", body: "Some patients described one hand buttoning a shirt while the other unbuttoned it." },
      { title: "The storyteller", body: "When the speaking half did not know why the other half acted, it confidently made up a reason." },
    ],
    learn: [
      { step: "What it suggests", body: "Our sense of being one unified self may be something the brain builds, not something fixed." },
    ],
    quiz: [
      { q: "Who won a Nobel Prize for split-brain research?", options: ["Roger Sperry", "Sigmund Freud", "Carl Jung"], answer: 0, why: "Sperry shared the 1981 Nobel Prize." },
    ],
    sources: [{ label: "Split-brain", url: "https://en.wikipedia.org/wiki/Split-brain" }],
  },
  {
    id: "psilocybin-research",
    theme: "consciousness",
    truth: "established",
    hook: "In a 2006 study, most volunteers ranked a single session among their life's most meaningful moments.",
    body: "Researchers at Johns Hopkins gave psilocybin, the compound in 'magic mushrooms', to healthy volunteers under careful supervision. Most rated the experience among the most meaningful of their lives, and many still did over a year later.",
    deeper: [
      { title: "The quiet network", body: "Brain scans show psilocybin quiets the 'default mode network', linked to our sense of self and mind-wandering." },
      { title: "A careful field", body: "Studies use screening, preparation and trained guides. Results outside those settings can be very different." },
    ],
    learn: [
      { step: "Not advice", body: "Psilocybin is illegal in many countries and carries real risks. This card is about the research, not a recommendation." },
    ],
    quiz: [
      { q: "Which brain network does psilocybin quiet?", options: ["The default mode network", "The motor network", "The visual network"], answer: 0, why: "It reduces activity in the default mode network." },
    ],
    sources: [{ label: "Psilocybin", url: "https://en.wikipedia.org/wiki/Psilocybin" }],
  },
  {
    id: "ganzfeld",
    theme: "consciousness",
    truth: "debated",
    hook: "Can one person send an image to another's mind?",
    body: "In ganzfeld experiments, a 'receiver' relaxes with halved ping-pong balls over their eyes and white noise in their ears. A 'sender' in another room focuses on an image. Some analyses report hits above chance. Critics say flaws and selective reporting explain it.",
    deeper: [
      { title: "The numbers", body: "Choosing from four images, chance is 25%. Some meta-analyses report around 30 to 32%." },
      { title: "The objections", body: "Sceptics point to small studies, unpublished failures and the difficulty of fully sealing off cues." },
    ],
    learn: [
      { step: "Why ganzfeld?", body: "Blocking out normal sights and sounds is meant to make faint signals easier to notice." },
    ],
    quiz: [
      { q: "With four images, what hit rate is pure chance?", options: ["10%", "25%", "50%"], answer: 1, why: "One in four is 25%." },
    ],
    sources: [{ label: "Ganzfeld experiment", url: "https://en.wikipedia.org/wiki/Ganzfeld_experiment" }],
  },
  {
    id: "past-life-children",
    theme: "consciousness",
    truth: "speculative",
    hook: "A psychiatrist spent 40 years studying children who described past lives.",
    body: "Dr Ian Stevenson at the University of Virginia collected around 2,500 cases of young children who spoke of memories from another life. In some cases, he said details matched a real person who had died. Critics say memory, culture and coincidence can explain them.",
    deeper: [
      { title: "Common patterns", body: "Children often start talking about it around age two to four and stop by about seven." },
      { title: "The criticism", body: "Many cases come from cultures that already believe in rebirth, and families may shape the story without meaning to." },
    ],
    learn: [
      { step: "The work goes on", body: "The University of Virginia's Division of Perceptual Studies still collects cases today." },
    ],
    quiz: [
      { q: "Where did Ian Stevenson do his research?", options: ["Oxford", "University of Virginia", "Harvard"], answer: 1, why: "He founded a research unit there." },
    ],
    sources: [{ label: "Ian Stevenson", url: "https://en.wikipedia.org/wiki/Ian_Stevenson" }],
  },
  {
    id: "heart-neurons",
    theme: "consciousness",
    truth: "established",
    hook: "Your heart has its own little brain.",
    body: "The heart contains a network of tens of thousands of neurons, sometimes called the 'little brain in the heart'. It helps control heart rhythm and constantly sends signals up to the brain, which can shape emotion and attention.",
    deeper: [
      { title: "Two-way traffic", body: "More nerve fibres carry signals from the heart to the brain than the other way." },
      { title: "Where it gets speculative", body: "Claims that the heart's electromagnetic field affects people nearby lack strong evidence." },
    ],
    learn: [
      { step: "Heart rate variability", body: "Healthy hearts vary their rhythm slightly with each breath. Slow breathing tends to increase that variation." },
    ],
    quiz: [
      { q: "Which way do most heart-brain nerve signals travel?", options: ["Heart to brain", "Brain to heart"], answer: 0, why: "More fibres carry signals upward." },
    ],
    sources: [{ label: "Heart overview", url: "https://en.wikipedia.org/wiki/Heart" }],
  },
  {
    id: "anaesthesia",
    theme: "consciousness",
    truth: "established",
    hook: "Doctors switch off consciousness every day, without fully knowing how.",
    body: "General anaesthesia has been used since the 1840s and is very safe. Yet scientists still do not fully understand how it turns off awareness. Studying it is one of the best clues we have to what consciousness is.",
    deeper: [
      { title: "Lost connections", body: "One leading idea is that anaesthetics break communication between brain regions, so information no longer comes together." },
      { title: "Not like sleep", body: "Brain activity under anaesthesia looks quite different from natural sleep." },
    ],
    learn: [
      { step: "The first public use", body: "In 1846, ether was demonstrated during surgery in Boston, and the idea spread worldwide within months." },
    ],
    quiz: [
      { q: "When did general anaesthesia come into use?", options: ["1640s", "1840s", "1940s"], answer: 1, why: "Ether was publicly demonstrated in 1846." },
    ],
    sources: [{ label: "General anaesthesia", url: "https://en.wikipedia.org/wiki/General_anaesthesia" }],
  },
  {
    id: "blindsight",
    theme: "consciousness",
    truth: "established",
    hook: "Some blind people can dodge obstacles they say they cannot see.",
    body: "When the brain's main vision area, called V1, is destroyed, people lose conscious sight. Yet some can still point to, guess or avoid things in front of them far better than chance. Researcher Lawrence Weiskrantz and colleagues named this blindsight in 1974.",
    deeper: [
      { title: "The hallway test", body: "A man known as TN lost V1 on both sides of his brain after two strokes. Researchers asked him to walk a cluttered corridor without his cane. He made it to the end without bumping into anything, even stepping around a bin." },
      { title: "Feeling without seeing", body: "Some patients can guess the emotion on a face they cannot see, and their own face muscles subtly mirror it. This is called affective blindsight." },
      { title: "The open question", body: "A few researchers argue blindsight is really very faint conscious vision, not vision without awareness at all. Most of the research treats it as a real gap between seeing and knowing you see." },
    ],
    learn: [
      { step: "First noticed in war", body: "After the First World War, neurologist George Riddoch described soldiers with head wounds who could see moving objects but not still ones. Some still call this Riddoch syndrome.", branches: ["What V1 does"] },
    ],
    quiz: [
      { q: "Damage to which brain area causes blindsight?", options: ["The hippocampus", "The primary visual cortex (V1)", "The cerebellum"], answer: 1, why: "Blindsight follows damage to V1, the main visual area at the back of the brain." },
    ],
    sources: [{ label: "Blindsight", url: "https://en.wikipedia.org/wiki/Blindsight" }],
  },
  {
    id: "libet-free-will",
    theme: "consciousness",
    truth: "debated",
    hook: "Your brain may start a choice before you feel yourself making it.",
    body: "In 1983, Benjamin Libet asked people to flick their wrist whenever they felt like it, and to note the moment they felt the urge. Brain activity linked to the movement began about half a second before the act. The feeling of deciding came only about 200 milliseconds before it.",
    deeper: [
      { title: "Free won't", body: "Libet himself did not think this ruled out free will. He suggested we still have a brief window to veto an action once we become aware of it." },
      { title: "The pushback", body: "In 2012, Schurger and colleagues argued that the early brain signal may be random background noise building up, not a hidden decision. A 2019 study found the signal for arbitrary choices but not for deliberate ones." },
      { title: "Still open", body: "There is no majority agreement on what Libet's results mean for free will." },
    ],
    learn: [
      { step: "Readiness potential", body: "This is the slow build of electrical activity over the brain's motor areas before a voluntary movement. It was first described in 1965." },
    ],
    quiz: [
      { q: "Roughly when did people report feeling the urge to move?", options: ["2 seconds before", "200 milliseconds before", "After they moved"], answer: 1, why: "On average about 200 milliseconds before the movement, after the brain signal had already begun." },
    ],
    sources: [{ label: "Benjamin Libet", url: "https://en.wikipedia.org/wiki/Benjamin_Libet" }],
  },
];

// Years: negative = BCE, positive = CE. Most ancient dates are approximate.

export type School = {
  name: string;
  philosophy: string;
  /** Person who founded it. Omit for later labels/movements with no founder. */
  founder?: string;
  founded?: number;
};

export const schools = {
  milesian: { name: 'Milesian school', philosophy: 'One material source of everything', founder: 'thales', founded: -585 },
  pythagorean: { name: 'Pythagoreans', philosophy: 'Number and harmony', founder: 'pythagoras', founded: -530 },
  eleatic: { name: 'Eleatic school', philosophy: 'Being is one and unchanging', founder: 'parmenides', founded: -475 },
  pluralist: { name: 'Pluralists', philosophy: 'A later label, not a real school' },
  atomist: { name: 'Atomists', philosophy: 'Atomism: atoms and the void', founder: 'leucippus', founded: -440 },
  sophist: { name: 'Sophists', philosophy: 'A movement of paid teachers, not a school' },
  academy: { name: 'The Academy', philosophy: 'Platonism', founder: 'plato', founded: -387 },
  lyceum: { name: 'The Lyceum', philosophy: 'Aristotelianism (Peripatetics)', founder: 'aristotle', founded: -335 },
  cynic: { name: 'Cynics', philosophy: 'Cynicism: live by nature, reject convention', founder: 'antisthenes', founded: -399 },
  cyrenaic: { name: 'Cyrenaics', philosophy: 'Hedonism: bodily pleasure is the good', founder: 'aristippus', founded: -400 },
  megarian: { name: 'Megarian school', philosophy: 'Logic and dialectic', founder: 'euclid-megara', founded: -399 },
  pyrrhonist: { name: 'Pyrrhonists', philosophy: 'Pyrrhonian skepticism', founder: 'pyrrho', founded: -320 },
  garden: { name: 'The Garden', philosophy: 'Epicureanism', founder: 'epicurus', founded: -306 },
  stoa: { name: 'The Stoa', philosophy: 'Stoicism', founder: 'zeno-citium', founded: -300 },
  platonist: { name: 'Middle Platonists', philosophy: 'A later label: Platonism after the Academy closed' },
  neoplatonist: { name: 'Neoplatonism', philosophy: 'Plotinus\'s school in Rome', founder: 'plotinus', founded: 244 },
} satisfies Record<string, School>;

export type SchoolId = keyof typeof schools;

export type Person = {
  id: string;
  name: string;
  born: number;
  died: number;
  /** null = belonged to no school. */
  school: SchoolId | null;
  note: string;
  /** How prominent: 'grand' for the very top, 'high' for main figures; omitted = low (set smaller). */
  priority?: 'grand' | 'high';
  /** Year of peak activity (floruit). Defaults to the school's founding year for founders, else born + 40. */
  active?: number;
  /** Direct teachers ("student of"). The first one is where a founder's branch forks from. */
  studentOf?: string[];
  /** Main influences that were not direct teachers. */
  influence?: string[];
};

export const people: Person[] = [
  // Pre-Socratics
  { id: 'thales', name: 'Thales', priority: 'high', born: -624, died: -546, school: 'milesian', note: 'Everything is water' },
  { id: 'anaximander', name: 'Anaximander', born: -610, died: -546, school: 'milesian', note: 'The boundless (apeiron) is the source of all', studentOf: ['thales'] },
  { id: 'pythagoras', name: 'Pythagoras', priority: 'high', born: -570, died: -495, school: 'pythagorean', note: 'Number and harmony underlie reality' },
  { id: 'xenophanes', name: 'Xenophanes', born: -570, died: -475, school: null, note: 'One god, unlike humans; critic of myth' },
  { id: 'anaximenes', name: 'Anaximenes', born: -586, died: -526, school: 'milesian', note: 'Everything is air', studentOf: ['anaximander'] },
  { id: 'heraclitus', name: 'Heraclitus', priority: 'high', born: -535, died: -475, school: null, note: 'Everything flows; the Logos orders change' },
  { id: 'parmenides', name: 'Parmenides', priority: 'high', born: -515, died: -450, school: 'eleatic', note: 'What is, is; change is impossible', influence: ['xenophanes'] },
  { id: 'anaxagoras', name: 'Anaxagoras', priority: 'high', born: -500, died: -428, school: 'pluralist', note: 'Mind (nous) sets matter in order', influence: ['anaximenes'] },
  { id: 'empedocles', name: 'Empedocles', priority: 'high', born: -494, died: -434, school: 'pluralist', note: 'Four elements moved by Love and Strife', influence: ['parmenides', 'pythagoras'] },
  { id: 'zeno-elea', name: 'Zeno of Elea', priority: 'high', born: -490, died: -430, school: 'eleatic', note: 'Paradoxes against motion (Achilles and the tortoise)', studentOf: ['parmenides'] },
  { id: 'protagoras', name: 'Protagoras', priority: 'high', born: -490, died: -420, school: 'sophist', note: 'Man is the measure of all things' },
  { id: 'gorgias', name: 'Gorgias', born: -483, died: -375, school: 'sophist', note: 'Nothing exists; if it did, it could not be known', studentOf: ['empedocles'] },
  { id: 'leucippus', name: 'Leucippus', born: -480, died: -420, school: 'atomist', note: 'First to propose atoms and the void', influence: ['parmenides'] },
  { id: 'melissus', name: 'Melissus', born: -470, died: -430, school: 'eleatic', note: 'Being is infinite and unchanging', influence: ['parmenides'] },
  { id: 'philolaus', name: 'Philolaus', born: -470, died: -385, school: 'pythagorean', note: 'The Earth moves around a central fire', influence: ['pythagoras'] },

  // Classical
  { id: 'socrates', name: 'Socrates', priority: 'grand', born: -470, died: -399, active: -430, school: null, note: 'Questioning everything; virtue is knowledge', influence: ['anaxagoras'] },
  { id: 'democritus', name: 'Democritus', priority: 'high', born: -460, died: -370, school: 'atomist', note: 'Everything is atoms moving in the void', studentOf: ['leucippus'] },
  { id: 'antisthenes', name: 'Antisthenes', born: -446, died: -366, school: 'cynic', note: 'Virtue alone is enough for happiness', studentOf: ['socrates', 'gorgias'] },
  { id: 'aristippus', name: 'Aristippus', born: -435, died: -356, school: 'cyrenaic', note: 'The pleasure of the moment is the good', studentOf: ['socrates'] },
  { id: 'euclid-megara', name: 'Euclid of Megara', born: -435, died: -365, school: 'megarian', note: 'The Good is one, under many names', studentOf: ['socrates'], influence: ['parmenides'] },
  { id: 'archytas', name: 'Archytas', born: -428, died: -347, school: 'pythagorean', note: 'Mathematician and statesman; friend of Plato', influence: ['philolaus'] },
  { id: 'plato', name: 'Plato', priority: 'grand', born: -428, died: -348, school: 'academy', note: 'The Forms are the true reality', studentOf: ['socrates'], influence: ['pythagoras', 'parmenides'] },
  { id: 'diogenes', name: 'Diogenes of Sinope', priority: 'high', born: -412, died: -323, school: 'cynic', note: 'Lived in a jar and mocked every convention', studentOf: ['antisthenes'] },
  { id: 'speusippus', name: 'Speusippus', born: -408, died: -339, school: 'academy', note: 'Plato\'s nephew; led the Academy after him', studentOf: ['plato'] },
  { id: 'xenocrates', name: 'Xenocrates', born: -396, died: -314, school: 'academy', note: 'Systematized Plato\'s teaching', studentOf: ['plato'] },
  { id: 'aristotle', name: 'Aristotle', priority: 'grand', born: -384, died: -322, school: 'lyceum', note: 'Logic, the four causes, virtue as the mean', studentOf: ['plato'] },
  { id: 'anaxarchus', name: 'Anaxarchus', born: -380, died: -320, school: 'atomist', note: 'Travelled with Alexander to India', influence: ['democritus'] },
  { id: 'theophrastus', name: 'Theophrastus', born: -371, died: -287, school: 'lyceum', note: 'Led the Lyceum; founder of botany', studentOf: ['aristotle'] },
  { id: 'crates', name: 'Crates of Thebes', born: -365, died: -285, school: 'cynic', note: 'Gave away his fortune to live as a Cynic', studentOf: ['diogenes'] },
  { id: 'pyrrho', name: 'Pyrrho', priority: 'high', born: -360, died: -270, school: 'pyrrhonist', note: 'Nothing can be known; suspend judgment and find calm', studentOf: ['anaxarchus'] },
  { id: 'stilpo', name: 'Stilpo', born: -360, died: -280, school: 'megarian', note: 'Famous debater; self-sufficiency', influence: ['euclid-megara'] },
  { id: 'polemon', name: 'Polemon', born: -350, died: -270, school: 'academy', note: 'Led the Academy; ethics of living by nature', studentOf: ['xenocrates'] },

  // Hellenistic
  { id: 'epicurus', name: 'Epicurus', priority: 'high', born: -341, died: -270, school: 'garden', note: 'The good is calm pleasure, free of fear', influence: ['democritus'] },
  { id: 'strato', name: 'Strato of Lampsacus', born: -335, died: -269, school: 'lyceum', note: 'Explained nature without the gods', studentOf: ['theophrastus'] },
  { id: 'zeno-citium', name: 'Zeno of Citium', priority: 'high', born: -334, died: -262, school: 'stoa', note: 'Virtue is the only good; live by reason', studentOf: ['crates', 'stilpo', 'polemon'] },
  { id: 'cleanthes', name: 'Cleanthes', born: -330, died: -230, school: 'stoa', note: 'Hymn to Zeus; led the Stoa after Zeno', studentOf: ['zeno-citium'] },
  { id: 'timon', name: 'Timon of Phlius', born: -320, died: -230, school: 'pyrrhonist', note: 'Satirist and Pyrrho\'s mouthpiece', studentOf: ['pyrrho'] },
  { id: 'arcesilaus', name: 'Arcesilaus', born: -316, died: -241, active: -266, school: 'academy', note: 'Turned the Academy skeptical', studentOf: ['polemon'], influence: ['pyrrho'] },
  { id: 'chrysippus', name: 'Chrysippus', priority: 'high', born: -279, died: -206, school: 'stoa', note: 'Systematized Stoic logic and physics', studentOf: ['cleanthes', 'arcesilaus'] },
  { id: 'carneades', name: 'Carneades', born: -214, died: -129, school: 'academy', note: 'No certainty, only degrees of probability', influence: ['arcesilaus'] },
  { id: 'panaetius', name: 'Panaetius', born: -185, died: -110, school: 'stoa', note: 'Adapted Stoicism for the Romans', influence: ['chrysippus'] },
  { id: 'philo-larissa', name: 'Philo of Larissa', born: -159, died: -84, school: 'academy', note: 'Last head of the Academy', influence: ['carneades'] },
  { id: 'posidonius', name: 'Posidonius', born: -135, died: -51, school: 'stoa', note: 'Stoic polymath; taught Cicero', studentOf: ['panaetius'] },
  { id: 'antiochus', name: 'Antiochus of Ascalon', born: -125, died: -68, school: 'academy', note: 'Pulled the Academy back from skepticism', studentOf: ['philo-larissa'] },
  { id: 'philodemus', name: 'Philodemus', born: -110, died: -35, school: 'garden', note: 'Epicurean whose library survived at Herculaneum', influence: ['epicurus'] },
  { id: 'cicero', name: 'Cicero', priority: 'high', born: -106, died: -43, school: null, note: 'Brought Greek philosophy into Latin', studentOf: ['philo-larissa', 'antiochus', 'posidonius'] },
  { id: 'andronicus', name: 'Andronicus of Rhodes', born: -100, died: -40, school: 'lyceum', note: 'Edited Aristotle\'s works into the form we have', influence: ['aristotle'] },
  { id: 'aenesidemus', name: 'Aenesidemus', born: -100, died: -40, school: 'pyrrhonist', note: 'Revived Pyrrhonism after two centuries', influence: ['pyrrho'] },
  { id: 'lucretius', name: 'Lucretius', priority: 'high', born: -99, died: -55, school: 'garden', note: 'Epicureanism in Latin verse', influence: ['epicurus'] },

  // Roman era
  { id: 'seneca', name: 'Seneca', priority: 'high', born: -4, died: 65, school: 'stoa', note: 'Letters on living well; Nero\'s advisor', influence: ['posidonius'] },
  { id: 'musonius', name: 'Musonius Rufus', born: 25, died: 95, school: 'stoa', note: 'Stoicism as daily practice' },
  { id: 'plutarch', name: 'Plutarch', born: 46, died: 119, school: 'platonist', note: 'Biographer and priest at Delphi', influence: ['plato'] },
  { id: 'epictetus', name: 'Epictetus', priority: 'high', born: 50, died: 135, school: 'stoa', note: 'Focus only on what is up to you', studentOf: ['musonius'] },
  { id: 'marcus', name: 'Marcus Aurelius', priority: 'high', born: 121, died: 180, school: 'stoa', note: 'Emperor; wrote the Meditations', influence: ['epictetus'] },
  { id: 'alexander', name: 'Alexander of Aphrodisias', born: 150, died: 215, school: 'lyceum', note: 'Greatest ancient commentator on Aristotle', influence: ['aristotle'] },
  { id: 'sextus', name: 'Sextus Empiricus', priority: 'high', born: 160, died: 210, school: 'pyrrhonist', note: 'Outlines of Pyrrhonism, our main skeptic source', influence: ['aenesidemus'] },
  { id: 'ammonius', name: 'Ammonius Saccas', born: 175, died: 242, school: 'platonist', note: 'Teacher of Plotinus; wrote nothing', influence: ['plato'] },
  { id: 'plotinus', name: 'Plotinus', priority: 'high', born: 204, died: 270, school: 'neoplatonist', note: 'All reality flows from the One', studentOf: ['ammonius'], influence: ['plato'] },
];

export const eras = [
  { name: 'Pre-Socratics', from: -624 },
  { name: 'Classical Athens', from: -470 },
  { name: 'Hellenistic', from: -323 },
  { name: 'Roman', from: -31 },
];

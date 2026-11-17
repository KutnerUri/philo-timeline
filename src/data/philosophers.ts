// Years: negative = BCE, positive = CE. Most ancient dates are approximate.

export type School = {
  name: string;
  philosophy: string;
};

export type Person = {
  id: string;
  name: string;
  born: number;
  died: number;
  school: keyof typeof schools;
  /** Overrides the school's philosophy line for this person. */
  philosophy?: string;
  /** Direct teachers ("student of"). */
  studentOf?: string[];
  /** Main influences that were not direct teachers. */
  influence?: string[];
};

export const schools = {
  milesian: { name: 'Milesian school', philosophy: 'Everything comes from one material source (arché)' },
  pythagorean: { name: 'Pythagoreans', philosophy: 'Number and harmony underlie reality' },
  independent: { name: 'Independent', philosophy: '' },
  eleatic: { name: 'Eleatic school', philosophy: 'Being is one and unchanging; change is illusion' },
  pluralist: { name: 'Pluralists', philosophy: 'Change is mixing and separating of basic elements' },
  atomist: { name: 'Atomists', philosophy: 'Atoms and the void' },
  sophist: { name: 'Sophists', philosophy: 'Rhetoric for hire; truth is relative' },
  socratic: { name: 'Athens (no school)', philosophy: 'Questioning (elenchus); virtue is knowledge' },
  academy: { name: 'The Academy', philosophy: 'Platonism' },
  lyceum: { name: 'The Lyceum (Peripatetics)', philosophy: 'Aristotelianism' },
  cynic: { name: 'Cynics', philosophy: 'Virtue through living by nature, rejecting convention' },
  cyrenaic: { name: 'Cyrenaics', philosophy: 'Immediate bodily pleasure is the good' },
  megarian: { name: 'Megarian school', philosophy: 'Logic and dialectic; the Good is one' },
  stoa: { name: 'The Stoa', philosophy: 'Stoicism' },
  garden: { name: 'The Garden', philosophy: 'Epicureanism' },
  pyrrhonist: { name: 'Pyrrhonists', philosophy: 'Pyrrhonian skepticism: suspend judgment' },
  platonist: { name: 'Platonists (after the Academy)', philosophy: 'Middle Platonism' },
  eclectic: { name: 'Roman statesman', philosophy: 'Eclectic, close to Academic skepticism' },
} satisfies Record<string, School>;

export const people: Person[] = [
  // Pre-Socratics
  { id: 'thales', name: 'Thales', born: -624, died: -546, school: 'milesian', philosophy: 'Everything is water' },
  { id: 'anaximander', name: 'Anaximander', born: -610, died: -546, school: 'milesian', philosophy: 'The boundless (apeiron)', studentOf: ['thales'] },
  { id: 'pythagoras', name: 'Pythagoras', born: -570, died: -495, school: 'pythagorean' },
  { id: 'xenophanes', name: 'Xenophanes', born: -570, died: -475, school: 'independent', philosophy: 'One god, unlike humans; critic of myth' },
  { id: 'anaximenes', name: 'Anaximenes', born: -586, died: -526, school: 'milesian', philosophy: 'Everything is air', studentOf: ['anaximander'] },
  { id: 'heraclitus', name: 'Heraclitus', born: -535, died: -475, school: 'independent', philosophy: 'Everything flows; the Logos orders change' },
  { id: 'parmenides', name: 'Parmenides', born: -515, died: -450, school: 'eleatic', influence: ['xenophanes'] },
  { id: 'anaxagoras', name: 'Anaxagoras', born: -500, died: -428, school: 'pluralist', philosophy: 'Mind (nous) sets matter in order', influence: ['anaximenes'] },
  { id: 'empedocles', name: 'Empedocles', born: -494, died: -434, school: 'pluralist', philosophy: 'Four elements moved by Love and Strife', influence: ['parmenides', 'pythagoras'] },
  { id: 'zeno-elea', name: 'Zeno of Elea', born: -490, died: -430, school: 'eleatic', philosophy: 'Paradoxes against motion and plurality', studentOf: ['parmenides'] },
  { id: 'protagoras', name: 'Protagoras', born: -490, died: -420, school: 'sophist', philosophy: 'Man is the measure of all things' },
  { id: 'gorgias', name: 'Gorgias', born: -483, died: -375, school: 'sophist', studentOf: ['empedocles'] },
  { id: 'leucippus', name: 'Leucippus', born: -480, died: -420, school: 'atomist', influence: ['parmenides'] },
  { id: 'melissus', name: 'Melissus', born: -470, died: -430, school: 'eleatic', influence: ['parmenides'] },
  { id: 'philolaus', name: 'Philolaus', born: -470, died: -385, school: 'pythagorean', influence: ['pythagoras'] },

  // Classical
  { id: 'socrates', name: 'Socrates', born: -470, died: -399, school: 'socratic', influence: ['anaxagoras'] },
  { id: 'democritus', name: 'Democritus', born: -460, died: -370, school: 'atomist', studentOf: ['leucippus'] },
  { id: 'antisthenes', name: 'Antisthenes', born: -446, died: -366, school: 'cynic', studentOf: ['gorgias', 'socrates'] },
  { id: 'aristippus', name: 'Aristippus', born: -435, died: -356, school: 'cyrenaic', studentOf: ['socrates'] },
  { id: 'euclid-megara', name: 'Euclid of Megara', born: -435, died: -365, school: 'megarian', studentOf: ['socrates'], influence: ['parmenides'] },
  { id: 'archytas', name: 'Archytas', born: -428, died: -347, school: 'pythagorean', influence: ['philolaus'] },
  { id: 'plato', name: 'Plato', born: -428, died: -348, school: 'academy', philosophy: 'Platonism: the Forms are the true reality', studentOf: ['socrates'], influence: ['pythagoras', 'parmenides'] },
  { id: 'diogenes', name: 'Diogenes of Sinope', born: -412, died: -323, school: 'cynic', studentOf: ['antisthenes'] },
  { id: 'speusippus', name: 'Speusippus', born: -408, died: -339, school: 'academy', philosophy: 'Head of the Academy after Plato', studentOf: ['plato'] },
  { id: 'xenocrates', name: 'Xenocrates', born: -396, died: -314, school: 'academy', studentOf: ['plato'] },
  { id: 'aristotle', name: 'Aristotle', born: -384, died: -322, school: 'lyceum', philosophy: 'Aristotelianism: logic, four causes, virtue as the mean', studentOf: ['plato'] },
  { id: 'anaxarchus', name: 'Anaxarchus', born: -380, died: -320, school: 'atomist', influence: ['democritus'] },
  { id: 'theophrastus', name: 'Theophrastus', born: -371, died: -287, school: 'lyceum', studentOf: ['aristotle'] },
  { id: 'crates', name: 'Crates of Thebes', born: -365, died: -285, school: 'cynic', studentOf: ['diogenes'] },
  { id: 'pyrrho', name: 'Pyrrho', born: -360, died: -270, school: 'pyrrhonist', studentOf: ['anaxarchus'] },
  { id: 'stilpo', name: 'Stilpo', born: -360, died: -280, school: 'megarian', influence: ['euclid-megara'] },
  { id: 'polemon', name: 'Polemon', born: -350, died: -270, school: 'academy', studentOf: ['xenocrates'] },

  // Hellenistic
  { id: 'epicurus', name: 'Epicurus', born: -341, died: -270, school: 'garden', philosophy: 'Epicureanism: the good is calm pleasure, free of fear', influence: ['democritus'] },
  { id: 'strato', name: 'Strato of Lampsacus', born: -335, died: -269, school: 'lyceum', studentOf: ['theophrastus'] },
  { id: 'zeno-citium', name: 'Zeno of Citium', born: -334, died: -262, school: 'stoa', philosophy: 'Stoicism: virtue is the only good; live by nature and reason', studentOf: ['crates', 'stilpo', 'polemon'] },
  { id: 'cleanthes', name: 'Cleanthes', born: -330, died: -230, school: 'stoa', studentOf: ['zeno-citium'] },
  { id: 'timon', name: 'Timon of Phlius', born: -320, died: -230, school: 'pyrrhonist', studentOf: ['pyrrho'] },
  { id: 'arcesilaus', name: 'Arcesilaus', born: -316, died: -241, school: 'academy', philosophy: 'Turns the Academy skeptical (Academic skepticism)', studentOf: ['polemon'], influence: ['pyrrho'] },
  { id: 'chrysippus', name: 'Chrysippus', born: -279, died: -206, school: 'stoa', philosophy: 'Systematized Stoic logic and physics', studentOf: ['cleanthes', 'arcesilaus'] },
  { id: 'carneades', name: 'Carneades', born: -214, died: -129, school: 'academy', philosophy: 'Academic skepticism: probability, not certainty', influence: ['arcesilaus'] },
  { id: 'panaetius', name: 'Panaetius', born: -185, died: -110, school: 'stoa', philosophy: 'Middle Stoa: Stoicism adapted for Romans', influence: ['chrysippus'] },
  { id: 'philo-larissa', name: 'Philo of Larissa', born: -159, died: -84, school: 'academy', philosophy: 'Last head of the Academy; moderate skepticism', influence: ['carneades'] },
  { id: 'posidonius', name: 'Posidonius', born: -135, died: -51, school: 'stoa', studentOf: ['panaetius'] },
  { id: 'antiochus', name: 'Antiochus of Ascalon', born: -125, died: -68, school: 'academy', philosophy: 'Breaks with skepticism, back to dogmatic Platonism', studentOf: ['philo-larissa'] },
  { id: 'philodemus', name: 'Philodemus', born: -110, died: -35, school: 'garden', influence: ['epicurus'] },
  { id: 'cicero', name: 'Cicero', born: -106, died: -43, school: 'eclectic', studentOf: ['philo-larissa', 'antiochus', 'posidonius'] },
  { id: 'andronicus', name: 'Andronicus of Rhodes', born: -100, died: -40, school: 'lyceum', philosophy: "Edited Aristotle's works into the form we have", influence: ['aristotle'] },
  { id: 'aenesidemus', name: 'Aenesidemus', born: -100, died: -40, school: 'pyrrhonist', philosophy: 'Revives Pyrrhonism after two centuries', influence: ['pyrrho'] },
  { id: 'lucretius', name: 'Lucretius', born: -99, died: -55, school: 'garden', philosophy: 'On the Nature of Things: Epicureanism in Latin verse', influence: ['epicurus'] },

  // Roman era
  { id: 'seneca', name: 'Seneca', born: -4, died: 65, school: 'stoa', philosophy: 'Roman Stoa', influence: ['posidonius'] },
  { id: 'musonius', name: 'Musonius Rufus', born: 25, died: 95, school: 'stoa', philosophy: 'Roman Stoa' },
  { id: 'plutarch', name: 'Plutarch', born: 46, died: 119, school: 'platonist', influence: ['plato'] },
  { id: 'epictetus', name: 'Epictetus', born: 50, died: 135, school: 'stoa', philosophy: 'Roman Stoa: control what is up to you', studentOf: ['musonius'] },
  { id: 'marcus', name: 'Marcus Aurelius', born: 121, died: 180, school: 'stoa', philosophy: 'Roman Stoa: the Meditations', influence: ['epictetus'] },
  { id: 'alexander', name: 'Alexander of Aphrodisias', born: 150, died: 215, school: 'lyceum', philosophy: 'Greatest ancient commentator on Aristotle', influence: ['aristotle'] },
  { id: 'sextus', name: 'Sextus Empiricus', born: 160, died: 210, school: 'pyrrhonist', influence: ['aenesidemus'] },
  { id: 'ammonius', name: 'Ammonius Saccas', born: 175, died: 242, school: 'platonist', influence: ['plato'] },
  { id: 'plotinus', name: 'Plotinus', born: 204, died: 270, school: 'platonist', philosophy: 'Neoplatonism: all flows from the One', studentOf: ['ammonius'], influence: ['plato'] },
];

export const eras = [
  { name: 'Pre-Socratics', from: -700 },
  { name: 'Classical Athens', from: -470 },
  { name: 'Hellenistic', from: -341 },
  { name: 'Roman', from: -30 },
];

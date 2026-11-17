import type { Translation } from '../core';

export default {
  ui: {
    siteName: 'Griechische Philosophen',
    title: 'Zeitleiste der griechischen Philosophen: wer wen lehrte, von Thales bis Plotin',
    description:
      'Eine maßstabsgetreue Zeitleiste der griechischen Philosophen von Thales bis Plotin: wer wen lehrte, welche Schulen auseinander hervorgingen und wer wen beeinflusste.',
    overline: 'Eine Zeitleiste · ca. 600 v. Chr. – 270 n. Chr.',
    titleA: 'Griechische',
    titleB: 'Philosophen',
    subtitle:
      'Wer wen lehrte und welche Schulen auseinander hervorgingen, von Thales bis Plotin.',
    ogAlt:
      'Die Zeitleiste rund um Sokrates und Platon: Schulzweige links, Philosophen rechts.',
    listName: 'Griechische Philosophen in zeitlicher Reihenfolge',
    language: 'Sprache',
    overview: 'Überblick über die Zeitleiste',
    bce: '{n} v. Chr.',
    ce: '{n} n. Chr.',
    spanBce: 'ca. {a}–{b} v. Chr.',
    spanCe: 'ca. {a}–{b} n. Chr.',
    spanCross: 'ca. {a} v. Chr. – {b} n. Chr.',
    active: 'wirkte um {year}',
    founded: 'Gegründet',
    foundedBy: '{year} von {name}',
    school: 'Schule',
    none: 'Keine',
    studentOf: 'Schüler von',
    teacherOf: 'Lehrer von',
    influencedBy: 'Beeinflusst von',
    influenced: 'Beeinflusste',
    members: 'Mitglieder',
    close: 'Schließen',
    select: 'Auswählen',
    done: 'Fertig',
    selectAll: 'Alle auswählen',
    deselectAll: 'Alle abwählen',
  },
  eras: {
    'Pre-Socratics': 'Vorsokratiker',
    'Classical Athens': 'Klassisches Athen',
    Hellenistic: 'Hellenismus',
    Roman: 'Römische Zeit',
  },
  schools: {
    milesian: {
      name: 'Milesische Schule',
      philosophy: 'Ein einziger stofflicher Ursprung von allem',
      note: 'Die ersten griechischen Philosophen, in Milet, suchten den einen Urstoff, aus dem alles besteht: das Wasser bei Thales, das Unbegrenzte bei Anaximander, die Luft bei Anaximenes.',
    },
    pythagorean: {
      name: 'Pythagoreer',
      philosophy: 'Zahl und Harmonie',
      note: 'Ein Bund, den Pythagoras in Kroton gründete, teils religiös, teils philosophisch. Zahl und Harmonie ordnen die Welt, und die Seele wird in neuen Körpern wiedergeboren.',
    },
    eleatic: {
      name: 'Eleatische Schule',
      philosophy: 'Das Sein ist eins und unveränderlich',
      note: 'Aus Elea in Süditalien. Die Vernunft zeigt, dass das, was ist, eins, ganz und unveränderlich sein muss; Veränderung und Vielheit sind also Schein. Zenons Paradoxien verteidigen diese Lehre.',
    },
    pluralist: {
      name: 'Pluralisten',
      philosophy: 'Ein späteres Etikett, keine echte Schule',
      note: 'Ein späteres Etikett für Denker, die Parmenides mit mehreren unveränderlichen Grundstoffen antworteten: Empedokles’ vier Wurzeln, bewegt von Liebe und Streit, und Anaxagoras’ unzählige Samen, vom Geist geordnet.',
    },
    atomist: {
      name: 'Atomisten',
      philosophy: 'Atomismus: Atome und das Leere',
      note: 'Alles besteht aus winzigen, unteilbaren Atomen, die sich durch den leeren Raum bewegen. Veränderung ist das Verbinden und Trennen von Atomen, ganz ohne Götter und Zweck.',
    },
    sophist: {
      name: 'Sophisten',
      philosophy: 'Eine Bewegung bezahlter Lehrer, keine Schule',
      note: 'Wanderlehrer, die gegen Honorar Rhetorik und den Weg zum Erfolg im öffentlichen Leben lehrten. Sie fragten, ob Wahrheit und Gerechtigkeit mehr sind als menschliche Konvention.',
    },
    academy: {
      name: 'Die Akademie',
      philosophy: 'Platonismus',
      note: 'Platons Schule im Hain des Akademos vor den Toren Athens. Sie lehrte die Ideenlehre, wandte sich unter Arkesilaos und Karneades dem Skeptizismus zu und bestand fast drei Jahrhunderte.',
    },
    lyceum: {
      name: 'Das Lykeion',
      philosophy: 'Aristotelismus (Peripatetiker)',
      note: 'Aristoteles’ Schule im Gymnasion Lykeion; ihre Mitglieder hießen Peripatetiker, nach dem überdachten Wandelgang. Sie erforschten Logik, Natur, Ethik und Politik und gaben später Aristoteles heraus und erklärten ihn.',
    },
    cynic: {
      name: 'Kyniker',
      philosophy: 'Kynismus: naturgemäß leben, Konventionen ablehnen',
      note: 'Einfach und naturgemäß leben und Reichtum, Rang und Konventionen verachten. Diogenes machte daraus öffentliche Provokation, und die Stoiker wurden davon geprägt.',
    },
    cyrenaic: {
      name: 'Kyrenaiker',
      philosophy: 'Hedonismus: körperliche Lust ist das Gute',
      note: 'Aus Kyrene in Nordafrika. Die Lust des gegenwärtigen Augenblicks ist das einzige Gute, und sicher sein können wir uns nur unserer eigenen Empfindungen.',
    },
    megarian: {
      name: 'Megarische Schule',
      philosophy: 'Logik und Dialektik',
      note: 'Eukleides von Megara verband Sokrates’ Ethik mit dem eleatischen Gedanken des Einen: Das Gute ist eins, unter vielen Namen. Bekannt für Dialektik und logische Rätsel.',
    },
    pyrrhonist: {
      name: 'Pyrrhoneer',
      philosophy: 'Pyrrhonische Skepsis',
      note: 'Das Urteil zurückhalten: Jedem Argument lässt sich ein gleichwertiges entgegensetzen, und wer sich des Urteils enthält, findet Seelenruhe (Ataraxie).',
    },
    garden: {
      name: 'Der Garten',
      philosophy: 'Epikureismus',
      note: 'Epikurs Gemeinschaft in seinem Garten in Athen. Ziel des Lebens ist die Lust, verstanden als Freiheit von Schmerz und Furcht; weder die Götter noch der Tod sind zu fürchten.',
    },
    stoa: {
      name: 'Die Stoa',
      philosophy: 'Stoizismus',
      note: 'Benannt nach der Stoa Poikile, der Bunten Halle in Athen, in der Zenon lehrte. Tugend ist das einzige Gut: im Einklang mit einer vernünftigen Natur leben und gelassen hinnehmen, was nicht in der eigenen Macht liegt.',
    },
    platonist: {
      name: 'Mittelplatoniker',
      philosophy: 'Ein späteres Etikett: Platonismus nach der Akademie',
      note: 'Ein späteres Etikett für die Platoniker nach der Schließung der Akademie. Sie lasen Platon als Lehrer eines transzendenten Gottes und schöpften aus Aristoteles und den Stoikern.',
    },
    neoplatonist: {
      name: 'Neuplatonismus',
      philosophy: 'Plotins Schule in Rom',
      note: 'Plotins Schule in Rom. Alle Wirklichkeit fließt aus dem Einen über Geist und Seele, und die Seele kann sich umwenden und zu ihm aufsteigen. Sie prägte das christliche und islamische Denken des Mittelalters.',
    },
  },
  people: {
    thales: {
      name: 'Thales',
      note: 'Alles ist Wasser',
      about: 'Von Aristoteles als erster Philosoph gezählt. Der Kaufmann und Ingenieur aus Milet soll die Sonnenfinsternis von 585 v. Chr. vorhergesagt haben. Er suchte eine natürliche statt einer mythischen Erklärung der Welt und lehrte, alles stamme aus dem Wasser. Von seinen Schriften ist nichts erhalten.',
    },
    anaximander: {
      name: 'Anaximander',
      note: 'Das Unbegrenzte (Apeiron) ist der Ursprung von allem',
      about: 'Nachfolger des Thales in Milet. Statt eines vertrauten Stoffes machte er das Apeiron zum Ursprung der Dinge, das Unbegrenzte und Unbestimmte, aus dem sich Gegensätze wie warm und kalt ausscheiden. Er zeichnete eine der ersten Weltkarten und stellte sich die Erde frei schwebend im Mittelpunkt von allem vor.',
    },
    pythagoras: {
      name: 'Pythagoras',
      note: 'Zahl und Harmonie liegen der Wirklichkeit zugrunde',
      about: 'Gründete in Kroton in Süditalien eine Gemeinschaft, die zugleich Schule und religiöser Orden war, mit gemeinsamem Besitz und strengen Regeln. Er lehrte, die Seele sei unsterblich und werde wiedergeboren, und seine Anhänger fanden heraus, dass musikalische Harmonien einfachen Zahlenverhältnissen folgen. Vieles, was ihm zugeschrieben wird, auch der berühmte Lehrsatz, stammt womöglich von späteren Pythagoreern.',
    },
    xenophanes: {
      name: 'Xenophanes',
      note: 'Ein Gott, anders als die Menschen; Kritiker des Mythos',
      about: 'Ein Wanderdichter, der die Götter Homers und Hesiods verspottete, weil sie sich wie Menschen benahmen: Könnten Pferde zeichnen, sagte er, würden sie Götter wie Pferde zeichnen. Er vertrat einen einzigen Gott, uns unähnlich, der alles allein durch Denken bewegt, und war vorsichtig, was der Mensch je wissen kann.',
    },
    anaximenes: {
      name: 'Anaximenes',
      note: 'Alles ist Luft',
      about: 'Der dritte Milesier. Er sah in der Luft den Grundstoff und nannte einen Mechanismus der Veränderung: Luft verdünnt sich zu Feuer und verdichtet sich zu Wind, Wolke, Wasser, Erde und Stein. Der Gedanke, Unterschiede der Art als Unterschiede der Dichte zu erklären, blieb lange wirksam.',
    },
    heraclitus: {
      name: 'Heraklit',
      note: 'Alles fließt; der Logos ordnet den Wandel',
      about: 'Aus Ephesos, berühmt für rätselhafte Sprüche. Alles ist im Fluss, man kann nicht zweimal in denselben Fluss steigen, und doch folgt der Wandel einem verborgenen Maß, dem Logos. Gegensätze gehören zusammen: Der Weg hinauf und der Weg hinab sind ein und derselbe. Die Antike nannte ihn den Dunklen.',
    },
    parmenides: {
      name: 'Parmenides',
      note: 'Was ist, ist; Veränderung ist unmöglich',
      about: 'In seinem Lehrgedicht zeigt ihm eine Göttin den Weg der Wahrheit: Was ist, ist, und was nicht ist, lässt sich nicht einmal denken. Daraus folgerte er, das wahre Sein sei eins, ganz, ewig und unveränderlich, und die wechselnde Sinnenwelt bloße Meinung. Jeder spätere Naturphilosoph musste sich mit ihm auseinandersetzen.',
    },
    anaxagoras: {
      name: 'Anaxagoras',
      note: 'Der Geist (Nous) ordnet die Materie',
      about: 'Der erste Philosoph, der sich in Athen niederließ, wo er mit Perikles befreundet war. Alles enthält einen Anteil von allem, und der Geist (Nous) setzte das Gemisch in Drehung, sodass es sich sonderte. Er nannte die Sonne einen glühenden Stein, wurde wegen Gottlosigkeit angeklagt und verließ die Stadt.',
    },
    empedocles: {
      name: 'Empedokles',
      note: 'Vier Elemente, bewegt von Liebe und Streit',
      about: 'Dichter, Arzt und Wundertäter aus Sizilien. Alles ist eine Mischung aus vier Wurzeln, Erde, Wasser, Luft und Feuer, die die Liebe zusammenführt und der Streit in einem endlosen Kreislauf wieder trennt. Der Legende nach sprang er in den Ätna, um zu beweisen, dass er ein Gott sei.',
    },
    'zeno-elea': {
      name: 'Zenon von Elea',
      note: 'Paradoxien gegen die Bewegung (Achilles und die Schildkröte)',
      about: 'Schüler des Parmenides, der ihn verteidigte, indem er zeigte, dass Bewegung und Vielheit zu Widersinnigem führen. Der schnelle Achilles holt die Schildkröte nie ein, und ein fliegender Pfeil ruht in jedem Augenblick. Seine Rätsel über das Unendliche wurden erst von der modernen Mathematik befriedigend beantwortet.',
    },
    protagoras: {
      name: 'Protagoras',
      note: 'Der Mensch ist das Maß aller Dinge',
      about: 'Der erste und berühmteste Sophist, der hohe Honorare dafür nahm, jungen Männern den Weg zum Erfolg zu lehren. Der Mensch ist das Maß aller Dinge: Was jedem wahr erscheint, ist für ihn wahr. Er sagte auch, er könne nicht wissen, ob es Götter gibt. Platon benannte einen Dialog nach ihm.',
    },
    gorgias: {
      name: 'Gorgias',
      note: 'Nichts existiert; wenn doch, wäre es nicht erkennbar',
      about: 'Ein Gesandter aus Sizilien und Meister der Rhetorik, der Athen mit seinen Reden blendete. In einer provokanten Schrift argumentierte er, dass nichts existiert, dass es, wenn doch, nicht erkennbar wäre und dass es, wenn es erkannt würde, niemandem mitgeteilt werden könnte. Er wurde über hundert Jahre alt.',
    },
    leucippus: {
      name: 'Leukipp',
      note: 'Als Erster: Atome und das Leere',
      about: 'Über sein Leben ist wenig bekannt; manche Antike zweifelten, ob es ihn überhaupt gab. Den Eleaten antwortend, nahm er an, die Welt bestehe aus unzähligen unteilbaren Körpern, die sich im leeren Raum bewegen, sodass Veränderung nur die Neuordnung von Atomen ist. Sein Schüler Demokrit baute die Theorie aus.',
    },
    melissus: {
      name: 'Melissos',
      note: 'Das Sein ist unendlich und unveränderlich',
      about: 'Ein Eleat aus Samos, der zugleich Admiral war und die athenische Flotte besiegte. Er gab Parmenides in schlichter Prosa wieder und argumentierte, das Sein sei eins, unveränderlich und unbegrenzt. Aristoteles hielt seine Argumentation für grob, doch sie prägte, wie spätere Denker die Eleaten lasen.',
    },
    philolaus: {
      name: 'Philolaos',
      note: 'Die Erde bewegt sich um ein Zentralfeuer',
      about: 'Ein Pythagoreer und einer der Ersten, die pythagoreische Gedanken niederschrieben. Der Kosmos besteht aus Begrenzendem und Unbegrenztem, harmonisch gefügt, und die Erde ist nicht sein Mittelpunkt: Sie kreist samt Sonne und Planeten um ein Zentralfeuer. Kopernikus erwähnt ihn.',
    },
    socrates: {
      name: 'Sokrates',
      note: 'Alles hinterfragen; Tugend ist Wissen',
      about: 'Er schrieb nichts und ist durch seine Schüler bekannt, vor allem durch Platon. Er befragte seine Mitbürger auf dem Marktplatz und zeigte, dass Leute, die zu wissen glaubten, was Tapferkeit oder Gerechtigkeit ist, es nicht wussten; seine einzige Weisheit war das Wissen um sein Nichtwissen. Ein ungeprüftes Leben, sagte er, sei nicht lebenswert. Athen klagte ihn wegen Gottlosigkeit und Verführung der Jugend an, und er trank den Schierlingsbecher.',
    },
    democritus: {
      name: 'Demokrit',
      note: 'Alles sind Atome, die sich im Leeren bewegen',
      about: 'Der lachende Philosoph aus Abdera, der Leukipps Gedanken zu einem vollständigen System ausbaute. Nur Atome und das Leere sind wirklich; süß, bitter, warm und kalt gibt es nur nach Übereinkunft. Er schrieb über vieles, auch über Ethik, deren Ziel die Heiterkeit ist. Fast keines seiner vielen Bücher ist erhalten.',
    },
    antisthenes: {
      name: 'Antisthenes',
      note: 'Tugend allein genügt zum Glück',
      about: 'Ein Schüler des Gorgias, dann ergebener Anhänger des Sokrates, der bei dessen Tod zugegen war. Er lehrte, Tugend sei lehrbar und genüge zum Glück, Lust und Reichtum seien zu verachten. Er lehrte im Gymnasion Kynosarges, das den Kynikern ihren Namen gegeben haben könnte.',
    },
    aristippus: {
      name: 'Aristipp',
      note: 'Die Lust des Augenblicks ist das Gute',
      about: 'Ein Sokratesanhänger aus Kyrene und der Erste von ihnen, der Honorar nahm. Er genoss den Luxus, ohne von ihm beherrscht zu werden: Ich besitze, sagte er, ich werde nicht besessen. Seine Schule lehrte, die Lust des gegenwärtigen Augenblicks sei das einzige Gute.',
    },
    'euclid-megara': {
      name: 'Eukleides von Megara',
      note: 'Das Gute ist eins, unter vielen Namen',
      about: 'Ein enger Anhänger des Sokrates, der dessen Ethik mit dem einen unveränderlichen Sein des Parmenides verband: Das Gute ist ein einziges, ob man es Weisheit, Gott oder Geist nennt. Nach Sokrates’ Tod fand Platon bei ihm in Megara Zuflucht. Nicht zu verwechseln mit dem Mathematiker Euklid.',
    },
    archytas: {
      name: 'Archytas',
      note: 'Mathematiker und Staatsmann; Freund Platons',
      about: 'Ein pythagoreischer Mathematiker und führender Staatsmann von Tarent, immer wieder zum Feldherrn gewählt. Er löste das alte Problem der Würfelverdopplung und begründete die mathematische Mechanik. Als Freund Platons schickte er ein Schiff, um ihn vor dem Tyrannen von Syrakus zu retten.',
    },
    plato: {
      name: 'Platon',
      note: 'Die Ideen sind die wahre Wirklichkeit',
      about: 'Schüler des Sokrates, der Philosophie als Dialoge mit Sokrates als Helden schrieb. Die Dinge, die wir sehen, sind unvollkommene Abbilder ewiger Ideen, die nur die Vernunft erfasst; die Seele ist unsterblich, und der gerechte Staat wird von Philosophen regiert. Er gründete die Akademie, und ein moderner Philosoph nannte die ganze abendländische Tradition eine Reihe von Fußnoten zu Platon.',
    },
    diogenes: {
      name: 'Diogenes von Sinope',
      note: 'Lebte in einem Fass und verspottete jede Konvention',
      about: 'Aus Sinope verbannt, lebte er in Athen in einem großen Vorratsfass und besaß fast nichts. Er lebte wie ein Hund, ohne Scham und naturgemäß, und verspottete die Konvention mit öffentlichen Aktionen, etwa wenn er bei Tageslicht mit der Lampe nach einem ehrlichen Menschen suchte. Als Alexander der Große ihm anbot, er dürfe sich alles wünschen, bat er ihn, ihm aus der Sonne zu gehen.',
    },
    speusippus: {
      name: 'Speusipp',
      note: 'Platons Neffe; leitete danach die Akademie',
      about: 'Platons Neffe, der nach ihm die Akademie leitete. Er ließ Platons Ideen beiseite und machte stattdessen die mathematischen Gegenstände zur ersten Wirklichkeit; zudem ordnete er Pflanzen und Tiere nach ihrer Ähnlichkeit.',
    },
    xenocrates: {
      name: 'Xenokrates',
      note: 'Systematisierte Platons Lehre',
      about: 'Das dritte Oberhaupt der Akademie, bekannt für seinen Ernst. Er ordnete Platons Lehre zu einem System und teilte die Philosophie in Physik, Ethik und Logik, eine Einteilung, die später die Stoiker übernahmen.',
    },
    aristotle: {
      name: 'Aristoteles',
      note: 'Logik, die vier Ursachen, Tugend als Mitte',
      about: 'Zwanzig Jahre lang Platons Schüler, dann Lehrer des jungen Alexander des Großen, dann Gründer des Lykeions. Er erfand die formale Logik und schrieb über nahezu alles: Physik, Biologie, die Seele, Ethik, Politik und Dichtung. Gegen Platon existieren die Formen der Dinge in den Dingen selbst. Den mittelalterlichen Denkern war er schlicht der Philosoph.',
    },
    anaxarchus: {
      name: 'Anaxarchos',
      note: 'Reiste mit Alexander nach Indien',
      about: 'Ein Atomist, der Alexander den Großen nach Indien begleitete, wo er und sein Schüler Pyrrhon indische Weise trafen. Bekannt war er für seine Gleichgültigkeit gegen Schmerz und seine Schmeichelei gegenüber Alexander und erhielt den Beinamen der Glückliche.',
    },
    theophrastus: {
      name: 'Theophrast',
      note: 'Leitete das Lykeion; Begründer der Botanik',
      about: 'Aristoteles’ Kollege und Nachfolger am Lykeion, das unter ihm mit rund zweitausend Schülern blühte. Er schrieb die ersten systematischen Werke über Pflanzen und ein geistreiches Buch der Charaktere, kurze Skizzen menschlicher Typen.',
    },
    crates: {
      name: 'Krates von Theben',
      note: 'Verschenkte sein Vermögen, um als Kyniker zu leben',
      about: 'Ein wohlhabender Thebaner, der sein Vermögen verschenkte, um als Kyniker zu leben, milder als Diogenes: Man holte ihn gern in die Häuser, damit er Streit schlichte. Er heiratete die Philosophin Hipparchia, die sein Leben auf der Straße teilte. Zenon von Kition, der Begründer der Stoa, war sein Schüler.',
    },
    pyrrho: {
      name: 'Pyrrhon',
      note: 'Nichts ist erkennbar; Urteilsenthaltung führt zur Ruhe',
      about: 'Er reiste mit Alexander und Anaxarchos nach Indien. Da wir die Dinge nicht erkennen können, wie sie wirklich sind, sollen wir uns des Urteils enthalten, und Seelenruhe folgt. Erzählungen zufolge mussten ihn seine Freunde davon abhalten, in Abgründe zu laufen. Er schrieb nichts; sein Schüler Timon hielt seine Gedanken fest.',
    },
    stilpo: {
      name: 'Stilpon',
      note: 'Berühmter Debattierer; Selbstgenügsamkeit',
      about: 'Oberhaupt der Megarischen Schule und gefeierter Debattierer, der allen anderen Schulen Schüler abwarb. Er lehrte, der Weise brauche nichts außer sich selbst: Als seine Stadt geplündert wurde und man ihn fragte, was er verloren habe, antwortete er, er habe sein Wissen noch.',
    },
    polemon: {
      name: 'Polemon',
      note: 'Leitete die Akademie; Ethik des naturgemäßen Lebens',
      about: 'Ein ausschweifender junger Mann, der, so die Geschichte, betrunken in einen Vortrag des Xenokrates platzte und auf der Stelle bekehrt wurde. Als Oberhaupt der Akademie lehrte er eine praktische Ethik des naturgemäßen Lebens, und Zenon von Kition studierte bei ihm.',
    },
    epicurus: {
      name: 'Epikur',
      note: 'Das Gute ist ruhige Lust, frei von Furcht',
      about: 'Gründete in seinem Garten in Athen eine Gemeinschaft, die auch Frauen und Sklaven willkommen hieß. Ziel des Lebens ist die Lust, verstanden als Schmerzfreiheit des Körpers und Unruhefreiheit der Seele; am besten sind einfache Freuden und Freundschaft. Da wir nur Atome sind, ist der Tod für uns nichts: Wenn der Tod da ist, sind wir nicht mehr.',
    },
    strato: {
      name: 'Straton von Lampsakos',
      note: 'Erklärte die Natur ohne Götter',
      about: 'Das dritte Oberhaupt des Lykeions, genannt der Physiker. Er erklärte die Welt durch natürliche Kräfte wie Wärme und Kälte, ohne Götter und Zwecke, und soll das Leere experimentell untersucht haben.',
    },
    'zeno-citium': {
      name: 'Zenon von Kition',
      note: 'Tugend ist das einzige Gut; lebe vernunftgemäß',
      about: 'Ein Kaufmann aus Zypern, der in Athen Schiffbruch erlitt, beim Kyniker Krates und anderen studierte und dann in der Bunten Halle, der Stoa, lehrte. Tugend ist das einzige Gut; alles andere, selbst Gesundheit und Reichtum, ist gleichgültig. Die Welt wird von göttlicher Vernunft geordnet, und wir sollen im Einklang mit ihr leben.',
    },
    cleanthes: {
      name: 'Kleanthes',
      note: 'Zeus-Hymnus; leitete die Stoa nach Zenon',
      about: 'Ein ehemaliger Boxer, der nachts Wasser trug, um seinen Unterricht zu bezahlen, und Zenon als Oberhaupt der Stoa nachfolgte. Langsam, aber stetig, erhielt er den Spitznamen Esel. Sein Zeus-Hymnus, der die alles beherrschende Vernunft preist, ist einer der wenigen vollständigen frühstoischen Texte.',
    },
    timon: {
      name: 'Timon von Phleius',
      note: 'Satiriker und Sprachrohr Pyrrhons',
      about: 'Pyrrhons Schüler und Verkünder. In satirischen Gedichten, den Sillen, verspottete er die selbstsicheren Philosophen aller Schulen und pries Pyrrhons Gelassenheit.',
    },
    arcesilaus: {
      name: 'Arkesilaos',
      note: 'Machte die Akademie skeptisch',
      about: 'Als Oberhaupt der Akademie wandte er sie dem Skeptizismus zu und belebte Sokrates’ Gewohnheit, gegen jede Ansicht zu argumentieren. Nichts lässt sich sicher wissen, also soll der Weise das Urteil zurückhalten. Er schrieb nichts und wurde für seinen Witz und seine Großzügigkeit bewundert.',
    },
    chrysippus: {
      name: 'Chrysipp',
      note: 'Systematisierte stoische Logik und Physik',
      about: 'Das dritte Oberhaupt der Stoa und ihr großer Systematiker; die Alten sagten, ohne Chrysipp gäbe es keine Stoa. Er schuf die stoische Aussagenlogik und verteidigte Schicksal und Vorsehung. Er soll über siebenhundert Bücher geschrieben haben, von denen keines erhalten ist.',
    },
    carneades: {
      name: 'Karneades',
      note: 'Keine Gewissheit, nur Grade der Wahrscheinlichkeit',
      about: 'Oberhaupt der Akademie in ihrer skeptischen Phase. Bei einer Gesandtschaft in Rom sprach er an einem Tag für die Gerechtigkeit und am nächsten gegen sie, was Cato empörte. Gewissheit sei unmöglich, lehrte er, doch wir können nach dem Wahrscheinlichen handeln.',
    },
    panaetius: {
      name: 'Panaitios',
      note: 'Passte die Stoa den Römern an',
      about: 'Ein Stoiker aus Rhodos, der in Rom im Kreis des Scipio lebte und später die Stoa leitete. Er formte den Stoizismus zu einer praktischen Ethik der Pflicht und des öffentlichen Lebens; Ciceros Über die Pflichten beruht auf seinem Werk.',
    },
    'philo-larissa': {
      name: 'Philon von Larisa',
      note: 'Letztes Oberhaupt der Akademie',
      about: 'Das letzte unbestrittene Oberhaupt von Platons Akademie. Auf der Flucht aus Athen im Krieg gegen Mithridates lehrte er in Rom, wo ihn der junge Cicero hörte. Er milderte die Skepsis der Akademie und argumentierte, sie sei immer eine einzige Schule gewesen.',
    },
    posidonius: {
      name: 'Poseidonios',
      note: 'Stoischer Universalgelehrter; Lehrer Ciceros',
      about: 'Ein stoischer Universalgelehrter aus Rhodos, der die Größe der Erde schätzte, die Gezeiten erforschte und bis an die Atlantikküste reiste. Cicero studierte bei ihm, und Pompeius besuchte seine Schule. Er brachte Platon und Aristoteles in die Stoa zurück.',
    },
    antiochus: {
      name: 'Antiochos von Askalon',
      note: 'Führte die Akademie vom Skeptizismus zurück',
      about: 'Ein Schüler Philons, der mit ihm brach, weil die Akademie Platon verlassen habe. Er lehrte, Platon, Aristoteles und die Stoiker stimmten im Wesentlichen überein, und kehrte zu einem zuversichtlichen Platonismus zurück. Cicero hörte seine Vorlesungen in Athen.',
    },
    philodemus: {
      name: 'Philodemos',
      note: 'Epikureer, dessen Bibliothek in Herculaneum erhalten blieb',
      about: 'Ein Epikureer aus Gadara, der in einer Villa in Herculaneum bei Neapel lehrte. Der Ausbruch des Vesuvs im Jahr 79 n. Chr. begrub deren Bibliothek; die verkohlten Schriftrollen, viele davon seine Werke über Musik, Dichtung und die Gefühle, werden heute mit moderner Bildgebung noch gelesen.',
    },
    cicero: {
      name: 'Cicero',
      note: 'Brachte die griechische Philosophie ins Lateinische',
      about: 'Roms größter Redner und führender Staatsmann, der in Athen und Rhodos Philosophie studierte. In seinen letzten Jahren schrieb er Dialoge, die den Römern die griechische Philosophie nahebrachten und einen Großteil ihres lateinischen Wortschatzes prägten. Er neigte der gemäßigten Skepsis der Akademie zu und wurde auf Befehl des Marcus Antonius getötet.',
    },
    andronicus: {
      name: 'Andronikos von Rhodos',
      note: 'Gab Aristoteles’ Werke in der uns bekannten Form heraus',
      about: 'Ein Peripatetiker aus Rhodos, der Aristoteles’ lange vernachlässigte Werke herausgab und zu der Sammlung ordnete, die wir noch heute benutzen. Die Gruppierung der Schriften des Aristoteles und wohl sogar das Wort Metaphysik gehen auf seine Ausgabe zurück.',
    },
    aenesidemus: {
      name: 'Ainesidemos',
      note: 'Belebte den Pyrrhonismus nach zwei Jahrhunderten neu',
      about: 'Er löste sich von der Akademie, die er für zu dogmatisch hielt, und belebte Pyrrhons Skepsis neu. Er stellte zehn Tropen zusammen, Standardargumente dafür, dass Erscheinungen je nach Betrachter und Umständen variieren und das Urteil daher zurückzuhalten ist.',
    },
    lucretius: {
      name: 'Lukrez',
      note: 'Epikureismus in lateinischen Versen',
      about: 'Ein römischer Dichter, dessen Lehrgedicht Über die Natur der Dinge Epikurs Philosophie in lateinischen Versen darlegt: Atome und das Leere, die Sterblichkeit der Seele und die Freiheit von der Furcht vor den Göttern. 1417 wiederentdeckt, floss es in die Wissenschaft der Renaissance ein.',
    },
    seneca: {
      name: 'Seneca',
      note: 'Briefe über das gute Leben; Neros Berater',
      about: 'Ein römischer Stoiker, Dramatiker und überaus reicher Politiker, der den Kaiser Nero unterrichtete und dann beriet. Seine Briefe an Lucilius geben praktischen Rat zu Zorn, Trauer, Zeit und Tod. Der Verschwörung beschuldigt, wurde er von Nero zum Selbstmord gezwungen.',
    },
    musonius: {
      name: 'Musonius Rufus',
      note: 'Stoizismus als tägliche Übung',
      about: 'Der römische Sokrates, ein stoischer Lehrer, der Philosophie als Lebensweise lehrte: einfache Kost, harte Arbeit und dieselbe Bildung für Frauen wie für Männer. Kaiser verbannten ihn mehr als einmal. Epiktet war sein Schüler.',
    },
    plutarch: {
      name: 'Plutarch',
      note: 'Biograph und Priester in Delphi',
      about: 'Ein Grieche aus Chaironeia, Priester am Orakel von Delphi und Platoniker. Seine Parallelbiographien, gepaarte Lebensbeschreibungen von Griechen und Römern, prägten Europas Bild der Antike, und seine Essays, die Moralia, reichen von Ethik über Religion bis zur Seele.',
    },
    epictetus: {
      name: 'Epiktet',
      note: 'Konzentriere dich nur auf das, was bei dir liegt',
      about: 'Als Sklave geboren, studierte er bei Musonius Rufus und wurde später freigelassen. Manches liegt bei uns, unsere Urteile und Entscheidungen, das Übrige nicht; Freiheit entsteht, wenn man sich nur um das Erste kümmert. Sein Schüler Arrian hielt seine Lehre in den Diatriben und im Handbüchlein fest.',
    },
    marcus: {
      name: 'Mark Aurel',
      note: 'Kaiser; schrieb die Selbstbetrachtungen',
      about: 'Römischer Kaiser und Stoiker, der einen großen Teil seiner Regierungszeit im Krieg an der Donaugrenze verbrachte. Seine Selbstbetrachtungen, private Notizen an sich selbst, mahnen zu Ruhe, Pflicht und Annahme dessen, was geschieht, und erinnern ihn daran, dass alles vergeht.',
    },
    alexander: {
      name: 'Alexander von Aphrodisias',
      note: 'Größter antiker Kommentator des Aristoteles',
      about: 'Inhaber des offiziellen Lehrstuhls für aristotelische Philosophie in Athen und der größte antike Kommentator des Aristoteles. Er verteidigte den freien Willen gegen das Schicksal der Stoiker und las Aristoteles so, dass die Seele den Körper nicht überlebt.',
    },
    sextus: {
      name: 'Sextus Empiricus',
      note: 'Grundriss der pyrrhonischen Skepsis, unsere Hauptquelle der Skeptiker',
      about: 'Ein Arzt und Skeptiker, dessen Bücher unsere Hauptquelle zur antiken Skepsis sind. Sein Grundriss der pyrrhonischen Skepsis legt den Weg des Skeptikers dar: jedem Argument ein gleichwertiges entgegensetzen, das Urteil zurückhalten, und Ruhe folgt. Im 16. Jahrhundert wiederentdeckt, beeinflusste er Montaigne und Descartes.',
    },
    ammonius: {
      name: 'Ammonios Sakkas',
      note: 'Lehrer Plotins; schrieb nichts',
      about: 'Ein rätselhafter platonischer Lehrer in Alexandria, genannt Sakkas, vielleicht der Sackträger, nach seinem früheren Beruf. Er schrieb nichts, doch Plotin studierte elf Jahre bei ihm, und seine Schüler vereinbarten, seine Lehre geheim zu halten.',
    },
    plotinus: {
      name: 'Plotin',
      note: 'Alle Wirklichkeit fließt aus dem Einen',
      about: 'Er studierte bei Ammonios in Alexandria und lehrte dann in Rom. Alle Wirklichkeit fließt aus dem Einen, jenseits von Sein und Denken, über Geist und Seele bis zur Materie; die Seele kann sich nach innen wenden und zur Einheit mit ihm aufsteigen. Sein Schüler Porphyrios gab seine Schriften als Enneaden heraus.',
    },
  },
} satisfies Translation;

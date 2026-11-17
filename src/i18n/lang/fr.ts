import type { Translation } from '../core';

export default {
  ui: {
    siteName: 'Philosophes grecs',
    title: 'Frise chronologique des philosophes grecs : qui a enseigné à qui, de Thalès à Plotin',
    description:
      'Une frise chronologique à l’échelle des philosophes grecs, de Thalès à Plotin : qui a enseigné à qui, quelles écoles sont issues de quelles autres, et qui a influencé qui.',
    overline: 'Une frise chronologique · v. 600 av. J.-C. – 270 apr. J.-C.',
    titleA: 'Philosophes',
    titleB: 'grecs',
    subtitle: 'Qui a enseigné à qui, et quelles écoles sont issues de quelles autres, de Thalès à Plotin.',
    ogAlt: 'La frise autour de Socrate et de Platon : les branches des écoles à gauche, les philosophes à droite.',
    listName: 'Philosophes grecs, par ordre chronologique',
    language: 'Langue',
    overview: 'Vue d’ensemble de la frise',
    bce: '{n} av. J.-C.',
    ce: '{n} apr. J.-C.',
    spanBce: 'v. {a}–{b} av. J.-C.',
    spanCe: 'v. {a}–{b} apr. J.-C.',
    spanCross: 'v. {a} av. J.-C. – {b} apr. J.-C.',
    active: 'actif vers {year}',
    founded: 'Fondée',
    foundedBy: '{year} par {name}',
    school: 'École',
    none: 'Aucune',
    studentOf: 'Élève de',
    teacherOf: 'Maître de',
    influencedBy: 'Influencé par',
    influenced: 'A influencé',
    members: 'Membres',
    close: 'Fermer',
    select: 'Sélectionner',
    done: 'Terminé',
    selectAll: 'Tout sélectionner',
    deselectAll: 'Tout désélectionner',
  },
  eras: {
    'Pre-Socratics': 'Présocratiques',
    'Classical Athens': 'Athènes classique',
    Hellenistic: 'Époque hellénistique',
    Roman: 'Époque romaine',
  },
  schools: {
    milesian: {
      name: 'École de Milet',
      philosophy: 'Une seule source matérielle de toutes choses',
      note: 'Les premiers philosophes grecs, à Milet, cherchaient la substance unique dont tout est fait : l’eau pour Thalès, l’illimité pour Anaximandre, l’air pour Anaximène.',
    },
    pythagorean: {
      name: 'Pythagoriciens',
      philosophy: 'Le nombre et l’harmonie',
      note: 'Une confrérie fondée par Pythagore à Crotone, à la fois religieuse et philosophique. Le nombre et l’harmonie ordonnent le monde, et l’âme renaît dans de nouveaux corps.',
    },
    eleatic: {
      name: 'École d’Élée',
      philosophy: 'L’être est un et immuable',
      note: 'Venue d’Élée, dans le sud de l’Italie. La raison montre que ce qui est doit être un, entier et immuable : le changement et la pluralité sont des illusions, que les paradoxes de Zénon défendent.',
    },
    pluralist: {
      name: 'Pluralistes',
      philosophy: 'Une étiquette tardive, pas une véritable école',
      note: 'Étiquette tardive pour les penseurs qui répondirent à Parménide par plusieurs éléments immuables : les quatre racines d’Empédocle mues par l’Amour et la Haine, les germes innombrables d’Anaxagore ordonnés par l’Intellect.',
    },
    atomist: {
      name: 'Atomistes',
      philosophy: 'L’atomisme : les atomes et le vide',
      note: 'Tout est fait d’atomes minuscules et indivisibles qui se meuvent dans le vide. Le changement n’est que l’assemblage et la séparation des atomes, sans besoin de dieux ni de finalité.',
    },
    sophist: {
      name: 'Sophistes',
      philosophy: 'Un mouvement de maîtres payés, pas une école',
      note: 'Des maîtres itinérants qui se faisaient payer pour enseigner la rhétorique et l’art de réussir dans la vie publique. Ils se demandaient si la vérité et la justice sont plus que de simples conventions humaines.',
    },
    academy: {
      name: 'L’Académie',
      philosophy: 'Le platonisme',
      note: 'L’école de Platon, dans le bois d’Académos près d’Athènes. Elle enseigna la théorie des Formes, devint sceptique sous Arcésilas et Carnéade, et dura près de trois siècles.',
    },
    lyceum: {
      name: 'Le Lycée',
      philosophy: 'L’aristotélisme (péripatéticiens)',
      note: 'L’école d’Aristote, au gymnase du Lycée ; ses membres furent appelés péripatéticiens, d’après son allée couverte. Ils étudièrent la logique, la nature, l’éthique et la politique, puis éditèrent et commentèrent Aristote.',
    },
    cynic: {
      name: 'Cyniques',
      philosophy: 'Le cynisme : vivre selon la nature, rejeter les conventions',
      note: 'Vivre simplement et en accord avec la nature, et mépriser la richesse, le rang et les conventions. Diogène en fit une provocation publique, et le cynisme marqua les stoïciens.',
    },
    cyrenaic: {
      name: 'Cyrénaïques',
      philosophy: 'L’hédonisme : le plaisir du corps est le bien',
      note: 'Originaires de Cyrène, en Afrique du Nord. Le plaisir du moment présent est le seul bien, et nous ne pouvons être sûrs que de nos propres sensations.',
    },
    megarian: {
      name: 'École de Mégare',
      philosophy: 'La logique et la dialectique',
      note: 'Euclide de Mégare joignit l’éthique de Socrate à l’idée éléate de l’Un : le Bien est un, sous de multiples noms. Connue pour sa dialectique et ses casse-tête logiques.',
    },
    pyrrhonist: {
      name: 'Pyrrhoniens',
      philosophy: 'Le scepticisme pyrrhonien',
      note: 'Suspendre son jugement : à tout argument on peut opposer un argument équivalent, et s’abstenir de croire apporte la paix de l’âme (l’ataraxie).',
    },
    garden: {
      name: 'Le Jardin',
      philosophy: 'L’épicurisme',
      note: 'La communauté d’Épicure, dans son jardin à Athènes. Le but de la vie est le plaisir, entendu comme absence de douleur et de crainte ; il ne faut craindre ni les dieux ni la mort.',
    },
    stoa: {
      name: 'Le Portique',
      philosophy: 'Le stoïcisme',
      note: 'Nommée d’après le Portique peint d’Athènes où enseignait Zénon. La vertu est le seul bien : vivre en accord avec une nature rationnelle, et accepter avec calme ce qui ne dépend pas de nous.',
    },
    platonist: {
      name: 'Platoniciens du moyen platonisme',
      philosophy: 'Une étiquette tardive : le platonisme après la fermeture de l’Académie',
      note: 'Étiquette tardive pour les platoniciens venus après la fermeture de l’Académie. Ils lisaient chez Platon l’enseignement d’un dieu transcendant, et puisaient chez Aristote et les stoïciens.',
    },
    neoplatonist: {
      name: 'Néoplatonisme',
      philosophy: 'L’école de Plotin à Rome',
      note: 'L’école de Plotin à Rome. Toute la réalité découle de l’Un par l’Intellect et l’Âme, et l’âme peut se retourner pour remonter jusqu’à lui. Elle a marqué la pensée chrétienne et islamique médiévale.',
    },
  },
  people: {
    thales: {
      name: 'Thalès',
      note: 'Tout est eau',
      about: 'Aristote le considérait comme le premier philosophe. Marchand et ingénieur de Milet, dit-on, il aurait prédit l’éclipse de soleil de 585 av. J.-C. ; il chercha une explication naturelle du monde plutôt qu’un mythe, et proposa que tout vient de l’eau. Rien de ce qu’il a écrit ne nous est parvenu.',
    },
    anaximander: {
      name: 'Anaximandre',
      note: 'L’illimité (apeiron) est la source de tout',
      about: 'Successeur de Thalès à Milet. Au lieu d’une substance familière, il fit de l’apeiron, illimité et indéfini, la source des choses : les contraires, comme le chaud et le froid, s’en séparent. Il dessina l’une des premières cartes du monde et imagina la Terre suspendue sans appui au centre de tout.',
    },
    pythagoras: {
      name: 'Pythagore',
      note: 'Le nombre et l’harmonie sous-tendent le réel',
      about: 'Il fonda à Crotone, dans le sud de l’Italie, une communauté à la fois école et ordre religieux, avec biens communs et règles strictes. Il enseignait que l’âme est immortelle et renaît, et ses disciples découvrirent que les harmonies musicales suivent des rapports simples entre nombres. Une bonne part de ce qu’on lui attribue, le célèbre théorème compris, est peut-être l’œuvre de pythagoriciens plus tardifs.',
    },
    xenophanes: {
      name: 'Xénophane',
      note: 'Un seul dieu, différent des hommes ; critique du mythe',
      about: 'Poète errant qui se moquait des dieux d’Homère et d’Hésiode, qui se conduisent comme des hommes : si les chevaux savaient dessiner, disait-il, ils dessineraient des dieux semblables à des chevaux. Il proposa un dieu unique, différent de nous, qui meut tout par la seule pensée, et resta prudent sur l’étendue de ce que les hommes peuvent savoir.',
    },
    anaximenes: {
      name: 'Anaximène',
      note: 'Tout est air',
      about: 'Le troisième Milésien. Il prit l’air pour substance fondamentale et donna un mécanisme du changement : l’air se raréfie en feu, et se condense en vent, nuage, eau, terre et pierre. Expliquer les différences de nature par des différences de densité était une idée appelée à durer.',
    },
    heraclitus: {
      name: 'Héraclite',
      note: 'Tout s’écoule ; le Logos ordonne le changement',
      about: 'D’Éphèse, célèbre pour ses formules énigmatiques. Tout est en flux, et l’on ne se baigne jamais deux fois dans le même fleuve, pourtant le changement suit une mesure cachée, le Logos. Les contraires vont ensemble : le chemin qui monte et celui qui descend ne font qu’un. Les Anciens l’appelaient l’Obscur.',
    },
    parmenides: {
      name: 'Parménide',
      note: 'Ce qui est, est ; le changement est impossible',
      about: 'Dans son poème, une déesse lui montre la voie de la vérité : ce qui est, est, et ce qui n’est pas ne peut même pas être pensé. Il en déduisit que l’être véritable est un, entier, éternel et immuable, et que le monde changeant des sens n’est qu’opinion. Tous les philosophes de la nature après lui durent lui répondre.',
    },
    anaxagoras: {
      name: 'Anaxagore',
      note: 'L’Intellect (nous) met la matière en ordre',
      about: 'Le premier philosophe à s’installer à Athènes, où il fut l’ami de Périclès. Tout contient une part de tout, et l’Intellect (nous) mit le mélange en rotation et le fit se trier lui-même. Il disait du soleil que c’était une pierre incandescente, fut jugé pour impiété et quitta la cité.',
    },
    empedocles: {
      name: 'Empédocle',
      note: 'Quatre éléments mus par l’Amour et la Haine',
      about: 'Poète, médecin et faiseur de prodiges venu de Sicile. Tout est un mélange de quatre racines, terre, eau, air et feu, rapprochées par l’Amour et séparées par la Haine en un cycle sans fin. La légende veut qu’il se soit jeté dans l’Etna pour prouver qu’il était un dieu.',
    },
    'zeno-elea': {
      name: 'Zénon d’Élée',
      note: 'Paradoxes contre le mouvement (Achille et la tortue)',
      about: 'Élève de Parménide, qui le défendit en montrant que le mouvement et la pluralité mènent à des absurdités. Achille aux pieds légers ne rattrapera jamais la tortue, et une flèche en vol est immobile à chaque instant. Ses énigmes sur l’infini n’ont été pleinement résolues que par les mathématiques modernes.',
    },
    protagoras: {
      name: 'Protagoras',
      note: 'L’homme est la mesure de toutes choses',
      about: 'Le premier et le plus célèbre des sophistes, qui se faisait payer cher pour apprendre aux jeunes gens à réussir. L’homme est la mesure de toutes choses : ce qui paraît vrai à chacun est vrai pour lui. Il disait aussi ne pouvoir savoir si les dieux existent. Platon a donné son nom à l’un de ses dialogues.',
    },
    gorgias: {
      name: 'Gorgias',
      note: 'Rien n’existe ; si quelque chose existait, on ne pourrait le connaître',
      about: 'Ambassadeur venu de Sicile et maître de rhétorique, il éblouit Athènes par ses discours. Dans un traité provocateur, il soutint que rien n’existe ; que, si quelque chose existait, on ne pourrait le connaître ; et que, si on le connaissait, on ne pourrait le communiquer à personne. Il vécut plus de cent ans.',
    },
    leucippus: {
      name: 'Leucippe',
      note: 'Le premier à proposer les atomes et le vide',
      about: 'On sait peu de choses de sa vie ; certains Anciens doutaient même qu’il ait existé. Répondant aux Éléates, il proposa que le monde est fait d’innombrables corps indivisibles se mouvant dans le vide, de sorte que le changement n’est qu’un réarrangement d’atomes. Son élève Démocrite développa la théorie.',
    },
    melissus: {
      name: 'Mélissos',
      note: 'L’être est infini et immuable',
      about: 'Éléate de Samos, également amiral, qui vainquit la flotte athénienne. Il reprit Parménide en prose claire, soutenant que l’être est un, immuable et illimité. Aristote trouvait son raisonnement grossier, mais il a orienté la façon dont les penseurs suivants ont lu les Éléates.',
    },
    philolaus: {
      name: 'Philolaos',
      note: 'La Terre tourne autour d’un feu central',
      about: 'Pythagoricien, l’un des premiers à mettre par écrit les idées pythagoriciennes. Le cosmos est fait de choses limitantes et illimitées ajustées en harmonie, et la Terre n’en est pas le centre : elle tourne autour d’un feu central, avec le soleil et les planètes. Copernic le mentionne.',
    },
    socrates: {
      name: 'Socrate',
      note: 'Tout remettre en question ; la vertu est connaissance',
      about: 'Il n’a rien écrit et nous est connu par ses disciples, surtout Platon. Il interrogeait ses concitoyens sur l’agora et montrait que ceux qui prétendaient savoir ce que sont le courage ou la justice l’ignoraient ; sa seule sagesse était de savoir qu’il ne savait pas. Une vie sans examen, disait-il, ne vaut pas la peine d’être vécue. Athènes le jugea pour impiété et corruption de la jeunesse, et il but la ciguë.',
    },
    democritus: {
      name: 'Démocrite',
      note: 'Tout est atomes se mouvant dans le vide',
      about: 'Le philosophe rieur d’Abdère, qui fit de l’idée de Leucippe un système complet. Seuls les atomes et le vide sont réels ; le doux, l’amer, le chaud et le froid n’existent que par convention. Il écrivit sur de nombreux sujets, dont l’éthique, où le but est la bonne humeur. Presque aucun de ses nombreux livres n’a survécu.',
    },
    antisthenes: {
      name: 'Antisthène',
      note: 'La vertu seule suffit au bonheur',
      about: 'Élève de Gorgias, puis fidèle disciple de Socrate, présent à sa mort. Il enseignait que la vertu s’apprend et suffit au bonheur, et qu’il faut mépriser le plaisir et la richesse. Il enseignait au gymnase du Cynosarge, ce qui a peut-être donné leur nom aux cyniques.',
    },
    aristippus: {
      name: 'Aristippe',
      note: 'Le plaisir du moment est le bien',
      about: 'Disciple de Socrate originaire de Cyrène, et le premier d’entre eux à se faire payer. Il jouissait du luxe sans s’y asservir : je possède, disait-il, je ne suis pas possédé. Son école tenait que le plaisir du moment présent est le seul bien.',
    },
    'euclid-megara': {
      name: 'Euclide de Mégare',
      note: 'Le Bien est un, sous de multiples noms',
      about: 'Disciple proche de Socrate, il joignit son éthique à l’être un et immuable de Parménide : le Bien est une chose unique, qu’on l’appelle sagesse, dieu ou intellect. Après la mort de Socrate, Platon trouva refuge chez lui à Mégare. Ne pas le confondre avec le mathématicien Euclide.',
    },
    archytas: {
      name: 'Archytas',
      note: 'Mathématicien et homme d’État ; ami de Platon',
      about: 'Mathématicien pythagoricien et principal homme d’État de Tarente, élu stratège à maintes reprises. Il résolut l’ancien problème de la duplication du cube et fonda la mécanique mathématique. Ami de Platon, il envoya un navire le tirer des griffes du tyran de Syracuse.',
    },
    plato: {
      name: 'Platon',
      note: 'Les Formes sont la vraie réalité',
      about: 'Élève de Socrate, il écrivit sa philosophie sous forme de dialogues dont Socrate est le héros. Les choses que nous voyons sont des copies imparfaites de Formes éternelles que seule la raison saisit ; l’âme est immortelle ; et la cité juste est gouvernée par des philosophes. Il fonda l’Académie, et un philosophe moderne a dit que toute la tradition occidentale n’est qu’une suite de notes en bas de page de son œuvre.',
    },
    diogenes: {
      name: 'Diogène de Sinope',
      note: 'Vivait dans une jarre et se moquait de toutes les conventions',
      about: 'Exilé de Sinope, il vécut à Athènes dans une grande jarre, ne possédant presque rien. Il vivait comme un chien, sans honte et selon la nature, et raillait les conventions par des coups d’éclat publics, comme chercher en plein jour un homme honnête avec une lampe. Quand Alexandre le Grand lui offrit ce qu’il voudrait, il lui demanda de s’ôter de son soleil.',
    },
    speusippus: {
      name: 'Speusippe',
      note: 'Neveu de Platon ; dirigea l’Académie après lui',
      about: 'Neveu de Platon, qui dirigea l’Académie après lui. Il mit de côté les Formes de Platon et fit des objets mathématiques les premières réalités, et il classa plantes et animaux selon leurs ressemblances.',
    },
    xenocrates: {
      name: 'Xénocrate',
      note: 'A systématisé l’enseignement de Platon',
      about: 'Troisième scholarque de l’Académie, réputé pour sa gravité. Il organisa l’enseignement de Platon en système et divisa la philosophie en physique, éthique et logique, un schéma que les stoïciens reprirent plus tard.',
    },
    aristotle: {
      name: 'Aristote',
      note: 'La logique, les quatre causes, la vertu comme juste milieu',
      about: 'Élève de Platon pendant vingt ans, puis précepteur du jeune Alexandre le Grand, puis fondateur du Lycée. Il inventa la logique formelle et écrivit sur presque tout : physique, biologie, âme, éthique, politique et poétique. Contre Platon, les formes des choses existent dans les choses mêmes. Pour les penseurs médiévaux, il était simplement le Philosophe.',
    },
    anaxarchus: {
      name: 'Anaxarque',
      note: 'A voyagé avec Alexandre jusqu’en Inde',
      about: 'Atomiste qui accompagna Alexandre le Grand en Inde, où lui et son élève Pyrrhon rencontrèrent des sages indiens. Il était connu pour son indifférence à la douleur et sa flatterie envers Alexandre, et surnommé l’Heureux.',
    },
    theophrastus: {
      name: 'Théophraste',
      note: 'A dirigé le Lycée ; fondateur de la botanique',
      about: 'Collègue et successeur d’Aristote au Lycée, qui prospéra sous sa direction avec quelque deux mille élèves. Il écrivit les premiers ouvrages systématiques sur les plantes, ainsi qu’un livre plein d’esprit, les Caractères, courtes esquisses de types humains.',
    },
    crates: {
      name: 'Cratès de Thèbes',
      note: 'A donné sa fortune pour vivre en cynique',
      about: 'Riche Thébain qui donna sa fortune pour vivre en cynique, avec plus de douceur que Diogène : on l’accueillait dans les maisons comme un guérisseur des querelles. Il épousa la philosophe Hipparchia, qui partagea sa vie dans la rue. Zénon de Citium, fondateur du stoïcisme, fut son élève.',
    },
    pyrrho: {
      name: 'Pyrrhon',
      note: 'Rien ne peut être connu ; suspendre son jugement et trouver le calme',
      about: 'Il se rendit en Inde avec Alexandre et Anaxarque. Puisque nous ne pouvons connaître les choses telles qu’elles sont, nous devons suspendre notre jugement, et la paix de l’âme s’ensuit. On raconte que ses amis devaient l’empêcher de marcher au bord des falaises. Il n’écrivit rien ; son élève Timon consigna ses idées.',
    },
    stilpo: {
      name: 'Stilpon',
      note: 'Débatteur célèbre ; autosuffisance',
      about: 'Chef de l’école de Mégare et débatteur réputé, qui détourna des élèves de toutes les autres écoles. Il enseignait que le sage n’a besoin de rien hors de lui-même : quand sa ville fut mise à sac et qu’on lui demanda ce qu’il avait perdu, il répondit qu’il avait encore son savoir.',
    },
    polemon: {
      name: 'Polémon',
      note: 'A dirigé l’Académie ; éthique de la vie selon la nature',
      about: 'Jeune débauché qui, dit-on, fit irruption ivre dans une leçon de Xénocrate et fut converti sur-le-champ. À la tête de l’Académie, il enseigna une éthique pratique de la vie conforme à la nature, et Zénon de Citium fut parmi ses élèves.',
    },
    epicurus: {
      name: 'Épicure',
      note: 'Le bien est le plaisir calme, libre de crainte',
      about: 'Il fonda dans son jardin à Athènes une communauté qui accueillait les femmes et les esclaves. Le but de la vie est le plaisir, entendu comme absence de douleur dans le corps et de trouble dans l’âme ; les plaisirs simples et l’amitié sont les meilleurs. Puisque nous ne sommes qu’atomes, la mort n’est rien pour nous : quand elle est là, nous ne sommes plus.',
    },
    strato: {
      name: 'Straton de Lampsaque',
      note: 'A expliqué la nature sans les dieux',
      about: 'Troisième scholarque du Lycée, surnommé le Physicien. Il expliquait le monde par des forces naturelles comme le chaud et le froid, sans recours aux dieux ni à la finalité, et aurait étudié le vide par des expériences.',
    },
    'zeno-citium': {
      name: 'Zénon de Citium',
      note: 'La vertu est le seul bien ; vivre selon la raison',
      about: 'Marchand chypriote, naufragé à Athènes, qui étudia auprès du cynique Cratès et d’autres avant d’enseigner au Portique peint, la Stoa. La vertu est le seul bien ; tout le reste, même la santé et la richesse, est indifférent. Le monde est ordonné par une raison divine, et nous devons vivre en accord avec elle.',
    },
    cleanthes: {
      name: 'Cléanthe',
      note: 'Hymne à Zeus ; dirigea le Portique après Zénon',
      about: 'Ancien boxeur qui portait de l’eau la nuit pour payer ses leçons, et succéda à Zénon à la tête du Portique. Lent mais constant, il fut surnommé l’Âne. Son Hymne à Zeus, qui célèbre la raison gouvernant toutes choses, est l’un des rares textes stoïciens anciens parvenus complets.',
    },
    timon: {
      name: 'Timon de Phlionte',
      note: 'Satiriste et porte-voix de Pyrrhon',
      about: 'Élève et propagandiste de Pyrrhon. Dans des poèmes satiriques, les Silles, il se moquait des philosophes sûrs d’eux de toutes les écoles et louait le calme de Pyrrhon.',
    },
    arcesilaus: {
      name: 'Arcésilas',
      note: 'A rendu l’Académie sceptique',
      about: 'À la tête de l’Académie, il la rendit sceptique, reprenant l’habitude de Socrate de réfuter toutes les opinions. Rien ne peut être connu avec certitude, donc le sage suspend son jugement. Il n’écrivit rien, et fut admiré pour son esprit et sa générosité.',
    },
    chrysippus: {
      name: 'Chrysippe',
      note: 'A systématisé la logique et la physique stoïciennes',
      about: 'Troisième scholarque du Portique et son grand systématisateur ; les Anciens disaient que sans Chrysippe il n’y aurait pas de Portique. Il construisit la logique des propositions des stoïciens et défendit le destin et la providence. Il aurait écrit plus de sept cents livres, dont aucun ne subsiste.',
    },
    carneades: {
      name: 'Carnéade',
      note: 'Pas de certitude, seulement des degrés de probabilité',
      about: 'Scholarque de l’Académie dans sa phase sceptique. Lors d’une ambassade à Rome, il plaida pour la justice un jour et contre elle le lendemain, au grand scandale de Caton. Aucune certitude n’est possible, enseignait-il, mais nous pouvons agir selon ce qui est probable.',
    },
    panaetius: {
      name: 'Panétius',
      note: 'A adapté le stoïcisme pour les Romains',
      about: 'Stoïcien de Rhodes qui vécut à Rome dans le cercle de Scipion, puis dirigea le Portique. Il fit du stoïcisme une éthique pratique du devoir et de la vie publique ; le De officiis de Cicéron s’appuie sur son œuvre.',
    },
    'philo-larissa': {
      name: 'Philon de Larissa',
      note: 'Dernier scholarque de l’Académie',
      about: 'Le dernier scholarque incontesté de l’Académie de Platon. Fuyant Athènes pendant la guerre contre Mithridate, il enseigna à Rome, où le jeune Cicéron l’entendit. Il adoucit le scepticisme de l’Académie et soutint qu’elle avait toujours formé une seule école.',
    },
    posidonius: {
      name: 'Posidonios',
      note: 'Polymathe stoïcien ; maître de Cicéron',
      about: 'Polymathe stoïcien de Rhodes qui estima la taille de la Terre, étudia les marées et voyagea jusqu’à la côte atlantique. Cicéron fut son élève et Pompée visita son école. Il fit rentrer Platon et Aristote dans le stoïcisme.',
    },
    antiochus: {
      name: 'Antiochus d’Ascalon',
      note: 'A ramené l’Académie loin du scepticisme',
      about: 'Élève de Philon qui rompit avec lui, estimant que l’Académie avait abandonné Platon. Il enseigna que Platon, Aristote et les stoïciens s’accordaient pour l’essentiel, et revint à un platonisme assuré. Cicéron suivit ses leçons à Athènes.',
    },
    philodemus: {
      name: 'Philodème',
      note: 'Épicurien dont la bibliothèque a survécu à Herculanum',
      about: 'Épicurien de Gadara qui enseigna dans une villa d’Herculanum, près de Naples. L’éruption du Vésuve en 79 apr. J.-C. ensevelit sa bibliothèque ; les rouleaux carbonisés, dont beaucoup sont ses œuvres sur la musique, la poésie et les émotions, sont encore déchiffrés aujourd’hui grâce à l’imagerie moderne.',
    },
    cicero: {
      name: 'Cicéron',
      note: 'A fait passer la philosophie grecque en latin',
      about: 'Plus grand orateur de Rome et homme d’État de premier plan, il étudia la philosophie à Athènes et à Rhodes. Dans ses dernières années, il écrivit des dialogues présentant la philosophie grecque aux Romains, forgeant une grande part de son vocabulaire latin. Il penchait vers le scepticisme modéré de l’Académie, et fut tué sur l’ordre de Marc Antoine.',
    },
    andronicus: {
      name: 'Andronicos de Rhodes',
      note: 'A édité les œuvres d’Aristote sous la forme que nous connaissons',
      about: 'Péripatéticien de Rhodes qui édita et ordonna les œuvres d’Aristote, longtemps négligées, dans le recueil que nous utilisons encore. Le classement des écrits d’Aristote, et probablement même le mot métaphysique, remontent à son édition.',
    },
    aenesidemus: {
      name: 'Énésidème',
      note: 'A relancé le pyrrhonisme après deux siècles',
      about: 'Il rompit avec l’Académie, qu’il trouvait trop dogmatique, et relança le scepticisme de Pyrrhon. Il rassembla dix modes, arguments types montrant que les apparences varient selon l’observateur et les circonstances, de sorte qu’il faut suspendre son jugement.',
    },
    lucretius: {
      name: 'Lucrèce',
      note: 'L’épicurisme en vers latins',
      about: 'Poète romain dont le long poème De la nature des choses expose la philosophie d’Épicure en vers latins : les atomes et le vide, la mortalité de l’âme, la libération de la crainte des dieux. Redécouvert en 1417, il a nourri la science de la Renaissance.',
    },
    seneca: {
      name: 'Sénèque',
      note: 'Lettres sur l’art de bien vivre ; conseiller de Néron',
      about: 'Stoïcien romain, dramaturge et politicien immensément riche, qui fut le précepteur puis le conseiller de l’empereur Néron. Ses Lettres à Lucilius donnent des conseils pratiques sur la colère, le deuil, le temps et la mort. Accusé de complot, il reçut de Néron l’ordre de se donner la mort.',
    },
    musonius: {
      name: 'Musonius Rufus',
      note: 'Le stoïcisme comme pratique quotidienne',
      about: 'Le Socrate romain, maître stoïcien qui enseignait la philosophie comme art de vivre : nourriture simple, travail dur, et la même éducation pour les femmes que pour les hommes. Les empereurs l’exilèrent plus d’une fois. Épictète fut son élève.',
    },
    plutarch: {
      name: 'Plutarque',
      note: 'Biographe et prêtre à Delphes',
      about: 'Grec de Chéronée, prêtre de l’oracle de Delphes et platonicien. Ses Vies parallèles, biographies de Grecs et de Romains mises en regard, ont façonné l’image que l’Europe se faisait de l’Antiquité, et ses essais, les Moralia, portent sur l’éthique, la religion et l’âme.',
    },
    epictetus: {
      name: 'Épictète',
      note: 'Se concentrer uniquement sur ce qui dépend de nous',
      about: 'Né esclave, il suivit l’enseignement de Musonius Rufus puis fut affranchi. Certaines choses dépendent de nous, nos jugements et nos choix, et les autres non ; la liberté vient de ne se soucier que des premières. Son élève Arrien a consigné son enseignement dans les Entretiens et le Manuel.',
    },
    marcus: {
      name: 'Marc Aurèle',
      note: 'Empereur ; auteur des Pensées',
      about: 'Empereur romain et stoïcien, qui passa une grande partie de son règne en guerre sur la frontière du Danube. Ses Pensées, notes privées adressées à lui-même, prônent le calme, le devoir et l’acceptation de ce qui arrive, et lui rappellent que tout passe.',
    },
    alexander: {
      name: 'Alexandre d’Aphrodise',
      note: 'Plus grand commentateur antique d’Aristote',
      about: 'Titulaire de la chaire officielle de philosophie aristotélicienne à Athènes, et plus grand commentateur antique d’Aristote. Il défendit le libre arbitre contre le destin des stoïciens, et lut Aristote de manière que l’âme ne survive pas au corps.',
    },
    sextus: {
      name: 'Sextus Empiricus',
      note: 'Esquisses pyrrhoniennes, notre principale source sceptique',
      about: 'Médecin et sceptique dont les livres sont notre principale source sur le scepticisme antique. Ses Esquisses pyrrhoniennes exposent la voie du sceptique : opposer à chaque argument un argument équivalent, suspendre son jugement, et le calme s’ensuit. Redécouvert au XVIe siècle, il a influencé Montaigne et Descartes.',
    },
    ammonius: {
      name: 'Ammonios Saccas',
      note: 'Maître de Plotin ; n’a rien écrit',
      about: 'Mystérieux maître platonicien d’Alexandrie, surnommé Saccas, peut-être « le porteur de sacs », d’après son ancien métier. Il n’écrivit rien, mais Plotin étudia onze ans auprès de lui, et ses élèves convinrent de garder son enseignement secret.',
    },
    plotinus: {
      name: 'Plotin',
      note: 'Toute la réalité découle de l’Un',
      about: 'Il étudia auprès d’Ammonios à Alexandrie, puis enseigna à Rome. Toute la réalité découle de l’Un, au-delà de l’être et de la pensée, par l’Intellect et l’Âme jusqu’à la matière ; l’âme peut se tourner vers l’intérieur et remonter vers l’unité avec lui. Son élève Porphyre édita ses écrits sous le titre d’Ennéades.',
    },
  },
} satisfies Translation;

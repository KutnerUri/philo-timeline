import type { Translation } from '../core';

export default {
  ui: {
    siteName: 'Filósofos gregos',
    title: 'Linha do tempo dos filósofos gregos: quem ensinou quem, de Tales a Plotino',
    description:
      'Uma linha do tempo em escala dos filósofos gregos, de Tales a Plotino: quem ensinou quem, quais escolas nasceram de quais e quem influenciou quem.',
    overline: 'Uma linha do tempo · c. 600 a.C. – 270 d.C.',
    titleA: 'Filósofos',
    titleB: 'gregos',
    subtitle: 'Quem ensinou quem e quais escolas nasceram de quais, de Tales a Plotino.',
    ogAlt:
      'A linha do tempo em torno de Sócrates e Platão: ramos das escolas à esquerda, filósofos à direita.',
    listName: 'Filósofos gregos, em ordem cronológica',
    language: 'Idioma',
    overview: 'Visão geral da linha do tempo',
    bce: '{n} a.C.',
    ce: '{n} d.C.',
    spanBce: 'c. {a}–{b} a.C.',
    spanCe: 'c. {a}–{b} d.C.',
    spanCross: 'c. {a} a.C. – {b} d.C.',
    active: 'ativo c. {year}',
    founded: 'Fundação',
    foundedBy: '{year} por {name}',
    school: 'Escola',
    none: 'Nenhuma',
    studentOf: 'Aluno de',
    teacherOf: 'Professor de',
    influencedBy: 'Influenciado por',
    influenced: 'Influenciou',
    members: 'Membros',
    close: 'Fechar',
    select: 'Selecionar',
    done: 'Concluir',
    selectAll: 'Selecionar tudo',
    deselectAll: 'Desmarcar tudo',
  },
  eras: {
    'Pre-Socratics': 'Pré-socráticos',
    'Classical Athens': 'Atenas clássica',
    Hellenistic: 'Helenístico',
    Roman: 'Romano',
  },
  schools: {
    milesian: {
      name: 'Escola de Mileto',
      philosophy: 'Uma única matéria como origem de tudo',
      note: 'Os primeiros filósofos gregos, em Mileto, buscaram a substância única de que tudo é feito: a água para Tales, o ilimitado para Anaximandro, o ar para Anaxímenes.',
    },
    pythagorean: {
      name: 'Pitagóricos',
      philosophy: 'Número e harmonia',
      note: 'Uma irmandade fundada por Pitágoras em Crotona, em parte religiosa, em parte filosófica. Número e harmonia ordenam o mundo, e a alma renasce em novos corpos.',
    },
    eleatic: {
      name: 'Escola eleata',
      philosophy: 'O ser é uno e imutável',
      note: 'De Eleia, no sul da Itália. A razão mostra que o que é deve ser uno, inteiro e imutável, de modo que mudança e pluralidade são ilusões; os paradoxos de Zenão defendem essa tese.',
    },
    pluralist: {
      name: 'Pluralistas',
      philosophy: 'Um rótulo posterior, não uma escola de fato',
      note: 'Rótulo posterior para os pensadores que responderam a Parmênides com vários elementos imutáveis: as quatro raízes de Empédocles, movidas por Amor e Discórdia, e as incontáveis sementes de Anaxágoras, ordenadas pelo Espírito.',
    },
    atomist: {
      name: 'Atomistas',
      philosophy: 'Atomismo: átomos e vazio',
      note: 'Tudo é feito de minúsculos átomos indivisíveis que se movem no espaço vazio. A mudança é átomos que se combinam e se separam, sem necessidade de deuses ou de finalidade.',
    },
    sophist: {
      name: 'Sofistas',
      philosophy: 'Um movimento de professores pagos, não uma escola',
      note: 'Professores itinerantes que cobravam para ensinar retórica e como vencer na vida pública. Perguntavam se verdade e justiça seriam mais do que convenção humana.',
    },
    academy: {
      name: 'A Academia',
      philosophy: 'Platonismo',
      note: 'A escola de Platão, no bosque de Academo, fora de Atenas. Ensinou a teoria das Formas, tornou-se cética com Arcesilau e Carnéades e durou quase três séculos.',
    },
    lyceum: {
      name: 'O Liceu',
      philosophy: 'Aristotelismo (peripatéticos)',
      note: 'A escola de Aristóteles, no ginásio do Liceu; seus membros eram chamados peripatéticos, por causa do pórtico coberto onde caminhavam. Estudaram lógica, natureza, ética e política, e depois editaram e explicaram Aristóteles.',
    },
    cynic: {
      name: 'Cínicos',
      philosophy: 'Cinismo: viver segundo a natureza, rejeitar a convenção',
      note: 'Viver com simplicidade e de acordo com a natureza, desprezando riqueza, posição social e convenções. Diógenes fez disso provocação pública, e o cinismo moldou os estoicos.',
    },
    cyrenaic: {
      name: 'Cirenaicos',
      philosophy: 'Hedonismo: o prazer do corpo é o bem',
      note: 'De Cirene, no norte da África. O prazer do momento presente é o único bem, e só podemos ter certeza das nossas próprias sensações.',
    },
    megarian: {
      name: 'Escola megárica',
      philosophy: 'Lógica e dialética',
      note: 'Euclides de Mégara uniu a ética de Sócrates à ideia eleata do Uno: o Bem é um só, sob muitos nomes. Conhecida pela dialética e por quebra-cabeças lógicos.',
    },
    pyrrhonist: {
      name: 'Pirrônicos',
      philosophy: 'Ceticismo pirrônico',
      note: 'Suspender o juízo: todo argumento pode ser contraposto por outro igualmente forte, e abster-se de crer traz paz de espírito (ataraxia).',
    },
    garden: {
      name: 'O Jardim',
      philosophy: 'Epicurismo',
      note: 'A comunidade de Epicuro, em seu jardim em Atenas. O objetivo da vida é o prazer, entendido como ausência de dor e de medo; não se devem temer nem os deuses nem a morte.',
    },
    stoa: {
      name: 'A Estoa',
      philosophy: 'Estoicismo',
      note: 'Chamada assim por causa do Pórtico Pintado, em Atenas, onde Zenão ensinava. A virtude é o único bem: viver em acordo com uma natureza racional e aceitar com calma o que não depende de nós.',
    },
    platonist: {
      name: 'Platônicos médios',
      philosophy: 'Um rótulo posterior: o platonismo depois do fim da Academia',
      note: 'Rótulo posterior para os platônicos depois do fim da Academia. Liam Platão como mestre de um deus transcendente e recorriam a Aristóteles e aos estoicos.',
    },
    neoplatonist: {
      name: 'Neoplatonismo',
      philosophy: 'A escola de Plotino em Roma',
      note: 'A escola de Plotino em Roma. Toda a realidade flui do Uno, passando pelo Intelecto e pela Alma, e a alma pode voltar-se e subir até ele. Marcou o pensamento cristão e islâmico medieval.',
    },
  },
  people: {
    thales: {
      name: 'Tales',
      note: 'Tudo é água',
      about:
        'Considerado por Aristóteles o primeiro filósofo. Comerciante e engenheiro de Mileto, dizia-se que previu o eclipse solar de 585 a.C. Buscou uma explicação natural do mundo em vez de um mito e propôs que tudo vem da água. Nada do que escreveu sobreviveu.',
    },
    anaximander: {
      name: 'Anaximandro',
      note: 'O ilimitado (ápeiron) é a origem de tudo',
      about:
        'Sucessor de Tales em Mileto. Em vez de uma substância familiar, fez da origem das coisas o ápeiron, ilimitado e indefinido, do qual se separam os opostos, como o quente e o frio. Desenhou um dos primeiros mapas do mundo e imaginou a Terra suspensa, sem apoio, no centro de tudo.',
    },
    pythagoras: {
      name: 'Pitágoras',
      note: 'Número e harmonia sustentam a realidade',
      about:
        'Fundou em Crotona, no sul da Itália, uma comunidade que era em parte escola, em parte ordem religiosa, com bens comuns e regras estritas. Ensinava que a alma é imortal e renasce, e seus seguidores descobriram que as harmonias musicais seguem razões simples entre números. Muito do que lhe é atribuído, inclusive o célebre teorema, pode ser obra de pitagóricos posteriores.',
    },
    xenophanes: {
      name: 'Xenófanes',
      note: 'Um só deus, diferente dos humanos; crítico do mito',
      about:
        'Poeta errante que zombava dos deuses de Homero e Hesíodo por agirem como gente: se os cavalos soubessem desenhar, dizia, desenhariam deuses como cavalos. Propôs um deus único, diferente de nós, que move tudo apenas pelo pensamento, e era cauteloso quanto ao que os humanos podem chegar a saber.',
    },
    anaximenes: {
      name: 'Anaxímenes',
      note: 'Tudo é ar',
      about:
        'O terceiro milésio. Tomou o ar como substância básica e ofereceu um mecanismo para a mudança: o ar se rarefaz em fogo e se adensa em vento, nuvem, água, terra e pedra. Explicar diferenças de natureza como diferenças de densidade foi uma ideia duradoura.',
    },
    heraclitus: {
      name: 'Heráclito',
      note: 'Tudo flui; o Logos ordena a mudança',
      about:
        'De Éfeso, famoso por suas sentenças enigmáticas. Tudo está em fluxo, e não se entra duas vezes no mesmo rio, mas a mudança segue uma medida oculta, o Logos. Os opostos se pertencem: o caminho que sobe e o que desce são um só. Os antigos o chamavam de o Obscuro.',
    },
    parmenides: {
      name: 'Parmênides',
      note: 'O que é, é; a mudança é impossível',
      about:
        'Em seu poema, uma deusa lhe mostra o caminho da verdade: o que é, é, e o que não é nem sequer pode ser pensado. Daí concluiu que o ser verdadeiro é uno, inteiro, eterno e imutável, e que o mundo mutável dos sentidos é mera opinião. Todo filósofo da natureza que veio depois teve de responder a ele.',
    },
    anaxagoras: {
      name: 'Anaxágoras',
      note: 'O Espírito (nous) põe a matéria em ordem',
      about:
        'O primeiro filósofo a se estabelecer em Atenas, onde foi amigo de Péricles. Tudo contém uma porção de tudo, e o Espírito (nous) pôs a mistura a girar e a se separar. Chamou o Sol de pedra incandescente, foi julgado por impiedade e deixou a cidade.',
    },
    empedocles: {
      name: 'Empédocles',
      note: 'Quatro elementos movidos por Amor e Discórdia',
      about:
        'Poeta, médico e taumaturgo da Sicília. Tudo é mistura de quatro raízes, terra, água, ar e fogo, aproximadas pelo Amor e afastadas pela Discórdia num ciclo sem fim. Diz a lenda que se lançou no Etna para provar que era um deus.',
    },
    'zeno-elea': {
      name: 'Zenão de Eleia',
      note: 'Paradoxos contra o movimento (Aquiles e a tartaruga)',
      about:
        'Discípulo de Parmênides, que o defendeu mostrando que o movimento e a pluralidade levam a absurdos. O veloz Aquiles nunca alcança a tartaruga, e a flecha em voo está parada a cada instante. Seus enigmas sobre o infinito só foram plenamente respondidos pela matemática moderna.',
    },
    protagoras: {
      name: 'Protágoras',
      note: 'O homem é a medida de todas as coisas',
      about:
        'O primeiro e mais famoso dos sofistas, que cobrava caro para ensinar jovens a vencer na vida. O homem é a medida de todas as coisas: o que parece verdadeiro a cada um é verdadeiro para ele. Dizia também não poder saber se os deuses existem. Platão deu seu nome a um diálogo.',
    },
    gorgias: {
      name: 'Górgias',
      note: 'Nada existe; se existisse, não poderia ser conhecido',
      about:
        'Embaixador da Sicília e mestre da retórica, deslumbrou Atenas com seus discursos. Num tratado provocador, sustentou que nada existe; que, se algo existisse, não poderia ser conhecido; e que, se fosse conhecido, não poderia ser comunicado a ninguém. Viveu mais de cem anos.',
    },
    leucippus: {
      name: 'Leucipo',
      note: 'O primeiro a propor átomos e vazio',
      about:
        'Pouco se sabe de sua vida; alguns antigos duvidavam até de que tivesse existido. Respondendo aos eleatas, propôs que o mundo é feito de incontáveis corpos indivisíveis que se movem no espaço vazio, de modo que a mudança é apenas o rearranjo dos átomos. Seu discípulo Demócrito desenvolveu a teoria.',
    },
    melissus: {
      name: 'Melisso',
      note: 'O ser é infinito e imutável',
      about:
        'Eleata de Samos que também foi almirante e derrotou a frota ateniense. Reformulou Parmênides em prosa simples, argumentando que o ser é uno, imutável e ilimitado. Aristóteles achou seu raciocínio tosco, mas ele influenciou o modo como os pensadores seguintes leram os eleatas.',
    },
    philolaus: {
      name: 'Filolau',
      note: 'A Terra gira em torno de um fogo central',
      about:
        'Pitagórico e um dos primeiros a pôr por escrito ideias pitagóricas. O cosmos é feito de coisas limitantes e ilimitadas combinadas em harmonia, e a Terra não é seu centro: ela gira em torno de um fogo central, junto com o Sol e os planetas. Copérnico o menciona.',
    },
    socrates: {
      name: 'Sócrates',
      note: 'Questionar tudo; a virtude é conhecimento',
      about:
        'Nada escreveu e é conhecido por meio de seus discípulos, sobretudo Platão. Interrogava os atenienses na ágora e mostrava que quem dizia saber o que são coragem ou justiça na verdade não sabia; sua única sabedoria era saber que nada sabia. A vida sem exame, dizia, não vale a pena ser vivida. Atenas o julgou por impiedade e por corromper os jovens, e ele bebeu cicuta.',
    },
    democritus: {
      name: 'Demócrito',
      note: 'Tudo é átomo movendo-se no vazio',
      about:
        'O filósofo risonho de Abdera, que transformou a ideia de Leucipo num sistema completo. Só átomos e vazio são reais; doce, amargo, quente e frio existem apenas por convenção. Escreveu muito, inclusive sobre ética, em que o objetivo é a serenidade de ânimo. Quase nenhum de seus muitos livros sobreviveu.',
    },
    antisthenes: {
      name: 'Antístenes',
      note: 'Só a virtude basta para a felicidade',
      about:
        'Discípulo de Górgias, depois seguidor devoto de Sócrates, esteve presente em sua morte. Ensinava que a virtude pode ser aprendida e basta para a felicidade, e que prazer e riqueza devem ser desprezados. Ensinava no ginásio de Cinosarges, que talvez tenha dado nome aos cínicos.',
    },
    aristippus: {
      name: 'Aristipo',
      note: 'O prazer do momento é o bem',
      about:
        'Seguidor de Sócrates, natural de Cirene, e o primeiro deles a cobrar por suas lições. Desfrutava o luxo sem ser dominado por ele: eu possuo, dizia, não sou possuído. Sua escola sustentava que o prazer do momento presente é o único bem.',
    },
    'euclid-megara': {
      name: 'Euclides de Mégara',
      note: 'O Bem é um só, sob muitos nomes',
      about:
        'Seguidor próximo de Sócrates, uniu a ética do mestre ao ser uno e imutável de Parmênides: o Bem é uma coisa só, chame-se sabedoria, deus ou mente. Após a morte de Sócrates, Platão refugiou-se com ele em Mégara. Não é o matemático Euclides.',
    },
    archytas: {
      name: 'Arquitas',
      note: 'Matemático e estadista; amigo de Platão',
      about:
        'Matemático pitagórico e principal estadista de Tarento, eleito general várias vezes. Resolveu o antigo problema da duplicação do cubo e fundou a mecânica matemática. Amigo de Platão, enviou um navio para resgatá-lo do tirano de Siracusa.',
    },
    plato: {
      name: 'Platão',
      note: 'As Formas são a verdadeira realidade',
      about:
        'Discípulo de Sócrates, escreveu filosofia em forma de diálogos, com Sócrates como herói. As coisas que vemos são cópias imperfeitas de Formas eternas, que só a razão alcança; a alma é imortal; e a cidade justa é governada por filósofos. Fundou a Academia, e um filósofo moderno disse que toda a tradição ocidental é uma série de notas de rodapé a Platão.',
    },
    diogenes: {
      name: 'Diógenes de Sinope',
      note: 'Vivia num tonel e zombava de toda convenção',
      about:
        'Exilado de Sinope, viveu em Atenas num grande pithos, sem quase nada possuir. Vivia como um cão, sem vergonha e segundo a natureza, e zombava das convenções com provocações públicas, como procurar um homem honesto com uma lamparina em pleno dia. Quando Alexandre, o Grande, lhe ofereceu o que quisesse, pediu que saísse da frente do seu sol.',
    },
    speusippus: {
      name: 'Espeusipo',
      note: 'Sobrinho de Platão; dirigiu a Academia depois dele',
      about:
        'Sobrinho de Platão, dirigiu a Academia depois dele. Deixou de lado as Formas de Platão e fez dos objetos matemáticos as primeiras realidades; também catalogou plantas e animais segundo suas semelhanças.',
    },
    xenocrates: {
      name: 'Xenócrates',
      note: 'Sistematizou o ensino de Platão',
      about:
        'Terceiro dirigente da Academia, conhecido por sua seriedade. Organizou o ensino de Platão num sistema e dividiu a filosofia em física, ética e lógica, esquema que os estoicos mais tarde adotaram.',
    },
    aristotle: {
      name: 'Aristóteles',
      note: 'Lógica, as quatro causas, a virtude como meio-termo',
      about:
        'Discípulo de Platão por vinte anos, depois tutor do jovem Alexandre, o Grande, e por fim fundador do Liceu. Inventou a lógica formal e escreveu sobre quase tudo: física, biologia, alma, ética, política e poesia. Contra Platão, as formas das coisas existem nas próprias coisas. Para os medievais, era simplesmente o Filósofo.',
    },
    anaxarchus: {
      name: 'Anaxarco',
      note: 'Viajou com Alexandre até a Índia',
      about:
        'Atomista que acompanhou Alexandre, o Grande, à Índia, onde ele e seu discípulo Pirro conheceram sábios indianos. Era conhecido por sua indiferença à dor e por adular Alexandre, e recebeu o apelido de o Feliz.',
    },
    theophrastus: {
      name: 'Teofrasto',
      note: 'Dirigiu o Liceu; fundador da botânica',
      about:
        'Colega e sucessor de Aristóteles no Liceu, que floresceu sob sua direção, com cerca de dois mil alunos. Escreveu as primeiras obras sistemáticas sobre plantas e um livro espirituoso, Caracteres, com breves retratos de tipos humanos.',
    },
    crates: {
      name: 'Crates de Tebas',
      note: 'Doou sua fortuna para viver como cínico',
      about:
        'Rico tebano que doou sua fortuna para viver como cínico, de modo mais brando que Diógenes: era recebido nas casas como pacificador de desavenças. Casou-se com a filósofa Hiparquia, que partilhou sua vida nas ruas. Zenão de Cítio, fundador do estoicismo, foi seu discípulo.',
    },
    pyrrho: {
      name: 'Pirro',
      note: 'Nada se pode conhecer; suspender o juízo e encontrar a calma',
      about:
        'Viajou à Índia com Alexandre e Anaxarco. Como não podemos conhecer as coisas como realmente são, devemos suspender o juízo, e a paz de espírito vem em seguida. Contam que seus amigos tinham de impedi-lo de caminhar à beira de precipícios. Nada escreveu; seu discípulo Timão registrou suas ideias.',
    },
    stilpo: {
      name: 'Estilpão',
      note: 'Debatedor famoso; autossuficiência',
      about:
        'Chefe da escola megárica e debatedor célebre, que atraiu alunos de todas as outras escolas. Ensinava que o sábio não precisa de nada fora de si: quando sua cidade foi saqueada e lhe perguntaram o que perdera, respondeu que ainda tinha o seu saber.',
    },
    polemon: {
      name: 'Pólemon',
      note: 'Dirigiu a Academia; ética de viver segundo a natureza',
      about:
        'Jovem dissoluto que, diz a história, irrompeu bêbado numa aula de Xenócrates e se converteu ali mesmo. À frente da Academia, ensinou uma ética prática de viver segundo a natureza, e Zenão de Cítio estudou com ele.',
    },
    epicurus: {
      name: 'Epicuro',
      note: 'O bem é o prazer tranquilo, livre de medo',
      about:
        'Fundou em seu jardim, em Atenas, uma comunidade que acolhia mulheres e escravos. O objetivo da vida é o prazer, entendido como ausência de dor no corpo e de angústia na mente; os prazeres simples e a amizade são os melhores. Como somos apenas átomos, a morte nada é para nós: quando ela chega, nós não estamos.',
    },
    strato: {
      name: 'Estráton de Lâmpsaco',
      note: 'Explicou a natureza sem os deuses',
      about:
        'Terceiro dirigente do Liceu, conhecido como o Físico. Explicava o mundo por forças naturais, como o calor e o frio, sem precisar de deuses nem de finalidades, e diz-se que estudou o vazio por meio de experimentos.',
    },
    'zeno-citium': {
      name: 'Zenão de Cítio',
      note: 'A virtude é o único bem; viver segundo a razão',
      about:
        'Comerciante de Chipre, náufrago em Atenas, que estudou com o cínico Crates e outros antes de ensinar no Pórtico Pintado, a Estoa. A virtude é o único bem; todo o resto, até saúde e riqueza, é indiferente. O mundo é ordenado por uma razão divina, e devemos viver em acordo com ela.',
    },
    cleanthes: {
      name: 'Cleantes',
      note: 'Hino a Zeus; dirigiu a Estoa depois de Zenão',
      about:
        'Ex-boxeador que carregava água à noite para pagar as aulas e sucedeu Zenão à frente da Estoa. Lento, porém constante, recebeu o apelido de o Burro. Seu Hino a Zeus, que louva a razão que governa todas as coisas, é um dos poucos textos estoicos antigos que chegaram completos.',
    },
    timon: {
      name: 'Timão de Fliunte',
      note: 'Satirista e porta-voz de Pirro',
      about:
        'Discípulo e divulgador de Pirro. Em poemas satíricos, os Silos, zombou dos filósofos convictos de todas as escolas e elogiou a calma de Pirro.',
    },
    arcesilaus: {
      name: 'Arcesilau',
      note: 'Tornou a Academia cética',
      about:
        'À frente da Academia, tornou-a cética, retomando o hábito de Sócrates de argumentar contra qualquer opinião. Nada pode ser conhecido com certeza, portanto o sábio suspende o juízo. Nada escreveu, e era admirado por seu espírito e sua generosidade.',
    },
    chrysippus: {
      name: 'Crisipo',
      note: 'Sistematizou a lógica e a física estoicas',
      about:
        'Terceiro dirigente da Estoa e seu grande sistematizador; diziam os antigos que, sem Crisipo, não haveria Estoa. Construiu a lógica proposicional dos estoicos e defendeu o destino e a providência. Teria escrito mais de setecentos livros, nenhum dos quais sobreviveu.',
    },
    carneades: {
      name: 'Carnéades',
      note: 'Nenhuma certeza, apenas graus de probabilidade',
      about:
        'Dirigente da Academia em sua fase cética. Numa embaixada a Roma, defendeu a justiça num dia e a atacou no seguinte, escandalizando Catão. Nenhuma certeza é possível, ensinava, mas podemos agir com base no provável.',
    },
    panaetius: {
      name: 'Panécio',
      note: 'Adaptou o estoicismo para os romanos',
      about:
        'Estoico de Rodes que viveu em Roma no círculo de Cipião e depois dirigiu a Estoa. Moldou o estoicismo como uma ética prática do dever e da vida pública; Dos deveres, de Cícero, baseia-se em sua obra.',
    },
    'philo-larissa': {
      name: 'Fílon de Larissa',
      note: 'Último dirigente da Academia',
      about:
        'O último dirigente incontestado da Academia de Platão. Fugindo de Atenas durante a guerra contra Mitridates, ensinou em Roma, onde o jovem Cícero o ouviu. Suavizou o ceticismo da Academia e defendeu que ela sempre fora uma só escola.',
    },
    posidonius: {
      name: 'Posidônio',
      note: 'Polímata estoico; professor de Cícero',
      about:
        'Polímata estoico de Rodes que estimou o tamanho da Terra, estudou as marés e viajou até a costa do Atlântico. Cícero estudou com ele e Pompeu visitou sua escola. Trouxe Platão e Aristóteles de volta ao estoicismo.',
    },
    antiochus: {
      name: 'Antíoco de Ascalon',
      note: 'Afastou a Academia do ceticismo',
      about:
        'Discípulo de Fílon que rompeu com ele, alegando que a Academia havia abandonado Platão. Ensinava que Platão, Aristóteles e os estoicos concordavam no essencial, e voltou a um platonismo confiante. Cícero assistiu às suas aulas em Atenas.',
    },
    philodemus: {
      name: 'Filodemo',
      note: 'Epicurista cuja biblioteca sobreviveu em Herculano',
      about:
        'Epicurista de Gadara que ensinou numa vila em Herculano, perto de Nápoles. A erupção do Vesúvio em 79 d.C. soterrou sua biblioteca; os rolos carbonizados, muitos deles obras suas sobre música, poesia e emoções, ainda hoje estão sendo lidos com técnicas modernas de imagem.',
    },
    cicero: {
      name: 'Cícero',
      note: 'Trouxe a filosofia grega para o latim',
      about:
        'Maior orador de Roma e estadista de primeira linha, estudou filosofia em Atenas e Rodes. Nos últimos anos escreveu diálogos que apresentavam a filosofia grega aos romanos, criando grande parte de seu vocabulário latino. Inclinava-se ao ceticismo moderado da Academia e foi morto por ordem de Marco Antônio.',
    },
    andronicus: {
      name: 'Andrônico de Rodes',
      note: 'Editou as obras de Aristóteles na forma que conhecemos',
      about:
        'Peripatético de Rodes que editou e organizou as obras de Aristóteles, havia muito negligenciadas, na coletânea que ainda usamos. O agrupamento dos escritos de Aristóteles, e provavelmente até a palavra metafísica, remontam à sua edição.',
    },
    aenesidemus: {
      name: 'Enesidemo',
      note: 'Reviveu o pirronismo após dois séculos',
      about:
        'Rompeu com a Academia, que achava dogmática demais, e reviveu o ceticismo de Pirro. Reuniu dez modos, argumentos clássicos que mostram que as aparências variam conforme o observador e as circunstâncias, de modo que o juízo deve ser suspenso.',
    },
    lucretius: {
      name: 'Lucrécio',
      note: 'O epicurismo em versos latinos',
      about:
        'Poeta romano cujo longo poema Da natureza das coisas expõe a filosofia de Epicuro em versos latinos: átomos e vazio, a mortalidade da alma e a libertação do medo dos deuses. Redescoberto em 1417, alimentou a ciência da Renascença.',
    },
    seneca: {
      name: 'Sêneca',
      note: 'Cartas sobre viver bem; conselheiro de Nero',
      about:
        'Estoico romano, dramaturgo e político riquíssimo, foi tutor e depois conselheiro do imperador Nero. Suas Cartas a Lucílio dão conselhos práticos sobre ira, luto, tempo e morte. Acusado de conspiração, recebeu de Nero a ordem de tirar a própria vida.',
    },
    musonius: {
      name: 'Musônio Rufo',
      note: 'O estoicismo como prática diária',
      about:
        'O Sócrates romano, mestre estoico que ensinava a filosofia como modo de vida: comida simples, trabalho duro e a mesma educação para mulheres e homens. Foi exilado mais de uma vez por imperadores. Epicteto foi seu discípulo.',
    },
    plutarch: {
      name: 'Plutarco',
      note: 'Biógrafo e sacerdote em Delfos',
      about:
        'Grego de Queroneia, sacerdote do oráculo de Delfos e platônico. Suas Vidas paralelas, biografias emparelhadas de gregos e romanos, moldaram a imagem que a Europa fez da Antiguidade, e seus ensaios, os Moralia, tratam de ética, religião e da alma.',
    },
    epictetus: {
      name: 'Epicteto',
      note: 'Preocupar-se apenas com o que depende de você',
      about:
        'Nascido escravo, estudou com Musônio Rufo e depois foi libertado. Algumas coisas dependem de nós, nossos juízos e escolhas, e as demais não; a liberdade vem de se importar apenas com as primeiras. Seu discípulo Arriano registrou seu ensino nos Discursos e no Manual.',
    },
    marcus: {
      name: 'Marco Aurélio',
      note: 'Imperador; escreveu as Meditações',
      about:
        'Imperador romano e estoico, passou boa parte do reinado em guerra na fronteira do Danúbio. Suas Meditações, anotações privadas dirigidas a si mesmo, pregam calma, dever e aceitação do que acontece, e lembram que tudo passa.',
    },
    alexander: {
      name: 'Alexandre de Afrodísias',
      note: 'Maior comentador antigo de Aristóteles',
      about:
        'Titular da cátedra oficial de filosofia aristotélica em Atenas e o maior comentador antigo de Aristóteles. Defendeu o livre-arbítrio contra o destino dos estoicos e leu Aristóteles de modo que a alma não sobrevive ao corpo.',
    },
    sextus: {
      name: 'Sexto Empírico',
      note: 'Esboços pirrônicos, nossa principal fonte cética',
      about:
        'Médico e cético cujos livros são nossa principal fonte sobre o ceticismo antigo. Seus Esboços pirrônicos expõem o caminho cético: opor a cada argumento outro igualmente forte, suspender o juízo, e a calma se segue. Redescoberto no século XVI, influenciou Montaigne e Descartes.',
    },
    ammonius: {
      name: 'Amônio Sacas',
      note: 'Professor de Plotino; nada escreveu',
      about:
        'Misterioso mestre platônico em Alexandria, chamado Sacas, talvez o carregador de sacos, por causa de seu antigo ofício. Nada escreveu, mas Plotino estudou com ele por onze anos, e seus discípulos combinaram manter seu ensino em segredo.',
    },
    plotinus: {
      name: 'Plotino',
      note: 'Toda a realidade flui do Uno',
      about:
        'Estudou com Amônio em Alexandria e depois ensinou em Roma. Toda a realidade flui do Uno, além do ser e do pensamento, passando pelo Intelecto e pela Alma até a matéria; a alma pode voltar-se para dentro e subir de volta à unidade com ele. Seu discípulo Porfírio editou seus escritos como as Enéadas.',
    },
  },
} satisfies Translation;

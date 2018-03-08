// tableau de mot
var mot = ["ABALONE", "ABALONES",
	"ABDUCTION",
	"ABDUCTIONS",
	"ABERRANT",
	"ABERRANTS",
	"ABRACADABRA",
	"ABRACADABRAS",
	"ABRAXAS",
	"ACROBATES",
	"ACROSTICHE",
	"ACROSTICHES",
	"ACTIONNAIRE",
	"ACTIONNAIRES",
	"ADDICT",
	"ADDICTS",
	"ADJUGE",
	"ADJUGES",
	"AFICIONADO",
	"AFICIONADOS",
	"AGENT",
	"AGENTS",
	"AGGRAVATION",
	"AGGRAVATIONS",
	"AGORA",
	"AGORAS",
	"AIDEAU",
	"AIDEAUX",
	"ALARME",
	"ALARMES",
	"ALBEDO",
	"ALBEDOS",
	"ALCAZAR",
	"ALCAZARS",
	"ALEA",
	"ALEAS",
	"ALIAS",
	"ALIBI",
	"ALIBIS",
	"ALIENS",
	"ALLIANCE",
	"ALLIANCES",
	"ALPAGES",
	"ALUETTE",
	"ALUETTES",
	"AMAZONE",
	"AMAZONES",
	"AMBIGU",
	"AMBIGUS",
	"AMBITION",
	"AMBITIONS",
	"AMBRE",
	"AMBRES",
	"AMERICAIN",
	"AMERICAINS",
	"AMIRAUTE",
	"AMIRAUTES",
	"ANACROISES",
	"ANAGRAMME",
	"ANAGRAMMES",
	"ANCIENNE",
	"ANCIENNES",
	"ANE",
	"ANES",
	"ANGUILLE",
	"ANGUILLES",
	"ANIMA",
	"ANIMAS",
	"ANNEAU",
	"ANNEAUX",
	"ANNEE",
	"ANNEES",
	"ANNEXION",
	"ANNEXIONS",
	"ANTIQUE",
	"ANTIQUES",
	"APACHE",
	"APACHES",
	"APOCALYPSE",
	"APOCALYPSES",
	"AQUARIUM",
	"AQUARIUMS",
	"ARA",
	"ARAIGNEE",
	"ARAIGNEES",
	"ARAS",
	"ARBALETE",
	"ARBALETES",
	"ARBORA",
	"ARBORAS",
	"ARCHIPEL",
	"ARCHIPELS",
	"ARENA",
	"ARENAS",
	"ARENE",
	"ARENES",
	"ARISTO",
	"ARISTOS",
	"ARLEQUIN",
	"ARLEQUINS",
	"ARMADA",
	"ARMADAS",
	"ASCENSEUR",
	"ASCENSEURS",
	"ASCENSION",
	"ASCENSIONS",
	"ASSASSIN",
	"ASSASSINS",
	"ASSAUT",
	"ASSAUTS",
	"ASSIETTE",
	"ASSIETTES",
	"ATRIUM",
	"ATRIUMS",
	"ATTAQUE",
	"ATTAQUES",
	"ATTRACTION",
	"ATTRACTIONS",
	"ATTRAPE",
	"ATTRAPES",
	"ATTRIBUT",
	"ATTRIBUTS",
	"AUTOROUTE",
	"AUTOROUTES",
	"AUTOSTOP",
	"AUTOSTOPS",
	"AVALANCHE",
	"AVALANCHES",
	"AVENTURIERS",
	"AWALE",
	"AWALES",
	"AWELE",
	"AWELES",
	"BACCALAUREAT",
	"BACCALAUREATS",
	"BACCARA",
	"BACCARAS",
	"BACCHANALES",
	"BACKGAMMON",
	"BACKGAMMONS",
	"BADABOUM",
	"BAGATELLE",
	"BAGATELLES",
	"BAGOU",
	"BAGOUS",
	"BAGUENAUDIER",
	"BAGUENAUDIERS",
	"BAGUES",
	"BALAI",
	"BALAIS",
	"BALAN",
	"BALANCE",
	"BALANCES",
	"BALLAST",
	"BALLASTS",
	"BALLE",
	"BALLES",
	"BALLON",
	"BALLONS",
	"BALTHAZAR",
	"BALTHAZARS",
	"BAMBOUS",
	"BANCO",
	"BANCOS",
	"BANDA",
	"BANDAS",
	"BANQUISE",
	"BANQUISES",
	"BANTU",
	"BANTUS",
	"BANZAI",
	"BAQUET",
	"BAQUETS",
	"BARAQUE",
	"BARAQUES",
	"BARATIN",
	"BARATINS",
	"BARBOTTE",
	"BARBOTTES",
	"BARBU",
	"BARBUS",
	"BARON",
	"BARONS",
	"BARRACUDA",
	"BARRACUDAS",
	"BARRES",
	"BARRICADE",
	"BARRICADES",
	"BASCULE",
	"BASCULES",
	"BASIC",
	"BASICS",
	"BASKET",
	"BASKETS",
	"BASSETTE",
	"BASSETTES",
	"BASTIDE",
	"BASTIDES",
	"BASTON",
	"BASTONS",
	"BATACLAN",
	"BATACLANS",
	"BATAILLE",
	"BATAILLES",
	"BATAVIA",
	"BATAVIAS",
	"BATIK",
	"BATIKS",
	"BATONNETS",
	"BELLIGERANTS",
	"BELOTE",
	"BELOTES",
	"BENGALI",
	"BENGALIS",
	"BERET",
	"BERETS",
	"BERGER",
	"BERGERS",
	"BESIGUE",
	"BESIGUES",
	"BETE",
	"BETES",
	"BETISIER",
	"BETISIERS",
	"BIDET",
	"BIDETS",
	"BILBOQUET",
	"BILBOQUETS",
	"BILLARD",
	"BILLARDS",
	"BILLE",
	"BILLES",
	"BILLON",
	"BILLONS",
	"BINGO",
	"BINGOS",
	"BINOCLE",
	"BINOCLES",
	"BIRIBI",
	"BIRIBIS",
	"BISON",
	"BISONS",
	"BITUME",
	"BITUMES",
	"BLUFF",
	"BLUFFER",
	"BLUFFS",
	"BOG",
	"BOGS",
	"BOLIDES",
	"BOMBE",
	"BOMBES",
	"BONGO",
	"BONGOS",
	"BONNETEAU",
	"BONNETEAUX",
	"BOOMERANG",
	"BOOMERANGS",
	"BOSSE",
	"BOSSES",
	"BOSTON",
	"BOSTONS",
	"BOUC",
	"BOUCLES",
	"BOUCS",
	"BOUILLOTTE",
	"BOUILLOTTES",
	"BOULE",
	"BOULES",
	"BOULIER",
	"BOULIERS",
	"BOUM",
	"BOUMS",
	"BOURRE",
	"BOURRES",
	"BOURRICOT",
	"BOURRICOTS",
	"BOURSE",
	"BOURSES",
	"BOUTEILLE",
	"BOUTEILLES",
	"BRELAN",
	"BRELANS",
	"BRIDGE",
	"BRIDGES",
	"BRILLANCE",
	"BRILLANCES",
	"BRISQUE",
	"BRISQUES",
	"BROCANTE",
	"BROCANTES",
	"BROUHAHA",
	"BROUHAHAS",
	"BUCHER",
	"BUCHERS",
	"BUNKER",
	"BUNKERS",
	"BURGER",
	"BURGERS",
	"BUSHIDO",
	"BUSHIDOS",
	"BUSINESS",
	"BUT",
	"BUTEUR",
	"BUTEURS",
	"BUTS",
	"BUTTE",
	"BUTTES",
	"CABALE",
	"CABALES",
	"CABRIOLET",
	"CABRIOLETS",
	"CACHETTE",
	"CACHETTES",
	"CAILLOU",
	"CAILLOUX",
	"CALCULA",
	"CALCULAS",
	"CALYPSO",
	"CALYPSOS",
	"CAMELEON",
	"CAMELEONS",
	"CAMELOT",
	"CAMELOTS",
	"CAMOUFLAGE",
	"CAMOUFLAGES",
	"CAMPAGNOL",
	"CAMPAGNOLS",
	"CAMPANILE",
	"CAMPANILES",
	"CAMPUS",
	"CANASTA",
	"CANASTAS",
	"CANCRES",
	"CANISSE",
	"CANISSES",
	"CANNES",
	"CANONNIERS",
	"CANYON",
	"CANYONS",
	"CAPHARNAUM",
	"CAPHARNAUMS",
	"CAPRICE",
	"CAPRICES",
	"CAPTURES",
	"CARABISTOUILLE",
	"CARABISTOUILLES",
	"CARACOLE",
	"CARACOLES",
	"CARACTERE",
	"CARACTERES",
	"CARAIBES",
	"CARAMBA",
	"CARAMBOUILLE",
	"CARAMBOUILLES",
	"CARAVANE",
	"CARAVANES",
	"CARGO",
	"CARGOS",
	"CARIOCA",
	"CARIOCAS",
	"CARRE",
	"CARRES",
	"CARRIER",
	"CARRIERES",
	"CARRIERS",
	"CARROM",
	"CARROMS",
	"CARROUSEL",
	"CARROUSELS",
	"CARTES",
	"CASAQUE",
	"CASAQUES",
	"CASBAH",
	"CASBAHS",
	"CASH",
	"CASHS",
	"CASINO",
	"CASINOS",
	"CASQUETTE",
	"CASQUETTES",
	"CASTEL",
	"CASTELS",
	"CATAPULTE",
	"CATAPULTES",
	"CATHEDRAL",
	"CELLULES",
	"CENDRES",
	"CERCEAU",
	"CERCEAUX",
	"CHALLENGE",
	"CHALLENGES",
	"CHAMPIONS",
	"CHANDELIER",
	"CHANDELIERS",
	"CHANDELLE",
	"CHANDELLES",
	"CHANTIER",
	"CHANTIERS",
	"CHAPEAU",
	"CHAPEAUX",
	"CHARADE",
	"CHARADES",
	"CHARIOT",
	"CHARIOTS",
	"CHARRET",
	"CHARRETS",
	"CHAT",
	"CHATEAU",
	"CHATEAUX",
	"CHATS",
	"CHENILLE",
	"CHENILLES",
	"CHEPTEL",
	"CHEPTELS",
	"CHEVRE",
	"CHEVRES",
	"CHIBRE",
	"CHIBRES",
	"CHICOREE",
	"CHICOREES",
	"CHIEN",
	"CHIENS",
	"CHIMERES",
	"CHINA",
	"CHINAS",
	"CHIQUE",
	"CHIQUES",
	"CHOUINE",
	"CHOUINES",
	"CIBLE",
	"CIBLES",
	"CINEMA",
	"CINEMAS",
	"CIRCUIT",
	"CIRCUITS",
	"CITADELLE",
	"CITADELLES",
	"CITE",
	"CITES",
	"CITOYENNETE",
	"CITOYENNETES",
	"CIVILISATION",
	"CIVILISATIONS",
	"CLAIM",
	"CLAIMS",
	"CLANS",
	"CLE",
	"CLES",
	"CLIPPERS",
	"CLOU",
	"CLOUS",
	"CLOWN",
	"CLOWNS",
	"COCHONNET",
	"COCHONNETS",
	"COCHONS",
	"COCORICO",
	"COCORICOS",
	"CODE",
	"CODES",
	"COINCHE",
	"COINCHES",
	"COMBINARD",
	"COMBINARDS",
	"COMBO",
	"COMBOS",
	"COMMERE",
	"COMMERES",
	"CON",
	"CONCORDANCES",
	"CONDOTTIERE",
	"CONDOTTIERES",
	"CONFERENCE",
	"CONFERENCES",
	"CONFRONTATION",
	"CONFRONTATIONS",
	"CONFUSION",
	"CONFUSIONS",
	"CONNEXION",
	"CONNEXIONS",
	"CONQUETE",
	"CONQUETES",
	"CONQUISTADOR",
	"CONQUISTADORS",
	"CONS",
	"CONSPIRATEURS",
	"CONSPIRATIONS",
	"CONSTELLATION",
	"CONSTELLATIONS",
	"CONTACT",
	"CONTACTS",
	"CONTINUO",
	"CONTINUOS",
	"CONTRA",
	"CONTRARIO",
	"CONTRAS",
	"CONTREE",
	"CONTREES",
	"CONTROVERSE",
	"CONTROVERSES",
	"COPS",
	"COQUELICOT",
	"COQUELICOTS",
	"CORBEILLE",
	"CORBEILLES",
	"CORDA",
	"CORDAS",
	"CORDE",
	"CORDES",
	"CORNER",
	"CORNERS",
	"CORPORATION",
	"CORPORATIONS",
	"CORRIDA",
	"CORRIDAS",
	"CORRUPTION",
	"CORRUPTIONS",
	"CORSAIRE",
	"CORSAIRES",
	"COSMOS",
	"COUCOU",
	"COUCOUS",
	"COUILLON",
	"COUILLONS",
	"COUP",
	"COUPEZ",
	"COUPLES",
	"COUPS",
	"COURATE",
	"COURATES",
	"COURONNE",
	"COURONNES",
	"COURTISANS",
	"COUYON",
	"COUYONS",
	"COYOTE",
	"COYOTES",
	"CRACK",
	"CRACKS",
	"CRAPAUD",
	"CRAPAUDS",
	"CRAPETTE",
	"CRAPETTES",
	"CRAPS",
	"CREDO",
	"CREDOS",
	"CRESCENDO",
	"CRESCENDOS",
	"CRESUS",
	"CRIB",
	"CRIBS",
	"CRICKET",
	"CRICKETS",
	"CRIMES",
	"CRIQUET",
	"CRIQUETS",
	"CROISADES",
	"CROIX",
	"CROQUET",
	"CROQUETS",
	"CROSS",
	"CROSSE",
	"CROSSES",
	"CRYPTOGAME",
	"CRYPTOGAMES",
	"CUBA",
	"CUBAS",
	"CUBE",
	"CUBES",
	"DADA",
	"DADAS",
	"DAIMYO",
	"DAIMYOS",
	"DALLES",
	"DAMES",
	"DANGER",
	"DANGERS",
	"DAO",
	"DAOS",
	"DARJEELING",
	"DARJEELINGS",
	"DE",
	"DECOUVREUR",
	"DECOUVREURS",
	"DEDALES",
	"DEFI",
	"DEFIS",
	"DEGOMME",
	"DEGOMMES",
	"DELTA",
	"DELTAS",
	"DERBY",
	"DERBYS",
	"DERIVE",
	"DERIVES",
	"DES",
	"DESTINS",
	"DEVINETTE",
	"DEVINETTES",
	"DIABOLO",
	"DIABOLOS",
	"DIADOQUES",
	"DIAM",
	"DIAMANT",
	"DIAMANTS",
	"DIAMS",
	"DICO",
	"DICOS",
	"DICTIONNAIRE",
	"DICTIONNAIRES",
	"DIGIT",
	"DIGITS",
	"DINETTE",
	"DINETTES",
	"DINGBATS",
	"DINGO",
	"DINGOS",
	"DIPLOMATIE",
	"DIPLOMATIES",
	"DISPOSITION",
	"DISPOSITIONS",
	"DISPUTE",
	"DISPUTES",
	"DIVERTIMENTO",
	"DIVERTIMENTOS",
	"DIXIT",
	"DOCKERS",
	"DOGE",
	"DOGES",
	"DOMINO",
	"DOMINOS",
	"DON",
	"DONS",
	"DOTS",
	"DOUBLE",
	"DOUBLES",
	"DOUBLETTE",
	"DOUBLETTES",
	"DRAGON",
	"DRAGONS",
	"DRAGSTER",
	"DRAGSTERS",
	"DRAKKAR",
	"DRAKKARS",
	"DRAPEAU",
	"DRAPEAUX",
	"DROGUE",
	"DROGUES",
	"DRUMLIN",
	"DRUMLINS",
	"DUEL",
	"DUELS",
	"DUNE",
	"DUNES",
	"DUO",
	"DUOS",
	"DYADE",
	"DYADES",
	"EAU",
	"EAUX",
	"ECARTE",
	"ECARTES",
	"ECHANGE",
	"ECHANGES",
	"ECHAPPEE",
	"ECHAPPEES",
	"ECHASSES",
	"ECHECS",
	"ECHELLE",
	"ECHELLES",
	"ECOLOGIE",
	"ECOLOGIES",
	"ECONOMIE",
	"ECONOMIES",
	"ECU",
	"ECUS",
	"ECUSSON",
	"ECUSSONS",
	"EDEN",
	"EDENS",
	"EGALITE",
	"EGALITES",
	"EGO",
	"EGYPTIEN",
	"EGYPTIENS",
	"EJECTION",
	"EJECTIONS",
	"ELASTIQUE",
	"ELASTIQUES",
	"ELECTRO",
	"ELECTROS",
	"ELEMENTS",
	"ELITES",
	"ELIXIR",
	"ELIXIRS",
	"EMBUSCADES",
	"EMIGRETTE",
	"EMIGRETTES",
	"EMPIRE",
	"EMPIRES",
	"ENCANTEUR",
	"ENCANTEURS",
	"ENCLOS",
	"ENERGIE",
	"ENERGIES",
	"ENFLE",
	"ENFLES",
	"ENGRENAGE",
	"ENGRENAGES",
	"ENIGME",
	"ENIGMES",
	"ENTRAVE",
	"ENTRAVES",
	"EPERVIER",
	"EPERVIERS",
	"EQUILIBRE",
	"EQUILIBRES",
	"EQUIPE",
	"EQUIPES",
	"ERREURS",
	"ESCALIER",
	"ESCALIERS",
	"ESPERANCE",
	"ESPERANCES",
	"ESPIONNAGE",
	"ESPIONNAGES",
	"ETOILE",
	"ETOILES",
	"EUREKA",
	"EXCELLENCE",
	"EXCELLENCES",
	"EXIT",
	"EXPEDITION",
	"EXPEDITIONS",
	"EXPERTS",
	"EXPORTATION",
	"EXPORTATIONS",
	"EXPOS",
	"EXPRES",
	"EXPRESS",
	"EXPRESSION",
	"EXPRESSIONS",
	"EXPRESSO",
	"EXPRESSOS",
	"FACTEUR",
	"FACTEURS",
	"FAKIR",
	"FAKIRS",
	"FANTOMES",
	"FARANDOLE",
	"FARANDOLES",
	"FARO",
	"FAROS",
	"FASCINATION",
	"FASCINATIONS",
	"FEERIE",
	"FEERIES",
	"FEODALITE",
	"FEODALITES",
	"FER",
	"FERME",
	"FERMES",
	"FERS",
	"FESTIVAL",
	"FESTIVALS",
	"FICELLE",
	"FICELLES",
	"FIEF",
	"FIEFS",
	"FIGARO",
	"FIGAROS",
	"FILOU",
	"FILOUS",
	"FINALE",
	"FINALES",
	"FINANCE",
	"FINANCES",
	"FINESSE",
	"FINESSES",
	"FINISH",
	"FINISHS",
	"FITS",
	"FLAMBEUR",
	"FLAMBEURS",
	"FLASH",
	"FLASHS",
	"FLECHETTES",
	"FLIBUSTIERS",
	"FLIP",
	"FLIPPER",
	"FLIPPERS",
	"FLIPS",
	"FLORENTIN",
	"FLORENTINS",
	"FLUX",
	"FOCAL",
	"FOCUS",
	"FONCTIONNAIRE",
	"FONCTIONNAIRES",
	"FOOT",
	"FOOTS",
	"FORCE",
	"FORCES",
	"FORESTIERE",
	"FORESTIERES",
	"FORMA",
	"FORMAS",
	"FORMICA",
	"FORMICAS",
	"FORTERESSE",
	"FORTERESSES",
	"FORTISSIMO",
	"FRAGILE",
	"FRAGILES",
	"FRAGRANCES",
	"FRANCAISE",
	"FRANCAISES",
	"FRANCOPHILE",
	"FRANCOPHILES",
	"FRISBEE",
	"FRISBEES",
	"FRONTIERES",
	"FRUITS",
	"FUDGE",
	"FUDGES",
	"FUGITIFS",
	"FURET",
	"FURETS",
	"GALETS",
	"GALOCHE",
	"GALOCHES",
	"GAMATE",
	"GAMATES",
	"GAMELLE",
	"GAMELLES",
	"GANGSTER",
	"GANGSTERS",
	"GARCON",
	"GARCONS",
	"GAUDI",
	"GAUDIS",
	"GENIAL",
	"GEO",
	"GEOS",
	"GERBE",
	"GERBES",
	"GIN",
	"GINS",
	"GLISSADE",
	"GLISSADES",
	"GO",
	"GONDOLIER",
	"GONDOLIERS",
	"GORE",
	"GORES",
	"GOS",
	"GOSSE",
	"GOSSES",
	"GOUREN",
	"GOURENS",
	"GOUTER",
	"GOUTERS",
	"GRAAL",
	"GRAALS",
	"GRACES",
	"GRACIAS",
	"GRANITO",
	"GRANITOS",
	"GRENOUILLE",
	"GRENOUILLES",
	"GREYHOUNDS",
	"GRIMACES",
	"GUILDES",
	"GUILLOTINE",
	"GUILLOTINES",
	"GUIMBARDE",
	"GUIMBARDES",
	"GUISE",
	"GYMKHANA",
	"GYMKHANAS",
	"HABILLAGE",
	"HABILLAGES",
	"HALLOWEEN",
	"HALLOWEENS",
	"HAMBURGER",
	"HAMBURGERS",
	"HAMSTERS",
	"HANDICAP",
	"HANDICAPS",
	"HANTISE",
	"HANTISES",
	"HASARD",
	"HASARDS",
	"HELICE",
	"HELICES",
	"HERE",
	"HERES",
	"HERISSONS",
	"HERMINE",
	"HERMINES",
	"HEXAGONE",
	"HEXAGONES",
	"HIGHLANDERS",
	"HOCA",
	"HOCAS",
	"HOLDING",
	"HOLDINGS",
	"HOMBRE",
	"HOMBRES",
	"HONCHETS",
	"HONGROIS",
	"HOROSCOPE",
	"HOROSCOPES",
	"HOTEL",
	"HOTELS",
	"HUIT",
	"HURLEMENTS",
	"HUSSARDS",
	"HYENE",
	"HYENES",
	"ICEBERG",
	"ICEBERGS",
	"ILES",
	"IMAGES",
	"IMAGINE",
	"IMAGINES",
	"IMMOBILIER",
	"IMMOBILIERS",
	"IMMORTEL",
	"IMMORTELS",
	"IMPERIAL",
	"IMPERIALE",
	"IMPERIALES",
	"IMPERIUM",
	"IMPERIUMS",
	"IMPRESARIO",
	"IMPRESARIOS",
	"INAVOUABLE",
	"INAVOUABLES",
	"INCOGNITO",
	"INCOGNITOS",
	"INCOLLABLES",
	"INCROYABLE",
	"INCROYABLES",
	"INDUS",
	"INFLUENCES",
	"INITIALES",
	"INPUT",
	"INPUTS",
	"INSTINCT",
	"INSTINCTS",
	"INTEMPERIES",
	"INTERACTION",
	"INTERACTIONS",
	"INTRIGUE",
	"INTRIGUES",
	"INTRUS",
	"INTUITION",
	"INTUITIONS",
	"INVASION",
	"INVASIONS",
	"ISOLA",
	"ISOLAS",
	"IVE",
	"IVES",
	"JACQUET",
	"JACQUETS",
	"JARDINAGE",
	"JARDINAGES",
	"JASS",
	"JAVA",
	"JAVAS",
	"JAVELOT",
	"JAVELOTS",
	"JEU",
	"JEUX",
	"JOCKEY",
	"JOCKEYS",
	"JOKARI",
	"JOKARIS",
	"JONCHETS",
	"JONGLAGE",
	"JONGLAGES",
	"JUMEAUX",
	"JUMP",
	"JUMPS",
	"JUNGLE",
	"JUNGLES",
	"KAISER",
	"KAISERS",
	"KALEIDOSCOPE",
	"KALEIDOSCOPES",
	"KAMI",
	"KAMIS",
	"KANGOUROU",
	"KANGOUROUS",
	"KENDO",
	"KENDOS",
	"KREMLIN",
	"KREMLINS",
	"KRIEGSPIEL",
	"KRIEGSPIELS",
	"LABYRINTHE",
	"LABYRINTHES",
	"LANSQUENET",
	"LANSQUENETS",
	"LANTURLU",
	"LANTURLUS",
	"LAPINS",
	"LAUREAT",
	"LAUREATS",
	"LEGO",
	"LEGOS",
	"LIBERTE",
	"LIBERTES",
	"LICES",
	"LIEGE",
	"LIEGES",
	"LINDOR",
	"LINDORS",
	"LINOTTE",
	"LINOTTES",
	"LIVREURS",
	"LOBA",
	"LOBAS",
	"LOCO",
	"LOCOS",
	"LOGIGRILLE",
	"LOGIGRILLES",
	"LOOPING",
	"LOOPINGS",
	"LOTERIE",
	"LOTERIES",
	"LOTO",
	"LOTOS",
	"LOTUS",
	"LOUP",
	"LOUPS",
	"LOUTRE",
	"LOUTRES",
	"LUETTE",
	"LUETTES",
	"LUTINERIE",
	"LUTINERIES",
	"LYNX",
	"MABOULS",
	"MACADAM",
	"MACADAMS",
	"MACHER",
	"MAELSTROM",
	"MAELSTROMS",
	"MAESTRO",
	"MAESTROS",
	"MAFIA",
	"MAFIAS",
	"MAGIE",
	"MAGIES",
	"MAGISTRAL",
	"MAGNA",
	"MAGNAS",
	"MAGOT",
	"MAGOTS",
	"MAHARADJAH",
	"MAHARADJAHS",
	"MAHARAJA",
	"MAHARAJAS",
	"MAIL",
	"MAILLETS",
	"MAILS",
	"MALABARS",
	"MALEFICES",
	"MAMBA",
	"MAMBAS",
	"MAMMA",
	"MAMMAS",
	"MANA",
	"MANAGER",
	"MANAGERS",
	"MANAS",
	"MANDARIN",
	"MANDARINS",
	"MANEGE",
	"MANEGES",
	"MANILLA",
	"MANILLAS",
	"MANILLE",
	"MANILLES",
	"MANIPULATEUR",
	"MANIPULATEURS",
	"MANITOU",
	"MANITOUS",
	"MANNEQUINS",
	"MANOEUVRE",
	"MANOEUVRES",
	"MAO",
	"MAOS",
	"MARABOUT",
	"MARABOUTS",
	"MARELLE",
	"MARELLES",
	"MARIAGE",
	"MARIAGES",
	"MARIEE",
	"MARIEES",
	"MARK",
	"MARKETING",
	"MARKETINGS",
	"MARKS",
	"MARQUIS",
	"MARTEAU",
	"MARTEAUX",
	"MASCARADE",
	"MASCARADES",
	"MASSACRE",
	"MASSACRES",
	"MASSAI",
	"MASSAIS",
	"MATADOR",
	"MATADORS",
	"MAYA",
	"MAYAS",
	"MECCANO",
	"MECCANOS",
	"MEDIEVAL",
	"MEDINA",
	"MEDINAS",
	"MEDITERRANEE",
	"MEDITERRANEES",
	"MEDIUM",
	"MEDIUMS",
	"MEGA",
	"MEGALO",
	"MEGALOS",
	"MEGAS",
	"MEMOIRE",
	"MEMOIRES",
	"MENHIR",
	"MENHIRS",
	"MENTEUR",
	"MENTEURS",
	"MERCI",
	"MERCIS",
	"MERLIN",
	"MERLINS",
	"MESOPOTAMIEN",
	"MESOPOTAMIENS",
	"METAGRAMME",
	"METAGRAMMES",
	"METALLURGIE",
	"METALLURGIES",
	"METAMORPHOSE",
	"METAMORPHOSES",
	"METRO",
	"METROS",
	"MEUH",
	"MEULE",
	"MEULES",
	"MIAM",
	"MIKADO",
	"MIKADOS",
	"MILLIONNAIRE",
	"MILLIONNAIRES",
	"MIME",
	"MIMES",
	"MINESTRONE",
	"MINESTRONES",
	"MIROIR",
	"MIROIRS",
	"MISE",
	"MISES",
	"MISTIGRI",
	"MISTIGRIS",
	"MOAI",
	"MOAIS",
	"MOLLE",
	"MOLLES",
	"MONEGASQUE",
	"MONEGASQUES",
	"MONOPOLY",
	"MONOPOLYS",
	"MONTGOLFIERE",
	"MONTGOLFIERES",
	"MONTJOIE",
	"MONTJOIES",
	"MORFALS",
	"MORPION",
	"MORPIONS",
	"MOT",
	"MOTS",
	"MOTUS",
	"MOUCHE",
	"MOUCHES",
	"MOUCHOIR",
	"MOUCHOIRS",
	"MOULIN",
	"MOULINS",
	"MOURRE",
	"MOURRES",
	"MUS",
	"MUSTANGS",
	"MUTANTS",
	"MYTHOS",
	"NAINS",
	"NAPOLEON",
	"NAPOLEONS",
	"NAPOLITAINE",
	"NAPOLITAINES",
	"NAUFRAGES",
	"NEGOCES",
	"NEUF",
	"NEUFS",
	"NEURONES",
	"NEUTRON",
	"NEUTRONS",
	"NIGAUD",
	"NIGAUDS",
	"NINJA",
	"NINJAS",
	"NUGGETS",
	"OASIS",
	"OBSERVATEUR",
	"OBSERVATEURS",
	"OCEAN",
	"OCEANS",
	"OCTOGONE",
	"OCTOGONES",
	"ODYSSEE",
	"ODYSSEES",
	"OHE",
	"OIE",
	"OLE",
	"OLYMPIQUES",
	"OMEGA",
	"ONYX",
	"ONZE",
	"OPTION",
	"OPTIONS",
	"ORDO",
	"ORIENTE",
	"ORIENTES",
	"ORIGAMI",
	"ORIGAMIS",
	"OSSELETS",
	"OTHELLO",
	"OTHELLOS",
	"OURSON",
	"OURSONS",
	"OUT",
	"OVNI",
	"OVNIS",
	"OXO",
	"PACHINKO",
	"PACHINKOS",
	"PAF",
	"PAFS",
	"PAGODE",
	"PAGODES",
	"PAIRES",
	"PALA",
	"PALABRES",
	"PALADIN",
	"PALADINS",
	"PALANQUEE",
	"PALANQUEES",
	"PALAS",
	"PALET",
	"PALETA",
	"PALETAS",
	"PALETS",
	"PANDEMONIUM",
	"PANDEMONIUMS",
	"PANIER",
	"PANIERS",
	"PAPARAZZI",
	"PAPARAZZIS",
	"PAPILLON",
	"PAPILLONS",
	"PARADIS",
	"PARANOIA",
	"PARANOIAS",
	"PARCOURS",
	"PARESSEUX",
	"PARI",
	"PARIS",
	"PARRAIN",
	"PARRAINS",
	"PASSERELLES",
	"PATATRAS",
	"PATIENCE",
	"PATIENCES",
	"PATIO",
	"PATIOS",
	"PAUME",
	"PAUMES",
	"PECHEUR",
	"PECHEURS",
	"PEDALO",
	"PEDALOS",
	"PELOTON",
	"PELOTONS",
	"PENDU",
	"PENDUS",
	"PENNY",
	"PENNYS",
	"PENTE",
	"PENTES",
	"PERIPETIES",
	"PERLES",
	"PHARAON",
	"PHARAONS",
	"PHILIPPINE",
	"PHILIPPINES",
	"PHOENIX",
	"PIANO",
	"PIANOS",
	"PICKPOCKET",
	"PICKPOCKETS",
	"PIEGES",
	"PILOU",
	"PILOUS",
	"PIN",
	"PINACLE",
	"PINACLES",
	"PINCETTE",
	"PINCETTES",
	"PINGOUIN",
	"PINGOUINS",
	"PINS",
	"PIPELINE",
	"PIPELINES",
	"PIQUET",
	"PIQUETS",
	"PIRANHA",
	"PIRANHAS",
	"PIRATES",
	"PISTE",
	"PISTES",
	"PITCH",
	"PITCHS",
	"PIVOT",
	"PIVOTS",
	"PLANETAIRE",
	"PLANETAIRES",
	"PLATEAU",
	"PLATEAUX",
	"PLEIADES",
	"PLIAGE",
	"PLIAGES",
	"PLOMBIER",
	"PLOMBIERS",
	"POGO",
	"POGOS",
	"POINT",
	"POINTS",
	"POIRIER",
	"POIRIERS",
	"POISON",
	"POISONS",
	"POKER",
	"POKERS",
	"POLYGONE",
	"POLYGONES",
	"POMME",
	"POMMES",
	"POMMIER",
	"POMMIERS",
	"PONEYS",
	"PONT",
	"PONTS",
	"POPOTAMO",
	"POQUE",
	"POQUES",
	"PORTRAIT",
	"PORTRAITS",
	"POT",
	"POTERIE",
	"POTERIES",
	"POTS",
	"POUILLEUX",
	"POULPE",
	"POULPES",
	"POUSSETTE",
	"POUSSETTES",
	"POUTRE",
	"POUTRES",
	"POUX",
	"PRAIRIE",
	"PRAIRIES",
	"PREDATEURS",
	"PREFERENCE",
	"PREFERENCES",
	"PRESIDENT",
	"PRESIDENTS",
	"PRIME",
	"PRIMES",
	"PRISES",
	"PROBE",
	"PROBES",
	"PROVOCATION",
	"PROVOCATIONS",
	"PUANT",
	"PUANTS",
	"PUCE",
	"PUCES",
	"PUCIER",
	"PUCIERS",
];
// nombre aleatoire pour definir le mot
var randomNum = Math.floor(Math.random() * mot.length)
// mot choisi aleatoirement + conversion en minuscule
var motChoisi = mot[randomNum].toLowerCase()
// convertire le mot en tableau
var motChoisit = motChoisi.split('')
// erreus du mot
var misses = []
// tableau bonne reponse
var bonneReponse = []
// initialisation du nombre d'essais a 0
var essais = 0
// generer les underscore
var underScore = document.querySelector('.lettre-true');
// generer l'html selon la longueur du mot choisit
var entry = document.createElement('ul');
// hangmanParts
var hangmanParts = document.querySelectorAll('#hangman .parts')
// limite des essais
var nbrEssais = hangmanParts.length
// reponse DOM
var perdu = document.querySelector('.mot-hasar')
// lettre erroner
var toucheErroner = document.querySelector('.lettre-fase')
var cmptEssais = document.createElement("span")
cmptEssais.classList.add('cmptEssais')
// fonction pour generer les _ representant la longueur du mot
var genererTiret = function () {
	cmptEssais.innerHTML = nbrEssais

	for (var i = 0; i < motChoisit.length; i++) {
		bonneReponse.push('_')
		// creation de l'element li selon la longueur du mot
		var li = document.createElement('li');
		// ajout du text au li
		li.appendChild(document.createTextNode(' _ '))
		// ajout du data-index avec valeur i
		li.setAttribute("data-index", i); // added line
		// ajout des li au ul
		entry.appendChild(li)
		// ajout du ul au DOM
		underScore.appendChild(entry)
	}
	console.log(underScore);
	return bonneReponse
}
genererTiret()
document.addEventListener('keypress', function (event) {
	// Convertion du code de la touche en symbole representant le clavier (lettre , chiffre , etc)
	var touche = String.fromCharCode(event.charCode).toLowerCase()
	if (bonneReponse.indexOf(touche) != -1 || misses.indexOf(touche) != -1) {
		console.log('lettre déja utiliser');
		// notifier que la lettre a deja etait utilisé
		return false
	}
	if (motChoisit.indexOf(touche) != -1) {
		for (var i = 0; i < motChoisit.length; i++) {
			// comparer la lettre incerer avec l'une des lettre du mot choisit
			if (motChoisit[i] == touche) {
				bonneReponse[i] = motChoisit[i]
				// selectionner le bon element ou ajouter la lettre via le data-index
				var maLettre = document.querySelector('li[data-index="' + i + '"]');
				maLettre.classList.add('check')
				// ajouter la lettre a l'element selectionner au prealable
				maLettre.innerHTML = maLettre.innerHTML.replace(' _ ', touche)
			}
		}
	} else {
		// condition pour limiter les essais
		if (essais >= nbrEssais - 1) {
			// Afficher defaite et demande de rejouer
			console.log("perdu");
			// si defaite ajouter le texte pour monter le mot non trouver
			console.log(motChoisi);
			perdu.innerHTML = motChoisi
			parts = hangmanParts[essais]
			parts.classList.add('visible')
			// demender de rejouer
			return false
		} else {
			// calcule du nombre d'essais restant
			var tentative = nbrEssais - (essais + 1)

			// ajout des lettre erroner au tableau misses
			misses.push(touche)
			var span = document.createElement("span") // Create a <li> node
			var textnode = document.createTextNode(touche); // Create a text node
			span.appendChild(textnode); // Append the text to <li>
			toucheErroner.appendChild(span); // Append <li> to <ul> with id="myList"
			// affichage du nombre d'essais restant
			console.log('Il vous reste ' + tentative + ' essais');
			cmptEssais.innerHTML = tentative;

			perdu.appendChild(cmptEssais)
			// ici code pour les image du pendu
			var parts = hangmanParts[essais]
			parts.classList.add('visible')
			console.log(parts);


			// incrementation des essais
			essais++
		}
	}
	// comparer les chaine de caractères pour verifier si le joueur a gagner
	if (JSON.stringify(bonneReponse) == JSON.stringify(motChoisit)) {
		// message de felicitation
		console.log('Bien jouer');
		// demande de rejouer
		return false
	}
	console.log(bonneReponse);
	console.log(misses);
})

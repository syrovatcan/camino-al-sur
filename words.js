const words = [
  {
    "id": 0,
    "pic": "🏠",
    "es": "la casa",
    "cz": "dům",
    "phon": "la kAsa",
    "example": [
      "La casa es blanca.",
      "Dům je bílý."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 1,
    "pic": "💧",
    "es": "el agua",
    "cz": "voda",
    "phon": "el Agua",
    "example": [
      "Bebo agua.",
      "Piju vodu."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 2,
    "pic": "🍞",
    "es": "el pan",
    "cz": "chléb",
    "phon": "el pAn",
    "example": [
      "Compro pan.",
      "Kupuji chléb."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 3,
    "pic": "☀️",
    "es": "el sol",
    "cz": "slunce",
    "phon": "el sOl",
    "example": [
      "Hace sol.",
      "Svítí slunce."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 4,
    "pic": "🚪",
    "es": "la puerta",
    "cz": "dveře",
    "phon": "la puErta",
    "example": [
      "Abre la puerta.",
      "Otevři dveře."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 5,
    "pic": "🐕",
    "es": "el perro",
    "cz": "pes",
    "phon": "el pErro",
    "example": [
      "El perro duerme.",
      "Pes spí."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 6,
    "pic": "🍎",
    "es": "la manzana",
    "cz": "jablko",
    "phon": "la manthAna",
    "example": [
      "Como una manzana.",
      "Jím jablko."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 7,
    "pic": "🪑",
    "es": "la silla",
    "cz": "židle",
    "phon": "la sIja",
    "example": [
      "La silla es nueva.",
      "Židle je nová."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 8,
    "pic": "🚗",
    "es": "el coche",
    "cz": "auto",
    "phon": "el kOče",
    "example": [
      "El coche está aquí.",
      "Auto je tady."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 9,
    "pic": "🌊",
    "es": "el mar",
    "cz": "moře",
    "phon": "el mAr",
    "example": [
      "Veo el mar.",
      "Vidím moře."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 10,
    "pic": "🔑",
    "es": "la llave",
    "cz": "klíč",
    "phon": "la jAbe",
    "example": [
      "Tengo la llave.",
      "Mám klíč."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 11,
    "pic": "🪟",
    "es": "la ventana",
    "cz": "okno",
    "phon": "la bentAna",
    "example": [
      "Abre la ventana.",
      "Otevři okno."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 12,
    "pic": "🍋",
    "es": "el limón",
    "cz": "citron",
    "phon": "el limOn",
    "example": [
      "El limón es amarillo.",
      "Citron je žlutý."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 13,
    "pic": "🌳",
    "es": "el árbol",
    "cz": "strom",
    "phon": "el Arbol",
    "example": [
      "El árbol es grande.",
      "Strom je velký."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 14,
    "pic": "🐢",
    "es": "la tortuga",
    "cz": "želva",
    "phon": "la tortUga",
    "example": [
      "La tortuga come.",
      "Želva jí."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 15,
    "pic": "🍽️",
    "es": "la mesa",
    "cz": "stůl",
    "phon": "la mEsa",
    "example": [
      "La mesa es grande.",
      "Stůl je velký."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 16,
    "pic": "🥛",
    "es": "la leche",
    "cz": "mléko",
    "phon": "la lEče",
    "example": [
      "Bebo leche.",
      "Piju mléko."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 17,
    "pic": "🛏️",
    "es": "la cama",
    "cz": "postel",
    "phon": "la kAma",
    "example": [
      "La cama es cómoda.",
      "Postel je pohodlná."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 18,
    "pic": "🏖️",
    "es": "la playa",
    "cz": "pláž",
    "phon": "la plAja",
    "example": [
      "Vamos a la playa.",
      "Jdeme na pláž."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 19,
    "pic": "⛰️",
    "es": "la montaña",
    "cz": "hora",
    "phon": "la montAňa",
    "example": [
      "Veo la montaña.",
      "Vidím horu."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 20,
    "pic": "🌱",
    "es": "el jardín",
    "cz": "zahrada",
    "phon": "el chardIn",
    "example": [
      "El jardín es bonito.",
      "Zahrada je hezká."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 21,
    "pic": "🔨",
    "es": "el martillo",
    "cz": "kladivo",
    "phon": "el martIjo",
    "example": [
      "Necesito un martillo.",
      "Potřebuji kladivo."
    ],
    "topic": "Dílna",
    "level": 1
  },
  {
    "id": 22,
    "pic": "🛒",
    "es": "la tienda",
    "cz": "obchod",
    "phon": "la tjEnda",
    "example": [
      "La tienda está abierta.",
      "Obchod je otevřený."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 23,
    "pic": "🧀",
    "es": "el queso",
    "cz": "sýr",
    "phon": "el kEso",
    "example": [
      "Me gusta el queso.",
      "Mám rád sýr."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 24,
    "pic": "🐟",
    "es": "el pescado",
    "cz": "ryba (jako jídlo)",
    "phon": "el peskAdo",
    "example": [
      "Como pescado.",
      "Jím rybu."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 25,
    "pic": "🛣️",
    "es": "la carretera",
    "cz": "silnice",
    "phon": "la karretEra",
    "example": [
      "La carretera es larga.",
      "Silnice je dlouhá."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 26,
    "pic": "💰",
    "es": "el dinero",
    "cz": "peníze",
    "phon": "el dinEro",
    "example": [
      "Necesito dinero.",
      "Potřebuji peníze."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 27,
    "pic": "🕒",
    "es": "la hora",
    "cz": "hodina",
    "phon": "la Ora",
    "example": [
      "¿Qué hora es?",
      "Kolik je hodin?"
    ],
    "topic": "Komunikace",
    "level": 1
  },
  {
    "id": 28,
    "pic": "👟",
    "es": "el zapato",
    "cz": "bota",
    "phon": "el thapAto",
    "example": [
      "El zapato es negro.",
      "Bota je černá."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 29,
    "pic": "🏊",
    "es": "la piscina",
    "cz": "bazén",
    "phon": "la pisthIna",
    "example": [
      "La piscina está limpia.",
      "Bazén je čistý."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 30,
    "pic": "🍊",
    "es": "la naranja",
    "cz": "pomeranč",
    "phon": "la narAncha",
    "example": [
      "Como una naranja.",
      "Jím pomeranč."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 31,
    "pic": "🍅",
    "es": "el tomate",
    "cz": "rajče",
    "phon": "el tomAte",
    "example": [
      "Corto el tomate.",
      "Krájím rajče."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 32,
    "pic": "🥔",
    "es": "la patata",
    "cz": "brambora",
    "phon": "la patAta",
    "example": [
      "Pelo la patata.",
      "Loupu bramboru."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 33,
    "pic": "🥚",
    "es": "el huevo",
    "cz": "vejce",
    "phon": "el uEbo",
    "example": [
      "Quiero un huevo.",
      "Chci vejce."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 34,
    "pic": "🍚",
    "es": "el arroz",
    "cz": "rýže",
    "phon": "el arrOth",
    "example": [
      "Cocino arroz.",
      "Vařím rýži."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 35,
    "pic": "🧂",
    "es": "la sal",
    "cz": "sůl",
    "phon": "la sAl",
    "example": [
      "Añade sal.",
      "Přidej sůl."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 36,
    "pic": "☕",
    "es": "el café",
    "cz": "káva",
    "phon": "el kafE",
    "example": [
      "Tomo café.",
      "Dávám si kávu."
    ],
    "topic": "Jídlo",
    "photo": "photos/36.webp",
    "level": 1
  },
  {
    "id": 37,
    "pic": "🧅",
    "es": "la cebolla",
    "cz": "cibule",
    "phon": "la thebOja",
    "example": [
      "Corto la cebolla.",
      "Krájím cibuli."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 38,
    "pic": "🫒",
    "es": "el aceite",
    "cz": "olej",
    "phon": "el athEite",
    "example": [
      "Uso aceite de oliva.",
      "Používám olivový olej."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 39,
    "pic": "🍗",
    "es": "el pollo",
    "cz": "kuře",
    "phon": "el pOjo",
    "example": [
      "Cocino pollo.",
      "Vařím kuře."
    ],
    "topic": "Jídlo",
    "level": 1
  },
  {
    "id": 40,
    "pic": "👨",
    "es": "el padre",
    "cz": "otec",
    "phon": "el pAdre",
    "example": [
      "Mi padre trabaja.",
      "Můj otec pracuje."
    ],
    "topic": "Rodina",
    "level": 1
  },
  {
    "id": 41,
    "pic": "👩",
    "es": "la madre",
    "cz": "matka",
    "phon": "la mAdre",
    "example": [
      "Mi madre está aquí.",
      "Moje matka je tady."
    ],
    "topic": "Rodina",
    "level": 1
  },
  {
    "id": 42,
    "pic": "👧",
    "es": "la hija",
    "cz": "dcera",
    "phon": "la Icha",
    "example": [
      "Mi hija juega.",
      "Moje dcera si hraje."
    ],
    "topic": "Rodina",
    "level": 1
  },
  {
    "id": 43,
    "pic": "👦",
    "es": "el hijo",
    "cz": "syn",
    "phon": "el Icho",
    "example": [
      "Mi hijo duerme.",
      "Můj syn spí."
    ],
    "topic": "Rodina",
    "level": 1
  },
  {
    "id": 44,
    "pic": "👪",
    "es": "la familia",
    "cz": "rodina",
    "phon": "la famIlja",
    "example": [
      "Mi familia vive aquí.",
      "Moje rodina žije tady."
    ],
    "topic": "Rodina",
    "level": 1
  },
  {
    "id": 45,
    "pic": "👋",
    "es": "hola",
    "cz": "ahoj",
    "phon": "Ola",
    "example": [
      "Hola, ¿qué tal?",
      "Ahoj, jak se máš?"
    ],
    "topic": "Komunikace",
    "level": 1
  },
  {
    "id": 46,
    "pic": "🙏",
    "es": "gracias",
    "cz": "děkuji",
    "phon": "grAthjas",
    "example": [
      "Muchas gracias.",
      "Moc děkuji."
    ],
    "topic": "Komunikace",
    "level": 1
  },
  {
    "id": 47,
    "pic": "👍",
    "es": "sí",
    "cz": "ano",
    "phon": "sI",
    "example": [
      "Sí, claro.",
      "Ano, samozřejmě."
    ],
    "topic": "Komunikace",
    "level": 1
  },
  {
    "id": 48,
    "pic": "👎",
    "es": "no",
    "cz": "ne",
    "phon": "nO",
    "example": [
      "No, gracias.",
      "Ne, děkuji."
    ],
    "topic": "Komunikace",
    "level": 1
  },
  {
    "id": 49,
    "pic": "🤝",
    "es": "por favor",
    "cz": "prosím",
    "phon": "por fabOr",
    "example": [
      "Un café, por favor.",
      "Jednu kávu, prosím."
    ],
    "topic": "Komunikace",
    "level": 1
  },
  {
    "id": 50,
    "pic": "🍴",
    "es": "comer",
    "cz": "jíst",
    "phon": "komEr",
    "example": [
      "Quiero comer.",
      "Chci jíst."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 51,
    "pic": "🥤",
    "es": "beber",
    "cz": "pít",
    "phon": "bebEr",
    "example": [
      "Quiero beber agua.",
      "Chci pít vodu."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 52,
    "pic": "🚶",
    "es": "caminar",
    "cz": "chodit",
    "phon": "kaminAr",
    "example": [
      "Me gusta caminar.",
      "Rád chodím pěšky."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 53,
    "pic": "😴",
    "es": "dormir",
    "cz": "spát",
    "phon": "dormIr",
    "example": [
      "Quiero dormir.",
      "Chci spát."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 54,
    "pic": "🗣️",
    "es": "hablar",
    "cz": "mluvit",
    "phon": "ablAr",
    "example": [
      "Quiero hablar español.",
      "Chci mluvit španělsky."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 55,
    "pic": "👂",
    "es": "escuchar",
    "cz": "poslouchat",
    "phon": "eskučAr",
    "example": [
      "Me gusta escuchar música.",
      "Rád poslouchám hudbu."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 56,
    "pic": "👀",
    "es": "mirar",
    "cz": "dívat se",
    "phon": "mirAr",
    "example": [
      "Voy a mirar el mar.",
      "Půjdu se dívat na moře."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 57,
    "pic": "📖",
    "es": "leer",
    "cz": "číst",
    "phon": "leEr",
    "example": [
      "Me gusta leer.",
      "Rád čtu."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 58,
    "pic": "✍️",
    "es": "escribir",
    "cz": "psát",
    "phon": "eskribIr",
    "example": [
      "Quiero escribir una carta.",
      "Chci napsat dopis."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 59,
    "pic": "🛍️",
    "es": "comprar",
    "cz": "kupovat",
    "phon": "komprAr",
    "example": [
      "Voy a comprar pan.",
      "Půjdu koupit chléb."
    ],
    "topic": "Slovesa",
    "level": 1
  },
  {
    "id": 60,
    "pic": "🔥",
    "es": "caliente",
    "cz": "horký",
    "phon": "kaljEnte",
    "example": [
      "El café está caliente.",
      "Káva je horká."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 61,
    "pic": "🧊",
    "es": "frío",
    "cz": "studený",
    "phon": "frIo",
    "example": [
      "El viento es frío.",
      "Vítr je studený."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 62,
    "pic": "📏",
    "es": "grande",
    "cz": "velký",
    "phon": "grAnde",
    "example": [
      "El jardín es grande.",
      "Zahrada je velká."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 63,
    "pic": "🐜",
    "es": "pequeño",
    "cz": "malý",
    "phon": "pekEňo",
    "example": [
      "El perro es pequeño.",
      "Pes je malý."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 64,
    "pic": "😊",
    "es": "bueno",
    "cz": "dobrý",
    "phon": "buEno",
    "example": [
      "El pan está bueno.",
      "Chléb je dobrý."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 65,
    "pic": "🙁",
    "es": "malo",
    "cz": "špatný",
    "phon": "mAlo",
    "example": [
      "El tiempo es malo.",
      "Počasí je špatné."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 66,
    "pic": "💨",
    "es": "rápido",
    "cz": "rychlý",
    "phon": "rrApido",
    "example": [
      "El tren es rápido.",
      "Vlak je rychlý."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 67,
    "pic": "🐌",
    "es": "lento",
    "cz": "pomalý",
    "phon": "lEnto",
    "example": [
      "El autobús es lento.",
      "Autobus je pomalý."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 68,
    "pic": "🆕",
    "es": "nuevo",
    "cz": "nový",
    "phon": "nuEbo",
    "example": [
      "El coche es nuevo.",
      "Auto je nové."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 69,
    "pic": "🏚️",
    "es": "viejo",
    "cz": "starý",
    "phon": "bjEcho",
    "example": [
      "El banco es viejo.",
      "Banka je stará."
    ],
    "topic": "Vlastnosti",
    "level": 1
  },
  {
    "id": 70,
    "pic": "🛠️",
    "es": "la herramienta",
    "cz": "nářadí",
    "phon": "la erramjEnta",
    "example": [
      "Necesito una herramienta.",
      "Potřebuji nástroj."
    ],
    "topic": "Dílna",
    "level": 1
  },
  {
    "id": 71,
    "pic": "🔩",
    "es": "el tornillo",
    "cz": "šroub",
    "phon": "el tornIjo",
    "example": [
      "Aprieto el tornillo.",
      "Utahuji šroub."
    ],
    "topic": "Dílna",
    "level": 1
  },
  {
    "id": 72,
    "pic": "🪚",
    "es": "la sierra",
    "cz": "pila",
    "phon": "la sjErra",
    "example": [
      "Uso la sierra.",
      "Používám pilu."
    ],
    "topic": "Dílna",
    "level": 1
  },
  {
    "id": 73,
    "pic": "🧰",
    "es": "el taller",
    "cz": "dílna",
    "phon": "el tajEr",
    "example": [
      "Trabajo en el taller.",
      "Pracuji v dílně."
    ],
    "topic": "Dílna",
    "level": 1
  },
  {
    "id": 74,
    "pic": "🧱",
    "es": "la pared",
    "cz": "stěna",
    "phon": "la parEd",
    "example": [
      "La pared es blanca.",
      "Stěna je bílá."
    ],
    "topic": "Domov",
    "photo": "photos/74.webp",
    "level": 1
  },
  {
    "id": 75,
    "pic": "🏡",
    "es": "el tejado",
    "cz": "střecha",
    "phon": "el techAdo",
    "example": [
      "El tejado es rojo.",
      "Střecha je červená."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 76,
    "pic": "🚰",
    "es": "el grifo",
    "cz": "kohoutek",
    "phon": "el grIfo",
    "example": [
      "Cierra el grifo.",
      "Zavři kohoutek."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 77,
    "pic": "💡",
    "es": "la luz",
    "cz": "světlo",
    "phon": "la lUth",
    "example": [
      "Enciende la luz.",
      "Rozsviť světlo."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 78,
    "pic": "🔋",
    "es": "la batería",
    "cz": "baterie",
    "phon": "la baterIa",
    "example": [
      "La batería está cargada.",
      "Baterie je nabitá."
    ],
    "topic": "Dílna",
    "level": 1
  },
  {
    "id": 79,
    "pic": "🪜",
    "es": "la escalera",
    "cz": "schody",
    "phon": "la eskalEra",
    "example": [
      "Subo por la escalera.",
      "Jdu nahoru po schodech."
    ],
    "topic": "Domov",
    "level": 1
  },
  {
    "id": 80,
    "pic": "🌧️",
    "es": "la lluvia",
    "cz": "déšť",
    "phon": "la jUbja",
    "example": [
      "La lluvia es fuerte.",
      "Déšť je silný."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 81,
    "pic": "💨",
    "es": "el viento",
    "cz": "vítr",
    "phon": "el bjEnto",
    "example": [
      "Hace viento.",
      "Fouká vítr."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 82,
    "pic": "☁️",
    "es": "la nube",
    "cz": "mrak",
    "phon": "la nUbe",
    "example": [
      "Veo una nube.",
      "Vidím mrak."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 83,
    "pic": "🌙",
    "es": "la luna",
    "cz": "měsíc",
    "phon": "la lUna",
    "example": [
      "La luna brilla.",
      "Měsíc svítí."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 84,
    "pic": "⭐",
    "es": "la estrella",
    "cz": "hvězda",
    "phon": "la estrEja",
    "example": [
      "Veo una estrella.",
      "Vidím hvězdu."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 85,
    "pic": "🌸",
    "es": "la flor",
    "cz": "květina",
    "phon": "la flOr",
    "example": [
      "La flor es bonita.",
      "Květina je hezká."
    ],
    "topic": "Příroda",
    "photo": "photos/85.webp",
    "level": 1
  },
  {
    "id": 86,
    "pic": "🌿",
    "es": "la hierba",
    "cz": "tráva",
    "phon": "la jErba",
    "example": [
      "La hierba es verde.",
      "Tráva je zelená."
    ],
    "topic": "Příroda",
    "photo": "photos/86.webp",
    "level": 1
  },
  {
    "id": 87,
    "pic": "🌾",
    "es": "el campo",
    "cz": "venkov",
    "phon": "el kAmpo",
    "example": [
      "Vivo en el campo.",
      "Žiji na venkově."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 88,
    "pic": "🏘️",
    "es": "el pueblo",
    "cz": "vesnice",
    "phon": "el puEblo",
    "example": [
      "El pueblo es pequeño.",
      "Vesnice je malá."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 89,
    "pic": "🏙️",
    "es": "la ciudad",
    "cz": "město",
    "phon": "la thjudAd",
    "example": [
      "La ciudad es grande.",
      "Město je velké."
    ],
    "topic": "Příroda",
    "level": 1
  },
  {
    "id": 90,
    "pic": "🚌",
    "es": "el autobús",
    "cz": "autobus",
    "phon": "el autobUs",
    "example": [
      "Espero el autobús.",
      "Čekám na autobus."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 91,
    "pic": "🚆",
    "es": "el tren",
    "cz": "vlak",
    "phon": "el trEn",
    "example": [
      "Viajo en tren.",
      "Cestuji vlakem."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 92,
    "pic": "🚲",
    "es": "la bicicleta",
    "cz": "jízdní kolo",
    "phon": "la bithiklEta",
    "example": [
      "Tengo una bicicleta.",
      "Mám jízdní kolo."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 93,
    "pic": "🏍️",
    "es": "la moto",
    "cz": "motorka",
    "phon": "la mOto",
    "example": [
      "Tengo una moto.",
      "Mám motorku."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 94,
    "pic": "⛽",
    "es": "la gasolina",
    "cz": "benzín",
    "phon": "la gasolIna",
    "example": [
      "Necesito gasolina.",
      "Potřebuji benzín."
    ],
    "topic": "Doprava",
    "level": 1
  },
  {
    "id": 95,
    "pic": "🏥",
    "es": "el hospital",
    "cz": "nemocnice",
    "phon": "el ospitAl",
    "example": [
      "Voy al hospital.",
      "Jdu do nemocnice."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 96,
    "pic": "💊",
    "es": "la farmacia",
    "cz": "lékárna",
    "phon": "la farmAthja",
    "example": [
      "Busco una farmacia.",
      "Hledám lékárnu."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 97,
    "pic": "🏦",
    "es": "el banco",
    "cz": "banka",
    "phon": "el bAnko",
    "example": [
      "Voy al banco.",
      "Jdu do banky."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 98,
    "pic": "📍",
    "es": "la dirección",
    "cz": "adresa",
    "phon": "la direkthjOn",
    "example": [
      "¿Cuál es tu dirección?",
      "Jaká je tvoje adresa?"
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "id": 99,
    "pic": "🗺️",
    "es": "el mapa",
    "cz": "mapa",
    "phon": "el mApa",
    "example": [
      "Necesito un mapa.",
      "Potřebuji mapu."
    ],
    "topic": "Služby",
    "level": 1
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "buenos días",
    "cz": "dobré ráno",
    "phon": "buEnos dIas",
    "example": [
      "buenos días, ¿cómo estás?",
      "Dobré ráno, jak se máš?"
    ],
    "id": 100,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el lunes",
    "cz": "pondělí",
    "phon": "el lUnes",
    "example": [
      "Trabajo el lunes.",
      "V pondělí pracuji."
    ],
    "id": 101,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍓",
    "es": "la fresa",
    "cz": "jahoda",
    "phon": "la frEsa",
    "example": [
      "Las fresas están maduras.",
      "Jahody jsou zralé."
    ],
    "id": 102,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el dardo",
    "cz": "šipka",
    "phon": "el dArdo",
    "example": [
      "Lanzo un dardo.",
      "Házím šipku."
    ],
    "id": 103,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el barco",
    "cz": "loď",
    "phon": "el bArko",
    "example": [
      "El barco está en el puerto.",
      "Loď je v přístavu."
    ],
    "id": 104,
    "level": 1
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el balón",
    "cz": "míč",
    "phon": "el balOn",
    "example": [
      "Pásame el balón.",
      "Přihraj mi míč."
    ],
    "id": 105,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la Navidad",
    "cz": "Vánoce",
    "phon": "la nabidAd",
    "example": [
      "Celebramos la Navidad en casa.",
      "Slavíme Vánoce doma."
    ],
    "id": 106,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la sierra circular",
    "cz": "kotoučová pila",
    "phon": "la sjErra thirkulAr",
    "example": [
      "Uso la sierra circular.",
      "Používám kotoučovou pilu."
    ],
    "id": 107,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el panel solar",
    "cz": "solární panel",
    "phon": "el panEl solAr",
    "example": [
      "Instalamos un panel solar.",
      "Instalujeme solární panel."
    ],
    "id": 108,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "buenas tardes",
    "cz": "dobré odpoledne",
    "phon": "buEnas tArdes",
    "example": [
      "Buenas tardes, señor.",
      "Dobré odpoledne, pane."
    ],
    "id": 109,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el martes",
    "cz": "úterý",
    "phon": "el mArtes",
    "example": [
      "Nos vemos el martes.",
      "Uvidíme se v úterý."
    ],
    "id": 110,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍇",
    "es": "la uva",
    "cz": "hrozen vína",
    "phon": "la Uba",
    "example": [
      "Compro uvas en el mercado.",
      "Kupuji hrozny na trhu."
    ],
    "id": 111,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la diana",
    "cz": "terč",
    "phon": "la djAna",
    "example": [
      "La diana está en la pared.",
      "Terč je na stěně."
    ],
    "id": 112,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⚓",
    "es": "el ancla",
    "cz": "kotva",
    "phon": "el Ankla",
    "example": [
      "Echamos el ancla.",
      "Spouštíme kotvu."
    ],
    "id": 113,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el gol",
    "cz": "gól",
    "phon": "el gOl",
    "example": [
      "Ha marcado un gol.",
      "Dal gól."
    ],
    "id": 114,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el árbol de Navidad",
    "cz": "vánoční stromek",
    "phon": "el Arbol de nabidAd",
    "example": [
      "Decoramos el árbol de Navidad.",
      "Zdobíme vánoční stromek."
    ],
    "id": 115,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪵",
    "es": "la madera",
    "cz": "dřevo",
    "phon": "la madEra",
    "example": [
      "La madera está seca.",
      "Dřevo je suché."
    ],
    "id": 116,
    "level": 1
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "el inversor",
    "cz": "střídač",
    "phon": "el imbersOr",
    "example": [
      "El inversor está encendido.",
      "Střídač je zapnutý."
    ],
    "id": 117,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "buenas noches",
    "cz": "dobrý večer / dobrou noc",
    "phon": "buEnas nOčes",
    "example": [
      "Buenas noches a todos.",
      "Dobrý večer všem."
    ],
    "id": 118,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el miércoles",
    "cz": "středa",
    "phon": "el mjErkoles",
    "example": [
      "El miércoles tengo una cita.",
      "Ve středu mám schůzku."
    ],
    "id": 119,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍉",
    "es": "la sandía",
    "cz": "vodní meloun",
    "phon": "la sandIa",
    "example": [
      "La sandía está fría.",
      "Meloun je studený."
    ],
    "id": 120,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la punta",
    "cz": "hrot",
    "phon": "la pUnta",
    "example": [
      "Cambio la punta del dardo.",
      "Měním hrot šipky."
    ],
    "id": 121,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⚓",
    "es": "el puerto",
    "cz": "přístav",
    "phon": "el puErto",
    "example": [
      "Volvemos al puerto.",
      "Vracíme se do přístavu."
    ],
    "id": 122,
    "level": 1
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el portero",
    "cz": "brankář",
    "phon": "el portEro",
    "example": [
      "El portero para el balón.",
      "Brankář chytá míč."
    ],
    "id": 123,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎁",
    "es": "el regalo",
    "cz": "dárek",
    "phon": "el rregAlo",
    "example": [
      "Abre tu regalo.",
      "Otevři svůj dárek."
    ],
    "id": 124,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪵",
    "es": "el tablón",
    "cz": "fošna",
    "phon": "el tablOn",
    "example": [
      "Corto el tablón.",
      "Řežu fošnu."
    ],
    "id": 125,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "la corriente continua",
    "cz": "stejnosměrný proud",
    "phon": "la korriEnte kontInua",
    "example": [
      "La batería suministra corriente continua.",
      "Baterie dodává stejnosměrný proud."
    ],
    "id": 126,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "perdón",
    "cz": "promiňte",
    "phon": "perdOn",
    "example": [
      "Perdón, ¿dónde está la estación?",
      "Promiňte, kde je nádraží?"
    ],
    "id": 127,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el jueves",
    "cz": "čtvrtek",
    "phon": "el chuEbes",
    "example": [
      "Llegamos el jueves.",
      "Přijedeme ve čtvrtek."
    ],
    "id": 128,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🥕",
    "es": "la zanahoria",
    "cz": "mrkev",
    "phon": "la thanaOrja",
    "example": [
      "Corto la zanahoria.",
      "Krájím mrkev."
    ],
    "id": 129,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el lanzamiento",
    "cz": "hod",
    "phon": "el lanthamjEnto",
    "example": [
      "Ha sido un buen lanzamiento.",
      "Byl to dobrý hod."
    ],
    "id": 130,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la vela",
    "cz": "plachta",
    "phon": "la bEla",
    "example": [
      "Izamos la vela.",
      "Vytahujeme plachtu."
    ],
    "id": 131,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el árbitro",
    "cz": "rozhodčí",
    "phon": "el Arbitro",
    "example": [
      "El árbitro pita una falta.",
      "Rozhodčí píská faul."
    ],
    "id": 132,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "⭐",
    "es": "la Nochebuena",
    "cz": "Štědrý večer",
    "phon": "la nočebuEna",
    "example": [
      "Cenamos juntos en Nochebuena.",
      "Na Štědrý večer večeříme spolu."
    ],
    "id": 133,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el disco de sierra",
    "cz": "pilový kotouč",
    "phon": "el dIsko de sjErra",
    "example": [
      "Cambio el disco de sierra.",
      "Měním pilový kotouč."
    ],
    "id": 134,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "la corriente alterna",
    "cz": "střídavý proud",
    "phon": "la korriEnte altErna",
    "example": [
      "La red utiliza corriente alterna.",
      "Síť používá střídavý proud."
    ],
    "id": 135,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "no entiendo",
    "cz": "nerozumím",
    "phon": "nO entjEndo",
    "example": [
      "Lo siento, no entiendo.",
      "Promiňte, nerozumím."
    ],
    "id": 136,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el viernes",
    "cz": "pátek",
    "phon": "el bjErnes",
    "example": [
      "El viernes salimos temprano.",
      "V pátek vyrážíme brzy."
    ],
    "id": 137,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🧄",
    "es": "el ajo",
    "cz": "česnek",
    "phon": "el Acho",
    "example": [
      "Añade un poco de ajo.",
      "Přidej trochu česneku."
    ],
    "id": 138,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el doble",
    "cz": "dvojité pole",
    "phon": "el dOble",
    "example": [
      "Necesito un doble para cerrar.",
      "Potřebuji dvojité pole k zavření."
    ],
    "id": 139,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el timón",
    "cz": "kormidlo",
    "phon": "el timOn",
    "example": [
      "Sujeta el timón.",
      "Drž kormidlo."
    ],
    "id": 140,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el delantero",
    "cz": "útočník",
    "phon": "el delantEro",
    "example": [
      "El delantero corre rápido.",
      "Útočník běží rychle."
    ],
    "id": 141,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "👑",
    "es": "los Reyes Magos",
    "cz": "Tři králové",
    "phon": "los rrEjes mAgos",
    "example": [
      "Los Reyes Magos traen regalos.",
      "Tři králové nosí dárky."
    ],
    "id": 142,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🧰",
    "es": "el taladro",
    "cz": "vrtačka",
    "phon": "el talAdro",
    "example": [
      "Necesito un taladro.",
      "Potřebuji vrtačku."
    ],
    "id": 143,
    "level": 1
  },
  {
    "topic": "Fotovoltaika",
    "pic": "🔋",
    "es": "la capacidad",
    "cz": "kapacita",
    "phon": "la kapathidAd",
    "example": [
      "La batería tiene mucha capacidad.",
      "Baterie má velkou kapacitu."
    ],
    "id": 144,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿cuánto cuesta?",
    "cz": "kolik to stojí?",
    "phon": "kuAnto kuEsta",
    "example": [
      "¿Cuánto cuesta este libro?",
      "Kolik stojí tato kniha?"
    ],
    "id": 145,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el sábado",
    "cz": "sobota",
    "phon": "el sAbado",
    "example": [
      "El sábado descanso.",
      "V sobotu odpočívám."
    ],
    "id": 146,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🥒",
    "es": "el pepino",
    "cz": "okurka",
    "phon": "el pepIno",
    "example": [
      "El pepino está fresco.",
      "Okurka je čerstvá."
    ],
    "id": 147,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el triple veinte",
    "cz": "trojitá dvacítka",
    "phon": "el trIple bEinte",
    "example": [
      "He acertado en el triple veinte.",
      "Trefil jsem trojitou dvacítku."
    ],
    "id": 148,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "🌊",
    "es": "la ola",
    "cz": "vlna",
    "phon": "la Ola",
    "example": [
      "Las olas son grandes.",
      "Vlny jsou velké."
    ],
    "id": 149,
    "level": 1
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el defensa",
    "cz": "obránce",
    "phon": "el defEnsa",
    "example": [
      "El defensa recupera el balón.",
      "Obránce získává míč."
    ],
    "id": 150,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🍬",
    "es": "el turrón",
    "cz": "španělský mandlový nugát",
    "phon": "el turrOn",
    "example": [
      "Comemos turrón en Navidad.",
      "O Vánocích jíme turrón."
    ],
    "id": 151,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🧰",
    "es": "la broca",
    "cz": "vrták",
    "phon": "la brOka",
    "example": [
      "La broca está desgastada.",
      "Vrták je opotřebovaný."
    ],
    "id": 152,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "el consumo",
    "cz": "spotřeba",
    "phon": "el konsUmo",
    "example": [
      "El consumo ha bajado.",
      "Spotřeba klesla."
    ],
    "id": 153,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "hasta luego",
    "cz": "na shledanou",
    "phon": "asta luEgo",
    "example": [
      "Hasta luego, amigo.",
      "Na shledanou, kamaráde."
    ],
    "id": 154,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el domingo",
    "cz": "neděle",
    "phon": "el domIngo",
    "example": [
      "El domingo vamos al mar.",
      "V neděli jedeme k moři."
    ],
    "id": 155,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🫑",
    "es": "el pimiento",
    "cz": "paprika",
    "phon": "el pimjEnto",
    "example": [
      "Asamos los pimientos.",
      "Pečeme papriky."
    ],
    "id": 156,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la puntuación",
    "cz": "skóre",
    "phon": "la puntuathjOn",
    "example": [
      "Anota la puntuación.",
      "Zapiš skóre."
    ],
    "id": 157,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "🛟",
    "es": "el chaleco salvavidas",
    "cz": "záchranná vesta",
    "phon": "el čalEko salbabIdas",
    "example": [
      "Ponte el chaleco salvavidas.",
      "Obleč si záchrannou vestu."
    ],
    "id": 158,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el empate",
    "cz": "remíza",
    "phon": "el empAte",
    "example": [
      "El partido termina en empate.",
      "Zápas končí remízou."
    ],
    "id": 159,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎵",
    "es": "el villancico",
    "cz": "vánoční koleda",
    "phon": "el bijanthIko",
    "example": [
      "Cantamos un villancico.",
      "Zpíváme koledu."
    ],
    "id": 160,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪵",
    "es": "la lija",
    "cz": "brusný papír",
    "phon": "la lIcha",
    "example": [
      "Uso una lija fina.",
      "Používám jemný brusný papír."
    ],
    "id": 161,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "la potencia",
    "cz": "výkon",
    "phon": "la potEnthja",
    "example": [
      "Medimos la potencia.",
      "Měříme výkon."
    ],
    "id": 162,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿dónde está?",
    "cz": "kde je?",
    "phon": "dOnde estA",
    "example": [
      "¿Dónde está el baño?",
      "Kde je toaleta?"
    ],
    "id": 163,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "hoy",
    "cz": "dnes",
    "phon": "Oi",
    "example": [
      "Hoy hace calor.",
      "Dnes je teplo."
    ],
    "id": 164,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🥩",
    "es": "la carne",
    "cz": "maso",
    "phon": "la kArne",
    "example": [
      "La carne está lista.",
      "Maso je hotové."
    ],
    "id": 165,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el turno",
    "cz": "tah / řada",
    "phon": "el tUrno",
    "example": [
      "Es tu turno.",
      "Jsi na řadě."
    ],
    "id": 166,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la cubierta",
    "cz": "paluba",
    "phon": "la kubjErta",
    "example": [
      "Estamos en la cubierta.",
      "Jsme na palubě."
    ],
    "id": 167,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el partido",
    "cz": "zápas",
    "phon": "el partIdo",
    "example": [
      "Vemos el partido esta noche.",
      "Dnes večer sledujeme zápas."
    ],
    "id": 168,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎆",
    "es": "la Nochevieja",
    "cz": "Silvestr",
    "phon": "la nočebjEcha",
    "example": [
      "Celebramos la Nochevieja con amigos.",
      "Slavíme Silvestr s přáteli."
    ],
    "id": 169,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🧰",
    "es": "el sargento",
    "cz": "truhlářská svěrka",
    "phon": "el sarchEnto",
    "example": [
      "Sujeto la tabla con un sargento.",
      "Přidržuji prkno svěrkou."
    ],
    "id": 170,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "la red eléctrica",
    "cz": "elektrická síť",
    "phon": "la rrEd elEktrika",
    "example": [
      "La casa está conectada a la red eléctrica.",
      "Dům je připojen k elektrické síti."
    ],
    "id": 171,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "despacio",
    "cz": "pomalu",
    "phon": "despAthjo",
    "example": [
      "Habla más despacio, por favor.",
      "Mluv prosím pomaleji."
    ],
    "id": 172,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "mañana",
    "cz": "zítra",
    "phon": "maňAna",
    "example": [
      "Mañana voy al mercado.",
      "Zítra jdu na trh."
    ],
    "id": 173,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🥛",
    "es": "el yogur",
    "cz": "jogurt",
    "phon": "el jogUr",
    "example": [
      "Desayuno yogur.",
      "Snídám jogurt."
    ],
    "id": 174,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la partida",
    "cz": "hra",
    "phon": "la partIda",
    "example": [
      "Hemos ganado la partida.",
      "Vyhráli jsme hru."
    ],
    "id": 175,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "🎣",
    "es": "la caña de pescar",
    "cz": "rybářský prut",
    "phon": "la kAňa de peskAr",
    "example": [
      "Preparo la caña de pescar.",
      "Připravuji rybářský prut."
    ],
    "id": 176,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la portería",
    "cz": "branka",
    "phon": "la porterIa",
    "example": [
      "Tira a portería.",
      "Vystřel na branku."
    ],
    "id": 177,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "⭐",
    "es": "el belén",
    "cz": "betlém",
    "phon": "el belEn",
    "example": [
      "Montamos el belén.",
      "Stavíme betlém."
    ],
    "id": 178,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪵",
    "es": "la cola para madera",
    "cz": "lepidlo na dřevo",
    "phon": "la kOla para madEra",
    "example": [
      "Aplico cola para madera.",
      "Nanáším lepidlo na dřevo."
    ],
    "id": 179,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el autoconsumo",
    "cz": "vlastní spotřeba vyrobené energie",
    "phon": "el autokonsUmo",
    "example": [
      "Tenemos una instalación de autoconsumo.",
      "Máme zařízení pro vlastní spotřebu energie."
    ],
    "id": 180,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "de acuerdo",
    "cz": "souhlasím",
    "phon": "de akuErdo",
    "example": [
      "De acuerdo, vamos mañana.",
      "Dobře, půjdeme zítra."
    ],
    "id": 181,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "ayer",
    "cz": "včera",
    "phon": "ajEr",
    "example": [
      "Ayer llovió.",
      "Včera pršelo."
    ],
    "id": 182,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🧈",
    "es": "la mantequilla",
    "cz": "máslo",
    "phon": "la mantekIja",
    "example": [
      "Unta el pan con mantequilla.",
      "Namaž chléb máslem."
    ],
    "id": 183,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la liga",
    "cz": "liga",
    "phon": "la lIga",
    "example": [
      "Jugamos en una liga de dardos.",
      "Hrajeme šipkovou ligu."
    ],
    "id": 184,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "🌊",
    "es": "la marea",
    "cz": "příliv a odliv",
    "phon": "la marEa",
    "example": [
      "La marea está subiendo.",
      "Hladina při přílivu stoupá."
    ],
    "id": 185,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el fuera de juego",
    "cz": "ofsajd",
    "phon": "el fuEra de chuEgo",
    "example": [
      "El jugador está en fuera de juego.",
      "Hráč je v ofsajdu."
    ],
    "id": 186,
    "level": 3
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "feliz Navidad",
    "cz": "veselé Vánoce",
    "phon": "felIth nabidAd",
    "example": [
      "¡Feliz Navidad a todos!",
      "Veselé Vánoce všem!"
    ],
    "id": 187,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "📏",
    "es": "la cinta métrica",
    "cz": "svinovací metr",
    "phon": "la thInta mEtrika",
    "example": [
      "Mido con la cinta métrica.",
      "Měřím svinovacím metrem."
    ],
    "id": 188,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "⚡",
    "es": "el fusible",
    "cz": "pojistka",
    "phon": "el fusIble",
    "example": [
      "El fusible está fundido.",
      "Pojistka je přepálená."
    ],
    "id": 189,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿cómo estás?",
    "cz": "jak se máš?",
    "phon": "kOmo estAs",
    "example": [
      "¿Cómo estás hoy?",
      "Jak se dnes máš?"
    ],
    "id": 190,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "ser",
    "cz": "být (vlastnost)",
    "phon": "sEr",
    "example": [
      "Soy checo.",
      "Jsem Čech."
    ],
    "id": 191,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la pera",
    "cz": "hruška",
    "phon": "la pEra",
    "example": [
      "La pera está madura.",
      "Hruška je zralá."
    ],
    "id": 192,
    "level": 1
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cocina",
    "cz": "kuchyně",
    "phon": "la kothIna",
    "example": [
      "La cocina es amplia.",
      "Kuchyně je prostorná."
    ],
    "id": 193,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el hermano",
    "cz": "bratr",
    "phon": "el ermAno",
    "example": [
      "Mi hermano vive lejos.",
      "Můj bratr bydlí daleko."
    ],
    "id": 194,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la semilla",
    "cz": "semínko",
    "phon": "la semIja",
    "example": [
      "Planto una semilla.",
      "Sázím semínko."
    ],
    "id": 195,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el serrucho",
    "cz": "ruční pila",
    "phon": "el serrUčo",
    "example": [
      "Corto madera con el serrucho.",
      "Řežu dřevo ruční pilou."
    ],
    "id": 196,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la célula solar",
    "cz": "solární článek",
    "phon": "la thElula solAr",
    "example": [
      "La célula solar produce electricidad.",
      "Solární článek vyrábí elektřinu."
    ],
    "id": 197,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el blanco",
    "cz": "terč, cíl",
    "phon": "el blAnko",
    "example": [
      "Apunta al blanco.",
      "Miř na terč."
    ],
    "id": 198,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la proa",
    "cz": "příď",
    "phon": "la prOa",
    "example": [
      "Estoy en la proa.",
      "Jsem na přídi."
    ],
    "id": 199,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el estadio",
    "cz": "stadion",
    "phon": "el estAdjo",
    "example": [
      "El estadio está lleno.",
      "Stadion je plný."
    ],
    "id": 200,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "enero",
    "cz": "leden",
    "phon": "enEro",
    "example": [
      "Enero suele ser frío.",
      "Leden bývá chladný."
    ],
    "id": 201,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la estrella de Navidad",
    "cz": "vánoční hvězda",
    "phon": "la estrEja de nabidAd",
    "example": [
      "Colocamos la estrella de Navidad.",
      "Umísťujeme vánoční hvězdu."
    ],
    "id": 202,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el volante",
    "cz": "volant",
    "phon": "el bolAnte",
    "example": [
      "Sujeto el volante.",
      "Držím volant."
    ],
    "id": 203,
    "level": 1
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "el médico",
    "cz": "lékař",
    "phon": "el mEdiko",
    "example": [
      "Necesito ver al médico.",
      "Potřebuji navštívit lékaře."
    ],
    "id": 204,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "la cigarra",
    "cz": "cikáda",
    "phon": "la thigArra",
    "example": [
      "Se oyen las cigarras.",
      "Jsou slyšet cikády."
    ],
    "id": 205,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el contrato",
    "cz": "smlouva",
    "phon": "el kontrAto",
    "example": [
      "Leo el contrato antes de firmar.",
      "Čtu smlouvu před podpisem."
    ],
    "id": 206,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "muy bien",
    "cz": "velmi dobře",
    "phon": "mUj bjEn",
    "example": [
      "Estoy muy bien.",
      "Mám se velmi dobře."
    ],
    "id": 207,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "estar",
    "cz": "být (stav, poloha)",
    "phon": "estAr",
    "example": [
      "Estoy en casa.",
      "Jsem doma."
    ],
    "id": 208,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el melocotón",
    "cz": "broskev",
    "phon": "el melokotOn",
    "example": [
      "El melocotón es dulce.",
      "Broskev je sladká."
    ],
    "id": 209,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el baño",
    "cz": "koupelna",
    "phon": "el bAňo",
    "example": [
      "El baño está limpio.",
      "Koupelna je čistá."
    ],
    "id": 210,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "la hermana",
    "cz": "sestra",
    "phon": "la ermAna",
    "example": [
      "Mi hermana viene hoy.",
      "Moje sestra přijde dnes."
    ],
    "id": 211,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la raíz",
    "cz": "kořen",
    "phon": "la rraIth",
    "example": [
      "La raíz crece bajo tierra.",
      "Kořen roste pod zemí."
    ],
    "id": 212,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la sierra de calar",
    "cz": "přímočará pila",
    "phon": "la sjErra de kalAr",
    "example": [
      "Uso la sierra de calar.",
      "Používám přímočarou pilu."
    ],
    "id": 213,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el regulador de carga",
    "cz": "regulátor nabíjení",
    "phon": "el rreguladOr de kArga",
    "example": [
      "Instalo un regulador de carga.",
      "Instaluji regulátor nabíjení."
    ],
    "id": 214,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la diana electrónica",
    "cz": "elektronický terč",
    "phon": "la djAna elektrOnika",
    "example": [
      "Jugamos en una diana electrónica.",
      "Hrajeme na elektronickém terči."
    ],
    "id": 215,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la popa",
    "cz": "záď",
    "phon": "la pOpa",
    "example": [
      "El motor está en la popa.",
      "Motor je na zádi."
    ],
    "id": 216,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el césped",
    "cz": "trávník",
    "phon": "el thEsped",
    "example": [
      "El césped está mojado.",
      "Trávník je mokrý."
    ],
    "id": 217,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "febrero",
    "cz": "únor",
    "phon": "febrEro",
    "example": [
      "Febrero es un mes corto.",
      "Únor je krátký měsíc."
    ],
    "id": 218,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la bola de Navidad",
    "cz": "vánoční baňka",
    "phon": "la bOla de nabidAd",
    "example": [
      "Cuelgo una bola de Navidad.",
      "Věším vánoční baňku."
    ],
    "id": 219,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el neumático",
    "cz": "pneumatika",
    "phon": "el neumAtiko",
    "example": [
      "Cambio el neumático.",
      "Měním pneumatiku."
    ],
    "id": 220,
    "level": 2
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la enfermera",
    "cz": "zdravotní sestra",
    "phon": "la emfermEra",
    "example": [
      "La enfermera me atiende.",
      "Zdravotní sestra se o mě stará."
    ],
    "id": 221,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "la abeja",
    "cz": "včela",
    "phon": "la abEcha",
    "example": [
      "La abeja visita la flor.",
      "Včela přilétá ke květu."
    ],
    "id": 222,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "la firma",
    "cz": "podpis",
    "phon": "la fIrma",
    "example": [
      "Falta tu firma.",
      "Chybí tvůj podpis."
    ],
    "id": 223,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "encantado",
    "cz": "těší mě",
    "phon": "enkantAdo",
    "example": [
      "Encantado de conocerte.",
      "Těší mě, že tě poznávám."
    ],
    "id": 224,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "tener",
    "cz": "mít",
    "phon": "tenEr",
    "example": [
      "Tengo dos llaves.",
      "Mám dva klíče."
    ],
    "id": 225,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el albaricoque",
    "cz": "meruňka",
    "phon": "el albarikOke",
    "example": [
      "Compro albaricoques.",
      "Kupuji meruňky."
    ],
    "id": 226,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el dormitorio",
    "cz": "ložnice",
    "phon": "el dormitOrjo",
    "example": [
      "El dormitorio tiene ventana.",
      "Ložnice má okno."
    ],
    "id": 227,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el abuelo",
    "cz": "dědeček",
    "phon": "el abuElo",
    "example": [
      "El abuelo cuenta historias.",
      "Dědeček vypráví příběhy."
    ],
    "id": 228,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la rama",
    "cz": "větev",
    "phon": "la rrAma",
    "example": [
      "Corto una rama seca.",
      "Řežu suchou větev."
    ],
    "id": 229,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la sierra de cinta",
    "cz": "pásová pila",
    "phon": "la sjErra de thInta",
    "example": [
      "La sierra de cinta corta bien.",
      "Pásová pila dobře řeže."
    ],
    "id": 230,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la tensión",
    "cz": "napětí",
    "phon": "la tensjOn",
    "example": [
      "Mido la tensión.",
      "Měřím napětí."
    ],
    "id": 231,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la punta de plástico",
    "cz": "plastový hrot",
    "phon": "la pUnta de plAstiko",
    "example": [
      "Cambio la punta de plástico.",
      "Měním plastový hrot."
    ],
    "id": 232,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "babor",
    "cz": "levobok",
    "phon": "babOr",
    "example": [
      "Gira a babor.",
      "Otoč doleva na levobok."
    ],
    "id": 233,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el entrenador",
    "cz": "trenér",
    "phon": "el entrenadOr",
    "example": [
      "El entrenador da instrucciones.",
      "Trenér dává pokyny."
    ],
    "id": 234,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "marzo",
    "cz": "březen",
    "phon": "mArtho",
    "example": [
      "En marzo empieza la primavera.",
      "V březnu začíná jaro."
    ],
    "id": 235,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "las luces de Navidad",
    "cz": "vánoční světýlka",
    "phon": "las lUthes de nabidAd",
    "example": [
      "Encendemos las luces de Navidad.",
      "Rozsvěcujeme vánoční světýlka."
    ],
    "id": 236,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "la rueda",
    "cz": "kolo",
    "phon": "la rruEda",
    "example": [
      "La rueda está pinchada.",
      "Kolo je píchlé."
    ],
    "id": 237,
    "level": 1
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la cita",
    "cz": "termín, schůzka",
    "phon": "la thIta",
    "example": [
      "Tengo cita mañana.",
      "Mám termín zítra."
    ],
    "id": 238,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "la mariposa",
    "cz": "motýl",
    "phon": "la maripOsa",
    "example": [
      "Veo una mariposa.",
      "Vidím motýla."
    ],
    "id": 239,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el permiso",
    "cz": "povolení",
    "phon": "el permIso",
    "example": [
      "Necesitamos un permiso.",
      "Potřebujeme povolení."
    ],
    "id": 240,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "hasta mañana",
    "cz": "na shledanou zítra",
    "phon": "asta maňAna",
    "example": [
      "Hasta mañana, Ana.",
      "Tak zítra, Ano."
    ],
    "id": 241,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "hacer",
    "cz": "dělat",
    "phon": "athEr",
    "example": [
      "Hago la cena.",
      "Dělám večeři."
    ],
    "id": 242,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la ciruela",
    "cz": "švestka",
    "phon": "la thiruEla",
    "example": [
      "La ciruela tiene hueso.",
      "Švestka má pecku."
    ],
    "id": 243,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el salón",
    "cz": "obývací pokoj",
    "phon": "el salOn",
    "example": [
      "Estamos en el salón.",
      "Jsme v obýváku."
    ],
    "id": 244,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "la abuela",
    "cz": "babička",
    "phon": "la abuEla",
    "example": [
      "Visitamos a la abuela.",
      "Navštěvujeme babičku."
    ],
    "id": 245,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la hoja",
    "cz": "list",
    "phon": "la Ocha",
    "example": [
      "La hoja es verde.",
      "List je zelený."
    ],
    "id": 246,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la ingletadora",
    "cz": "pokosová pila",
    "phon": "la ingletadOra",
    "example": [
      "Corto a cuarenta y cinco grados con la ingletadora.",
      "Řežu pokosovou pilou pod úhlem 45 stupňů."
    ],
    "id": 247,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la intensidad",
    "cz": "intenzita, proud",
    "phon": "la intensidAd",
    "example": [
      "Mido la intensidad de corriente.",
      "Měřím velikost proudu."
    ],
    "id": 248,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la punta de acero",
    "cz": "ocelový hrot",
    "phon": "la pUnta de athEro",
    "example": [
      "El dardo tiene punta de acero.",
      "Šipka má ocelový hrot."
    ],
    "id": 249,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "estribor",
    "cz": "pravobok",
    "phon": "estribOr",
    "example": [
      "Hay una boya a estribor.",
      "Na pravoboku je bóje."
    ],
    "id": 250,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el jugador",
    "cz": "hráč",
    "phon": "el chugadOr",
    "example": [
      "El jugador corre rápido.",
      "Hráč běží rychle."
    ],
    "id": 251,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "abril",
    "cz": "duben",
    "phon": "abrIl",
    "example": [
      "Viajamos en abril.",
      "Cestujeme v dubnu."
    ],
    "id": 252,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el papel de regalo",
    "cz": "balicí papír",
    "phon": "el papEl de rregAlo",
    "example": [
      "Necesito papel de regalo.",
      "Potřebuji balicí papír."
    ],
    "id": 253,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el freno",
    "cz": "brzda",
    "phon": "el frEno",
    "example": [
      "Reviso el freno.",
      "Kontroluji brzdu."
    ],
    "id": 254,
    "level": 1
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la receta",
    "cz": "recept",
    "phon": "la rrethEta",
    "example": [
      "El médico me da una receta.",
      "Lékař mi dává recept."
    ],
    "id": 255,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "la lagartija",
    "cz": "ještěrka",
    "phon": "la lagartIcha",
    "example": [
      "La lagartija toma el sol.",
      "Ještěrka se vyhřívá na slunci."
    ],
    "id": 256,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el ayuntamiento",
    "cz": "radnice",
    "phon": "el ajuntamjEnto",
    "example": [
      "Voy al ayuntamiento.",
      "Jdu na radnici."
    ],
    "id": 257,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "lo siento",
    "cz": "je mi líto",
    "phon": "lo sjEnto",
    "example": [
      "Lo siento mucho.",
      "Je mi to moc líto."
    ],
    "id": 258,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "ir",
    "cz": "jít, jet",
    "phon": "Ir",
    "example": [
      "Voy al trabajo.",
      "Jdu do práce."
    ],
    "id": 259,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el plátano",
    "cz": "banán",
    "phon": "el plAtano",
    "example": [
      "Pelo un plátano.",
      "Loupu banán."
    ],
    "id": 260,
    "level": 1
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la terraza",
    "cz": "terasa",
    "phon": "la terrAtha",
    "example": [
      "Desayuno en la terraza.",
      "Snídám na terase."
    ],
    "id": 261,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el bebé",
    "cz": "miminko",
    "phon": "el bebE",
    "example": [
      "El bebé duerme.",
      "Miminko spí."
    ],
    "id": 262,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el tronco",
    "cz": "kmen",
    "phon": "el trOnko",
    "example": [
      "El tronco es grueso.",
      "Kmen je silný."
    ],
    "id": 263,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la fresadora",
    "cz": "frézka",
    "phon": "la fresadOra",
    "example": [
      "Ajusto la fresadora.",
      "Seřizuji frézku."
    ],
    "id": 264,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el voltio",
    "cz": "volt",
    "phon": "el bOltjo",
    "example": [
      "La tensión se mide en voltios.",
      "Napětí se měří ve voltech."
    ],
    "id": 265,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la pluma",
    "cz": "letka, pero",
    "phon": "la plUma",
    "example": [
      "La pluma del dardo está rota.",
      "Letka šipky je zlomená."
    ],
    "id": 266,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el mástil",
    "cz": "stěžeň",
    "phon": "el mAstil",
    "example": [
      "El mástil es alto.",
      "Stěžeň je vysoký."
    ],
    "id": 267,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el centrocampista",
    "cz": "záložník",
    "phon": "el thentrokampIsta",
    "example": [
      "El centrocampista pasa el balón.",
      "Záložník přihrává míč."
    ],
    "id": 268,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "mayo",
    "cz": "květen",
    "phon": "mAjo",
    "example": [
      "En mayo florecen las rosas.",
      "V květnu kvetou růže."
    ],
    "id": 269,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "Papá Noel",
    "cz": "Santa Claus",
    "phon": "papA noEl",
    "example": [
      "Los niños esperan a Papá Noel.",
      "Děti čekají na Santa Clause."
    ],
    "id": 270,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el embrague",
    "cz": "spojka",
    "phon": "el embrAge",
    "example": [
      "Piso el embrague.",
      "Sešlapuji spojku."
    ],
    "id": 271,
    "level": 3
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "el dolor",
    "cz": "bolest",
    "phon": "el dolOr",
    "example": [
      "Tengo dolor de espalda.",
      "Bolí mě záda."
    ],
    "id": 272,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "el caparazón",
    "cz": "krunýř",
    "phon": "el kaparathOn",
    "example": [
      "La tortuga tiene un caparazón duro.",
      "Želva má tvrdý krunýř."
    ],
    "id": 273,
    "level": 3
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el notario",
    "cz": "notář",
    "phon": "el notArjo",
    "example": [
      "Tenemos cita con el notario.",
      "Máme schůzku s notářem."
    ],
    "id": 274,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿qué tal?",
    "cz": "jak to jde?",
    "phon": "kE tAl",
    "example": [
      "¿Qué tal el viaje?",
      "Jaká byla cesta?"
    ],
    "id": 275,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "venir",
    "cz": "přijít",
    "phon": "benIr",
    "example": [
      "Vengo de Madrid.",
      "Přijíždím z Madridu."
    ],
    "id": 276,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el aguacate",
    "cz": "avokádo",
    "phon": "el aguakAte",
    "example": [
      "Corto el aguacate.",
      "Krájím avokádo."
    ],
    "id": 277,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el balcón",
    "cz": "balkon",
    "phon": "el balkOn",
    "example": [
      "El balcón da al mar.",
      "Balkon směřuje k moři."
    ],
    "id": 278,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el niño",
    "cz": "chlapec, dítě",
    "phon": "el nIňo",
    "example": [
      "El niño juega.",
      "Chlapec si hraje."
    ],
    "id": 279,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el olivo",
    "cz": "olivovník",
    "phon": "el olIbo",
    "example": [
      "Tenemos un olivo.",
      "Máme olivovník."
    ],
    "id": 280,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la lijadora",
    "cz": "bruska",
    "phon": "la lichadOra",
    "example": [
      "Uso la lijadora en el tablero.",
      "Používám brusku na desku."
    ],
    "id": 281,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el amperio",
    "cz": "ampér",
    "phon": "el ampErjo",
    "example": [
      "La corriente es de diez amperios.",
      "Proud je deset ampérů."
    ],
    "id": 282,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el cuerpo del dardo",
    "cz": "tělíčko šipky",
    "phon": "el kuErpo del dArdo",
    "example": [
      "El cuerpo del dardo es de tungsteno.",
      "Tělíčko šipky je z wolframu."
    ],
    "id": 283,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la quilla",
    "cz": "kýl",
    "phon": "la kIja",
    "example": [
      "La quilla está bajo el agua.",
      "Kýl je pod vodou."
    ],
    "id": 284,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el capitán",
    "cz": "kapitán",
    "phon": "el kapitAn",
    "example": [
      "El capitán habla con el árbitro.",
      "Kapitán mluví s rozhodčím."
    ],
    "id": 285,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "junio",
    "cz": "červen",
    "phon": "chUnjo",
    "example": [
      "Las clases terminan en junio.",
      "Výuka končí v červnu."
    ],
    "id": 286,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el polvorón",
    "cz": "španělské vánoční cukroví",
    "phon": "el polborOn",
    "example": [
      "Comemos polvorones en Navidad.",
      "O Vánocích jíme polvorones."
    ],
    "id": 287,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el motor",
    "cz": "motor",
    "phon": "el motOr",
    "example": [
      "El motor está frío.",
      "Motor je studený."
    ],
    "id": 288,
    "level": 1
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la fiebre",
    "cz": "horečka",
    "phon": "la fjEbre",
    "example": [
      "El niño tiene fiebre.",
      "Dítě má horečku."
    ],
    "id": 289,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "el recinto",
    "cz": "výběh, ohraničený prostor",
    "phon": "el rrethInto",
    "example": [
      "Las tortugas están en el recinto.",
      "Želvy jsou ve výběhu."
    ],
    "id": 290,
    "level": 3
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "la escritura",
    "cz": "notářská listina",
    "phon": "la eskritUra",
    "example": [
      "Revisamos la escritura de compraventa.",
      "Kontrolujeme kupní listinu."
    ],
    "id": 291,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "claro",
    "cz": "jasně",
    "phon": "klAro",
    "example": [
      "Claro que sí.",
      "Jasně že ano."
    ],
    "id": 292,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "poder",
    "cz": "moci",
    "phon": "podEr",
    "example": [
      "Puedo ayudarte.",
      "Mohu ti pomoci."
    ],
    "id": 293,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la aceituna",
    "cz": "oliva",
    "phon": "la atheitUna",
    "example": [
      "Las aceitunas son verdes.",
      "Olivy jsou zelené."
    ],
    "id": 294,
    "level": 1
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el garaje",
    "cz": "garáž",
    "phon": "el garAche",
    "example": [
      "El coche está en el garaje.",
      "Auto je v garáži."
    ],
    "id": 295,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "la niña",
    "cz": "dívka",
    "phon": "la nIňa",
    "example": [
      "La niña sonríe.",
      "Dívka se usmívá."
    ],
    "id": 296,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el limonero",
    "cz": "citronovník",
    "phon": "el limonEro",
    "example": [
      "El limonero da frutos.",
      "Citronovník plodí."
    ],
    "id": 297,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el cepillo de carpintero",
    "cz": "truhlářský hoblík",
    "phon": "el thepIjo de karpintEro",
    "example": [
      "Aliso la madera con el cepillo de carpintero.",
      "Vyhlazuji dřevo hoblíkem."
    ],
    "id": 298,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el vatio",
    "cz": "watt",
    "phon": "el bAtjo",
    "example": [
      "La lámpara consume diez vatios.",
      "Lampa spotřebovává deset wattů."
    ],
    "id": 299,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el tungsteno",
    "cz": "wolfram",
    "phon": "el tungstEno",
    "example": [
      "Prefiero los dardos de tungsteno.",
      "Preferuji wolframové šipky."
    ],
    "id": 300,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el casco",
    "cz": "trup lodi, helma",
    "phon": "el kAsko",
    "example": [
      "Revisamos el casco del barco.",
      "Kontrolujeme trup lodi."
    ],
    "id": 301,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el saque de esquina",
    "cz": "rohový kop",
    "phon": "el sAke de eskIna",
    "example": [
      "Tenemos un saque de esquina.",
      "Máme rohový kop."
    ],
    "id": 302,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "julio",
    "cz": "červenec",
    "phon": "chUljo",
    "example": [
      "En julio hace calor.",
      "V červenci je horko."
    ],
    "id": 303,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el mazapán",
    "cz": "marcipán",
    "phon": "el mathapAn",
    "example": [
      "Me gusta el mazapán.",
      "Mám rád marcipán."
    ],
    "id": 304,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el maletero",
    "cz": "kufr auta",
    "phon": "el maletEro",
    "example": [
      "Abro el maletero.",
      "Otevírám kufr."
    ],
    "id": 305,
    "level": 2
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la tos",
    "cz": "kašel",
    "phon": "la tOs",
    "example": [
      "Tengo tos desde ayer.",
      "Od včerejška mám kašel."
    ],
    "id": 306,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "la sequía",
    "cz": "sucho",
    "phon": "la sekIa",
    "example": [
      "La sequía afecta al huerto.",
      "Sucho ovlivňuje zahradu."
    ],
    "id": 307,
    "level": 3
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "la factura",
    "cz": "faktura, účet",
    "phon": "la faktUra",
    "example": [
      "Pago la factura.",
      "Platím fakturu."
    ],
    "id": 308,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "quizás",
    "cz": "možná",
    "phon": "kithAs",
    "example": [
      "Quizás venga mañana.",
      "Možná přijdu zítra."
    ],
    "id": 309,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "querer",
    "cz": "chtít, mít rád",
    "phon": "kerEr",
    "example": [
      "Quiero un café.",
      "Chci kávu."
    ],
    "id": 310,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el mango",
    "cz": "mango",
    "phon": "el mAngo",
    "example": [
      "El mango está maduro.",
      "Mango je zralé."
    ],
    "id": 311,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el suelo",
    "cz": "podlaha, půda",
    "phon": "el suElo",
    "example": [
      "Limpio el suelo.",
      "Čistím podlahu."
    ],
    "id": 312,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "la pareja",
    "cz": "partner, partnerka, pár",
    "phon": "la parEcha",
    "example": [
      "Vivo con mi pareja.",
      "Bydlím s partnerkou."
    ],
    "id": 313,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el naranjo",
    "cz": "pomerančovník",
    "phon": "el narAncho",
    "example": [
      "Riego el naranjo.",
      "Zalévám pomerančovník."
    ],
    "id": 314,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el formón",
    "cz": "dláto",
    "phon": "el formOn",
    "example": [
      "El formón está afilado.",
      "Dláto je ostré."
    ],
    "id": 315,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el kilovatio hora",
    "cz": "kilowatthodina",
    "phon": "el kilobAtjo Ora",
    "example": [
      "Hemos consumido cinco kilovatios hora.",
      "Spotřebovali jsme pět kilowatthodin."
    ],
    "id": 316,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el lanzamiento de prueba",
    "cz": "zkušební hod",
    "phon": "el lanthamjEnto de pruEba",
    "example": [
      "Hago un lanzamiento de prueba.",
      "Dělám zkušební hod."
    ],
    "id": 317,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el cabo",
    "cz": "lodní lano, mys",
    "phon": "el kAbo",
    "example": [
      "Sujeta el cabo.",
      "Podrž lano."
    ],
    "id": 318,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el saque de banda",
    "cz": "autové vhazování",
    "phon": "el sAke de bAnda",
    "example": [
      "El jugador hace un saque de banda.",
      "Hráč vhazuje aut."
    ],
    "id": 319,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "agosto",
    "cz": "srpen",
    "phon": "agOsto",
    "example": [
      "Tenemos vacaciones en agosto.",
      "Máme dovolenou v srpnu."
    ],
    "id": 320,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el roscón de Reyes",
    "cz": "tříkrálový věnec",
    "phon": "el rroskOn de rrEjes",
    "example": [
      "Compramos un roscón de Reyes.",
      "Kupujeme tříkrálový věnec."
    ],
    "id": 321,
    "level": 3
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el parabrisas",
    "cz": "čelní sklo",
    "phon": "el parabrIsas",
    "example": [
      "Limpio el parabrisas.",
      "Čistím čelní sklo."
    ],
    "id": 322,
    "level": 3
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la herida",
    "cz": "rána",
    "phon": "la erIda",
    "example": [
      "Limpio la herida.",
      "Čistím ránu."
    ],
    "id": 323,
    "level": 2
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "la tormenta",
    "cz": "bouřka",
    "phon": "la tormEnta",
    "example": [
      "Se acerca una tormenta.",
      "Blíží se bouřka."
    ],
    "id": 324,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el presupuesto",
    "cz": "rozpočet, cenová nabídka",
    "phon": "el presupuEsto",
    "example": [
      "Pido un presupuesto al fontanero.",
      "Žádám instalatéra o cenovou nabídku."
    ],
    "id": 325,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "por supuesto",
    "cz": "samozřejmě",
    "phon": "por supuEsto",
    "example": [
      "Por supuesto que puedes venir.",
      "Samozřejmě můžeš přijít."
    ],
    "id": 326,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "saber",
    "cz": "vědět, umět",
    "phon": "sabEr",
    "example": [
      "Sé nadar.",
      "Umím plavat."
    ],
    "id": 327,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la piña",
    "cz": "ananas",
    "phon": "la pIňa",
    "example": [
      "La piña es jugosa.",
      "Ananas je šťavnatý."
    ],
    "id": 328,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el techo",
    "cz": "strop",
    "phon": "el tEčo",
    "example": [
      "El techo es alto.",
      "Strop je vysoký."
    ],
    "id": 329,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el vecino",
    "cz": "soused",
    "phon": "el bethIno",
    "example": [
      "Saludo al vecino.",
      "Zdravím souseda."
    ],
    "id": 330,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la higuera",
    "cz": "fíkovník",
    "phon": "la igEra",
    "example": [
      "La higuera da sombra.",
      "Fíkovník poskytuje stín."
    ],
    "id": 331,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el banco de trabajo",
    "cz": "pracovní stůl",
    "phon": "el bAnko de trabAcho",
    "example": [
      "Sujeto la pieza al banco de trabajo.",
      "Připevňuji díl k pracovnímu stolu."
    ],
    "id": 332,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el cable",
    "cz": "kabel",
    "phon": "el kAble",
    "example": [
      "El cable es demasiado corto.",
      "Kabel je příliš krátký."
    ],
    "id": 333,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "apuntar",
    "cz": "mířit",
    "phon": "apuntAr",
    "example": [
      "Apunto al doble dieciséis.",
      "Mířím na dvojitou šestnáctku."
    ],
    "id": 334,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la boya",
    "cz": "bóje",
    "phon": "la bOja",
    "example": [
      "La boya marca el canal.",
      "Bóje označuje plavební kanál."
    ],
    "id": 335,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el penalti",
    "cz": "penalta",
    "phon": "el penAlti",
    "example": [
      "El árbitro señala penalti.",
      "Rozhodčí nařizuje penaltu."
    ],
    "id": 336,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "septiembre",
    "cz": "září",
    "phon": "septjEmbre",
    "example": [
      "El colegio empieza en septiembre.",
      "Škola začíná v září."
    ],
    "id": 337,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "las doce uvas",
    "cz": "dvanáct hroznů na Silvestra",
    "phon": "las dOthe Ubas",
    "example": [
      "Comemos las doce uvas a medianoche.",
      "O půlnoci jíme dvanáct hroznů."
    ],
    "id": 338,
    "level": 2
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el cinturón de seguridad",
    "cz": "bezpečnostní pás",
    "phon": "el thinturOn de seguridAd",
    "example": [
      "Abróchate el cinturón de seguridad.",
      "Připoutej se bezpečnostním pásem."
    ],
    "id": 339,
    "level": 2
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la venda",
    "cz": "obvaz",
    "phon": "la bEnda",
    "example": [
      "Necesito una venda.",
      "Potřebuji obvaz."
    ],
    "id": 340,
    "level": 2
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "el relámpago",
    "cz": "blesk",
    "phon": "el rrelAmpago",
    "example": [
      "Veo un relámpago.",
      "Vidím blesk."
    ],
    "id": 341,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el fontanero",
    "cz": "instalatér",
    "phon": "el fontanEro",
    "example": [
      "El fontanero arregla la fuga.",
      "Instalatér opravuje únik."
    ],
    "id": 342,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "no pasa nada",
    "cz": "nic se neděje",
    "phon": "nO pAsa nAda",
    "example": [
      "Tranquilo, no pasa nada.",
      "Klid, nic se neděje."
    ],
    "id": 343,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "conocer",
    "cz": "znát",
    "phon": "konothEr",
    "example": [
      "Conozco este pueblo.",
      "Znám tuto vesnici."
    ],
    "id": 344,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la cereza",
    "cz": "třešeň",
    "phon": "la therEtha",
    "example": [
      "Me gustan las cerezas.",
      "Mám rád třešně."
    ],
    "id": 345,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la habitación",
    "cz": "pokoj",
    "phon": "la abitathjOn",
    "example": [
      "La habitación está libre.",
      "Pokoj je volný."
    ],
    "id": 346,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "la vecina",
    "cz": "sousedka",
    "phon": "la bethIna",
    "example": [
      "La vecina tiene un perro.",
      "Sousedka má psa."
    ],
    "id": 347,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el huerto",
    "cz": "zeleninová zahrada",
    "phon": "el uErto",
    "example": [
      "Cultivo tomates en el huerto.",
      "Pěstuji rajčata na zahradě."
    ],
    "id": 348,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el tornillo de banco",
    "cz": "svěrák",
    "phon": "el tornIjo de bAnko",
    "example": [
      "Aprieto el tornillo de banco.",
      "Utahuji svěrák."
    ],
    "id": 349,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el conector",
    "cz": "konektor",
    "phon": "el konektOr",
    "example": [
      "Reviso el conector.",
      "Kontroluji konektor."
    ],
    "id": 350,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "acertar",
    "cz": "trefit se",
    "phon": "athertAr",
    "example": [
      "He acertado en el centro.",
      "Trefil jsem se do středu."
    ],
    "id": 351,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el muelle",
    "cz": "molo",
    "phon": "el muEje",
    "example": [
      "El barco está junto al muelle.",
      "Loď je u mola."
    ],
    "id": 352,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la falta",
    "cz": "faul",
    "phon": "la fAlta",
    "example": [
      "El árbitro pita una falta.",
      "Rozhodčí píská faul."
    ],
    "id": 353,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "octubre",
    "cz": "říjen",
    "phon": "oktUbre",
    "example": [
      "En octubre llega el otoño.",
      "V říjnu přichází podzim."
    ],
    "id": 354,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el Año Nuevo",
    "cz": "Nový rok",
    "phon": "el Aňo nuEbo",
    "example": [
      "Celebramos el Año Nuevo.",
      "Slavíme Nový rok."
    ],
    "id": 355,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "la gasolinera",
    "cz": "čerpací stanice",
    "phon": "la gasolinEra",
    "example": [
      "Busco una gasolinera.",
      "Hledám čerpací stanici."
    ],
    "id": 356,
    "level": 1
  },
  {
    "topic": "Zdraví",
    "pic": "🩺",
    "es": "la ambulancia",
    "cz": "sanitka",
    "phon": "la ambulAnthja",
    "example": [
      "Llama a una ambulancia.",
      "Zavolej sanitku."
    ],
    "id": 357,
    "level": 1
  },
  {
    "topic": "Příroda",
    "pic": "🌿",
    "es": "el trueno",
    "cz": "hrom",
    "phon": "el truEno",
    "example": [
      "Oigo un trueno.",
      "Slyším hrom."
    ],
    "id": 358,
    "level": 2
  },
  {
    "topic": "Úřady a služby",
    "pic": "📄",
    "es": "el electricista",
    "cz": "elektrikář",
    "phon": "el elektrithIsta",
    "example": [
      "Llamo al electricista.",
      "Volám elektrikáři."
    ],
    "id": 359,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿puedes repetir?",
    "cz": "můžeš to zopakovat?",
    "phon": "puEdes rrepetIr",
    "example": [
      "¿Puedes repetir la pregunta?",
      "Můžeš zopakovat otázku?"
    ],
    "id": 360,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "poner",
    "cz": "položit, dát",
    "phon": "ponEr",
    "example": [
      "Pon el vaso aquí.",
      "Polož sklenici sem."
    ],
    "id": 361,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el higo",
    "cz": "fík",
    "phon": "el Igo",
    "example": [
      "Recojo higos.",
      "Sbírám fíky."
    ],
    "id": 362,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el pasillo",
    "cz": "chodba",
    "phon": "el pasIjo",
    "example": [
      "La luz del pasillo funciona.",
      "Světlo na chodbě funguje."
    ],
    "id": 363,
    "level": 2
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el amigo",
    "cz": "kamarád",
    "phon": "el amIgo",
    "example": [
      "Viene un amigo.",
      "Přijde kamarád."
    ],
    "id": 364,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la cosecha",
    "cz": "sklizeň",
    "phon": "la kosEča",
    "example": [
      "La cosecha ha sido buena.",
      "Sklizeň byla dobrá."
    ],
    "id": 365,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la escuadra",
    "cz": "úhelník",
    "phon": "la eskuAdra",
    "example": [
      "Compruebo el ángulo con la escuadra.",
      "Kontroluji úhel úhelníkem."
    ],
    "id": 366,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la puesta a tierra",
    "cz": "uzemnění",
    "phon": "la puEsta a tjErra",
    "example": [
      "Compruebo la puesta a tierra.",
      "Kontroluji uzemnění."
    ],
    "id": 367,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "fallar",
    "cz": "minout, chybovat",
    "phon": "fajAr",
    "example": [
      "He fallado el doble.",
      "Minul jsem dvojité pole."
    ],
    "id": 368,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el velero",
    "cz": "plachetnice",
    "phon": "el belEro",
    "example": [
      "Navegamos en un velero.",
      "Plujeme na plachetnici."
    ],
    "id": 369,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la tarjeta amarilla",
    "cz": "žlutá karta",
    "phon": "la tarchEta amarIja",
    "example": [
      "Recibe una tarjeta amarilla.",
      "Dostává žlutou kartu."
    ],
    "id": 370,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "noviembre",
    "cz": "listopad",
    "phon": "nobjEmbre",
    "example": [
      "En noviembre anochece pronto.",
      "V listopadu se brzy stmívá."
    ],
    "id": 371,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el gasóleo",
    "cz": "motorová nafta",
    "phon": "el gasOleo",
    "example": [
      "Este coche usa gasóleo.",
      "Toto auto jezdí na naftu."
    ],
    "id": 372,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿qué significa?",
    "cz": "co to znamená?",
    "phon": "kE signifIka",
    "example": [
      "¿Qué significa esta palabra?",
      "Co znamená toto slovo?"
    ],
    "id": 373,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "salir",
    "cz": "vyjít, odejít",
    "phon": "salIr",
    "example": [
      "Salgo a las ocho.",
      "Odcházím v osm."
    ],
    "id": 374,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la granada",
    "cz": "granátové jablko",
    "phon": "la granAda",
    "example": [
      "Abro una granada.",
      "Otevírám granátové jablko."
    ],
    "id": 375,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la nevera",
    "cz": "lednice",
    "phon": "la nebEra",
    "example": [
      "La leche está en la nevera.",
      "Mléko je v lednici."
    ],
    "id": 376,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "la amiga",
    "cz": "kamarádka",
    "phon": "la amIga",
    "example": [
      "Llamo a mi amiga.",
      "Volám kamarádce."
    ],
    "id": 377,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el abono",
    "cz": "hnojivo",
    "phon": "el abOno",
    "example": [
      "Añado abono al suelo.",
      "Přidávám do půdy hnojivo."
    ],
    "id": 378,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el nivel",
    "cz": "vodováha",
    "phon": "el nibEl",
    "example": [
      "Compruebo la horizontalidad con el nivel.",
      "Kontroluji vodorovnost vodováhou."
    ],
    "id": 379,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el cortocircuito",
    "cz": "zkrat",
    "phon": "el kortothirkuIto",
    "example": [
      "Ha habido un cortocircuito.",
      "Došlo ke zkratu."
    ],
    "id": 380,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el centro de la diana",
    "cz": "střed terče",
    "phon": "el thEntro de la djAna",
    "example": [
      "Apunta al centro de la diana.",
      "Miř na střed terče."
    ],
    "id": 381,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la lancha",
    "cz": "motorový člun",
    "phon": "la lAnča",
    "example": [
      "Alquilamos una lancha.",
      "Pronajímáme si člun."
    ],
    "id": 382,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la tarjeta roja",
    "cz": "červená karta",
    "phon": "la tarchEta rrOcha",
    "example": [
      "El árbitro muestra la tarjeta roja.",
      "Rozhodčí ukazuje červenou kartu."
    ],
    "id": 383,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "diciembre",
    "cz": "prosinec",
    "phon": "dithjEmbre",
    "example": [
      "Celebramos la Navidad en diciembre.",
      "Slavíme Vánoce v prosinci."
    ],
    "id": 384,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "la autopista",
    "cz": "dálnice",
    "phon": "la autopIsta",
    "example": [
      "Vamos por la autopista.",
      "Jedeme po dálnici."
    ],
    "id": 385,
    "level": 1
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿cómo se dice?",
    "cz": "jak se to řekne?",
    "phon": "kOmo se dIthe",
    "example": [
      "¿Cómo se dice en español?",
      "Jak se to řekne španělsky?"
    ],
    "id": 386,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "entrar",
    "cz": "vstoupit",
    "phon": "entrAr",
    "example": [
      "Puedes entrar.",
      "Můžeš vstoupit."
    ],
    "id": 387,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la mandarina",
    "cz": "mandarinka",
    "phon": "la mandarIna",
    "example": [
      "Pelo una mandarina.",
      "Loupu mandarinku."
    ],
    "id": 388,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el congelador",
    "cz": "mrazák",
    "phon": "el koncheladOr",
    "example": [
      "Guardo carne en el congelador.",
      "Ukládám maso do mrazáku."
    ],
    "id": 389,
    "level": 2
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el pañal",
    "cz": "plena",
    "phon": "el paňAl",
    "example": [
      "Cambio el pañal.",
      "Měním plenu."
    ],
    "id": 390,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el compost",
    "cz": "kompost",
    "phon": "el kompOst",
    "example": [
      "Hacemos compost en casa.",
      "Děláme doma kompost."
    ],
    "id": 391,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el contrachapado",
    "cz": "překližka",
    "phon": "el kontračapAdo",
    "example": [
      "Corto una pieza de contrachapado.",
      "Řežu kus překližky."
    ],
    "id": 392,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el contador eléctrico",
    "cz": "elektroměr",
    "phon": "el kontadOr elEktriko",
    "example": [
      "Leo el contador eléctrico.",
      "Odečítám elektroměr."
    ],
    "id": 393,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el doble veinte",
    "cz": "dvojitá dvacítka",
    "phon": "el dOble bEinte",
    "example": [
      "Necesito el doble veinte.",
      "Potřebuji dvojitou dvacítku."
    ],
    "id": 394,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el remo",
    "cz": "veslo",
    "phon": "el rrEmo",
    "example": [
      "El remo es de madera.",
      "Veslo je dřevěné."
    ],
    "id": 395,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el pase",
    "cz": "přihrávka",
    "phon": "el pAse",
    "example": [
      "El pase ha sido preciso.",
      "Přihrávka byla přesná."
    ],
    "id": 396,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la semana",
    "cz": "týden",
    "phon": "la semAna",
    "example": [
      "Trabajo cinco días a la semana.",
      "Pracuji pět dní v týdnu."
    ],
    "id": 397,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "la rotonda",
    "cz": "kruhový objezd",
    "phon": "la rrotOnda",
    "example": [
      "Sal en la segunda salida de la rotonda.",
      "Vyjeď druhým výjezdem z kruhového objezdu."
    ],
    "id": 398,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "no lo sé",
    "cz": "nevím",
    "phon": "nO lo sE",
    "example": [
      "No lo sé todavía.",
      "Ještě to nevím."
    ],
    "id": 399,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "abrir",
    "cz": "otevřít",
    "phon": "abrIr",
    "example": [
      "Voy a abrir la ventana.",
      "Otevřu okno."
    ],
    "id": 400,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la lechuga",
    "cz": "hlávkový salát",
    "phon": "la lečUga",
    "example": [
      "Lavo la lechuga.",
      "Myji salát."
    ],
    "id": 401,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el horno",
    "cz": "trouba",
    "phon": "el Orno",
    "example": [
      "El horno está caliente.",
      "Trouba je horká."
    ],
    "id": 402,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el chupete",
    "cz": "dudlík",
    "phon": "el čupEte",
    "example": [
      "El bebé busca el chupete.",
      "Miminko hledá dudlík."
    ],
    "id": 403,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la manguera",
    "cz": "hadice",
    "phon": "la mangEra",
    "example": [
      "Riego con la manguera.",
      "Zalévám hadicí."
    ],
    "id": 404,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el aglomerado",
    "cz": "dřevotříska",
    "phon": "el aglomerAdo",
    "example": [
      "El armario es de aglomerado.",
      "Skříň je z dřevotřísky."
    ],
    "id": 405,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la instalación aislada",
    "cz": "ostrovní instalace",
    "phon": "la instalathjOn aislAda",
    "example": [
      "La finca tiene una instalación aislada.",
      "Finca má ostrovní instalaci."
    ],
    "id": 406,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el triple diecinueve",
    "cz": "trojitá devatenáctka",
    "phon": "el trIple djethinuEbe",
    "example": [
      "He acertado en el triple diecinueve.",
      "Trefil jsem trojitou devatenáctku."
    ],
    "id": 407,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la brújula",
    "cz": "kompas",
    "phon": "la brUchula",
    "example": [
      "Consulto la brújula.",
      "Dívám se na kompas."
    ],
    "id": 408,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el disparo",
    "cz": "střela",
    "phon": "el dispAro",
    "example": [
      "El disparo va fuera.",
      "Střela míří mimo."
    ],
    "id": 409,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el mes",
    "cz": "měsíc",
    "phon": "el mEs",
    "example": [
      "El mes termina mañana.",
      "Měsíc končí zítra."
    ],
    "id": 410,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el semáforo",
    "cz": "semafor",
    "phon": "el semAforo",
    "example": [
      "El semáforo está en rojo.",
      "Na semaforu svítí červená."
    ],
    "id": 411,
    "level": 1
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "necesito ayuda",
    "cz": "potřebuji pomoc",
    "phon": "nethesIto ajUda",
    "example": [
      "Necesito ayuda con esto.",
      "Potřebuji s tím pomoc."
    ],
    "id": 412,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "cerrar",
    "cz": "zavřít",
    "phon": "therrAr",
    "example": [
      "Cierra la puerta.",
      "Zavři dveře."
    ],
    "id": 413,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el calabacín",
    "cz": "cuketa",
    "phon": "el kalabathIn",
    "example": [
      "Cocino calabacín.",
      "Vařím cuketu."
    ],
    "id": 414,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la lavadora",
    "cz": "pračka",
    "phon": "la labadOra",
    "example": [
      "Pongo la lavadora.",
      "Zapínám pračku."
    ],
    "id": 415,
    "level": 1
  },
  {
    "topic": "Rodina",
    "pic": "👪",
    "es": "el carrito de bebé",
    "cz": "kočárek",
    "phon": "el karrIto de bebE",
    "example": [
      "Paseamos con el carrito de bebé.",
      "Procházíme se s kočárkem."
    ],
    "id": 416,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el riego por goteo",
    "cz": "kapková závlaha",
    "phon": "el rriEgo por gotEo",
    "example": [
      "Instalo riego por goteo.",
      "Instaluji kapkovou závlahu."
    ],
    "id": 417,
    "level": 3
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el listón",
    "cz": "lať",
    "phon": "el listOn",
    "example": [
      "Atornillo el listón.",
      "Přišroubovávám lať."
    ],
    "id": 418,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la energía renovable",
    "cz": "obnovitelná energie",
    "phon": "la enerchIa rrenobAble",
    "example": [
      "Usamos energía renovable.",
      "Používáme obnovitelnou energii."
    ],
    "id": 419,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la media",
    "cz": "průměr",
    "phon": "la mEdja",
    "example": [
      "Mi media ha mejorado.",
      "Můj průměr se zlepšil."
    ],
    "id": 420,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el faro",
    "cz": "maják",
    "phon": "el fAro",
    "example": [
      "Vemos el faro desde el barco.",
      "Vidíme maják z lodi."
    ],
    "id": 421,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el descanso",
    "cz": "přestávka, odpočinek",
    "phon": "el deskAnso",
    "example": [
      "Llegamos al descanso sin goles.",
      "Do přestávky jsme nedali žádný gól."
    ],
    "id": 422,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el año",
    "cz": "rok",
    "phon": "el Aňo",
    "example": [
      "Llevamos aquí un año.",
      "Jsme tady rok."
    ],
    "id": 423,
    "level": 1
  },
  {
    "topic": "Doprava",
    "pic": "🚗",
    "es": "el aparcamiento",
    "cz": "parkoviště",
    "phon": "el aparkamjEnto",
    "example": [
      "Hay un aparcamiento cerca.",
      "Poblíž je parkoviště."
    ],
    "id": 424,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "llevar",
    "cz": "nést, vozit",
    "phon": "jebAr",
    "example": [
      "Llevo una mochila.",
      "Nesu batoh."
    ],
    "id": 425,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la berenjena",
    "cz": "lilek",
    "phon": "la berenchEna",
    "example": [
      "Asamos berenjenas.",
      "Pečeme lilky."
    ],
    "id": 426,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el lavavajillas",
    "cz": "myčka nádobí",
    "phon": "el lababachIjas",
    "example": [
      "Vacío el lavavajillas.",
      "Vyprazdňuji myčku."
    ],
    "id": 427,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la pala",
    "cz": "lopata",
    "phon": "la pAla",
    "example": [
      "Cavo con una pala.",
      "Kopu lopatou."
    ],
    "id": 428,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la viga",
    "cz": "trám",
    "phon": "la bIga",
    "example": [
      "La viga soporta el tejado.",
      "Trám nese střechu."
    ],
    "id": 429,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la sombra",
    "cz": "stín",
    "phon": "la sOmbra",
    "example": [
      "La sombra reduce la producción solar.",
      "Stín snižuje solární výrobu."
    ],
    "id": 430,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el torneo",
    "cz": "turnaj",
    "phon": "el tornEo",
    "example": [
      "Mañana hay un torneo.",
      "Zítra je turnaj."
    ],
    "id": 431,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la costa",
    "cz": "pobřeží",
    "phon": "la kOsta",
    "example": [
      "Navegamos cerca de la costa.",
      "Plujeme blízko pobřeží."
    ],
    "id": 432,
    "level": 1
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la prórroga",
    "cz": "prodloužení",
    "phon": "la prOrroga",
    "example": [
      "El partido llega a la prórroga.",
      "Zápas dospěl do prodloužení."
    ],
    "id": 433,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la primavera",
    "cz": "jaro",
    "phon": "la primabEra",
    "example": [
      "Me gusta la primavera.",
      "Mám rád jaro."
    ],
    "id": 434,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "traer",
    "cz": "přinést",
    "phon": "traEr",
    "example": [
      "Trae agua, por favor.",
      "Přines vodu, prosím."
    ],
    "id": 435,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la calabaza",
    "cz": "dýně",
    "phon": "la kalabAtha",
    "example": [
      "Hago sopa de calabaza.",
      "Dělám dýňovou polévku."
    ],
    "id": 436,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el sofá",
    "cz": "pohovka",
    "phon": "el sofA",
    "example": [
      "Me siento en el sofá.",
      "Sedám si na pohovku."
    ],
    "id": 437,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el rastrillo",
    "cz": "hrábě",
    "phon": "el rrastrIjo",
    "example": [
      "Recojo hojas con el rastrillo.",
      "Sbírám listí hráběmi."
    ],
    "id": 438,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la veta",
    "cz": "kresba dřeva",
    "phon": "la bEta",
    "example": [
      "Lijo en el sentido de la veta.",
      "Brousím po směru vláken."
    ],
    "id": 439,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la orientación",
    "cz": "orientace",
    "phon": "la orjentathjOn",
    "example": [
      "La orientación del panel es importante.",
      "Orientace panelu je důležitá."
    ],
    "id": 440,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el rival",
    "cz": "soupeř",
    "phon": "el rribAl",
    "example": [
      "Mi rival juega muy bien.",
      "Můj soupeř hraje velmi dobře."
    ],
    "id": 441,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la bahía",
    "cz": "zátoka",
    "phon": "la baIa",
    "example": [
      "La bahía está protegida del viento.",
      "Zátoka je chráněná před větrem."
    ],
    "id": 442,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la afición",
    "cz": "fanoušci, záliba",
    "phon": "la afithjOn",
    "example": [
      "La afición anima al equipo.",
      "Fanoušci povzbuzují tým."
    ],
    "id": 443,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el verano",
    "cz": "léto",
    "phon": "el berAno",
    "example": [
      "El verano es caluroso.",
      "Léto je horké."
    ],
    "id": 444,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "buscar",
    "cz": "hledat",
    "phon": "buskAr",
    "example": [
      "Busco mis llaves.",
      "Hledám klíče."
    ],
    "id": 445,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el brócoli",
    "cz": "brokolice",
    "phon": "el brOkoli",
    "example": [
      "Cuezo el brócoli.",
      "Vařím brokolici."
    ],
    "id": 446,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el armario",
    "cz": "skříň",
    "phon": "el armArjo",
    "example": [
      "La ropa está en el armario.",
      "Oblečení je ve skříni."
    ],
    "id": 447,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la azada",
    "cz": "motyka",
    "phon": "la athAda",
    "example": [
      "Trabajo la tierra con la azada.",
      "Obdělávám půdu motykou."
    ],
    "id": 448,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el nudo",
    "cz": "suk, uzel",
    "phon": "el nUdo",
    "example": [
      "La tabla tiene un nudo.",
      "Prkno má suk."
    ],
    "id": 449,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la inclinación",
    "cz": "sklon",
    "phon": "la inklinathjOn",
    "example": [
      "Ajusto la inclinación del panel.",
      "Nastavuji sklon panelu."
    ],
    "id": 450,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el equipo",
    "cz": "tým",
    "phon": "el ekIpo",
    "example": [
      "Nuestro equipo ha ganado.",
      "Náš tým vyhrál."
    ],
    "id": 451,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la corriente marina",
    "cz": "mořský proud",
    "phon": "la korriEnte marIna",
    "example": [
      "La corriente marina es fuerte.",
      "Mořský proud je silný."
    ],
    "id": 452,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el marcador",
    "cz": "ukazatel skóre",
    "phon": "el markadOr",
    "example": [
      "El marcador indica dos a cero.",
      "Ukazatel skóre ukazuje dva nula."
    ],
    "id": 453,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el otoño",
    "cz": "podzim",
    "phon": "el otOňo",
    "example": [
      "Las hojas caen en otoño.",
      "Listy padají na podzim."
    ],
    "id": 454,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "encontrar",
    "cz": "najít",
    "phon": "enkontrAr",
    "example": [
      "No encuentro el móvil.",
      "Nemohu najít mobil."
    ],
    "id": 455,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la coliflor",
    "cz": "květák",
    "phon": "la koliflOr",
    "example": [
      "La coliflor está lista.",
      "Květák je hotový."
    ],
    "id": 456,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la almohada",
    "cz": "polštář",
    "phon": "la almoAda",
    "example": [
      "La almohada es cómoda.",
      "Polštář je pohodlný."
    ],
    "id": 457,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la carretilla",
    "cz": "kolečko",
    "phon": "la karretIja",
    "example": [
      "Lleno la carretilla de tierra.",
      "Plním kolečko zeminou."
    ],
    "id": 458,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el serrín",
    "cz": "piliny",
    "phon": "el serrIn",
    "example": [
      "Recojo el serrín.",
      "Sbírám piliny."
    ],
    "id": 459,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la bomba de agua",
    "cz": "vodní čerpadlo",
    "phon": "la bOmba de Agua",
    "example": [
      "La bomba de agua funciona.",
      "Vodní čerpadlo funguje."
    ],
    "id": 460,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la victoria",
    "cz": "vítězství",
    "phon": "la biktOrja",
    "example": [
      "Celebramos la victoria.",
      "Slavíme vítězství."
    ],
    "id": 461,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "fondear",
    "cz": "zakotvit",
    "phon": "fondeAr",
    "example": [
      "Vamos a fondear aquí.",
      "Zakotvíme tady."
    ],
    "id": 462,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la clasificación",
    "cz": "tabulka, pořadí",
    "phon": "la klasifikathjOn",
    "example": [
      "Miramos la clasificación de la liga.",
      "Díváme se na tabulku ligy."
    ],
    "id": 463,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el invierno",
    "cz": "zima",
    "phon": "el imbjErno",
    "example": [
      "El invierno es suave aquí.",
      "Zima je tady mírná."
    ],
    "id": 464,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "esperar",
    "cz": "čekat, doufat",
    "phon": "esperAr",
    "example": [
      "Espero el autobús.",
      "Čekám na autobus."
    ],
    "id": 465,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la espinaca",
    "cz": "špenát",
    "phon": "la espinAka",
    "example": [
      "Añado espinacas.",
      "Přidávám špenát."
    ],
    "id": 466,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la manta",
    "cz": "deka",
    "phon": "la mAnta",
    "example": [
      "Necesito una manta.",
      "Potřebuji deku."
    ],
    "id": 467,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "las tijeras de podar",
    "cz": "zahradnické nůžky",
    "phon": "las tichEras de podAr",
    "example": [
      "Uso las tijeras de podar.",
      "Používám zahradnické nůžky."
    ],
    "id": 468,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la viruta",
    "cz": "hobliny, tříska",
    "phon": "la birUta",
    "example": [
      "Hay virutas en el suelo.",
      "Na podlaze jsou hobliny."
    ],
    "id": 469,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el depósito de agua",
    "cz": "nádrž na vodu",
    "phon": "el depOsito de Agua",
    "example": [
      "Llenamos el depósito de agua.",
      "Plníme nádrž na vodu."
    ],
    "id": 470,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la derrota",
    "cz": "porážka",
    "phon": "la derrOta",
    "example": [
      "Aceptamos la derrota.",
      "Přijímáme porážku."
    ],
    "id": 471,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "atracar",
    "cz": "přistát u mola",
    "phon": "atrakAr",
    "example": [
      "El barco acaba de atracar.",
      "Loď právě přistála u mola."
    ],
    "id": 472,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "marcar",
    "cz": "skórovat, označit",
    "phon": "markAr",
    "example": [
      "El delantero quiere marcar.",
      "Útočník chce skórovat."
    ],
    "id": 473,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el fin de semana",
    "cz": "víkend",
    "phon": "el fIn de semAna",
    "example": [
      "Descanso el fin de semana.",
      "Odpočívám o víkendu."
    ],
    "id": 474,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "trabajar",
    "cz": "pracovat",
    "phon": "trabachAr",
    "example": [
      "Trabajo desde casa.",
      "Pracuji z domova."
    ],
    "id": 475,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el champiñón",
    "cz": "žampion",
    "phon": "el čampiňOn",
    "example": [
      "Corto los champiñones.",
      "Krájím žampiony."
    ],
    "id": 476,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la ducha",
    "cz": "sprcha",
    "phon": "la dUča",
    "example": [
      "Me doy una ducha.",
      "Dávám si sprchu."
    ],
    "id": 477,
    "level": 1
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el barniz",
    "cz": "lak",
    "phon": "el barnIth",
    "example": [
      "Aplico una capa de barniz.",
      "Nanáším vrstvu laku."
    ],
    "id": 478,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "vivir",
    "cz": "žít, bydlet",
    "phon": "bibIr",
    "example": [
      "Vivo cerca del mar.",
      "Bydlím blízko moře."
    ],
    "id": 479,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el guisante",
    "cz": "hrášek",
    "phon": "el gisAnte",
    "example": [
      "Los guisantes están tiernos.",
      "Hrášek je měkký."
    ],
    "id": 480,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el enchufe",
    "cz": "zásuvka",
    "phon": "el enčUfe",
    "example": [
      "El enchufe no funciona.",
      "Zásuvka nefunguje."
    ],
    "id": 481,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la bisagra",
    "cz": "pant",
    "phon": "la bisAgra",
    "example": [
      "Cambio la bisagra.",
      "Měním pant."
    ],
    "id": 482,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "aprender",
    "cz": "učit se",
    "phon": "aprendEr",
    "example": [
      "Aprendo español.",
      "Učím se španělsky."
    ],
    "id": 483,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la lenteja",
    "cz": "čočka",
    "phon": "la lentEcha",
    "example": [
      "Preparo lentejas.",
      "Připravuji čočku."
    ],
    "id": 484,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el interruptor",
    "cz": "vypínač",
    "phon": "el interruptOr",
    "example": [
      "Pulsa el interruptor.",
      "Stiskni vypínač."
    ],
    "id": 485,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "el clavo",
    "cz": "hřebík",
    "phon": "el klAbo",
    "example": [
      "Clavo un clavo en la tabla.",
      "Zatloukám hřebík do prkna."
    ],
    "id": 486,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "enseñar",
    "cz": "učit, ukazovat",
    "phon": "enseňAr",
    "example": [
      "Te enseño el taller.",
      "Ukážu ti dílnu."
    ],
    "id": 487,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el garbanzo",
    "cz": "cizrna",
    "phon": "el garbAntho",
    "example": [
      "Los garbanzos están cocidos.",
      "Cizrna je uvařená."
    ],
    "id": 488,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la tubería",
    "cz": "potrubí",
    "phon": "la tuberIa",
    "example": [
      "La tubería pierde agua.",
      "Z potrubí uniká voda."
    ],
    "id": 489,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la tuerca",
    "cz": "matice",
    "phon": "la tuErka",
    "example": [
      "Aprieto la tuerca.",
      "Utahuji matici."
    ],
    "id": 490,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "entender",
    "cz": "rozumět",
    "phon": "entendEr",
    "example": [
      "Entiendo la pregunta.",
      "Rozumím otázce."
    ],
    "id": 491,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la harina",
    "cz": "mouka",
    "phon": "la arIna",
    "example": [
      "Necesito harina para el pan.",
      "Potřebuji mouku na chléb."
    ],
    "id": 492,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la fuga",
    "cz": "únik",
    "phon": "la fUga",
    "example": [
      "Hay una fuga de agua.",
      "Uniká voda."
    ],
    "id": 493,
    "level": 2
  },
  {
    "topic": "Dřevoobrábění",
    "pic": "🪚",
    "es": "la arandela",
    "cz": "podložka",
    "phon": "la arandEla",
    "example": [
      "Coloco una arandela.",
      "Nasazuji podložku."
    ],
    "id": 494,
    "level": 3
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "preguntar",
    "cz": "ptát se",
    "phon": "preguntAr",
    "example": [
      "Voy a preguntar al vecino.",
      "Zeptám se souseda."
    ],
    "id": 495,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la levadura",
    "cz": "droždí",
    "phon": "la lebadUra",
    "example": [
      "Añado la levadura.",
      "Přidávám droždí."
    ],
    "id": 496,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "responder",
    "cz": "odpovědět",
    "phon": "rrespondEr",
    "example": [
      "Responde al mensaje.",
      "Odpověz na zprávu."
    ],
    "id": 497,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el azúcar",
    "cz": "cukr",
    "phon": "el athUkar",
    "example": [
      "No quiero azúcar.",
      "Nechci cukr."
    ],
    "id": 498,
    "level": 1
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "pagar",
    "cz": "platit",
    "phon": "pagAr",
    "example": [
      "Pago con tarjeta.",
      "Platím kartou."
    ],
    "id": 499,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la pimienta",
    "cz": "pepř",
    "phon": "la pimjEnta",
    "example": [
      "Pon un poco de pimienta.",
      "Přidej trochu pepře."
    ],
    "id": 500,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "vender",
    "cz": "prodávat",
    "phon": "bendEr",
    "example": [
      "Venden fruta fresca.",
      "Prodávají čerstvé ovoce."
    ],
    "id": 501,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el vinagre",
    "cz": "ocet",
    "phon": "el binAgre",
    "example": [
      "Aliño con vinagre.",
      "Dochucuji octem."
    ],
    "id": 502,
    "level": 2
  },
  {
    "topic": "Slovesa",
    "pic": "💬",
    "es": "reparar",
    "cz": "opravovat",
    "phon": "rreparAr",
    "example": [
      "Reparo la bicicleta.",
      "Opravuji kolo."
    ],
    "id": 503,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la nata",
    "cz": "smetana",
    "phon": "la nAta",
    "example": [
      "La salsa lleva nata.",
      "Omáčka obsahuje smetanu."
    ],
    "id": 504,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el jamón",
    "cz": "šunka",
    "phon": "el chamOn",
    "example": [
      "Corto el jamón.",
      "Krájím šunku."
    ],
    "id": 505,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la ternera",
    "cz": "telecí maso",
    "phon": "la ternEra",
    "example": [
      "Pedimos ternera.",
      "Objednáváme telecí."
    ],
    "id": 506,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el cerdo",
    "cz": "vepřové maso, prase",
    "phon": "el thErdo",
    "example": [
      "La carne de cerdo está hecha.",
      "Vepřové maso je hotové."
    ],
    "id": 507,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la gamba",
    "cz": "kreveta",
    "phon": "la gAmba",
    "example": [
      "Comemos gambas.",
      "Jíme krevety."
    ],
    "id": 508,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el atún",
    "cz": "tuňák",
    "phon": "el atUn",
    "example": [
      "La ensalada lleva atún.",
      "Salát obsahuje tuňáka."
    ],
    "id": 509,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el arroz integral",
    "cz": "hnědá rýže",
    "phon": "el arrOth integrAl",
    "example": [
      "Prefiero el arroz integral.",
      "Dávám přednost hnědé rýži."
    ],
    "id": 510,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la gubia",
    "cz": "duté dláto",
    "phon": "la gUbja",
    "example": [
      "Uso la gubia para tallar madera.",
      "K vyřezávání dřeva používám duté dláto."
    ],
    "id": 511,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el módulo fotovoltaico",
    "cz": "fotovoltaický modul",
    "phon": "el mOdulo fotoboltAiko",
    "example": [
      "El módulo fotovoltaico está en el tejado.",
      "Fotovoltaický modul je na střeše."
    ],
    "id": 512,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la varilla",
    "cz": "násadka",
    "phon": "la barIja",
    "example": [
      "La varilla del dardo está rota.",
      "Násadka šipky je zlomená."
    ],
    "id": 513,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el catamarán",
    "cz": "katamarán",
    "phon": "el katamarAn",
    "example": [
      "El catamarán tiene dos cascos.",
      "Katamarán má dva trupy."
    ],
    "id": 514,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el lateral",
    "cz": "krajní obránce",
    "phon": "el laterAl",
    "example": [
      "El lateral sube por la banda.",
      "Krajní obránce postupuje po křídle."
    ],
    "id": 515,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cortina",
    "cz": "závěs",
    "phon": "la kortIna",
    "example": [
      "Cierra la cortina, por favor.",
      "Zatáhni závěs, prosím."
    ],
    "id": 516,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la maceta",
    "cz": "květináč",
    "phon": "la mathEta",
    "example": [
      "La maceta necesita un agujero.",
      "Květináč potřebuje otvor."
    ],
    "id": 517,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el amanecer",
    "cz": "svítání",
    "phon": "el amanethEr",
    "example": [
      "Salimos al amanecer.",
      "Vyrážíme za svítání."
    ],
    "id": 518,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la corona de Adviento",
    "cz": "adventní věnec",
    "phon": "la korOna de adbjEnto",
    "example": [
      "Encendemos una vela de la corona de Adviento.",
      "Zapalujeme svíčku na adventním věnci."
    ],
    "id": 519,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿qué hora es?",
    "cz": "kolik je hodin?",
    "phon": "kE Ora Es",
    "example": [
      "Perdona, ¿qué hora es?",
      "Promiň, kolik je hodin?"
    ],
    "id": 520,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la pasta",
    "cz": "těstoviny",
    "phon": "la pAsta",
    "example": [
      "La pasta está lista.",
      "Těstoviny jsou hotové."
    ],
    "id": 521,
    "level": 1
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la escofina",
    "cz": "rašple",
    "phon": "la eskofIna",
    "example": [
      "La escofina sirve para dar forma a la madera.",
      "Rašple slouží k tvarování dřeva."
    ],
    "id": 522,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la irradiación",
    "cz": "sluneční ozáření",
    "phon": "la irradjathjOn",
    "example": [
      "La irradiación es mayor en verano.",
      "Sluneční ozáření je v létě vyšší."
    ],
    "id": 523,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el vuelo",
    "cz": "let šipky",
    "phon": "el buElo",
    "example": [
      "El vuelo del dardo es estable.",
      "Let šipky je stabilní."
    ],
    "id": 524,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el yate",
    "cz": "jachta",
    "phon": "el jAte",
    "example": [
      "El yate está en el puerto.",
      "Jachta je v přístavu."
    ],
    "id": 525,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el central",
    "cz": "střední obránce",
    "phon": "el thentrAl",
    "example": [
      "El central corta el pase.",
      "Střední obránce zachytí přihrávku."
    ],
    "id": 526,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la persiana",
    "cz": "roleta",
    "phon": "la persjAna",
    "example": [
      "Baja la persiana.",
      "Stáhni roletu."
    ],
    "id": 527,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la jardinera",
    "cz": "truhlík",
    "phon": "la chardinEra",
    "example": [
      "He plantado flores en la jardinera.",
      "Zasadil jsem květiny do truhlíku."
    ],
    "id": 528,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el mediodía",
    "cz": "poledne",
    "phon": "el medjodIa",
    "example": [
      "Comemos al mediodía.",
      "Obědváme v poledne."
    ],
    "id": 529,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el calendario de Adviento",
    "cz": "adventní kalendář",
    "phon": "el kalendArjo de adbjEnto",
    "example": [
      "Los niños abren el calendario de Adviento.",
      "Děti otevírají adventní kalendář."
    ],
    "id": 530,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿hablas español?",
    "cz": "mluvíš španělsky?",
    "phon": "Ablas espaňOl",
    "example": [
      "¿Hablas español o inglés?",
      "Mluvíš španělsky, nebo anglicky?"
    ],
    "id": 531,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "los espaguetis",
    "cz": "špagety",
    "phon": "los espagEtis",
    "example": [
      "Los espaguetis llevan tomate.",
      "Špagety jsou s rajčaty."
    ],
    "id": 532,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la lima",
    "cz": "pilník",
    "phon": "la lIma",
    "example": [
      "Quito las rebabas con la lima.",
      "Odstraňuji otřepy pilníkem."
    ],
    "id": 533,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la radiación solar",
    "cz": "sluneční záření",
    "phon": "la rradjathjOn solAr",
    "example": [
      "La radiación solar calienta el agua.",
      "Sluneční záření ohřívá vodu."
    ],
    "id": 534,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el agarre",
    "cz": "úchop",
    "phon": "el agArre",
    "example": [
      "Tengo que mejorar el agarre del dardo.",
      "Musím zlepšit úchop šipky."
    ],
    "id": 535,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la motora",
    "cz": "motorový člun",
    "phon": "la motOra",
    "example": [
      "Alquilamos una motora.",
      "Pronajímáme si motorový člun."
    ],
    "id": 536,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el extremo",
    "cz": "křídelní hráč",
    "phon": "el ekstrEmo",
    "example": [
      "El extremo corre hacia la portería.",
      "Křídelní hráč běží k brance."
    ],
    "id": 537,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la alfombra",
    "cz": "koberec",
    "phon": "la alfOmbra",
    "example": [
      "La alfombra está sucia.",
      "Koberec je špinavý."
    ],
    "id": 538,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el semillero",
    "cz": "výsevní nádoba",
    "phon": "el semijEro",
    "example": [
      "Las semillas están en el semillero.",
      "Semena jsou ve výsevní nádobě."
    ],
    "id": 539,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la medianoche",
    "cz": "půlnoc",
    "phon": "la medjanOče",
    "example": [
      "Llegamos a medianoche.",
      "Dorazíme o půlnoci."
    ],
    "id": 540,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la guirnalda",
    "cz": "girlanda",
    "phon": "la girnAlda",
    "example": [
      "Colgamos una guirnalda en la puerta.",
      "Na dveře věšíme girlandu."
    ],
    "id": 541,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "no hablo mucho español",
    "cz": "nemluvím moc španělsky",
    "phon": "nO Ablo mUčo espaňOl",
    "example": [
      "No hablo mucho español, pero estoy aprendiendo.",
      "Nemluvím moc španělsky, ale učím se."
    ],
    "id": 542,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "los macarrones",
    "cz": "makarony",
    "phon": "los makarrOnes",
    "example": [
      "Preparo macarrones con queso.",
      "Připravuji makarony se sýrem."
    ],
    "id": 543,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el mazo",
    "cz": "palice",
    "phon": "el mAtho",
    "example": [
      "Golpea suavemente con el mazo.",
      "Lehce udeř palicí."
    ],
    "id": 544,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la eficiencia",
    "cz": "účinnost",
    "phon": "la efithjEnthja",
    "example": [
      "La eficiencia del panel disminuye con el calor.",
      "Účinnost panelu s teplem klesá."
    ],
    "id": 545,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la postura",
    "cz": "postoj",
    "phon": "la postUra",
    "example": [
      "Mantén una postura cómoda.",
      "Udržuj pohodlný postoj."
    ],
    "id": 546,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la canoa",
    "cz": "kánoe",
    "phon": "la kanOa",
    "example": [
      "Cruzamos el lago en canoa.",
      "Přejíždíme jezero na kánoi."
    ],
    "id": 547,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el suplente",
    "cz": "náhradník",
    "phon": "el suplEnte",
    "example": [
      "El suplente empieza a calentar.",
      "Náhradník se začíná rozcvičovat."
    ],
    "id": 548,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el felpudo",
    "cz": "rohožka",
    "phon": "el felpUdo",
    "example": [
      "Límpiate los zapatos en el felpudo.",
      "Očisti si boty o rohožku."
    ],
    "id": 549,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el invernadero",
    "cz": "skleník",
    "phon": "el imbernadEro",
    "example": [
      "Cultivo tomates en el invernadero.",
      "Pěstuji rajčata ve skleníku."
    ],
    "id": 550,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el atardecer",
    "cz": "soumrak",
    "phon": "el atardethEr",
    "example": [
      "Paseamos al atardecer.",
      "Procházíme se za soumraku."
    ],
    "id": 551,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el adorno",
    "cz": "ozdoba",
    "phon": "el adOrno",
    "example": [
      "Este adorno es de madera.",
      "Tato ozdoba je ze dřeva."
    ],
    "id": 552,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "más despacio, por favor",
    "cz": "pomaleji, prosím",
    "phon": "mAs despAthjo por fabOr",
    "example": [
      "¿Puedes hablar más despacio, por favor?",
      "Můžeš mluvit pomaleji, prosím?"
    ],
    "id": 553,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la pizza",
    "cz": "pizza",
    "phon": "la pItsa",
    "example": [
      "Pedimos una pizza para compartir.",
      "Objednáváme pizzu napůl."
    ],
    "id": 554,
    "level": 1
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el destornillador",
    "cz": "šroubovák",
    "phon": "el destornijadOr",
    "example": [
      "Necesito un destornillador pequeño.",
      "Potřebuji malý šroubovák."
    ],
    "id": 555,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el rendimiento",
    "cz": "výkonnost",
    "phon": "el rrendimjEnto",
    "example": [
      "El rendimiento del sistema ha mejorado.",
      "Výkonnost systému se zlepšila."
    ],
    "id": 556,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la muñeca",
    "cz": "zápěstí",
    "phon": "la muňEka",
    "example": [
      "Relaja la muñeca al lanzar.",
      "Při hodu uvolni zápěstí."
    ],
    "id": 557,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el kayak",
    "cz": "kajak",
    "phon": "el kajAk",
    "example": [
      "Vamos a remar en kayak.",
      "Pojedeme pádlovat na kajaku."
    ],
    "id": 558,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el banquillo",
    "cz": "lavička náhradníků",
    "phon": "el bankIjo",
    "example": [
      "El entrenador está en el banquillo.",
      "Trenér je na lavičce."
    ],
    "id": 559,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el espejo",
    "cz": "zrcadlo",
    "phon": "el espEcho",
    "example": [
      "El espejo está encima del lavabo.",
      "Zrcadlo je nad umyvadlem."
    ],
    "id": 560,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el sustrato",
    "cz": "substrát",
    "phon": "el sustrAto",
    "example": [
      "Este sustrato retiene mucha humedad.",
      "Tento substrát zadržuje hodně vlhkosti."
    ],
    "id": 561,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la madrugada",
    "cz": "časné ráno",
    "phon": "la madrugAda",
    "example": [
      "Me desperté de madrugada.",
      "Probudil jsem se časně ráno."
    ],
    "id": 562,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el lazo",
    "cz": "mašle",
    "phon": "el lAtho",
    "example": [
      "Pon un lazo en el regalo.",
      "Dej na dárek mašli."
    ],
    "id": 563,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿me puedes ayudar?",
    "cz": "můžeš mi pomoci?",
    "phon": "me puEdes ajudAr",
    "example": [
      "¿Me puedes ayudar con esta caja?",
      "Můžeš mi pomoci s touto krabicí?"
    ],
    "id": 564,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la masa",
    "cz": "těsto",
    "phon": "la mAsa",
    "example": [
      "Deja reposar la masa.",
      "Nech těsto odpočinout."
    ],
    "id": 565,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "los alicates",
    "cz": "kleště",
    "phon": "los alikAtes",
    "example": [
      "Sujeta la pieza con los alicates.",
      "Přidrž součást kleštěmi."
    ],
    "id": 566,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la pérdida",
    "cz": "ztráta",
    "phon": "la pErdida",
    "example": [
      "Hay una pérdida de energía.",
      "Dochází ke ztrátě energie."
    ],
    "id": 567,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el codo",
    "cz": "loket",
    "phon": "el kOdo",
    "example": [
      "No muevas demasiado el codo.",
      "Nehýbej příliš loktem."
    ],
    "id": 568,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la zodiac",
    "cz": "nafukovací člun",
    "phon": "la thodjAk",
    "example": [
      "Llegamos a la playa en una zodiac.",
      "Na pláž jsme dorazili nafukovacím člunem."
    ],
    "id": 569,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la alineación",
    "cz": "sestava",
    "phon": "la alineathjOn",
    "example": [
      "El entrenador anuncia la alineación.",
      "Trenér oznamuje sestavu."
    ],
    "id": 570,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la lámpara",
    "cz": "lampa",
    "phon": "la lAmpara",
    "example": [
      "Enciende la lámpara.",
      "Rozsviť lampu."
    ],
    "id": 571,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la tierra",
    "cz": "zemina",
    "phon": "la tjErra",
    "example": [
      "La tierra está demasiado seca.",
      "Zemina je příliš suchá."
    ],
    "id": 572,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la tarde",
    "cz": "odpoledne",
    "phon": "la tArde",
    "example": [
      "Nos vemos por la tarde.",
      "Uvidíme se odpoledne."
    ],
    "id": 573,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la campana",
    "cz": "zvon",
    "phon": "la kampAna",
    "example": [
      "La campana suena cada hora.",
      "Zvon zní každou hodinu."
    ],
    "id": 574,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿dónde vives?",
    "cz": "kde bydlíš?",
    "phon": "dOnde bIbes",
    "example": [
      "¿Dónde vives ahora?",
      "Kde teď bydlíš?"
    ],
    "id": 575,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el bocadillo",
    "cz": "obložená bageta",
    "phon": "el bokadIjo",
    "example": [
      "Quiero un bocadillo de jamón.",
      "Chci obloženou bagetu se šunkou."
    ],
    "id": 576,
    "level": 1
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la llave inglesa",
    "cz": "nastavitelný klíč",
    "phon": "la jAbe inglEsa",
    "example": [
      "Afloja la tuerca con la llave inglesa.",
      "Povol matici nastavitelným klíčem."
    ],
    "id": 577,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la temperatura",
    "cz": "teplota",
    "phon": "la temperatUra",
    "example": [
      "La temperatura de la batería es alta.",
      "Teplota baterie je vysoká."
    ],
    "id": 578,
    "level": 1
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el hombro",
    "cz": "rameno",
    "phon": "el Ombro",
    "example": [
      "Me duele el hombro después de jugar.",
      "Po hraní mě bolí rameno."
    ],
    "id": 579,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la balsa",
    "cz": "vor",
    "phon": "la bAlsa",
    "example": [
      "Construyeron una balsa de madera.",
      "Postavili dřevěný vor."
    ],
    "id": 580,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la formación",
    "cz": "rozestavení",
    "phon": "la formathjOn",
    "example": [
      "El equipo cambia de formación.",
      "Tým mění rozestavení."
    ],
    "id": 581,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la bombilla",
    "cz": "žárovka",
    "phon": "la bombIja",
    "example": [
      "Hay que cambiar la bombilla.",
      "Je potřeba vyměnit žárovku."
    ],
    "id": 582,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la arcilla",
    "cz": "jíl",
    "phon": "la arthIja",
    "example": [
      "La arcilla se endurece al secarse.",
      "Jíl při vysychání tvrdne."
    ],
    "id": 583,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la noche",
    "cz": "noc",
    "phon": "la nOče",
    "example": [
      "Hace frío por la noche.",
      "V noci je chladno."
    ],
    "id": 584,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el reno",
    "cz": "sob",
    "phon": "el rrEno",
    "example": [
      "El reno tira del trineo.",
      "Sob táhne sáně."
    ],
    "id": 585,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "¿de dónde eres?",
    "cz": "odkud jsi?",
    "phon": "de dOnde Eres",
    "example": [
      "¿De dónde eres exactamente?",
      "Odkud přesně jsi?"
    ],
    "id": 586,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el sándwich",
    "cz": "sendvič",
    "phon": "el sAnduič",
    "example": [
      "Me llevo un sándwich al trabajo.",
      "Beru si sendvič do práce."
    ],
    "id": 587,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la llave Allen",
    "cz": "imbusový klíč",
    "phon": "la jAbe Ajen",
    "example": [
      "Aprieta el tornillo con una llave Allen.",
      "Utáhni šroub imbusovým klíčem."
    ],
    "id": 588,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la refrigeración",
    "cz": "chlazení",
    "phon": "la rrefricherathjOn",
    "example": [
      "El equipo necesita refrigeración.",
      "Zařízení potřebuje chlazení."
    ],
    "id": 589,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la línea de tiro",
    "cz": "odhodová čára",
    "phon": "la lInea de tIro",
    "example": [
      "No pises la línea de tiro.",
      "Nešlapej na odhodovou čáru."
    ],
    "id": 590,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el ferry",
    "cz": "trajekt",
    "phon": "el fErri",
    "example": [
      "El ferry sale a las ocho.",
      "Trajekt odplouvá v osm."
    ],
    "id": 591,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la táctica",
    "cz": "taktika",
    "phon": "la tAktika",
    "example": [
      "La táctica del equipo funciona.",
      "Taktika týmu funguje."
    ],
    "id": 592,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la estantería",
    "cz": "policový regál",
    "phon": "la estanterIa",
    "example": [
      "Pon los libros en la estantería.",
      "Dej knihy do regálu."
    ],
    "id": 593,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la grava",
    "cz": "štěrk",
    "phon": "la grAba",
    "example": [
      "El camino está cubierto de grava.",
      "Cesta je pokrytá štěrkem."
    ],
    "id": 594,
    "photo": "photos/594.webp",
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el minuto",
    "cz": "minuta",
    "phon": "el minUto",
    "example": [
      "Espera un minuto.",
      "Počkej minutu."
    ],
    "id": 595,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el trineo",
    "cz": "sáně",
    "phon": "el trinEo",
    "example": [
      "Los niños bajan en trineo.",
      "Děti sjíždějí na saních."
    ],
    "id": 596,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "soy de Chequia",
    "cz": "jsem z Česka",
    "phon": "sOi de čEkja",
    "example": [
      "Soy de Chequia y vivo en España.",
      "Jsem z Česka a žiji ve Španělsku."
    ],
    "id": 597,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la tostada",
    "cz": "toast",
    "phon": "la tostAda",
    "example": [
      "Quiero una tostada con aceite.",
      "Chci toast s olejem."
    ],
    "id": 598,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la llave de vaso",
    "cz": "nástrčný klíč",
    "phon": "la jAbe de bAso",
    "example": [
      "Usa una llave de vaso de trece milímetros.",
      "Použij třináctimilimetrový nástrčný klíč."
    ],
    "id": 599,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el ventilador",
    "cz": "ventilátor",
    "phon": "el bentiladOr",
    "example": [
      "El ventilador hace ruido.",
      "Ventilátor je hlučný."
    ],
    "id": 600,
    "level": 2
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la distancia de tiro",
    "cz": "odhodová vzdálenost",
    "phon": "la distAnthja de tIro",
    "example": [
      "Comprueba la distancia de tiro.",
      "Zkontroluj odhodovou vzdálenost."
    ],
    "id": 601,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el crucero",
    "cz": "výletní loď",
    "phon": "el kruthEro",
    "example": [
      "El crucero llega mañana.",
      "Výletní loď připlouvá zítra."
    ],
    "id": 602,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la estrategia",
    "cz": "strategie",
    "phon": "la estratEchja",
    "example": [
      "Tenemos que cambiar de estrategia.",
      "Musíme změnit strategii."
    ],
    "id": 603,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el cajón",
    "cz": "zásuvka nábytku",
    "phon": "el kachOn",
    "example": [
      "Los cubiertos están en el cajón.",
      "Příbory jsou v zásuvce."
    ],
    "id": 604,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el mantillo",
    "cz": "mulč",
    "phon": "el mantIjo",
    "example": [
      "El mantillo conserva la humedad del suelo.",
      "Mulč udržuje vlhkost půdy."
    ],
    "id": 605,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el segundo",
    "cz": "sekunda",
    "phon": "el segUndo",
    "example": [
      "Falta un segundo.",
      "Zbývá jedna sekunda."
    ],
    "id": 606,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el muñeco de nieve",
    "cz": "sněhulák",
    "phon": "el muňEko de njEbe",
    "example": [
      "Hicimos un muñeco de nieve.",
      "Postavili jsme sněhuláka."
    ],
    "id": 607,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "muchas gracias",
    "cz": "mnohokrát děkuji",
    "phon": "mUčas grAthjas",
    "example": [
      "Muchas gracias por tu ayuda.",
      "Mnohokrát děkuji za pomoc."
    ],
    "id": 608,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la mermelada",
    "cz": "džem",
    "phon": "la mermelAda",
    "example": [
      "La mermelada es casera.",
      "Džem je domácí."
    ],
    "id": 609,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la carraca",
    "cz": "ráčna",
    "phon": "la karrAka",
    "example": [
      "Afloja la tuerca con la carraca.",
      "Povol matici ráčnou."
    ],
    "id": 610,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el disipador",
    "cz": "chladič",
    "phon": "el disipadOr",
    "example": [
      "El disipador evita que el equipo se caliente demasiado.",
      "Chladič brání přehřívání zařízení."
    ],
    "id": 611,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el rebote",
    "cz": "odraz",
    "phon": "el rrebOte",
    "example": [
      "El rebote del dardo fue inesperado.",
      "Odraz šipky byl nečekaný."
    ],
    "id": 612,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el camarote",
    "cz": "kajuta",
    "phon": "el kamarOte",
    "example": [
      "Dormimos en el camarote de proa.",
      "Spíme v kajutě na přídi."
    ],
    "id": 613,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el contraataque",
    "cz": "protiútok",
    "phon": "el kontraatAke",
    "example": [
      "El equipo marcó en un contraataque.",
      "Tým skóroval z protiútoku."
    ],
    "id": 614,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cómoda",
    "cz": "komoda",
    "phon": "la kOmoda",
    "example": [
      "Guardo los calcetines en la cómoda.",
      "Ponožky ukládám do komody."
    ],
    "id": 615,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el estiércol",
    "cz": "hnůj",
    "phon": "el estjErkol",
    "example": [
      "Añadimos estiércol al huerto.",
      "Do zeleninové zahrady přidáváme hnůj."
    ],
    "id": 616,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la década",
    "cz": "desetiletí",
    "phon": "la dEkada",
    "example": [
      "La casa lleva una década vacía.",
      "Dům je desetiletí prázdný."
    ],
    "id": 617,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el copo de nieve",
    "cz": "sněhová vločka",
    "phon": "el kOpo de njEbe",
    "example": [
      "Un copo de nieve cayó sobre mi mano.",
      "Na ruku mi spadla sněhová vločka."
    ],
    "id": 618,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "de nada",
    "cz": "není zač",
    "phon": "de nAda",
    "example": [
      "Puedes decir: «de nada».",
      "Můžeš říct: „není zač“."
    ],
    "id": 619,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la miel",
    "cz": "med",
    "phon": "la mjEl",
    "example": [
      "Pongo miel en el té.",
      "Dávám si med do čaje."
    ],
    "id": 620,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el cúter",
    "cz": "odlamovací nůž",
    "phon": "el kUter",
    "example": [
      "Corta el cartón con el cúter.",
      "Rozřízni karton odlamovacím nožem."
    ],
    "id": 621,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el acumulador",
    "cz": "akumulátor",
    "phon": "el akumuladOr",
    "example": [
      "El acumulador almacena energía.",
      "Akumulátor uchovává energii."
    ],
    "id": 622,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el dardo de punta blanda",
    "cz": "šipka s měkkým hrotem",
    "phon": "el dArdo de pUnta blAnda",
    "example": [
      "Uso un dardo de punta blanda en esta máquina.",
      "Na tomto automatu používám šipku s měkkým hrotem."
    ],
    "id": 623,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la cabina",
    "cz": "kabina",
    "phon": "la kabIna",
    "example": [
      "La cabina tiene dos ventanas.",
      "Kabina má dvě okna."
    ],
    "id": 624,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la posesión",
    "cz": "držení míče",
    "phon": "la posesjOn",
    "example": [
      "Nuestro equipo domina la posesión del balón.",
      "Náš tým má převahu v držení míče."
    ],
    "id": 625,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la mesilla",
    "cz": "noční stolek",
    "phon": "la mesIja",
    "example": [
      "Dejo el móvil en la mesilla.",
      "Nechávám mobil na nočním stolku."
    ],
    "id": 626,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el fertilizante",
    "cz": "hnojivo",
    "phon": "el fertilithAnte",
    "example": [
      "Este fertilizante es adecuado para tomates.",
      "Toto hnojivo je vhodné pro rajčata."
    ],
    "id": 627,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el siglo",
    "cz": "století",
    "phon": "el sIglo",
    "example": [
      "La iglesia se construyó en el siglo XVIII.",
      "Kostel byl postaven v osmnáctém století."
    ],
    "id": 628,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la chimenea",
    "cz": "krb",
    "phon": "la čimenEa",
    "example": [
      "Encendemos la chimenea en invierno.",
      "V zimě zatápíme v krbu."
    ],
    "id": 629,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "hasta pronto",
    "cz": "brzy na viděnou",
    "phon": "asta prOnto",
    "example": [
      "Puedes decir: «hasta pronto».",
      "Můžeš říct: „brzy na viděnou“."
    ],
    "id": 630,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el chocolate",
    "cz": "čokoláda",
    "phon": "el čokolAte",
    "example": [
      "Prefiero el chocolate negro.",
      "Dávám přednost hořké čokoládě."
    ],
    "id": 631,
    "level": 1
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la grapadora",
    "cz": "sponkovačka",
    "phon": "la grapadOra",
    "example": [
      "Fija la tela con la grapadora.",
      "Připevni látku sponkovačkou."
    ],
    "id": 632,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la celda",
    "cz": "článek",
    "phon": "la thElda",
    "example": [
      "Cada celda tiene su propia tensión.",
      "Každý článek má vlastní napětí."
    ],
    "id": 633,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el dardo de punta de acero",
    "cz": "šipka s ocelovým hrotem",
    "phon": "el dArdo de pUnta de athEro",
    "example": [
      "Este dardo de punta de acero pesa veinte gramos.",
      "Tato šipka s ocelovým hrotem váží dvacet gramů."
    ],
    "id": 634,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la escotilla",
    "cz": "palubní průlez",
    "phon": "la eskotIja",
    "example": [
      "Cierra la escotilla antes de zarpar.",
      "Před vyplutím zavři palubní průlez."
    ],
    "id": 635,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el regate",
    "cz": "klička",
    "phon": "el rregAte",
    "example": [
      "El delantero superó al defensa con un regate.",
      "Útočník překonal obránce kličkou."
    ],
    "id": 636,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el colchón",
    "cz": "matrace",
    "phon": "el kolčOn",
    "example": [
      "Necesitamos un colchón más firme.",
      "Potřebujeme tvrdší matraci."
    ],
    "id": 637,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la regadera",
    "cz": "konev",
    "phon": "la rregadEra",
    "example": [
      "Llena la regadera de agua.",
      "Naplň konev vodou."
    ],
    "id": 638,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el trimestre",
    "cz": "čtvrtletí",
    "phon": "el trimEstre",
    "example": [
      "Pagamos la factura cada trimestre.",
      "Účet platíme každé čtvrtletí."
    ],
    "id": 639,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el calcetín navideño",
    "cz": "vánoční punčocha",
    "phon": "el kalthetIn nabidEňo",
    "example": [
      "Colgamos el calcetín navideño junto a la chimenea.",
      "Vánoční punčochu věšíme vedle krbu."
    ],
    "id": 640,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "buena suerte",
    "cz": "hodně štěstí",
    "phon": "buEna suErte",
    "example": [
      "Puedes decir: «buena suerte».",
      "Můžeš říct: „hodně štěstí“."
    ],
    "id": 641,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la galleta",
    "cz": "sušenka",
    "phon": "la gajEta",
    "example": [
      "La niña quiere otra galleta.",
      "Holčička chce další sušenku."
    ],
    "id": 642,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la grapa",
    "cz": "spona",
    "phon": "la grApa",
    "example": [
      "Quita esa grapa con unos alicates.",
      "Odstraň tu sponu kleštěmi."
    ],
    "id": 643,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el litio",
    "cz": "lithium",
    "phon": "el lItjo",
    "example": [
      "La batería contiene litio.",
      "Baterie obsahuje lithium."
    ],
    "id": 644,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el doble dieciséis",
    "cz": "dvojitá šestnáctka",
    "phon": "el dOble djethisEis",
    "example": [
      "Necesito acertar en el doble dieciséis.",
      "Potřebuji trefit dvojitou šestnáctku."
    ],
    "id": 645,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la barandilla",
    "cz": "zábradlí",
    "phon": "la barandIja",
    "example": [
      "Sujétate a la barandilla.",
      "Přidrž se zábradlí."
    ],
    "id": 646,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el desmarque",
    "cz": "uvolnění od obránce",
    "phon": "el desmArke",
    "example": [
      "El delantero hizo un buen desmarque.",
      "Útočník se dobře uvolnil od obránce."
    ],
    "id": 647,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la sábana",
    "cz": "prostěradlo",
    "phon": "la sAbana",
    "example": [
      "Hay que cambiar la sábana.",
      "Je potřeba vyměnit prostěradlo."
    ],
    "id": 648,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el aspersor",
    "cz": "postřikovač",
    "phon": "el aspersOr",
    "example": [
      "El aspersor riega todo el césped.",
      "Postřikovač zavlažuje celý trávník."
    ],
    "id": 649,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el semestre",
    "cz": "pololetí",
    "phon": "el semEstre",
    "example": [
      "El curso dura un semestre.",
      "Kurz trvá jedno pololetí."
    ],
    "id": 650,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la tarjeta navideña",
    "cz": "vánoční přání",
    "phon": "la tarchEta nabidEňa",
    "example": [
      "Enviamos una tarjeta navideña a los abuelos.",
      "Posíláme prarodičům vánoční přání."
    ],
    "id": 651,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "buen viaje",
    "cz": "šťastnou cestu",
    "phon": "buEm bjAche",
    "example": [
      "Puedes decir: «buen viaje».",
      "Můžeš říct: „šťastnou cestu“."
    ],
    "id": 652,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el bizcocho",
    "cz": "piškotový moučník",
    "phon": "el bithkOčo",
    "example": [
      "He preparado un bizcocho de limón.",
      "Připravil jsem citronový piškotový moučník."
    ],
    "id": 653,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el compás",
    "cz": "kružítko",
    "phon": "el kompAs",
    "example": [
      "Dibuja un círculo con el compás.",
      "Nakresli kružnici kružítkem."
    ],
    "id": 654,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el electrolito",
    "cz": "elektrolyt",
    "phon": "el elektrolIto",
    "example": [
      "El electrolito permite el transporte de iones.",
      "Elektrolyt umožňuje přenos iontů."
    ],
    "id": 655,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el doble diez",
    "cz": "dvojitá desítka",
    "phon": "el dOble djEth",
    "example": [
      "Fallé el doble diez.",
      "Minul jsem dvojitou desítku."
    ],
    "id": 656,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la hélice",
    "cz": "lodní šroub",
    "phon": "la Elithe",
    "example": [
      "La hélice está dañada.",
      "Lodní šroub je poškozený."
    ],
    "id": 657,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el centro",
    "cz": "centr",
    "phon": "el thEntro",
    "example": [
      "El extremo puso un centro al área.",
      "Křídelník poslal centr do pokutového území."
    ],
    "id": 658,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el edredón",
    "cz": "přikrývka",
    "phon": "el edredOn",
    "example": [
      "El edredón es demasiado grueso para el verano.",
      "Přikrývka je na léto příliš silná."
    ],
    "id": 659,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el gotero",
    "cz": "kapkovač",
    "phon": "el gotEro",
    "example": [
      "El gotero está atascado.",
      "Kapkovač je ucpaný."
    ],
    "id": 660,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el calendario",
    "cz": "kalendář",
    "phon": "el kalendArjo",
    "example": [
      "Marca la cita en el calendario.",
      "Vyznač schůzku v kalendáři."
    ],
    "id": 661,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la cena de Nochebuena",
    "cz": "štědrovečerní večeře",
    "phon": "la thEna de nočebuEna",
    "example": [
      "Toda la familia viene a la cena de Nochebuena.",
      "Na štědrovečerní večeři přijde celá rodina."
    ],
    "id": 662,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "buen provecho",
    "cz": "dobrou chuť",
    "phon": "buEm probEčo",
    "example": [
      "Puedes decir: «buen provecho».",
      "Můžeš říct: „dobrou chuť“."
    ],
    "id": 663,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la tarta",
    "cz": "dort",
    "phon": "la tArta",
    "example": [
      "Compramos una tarta de cumpleaños.",
      "Kupujeme narozeninový dort."
    ],
    "id": 664,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el calibre",
    "cz": "posuvné měřítko",
    "phon": "el kalIbre",
    "example": [
      "Mide el diámetro con el calibre.",
      "Změř průměr posuvným měřítkem."
    ],
    "id": 665,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la carga",
    "cz": "nabíjení",
    "phon": "la kArga",
    "example": [
      "La carga de la batería termina al mediodía.",
      "Nabíjení baterie skončí v poledne."
    ],
    "id": 666,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el triple dieciocho",
    "cz": "trojitá osmnáctka",
    "phon": "el trIple djethjOčo",
    "example": [
      "Apunta al triple dieciocho.",
      "Miř na trojitou osmnáctku."
    ],
    "id": 667,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el motor fueraborda",
    "cz": "přívěsný motor",
    "phon": "el motOr fuerabOrda",
    "example": [
      "El motor fueraborda no arranca.",
      "Přívěsný lodní motor nestartuje."
    ],
    "id": 668,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el remate",
    "cz": "zakončení",
    "phon": "el rremAte",
    "example": [
      "El portero detuvo el remate.",
      "Brankář chytil zakončení."
    ],
    "id": 669,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la funda",
    "cz": "povlak",
    "phon": "la fUnda",
    "example": [
      "La funda de la almohada está limpia.",
      "Povlak na polštář je čistý."
    ],
    "id": 670,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la válvula",
    "cz": "ventil",
    "phon": "la bAlbula",
    "example": [
      "Cierra la válvula del agua.",
      "Zavři vodní ventil."
    ],
    "id": 671,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la fecha",
    "cz": "datum",
    "phon": "la fEča",
    "example": [
      "¿Cuál es la fecha de entrega?",
      "Jaké je datum dodání?"
    ],
    "id": 672,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la cabalgata de Reyes",
    "cz": "tříkrálový průvod",
    "phon": "la kabalgAta de rrEjes",
    "example": [
      "Los niños esperan la cabalgata de Reyes.",
      "Děti čekají na tříkrálový průvod."
    ],
    "id": 673,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "salud",
    "cz": "na zdraví",
    "phon": "salUd",
    "example": [
      "Puedes decir: «salud».",
      "Můžeš říct: „na zdraví“."
    ],
    "id": 674,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el helado",
    "cz": "zmrzlina",
    "phon": "el elAdo",
    "example": [
      "Quiero un helado de vainilla.",
      "Chci vanilkovou zmrzlinu."
    ],
    "id": 675,
    "level": 1
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el micrómetro",
    "cz": "mikrometr",
    "phon": "el mikrOmetro",
    "example": [
      "Comprueba el espesor con el micrómetro.",
      "Zkontroluj tloušťku mikrometrem."
    ],
    "id": 676,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la descarga",
    "cz": "vybíjení",
    "phon": "la deskArga",
    "example": [
      "Evita una descarga profunda de la batería.",
      "Vyhni se hlubokému vybití baterie."
    ],
    "id": 677,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el triple diecisiete",
    "cz": "trojitá sedmnáctka",
    "phon": "el trIple djethisjEte",
    "example": [
      "Acertó en el triple diecisiete.",
      "Trefil trojitou sedmnáctku."
    ],
    "id": 678,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el motor intraborda",
    "cz": "vestavěný lodní motor",
    "phon": "el motOr intrabOrda",
    "example": [
      "El motor intraborda necesita mantenimiento.",
      "Vestavěný lodní motor potřebuje údržbu."
    ],
    "id": 679,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el cabezazo",
    "cz": "hlavička",
    "phon": "el kabethAtho",
    "example": [
      "Marcó un gol de cabeza con un potente cabezazo.",
      "Dal gól hlavou po prudké hlavičce."
    ],
    "id": 680,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la toalla",
    "cz": "ručník",
    "phon": "la toAja",
    "example": [
      "Lleva una toalla a la playa.",
      "Vezmi si na pláž ručník."
    ],
    "id": 681,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el filtro",
    "cz": "filtr",
    "phon": "el fIltro",
    "example": [
      "Tenemos que limpiar el filtro.",
      "Musíme vyčistit filtr."
    ],
    "id": 682,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el cumpleaños",
    "cz": "narozeniny",
    "phon": "el kumpleAňos",
    "example": [
      "Mañana es mi cumpleaños.",
      "Zítra mám narozeniny."
    ],
    "id": 683,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el incienso",
    "cz": "kadidlo",
    "phon": "el inthjEnso",
    "example": [
      "El incienso llena la habitación de aroma.",
      "Kadidlo naplňuje místnost vůní."
    ],
    "id": 684,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "felicidades",
    "cz": "blahopřeji",
    "phon": "felithidAdes",
    "example": [
      "Puedes decir: «felicidades».",
      "Můžeš říct: „blahopřeji“."
    ],
    "id": 685,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el flan",
    "cz": "karamelový pudink",
    "phon": "el flAn",
    "example": [
      "De postre hay flan.",
      "Jako dezert je karamelový pudink."
    ],
    "id": 686,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el lápiz",
    "cz": "tužka",
    "phon": "el lApith",
    "example": [
      "Marca la madera con un lápiz.",
      "Označ dřevo tužkou."
    ],
    "id": 687,
    "level": 1
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el ciclo",
    "cz": "cyklus",
    "phon": "el thIklo",
    "example": [
      "La batería ha completado un ciclo de carga.",
      "Baterie dokončila jeden nabíjecí cyklus."
    ],
    "id": 688,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el triple dieciséis",
    "cz": "trojitá šestnáctka",
    "phon": "el trIple djethisEis",
    "example": [
      "Cerró la ronda con un triple dieciséis.",
      "Kolo zakončil trojitou šestnáctkou."
    ],
    "id": 689,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el combustible",
    "cz": "palivo",
    "phon": "el kombustIble",
    "example": [
      "Nos queda poco combustible.",
      "Zbývá nám málo paliva."
    ],
    "id": 690,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la volea",
    "cz": "volej",
    "phon": "la bolEa",
    "example": [
      "El jugador marcó de volea.",
      "Hráč skóroval z voleje."
    ],
    "id": 691,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el jabón",
    "cz": "mýdlo",
    "phon": "el chabOn",
    "example": [
      "Lávate las manos con jabón.",
      "Umyj si ruce mýdlem."
    ],
    "id": 692,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el pozo",
    "cz": "studna",
    "phon": "el pOtho",
    "example": [
      "Sacamos agua del pozo.",
      "Čerpáme vodu ze studny."
    ],
    "id": 693,
    "level": 1
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el aniversario",
    "cz": "výročí",
    "phon": "el anibersArjo",
    "example": [
      "Hoy celebramos nuestro aniversario.",
      "Dnes slavíme naše výročí."
    ],
    "id": 694,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la mirra",
    "cz": "myrha",
    "phon": "la mIrra",
    "example": [
      "La mirra tiene un aroma intenso.",
      "Myrha má výraznou vůni."
    ],
    "id": 695,
    "level": 3
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "no te preocupes",
    "cz": "nedělej si starosti",
    "phon": "nO te preokUpes",
    "example": [
      "Puedes decir: «no te preocupes».",
      "Můžeš říct: „nedělej si starosti“."
    ],
    "id": 696,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la almendra",
    "cz": "mandle",
    "phon": "la almEndra",
    "example": [
      "Añade una almendra a cada galleta.",
      "Přidej na každou sušenku jednu mandli."
    ],
    "id": 697,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la regla",
    "cz": "pravítko",
    "phon": "la rrEgla",
    "example": [
      "Traza una línea recta con la regla.",
      "Narýsuj rovnou čáru pravítkem."
    ],
    "id": 698,
    "level": 1
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la autonomía",
    "cz": "výdrž",
    "phon": "la autonomIa",
    "example": [
      "La batería ofrece dos días de autonomía.",
      "Baterie poskytuje výdrž dva dny."
    ],
    "id": 699,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el doble uno",
    "cz": "dvojitá jednička",
    "phon": "el dOble Uno",
    "example": [
      "Solo me queda el doble uno.",
      "Zbývá mi už jen dvojitá jednička."
    ],
    "id": 700,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el depósito de combustible",
    "cz": "palivová nádrž",
    "phon": "el depOsito de kombustIble",
    "example": [
      "El depósito de combustible está lleno.",
      "Palivová nádrž je plná."
    ],
    "id": 701,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el larguero",
    "cz": "břevno",
    "phon": "el largEro",
    "example": [
      "El balón golpeó el larguero.",
      "Míč narazil do břevna."
    ],
    "id": 702,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el champú",
    "cz": "šampon",
    "phon": "el čampU",
    "example": [
      "Se nos ha acabado el champú.",
      "Došel nám šampon."
    ],
    "id": 703,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el aljibe",
    "cz": "zásobní nádrž na vodu",
    "phon": "el alchIbe",
    "example": [
      "El aljibe recoge agua de lluvia.",
      "Zásobní nádrž zachytává dešťovou vodu."
    ],
    "id": 704,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el festivo",
    "cz": "sváteční den",
    "phon": "el festIbo",
    "example": [
      "El lunes es festivo.",
      "V pondělí je svátek."
    ],
    "id": 705,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "el oro",
    "cz": "zlato",
    "phon": "el Oro",
    "example": [
      "El anillo es de oro.",
      "Prsten je ze zlata."
    ],
    "id": 706,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "un momento",
    "cz": "okamžik",
    "phon": "Un momEnto",
    "example": [
      "Puedes decir: «un momento».",
      "Můžeš říct: „okamžik“."
    ],
    "id": 707,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la nuez",
    "cz": "vlašský ořech",
    "phon": "la nuEth",
    "example": [
      "Parte la nuez con cuidado.",
      "Opatrně rozlouskni vlašský ořech."
    ],
    "id": 708,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la plantilla",
    "cz": "šablona",
    "phon": "la plantIja",
    "example": [
      "Utiliza una plantilla para marcar los agujeros.",
      "Použij šablonu k označení otvorů."
    ],
    "id": 709,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el generador",
    "cz": "generátor",
    "phon": "el cheneradOr",
    "example": [
      "El generador funciona cuando falta electricidad.",
      "Generátor funguje při výpadku elektřiny."
    ],
    "id": 710,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el cero",
    "cz": "nula",
    "phon": "el thEro",
    "example": [
      "El marcador ha vuelto a cero.",
      "Počítadlo se vrátilo na nulu."
    ],
    "id": 711,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el molinete",
    "cz": "kotevní vrátek",
    "phon": "el molinEte",
    "example": [
      "El molinete recoge la cadena del ancla.",
      "Kotevní vrátek navíjí kotevní řetěz."
    ],
    "id": 712,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el poste",
    "cz": "tyč",
    "phon": "el pOste",
    "example": [
      "El disparo dio en el poste.",
      "Střela zasáhla tyč."
    ],
    "id": 713,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el cepillo de dientes",
    "cz": "zubní kartáček",
    "phon": "el thepIjo de djEntes",
    "example": [
      "He olvidado mi cepillo de dientes.",
      "Zapomněl jsem si zubní kartáček."
    ],
    "id": 714,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la acequia",
    "cz": "zavlažovací kanál",
    "phon": "la athEkja",
    "example": [
      "La acequia lleva agua a los campos.",
      "Zavlažovací kanál přivádí vodu na pole."
    ],
    "id": 715,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "las vacaciones",
    "cz": "dovolená",
    "phon": "las bakathjOnes",
    "example": [
      "Pasamos las vacaciones en la costa.",
      "Trávíme dovolenou na pobřeží."
    ],
    "id": 716,
    "level": 1
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la lotería de Navidad",
    "cz": "vánoční loterie",
    "phon": "la loterIa de nabidAd",
    "example": [
      "La lotería de Navidad se celebra en diciembre.",
      "Vánoční loterie se koná v prosinci."
    ],
    "id": 717,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "por aquí",
    "cz": "tudy",
    "phon": "por akI",
    "example": [
      "Puedes decir: «por aquí».",
      "Můžeš říct: „tudy“."
    ],
    "id": 718,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la avellana",
    "cz": "lískový ořech",
    "phon": "la abejAna",
    "example": [
      "La avellana tiene una cáscara dura.",
      "Lískový ořech má tvrdou skořápku."
    ],
    "id": 719,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el punzón",
    "cz": "důlčík",
    "phon": "el punthOn",
    "example": [
      "Marca el centro con el punzón.",
      "Označ střed důlčíkem."
    ],
    "id": 720,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el alternador",
    "cz": "alternátor",
    "phon": "el alternadOr",
    "example": [
      "El alternador carga la batería del coche.",
      "Alternátor nabíjí autobaterii."
    ],
    "id": 721,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la ronda",
    "cz": "kolo",
    "phon": "la rrOnda",
    "example": [
      "Ganamos la primera ronda.",
      "Vyhráli jsme první kolo."
    ],
    "id": 722,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la cadena del ancla",
    "cz": "kotevní řetěz",
    "phon": "la kadEna del Ankla",
    "example": [
      "La cadena del ancla está oxidada.",
      "Kotevní řetěz je zrezivělý."
    ],
    "id": 723,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la red de la portería",
    "cz": "síť branky",
    "phon": "la rrEd de la porterIa",
    "example": [
      "Hay un agujero en la red de la portería.",
      "V síti branky je díra."
    ],
    "id": 724,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la pasta de dientes",
    "cz": "zubní pasta",
    "phon": "la pAsta de djEntes",
    "example": [
      "Compra un tubo de pasta de dientes.",
      "Kup tubu zubní pasty."
    ],
    "id": 725,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el bancal",
    "cz": "záhon",
    "phon": "el bankAl",
    "example": [
      "Plantamos lechugas en el bancal.",
      "Na záhon sázíme salát."
    ],
    "id": 726,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el horario",
    "cz": "časový rozvrh",
    "phon": "el orArjo",
    "example": [
      "Consulta el horario de apertura.",
      "Podívej se na otevírací dobu."
    ],
    "id": 727,
    "level": 2
  },
  {
    "topic": "Vánoce",
    "pic": "🎄",
    "es": "la celebración",
    "cz": "oslava",
    "phon": "la thelebrathjOn",
    "example": [
      "La celebración será en casa.",
      "Oslava bude doma."
    ],
    "id": 728,
    "level": 2
  },
  {
    "topic": "Komunikace",
    "pic": "💬",
    "es": "por allí",
    "cz": "tamhle",
    "phon": "por ajI",
    "example": [
      "Puedes decir: «por allí».",
      "Můžeš říct: „tamhle“."
    ],
    "id": 729,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el pistacho",
    "cz": "pistácie",
    "phon": "el pistAčo",
    "example": [
      "Este helado lleva pistacho.",
      "Tato zmrzlina obsahuje pistácie."
    ],
    "id": 730,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la barrena",
    "cz": "nebozez",
    "phon": "la barrEna",
    "example": [
      "Haz un pequeño agujero con la barrena.",
      "Udělej nebozezem malý otvor."
    ],
    "id": 731,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el transformador",
    "cz": "transformátor",
    "phon": "el transformadOr",
    "example": [
      "El transformador reduce la tensión.",
      "Transformátor snižuje napětí."
    ],
    "id": 732,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la semifinal",
    "cz": "semifinále",
    "phon": "la semifinAl",
    "example": [
      "Jugamos la semifinal el sábado.",
      "Semifinále hrajeme v sobotu."
    ],
    "id": 733,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la cornamusa",
    "cz": "vazák",
    "phon": "la kornamUsa",
    "example": [
      "Sujeta el cabo a la cornamusa.",
      "Upevni lano k vazáku."
    ],
    "id": 734,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el área",
    "cz": "pokutové území",
    "phon": "el Area",
    "example": [
      "El defensa cometió una falta dentro del área.",
      "Obránce fauloval v pokutovém území."
    ],
    "id": 735,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el lavabo",
    "cz": "umyvadlo",
    "phon": "el labAbo",
    "example": [
      "El lavabo está atascado.",
      "Umyvadlo je ucpané."
    ],
    "id": 736,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el surco",
    "cz": "brázda",
    "phon": "el sUrko",
    "example": [
      "Siembra las semillas en el surco.",
      "Vysej semena do brázdy."
    ],
    "id": 737,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el plazo",
    "cz": "lhůta",
    "phon": "el plAtho",
    "example": [
      "El plazo termina mañana.",
      "Lhůta končí zítra."
    ],
    "id": 738,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el cacahuete",
    "cz": "arašíd",
    "phon": "el kakauEte",
    "example": [
      "Soy alérgico al cacahuete.",
      "Jsem alergický na arašídy."
    ],
    "id": 739,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el avellanador",
    "cz": "záhlubník",
    "phon": "el abejanadOr",
    "example": [
      "Usa el avellanador para alojar la cabeza del tornillo.",
      "Použij záhlubník k zapuštění hlavy šroubu."
    ],
    "id": 740,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el rectificador",
    "cz": "usměrňovač",
    "phon": "el rrektifikadOr",
    "example": [
      "El rectificador convierte la corriente alterna en continua.",
      "Usměrňovač převádí střídavý proud na stejnosměrný."
    ],
    "id": 741,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la final",
    "cz": "finále",
    "phon": "la finAl",
    "example": [
      "La final empieza a las ocho.",
      "Finále začíná v osm."
    ],
    "id": 742,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la defensa de barco",
    "cz": "lodní odrazník",
    "phon": "la defEnsa de bArko",
    "example": [
      "Coloca la defensa de barco junto al muelle.",
      "Umísti lodní odrazník ke straně u mola."
    ],
    "id": 743,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el círculo central",
    "cz": "středový kruh",
    "phon": "el thIrkulo thentrAl",
    "example": [
      "Los jugadores esperan en el círculo central.",
      "Hráči čekají ve středovém kruhu."
    ],
    "id": 744,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el inodoro",
    "cz": "toaleta",
    "phon": "el inodOro",
    "example": [
      "El inodoro pierde agua.",
      "Z toalety uniká voda."
    ],
    "id": 745,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la plántula",
    "cz": "sazenice",
    "phon": "la plAntula",
    "example": [
      "Protege la plántula del frío.",
      "Chraň sazenici před chladem."
    ],
    "id": 746,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el retraso",
    "cz": "zpoždění",
    "phon": "el rretrAso",
    "example": [
      "El tren lleva diez minutos de retraso.",
      "Vlak má deset minut zpoždění."
    ],
    "id": 747,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la pasa",
    "cz": "rozinka",
    "phon": "la pAsa",
    "example": [
      "Encontré una pasa en el bizcocho.",
      "V moučníku jsem našel rozinku."
    ],
    "id": 748,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la espiga",
    "cz": "dřevěný kolík",
    "phon": "la espIga",
    "example": [
      "Une las piezas con una espiga de madera.",
      "Spoj díly dřevěným kolíkem."
    ],
    "id": 749,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el relé",
    "cz": "relé",
    "phon": "el rrelE",
    "example": [
      "El relé controla la bomba.",
      "Relé ovládá čerpadlo."
    ],
    "id": 750,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el campeón",
    "cz": "šampion",
    "phon": "el kampeOn",
    "example": [
      "El campeón recibió un trofeo.",
      "Šampion dostal trofej."
    ],
    "id": 751,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el amarre",
    "cz": "vyvázání lodi",
    "phon": "el amArre",
    "example": [
      "Comprueba el amarre antes de dejar el barco.",
      "Před opuštěním lodi zkontroluj vyvázání."
    ],
    "id": 752,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la línea de banda",
    "cz": "postranní čára",
    "phon": "la lInea de bAnda",
    "example": [
      "El balón cruzó la línea de banda.",
      "Míč překročil postranní čáru."
    ],
    "id": 753,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la bañera",
    "cz": "vana",
    "phon": "la baňEra",
    "example": [
      "La niña juega en la bañera.",
      "Holčička si hraje ve vaně."
    ],
    "id": 754,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el brote",
    "cz": "výhonek",
    "phon": "el brOte",
    "example": [
      "Ha salido un brote nuevo.",
      "Vyrostl nový výhonek."
    ],
    "id": 755,
    "level": 2
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la puntualidad",
    "cz": "dochvilnost",
    "phon": "la puntualidAd",
    "example": [
      "En esta empresa valoran la puntualidad.",
      "V této firmě si cení dochvilnosti."
    ],
    "id": 756,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el dátil",
    "cz": "datle",
    "phon": "el dAtil",
    "example": [
      "El dátil es muy dulce.",
      "Datle je velmi sladká."
    ],
    "id": 757,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el tarugo",
    "cz": "hmoždinka",
    "phon": "el tarUgo",
    "example": [
      "Introduce el tarugo en el agujero.",
      "Vlož hmoždinku do otvoru."
    ],
    "id": 758,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el contactor",
    "cz": "stykač",
    "phon": "el kontaktOr",
    "example": [
      "El contactor conecta el motor a la red.",
      "Stykač připojuje motor k síti."
    ],
    "id": 759,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el campeonato",
    "cz": "mistrovství",
    "phon": "el kampeonAto",
    "example": [
      "Participamos en el campeonato regional.",
      "Účastníme se regionálního mistrovství."
    ],
    "id": 760,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la marina",
    "cz": "jachtní přístav",
    "phon": "la marIna",
    "example": [
      "Dejamos el barco en la marina.",
      "Necháváme loď v jachetním přístavu."
    ],
    "id": 761,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la línea de fondo",
    "cz": "branková čára",
    "phon": "la lInea de fOndo",
    "example": [
      "El balón salió por la línea de fondo.",
      "Míč přešel přes brankovou čáru."
    ],
    "id": 762,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el desagüe",
    "cz": "odtok",
    "phon": "el desagUe",
    "example": [
      "El desagüe de la ducha está obstruido.",
      "Odtok sprchy je ucpaný."
    ],
    "id": 763,
    "level": 3
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el esqueje",
    "cz": "řízek rostliny",
    "phon": "el eskEche",
    "example": [
      "Pon el esqueje en agua.",
      "Dej řízek rostliny do vody."
    ],
    "id": 764,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "la agenda",
    "cz": "diář",
    "phon": "la achEnda",
    "example": [
      "Anoto las reuniones en mi agenda.",
      "Schůzky si zapisuji do diáře."
    ],
    "id": 765,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el coco",
    "cz": "kokos",
    "phon": "el kOko",
    "example": [
      "Abre el coco con cuidado.",
      "Opatrně otevři kokos."
    ],
    "id": 766,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el tirafondo",
    "cz": "vrut do dřeva",
    "phon": "el tirafOndo",
    "example": [
      "Fija la tabla con un tirafondo.",
      "Připevni prkno vrutem do dřeva."
    ],
    "id": 767,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el disyuntor",
    "cz": "jistič",
    "phon": "el disjuntOr",
    "example": [
      "El disyuntor protege el circuito.",
      "Jistič chrání obvod."
    ],
    "id": 768,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la pareja de juego",
    "cz": "herní dvojice",
    "phon": "la parEcha de chuEgo",
    "example": [
      "Mi pareja de juego llega en cinco minutos.",
      "Můj spoluhráč z dvojice dorazí za pět minut."
    ],
    "id": 769,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el pantalán",
    "cz": "plovoucí molo",
    "phon": "el pantalAn",
    "example": [
      "El barco está junto al pantalán.",
      "Loď je u plovoucího mola."
    ],
    "id": 770,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el saque de puerta",
    "cz": "odkop od branky",
    "phon": "el sAke de puErta",
    "example": [
      "El portero ejecuta el saque de puerta.",
      "Brankář provádí odkop od branky."
    ],
    "id": 771,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el sifón",
    "cz": "sifon",
    "phon": "el sifOn",
    "example": [
      "Hay una fuga en el sifón.",
      "Ze sifonu uniká voda."
    ],
    "id": 772,
    "level": 3
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el injerto",
    "cz": "roub",
    "phon": "el inchErto",
    "example": [
      "El injerto ha prendido bien.",
      "Roub se dobře ujal."
    ],
    "id": 773,
    "level": 3
  },
  {
    "topic": "Kalendář",
    "pic": "📅",
    "es": "el despertador",
    "cz": "budík",
    "phon": "el despertadOr",
    "example": [
      "No necesito el despertador los domingos.",
      "V neděli nepotřebuji budík."
    ],
    "id": 774,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la papaya",
    "cz": "papája",
    "phon": "la papAja",
    "example": [
      "Corta la papaya por la mitad.",
      "Rozkroj papáju napůl."
    ],
    "id": 775,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la rosca",
    "cz": "závit",
    "phon": "la rrOska",
    "example": [
      "La rosca del tornillo está dañada.",
      "Závit šroubu je poškozený."
    ],
    "id": 776,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el diferencial",
    "cz": "proudový chránič",
    "phon": "el diferenthjAl",
    "example": [
      "El diferencial ha saltado.",
      "Proudový chránič vybavil."
    ],
    "id": 777,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el entrenamiento",
    "cz": "trénink",
    "phon": "el entrenamjEnto",
    "example": [
      "Hoy tenemos entrenamiento de dardos.",
      "Dnes máme šipkový trénink."
    ],
    "id": 778,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la carta náutica",
    "cz": "námořní mapa",
    "phon": "la kArta nAutika",
    "example": [
      "Consulta la carta náutica antes de salir.",
      "Před vyplutím se podívej do námořní mapy."
    ],
    "id": 779,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el saque inicial",
    "cz": "výkop",
    "phon": "el sAke inithjAl",
    "example": [
      "El árbitro señala el saque inicial.",
      "Rozhodčí dává pokyn k výkopu."
    ],
    "id": 780,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cisterna",
    "cz": "splachovací nádržka",
    "phon": "la thistErna",
    "example": [
      "La cisterna no se llena.",
      "Splachovací nádržka se nenapouští."
    ],
    "id": 781,
    "level": 3
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la poda",
    "cz": "prořezávání",
    "phon": "la pOda",
    "example": [
      "La poda del olivo requiere experiencia.",
      "Prořezávání olivovníku vyžaduje zkušenosti."
    ],
    "id": 782,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el kiwi",
    "cz": "kiwi",
    "phon": "el kIui",
    "example": [
      "Pela el kiwi antes de comerlo.",
      "Před jídlem kiwi oloupej."
    ],
    "id": 783,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la abrazadera",
    "cz": "objímka",
    "phon": "la abrathadEra",
    "example": [
      "Aprieta la abrazadera de la manguera.",
      "Utáhni objímku hadice."
    ],
    "id": 784,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el cuadro eléctrico",
    "cz": "rozvaděč",
    "phon": "el kuAdro elEktriko",
    "example": [
      "El cuadro eléctrico está en el garaje.",
      "Elektrický rozvaděč je v garáži."
    ],
    "id": 785,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la precisión",
    "cz": "přesnost",
    "phon": "la prethisjOn",
    "example": [
      "La precisión mejora con la práctica.",
      "Přesnost se zlepšuje tréninkem."
    ],
    "id": 786,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la sonda",
    "cz": "hloubkoměr",
    "phon": "la sOnda",
    "example": [
      "La sonda indica cinco metros de profundidad.",
      "Hloubkoměr ukazuje hloubku pět metrů."
    ],
    "id": 787,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el tiro libre",
    "cz": "volný kop",
    "phon": "el tIro lIbre",
    "example": [
      "El árbitro concede un tiro libre.",
      "Rozhodčí nařizuje volný kop."
    ],
    "id": 788,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el cubo",
    "cz": "kbelík",
    "phon": "el kUbo",
    "example": [
      "Llena el cubo de agua.",
      "Naplň kbelík vodou."
    ],
    "id": 789,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la germinación",
    "cz": "klíčení",
    "phon": "la cherminathjOn",
    "example": [
      "La humedad favorece la germinación.",
      "Vlhkost podporuje klíčení."
    ],
    "id": 790,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el melón",
    "cz": "cukrový meloun",
    "phon": "el melOn",
    "example": [
      "El melón está maduro.",
      "Cukrový meloun je zralý."
    ],
    "id": 791,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la prensa",
    "cz": "lis",
    "phon": "la prEnsa",
    "example": [
      "La prensa ejerce mucha fuerza.",
      "Lis vyvíjí velkou sílu."
    ],
    "id": 792,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el terminal",
    "cz": "svorka",
    "phon": "el terminAl",
    "example": [
      "El terminal del cable está flojo.",
      "Svorka kabelu je uvolněná."
    ],
    "id": 793,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la concentración",
    "cz": "soustředění",
    "phon": "la konthentrathjOn",
    "example": [
      "Necesito concentración para cerrar la partida.",
      "Potřebuji soustředění k zavření hry."
    ],
    "id": 794,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el calado",
    "cz": "ponor",
    "phon": "el kalAdo",
    "example": [
      "El calado del barco es de dos metros.",
      "Ponor lodi je dva metry."
    ],
    "id": 795,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la barrera",
    "cz": "zeď",
    "phon": "la barrEra",
    "example": [
      "Los defensas forman una barrera.",
      "Obránci tvoří zeď."
    ],
    "id": 796,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la fregona",
    "cz": "mop",
    "phon": "la fregOna",
    "example": [
      "Limpia el suelo con la fregona.",
      "Vytři podlahu mopem."
    ],
    "id": 797,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la polinización",
    "cz": "opylování",
    "phon": "la polinithathjOn",
    "example": [
      "Las abejas favorecen la polinización.",
      "Včely podporují opylování."
    ],
    "id": 798,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la frambuesa",
    "cz": "malina",
    "phon": "la frambuEsa",
    "example": [
      "La frambuesa está un poco ácida.",
      "Malina je trochu kyselá."
    ],
    "id": 799,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el torno",
    "cz": "soustruh",
    "phon": "el tOrno",
    "example": [
      "Fabricamos el eje en el torno.",
      "Hřídel vyrábíme na soustruhu."
    ],
    "id": 800,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el conductor",
    "cz": "vodič",
    "phon": "el konduktOr",
    "example": [
      "El cobre es un buen conductor eléctrico.",
      "Měď je dobrý elektrický vodič."
    ],
    "id": 801,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "la presión",
    "cz": "tlak",
    "phon": "la presjOn",
    "example": [
      "Juego peor bajo presión.",
      "Pod tlakem hraji hůř."
    ],
    "id": 802,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la eslora",
    "cz": "délka lodi",
    "phon": "la eslOra",
    "example": [
      "La eslora del velero es de doce metros.",
      "Délka plachetnice je dvanáct metrů."
    ],
    "id": 803,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la entrada",
    "cz": "obranný zákrok",
    "phon": "la entrAda",
    "example": [
      "El defensa hizo una entrada limpia.",
      "Obránce provedl čistý obranný zákrok."
    ],
    "id": 804,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la escoba",
    "cz": "koště",
    "phon": "la eskOba",
    "example": [
      "Barre la terraza con la escoba.",
      "Zameť terasu koštětem."
    ],
    "id": 805,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el fruto",
    "cz": "plod",
    "phon": "el frUto",
    "example": [
      "El fruto todavía está verde.",
      "Plod je ještě zelený."
    ],
    "id": 806,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la mora",
    "cz": "ostružina",
    "phon": "la mOra",
    "example": [
      "Recogimos una mora junto al camino.",
      "U cesty jsme utrhli ostružinu."
    ],
    "id": 807,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la soldadora",
    "cz": "svářečka",
    "phon": "la soldadOra",
    "example": [
      "La soldadora está en el taller.",
      "Svářečka je v dílně."
    ],
    "id": 808,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el aislante",
    "cz": "izolant",
    "phon": "el aislAnte",
    "example": [
      "Este material funciona como aislante eléctrico.",
      "Tento materiál funguje jako elektrický izolant."
    ],
    "id": 809,
    "level": 3
  },
  {
    "topic": "Šipky",
    "pic": "🎯",
    "es": "el empate a puntos",
    "cz": "bodová remíza",
    "phon": "el empAte a pUntos",
    "example": [
      "El empate a puntos se resolverá en otra partida.",
      "Bodová remíza se rozhodne v další hře."
    ],
    "id": 810,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la manga",
    "cz": "šířka lodi",
    "phon": "la mAnga",
    "example": [
      "La manga del barco es de cuatro metros.",
      "Šířka lodi je čtyři metry."
    ],
    "id": 811,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la lesión",
    "cz": "zranění",
    "phon": "la lesjOn",
    "example": [
      "El jugador no participa por una lesión.",
      "Hráč se neúčastní kvůli zranění."
    ],
    "id": 812,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el recogedor",
    "cz": "lopatka na smetí",
    "phon": "el rrekochedOr",
    "example": [
      "Recoge el polvo con el recogedor.",
      "Seber prach lopatkou na smetí."
    ],
    "id": 813,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la pulpa",
    "cz": "dužina",
    "phon": "la pUlpa",
    "example": [
      "La pulpa del mango es muy jugosa.",
      "Dužina manga je velmi šťavnatá."
    ],
    "id": 814,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el arándano",
    "cz": "borůvka",
    "phon": "el arAndano",
    "example": [
      "El arándano es pequeño y dulce.",
      "Borůvka je malá a sladká."
    ],
    "id": 815,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el electrodo",
    "cz": "elektroda",
    "phon": "el elektrOdo",
    "example": [
      "Cambia el electrodo de la soldadora.",
      "Vyměň elektrodu svářečky."
    ],
    "id": 816,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la resistencia",
    "cz": "odpor",
    "phon": "la rresistEnthja",
    "example": [
      "Mide la resistencia con el multímetro.",
      "Změř odpor multimetrem."
    ],
    "id": 817,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la tripulación",
    "cz": "posádka",
    "phon": "la tripulathjOn",
    "example": [
      "La tripulación prepara el barco para zarpar.",
      "Posádka připravuje loď k vyplutí."
    ],
    "id": 818,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la sustitución",
    "cz": "střídání",
    "phon": "la sustituthjOn",
    "example": [
      "El entrenador prepara una sustitución.",
      "Trenér připravuje střídání."
    ],
    "id": 819,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el trapo",
    "cz": "hadr",
    "phon": "el trApo",
    "example": [
      "Limpia la mesa con un trapo.",
      "Otři stůl hadrem."
    ],
    "id": 820,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la cáscara",
    "cz": "slupka",
    "phon": "la kAskara",
    "example": [
      "Tira la cáscara al compost.",
      "Vyhoď slupku do kompostu."
    ],
    "id": 821,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el apio",
    "cz": "celer",
    "phon": "el Apjo",
    "example": [
      "Añade apio al caldo.",
      "Přidej celer do vývaru."
    ],
    "id": 822,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la amoladora",
    "cz": "úhlová bruska",
    "phon": "la amoladOra",
    "example": [
      "Corto el metal con la amoladora.",
      "Řežu kov úhlovou bruskou."
    ],
    "id": 823,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el multímetro",
    "cz": "multimetr",
    "phon": "el multImetro",
    "example": [
      "Comprueba la tensión con el multímetro.",
      "Zkontroluj napětí multimetrem."
    ],
    "id": 824,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el marinero",
    "cz": "námořník",
    "phon": "el marinEro",
    "example": [
      "El marinero trabaja en cubierta.",
      "Námořník pracuje na palubě."
    ],
    "id": 825,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el tiempo añadido",
    "cz": "nastavený čas",
    "phon": "el tjEmpo aňadIdo",
    "example": [
      "Marcamos en el tiempo añadido.",
      "Skórovali jsme v nastaveném čase."
    ],
    "id": 826,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la esponja",
    "cz": "houba na mytí",
    "phon": "la espOncha",
    "example": [
      "Lava el plato con la esponja.",
      "Umyj talíř houbou."
    ],
    "id": 827,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el hueso de fruta",
    "cz": "pecka",
    "phon": "el uEso de frUta",
    "example": [
      "Retira el hueso de fruta antes de triturarla.",
      "Před rozmixováním ovoce odstraň pecku."
    ],
    "id": 828,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el puerro",
    "cz": "pórek",
    "phon": "el puErro",
    "example": [
      "Corta el puerro en rodajas.",
      "Nakrájej pórek na kolečka."
    ],
    "id": 829,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el compresor",
    "cz": "kompresor",
    "phon": "el kompresOr",
    "example": [
      "El compresor hace mucho ruido.",
      "Kompresor dělá velký hluk."
    ],
    "id": 830,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el voltímetro",
    "cz": "voltmetr",
    "phon": "el boltImetro",
    "example": [
      "El voltímetro indica doce voltios.",
      "Voltmetr ukazuje dvanáct voltů."
    ],
    "id": 831,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el patrón",
    "cz": "velitel plavidla",
    "phon": "el patrOn",
    "example": [
      "El patrón conoce bien esta costa.",
      "Velitel plavidla dobře zná toto pobřeží."
    ],
    "id": 832,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la tanda de penaltis",
    "cz": "penaltový rozstřel",
    "phon": "la tAnda de penAltis",
    "example": [
      "Ganamos la tanda de penaltis.",
      "Vyhráli jsme penaltový rozstřel."
    ],
    "id": 833,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el detergente",
    "cz": "prací prostředek",
    "phon": "el deterchEnte",
    "example": [
      "No pongas demasiado detergente.",
      "Nedávej příliš mnoho pracího prostředku."
    ],
    "id": 834,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la plaga",
    "cz": "škůdci",
    "phon": "la plAga",
    "example": [
      "Una plaga ha dañado los tomates.",
      "Škůdci poškodili rajčata."
    ],
    "id": 835,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el rábano",
    "cz": "ředkvička",
    "phon": "el rrAbano",
    "example": [
      "El rábano tiene un sabor picante.",
      "Ředkvička má štiplavou chuť."
    ],
    "id": 836,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la pistola de aire",
    "cz": "ofukovací pistole",
    "phon": "la pistOla de Aire",
    "example": [
      "Limpio el banco con la pistola de aire.",
      "Čistím pracovní stůl ofukovací pistolí."
    ],
    "id": 837,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el amperímetro",
    "cz": "ampérmetr",
    "phon": "el amperImetro",
    "example": [
      "El amperímetro mide la corriente.",
      "Ampérmetr měří proud."
    ],
    "id": 838,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la travesía",
    "cz": "plavba",
    "phon": "la trabesIa",
    "example": [
      "La travesía duró tres horas.",
      "Plavba trvala tři hodiny."
    ],
    "id": 839,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el autogol",
    "cz": "vlastní gól",
    "phon": "el autogOl",
    "example": [
      "Perdimos por un autogol.",
      "Prohráli jsme kvůli vlastnímu gólu."
    ],
    "id": 840,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el suavizante",
    "cz": "aviváž",
    "phon": "el suabithAnte",
    "example": [
      "Prefiero lavar sin suavizante.",
      "Raději peru bez aviváže."
    ],
    "id": 841,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el pulgón",
    "cz": "mšice",
    "phon": "el pulgOn",
    "example": [
      "El pulgón ataca los brotes tiernos.",
      "Mšice napadá mladé výhonky."
    ],
    "id": 842,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la remolacha",
    "cz": "červená řepa",
    "phon": "la rremolAča",
    "example": [
      "La remolacha mancha las manos.",
      "Červená řepa barví ruce."
    ],
    "id": 843,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el aspirador",
    "cz": "vysavač",
    "phon": "el aspiradOr",
    "example": [
      "Pasa el aspirador por el salón.",
      "Vysaj obývák."
    ],
    "id": 844,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la frecuencia",
    "cz": "frekvence",
    "phon": "la frekuEnthja",
    "example": [
      "La frecuencia de la red es de cincuenta hercios.",
      "Frekvence sítě je padesát hertzů."
    ],
    "id": 845,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el rumbo",
    "cz": "kurz",
    "phon": "el rrUmbo",
    "example": [
      "Ponemos rumbo al puerto.",
      "Nabíráme kurz k přístavu."
    ],
    "id": 846,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la asistencia",
    "cz": "gólová přihrávka",
    "phon": "la asistEnthja",
    "example": [
      "El delantero dio una asistencia.",
      "Útočník si připsal gólovou přihrávku."
    ],
    "id": 847,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la plancha",
    "cz": "žehlička",
    "phon": "la plAnča",
    "example": [
      "Apaga la plancha antes de salir.",
      "Před odchodem vypni žehličku."
    ],
    "id": 848,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la oruga",
    "cz": "housenka",
    "phon": "la orUga",
    "example": [
      "Una oruga se come las hojas.",
      "Housenka požírá listy."
    ],
    "id": 849,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la alcachofa",
    "cz": "artyčok",
    "phon": "la alkačOfa",
    "example": [
      "La alcachofa está muy tierna.",
      "Artyčok je velmi křehký."
    ],
    "id": 850,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la mascarilla",
    "cz": "ochranná maska",
    "phon": "la maskarIja",
    "example": [
      "Ponte la mascarilla antes de lijar.",
      "Před broušením si nasaď ochrannou masku."
    ],
    "id": 851,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el hercio",
    "cz": "hertz",
    "phon": "el Erthjo",
    "example": [
      "Un hercio equivale a un ciclo por segundo.",
      "Jeden hertz odpovídá jednomu cyklu za sekundu."
    ],
    "id": 852,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la velocidad",
    "cz": "rychlost",
    "phon": "la belothidAd",
    "example": [
      "Reduce la velocidad cerca del puerto.",
      "V blízkosti přístavu sniž rychlost."
    ],
    "id": 853,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el goleador",
    "cz": "střelec",
    "phon": "el goleadOr",
    "example": [
      "El goleador celebra su tercer gol.",
      "Střelec slaví svůj třetí gól."
    ],
    "id": 854,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el tendedero",
    "cz": "sušák",
    "phon": "el tendedEro",
    "example": [
      "Deja la ropa en el tendedero.",
      "Nech prádlo na sušáku."
    ],
    "id": 855,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el caracol",
    "cz": "hlemýžď",
    "phon": "el karakOl",
    "example": [
      "Hay un caracol en la maceta.",
      "V květináči je hlemýžď."
    ],
    "id": 856,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el espárrago",
    "cz": "chřest",
    "phon": "el espArrago",
    "example": [
      "El espárrago queda bien a la plancha.",
      "Chřest je dobrý opečený na grilu."
    ],
    "id": 857,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "las gafas de protección",
    "cz": "ochranné brýle",
    "phon": "las gAfas de protekthjOn",
    "example": [
      "Usa las gafas de protección al taladrar.",
      "Při vrtání používej ochranné brýle."
    ],
    "id": 858,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la fase",
    "cz": "fáze",
    "phon": "la fAse",
    "example": [
      "El electricista comprueba la fase.",
      "Elektrikář kontroluje fázi."
    ],
    "id": 859,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el nudo marinero",
    "cz": "námořnický uzel",
    "phon": "el nUdo marinEro",
    "example": [
      "Enséñame a hacer un nudo marinero.",
      "Nauč mě uvázat námořnický uzel."
    ],
    "id": 860,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el capitán del equipo",
    "cz": "kapitán týmu",
    "phon": "el kapitAn del ekIpo",
    "example": [
      "El capitán del equipo habla con el árbitro.",
      "Kapitán týmu mluví s rozhodčím."
    ],
    "id": 861,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la pinza de ropa",
    "cz": "kolíček na prádlo",
    "phon": "la pIntha de rrOpa",
    "example": [
      "Sujeta la camiseta con una pinza de ropa.",
      "Přichyť tričko kolíčkem na prádlo."
    ],
    "id": 862,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la babosa",
    "cz": "slimák",
    "phon": "la babOsa",
    "example": [
      "La babosa se esconde bajo la piedra.",
      "Slimák se schovává pod kamenem."
    ],
    "id": 863,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la judía verde",
    "cz": "zelená fazolka",
    "phon": "la chudIa bErde",
    "example": [
      "Cuece la judía verde hasta que esté tierna.",
      "Uvař zelenou fazolku doměkka."
    ],
    "id": 864,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "los guantes",
    "cz": "rukavice",
    "phon": "los guAntes",
    "example": [
      "Necesito guantes para trabajar en el jardín.",
      "Potřebuji rukavice na práci na zahradě."
    ],
    "id": 865,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el neutro",
    "cz": "nulový vodič",
    "phon": "el nEutro",
    "example": [
      "El electricista identifica el neutro.",
      "Elektrikář identifikuje nulový vodič."
    ],
    "id": 866,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la milla náutica",
    "cz": "námořní míle",
    "phon": "la mIja nAutika",
    "example": [
      "Una milla náutica equivale a 1852 metros.",
      "Jedna námořní míle odpovídá 1852 metrům."
    ],
    "id": 867,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el vestuario",
    "cz": "šatna",
    "phon": "el bestuArjo",
    "example": [
      "Los jugadores vuelven al vestuario.",
      "Hráči se vracejí do šatny."
    ],
    "id": 868,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la secadora",
    "cz": "sušička",
    "phon": "la sekadOra",
    "example": [
      "La secadora consume bastante electricidad.",
      "Sušička spotřebovává dost elektřiny."
    ],
    "id": 869,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la lombriz",
    "cz": "žížala",
    "phon": "la lombrIth",
    "example": [
      "La lombriz ayuda a airear la tierra.",
      "Žížala pomáhá provzdušňovat půdu."
    ],
    "id": 870,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la col",
    "cz": "zelí",
    "phon": "la kOl",
    "example": [
      "Corta la col en tiras finas.",
      "Nakrájej zelí na tenké proužky."
    ],
    "id": 871,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el casco de protección",
    "cz": "ochranná přilba",
    "phon": "el kAsko de protekthjOn",
    "example": [
      "Es obligatorio llevar casco de protección.",
      "Je povinné nosit ochrannou přilbu."
    ],
    "id": 872,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la sobretensión",
    "cz": "přepětí",
    "phon": "la sobretensjOn",
    "example": [
      "Una sobretensión dañó el equipo.",
      "Přepětí poškodilo zařízení."
    ],
    "id": 873,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la marejada",
    "cz": "vzduté moře",
    "phon": "la marechAda",
    "example": [
      "Hay marejada y no saldremos a navegar.",
      "Moře je vzduté a nevyplujeme."
    ],
    "id": 874,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la camiseta",
    "cz": "dres",
    "phon": "la kamisEta",
    "example": [
      "Llevo la camiseta de mi equipo.",
      "Mám na sobě dres svého týmu."
    ],
    "id": 875,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el microondas",
    "cz": "mikrovlnná trouba",
    "phon": "el mikroOndas",
    "example": [
      "Calienta la comida en el microondas.",
      "Ohřej jídlo v mikrovlnce."
    ],
    "id": 876,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la mariquita",
    "cz": "beruška",
    "phon": "la marikIta",
    "example": [
      "La mariquita se alimenta de pulgones.",
      "Beruška se živí mšicemi."
    ],
    "id": 877,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la batata",
    "cz": "batát",
    "phon": "la batAta",
    "example": [
      "Asa la batata en el horno.",
      "Upeč batát v troubě."
    ],
    "id": 878,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la orejera",
    "cz": "chránič sluchu",
    "phon": "la orechEra",
    "example": [
      "Se ha roto una orejera del protector auditivo.",
      "Rozbil se jeden náušník chrániče sluchu."
    ],
    "id": 879,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la sobrecarga",
    "cz": "přetížení",
    "phon": "la sobrekArga",
    "example": [
      "El sistema se apaga por sobrecarga.",
      "Systém se vypíná kvůli přetížení."
    ],
    "id": 880,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el oleaje",
    "cz": "vlnobití",
    "phon": "el oleAche",
    "example": [
      "El fuerte oleaje impide el baño.",
      "Silné vlnobití znemožňuje koupání."
    ],
    "id": 881,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "las botas de fútbol",
    "cz": "kopačky",
    "phon": "las bOtas de fUtbol",
    "example": [
      "Mis botas de fútbol están llenas de barro.",
      "Moje kopačky jsou plné bláta."
    ],
    "id": 882,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la tostadora",
    "cz": "toustovač",
    "phon": "la tostadOra",
    "example": [
      "La tostadora está junto a la cafetera.",
      "Toustovač je vedle kávovaru."
    ],
    "id": 883,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la avispa",
    "cz": "vosa",
    "phon": "la abIspa",
    "example": [
      "Una avispa se ha metido en casa.",
      "Do domu vlétla vosa."
    ],
    "id": 884,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el perejil",
    "cz": "petrželová nať",
    "phon": "el perechIl",
    "example": [
      "Espolvorea perejil sobre el pescado.",
      "Posyp rybu petrželovou natí."
    ],
    "id": 885,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el roble",
    "cz": "dub",
    "phon": "el rrOble",
    "example": [
      "La mesa está hecha de roble.",
      "Stůl je vyrobený z dubu."
    ],
    "id": 886,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la conexión en serie",
    "cz": "sériové zapojení",
    "phon": "la koneksjOn en sErje",
    "example": [
      "La conexión en serie aumenta la tensión total de las baterías.",
      "Sériové zapojení zvyšuje celkové napětí baterií."
    ],
    "id": 887,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la pleamar",
    "cz": "přílivové maximum",
    "phon": "la pleamAr",
    "example": [
      "El barco entra en el puerto durante la pleamar.",
      "Loď vplouvá do přístavu při nejvyšším přílivu."
    ],
    "id": 888,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "las espinilleras",
    "cz": "chrániče holení",
    "phon": "las espinijEras",
    "example": [
      "No olvides las espinilleras.",
      "Nezapomeň na chrániče holení."
    ],
    "id": 889,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la batidora",
    "cz": "mixér",
    "phon": "la batidOra",
    "example": [
      "Tritura los tomates con la batidora.",
      "Rozmixuj rajčata mixérem."
    ],
    "id": 890,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el mosquito",
    "cz": "komár",
    "phon": "el moskIto",
    "example": [
      "Un mosquito me ha picado en el brazo.",
      "Komár mě štípl do ruky."
    ],
    "id": 891,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el cilantro",
    "cz": "koriandr",
    "phon": "el thilAntro",
    "example": [
      "El cilantro le da un sabor fresco a la salsa.",
      "Koriandr dodává omáčce svěží chuť."
    ],
    "id": 892,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el haya",
    "cz": "buk",
    "phon": "el Aja",
    "example": [
      "El haya pierde las hojas en otoño.",
      "Buk na podzim ztrácí listy."
    ],
    "id": 893,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la conexión en paralelo",
    "cz": "paralelní zapojení",
    "phon": "la koneksjOn em paralElo",
    "example": [
      "La conexión en paralelo permite sumar la capacidad de baterías compatibles.",
      "Paralelní zapojení umožňuje sčítat kapacitu kompatibilních baterií."
    ],
    "id": 894,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la bajamar",
    "cz": "odlivové minimum",
    "phon": "la bachamAr",
    "example": [
      "Durante la bajamar se ven las rocas.",
      "Při nejnižším odlivu jsou vidět skály."
    ],
    "id": 895,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el silbato",
    "cz": "píšťalka",
    "phon": "el silbAto",
    "example": [
      "El árbitro hace sonar el silbato.",
      "Rozhodčí zapíská na píšťalku."
    ],
    "id": 896,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cafetera",
    "cz": "kávovar",
    "phon": "la kafetEra",
    "example": [
      "La cafetera necesita una limpieza.",
      "Kávovar potřebuje vyčistit."
    ],
    "id": 897,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la mosca",
    "cz": "moucha",
    "phon": "la mOska",
    "example": [
      "Hay una mosca en la cocina.",
      "V kuchyni je moucha."
    ],
    "id": 898,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el orégano",
    "cz": "oregano",
    "phon": "el orEgano",
    "example": [
      "Pon un poco de orégano en la pizza.",
      "Dej na pizzu trochu oregana."
    ],
    "id": 899,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el pino",
    "cz": "borovice",
    "phon": "el pIno",
    "example": [
      "Descansamos a la sombra del pino.",
      "Odpočíváme ve stínu borovice."
    ],
    "id": 900,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la red trifásica",
    "cz": "třífázová síť",
    "phon": "la rrEd trifAsika",
    "example": [
      "El taller dispone de una red trifásica.",
      "Dílna má třífázovou síť."
    ],
    "id": 901,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el arrecife",
    "cz": "útes",
    "phon": "el arrethIfe",
    "example": [
      "Vimos muchos peces cerca del arrecife.",
      "U útesu jsme viděli spoustu ryb."
    ],
    "id": 902,
    "level": 3
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la grada",
    "cz": "tribuna",
    "phon": "la grAda",
    "example": [
      "La grada estaba llena de aficionados.",
      "Tribuna byla plná fanoušků."
    ],
    "id": 903,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la tetera",
    "cz": "čajová konvice",
    "phon": "la tetEra",
    "example": [
      "El té está en la tetera.",
      "Čaj je v čajové konvici."
    ],
    "id": 904,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la hormiga",
    "cz": "mravenec",
    "phon": "la ormIga",
    "example": [
      "Una hormiga lleva una miga de pan.",
      "Mravenec nese drobek chleba."
    ],
    "id": 905,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el romero",
    "cz": "rozmarýn",
    "phon": "el rromEro",
    "example": [
      "El romero crece bien en esta zona.",
      "Rozmarýn v této oblasti dobře roste."
    ],
    "id": 906,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el abeto",
    "cz": "jedle",
    "phon": "el abEto",
    "example": [
      "Decoramos el abeto en Navidad.",
      "O Vánocích zdobíme jedli."
    ],
    "id": 907,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el inversor híbrido",
    "cz": "hybridní střídač",
    "phon": "el imbersOr Ibrido",
    "example": [
      "El inversor híbrido gestiona la energía de los paneles y la batería.",
      "Hybridní střídač řídí energii z panelů a baterie."
    ],
    "id": 908,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la cala",
    "cz": "malá zátoka",
    "phon": "la kAla",
    "example": [
      "Encontramos una cala tranquila.",
      "Našli jsme klidnou malou zátoku."
    ],
    "id": 909,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el aficionado",
    "cz": "fanoušek",
    "phon": "el afithjonAdo",
    "example": [
      "Mi vecino es aficionado al fútbol.",
      "Můj soused je fotbalový fanoušek."
    ],
    "id": 910,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la sartén",
    "cz": "pánev",
    "phon": "la sartEn",
    "example": [
      "Calienta el aceite en la sartén.",
      "Rozehřej olej na pánvi."
    ],
    "id": 911,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la araña",
    "cz": "pavouk",
    "phon": "la arAňa",
    "example": [
      "Hay una araña en el techo.",
      "Na stropě je pavouk."
    ],
    "id": 912,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el tomillo",
    "cz": "tymián",
    "phon": "el tomIjo",
    "example": [
      "Añade tomillo al pollo.",
      "Přidej ke kuřeti tymián."
    ],
    "id": 913,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el cedro",
    "cz": "cedr",
    "phon": "el thEdro",
    "example": [
      "La caja está hecha de cedro.",
      "Krabice je vyrobená z cedrového dřeva."
    ],
    "id": 914,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el microinversor",
    "cz": "mikrostřídač",
    "phon": "el mikroimbersOr",
    "example": [
      "Cada panel tiene su propio microinversor.",
      "Každý panel má vlastní mikrostřídač."
    ],
    "id": 915,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el acantilado",
    "cz": "skalní sráz",
    "phon": "el akantilAdo",
    "example": [
      "No te acerques al borde del acantilado.",
      "Nepřibližuj se k okraji skalního srázu."
    ],
    "id": 916,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el abono de temporada",
    "cz": "sezonní permanentka",
    "phon": "el abOno de temporAda",
    "example": [
      "He renovado mi abono de temporada.",
      "Prodloužil jsem si sezonní permanentku."
    ],
    "id": 917,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la olla",
    "cz": "hrnec",
    "phon": "la Oja",
    "example": [
      "Pon agua en la olla.",
      "Nalij vodu do hrnce."
    ],
    "id": 918,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el saltamontes",
    "cz": "kobylka",
    "phon": "el saltamOntes",
    "example": [
      "Un saltamontes saltó sobre la hierba.",
      "Kobylka skočila do trávy."
    ],
    "id": 919,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la canela",
    "cz": "skořice",
    "phon": "la kanEla",
    "example": [
      "Me gusta el arroz con leche y canela.",
      "Mám rád rýžovou kaši se skořicí."
    ],
    "id": 920,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el nogal",
    "cz": "ořešák",
    "phon": "el nogAl",
    "example": [
      "El nogal da mucha sombra.",
      "Ořešák poskytuje hodně stínu."
    ],
    "id": 921,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la monitorización",
    "cz": "monitorování",
    "phon": "la monitorithathjOn",
    "example": [
      "La monitorización permite detectar problemas en la instalación.",
      "Monitorování umožňuje odhalit problémy v instalaci."
    ],
    "id": 922,
    "level": 3
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la arena",
    "cz": "písek",
    "phon": "la arEna",
    "example": [
      "Los niños juegan en la arena.",
      "Děti si hrají v písku."
    ],
    "id": 923,
    "level": 1
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el derbi",
    "cz": "derby",
    "phon": "el dErbi",
    "example": [
      "El derbi se juega el sábado.",
      "Derby se hraje v sobotu."
    ],
    "id": 924,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la tapa",
    "cz": "poklička",
    "phon": "la tApa",
    "example": [
      "Pon la tapa en la olla.",
      "Přiklop hrnec pokličkou."
    ],
    "id": 925,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el grillo",
    "cz": "cvrček",
    "phon": "el grIjo",
    "example": [
      "Oigo un grillo por la noche.",
      "V noci slyším cvrčka."
    ],
    "id": 926,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el comino",
    "cz": "římský kmín",
    "phon": "el komIno",
    "example": [
      "El comino combina bien con los garbanzos.",
      "Římský kmín se dobře hodí k cizrně."
    ],
    "id": 927,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la chapa de madera",
    "cz": "dýha",
    "phon": "la čApa de madEra",
    "example": [
      "La chapa de madera se ha despegado.",
      "Dýha se odlepila."
    ],
    "id": 928,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el sensor",
    "cz": "snímač",
    "phon": "el sensOr",
    "example": [
      "El sensor mide la temperatura del agua.",
      "Snímač měří teplotu vody."
    ],
    "id": 929,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la medusa",
    "cz": "medúza",
    "phon": "la medUsa",
    "example": [
      "Hay una medusa cerca de la orilla.",
      "U břehu je medúza."
    ],
    "id": 930,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el ascenso",
    "cz": "postup do vyšší ligy",
    "phon": "el asthEnso",
    "example": [
      "El equipo celebra el ascenso.",
      "Tým slaví postup do vyšší ligy."
    ],
    "id": 931,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el cuchillo",
    "cz": "nůž",
    "phon": "el kučIjo",
    "example": [
      "Corta el pan con el cuchillo.",
      "Nakrájej chléb nožem."
    ],
    "id": 932,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la libélula",
    "cz": "vážka",
    "phon": "la libElula",
    "example": [
      "Una libélula vuela sobre el estanque.",
      "Nad jezírkem létá vážka."
    ],
    "id": 933,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el azafrán",
    "cz": "šafrán",
    "phon": "el athafrAn",
    "example": [
      "El azafrán da color al arroz.",
      "Šafrán dodává rýži barvu."
    ],
    "id": 934,
    "level": 3
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el tablero",
    "cz": "deska",
    "phon": "el tablEro",
    "example": [
      "El tablero mide dos metros de largo.",
      "Deska je dlouhá dva metry."
    ],
    "id": 935,
    "level": 2
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "la alarma",
    "cz": "alarm",
    "phon": "la alArma",
    "example": [
      "La alarma suena cuando se abre la puerta.",
      "Alarm se rozezní při otevření dveří."
    ],
    "id": 936,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el delfín",
    "cz": "delfín",
    "phon": "el delfIn",
    "example": [
      "Vimos un delfín desde el barco.",
      "Z lodi jsme viděli delfína."
    ],
    "id": 937,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el descenso",
    "cz": "sestup",
    "phon": "el desthEnso",
    "example": [
      "El club intenta evitar el descenso.",
      "Klub se snaží vyhnout sestupu."
    ],
    "id": 938,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el tenedor",
    "cz": "vidlička",
    "phon": "el tenedOr",
    "example": [
      "Come la ensalada con el tenedor.",
      "Jez salát vidličkou."
    ],
    "id": 939,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el almendro",
    "cz": "mandloň",
    "phon": "el almEndro",
    "example": [
      "El almendro florece a finales del invierno.",
      "Mandloň kvete koncem zimy."
    ],
    "id": 940,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el pimentón",
    "cz": "mletá paprika",
    "phon": "el pimentOn",
    "example": [
      "Añade una pizca de pimentón.",
      "Přidej špetku mleté papriky."
    ],
    "id": 941,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el tablero de fibras",
    "cz": "dřevovláknitá deska",
    "phon": "el tablEro de fIbras",
    "example": [
      "El armario está hecho de tablero de fibras.",
      "Skříň je vyrobena z dřevovláknité desky."
    ],
    "id": 942,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el fallo",
    "cz": "porucha",
    "phon": "el fAjo",
    "example": [
      "Un fallo del inversor interrumpió el suministro.",
      "Porucha střídače přerušila dodávku elektřiny."
    ],
    "id": 943,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "la ballena",
    "cz": "velryba",
    "phon": "la bajEna",
    "example": [
      "La ballena salió a la superficie.",
      "Velryba se vynořila na hladinu."
    ],
    "id": 944,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "la copa",
    "cz": "pohár",
    "phon": "la kOpa",
    "example": [
      "El capitán levantó la copa.",
      "Kapitán zvedl pohár."
    ],
    "id": 945,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cuchara",
    "cz": "lžíce",
    "phon": "la kučAra",
    "example": [
      "Necesito una cuchara para el postre.",
      "Potřebuji lžíci na dezert."
    ],
    "id": 946,
    "level": 1
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "el granado",
    "cz": "granátovník",
    "phon": "el granAdo",
    "example": [
      "El granado está lleno de flores.",
      "Granátovník je plný květů."
    ],
    "id": 947,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la mostaza",
    "cz": "hořčice",
    "phon": "la mostAtha",
    "example": [
      "¿Quieres mostaza en el bocadillo?",
      "Chceš do bagety hořčici?"
    ],
    "id": 948,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la madera maciza",
    "cz": "masivní dřevo",
    "phon": "la madEra mathItha",
    "example": [
      "Prefiero los muebles de madera maciza.",
      "Dávám přednost nábytku z masivního dřeva."
    ],
    "id": 949,
    "level": 3
  },
  {
    "topic": "Fotovoltaika",
    "pic": "☀️",
    "es": "el mantenimiento",
    "cz": "údržba",
    "phon": "el mantenimjEnto",
    "example": [
      "El mantenimiento de los equipos es importante.",
      "Údržba zařízení je důležitá."
    ],
    "id": 950,
    "level": 2
  },
  {
    "topic": "Lodě a moře",
    "pic": "⛵",
    "es": "el tiburón",
    "cz": "žralok",
    "phon": "el tiburOn",
    "example": [
      "Vimos un tiburón en el acuario.",
      "V akváriu jsme viděli žraloka."
    ],
    "id": 951,
    "level": 2
  },
  {
    "topic": "Fotbal",
    "pic": "⚽",
    "es": "el trofeo",
    "cz": "trofej",
    "phon": "el trofEo",
    "example": [
      "El ganador recibió un trofeo.",
      "Vítěz dostal trofej."
    ],
    "id": 952,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la cucharilla",
    "cz": "lžička",
    "phon": "la kučarIja",
    "example": [
      "Añade una cucharilla de azúcar.",
      "Přidej lžičku cukru."
    ],
    "id": 953,
    "level": 2
  },
  {
    "topic": "Zahrada",
    "pic": "🌱",
    "es": "la palmera",
    "cz": "palma",
    "phon": "la palmEra",
    "example": [
      "Hay una palmera junto a la piscina.",
      "U bazénu je palma."
    ],
    "id": 954,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la mayonesa",
    "cz": "majonéza",
    "phon": "la majonEsa",
    "example": [
      "La mayonesa está en la nevera.",
      "Majonéza je v lednici."
    ],
    "id": 955,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el canto",
    "cz": "hrana",
    "phon": "el kAnto",
    "example": [
      "Lija el canto del tablero.",
      "Obrus hranu desky."
    ],
    "id": 956,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el plato",
    "cz": "talíř",
    "phon": "el plAto",
    "example": [
      "Pon el plato sobre la mesa.",
      "Polož talíř na stůl."
    ],
    "id": 957,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el kétchup",
    "cz": "kečup",
    "phon": "el kEtčup",
    "example": [
      "Los niños quieren kétchup con las patatas.",
      "Děti chtějí k bramborám kečup."
    ],
    "id": 958,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la junta",
    "cz": "spoj",
    "phon": "la chUnta",
    "example": [
      "La junta entre las piezas debe quedar bien ajustada.",
      "Spoj mezi díly musí dobře lícovat."
    ],
    "id": 959,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el vaso",
    "cz": "sklenice",
    "phon": "el bAso",
    "example": [
      "Dame un vaso de agua.",
      "Dej mi sklenici vody."
    ],
    "id": 960,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la salsa",
    "cz": "omáčka",
    "phon": "la sAlsa",
    "example": [
      "La salsa está demasiado espesa.",
      "Omáčka je příliš hustá."
    ],
    "id": 961,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la ranura",
    "cz": "drážka",
    "phon": "la rranUra",
    "example": [
      "La pieza encaja en la ranura.",
      "Díl zapadá do drážky."
    ],
    "id": 962,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la taza",
    "cz": "hrnek",
    "phon": "la tAtha",
    "example": [
      "Quiero una taza de café.",
      "Chci hrnek kávy."
    ],
    "id": 963,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el caldo",
    "cz": "vývar",
    "phon": "el kAldo",
    "example": [
      "Deja que el caldo hierva a fuego lento.",
      "Nech vývar mírně probublávat."
    ],
    "id": 964,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el bisel",
    "cz": "zkosení",
    "phon": "el bisEl",
    "example": [
      "El bisel elimina la arista viva.",
      "Zkosení odstraňuje ostrou hranu."
    ],
    "id": 965,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el cuenco",
    "cz": "miska",
    "phon": "el kuEnko",
    "example": [
      "Sirve la ensalada en un cuenco.",
      "Podávej salát v misce."
    ],
    "id": 966,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la sopa",
    "cz": "polévka",
    "phon": "la sOpa",
    "example": [
      "La sopa está muy caliente.",
      "Polévka je velmi horká."
    ],
    "id": 967,
    "level": 1
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el agujero",
    "cz": "otvor",
    "phon": "el aguchEro",
    "example": [
      "Hay que hacer un agujero en la tabla.",
      "Do prkna je potřeba udělat otvor."
    ],
    "id": 968,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "la jarra",
    "cz": "džbán",
    "phon": "la chArra",
    "example": [
      "Llena la jarra de agua.",
      "Naplň džbán vodou."
    ],
    "id": 969,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el chorizo",
    "cz": "papriková klobása",
    "phon": "el čorItho",
    "example": [
      "El chorizo le da sabor al guiso.",
      "Papriková klobása dodává dušenému jídlu chuť."
    ],
    "id": 970,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la astilla",
    "cz": "tříska",
    "phon": "la astIja",
    "example": [
      "Tengo una astilla en el dedo.",
      "Mám v prstu třísku."
    ],
    "id": 971,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el colador",
    "cz": "cedník",
    "phon": "el koladOr",
    "example": [
      "Escurre la pasta en el colador.",
      "Sceď těstoviny v cedníku."
    ],
    "id": 972,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el salchichón",
    "cz": "trvanlivý salám",
    "phon": "el salčičOn",
    "example": [
      "Corta unas rodajas de salchichón.",
      "Nakrájej několik koleček salámu."
    ],
    "id": 973,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la resina",
    "cz": "pryskyřice",
    "phon": "la rresIna",
    "example": [
      "La resina del pino es pegajosa.",
      "Borovicová pryskyřice je lepkavá."
    ],
    "id": 974,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el rallador",
    "cz": "struhadlo",
    "phon": "el rrajadOr",
    "example": [
      "Usa el rallador para el queso.",
      "Na sýr použij struhadlo."
    ],
    "id": 975,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la morcilla",
    "cz": "krvavá klobása",
    "phon": "la morthIja",
    "example": [
      "Probamos la morcilla en el mercado.",
      "Na trhu jsme ochutnali krvavou klobásu."
    ],
    "id": 976,
    "level": 3
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la masilla",
    "cz": "tmel",
    "phon": "la masIja",
    "example": [
      "Rellena la grieta con masilla.",
      "Vyplň prasklinu tmelem."
    ],
    "id": 977,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el pelador",
    "cz": "škrabka",
    "phon": "el peladOr",
    "example": [
      "Quita la piel de la patata con el pelador.",
      "Oloupej bramboru škrabkou."
    ],
    "id": 978,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el beicon",
    "cz": "slanina",
    "phon": "el bEikon",
    "example": [
      "Fríe el beicon hasta que esté crujiente.",
      "Osmaž slaninu dokřupava."
    ],
    "id": 979,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el disolvente",
    "cz": "ředidlo",
    "phon": "el disolbEnte",
    "example": [
      "El disolvente debe ser compatible con la pintura.",
      "Ředidlo musí být kompatibilní s barvou."
    ],
    "id": 980,
    "level": 3
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el sacacorchos",
    "cz": "vývrtka",
    "phon": "el sakakOrčos",
    "example": [
      "¿Dónde está el sacacorchos?",
      "Kde je vývrtka?"
    ],
    "id": 981,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el pavo",
    "cz": "krůta",
    "phon": "el pAbo",
    "example": [
      "Hoy comemos pavo al horno.",
      "Dnes jíme pečenou krůtu."
    ],
    "id": 982,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la pintura",
    "cz": "barva",
    "phon": "la pintUra",
    "example": [
      "La pintura todavía está húmeda.",
      "Barva je ještě mokrá."
    ],
    "id": 983,
    "level": 2
  },
  {
    "topic": "Domov",
    "pic": "🏠",
    "es": "el abrelatas",
    "cz": "otvírák na konzervy",
    "phon": "el abrelAtas",
    "example": [
      "Abre la lata con el abrelatas.",
      "Otevři konzervu otvírákem."
    ],
    "id": 984,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el cordero",
    "cz": "jehněčí",
    "phon": "el kordEro",
    "example": [
      "El cordero se cocina lentamente.",
      "Jehněčí se připravuje pomalu."
    ],
    "id": 985,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la imprimación",
    "cz": "základní nátěr",
    "phon": "la imprimathjOn",
    "example": [
      "Aplica la imprimación antes de pintar.",
      "Před malováním nanes základní nátěr."
    ],
    "id": 986,
    "level": 3
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el conejo",
    "cz": "králík",
    "phon": "el konEcho",
    "example": [
      "El conejo al ajillo es un plato tradicional.",
      "Králík na česneku je tradiční pokrm."
    ],
    "id": 987,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "el rodillo",
    "cz": "váleček",
    "phon": "el rrodIjo",
    "example": [
      "Pinta la pared con el rodillo.",
      "Vymaluj stěnu válečkem."
    ],
    "id": 988,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la merluza",
    "cz": "štikozubec",
    "phon": "la merlUtha",
    "example": [
      "La merluza está fresca.",
      "Štikozubec je čerstvý."
    ],
    "id": 989,
    "level": 2
  },
  {
    "topic": "Dílna",
    "pic": "🪚",
    "es": "la brocha de pintar",
    "cz": "malířský štětec",
    "phon": "la brOča de pintAr",
    "example": [
      "Limpia la brocha de pintar después de usarla.",
      "Po použití vyčisti malířský štětec."
    ],
    "id": 990,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la sardina",
    "cz": "sardinka",
    "phon": "la sardIna",
    "example": [
      "La sardina a la brasa está deliciosa.",
      "Grilovaná sardinka je výborná."
    ],
    "id": 991,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el salmón",
    "cz": "losos",
    "phon": "el salmOn",
    "example": [
      "El salmón está en el horno.",
      "Losos je v troubě."
    ],
    "id": 992,
    "level": 1
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el bacalao",
    "cz": "treska",
    "phon": "el bakalAo",
    "example": [
      "Hay que desalar el bacalao antes de cocinarlo.",
      "Před vařením je potřeba solenou tresku odsolit."
    ],
    "id": 993,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el pulpo",
    "cz": "chobotnice",
    "phon": "el pUlpo",
    "example": [
      "Pedimos pulpo con patatas.",
      "Objednali jsme si chobotnici s bramborami."
    ],
    "id": 994,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el calamar",
    "cz": "oliheň",
    "phon": "el kalamAr",
    "example": [
      "El calamar se sirve con limón.",
      "Oliheň se podává s citronem."
    ],
    "id": 995,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el mejillón",
    "cz": "slávka",
    "phon": "el mechijOn",
    "example": [
      "El mejillón se abre al cocerlo.",
      "Slávka se při vaření otevře."
    ],
    "id": 996,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la almeja",
    "cz": "škeble",
    "phon": "la almEcha",
    "example": [
      "La almeja está enterrada en la arena.",
      "Škeble je zahrabaná v písku."
    ],
    "id": 997,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "la ostra",
    "cz": "ústřice",
    "phon": "la Ostra",
    "example": [
      "La ostra se sirve sobre hielo.",
      "Ústřice se podává na ledu."
    ],
    "id": 998,
    "level": 2
  },
  {
    "topic": "Jídlo",
    "pic": "🍽️",
    "es": "el cangrejo",
    "cz": "krab",
    "phon": "el kangrEcho",
    "example": [
      "El cangrejo se esconde entre las rocas.",
      "Krab se schovává mezi skalami."
    ],
    "id": 999,
    "level": 2
  }
];

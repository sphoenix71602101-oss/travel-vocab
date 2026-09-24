#!/usr/bin/env node
"use strict";

// Builds the Spain Spanish pack from the shared, already validated scene skeleton.
// Keep the localized vocabulary here so es-ES wording can be reviewed without
// editing the generated 10k-line pack directly.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const exampleRewrites = require("./spanish_examples.js");
const phraseRewrites = require("./spanish_phrases.js");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ["core/content-registry.js", "languages/us-en/pack.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox);
}
const source = JSON.parse(JSON.stringify(sandbox.window.TRAVEL_CONTENT.get("us-en")));

const vocabulary = {
  airport: `pasaporte|visado|billete de avión|tarjeta de embarque|equipaje|maleta|equipaje de mano|aeropuerto|terminal|salida|llegada|puerta de embarque|control de seguridad|aduana|entrada al país|salida del país|escala|vuelo|retraso|cancelación|facturación|embarque|despegue|aterrizaje|asiento|asiento de ventanilla|asiento de pasillo|recogida de equipajes|carrito portaequipajes|control de pasaportes|tienda libre de impuestos|vuelo directo|consigna de equipaje|equipaje perdido|número de pasaporte|número de vuelo|sala de espera|hora de embarque|llevar como equipaje de mano|facturar el equipaje|inspección de equipaje|tarjeta de entrada|declaración de aduanas|mostrador de conexiones|cinturón de seguridad|auxiliar de vuelo|comandante|pasarela de embarque|pista|prórroga del visado|control de inmigración|exceso de equipaje|junto a la ventanilla|junto al pasillo|chaleco salvavidas`,
  transport: `autobús del aeropuerto|taxi|metro|tren|tren de alta velocidad|autobús|estación|andén|horario|billete de ida|billete de ida y vuelta|billete|taquilla|máquina expendedora|torno de acceso|entrada|salida|oficina de información|mapa|destino|coche|coche de alquiler|gasolinera|aparcamiento|semáforo|paso de peatones|bicicleta|moto|a pie`,
  hotel: `hotel|parador|alojamiento turístico|recepción|reserva|entrada|salida|habitación|habitación individual|habitación con dos camas|habitación doble|suite|llave|tarjeta de la habitación|botones|personal|servicio de habitaciones|limpieza|toalla|sábana|almohada|edredón|manta|aire acondicionado|calefacción|baño|ducha|bañera|agua caliente|agua fría|aseo|papel higiénico|champú|gel de ducha|cepillo de dientes|pasta de dientes|secador de pelo|enchufe|adaptador de enchufe|wifi|internet|ascensor|escaleras|vestíbulo|restaurante|desayuno|servicio de despertador|servicio de lavandería|plancha|caja fuerte|hora de salida|hora de entrada|habitación disponible|completo|fianza|recibo|cuenta|teléfono de recepción|detector de humo|extintor|cuna|cama supletoria|colchón|nevera|microondas|hervidor|taza|zapatillas|percha|armario|cortina|balcón|vistas|tranquilo|ruidoso|cómodo|número de habitación|prolongar la estancia`,
  food: `desayuno|comida|cena|carta|pedir|agua|agua caliente|té|café|leche|zumo|cerveza|vino tinto|arroz|pan|fideos|tapas|tortilla española|paella|gazpacho|croquetas|jamón ibérico|churros|huevo|carne|ternera|cerdo|pollo|pescado|gambas|cangrejo|verduras|fruta|manzana|plátano|naranja|fresa|sandía|ensalada|sopa|hamburguesa|pollo frito|patatas fritas|pizza|bocadillo|helado|tarta|postre|chocolate|caramelo|sal|azúcar|salsa de soja|vinagre|pimienta|guindilla|wasabi|palillos|cuchara|tenedor|cuchillo|plato|cuenco|vaso|servilleta|la cuenta|caja|camarero|mesa libre|zona de fumadores|zona de no fumadores|para llevar|rico|malo|dulce|salado|picante|amargo|ácido|caliente|frío|fresco|alergia|vegetariano`,
  shopping: `tienda|grandes almacenes|supermercado|tienda de conveniencia|mercado|precio|cuánto cuesta|caro|barato|descuento|oferta|tique|efectivo|tarjeta de crédito|tarjeta bancaria|cambio|pago|pago con el móvil|código QR|probador|probarse|talla|talla grande|talla mediana|talla pequeña|ropa|camisa|camiseta|pantalones|vaqueros|falda|vestido|abrigo|jersey|ropa interior|calcetines|zapatos|zapatillas deportivas|sombrero|bufanda|guantes|bolso|cartera|gafas|gafas de sol|reloj|joyas|cosméticos|productos para la piel|perfume|pintalabios|limpiador facial|alimentos|bebidas|aperitivos|recuerdo|producto local|juguete|productos electrónicos|móvil|cargador|auriculares|cámara|pila|bolsa de la compra|bolsa reutilizable`,
  directions: `dónde|aquí|allí|izquierda|derecha|delante|detrás|al lado de|enfrente de|cerca|lejos|cerca|todo recto|girar|cruce|puente|carretera|calle|edificio|comisaría|hospital|farmacia|banco|oficina de correos|aseo|parada de autobús|estación de metro|lugar turístico|museo|parque`,
  emergency: `socorro|emergencia|llamar a la policía|llamar a una ambulancia|médico|enfermero|medicamento|receta|fiebre|resfriado|tos|dolor de cabeza|dolor de estómago|dolor de muelas|náuseas|vómitos|diarrea|estreñimiento|herida|sangrado|fractura|quemadura|asma|pastilla|pomada|tirita|venda|termómetro|mascarilla|desinfectante|botiquín|seguro|tarjeta del seguro`,
  basics: `cero|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|cien|mil|diez mil|euro|dólar|yuan|hoy|mañana|ayer|pasado mañana|anteayer|mañana|mediodía|tarde|noche|ahora|hora|una hora|un minuto|segundo|qué hora|día de la semana|lunes|martes|miércoles|jueves|viernes|sábado|domingo|fin de semana|día laborable|fecha|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|día uno|día dos|día tres|día cuatro|día cinco|día seis|día siete|día ocho|día nueve|día diez|este año|el año pasado|el año que viene|este mes|el mes pasado|el mes que viene|horario de apertura|abrir|cerrar|todos los días|a veces|a menudo|enseguida|gracias|muchas gracias|de nada|por favor|perdone|lo siento|hola|buenos días|buenas tardes|adiós|hasta luego|buenas noches|bienvenido|sí|no|vale|de acuerdo|querer|necesitar|hay|no hay|es`
};

const localPhrases = {
  airport: [
    ["security-waiting", "这是安检队伍吗？", "¿Es esta la cola para el control de seguridad?"],
    ["arrival-immigration", "我需要填写入境表吗？", "¿Tengo que rellenar algún formulario de entrada?"],
    ["baggage", "我的行李没有出来。", "Mi maleta no ha salido por la cinta."]
  ],
  transport: [
    ["tickets-stations", "可以直接刷银行卡进地铁吗？", "¿Puedo entrar en el metro pagando directamente con tarjeta?"],
    ["rail", "这是开往马德里的高铁吗？", "¿Es este el tren de alta velocidad a Madrid?"],
    ["taxi", "请开到这个地址。", "Lléveme a esta dirección, por favor."]
  ],
  hotel: [
    ["reservation", "我用这个名字订了房。", "Tengo una reserva a este nombre."],
    ["hotel-requests", "可以晚一点退房吗？", "¿Podría salir un poco más tarde?"],
    ["hotel-problems", "房间里的空调不工作。", "El aire acondicionado de la habitación no funciona."]
  ],
  food: [
    ["enter-wait", "请问两个人有位置吗？", "¿Tienen mesa para dos?"],
    ["ordering", "请给我一份今日菜单。", "Quisiera el menú del día, por favor."],
    ["food-checkout", "我们可以分开结账吗？", "¿Podemos pagar por separado?"],
    ["taste-diet", "我对坚果过敏。", "Soy alérgico a los frutos secos."]
  ],
  shopping: [
    ["price-discount", "这个打折吗？", "¿Esto está rebajado?"],
    ["payment", "可以用手机支付吗？", "¿Puedo pagar con el móvil?"],
    ["return-tax", "游客可以办理退税吗？", "¿Puedo solicitar la devolución del IVA? "]
  ],
  directions: [
    ["ask-route", "最近的地铁站在哪里？", "¿Dónde está la estación de metro más cercana?"],
    ["understand-route", "您可以在地图上指给我看吗？", "¿Me lo puede indicar en el mapa?"],
    ["distance-time", "走路要多长时间？", "¿Cuánto se tarda andando?"]
  ],
  emergency: [
    ["police-help", "请拨打112。", "Llame al 112, por favor."],
    ["doctor-pharmacy", "附近有值班药店吗？", "¿Hay alguna farmacia de guardia cerca?"],
    ["lost-stolen", "我的钱包被偷了。", "Me han robado la cartera."]
  ],
  basics: [
    ["courtesy", "好的，谢谢。", "Vale, gracias."],
    ["language-help", "我不会说西班牙语。", "No hablo español."],
    ["language-help", "可以说慢一点吗？", "¿Puede hablar más despacio?"],
    ["greetings", "你好，很高兴认识你。", "Hola, encantado de conocerte."]
  ]
};

// The shared skeleton already contains a compact phrasebook. These are
// hand-localized instead of passing through the expansion templates below.
const fixedPhrases = {
  airport_085: "¿Dónde está la puerta de embarque?",
  airport_086: "¿Dónde puedo recoger mi equipaje?",
  airport_087: "Quiero hacer transbordo.",
  hotel_079: "He perdido la llave.",
  hotel_080: "¿Puedo dejar aquí el equipaje?",
  hotel_081: "¿A qué hora hay que dejar la habitación?",
  hotel_082: "¿Me pueden cambiar de habitación?",
  food_073: "Para tomar aquí.",
  food_084: "Ya no quiero más, gracias.",
  food_085: "Tengo hambre.",
  food_086: "Tengo sed.",
  food_089: "¿Tienen la carta en chino?",
  food_090: "Póngame este, por favor.",
  food_091: "Sin picante, por favor.",
  food_092: "La cuenta, por favor.",
  food_093: "¿Podemos pedir ya?",
  food_094: "Tengo alergia a…",
  food_095: "Otro vaso de agua, por favor.",
  food_096: "¿Está bueno?",
  shopping_067: "¿Puedo solicitar la devolución del IVA?",
  shopping_068: "¿Me puede hacer algún descuento?",
  shopping_069: "Solo estoy mirando, gracias.",
  shopping_070: "Me llevo este.",
  shopping_071: "¿Puedo pagar con tarjeta?",
  shopping_072: "¿Lo tiene en una talla más grande?",
  shopping_073: "¿Me lo puedo probar?",
  directions_031: "¿Cómo se llega?",
  directions_032: "¿Dónde está…?",
  directions_033: "Lléveme a…, por favor.",
  directions_034: "Quiero ir a…",
  directions_035: "¿Cuántos minutos se tarda andando?",
  directions_036: "¿Se puede llegar en metro?",
  directions_037: "Me he perdido.",
  directions_038: "¿Dónde estoy ahora?",
  directions_039: "¿Me lo puede señalar en el mapa?",
  directions_040: "¿Puede repetirlo?",
  directions_041: "¿Cómo se llega a la estación?",
  directions_042: "¿Qué calle es esta?",
  directions_043: "¿Dónde está el aseo?",
  emergency_034: "He perdido el pasaporte.",
  emergency_035: "Me han robado la cartera.",
  emergency_036: "Necesito ayuda.",
  emergency_037: "Llame a la policía, por favor.",
  emergency_038: "Llame a una ambulancia, por favor.",
  emergency_039: "No me encuentro bien.",
  emergency_040: "Estoy enfermo.",
  emergency_041: "Tengo alergia a algún medicamento.",
  emergency_042: "¿Dónde hay una farmacia?",
  emergency_043: "Necesito ver a un médico.",
  emergency_044: "Es una emergencia.",
  numbers_072: "¿A qué hora abren?",
  numbers_073: "¿Qué hora es?",
  numbers_074: "¿Qué día de la semana es hoy?",
  numbers_075: "¿Qué fecha es hoy?",
  numbers_083: "Un momento, por favor.",
  expressions_014: "Entiendo.",
  expressions_015: "No entiendo.",
  expressions_019: "No pasa nada.",
  expressions_020: "No hay problema.",
  expressions_022: "Me gusta.",
  expressions_023: "No me gusta.",
  expressions_029: "No es.",
  expressions_030: "Me llamo…",
  expressions_031: "¿Cómo se llama?",
  expressions_032: "Soy de China.",
  expressions_033: "¿Habla inglés?",
  expressions_034: "Hable más despacio, por favor.",
  expressions_035: "Repítalo, por favor.",
  expressions_036: "¿Qué significa?",
  expressions_037: "¿Cómo se pronuncia?",
  expressions_038: "¿Cómo se escribe?",
  expressions_039: "¿Cuánto cuesta?",
  expressions_040: "¿Dónde está?",
  expressions_041: "¿Cuándo es?",
  expressions_042: "¿Por qué?",
  expressions_043: "¿Qué hago?",
  expressions_044: "¿Se puede?",
  expressions_045: "Sí, se puede.",
  expressions_046: "No se puede.",
  expressions_047: "¿Lo tienen en chino?"
};

const phrasePatterns = [
  (word) => [`我想了解“${word.zh}”。`, `Quisiera información sobre ${word.text}.`, "ask"],
  (word) => [`我需要处理“${word.zh}”。`, `Necesito ayuda con ${word.text}.`, "request"],
  (word) => [`可以帮我确认“${word.zh}”吗？`, `¿Puede confirmar lo de ${word.text}, por favor?`, "confirm"],
  (word) => [`关于“${word.zh}”，下一步该怎么做？`, `¿Qué tengo que hacer con ${word.text}?`, "repair"],
  (word) => [`请告诉我“${word.zh}”的情况。`, `¿Me puede explicar lo de ${word.text}?`, "ask"]
];

const emergencyCard = {
  title: "Tarjeta de emergencia",
  notice: "Solo para facilitar la comunicación en caso de emergencia.",
  foreignNameLabel: "护照拼音姓名",
  unknownBloodType: "Desconocido",
  labels: {
    name: "Nombre", nationality: "Nacionalidad", birthDate: "Fecha de nacimiento",
    bloodType: "Grupo sanguíneo", documentNumber: "Pasaporte / documento de identidad",
    emergencyContact: "Contacto de emergencia", emergencyPhone: "Teléfono",
    allergies: "Alergias", conditions: "Enfermedades / antecedentes"
  },
  dictionaries: {
    nationalities: [
      ["cn", "中国", "China"], ["jp", "日本", "Japón"], ["kr", "韩国", "Corea del Sur"],
      ["sg", "新加坡", "Singapur"], ["my", "马来西亚", "Malasia"], ["us", "美国", "Estados Unidos"],
      ["gb", "英国", "Reino Unido"], ["ca", "加拿大", "Canadá"], ["au", "澳大利亚", "Australia"],
      ["fr", "法国", "Francia"], ["de", "德国", "Alemania"], ["es", "西班牙", "España"],
      ["it", "意大利", "Italia"], ["other", "其他", "Otra"]
    ],
    allergies: [
      ["none", "无", "Ninguna"], ["penicillin", "青霉素", "Penicilina"],
      ["cephalosporin", "头孢菌素", "Cefalosporinas"], ["sulfonamides", "磺胺类", "Sulfamidas"],
      ["nsaids", "阿司匹林/NSAIDs", "Aspirina / AINE"], ["peanuts", "花生", "Cacahuetes"],
      ["nuts", "坚果", "Frutos secos"], ["shellfish", "海鲜/甲壳类", "Marisco / crustáceos"],
      ["milk", "牛奶", "Leche"], ["eggs", "鸡蛋", "Huevos"], ["gluten", "小麦/麸质", "Trigo / gluten"],
      ["soy", "大豆", "Soja"], ["latex", "乳胶", "Látex"], ["insect", "昆虫蜇伤", "Picaduras de insectos"]
    ],
    conditions: [
      ["none", "无", "Ninguna"], ["diabetes", "糖尿病", "Diabetes"],
      ["hypertension", "高血压", "Hipertensión"], ["heart", "心脏病", "Cardiopatía"],
      ["asthma", "哮喘", "Asma"], ["epilepsy", "癫痫", "Epilepsia"],
      ["kidney", "肾脏疾病", "Enfermedad renal"], ["anticoagulants", "正在服用抗凝药", "Toma anticoagulantes"],
      ["pregnancy", "怀孕", "Embarazo"]
    ]
  }
};
for (const rows of Object.values(emergencyCard.dictionaries)) {
  for (let index = 0; index < rows.length; index += 1) {
    const [code, zh, target] = rows[index];
    rows[index] = { code, zh, target };
  }
}

const localizedWords = new Map();
const chineseOverrides = {
  hotel_002: "国营古堡酒店",
  food_017: "西班牙小吃",
  food_018: "西班牙土豆饼",
  food_019: "西班牙海鲜饭",
  food_020: "西班牙冷汤",
  food_021: "西班牙炸丸子",
  food_022: "伊比利亚火腿",
  food_023: "吉事果",
  expressions_009: "下午好",
  numbers_015: "欧元"
};
const exampleCursor = new Map();
for (const scene of source.scenes) {
  const words = source.entries.filter((entry) => entry.sceneId === scene.id && entry.kind === "word");
  const translations = vocabulary[scene.id].split("|");
  if (words.length !== translations.length) throw new Error(`${scene.id}: expected ${words.length} translations, got ${translations.length}`);
  const expectedExamples = words.filter((entry) => entry.example).length;
  if (!exampleRewrites[scene.id] || exampleRewrites[scene.id].length !== expectedExamples) {
    throw new Error(`${scene.id}: expected ${expectedExamples} reviewed examples, got ${exampleRewrites[scene.id]?.length || 0}`);
  }
  words.forEach((entry, index) => {
    let example;
    if (entry.example) {
      const cursor = exampleCursor.get(scene.id) || 0;
      exampleCursor.set(scene.id, cursor + 1);
      const [zh, text] = exampleRewrites[scene.id][cursor];
      example = { id: `es-es_${entry.id}_example`, zh, text };
    }
    localizedWords.set(entry.id, {
      ...entry,
      zh: chineseOverrides[entry.id] || entry.zh,
      text: translations[index],
      audioPath: `audio/es/${entry.id}.mp3`,
      example
    });
  });
}

const phraseCursor = new Map();
const localCursor = new Map();
function localizePhrase(entry, sceneIndex) {
  const fixed = fixedPhrases[entry.id];
  const match = entry.id.match(/^en_[a-z]+_phrase_(\d{3})$/);
  let zh = entry.zh;
  let text = fixed;
  if (match) {
    const rewrites = phraseRewrites[entry.sceneId];
    if (!rewrites || rewrites.length !== 30) {
      throw new Error(`${entry.sceneId}: expected 30 reviewed expansion phrases, got ${rewrites?.length || 0}`);
    }
    [zh, text] = rewrites[Number(match[1]) - 1] || [];
  }
  if (!text) throw new Error(`Missing reviewed Spanish phrase for ${entry.id}`);
  const intent = text.includes("?") ? "ask" : "communicate";
  return {
    ...entry,
    id: entry.id.replace(/^en_/, "es_"),
    zh, text,
    direction: "traveler-says",
    intent,
    audioPath: `audio/es/${entry.id.replace(/^en_/, "es_")}.mp3`,
    example: undefined,
    pronunciation: undefined
  };
}

const scenePhraseIndexes = new Map();
const entries = source.entries.map((entry) => {
  if (entry.kind === "word") return localizedWords.get(entry.id);
  const index = scenePhraseIndexes.get(entry.sceneId) || 0;
  scenePhraseIndexes.set(entry.sceneId, index + 1);
  return localizePhrase(entry, index);
});

const pack = {
  id: "es-es",
  destinationId: "es",
  locale: "es-ES",
  speechLocale: "es-ES",
  languageCode: "es",
  languageLabel: "西班牙语",
  nativeLabel: "Español",
  pronunciationLabel: null,
  features: {
    beginnerModule: "es-es-beginner",
    beginnerAudioBase: "audio/es/beginner",
    emergencyCard
  },
  scenes: source.scenes,
  entries
};

const output = `(function () {\n  "use strict";\n  window.registerContentPack(${JSON.stringify(pack, null, 2)});\n})();\n`;
const outputDir = path.join(root, "languages", "es-es");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "pack.js"), output, "utf8");
console.log(`Generated es-es with ${entries.length} entries.`);

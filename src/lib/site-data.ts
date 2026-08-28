export const site = {
  name: "JCH Baile",
  legalName: "Clases de Baile en Jardines Club Hípico",
  shortDescription:
    "Clases de salsa, bachata, cumbia y ritmos de salón en el Salón de los Espejos de Jardines Club Hípico, Xochimilco.",
  phone: "+52 55 2311 8153",
  whatsapp: "525523118153",
  email: "jardinesclubhipico@gmail.com",
  address: "Duraznos S/N, Santa Inés, Xochimilco, 16810, Ciudad de México",
  addressShort: "Santa Inés, Xochimilco, CDMX",
  mapUrl: "https://maps.app.goo.gl/s52mSRk6gAvtBKn1A",
  parentSite: "https://jardinesclubhipico.com",
} as const;

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/maestra", label: "Tu maestra" },
  { href: "/ritmos", label: "Ritmos" },
  { href: "/membresias", label: "Membresías" },
  { href: "/salon", label: "El salón" },
  { href: "/preguntas", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const teacher = {
  name: "Adriana Mejía",
  role: "Maestra de baile",
  introduction:
    "Adriana Mejía será la profesora de las nuevas clases de JCH Baile. Su material documenta trabajo real en baile de salón, danzón, montajes escénicos y presentaciones con grupos de distintas edades.",
  specialties: ["Baile de salón", "Danzón", "Montaje escénico", "Trabajo grupal"],
} as const;

export const rhythms = [
  {
    slug: "salsa",
    name: "Salsa",
    number: "01",
    phrase: "Precisión, energía y conversación en pareja.",
    description:
      "Aprende desde la base: tiempo musical, desplazamientos, vueltas y conexión. La meta no es memorizar figuras; es poder bailar una canción completa con seguridad.",
    accent: "#ff6038",
    tempo: "Energía alta",
  },
  {
    slug: "bachata",
    name: "Bachata",
    number: "02",
    phrase: "Conexión, control y musicalidad.",
    description:
      "Paso base, cambios de dirección, giros y lectura de la pareja. Una clase progresiva para entender la música y bailar con fluidez, no solo seguir una coreografía.",
    accent: "#efb93f",
    tempo: "Energía media",
  },
  {
    slug: "cumbia",
    name: "Cumbia",
    number: "03",
    phrase: "El ritmo que ya conoces, ahora con técnica.",
    description:
      "Trabaja coordinación, cadencia, vueltas y recursos para pista social. Ideal para quien quiere dejar de improvisar siempre los mismos dos pasos.",
    accent: "#20b778",
    tempo: "Energía alegre",
  },
  {
    slug: "merengue",
    name: "Merengue",
    number: "04",
    phrase: "Ritmo directo, soltura inmediata.",
    description:
      "Una puerta de entrada amable al baile en pareja. Enfocamos ritmo, postura, conducción y confianza para que desde la primera sesión puedas moverte con intención.",
    accent: "#47a4ff",
    tempo: "Energía constante",
  },
  {
    slug: "danzon",
    name: "Danzón",
    number: "05",
    phrase: "Elegancia, pausa y presencia.",
    description:
      "Técnica de salón, desplazamiento, cuadros y escucha musical. Un ritmo donde el control pesa más que la velocidad y cada pausa forma parte del baile.",
    accent: "#b994ff",
    tempo: "Energía serena",
  },
  {
    slug: "cha-cha-cha",
    name: "Cha-cha-chá",
    number: "06",
    phrase: "Juego de pies y carácter.",
    description:
      "Aprende a marcar el tiempo, limpiar el paso y jugar con los acentos. La programación de ritmos puede rotar conforme se formen los grupos.",
    accent: "#ff76a7",
    tempo: "Energía rítmica",
  },
] as const;

export const memberships = [
  {
    id: "intensiva",
    name: "Intensiva",
    price: 800,
    classes: 12,
    frequency: "3 clases por semana",
    perClass: "$66.67 por clase",
    featured: true,
    description: "Para avanzar con continuidad y convertir la práctica en hábito.",
  },
  {
    id: "constante",
    name: "Constante",
    price: 600,
    classes: 8,
    frequency: "2 clases por semana",
    perClass: "$75 por clase",
    featured: false,
    description: "El equilibrio entre progreso real y una agenda ocupada.",
  },
  {
    id: "esencial",
    name: "Esencial",
    price: 300,
    classes: 4,
    frequency: "1 clase por semana",
    perClass: "$75 por clase",
    featured: false,
    description: "Una entrada sencilla para empezar sin comprometer toda tu semana.",
  },
] as const;

export const faqs = [
  {
    question: "¿Necesito saber bailar?",
    answer:
      "No. Las clases están pensadas para empezar desde cero y avanzar de forma progresiva. Si ya tienes experiencia, Adriana podrá orientarte hacia el grupo que mejor te convenga cuando se publiquen los horarios.",
  },
  {
    question: "¿Tengo que ir con pareja?",
    answer:
      "No. Puedes asistir solo o acompañado. En clase se trabaja la conexión y se organizan rotaciones para que nadie dependa de llegar con pareja.",
  },
  {
    question: "¿Las membresías son mensuales?",
    answer:
      "Sí. Cada membresía cubre cuatro semanas: 12 clases para el plan Intensiva, 8 para Constante y 4 para Esencial. También puedes tomar una clase individual por $80 MXN.",
  },
  {
    question: "¿Ya tienen horarios definidos?",
    answer:
      "Todavía no se han publicado. Se están formando los primeros grupos y los horarios se anunciarán antes de abrir inscripciones. Puedes escribir por WhatsApp para registrar tu interés y enterarte primero.",
  },
  {
    question: "¿Qué debo llevar?",
    answer:
      "Ropa cómoda, agua y calzado que te permita girar sin pegarse demasiado al piso. No necesitas comprar zapatos profesionales para comenzar.",
  },
  {
    question: "¿Dónde se imparten las clases?",
    answer:
      "En el Salón de los Espejos de Jardines Club Hípico, en Santa Inés, Xochimilco. Es un salón cubierto con pista amplia, escenario e iluminación ambiental.",
  },
] as const;

export const teacherPhotos = [
  {
    src: "/images/adriana-danzon-2024.webp",
    alt: "Adriana Mejía durante una presentación de danzón",
    label: "Danzón en escena",
  },
  {
    src: "/images/adriana-archivo-danza.webp",
    alt: "Fotografía histórica de una presentación de danza tradicional",
    label: "Archivo de danza",
  },
  {
    src: "/images/adriana-grupo-infantil.webp",
    alt: "Adriana Mejía con un grupo infantil después de una presentación",
    label: "Trabajo con grupos",
  },
  {
    src: "/images/adriana-vale-bailar.webp",
    alt: "Adriana Mejía y su pareja en un encuentro dedicado al danzón",
    label: "Encuentros de danzón",
  },
] as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

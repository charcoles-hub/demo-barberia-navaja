/* DEMO PORTFOLIO — Barbería */

export const site = {
  name: "Navaja & Co",
  tagline: "Barbería clásica, estilo moderno",
  logoText: "Navaja & Co",
  whatsapp: "34600333444",
  email: "hola@navajaco.es",
  formAccessKey: "TU-ACCESS-KEY-WEB3FORMS",

  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#features" },
    { label: "Precios", href: "#pricing" },
    { label: "Reservar", href: "#contacto" },
  ],

  hero: {
    eyebrow: "Barbería · Barcelona",
    title: "Tu mejor versión\nempieza por el corte",
    subtitle:
      "Cortes a navaja, arreglo de barba y afeitado clásico con toalla caliente. Reserva online en 30 segundos y olvídate de la cola.",
    ctaPrimary: { label: "Reservar cita", href: "#contacto" },
    ctaSecondary: { label: "Ver servicios", href: "#features" },
    image: "",
  },

  featuresTitle: "Lo que hacemos",
  features: [
    { icon: "✂️", title: "Corte de pelo", text: "Clásico o moderno, asesorado según tu estilo." },
    { icon: "🪒", title: "Afeitado a navaja", text: "Afeitado tradicional con toalla caliente." },
    { icon: "🧔", title: "Arreglo de barba", text: "Perfilado, recorte y aceites para barba cuidada." },
    { icon: "👶", title: "Corte infantil", text: "Para los más peques, sin prisas y con paciencia." },
  ],

  pricingTitle: "Nuestros precios",
  pricing: [
    { name: "Corte", price: "15€", period: "",
      features: ["Lavado incluido", "Asesoramiento de estilo", "Acabado a navaja"],
      cta: "Reservar", highlight: false },
    { name: "Corte + Barba", price: "22€", period: "",
      features: ["Corte completo", "Arreglo de barba", "Toalla caliente"],
      cta: "Reservar", highlight: true },
    { name: "Ritual completo", price: "35€", period: "",
      features: ["Corte + barba + afeitado", "Tratamiento facial", "Bebida de cortesía"],
      cta: "Reservar", highlight: false },
  ],

  cta: {
    title: "¿Listo para tu nuevo look?",
    subtitle: "Reserva online y entra directo. Sin esperas.",
    button: { label: "Reservar ahora", href: "#contacto" },
  },

  footer: {
    address: "Carrer de Gràcia 88, 08012 Barcelona",
    phone: "+34 600 333 444",
    hours: "Mar–Sáb · 10:00–20:30",
    social: { instagram: "https://instagram.com/", facebook: "", tiktok: "https://tiktok.com/" },
  },
} as const;

export type Site = typeof site;

export type Experience = {
  company: string;
  role: string;
  period: string;
  impact: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  problem: string;
  action: string;
  result: string;
  metric: string;
};

export const experiences: Experience[] = [
  {
    company: "Inverfin",
    role: "Ecommerce & Digital Growth Lead",
    period: "2023 — Actualidad",
    impact: [
      "Centralización de indicadores comerciales para acelerar decisiones ejecutivas.",
      "Optimización de flujos de ecommerce, medición y performance con foco en margen.",
      "Implementación de procesos de automatización para reporting y operación digital.",
    ],
  },
  {
    company: "Fortis Mayorista",
    role: "Ecommerce Operations Manager",
    period: "2021 — 2023",
    impact: [
      "Gestión estratégica y operativa del canal online mayorista.",
      "Mejora de catálogo, experiencia de compra y coordinación comercial.",
      "Construcción de rutinas de análisis para priorizar oportunidades de crecimiento.",
    ],
  },
  {
    company: "Teo S.A.",
    role: "Digital Business Analyst",
    period: "2019 — 2021",
    impact: [
      "Análisis de procesos comerciales para detectar fricciones y oportunidades digitales.",
      "Diseño de reportes accionables para equipos de venta y dirección.",
    ],
  },
  {
    company: "Casa Paraná",
    role: "Ecommerce & Customer Experience",
    period: "2018 — 2019",
    impact: [
      "Primeras iniciativas de gestión digital orientadas a conversión y atención al cliente.",
      "Aprendizaje operativo integral de catálogo, stock, comunicación y postventa.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Dashboard Ejecutivo Inverfin",
    description: "Centralización de KPIs para toma de decisiones.",
    stack: ["Excel", "Analytics", "BI"],
    problem: "La información comercial estaba distribuida en múltiples fuentes y demoraba la lectura ejecutiva.",
    action: "Diseñé un modelo de KPIs con vistas de ventas, conversión, margen y performance operativa.",
    result: "La dirección obtiene una lectura clara para priorizar acciones comerciales con mayor velocidad.",
    metric: "Decisiones más rápidas",
  },
  {
    title: "Automatización IA WhatsApp",
    description: "Arquitectura para clasificación automática de imágenes y consultas.",
    stack: ["AI", "AWS S3", "Automatización"],
    problem: "Las consultas visuales y repetitivas consumían tiempo operativo del equipo comercial.",
    action: "Arquitecté un flujo AI Native para recibir imágenes, clasificarlas y derivar respuestas o tareas.",
    result: "Menor carga manual, mejor tiempo de respuesta y base preparada para escalar atención inteligente.",
    metric: "Operación asistida por IA",
  },
  {
    title: "Cooperativa Vida y Luz",
    description: "Arquitectura digital integral para gestión de socios.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    problem: "La gestión de socios requería una estructura digital segura, ordenada y escalable.",
    action: "Definí la arquitectura de producto, datos y procesos para centralizar operación y trazabilidad.",
    result: "Base tecnológica preparada para profesionalizar la administración y mejorar la experiencia del socio.",
    metric: "Gestión centralizada",
  },
  {
    title: "Fortis Ecommerce",
    description: "Gestión estratégica y operacional ecommerce.",
    stack: ["Shopify", "Analytics", "Growth"],
    problem: "El canal necesitaba coordinación entre catálogo, ventas, performance y experiencia de usuario.",
    action: "Organicé la operación ecommerce con foco en prioridades comerciales, medición y mejora continua.",
    result: "Canal más ordenado, medible y alineado a objetivos de negocio mayorista.",
    metric: "Ecommerce operativo",
  },
];

export const stack = [
  "Shopify",
  "Google Analytics",
  "Google Ads",
  "Tag Manager",
  "Looker Studio",
  "Claude",
  "ChatGPT",
  "GitHub",
  "JavaScript",
  "HTML",
  "CSS",
];

export const kpis = [
  { label: "Experiencia", value: "+6", suffix: "años" },
  { label: "Empresas", value: "4", suffix: "sectores" },
  { label: "Foco", value: "360°", suffix: "ecommerce" },
  { label: "Modelo", value: "AI", suffix: "native" },
];

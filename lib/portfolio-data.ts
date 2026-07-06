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
    company: "Inverfin S.A.E.C.A.",
    role: "Ecommerce Strategy & Operations",
    period: "abril 2025 – Actualidad",
    impact: [
      "Plataforma principal: gestión integral y optimización avanzada sobre Shopify.",
      "Responsable de la carga masiva y actualización técnica de productos, asegurando la integridad de imágenes, descripciones optimizadas y categorización estratégica.",
      "Supervisión en tiempo real de stocks y actualización dinámica de precios para mantener coherencia comercial en el canal digital.",
      "Implementación y configuración de plugins de Shopify para mejorar funcionalidad, experiencia de usuario y conversión.",
      "Ejecución de acciones de posicionamiento SEO dentro de la plataforma para mejorar la visibilidad de productos en buscadores.",
      "Dirección de la estrategia de ecommerce y análisis de mercado para acompañar la expansión digital de la marca.",
      "Supervisión de operaciones de venta online y coordinación de equipos para el cumplimiento de KPIs comerciales.",
    ],
  },
  {
    company: "Fortis Mayorista",
    role: "Ecommerce Manager",
    period: "2023 – 2025",
    impact: [
      "Mantenimiento y optimización de la página web para mejorar la conversión y la satisfacción del cliente.",
      "Desarrollo e implementación de estrategias de marketing digital, incluyendo SEO, SEM, email marketing y redes sociales.",
      "Supervisión del catálogo de productos, incluyendo descripciones, imágenes y precios.",
      "Uso de herramientas analíticas para monitorear tráfico, comportamiento del usuario y oportunidades de mejora.",
    ],
  },
  {
    company: "Teo S.A. Agencia de Desarrollo Web/App",
    role: "Account Manager Ecommerce | Back Office",
    period: "2021 – 2023",
    impact: [
      "Gestión comercial y mantenimiento de relaciones estratégicas con clientes.",
      "Control de facturación, cobros y seguimiento de reportes mensuales.",
      "Supervisión y coordinación de equipos multidisciplinarios, incluyendo diseñadores, programadores y especialistas multimedia.",
      "Acompañamiento operativo en proyectos digitales vinculados a ecommerce y desarrollo web.",
    ],
  },
  {
    company: "Casa Paraná",
    role: "Supervisor de Ventas Digitales | Back Office Ecommerce",
    period: "2019 – 2021",
    impact: [
      "Administración integral del backend de la tienda online, asegurando la disponibilidad y el correcto funcionamiento del flujo de compra.",
      "Soporte técnico y atención tanto a usuarios internos como a clientes finales para resolver incidencias en la plataforma.",
      "Segmentación y distribución estratégica de prospectos hacia el equipo comercial, optimizando tiempos de respuesta.",
      "Supervisión de la relación entre el canal digital y el equipo de ventas físicas para maximizar cierre y fidelización.",
      "Mantenimiento de la base de datos de productos, precios y promociones vigentes.",
      "Generación de informes periódicos de ventas y rendimiento de leads para apoyar la toma de decisiones comerciales.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Dashboard Ejecutivo Inverfin",
    description:
      "Vista de indicadores comerciales para seguimiento de ventas, operación y prioridades.",
    stack: ["Excel", "Analytics", "BI"],
    problem:
      "La información clave estaba distribuida y costaba convertirla en una lectura clara para dirección.",
    action:
      "Ordené los indicadores por ventas, conversión, margen y operación para facilitar reuniones y seguimiento.",
    result:
      "El equipo puede revisar el estado del canal con mayor claridad y decidir próximos pasos con menos fricción.",
    metric: "Lectura ejecutiva",
  },
  {
    title: "Automatización IA WhatsApp",
    description:
      "Flujo de trabajo para clasificar imágenes y consultas frecuentes de forma asistida.",
    stack: ["AI", "AWS S3", "Automatización"],
    problem:
      "Las consultas repetitivas consumían tiempo y hacían más lenta la respuesta del equipo comercial.",
    action:
      "Definí una arquitectura para recibir imágenes, organizar archivos y preparar respuestas o derivaciones.",
    result:
      "La operación queda mejor preparada para atender más consultas sin depender únicamente de tareas manuales.",
    metric: "Menos carga manual",
  },
  {
    title: "Cooperativa Vida y Luz",
    description:
      "Diseño de una base digital para ordenar la gestión de socios y procesos internos.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    problem:
      "La administración necesitaba una estructura más ordenada para datos, procesos y trazabilidad.",
    action:
      "Planteé una arquitectura simple para centralizar información, roles y flujos administrativos.",
    result:
      "El proyecto cuenta con una base más clara para crecer sin perder control operativo.",
    metric: "Gestión ordenada",
  },
  {
  title: "Fortis Ecommerce",
  description:
    "Gestión y mejora operativa de un canal ecommerce desarrollado a medida, con foco en catálogo, campañas, medición y experiencia de usuario.",
  stack: ["Desarrollo Web", "Analytics", "Growth"],
  problem:
    "El canal necesitaba mayor consistencia entre catálogo, comunicación comercial, medición, experiencia de usuario y atención al cliente.",
  action:
    "Organicé rutinas de actualización, revisión de métricas, mejora de contenidos y coordinación con áreas comerciales y técnicas.",
  result:
    "El ecommerce ganó mayor orden operativo, mejor lectura de oportunidades y una gestión más alineada a los objetivos comerciales.",
  metric: "Canal más consistente",
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
  { label: "Empresas", value: "4", suffix: "organizaciones" },
  { label: "Especialidad", value: "360°", suffix: "ecommerce" },
  { label: "Enfoque", value: "AI", suffix: "operations" },
];

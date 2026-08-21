export type Capability = {
  title: string;
  description: string;
  skills: string[];
};

export const positioning = {
  eyebrow: "Líder de Negocios Digitales | Ecommerce, Operaciones, Datos e IA",
  headline: "Conecto estrategia comercial, ecommerce, datos y tecnología para impulsar resultados.",
  summary:
    "Profesional con más de 6 años de experiencia en ecommerce, retail, operaciones comerciales y negocios digitales. Coordino equipos, gestiono productos, clientes y ventas, y aplico datos, automatización e inteligencia artificial para mejorar procesos y resultados.",
};

export const capabilities: Capability[] = [
  {
    title: "Ecommerce",
    description:
      "Gestión integral del canal digital, desde la experiencia de compra hasta la optimización comercial.",
    skills: ["Shopify", "Conversión", "UX ecommerce", "Promociones", "SEO ecommerce"],
  },
  {
    title: "Marketing digital",
    description:
      "Planificación, medición y mejora de acciones orientadas a atraer demanda y generar ventas.",
    skills: ["Google Ads", "Meta Ads", "Merchant Center", "SEO", "Email marketing"],
  },
  {
    title: "Productos y catálogo",
    description:
      "Análisis del surtido y administración de información comercial para mejorar visibilidad y rendimiento.",
    skills: ["Catálogo", "Precios", "Stock", "Categorías", "Análisis de productos"],
  },
  {
    title: "Operaciones y logística",
    description:
      "Seguimiento del flujo de pedidos, disponibilidad e incidencias entre el canal digital y la operación.",
    skills: ["Pedidos", "Inventario", "Disponibilidad", "Entregas", "Mejora de procesos"],
  },
  {
    title: "Datos y analítica",
    description:
      "Lectura de indicadores, construcción de reportes y análisis para apoyar decisiones comerciales.",
    skills: ["SQL", "Excel", "Power BI", "GA4", "Looker Studio"],
  },
  {
    title: "Gestión ágil",
    description:
      "Priorización y coordinación de iniciativas con equipos comerciales, técnicos, creativos y operativos.",
    skills: ["Scrum", "Kanban", "Backlog", "KPIs", "Mejora continua"],
  },
];

export const workflow = [
  {
    number: "01",
    title: "Analizar",
    text: "Reviso ventas, tráfico, productos, stock y comportamiento del cliente.",
  },
  {
    number: "02",
    title: "Detectar",
    text: "Identifico oportunidades y puntos de fricción comerciales u operativos.",
  },
  {
    number: "03",
    title: "Priorizar",
    text: "Ordeno iniciativas según impacto, urgencia y esfuerzo mediante un backlog.",
  },
  {
    number: "04",
    title: "Coordinar",
    text: "Conecto marketing, tecnología, ventas, productos y operación.",
  },
  {
    number: "05",
    title: "Medir y mejorar",
    text: "Sigo los KPIs, documento aprendizajes y aplico mejora continua.",
  },
];

export const expandedToolCategories = [
  {
    title: "Ecommerce y productos",
    items: [
      "Shopify",
      "Shopify Plus",
      "Catálogo digital",
      "Gestión de productos",
      "Precios y promociones",
      "Inventario y disponibilidad",
      "SEO ecommerce",
      "Google Merchant Center",
      "WordPress",
    ],
  },
  {
    title: "Analítica, SQL y reporting",
    items: [
      "SQL",
      "PostgreSQL",
      "Supabase",
      "Microsoft Excel",
      "Power BI",
      "Google Analytics 4",
      "Google Tag Manager",
      "Looker Studio",
      "Search Console",
      "Microsoft Clarity",
    ],
  },
  {
    title: "Marketing digital",
    items: [
      "Google Ads",
      "Meta Ads",
      "Email marketing",
      "SEO",
      "SEM",
      "Medición de conversiones",
      "Campañas comerciales",
    ],
  },
  {
    title: "Operaciones y logística",
    items: [
      "Flujo de pedidos",
      "Control de stock",
      "Disponibilidad de productos",
      "Seguimiento de entregas",
      "Gestión de incidencias",
      "Coordinación comercial",
      "Mejora de procesos",
    ],
  },
  {
    title: "Scrum y gestión",
    items: [
      "Scrum",
      "Kanban",
      "Gestión de backlog",
      "Priorización",
      "Definición de KPIs",
      "Coordinación multidisciplinaria",
      "Mejora continua",
    ],
  },
  {
    title: "Automatización e inteligencia artificial",
    items: [
      "ChatGPT",
      "Claude",
      "Codex",
      "Gemini",
      "n8n",
      "Chatbots",
      "Automatización de procesos",
      "AI Operations",
    ],
  },
  {
    title: "Tecnología y desarrollo",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Prisma",
      "Neon",
      "APIs",
      "Figma",
      "Canva",
    ],
  },
];

export const technicalPractice = [
  {
    title: "Frontend",
    description:
      "Desarrollo y evolución de interfaces web responsive, componentes reutilizables y funcionalidades orientadas a usuarios reales.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Datos y backend aplicado",
    description:
      "Modelado y consulta de datos, integraciones con servicios y construcción de funciones para aplicaciones y paneles administrativos.",
    skills: ["SQL", "PostgreSQL", "Supabase", "Prisma", "Neon", "APIs"],
  },
  {
    title: "Mantenimiento y entrega",
    description:
      "Corrección de errores, ajustes de funcionalidades, pruebas, seguimiento de soluciones y despliegues controlados.",
    skills: ["Git", "GitHub", "Debugging", "Pruebas funcionales", "Vercel", "CI/CD"],
  },
];

export const experienceEnhancements: Record<string, string[]> = {
  "Inverfin S.A.E.C.A.": [
    "Liderazgo de un equipo de 3 personas y coordinación transversal con áreas comerciales, marketing y operaciones.",
    "Contribución a un incremento aproximado del 30% en ventas digitales durante seis meses, de acuerdo con reportes internos.",
    "Gestión de aproximadamente 30 categorías comerciales y análisis del rendimiento de productos y ventas digitales.",
    "Seguimiento de disponibilidad, precios, promociones y calidad de la información publicada.",
    "Coordinación entre ecommerce, marketing, proveedores tecnológicos, áreas comerciales y operación.",
    "Priorización de mejoras mediante backlog, seguimiento de tareas y enfoque de mejora continua.",
    "Monitoreo del flujo de compra, carritos abandonados e incidencias que afectan la conversión.",
  ],
  "Fortis Mayorista": [
    "Liderazgo directo de un equipo de 13 colaboradores en la ejecución comercial y operativa del canal.",
    "Gestión de un catálogo superior a 100 referencias y análisis de surtido para un ecommerce B2B.",
    "Coordinación de pruebas, carga de productos y preparación comercial antes de la publicación.",
    "Seguimiento de tráfico, comportamiento y oportunidades de optimización del canal.",
  ],
  "Teo S.A. Agencia de Desarrollo Web/App": [
    "Gestión de una cartera de 10 clientes y proyectos, desde el relevamiento hasta el seguimiento de entregables.",
    "Organización de requerimientos, prioridades y entregables con equipos multidisciplinarios.",
    "Seguimiento operativo y comercial de proyectos digitales bajo ciclos de trabajo coordinados.",
  ],
  "Casa Paraná": [
    "Supervisión de un equipo de 6 personas en ventas digitales y back office ecommerce.",
    "Gestión de un catálogo superior a 100 referencias y seguimiento del flujo de prospectos, pedidos e incidencias.",
    "Control de productos, precios, promociones y disponibilidad comercial del canal digital.",
    "Análisis de ventas y rendimiento de leads para apoyar la planificación operativa.",
  ],
};

export const outcomeTypes = [
  "Ventas y conversión",
  "Rendimiento de productos",
  "Disponibilidad y stock",
  "Tráfico y campañas",
  "Carritos y prospectos",
  "Eficiencia operativa",
];

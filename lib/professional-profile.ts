export type Capability = {
  title: string;
  description: string;
  skills: string[];
};

export const positioning = {
  eyebrow: "Marketing Digital & Performance | Ecommerce, Datos y Automatización",
  headline: "Transformo datos digitales en hallazgos, oportunidades y mejoras medibles.",
  summary:
    "Profesional con más de 6 años de experiencia en ecommerce, marketing digital, operaciones y productos digitales. Analizo indicadores, elaboro reportes, configuro dashboards y aplico automatización para mejorar procesos, precisión y resultados.",
};

export const capabilities: Capability[] = [
  {
    title: "Performance y reporting",
    description:
      "Seguimiento de KPIs, control de calidad y elaboración de reportes claros para apoyar decisiones.",
    skills: ["KPIs", "SLAs", "Reporting", "QA de datos", "Documentación"],
  },
  {
    title: "Dashboards y visualización",
    description:
      "Configuración de tableros para convertir múltiples indicadores en una lectura simple y accionable.",
    skills: ["Looker Studio", "Power BI", "Excel", "SQL", "Data storytelling"],
  },
  {
    title: "Analítica web y ecommerce",
    description:
      "Análisis de tráfico, comportamiento, conversión, productos y oportunidades del recorrido digital.",
    skills: ["GA4", "Tag Manager", "Conversión", "Tráfico", "Shopify"],
  },
  {
    title: "Campañas y benchmarking",
    description:
      "Medición de campañas, comparación de resultados y detección de oportunidades frente al mercado.",
    skills: ["Google Ads", "Meta Ads", "Benchmarks", "Competencia", "SEO/SEM"],
  },
  {
    title: "Automatización de procesos",
    description:
      "Diseño de flujos para reducir tareas manuales, integrar información y mejorar la precisión.",
    skills: ["n8n", "APIs", "IA", "SQL", "Mejora continua"],
  },
  {
    title: "Stakeholders y soporte",
    description:
      "Presentación de hallazgos y soporte a equipos comerciales, técnicos, creativos y operativos.",
    skills: ["Presentaciones", "Soporte", "Coordinación", "Backlog", "Comunicación"],
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
    title: "Datos y dashboards",
    description:
      "Preparación, consulta y visualización de información para construir reportes confiables y fáciles de interpretar.",
    skills: ["SQL", "PostgreSQL", "Excel", "Power BI", "Looker Studio", "GA4"],
  },
  {
    title: "Integraciones y automatización",
    description:
      "Conexión de servicios, fuentes de datos y flujos que reducen carga operativa y evitan duplicaciones.",
    skills: ["n8n", "APIs", "Supabase", "Webhooks", "IA", "Automatización"],
  },
  {
    title: "Desarrollo y soporte",
    description:
      "Construcción y mantenimiento de herramientas digitales, pruebas funcionales y soporte técnico a usuarios y equipos.",
    skills: ["React", "Next.js", "TypeScript", "GitHub", "Debugging", "Vercel"],
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

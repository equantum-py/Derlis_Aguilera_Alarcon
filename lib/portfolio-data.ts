export type Experience = {
  company: string;
  role: string;
  period: string;
  impact: string[];
};

export type Project = {
  title: string;
  website: string;
  image: string;
  role: string;
  ownership: string;
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
      "Implementación y configuración de plugins (apps) de Shopify para mejorar funcionalidad, experiencia de usuario y conversión.",
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
      "Desarrollo e implementación de estrategias de marketing digital (SEO, SEM, email marketing y redes sociales).",
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
      "Segmentación y distribución estratégica de prospectos (leads) hacia el equipo comercial, optimizando tiempos de respuesta.",
      "Supervisión de la relación entre el canal digital y el equipo de ventas físicas para maximizar cierre y fidelización.",
      "Mantenimiento de la base de datos de productos, precios y promociones vigentes.",
      "Generación de informes periódicos de ventas y rendimiento de leads para apoyar la toma de decisiones comerciales.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Inverfin Ecommerce",
    website: "inverfin.com.py",
    image: "/projects/inverfin.jpg",
    role: "Ecommerce Strategy & Operations",
    ownership: "Sitio creado por otros desarrolladores. Optimización, operación y crecimiento ecommerce a mi cargo.",
    description: "Operación y optimización ecommerce sobre Shopify, con foco en catálogo, SEO, automatización, IA, chatbots, n8n, analítica y mejora comercial.",
    stack: ["Shopify", "SEO", "IA", "Chatbots", "n8n", "Analytics", "Ecommerce Operations"],
    problem: "El canal necesitaba mayor orden operativo, mejor visibilidad, automatización y una gestión más estratégica sobre Shopify.",
    action: "Implementé mejoras de catálogo, SEO, configuración de apps, automatización, uso de IA, chatbots, flujos operativos y análisis de rendimiento.",
    result: "El ecommerce cuenta con una operación más ordenada, mejor capacidad de atención digital y una base más sólida para crecer.",
    metric: "Optimización ecommerce",
  },
  {
    title: "Fortis Ecommerce Mayorista",
    website: "fortis.com.py",
    image: "/projects/fortis.jpg",
    role: "Ecommerce Manager",
    ownership: "Desarrollo realizado por otros desarrolladores. Participación desde etapa inicial hasta publicación final.",
    description: "Participación integral en el lanzamiento del primer ecommerce mayorista en Paraguay, desde la visión operativa y comercial.",
    stack: ["Desarrollo Web", "Ecommerce B2B", "Catálogo", "Analytics", "Growth"],
    problem: "El negocio necesitaba llevar su operación mayorista a un canal digital ordenado, funcional y preparado para clientes B2B.",
    action: "Acompañé la creación desde el inicio, coordinando estructura de catálogo, pruebas funcionales, revisión de experiencia, carga de productos y preparación comercial.",
    result: "Se publicó un canal ecommerce mayorista con una base operativa clara para ventas digitales B2B.",
    metric: "Primer ecommerce mayorista",
  },
  {
    title: "Marmolería Pietra",
    website: "marmoleriapietra.com",
    image: "/projects/marmoleria-pietra.jpg",
    role: "Creación web y estrategia digital",
    ownership: "Proyecto creado/desarrollado por mí/eQuantum.",
    description: "Creación de sitio web institucional para fortalecer presencia digital, presentar servicios y generar consultas comerciales.",
    stack: ["Web Design", "Desarrollo Web", "UX", "SEO", "Captación"],
    problem: "La marca necesitaba una presencia digital profesional para mostrar trabajos, servicios y generar confianza.",
    action: "Diseñé y desarrollé una web clara, visual y orientada a servicios, con estructura comercial y llamadas a la acción.",
    result: "La empresa cuenta con una presencia digital más profesional y un canal más claro para recibir consultas.",
    metric: "Sitio creado desde cero",
  },
  {
    title: "Corpicia",
    website: "corpicia.com.py",
    image: "/projects/corpicia.jpg",
    role: "Creación web, analítica y captación digital",
    ownership: "Proyecto creado/desarrollado por mí/eQuantum.",
    description: "Creación de sitio web institucional con foco en presentación de servicios, captación de prospectos y medición comercial.",
    stack: ["Web Design", "Desarrollo Web", "Analytics", "SEO", "Captación"],
    problem: "La empresa necesitaba ordenar su presencia digital y mejorar la forma de presentar sus servicios.",
    action: "Desarrollé la estructura web, contenidos, experiencia de navegación y base de medición para acompañar acciones comerciales.",
    result: "Corpicia cuenta con una web más clara, profesional y preparada para captar y medir oportunidades comerciales.",
    metric: "Presencia digital creada",
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

export const contact = {
  email: "derlisa567@gmail.com",
  whatsapp: "595985194953",
  whatsappLabel: "0985194953",
  linkedin: "https://www.linkedin.com/in/derlis-alexander-aguilera?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};

export const toolCategories = [
  {
    title: "Ecommerce y plataformas",
    items: ["Shopify", "Ecommerce B2B", "Catálogo digital", "Apps Shopify", "SEO on-platform"],
  },
  {
    title: "Ads, analytics y reporting",
    items: ["Google Analytics", "Google Ads", "Tag Manager", "Looker Studio", "Excel", "BI"],
  },
  {
    title: "IA y automatización",
    items: ["ChatGPT", "Claude", "Chatbots", "n8n", "Automatización", "AI Operations"],
  },
  {
    title: "Web y lenguajes",
    items: ["HTML", "CSS", "JavaScript", "Next.js", "PostgreSQL", "Prisma", "GitHub"],
  },
];

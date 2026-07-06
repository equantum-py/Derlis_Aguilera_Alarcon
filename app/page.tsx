import { Reveal } from "../components/reveal";
import { experiences, kpis, projects, stack } from "../lib/portfolio-data";

const focusAreas = [
  "Ecommerce management",
  "Shopify operations",
  "Analítica comercial",
  "Automatización con IA",
];

const workflow = [
  "Canal digital",
  "Datos de operación",
  "Automatización",
  "Lectura comercial",
  "Decisión",
];

const contact = {
  email: "derlisa567@gmail.com",
  whatsapp: "595985194953",
  whatsappLabel: "0985194953",
  linkedin:
    "https://www.linkedin.com/in/derlis-alexander-aguilera?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};

const metrics = [
  ["Ecommerce Management", 94],
  ["AI Operations", 88],
  ["Business Intelligence", 86],
  ["Digital Growth", 90],
] as const;

export default function Home() {
  return (
    <main>
      <a
        className="mobile-whatsapp"
        href={`https://wa.me/${contact.whatsapp}`}
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp
      </a>

      <nav className="nav">
        <a className="brand" href="#top">
          Derlis Aguilera
        </a>
        <div>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Casos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <Reveal>
          <p className="eyebrow">
            Ecommerce Strategy & AI Operations Specialist
          </p>
          <h1>Ecommerce, estrategia digital y operaciones con IA.</h1>
          <p className="hero-copy">
            Soy Derlis Aguilera. Ayudo a ordenar canales ecommerce, medir mejor
            y automatizar tareas para vender con más claridad.
          </p>
          <div className="actions">
            <a
              className="button primary"
              href={`https://wa.me/${contact.whatsapp}`}
            >
              WhatsApp
            </a>
            <a className="button" href="#projects">
              Ver casos
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="profile-photo-card">
            <div className="profile-photo-wrap">
              <img
                src="/profile/derlis.jpg"
                alt="Foto profesional de Derlis Aguilera"
                className="profile-photo"
              />
            </div>

            <div className="profile-summary">
              <h2>Derlis Aguilera</h2>
              <p>
                +6 años entre ecommerce, ventas, analítica y operación digital.
              </p>

              <ul>
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="section kpi-grid" aria-label="KPI Impact">
        {kpis.map((kpi) => (
          <Reveal key={kpi.label}>
            <article className="kpi-card">
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
              <p>{kpi.suffix}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section two-col" id="about">
        <Reveal>
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2>Ordenar, medir y mejorar canales digitales.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="prose">
            <p>
              Combino operación ecommerce, análisis comercial, coordinación de
              equipos y uso práctico de IA. La prioridad es simple: vender mejor,
              reducir trabajo repetitivo y decidir con datos claros.
            </p>
            <p>
              Trabajé en Inverfin S.A.E.C.A., Fortis Mayorista, Teo S.A. y Casa
              Paraná, conectando catálogo, reporting, procesos comerciales y
              seguimiento de KPIs.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="experience">
        <Reveal>
          <p className="eyebrow">Experiencia laboral</p>
          <h2>Experiencia en ecommerce, operación y estrategia digital.</h2>
        </Reveal>

        <div className="timeline">
          {experiences.map((item) => (
            <Reveal key={item.company}>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <time>{item.period}</time>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <ul>
                  {item.impact.map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section metrics-section">
        <Reveal>
          <p className="eyebrow">KPI Impact</p>
          <h2>Áreas de especialización.</h2>
        </Reveal>

        <div className="metrics-card">
          {metrics.map(([label, value]) => (
            <div className="metric-row" key={label}>
              <div>
                <span>{label}</span>
                <strong>{value}%</strong>
              </div>
              <progress value={value} max="100" />
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal>
          <p className="eyebrow">Proyectos y casos</p>
          <h2>Casos resumidos para lectura rápida.</h2>
        </Reveal>

        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    className="project-image"
                  />
                </div>

                <div className="project-topline">
                  <span>{project.metric}</span>
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.website}
                  </a>
                </div>

                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-ownership">{project.ownership}</p>
                <p className="project-description">{project.description}</p>

                <div
                  className="project-tags"
                  aria-label={`Stack de ${project.title}`}
                >
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <dl className="case-list">
                  <div>
                    <dt>Problema</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Acción</dt>
                    <dd>{project.action}</dd>
                  </div>
                  <div>
                    <dt>Resultado</dt>
                    <dd>{project.result}</dd>
                  </div>
                </dl>

                <a
                  className="case-link"
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver caso
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section two-col">
        <Reveal>
          <div>
            <p className="eyebrow">AI Operations</p>
            <h2>IA aplicada a procesos concretos, no a promesas abstractas.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="workflow-card">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section stack-section">
        <Reveal>
          <p className="eyebrow">Herramientas de trabajo</p>
          <h2>Stack usado para operar, medir y mejorar.</h2>
        </Reveal>

        <div className="tool-list">
          {stack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="section philosophy">
        <Reveal>
          <p className="eyebrow">Criterio de crecimiento</p>
          <h2>Cómo entiendo el crecimiento digital</h2>
          <p>
            Crecimiento digital es vender mejor, operar con menos fricción y
            cuidar la rentabilidad.
          </p>
        </Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2>¿Tu ecommerce necesita más orden, medición o automatización?</h2>
          <p>
            Conversemos sobre estrategia ecommerce, analítica, Shopify y
            operaciones con IA.
          </p>

          <div className="contact-links">
            <a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <p className="contact-detail">
            {contact.whatsappLabel} · {contact.email}
          </p>

          <a
            className="button primary"
            href={`https://wa.me/${contact.whatsapp}`}
          >
            Escribirme por WhatsApp
          </a>
        </Reveal>
      </section>
    </main>
  );
}

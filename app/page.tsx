import { Reveal } from "@/components/reveal";
import { experiences, kpis, projects, stack } from "@/lib/portfolio-data";

const focusAreas = ["Ecommerce management", "Shopify operations", "Analítica comercial", "Automatización con IA"];
const workflow = ["Canal digital", "Datos de operación", "Automatización", "Lectura comercial", "Decisión"];
const metrics = [
  ["Ecommerce Management", 94],
  ["AI Operations", 88],
  ["Business Intelligence", 86],
  ["Digital Growth", 90],
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">Derlis Aguilera</a>
        <div>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Casos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <Reveal>
          <p className="eyebrow">Ecommerce Strategy & AI Operations Specialist</p>
          <h1>Operación ecommerce, estrategia digital y automatización con criterio de negocio.</h1>
          <p className="hero-copy">
            Soy Derlis Aguilera. Trabajo con canales digitales, equipos comerciales y datos para ordenar la operación,
            mejorar la conversión y encontrar oportunidades reales de crecimiento.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">Ver casos</a>
            <a className="button" href="#contact">Contactar</a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="intro-card">
            <span className="portrait">DA</span>
            <p>Más de 6 años trabajando entre ecommerce, ventas, analítica y back office digital.</p>
            <ul>
              {focusAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
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
            <h2>Un perfil orientado a ordenar, medir y hacer crecer canales digitales.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="prose">
            <p>
              Mi experiencia combina operación ecommerce, análisis comercial, coordinación de equipos y adopción práctica de IA.
              Me interesa que la tecnología ayude a vender mejor, reducir tareas repetitivas y tomar decisiones con información más clara.
            </p>
            <p>
              He trabajado en Inverfin S.A.E.C.A., Fortis Mayorista, Teo S.A. y Casa Paraná, con responsabilidades que van desde
              gestión de catálogo y Shopify hasta reporting, procesos comerciales y seguimiento de KPIs.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="experience">
        <Reveal>
          <p className="eyebrow">Experiencia laboral</p>
          <h2>Una evolución ligada al ecommerce, la operación y la estrategia digital.</h2>
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
                  {item.impact.map((impact) => <li key={impact}>{impact}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section metrics-section">
        <Reveal>
          <p className="eyebrow">KPI Impact</p>
          <h2>Indicadores personales de especialización.</h2>
        </Reveal>
        <div className="metrics-card">
          {metrics.map(([label, value]) => (
            <div className="metric-row" key={label}>
              <div><span>{label}</span><strong>{value}%</strong></div>
              <progress value={value} max="100" />
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal>
          <p className="eyebrow">Proyectos y casos</p>
          <h2>Trabajo presentado como problema, acción y resultado.</h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <div className="project-topline">
                  <span>{project.metric}</span>
                  <p>{project.stack.join(" · ")}</p>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <dl className="case-list">
                  <div><dt>Problema</dt><dd>{project.problem}</dd></div>
                  <div><dt>Acción</dt><dd>{project.action}</dd></div>
                  <div><dt>Resultado</dt><dd>{project.result}</dd></div>
                </dl>
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
          {stack.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>

      <section className="section philosophy">
        <Reveal>
          <p className="eyebrow">Criterio de crecimiento</p>
          <h2>Cómo entiendo el crecimiento digital</h2>
          <p>No miro solamente ROAS. Analizo margen, conversión, experiencia de usuario, capacidad operativa y rentabilidad.</p>
        </Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2>Si tu ecommerce necesita más orden, medición o automatización, conversemos.</h2>
          <p>Puedo ayudar en estrategia, operación Shopify, análisis comercial y adopción práctica de IA.</p>
          <div className="contact-links">
            <a href="mailto:derlis.aguilera@example.com">Email</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <a className="button primary" href="mailto:derlis.aguilera@example.com">Trabajemos juntos</a>
        </Reveal>
      </section>
    </main>
  );
}

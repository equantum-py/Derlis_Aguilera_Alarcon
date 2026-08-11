import { Reveal } from "../components/reveal";
import { contact, experiences, kpis } from "../lib/portfolio-data";
import {
  capabilities,
  outcomeTypes,
  positioning,
  workflow,
} from "../lib/professional-profile";

const focusAreas = [
  "Ecommerce",
  "Marketing",
  "Productos",
  "Operaciones",
  "Logística",
  "SQL y datos",
];

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

      <nav className="nav" aria-label="Navegación principal">
        <a className="brand" href="/">Derlis Aguilera</a>
        <div>
          <a href="/">Inicio</a>
          <a href="#especialidades">Especialidades</a>
          <a href="/experiencia">Experiencia</a>
          <a href="/herramientas">Herramientas</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <Reveal>
          <p className="eyebrow">{positioning.eyebrow}</p>
          <h1>Derlis Aguilera</h1>
          <p className="hero-copy">{positioning.headline}</p>
          <p>{positioning.summary}</p>

          <div className="hero-role-list" aria-label="Áreas profesionales">
            {focusAreas.map((area) => <span key={area}>{area}</span>)}
          </div>

          <div className="actions">
            <a className="button primary" href={`https://wa.me/${contact.whatsapp}`}>
              Contactar por WhatsApp
            </a>
            <a className="button" href="/experiencia">Ver experiencia</a>
            <a className="button" href={contact.cv} download>Descargar CV</a>
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
              <h2>Ecommerce de punta a punta</h2>
              <p>+6 años conectando negocio, clientes, productos, datos y operación digital.</p>
              <ul>
                <li>Visión comercial</li>
                <li>Decisiones con datos</li>
                <li>Mejora continua</li>
                <li>Coordinación de equipos</li>
              </ul>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="section kpi-grid" aria-label="Resumen profesional">
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

      <section className="section" id="especialidades">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Áreas de especialización</p>
            <h2>Una visión integral del negocio ecommerce.</h2>
            <p>
              Trabajo sobre todo el recorrido digital: captación, productos,
              experiencia de compra, análisis, operación y seguimiento.
            </p>
          </div>
        </Reveal>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <Reveal key={capability.title}>
              <article className="capability-card">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="tool-list">
                  {capability.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="metodo">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Cómo gestiono un ecommerce</p>
            <h2>Del dato a la mejora operativa.</h2>
            <p>
              Un método simple para convertir información y necesidades del
              negocio en acciones coordinadas y medibles.
            </p>
          </div>
        </Reveal>

        <div className="workflow-grid">
          {workflow.map((step) => (
            <Reveal key={step.number}>
              <article className="workflow-item">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section two-col">
        <Reveal>
          <div>
            <p className="eyebrow">Actualmente</p>
            <div className="company-heading">
              <img
                src="/logo/logo-inverfin.png"
                alt="Logo de Inverfin S.A.E.C.A."
                className="company-logo company-logo-large"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="prose">
            <h3>Ecommerce Strategy & Operations</h3>
            <p>
              Gestiono y optimizo la operación ecommerce sobre Shopify,
              conectando catálogo, productos, precios, stock, experiencia,
              marketing, analítica, automatización y coordinación operativa.
            </p>
            <p>
              Analizo oportunidades comerciales, priorizo mejoras y acompaño a
              equipos internos y proveedores para impulsar un canal digital más
              ordenado, medible y preparado para crecer.
            </p>
            <div className="tool-list">
              <span>Shopify Plus</span>
              <span>Análisis de productos</span>
              <span>Operación ecommerce</span>
              <span>Marketing y conversión</span>
              <span>Scrum y backlog</span>
              <span>Analytics y reporting</span>
              <span>Automatización</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="experience-short">
        <Reveal>
          <p className="eyebrow">Trayectoria</p>
          <h2>Experiencia en distintas etapas del ecommerce.</h2>
        </Reveal>

        <div className="timeline compact-timeline">
          {experiences.map((item) => (
            <Reveal key={item.company}>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <time>{item.period}</time>
                  <div className="experience-logo-wrap">
                    <img src={item.logo} alt={item.logoAlt} className="experience-logo" />
                  </div>
                  <h3 className="sr-only">{item.company}</h3>
                  <p>{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="section-actions">
          <a className="button" href="/experiencia">Ver experiencia y casos</a>
        </div>
      </section>

      <section className="section philosophy">
        <Reveal>
          <p className="eyebrow">Impacto que analizo</p>
          <h2>Decisiones comerciales respaldadas por indicadores.</h2>
          <p>
            Cada iniciativa debe responder a un objetivo y contar con una forma
            clara de evaluar su resultado, sin presentar cifras que no hayan
            sido verificadas.
          </p>
          <div className="outcome-list">
            {outcomeTypes.map((outcome) => <span key={outcome}>{outcome}</span>)}
          </div>
          <div className="actions">
            <a className="button primary" href={contact.cv} download>Descargar CV</a>
            <a className="button" href="/herramientas">Ver conocimientos</a>
          </div>
        </Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2>¿Buscás mejorar el rendimiento de tu ecommerce?</h2>
          <p>
            Conversemos sobre productos, marketing, analítica, operación,
            logística, Shopify o mejora de procesos.
          </p>
          <div className="contact-links">
            <a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.cv} download>Descargar CV</a>
          </div>
          <p className="contact-detail">
            {contact.whatsappLabel} · {contact.email}
          </p>
        </Reveal>
      </section>
    </main>
  );
}

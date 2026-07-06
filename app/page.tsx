import { Reveal } from "../components/reveal";
import { contact, experiences, kpis } from "../lib/portfolio-data";

const focusAreas = ["Ecommerce", "Shopify", "Analytics", "AI Operations"];

export default function Home() {
  const featuredExperience = experiences;

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
        <a className="brand" href="/">
          Derlis Aguilera
        </a>

        <div>
          <a href="/">Inicio</a>
          <a href="/experiencia">Experiencia</a>
          <a href="/herramientas">Herramientas</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <Reveal>
          <p className="eyebrow">
            Ecommerce Strategy & AI Operations Specialist
          </p>

          <h1>Derlis Aguilera</h1>

          <p className="hero-copy">
            Ayudo a empresas a ordenar, medir y hacer crecer canales ecommerce
            mediante estrategia, operación, analítica, automatización e
            inteligencia artificial.
          </p>

          <div className="actions">
            <a
              className="button primary"
              href={`https://wa.me/${contact.whatsapp}`}
            >
              WhatsApp
            </a>

            <a className="button" href="/experiencia">
              Ver experiencia
            </a>

            <a className="button" href="/cv/derlis-aguilera-cv.pdf" download>
              Descargar CV
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
              <h2>Ecommerce, operación e IA</h2>

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

      <section className="section two-col">
        <Reveal>
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2>Perfil orientado a negocio, ecommerce y mejora continua.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="prose">
            <p>
              Soy especialista en ecommerce, estrategia digital y operaciones
              con IA. Trabajo conectando negocio, tecnología, analítica y
              procesos comerciales para mejorar la operación digital y la toma
              de decisiones.
            </p>

            <p>
              Mi enfoque combina Shopify, gestión de catálogo, SEO ecommerce,
              automatización, reporting, chatbots, n8n y coordinación con
              equipos comerciales y técnicos.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section two-col">
        <Reveal>
          <div>
            <p className="eyebrow">Actualmente</p>
            <h2>Inverfin S.A.E.C.A.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="prose">
            <h3>Ecommerce Strategy & Operations</h3>

            <p>
              Actualmente trabajo en Inverfin S.A.E.C.A. gestionando y
              optimizando la operación ecommerce sobre Shopify. Mi trabajo
              incluye catálogo, productos, SEO, apps, automatización, IA,
              chatbots, análisis comercial, mejora de procesos y coordinación
              con equipos para impulsar el crecimiento digital.
            </p>

            <div className="tool-list">
              <span>Shopify Operations</span>
              <span>Gestión de catálogo</span>
              <span>SEO ecommerce</span>
              <span>Automatización e IA</span>
              <span>Chatbots y n8n</span>
              <span>Analytics y reporting</span>
              <span>Mejora de procesos</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="experience-short">
        <Reveal>
          <p className="eyebrow">Experiencia laboral</p>
          <h2>Resumen de experiencia.</h2>
        </Reveal>

        <div className="timeline compact-timeline">
          {featuredExperience.map((item) => (
            <Reveal key={item.company}>
              <article className="timeline-item">
                <div className="timeline-meta">
                  <time>{item.period}</time>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="section-actions">
          <a className="button" href="/experiencia">
            Ver experiencia detallada
          </a>
        </div>
      </section>

      <section className="section philosophy">
        <Reveal>
          <p className="eyebrow">CV</p>

          <h2>Disponible para oportunidades y proyectos ecommerce.</h2>

          <p>
            Perfil en ecommerce management, operaciones digitales, analítica,
            automatización e implementación práctica de IA.
          </p>

          <div className="actions">
            <a
              className="button primary"
              href="/cv/derlis-aguilera-cv.pdf"
              download
            >
              Descargar CV
            </a>

            <a className="button" href="/herramientas">
              Ver herramientas
            </a>
          </div>
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

            <a href="/cv/derlis-aguilera-cv.pdf" download>
              Descargar CV
            </a>
          </div>

          <p className="contact-detail">
            {contact.whatsappLabel} · {contact.email}
          </p>

          <a
            className="button primary desktop-only"
            href={`https://wa.me/${contact.whatsapp}`}
          >
            Escribirme por WhatsApp
          </a>
        </Reveal>
      </section>
    </main>
  );
}
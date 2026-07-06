import { Reveal } from "@/components/reveal";
import { contact, experiences, kpis } from "@/lib/portfolio-data";

const focusAreas = ["Ecommerce", "Shopify", "Analytics", "AI Operations"];

export default function Home() {
  const featuredExperience = experiences.slice(0, 2);

  return (
    <main>
      <a className="mobile-whatsapp" href={`https://wa.me/${contact.whatsapp}`} aria-label="Contactar por WhatsApp">WhatsApp</a>
      <nav className="nav">
        <a className="brand" href="/">Derlis Aguilera</a>
        <div>
          <a href="/experiencia">Experiencia</a>
          <a href="/herramientas">Herramientas</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <Reveal>
          <p className="eyebrow">Ecommerce Strategy & AI Operations Specialist</p>
          <h1>Ecommerce, estrategia digital y operaciones con IA.</h1>
          <p className="hero-copy">
            Soy Derlis Aguilera. Ayudo a ordenar canales ecommerce, mejorar la operación y aplicar automatización con foco comercial.
          </p>
          <div className="actions">
            <a className="button primary" href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>
            <a className="button" href="/experiencia">Ver experiencia</a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="intro-card">
            <span className="portrait">DA</span>
            <p>+6 años entre ecommerce, ventas, analítica y operación digital.</p>
            <ul>{focusAreas.map((area) => <li key={area}>{area}</li>)}</ul>
          </aside>
        </Reveal>
      </section>

      <section className="section kpi-grid" aria-label="KPI Impact">
        {kpis.map((kpi) => (
          <Reveal key={kpi.label}>
            <article className="kpi-card"><span>{kpi.label}</span><strong>{kpi.value}</strong><p>{kpi.suffix}</p></article>
          </Reveal>
        ))}
      </section>

      <section className="section two-col">
        <Reveal>
          <div>
            <p className="eyebrow">Resumen profesional</p>
            <h2>Perfil orientado a negocio, operación ecommerce y mejora continua.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="prose">
            <p>Trabajo en la intersección entre ecommerce, equipos comerciales, datos y automatización. Mi enfoque es ordenar procesos, detectar oportunidades y convertir herramientas digitales en resultados operativos.</p>
            <p>Experiencia en Shopify, catálogo, SEO, reporting, coordinación de equipos, IA, chatbots y flujos con n8n.</p>
          </div>
        </Reveal>
      </section>

      <section className="section" id="experience-short">
        <Reveal>
          <p className="eyebrow">Experiencia corta</p>
          <h2>Últimos roles profesionales.</h2>
        </Reveal>
        <div className="timeline compact-timeline">
          {featuredExperience.map((item) => (
            <Reveal key={item.company}>
              <article className="timeline-item">
                <div className="timeline-meta"><time>{item.period}</time><h3>{item.company}</h3><p>{item.role}</p></div>
                <ul>{item.impact.slice(0, 3).map((impact) => <li key={impact}>{impact}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="section-actions"><a className="button" href="/experiencia">Ver experiencia completa</a></div>
      </section>

      <section className="section philosophy">
        <Reveal>
          <p className="eyebrow">CV</p>
          <h2>Disponible para oportunidades y proyectos ecommerce.</h2>
          <p>Perfil senior en ecommerce management, operaciones digitales, analítica, automatización e implementación práctica de IA.</p>
          <div className="actions"><a className="button primary" href={`mailto:${contact.email}?subject=Solicitud%20de%20CV%20-%20Derlis%20Aguilera`}>Solicitar CV</a><a className="button" href="/herramientas">Ver herramientas</a></div>
        </Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2>¿Tu ecommerce necesita más orden, medición o automatización?</h2>
          <p>Conversemos sobre estrategia ecommerce, analítica, Shopify y operaciones con IA.</p>
          <div className="contact-links">
            <a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p className="contact-detail">{contact.whatsappLabel} · {contact.email}</p>
        </Reveal>
      </section>
    </main>
  );
}

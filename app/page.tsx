import Image from "next/image";
import { Reveal } from "../components/reveal";
import { contact, experiences, kpis, projects } from "../lib/portfolio-data";
import { expandedToolCategories } from "../lib/professional-profile";

const featuredProjects = projects.slice(0, 4);

export default function Home() {
  return (
    <main className="rr-home">
      <header className="rr-nav">
        <a className="rr-brand" href="#inicio" aria-label="Ir al inicio">DA<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#perfil">Perfil</a>
        </nav>
        <a className="rr-cv rr-cv-top" href={contact.cv} download>Descargar CV</a>
      </header>

      <section className="rr-hero" id="inicio">
        <div className="rr-container rr-hero-grid">
          <Reveal>
            <div className="rr-hero-copy">
              <div className="rr-status"><i /> Disponible para nuevos desafíos</div>
              <p className="rr-kicker">Ecommerce · Digital Performance · Data</p>
              <h1>Derlis<br/><span>Aguilera.</span></h1>
              <p className="rr-lead">Conecto ecommerce, marketing y datos para transformar operaciones digitales en resultados medibles.</p>
              <div className="rr-actions">
                <a className="rr-primary" href={contact.cv} download>Descargar CV <span>↓</span></a>
                <a className="rr-secondary" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
              <div className="rr-hero-proof">
                <span>Shopify</span><span>GA4</span><span>Google Ads</span><span>SQL</span><span>Power BI</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rr-photo-wrap">
              <div className="rr-photo-card">
                <Image src="/profile/derlis.jpg" alt="Derlis Aguilera" width={520} height={620} priority />
              </div>
              <div className="rr-photo-note"><strong>+6 años</strong><span>impulsando negocios digitales</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rr-metrics" aria-label="Resultados destacados">
        <div className="rr-container rr-metric-grid">
          {kpis.map((item) => <div key={item.label}><strong>{item.value}</strong><p>{item.label}</p><span>{item.suffix}</span></div>)}
        </div>
      </section>

      <section className="rr-section rr-profile" id="perfil">
        <div className="rr-container">
          <Reveal><div className="rr-section-head"><p>Perfil profesional</p><h2>Negocio digital con mirada <span>comercial y analítica.</span></h2></div></Reveal>
          <div className="rr-profile-grid">
            <Reveal><article><span>01</span><h3>Ecommerce</h3><p>Operación, catálogo, conversión, UX, Shopify y coordinación comercial para hacer crecer el canal digital.</p><div>Shopify · Catálogo · CRO · UX</div></article></Reveal>
            <Reveal><article><span>02</span><h3>Performance</h3><p>Seguimiento de campañas y comportamiento digital para detectar oportunidades y tomar mejores decisiones.</p><div>Google Ads · GA4 · GTM · SEO</div></article></Reveal>
            <Reveal><article><span>03</span><h3>Data & Automation</h3><p>Dashboards, SQL y automatizaciones para convertir información dispersa en procesos más claros y ágiles.</p><div>SQL · Power BI · Looker · n8n</div></article></Reveal>
          </div>
        </div>
      </section>

      <section className="rr-section rr-experience" id="experiencia">
        <div className="rr-container">
          <Reveal><div className="rr-section-head rr-head-light"><p>Trayectoria</p><h2>Experiencia que combina <span>operación, liderazgo y crecimiento.</span></h2></div></Reveal>
          <div className="rr-exp-list">
            {experiences.map((item, index) => (
              <Reveal key={item.company}>
                <article>
                  <div className="rr-exp-index">0{index + 1}</div>
                  <div className="rr-exp-main"><p>{item.period}</p><h3>{item.company}</h3><strong>{item.role}</strong></div>
                  <p className="rr-exp-impact">{item.impact[item.impact.length - 1]}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <a className="rr-detail-link" href="/experiencia">Ver experiencia detallada →</a>
        </div>
      </section>

      <section className="rr-section rr-projects" id="proyectos">
        <div className="rr-container">
          <Reveal><div className="rr-section-head"><p>Casos seleccionados</p><h2>Proyectos donde conecto <span>negocio y tecnología.</span></h2></div></Reveal>
          <div className="rr-project-grid">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title}>
                <article>
                  <a className="rr-project-image" href={`https://${project.website}`} target="_blank" rel="noreferrer">
                    <Image src={project.image} alt={project.title} width={760} height={430} />
                    <span>Ver proyecto ↗</span>
                  </a>
                  <div className="rr-project-body"><small>0{index + 1} / {project.metric}</small><h3>{project.title}</h3><p>{project.description}</p><div className="rr-tags">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-stack">
        <div className="rr-container">
          <div className="rr-stack-title"><span>Stack profesional</span><p>Herramientas que utilizo para medir, operar y construir.</p></div>
          <div className="rr-stack-items">{expandedToolCategories.slice(0, 5).flatMap(cat => cat.items.slice(0, 3)).slice(0, 12).map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="rr-equantum">
        <div className="rr-container rr-equantum-grid">
          <div><p>Emprendimiento</p><h2>eQuantum<span>.</span></h2><p className="rr-equantum-copy">Consultoría digital para empresas que necesitan ordenar, desarrollar y hacer crecer su negocio.</p><a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">Conocer eQuantum ↗</a></div>
          <div className="rr-eq-numbers"><div><strong>10</strong><span>proyectos gestionados</span></div><div><strong>Digital</strong><span>estrategia + ejecución</span></div></div>
        </div>
      </section>

      <footer className="rr-footer" id="contacto">
        <div className="rr-container">
          <p>¿Hablamos?</p><h2>Estoy preparado para el<br/><span>próximo desafío.</span></h2>
          <div className="rr-footer-actions"><a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp ↗</a><a href={`mailto:${contact.email}`}>Email ↗</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <div className="rr-footer-bottom"><span>Derlis Aguilera · Paraguay</span><a href={contact.cv} download>Descargar CV ↓</a></div>
        </div>
      </footer>
    </main>
  );
}

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
          <a href="#inicio">Inicio</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#perfil">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="rr-cv rr-cv-top" href={contact.cv} download>Descargar CV ↓</a>
      </header>

      <section className="rr-hero" id="inicio">
        <div className="rr-container rr-hero-grid">
          <Reveal>
            <div className="rr-hero-copy">
              <div className="rr-status"><i /> Disponible para nuevos desafíos</div>
              <p className="rr-kicker">Gestión comercial · Experiencia del cliente · Desarrollo de negocios</p>
              <h1>Derlis<br/><span>Aguilera.</span></h1>
              <p className="rr-lead">Impulso el crecimiento comercial combinando experiencia en retail, liderazgo de equipos, operaciones digitales y mejora de la experiencia del cliente.</p>
              <div className="rr-actions">
                <a className="rr-primary" href={contact.cv} download>Descargar CV <span>↓</span></a>
                <a className="rr-secondary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Contactarme →</a>
              </div>
              <div className="rr-contact-inline">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsappLabel}</a>
                <a href={`mailto:${contact.email}`}>Email · {contact.email}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rr-photo-wrap">
              <div className="rr-photo-card">
                <Image src="/profile/derlis.jpg" alt="Derlis Aguilera" width={520} height={620} priority />
              </div>
              <div className="rr-photo-note"><strong>+6 años</strong><span>de experiencia profesional</span></div>
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
          <Reveal><div className="rr-section-head"><p>Lo que hago</p><h2>Experiencia comercial y liderazgo <span>orientados a resultados.</span></h2></div></Reveal>
          <div className="rr-profile-grid">
            <Reveal><article><span>01</span><h3>Gestión comercial</h3><p>Coordinación de operaciones de venta, seguimiento de indicadores y mejora continua de procesos comerciales.</p><div>Retail · Ecommerce · KPIs · Operaciones</div></article></Reveal>
            <Reveal><article><span>02</span><h3>Experiencia del cliente</h3><p>Optimización del recorrido de compra y coordinación de iniciativas para mejorar la atención y la conversión.</p><div>Cliente · Conversión · Marketing · Analítica</div></article></Reveal>
            <Reveal><article><span>03</span><h3>Liderazgo y desarrollo</h3><p>Experiencia liderando equipos de hasta 13 personas, coordinando proyectos y tomando decisiones basadas en resultados.</p><div>Equipos · Proyectos · Indicadores · Mejora continua</div></article></Reveal>
          </div>
        </div>
      </section>

      <section className="rr-section rr-experience" id="experiencia">
        <div className="rr-container">
          <Reveal><div className="rr-section-head rr-head-light"><p>Experiencia destacada</p><h2>Experiencia que combina <span>operación, liderazgo y crecimiento.</span></h2></div></Reveal>
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
          <Reveal><div className="rr-section-head rr-project-head"><p>Casos seleccionados</p><h2>Proyectos que respaldan <span>mi experiencia en gestión y transformación digital.</span></h2></div></Reveal>
          <div className="rr-project-grid">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title}>
                <article>
                  <a className="rr-project-image" href={`https://${project.website}`} target="_blank" rel="noreferrer">
                    <Image src={project.image} alt={project.title} width={420} height={250} />
                    <span>Ver ↗</span>
                  </a>
                  <div className="rr-project-body"><small>0{index + 1} / {project.metric}</small><h3>{project.title}</h3><p>{project.description}</p><div className="rr-tags">{project.stack.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-stack">
        <div className="rr-container">
          <div className="rr-stack-title"><span>Competencias y herramientas</span><p>Recursos para gestionar operaciones, medir resultados y desarrollar negocios.</p></div>
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
          <div className="rr-footer-top">
            <div className="rr-footer-copy"><p>¿Hablamos?</p><h2>Estoy preparado para tu <span>próximo desafío.</span></h2></div>
            <div className="rr-contact-cards">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.whatsappLabel}</strong><small>Escribirme ahora ↗</small></a>
              <a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong><small>Enviar correo ↗</small></a>
              <div><span>Ubicación</span><strong>Paraguay</strong><small>Disponible para oportunidades</small></div>
            </div>
          </div>
          <div className="rr-footer-links"><a href="#inicio">Inicio</a><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a><a href="#perfil">Sobre mí</a><a href="#contacto">Contacto</a></div>
          <div className="rr-footer-bottom"><span>© 2026 Derlis Aguilera. Todos los derechos reservados.</span><span>Desarrollado por <a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">eQuantum</a></span></div>
        </div>
      </footer>
    </main>
  );
}

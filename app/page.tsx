import { AmbientCommerce } from "../components/ambient-commerce";
import { Reveal } from "../components/reveal";
import { contact, experiences, kpis, projects } from "../lib/portfolio-data";
import { capabilities, outcomeTypes, positioning, workflow } from "../lib/professional-profile";

const focusAreas = ["Ecommerce", "Producto", "Operaciones", "Datos", "IA"];

export default function Home() {
  return (
    <main className="immersive-home">
      <AmbientCommerce />
      <nav className="nav" aria-label="Navegación principal">
        <a className="brand" href="#top" aria-label="Ir al inicio"><span>DA</span> Derlis Aguilera</a>
        <div className="nav-links">
          <a href="#perfil">Perfil</a><a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href={contact.cv} download>CV ↘</a>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-index" aria-hidden="true">01 — 06</div>
        <Reveal><div className="hero-heading"><p className="eyebrow">{positioning.eyebrow}</p><h1>Derlis<br /><em>Aguilera</em></h1></div></Reveal>
        <Reveal delay={0.08}>
          <div className="hero-portrait">
            <div className="portrait-orbit" aria-hidden="true"><span>commerce · data · growth · </span></div>
            <img src="/profile/derlis.jpg" alt="Retrato profesional de Derlis Aguilera" />
            <span className="availability"><i /> Disponible para nuevos desafíos</span>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="hero-intro">
            <p className="hero-copy">{positioning.headline}</p>
            <p className="hero-summary">Estrategia, equipos y tecnología alineados para convertir una operación digital en resultados medibles.</p>
            <div className="actions">
              <a className="button primary" href={`https://wa.me/${contact.whatsapp}`}>Hablemos <span>↗</span></a>
              <a className="text-link" href="#experiencia">Explorar trayectoria ↓</a>
            </div>
          </div>
        </Reveal>
        <div className="hero-focus" aria-label="Áreas profesionales">{focusAreas.map((area, index) => <span key={area}>0{index + 1} {area}</span>)}</div>
      </section>

      <section className="manifesto section" id="perfil">
        <Reveal><p className="section-number">02 / Perfil</p><h2>No separo el negocio de la tecnología. <span>Los conecto.</span></h2></Reveal>
        <div className="manifesto-layout">
          <Reveal><p className="manifesto-copy">{positioning.summary}</p></Reveal>
          <div className="metric-row">{kpis.map((item) => <Reveal key={item.label}><div className="metric"><strong>{item.value}</strong><span>{item.label}<small>{item.suffix}</small></span></div></Reveal>)}</div>
        </div>
      </section>

      <section className="expertise section" id="especialidades">
        <Reveal><div className="editorial-heading"><p className="section-number">03 / Especialidades</p><h2>Una mirada completa sobre el comercio digital.</h2></div></Reveal>
        <div className="expertise-list">{capabilities.map((capability, index) => (
          <Reveal key={capability.title}><article className="expertise-row">
            <span className="row-number">0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p>
            <div className="inline-skills">{capability.skills.slice(0, 3).map(skill => <span key={skill}>{skill}</span>)}</div>
          </article></Reveal>
        ))}</div>
      </section>

      <section className="process section" id="metodo">
        <Reveal><div className="editorial-heading compact"><p className="section-number">04 / Método</p><h2>Del dato a la acción.</h2><p>Un sistema simple para ordenar decisiones, equipos y mejora continua.</p></div></Reveal>
        <div className="process-track">{workflow.map((step) => <Reveal key={step.number}><article className="process-step"><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div>
      </section>

      <section className="career section" id="experiencia">
        <Reveal><div className="editorial-heading"><p className="section-number">05 / Trayectoria</p><h2>Experiencia construida desde la operación.</h2></div></Reveal>
        <Reveal><article className="current-feature">
          <div className="feature-meta"><span>Actualmente</span><img src="/logo/logo-inverfin.png" alt="Inverfin" /></div>
          <div className="feature-copy"><h3>Ecommerce Strategy &amp; Operations</h3><p>Lidero la operación ecommerce en Shopify Plus, conectando catálogo, productos, precios, stock, marketing, analítica y equipos.</p><strong>≈30% <small>crecimiento en ventas digitales en seis meses</small></strong></div>
        </article></Reveal>
        <div className="career-list">{experiences.map((item, index) => <Reveal key={item.company}><article className="career-row">
          <time>{item.period}</time><img src={item.logo} alt={item.logoAlt} /><div><h3>{item.company}</h3><p>{item.role}</p></div><span aria-hidden="true">0{index + 1}</span>
        </article></Reveal>)}</div>
        <a className="large-link" href="/experiencia">Ver experiencia completa <span>↗</span></a>
      </section>

      <section className="projects section" id="proyectos">
        <Reveal><div className="editorial-heading"><p className="section-number">06 / Proyectos</p><h2>Trabajo real. Contexto, decisiones y resultados.</h2></div></Reveal>
        <div className="project-showcase">{projects.map((project, index) => <Reveal key={project.title}><article className="showcase-item">
          <a className="showcase-image" href={`https://${project.website}`} target="_blank" rel="noreferrer"><img src={project.image} alt={`Proyecto ${project.title}`} /><span>Visitar ↗</span></a>
          <div className="showcase-copy"><span>0{index + 1} — {project.metric}</span><h3>{project.title}</h3><p>{project.description}</p><div className="inline-skills">{project.stack.slice(0, 4).map(item => <span key={item}>{item}</span>)}</div></div>
        </article></Reveal>)}</div>
      </section>

      <section className="venture section" id="equantum">
        <Reveal><div className="venture-title"><p className="section-number">Emprendimiento</p><h2>eQuantum<span>.com.py</span></h2></div></Reveal>
        <Reveal delay={0.08}><div className="venture-copy"><p>Fundé eQuantum para acompañar a empresas paraguayas con ecommerce, desarrollo web, automatización, analítica e inteligencia artificial aplicada.</p><a className="large-link inverse" href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">Conocer eQuantum <span>↗</span></a></div></Reveal>
      </section>

      <section className="impact-strip section" aria-label="Indicadores que analizo">{outcomeTypes.map(item => <span key={item}>{item}</span>)}</section>

      <footer className="contact section" id="contacto">
        <Reveal><p className="section-number">Contacto / Paraguay</p><h2>Construyamos algo que <em>funcione.</em></h2><p>Negocios digitales, ecommerce, producto, datos y tecnología.</p><a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} ↗</a>
          <div className="contact-links"><a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.cv} download>Descargar CV</a></div>
        </Reveal>
      </footer>
    </main>
  );
}

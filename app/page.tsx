import { Reveal } from "../components/reveal";
import { contact, experiences, kpis, projects } from "../lib/portfolio-data";
import { capabilities, outcomeTypes, positioning, workflow } from "../lib/professional-profile";

export default function Home() {
  return (
    <main className="master-home">
      <nav className="master-nav" aria-label="Navegación principal">
        <a className="master-brand" href="#inicio">Derlis Aguilera</a>
        <div><a href="#perfil">Perfil</a><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a></div>
        <a className="nav-cv" href={contact.cv} download>Descargar CV</a>
      </nav>

      <header className="master-hero master-container" id="inicio">
        <Reveal>
          <div className="hero-content">
            <p className="master-label">Ecommerce · Producto · Operaciones · Datos</p>
            <h1>Derlis Aguilera</h1>
            <h2>{positioning.headline}</h2>
            <p>{positioning.summary}</p>
            <div className="master-actions">
              <a className="master-button dark" href={`https://wa.me/${contact.whatsapp}`}>Contactar por WhatsApp</a>
              <a className="master-button light" href="#experiencia">Ver experiencia</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="hero-image"><img src="/profile/derlis.jpg" alt="Retrato profesional de Derlis Aguilera" /><span>Disponible para nuevos desafíos</span></div>
        </Reveal>
      </header>

      <section className="master-metrics master-container" aria-label="Indicadores profesionales">
        {kpis.map(item => <div className="master-metric" key={item.label}><strong>{item.value}</strong><span>{item.label}<small>{item.suffix}</small></span></div>)}
      </section>

      <section className="master-section master-container" id="perfil">
        <Reveal><header className="master-heading"><p className="master-label">Áreas de especialización</p><h2>Una visión integral del negocio ecommerce.</h2><p>Trabajo sobre todo el recorrido digital: captación, productos, experiencia de compra, análisis, operación y seguimiento.</p></header></Reveal>
        <div className="master-card-grid">
          {capabilities.map((item, index) => <Reveal key={item.title}><article className="master-card"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><div className="master-tags">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}
        </div>
      </section>

      <section className="master-section master-container">
        <Reveal><header className="master-heading"><p className="master-label">Cómo trabajo</p><h2>Del dato a la mejora operativa.</h2><p>Un método simple para transformar información y necesidades del negocio en acciones coordinadas y medibles.</p></header></Reveal>
        <div className="master-process">
          {workflow.map(step => <Reveal key={step.number}><article><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}
        </div>
      </section>

      <section className="master-section master-container" id="experiencia">
        <Reveal><header className="master-heading"><p className="master-label">Actualmente</p><h2>Ecommerce Strategy &amp; Operations</h2></header></Reveal>
        <Reveal><article className="master-current">
          <div><img src="/logo/logo-inverfin.png" alt="Inverfin" /><strong>abril 2025 — Actualidad</strong></div>
          <div><h3>Gestión ecommerce de punta a punta</h3><p>Lidero la operación sobre Shopify Plus, integrando catálogo, productos, precios, stock, marketing, analítica y coordinación de equipos.</p><ul><li>Equipo directo de 3 personas</li><li>≈30% de crecimiento en ventas digitales durante seis meses</li><li>Gestión comercial, producto y mejora continua</li></ul></div>
        </article></Reveal>

        <div className="master-experience-grid">
          {experiences.map(item => <Reveal key={item.company}><article className="master-experience"><time>{item.period}</time><img src={item.logo} alt={item.logoAlt} /><h3>{item.company}</h3><p>{item.role}</p></article></Reveal>)}
        </div>
        <a className="master-wide-link" href="/experiencia">Ver experiencia y casos <span>→</span></a>
      </section>

      <section className="master-section master-container" id="proyectos">
        <Reveal><header className="master-heading"><p className="master-label">Proyectos seleccionados</p><h2>Experiencia aplicada a negocios reales.</h2><p>Cada proyecto muestra el contexto, mi participación y las capacidades utilizadas.</p></header></Reveal>
        <div className="master-project-grid">
          {projects.map(project => <Reveal key={project.title}><article className="master-project"><a href={`https://${project.website}`} target="_blank" rel="noreferrer"><img src={project.image} alt={`Proyecto ${project.title}`} /></a><div><span>{project.metric}</span><h3>{project.title}</h3><p>{project.description}</p><div className="master-tags">{project.stack.slice(0,4).map(tag => <span key={tag}>{tag}</span>)}</div></div></article></Reveal>)}
        </div>
      </section>

      <section className="master-venture master-container">
        <div><p className="master-label">Emprendimiento</p><h2>eQuantum Consulting Group</h2></div>
        <div><p>Ayudo a empresas paraguayas a fortalecer sus negocios digitales mediante ecommerce, desarrollo web, automatización, analítica e inteligencia artificial aplicada.</p><a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">Conocer eQuantum →</a></div>
      </section>

      <section className="master-outcomes master-container">{outcomeTypes.map(item => <span key={item}>{item}</span>)}</section>

      <footer className="master-contact master-container" id="contacto">
        <p className="master-label">Contacto</p><h2>¿Conversamos sobre tu próximo desafío digital?</h2><p>Ecommerce, productos, operaciones, datos, automatización y tecnología.</p>
        <div><a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.cv} download>Descargar CV</a></div>
      </footer>
    </main>
  );
}

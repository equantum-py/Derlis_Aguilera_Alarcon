import { Reveal } from "../components/reveal";
import { contact, experiences, kpis, projects } from "../lib/portfolio-data";
import { capabilities, expandedToolCategories, positioning } from "../lib/professional-profile";

export default function Home() {
  return <main className="fp-home">
    <section className="fp-hero" id="inicio">
      <div className="fp-shape fp-shape-a"/><div className="fp-shape fp-shape-b"/><div className="fp-dot fp-dot-a"/><div className="fp-dot fp-dot-b"/>
      <aside className="fp-rail"><a href="#inicio">DA</a><span/><a href={contact.linkedin}>in</a><a href={`https://wa.me/${contact.whatsapp}`}>w</a><a href={`mailto:${contact.email}`}>@</a></aside>
      <nav className="fp-nav"><a className="fp-logo" href="#inicio"><i/> DERLIS</a><div><a href="#perfil">Perfil</a><a href="#servicios">Especialidades</a><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a></div><a className="fp-nav-button" href={contact.cv} download>Descargar CV</a></nav>
      <div className="fp-hero-inner">
        <Reveal><div className="fp-hero-copy"><p className="fp-script">Hola, soy</p><h1>DERLIS <span>AGUILERA</span></h1><strong>Ecommerce Strategy &amp; Operations</strong><p>{positioning.headline} Profesional con más de 6 años de experiencia conectando áreas comerciales, operativas y tecnológicas.</p><div className="fp-actions"><a className="fp-primary" href={`https://wa.me/${contact.whatsapp}`}>Contactarme</a><a className="fp-secondary" href={contact.cv} download>Descargar CV</a></div></div></Reveal>
        <Reveal delay={.08}><div className="fp-portrait"><div className="fp-ring"/><div className="fp-circle"/><img src="/profile/derlis.jpg" alt="Derlis Aguilera"/><span>Disponible</span></div></Reveal>
      </div>
    </section>

    <section className="fp-about fp-section" id="perfil">
      <Reveal><header className="fp-heading"><p>Sobre mí</p><h2>Negocio, datos y <em>tecnología</em></h2><span>Una visión integral para mejorar el rendimiento ecommerce.</span></header></Reveal>
      <div className="fp-about-grid"><Reveal><div className="fp-about-photo"><img src="/profile/derlis.jpg" alt="Derlis Aguilera trabajando en ecommerce"/></div></Reveal><Reveal delay={.08}><article className="fp-profile-card"><p>Hola,</p><h3>Soy <b>Derlis Aguilera</b></h3><dl><div><dt>Perfil</dt><dd>Negocios digitales y ecommerce</dd></div><div><dt>Experiencia</dt><dd>Más de 6 años</dd></div><div><dt>Ubicación</dt><dd>Paraguay</dd></div><div><dt>Especialidad</dt><dd>Producto, operaciones y datos</dd></div><div><dt>Emprendimiento</dt><dd>eQuantum Consulting Group</dd></div></dl><p className="fp-about-text">{positioning.summary}</p></article></Reveal></div>
    </section>

    <section className="fp-services fp-section" id="servicios">
      <Reveal><header className="fp-heading"><p>Lo que hago</p><h2>Áreas de <em>especialización</em></h2><span>Capacidades aplicadas a todo el recorrido del negocio digital.</span></header></Reveal>
      <div className="fp-service-grid">{capabilities.map((item,index)=><Reveal key={item.title}><article className={`fp-service fp-service-${index+1}`}><span className="fp-service-icon">0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p><div>{item.skills.slice(0,3).map(x=><small key={x}>{x}</small>)}</div></article></Reveal>)}</div>
      <a className="fp-more" href="/herramientas">Ver todos mis conocimientos →</a>
    </section>

    <section className="fp-experience" id="experiencia">
      <div className="fp-section"><Reveal><header className="fp-heading light"><p>Trayectoria</p><h2>Mi experiencia <em>profesional</em></h2><span>De la operación y las ventas digitales a la estrategia ecommerce.</span></header></Reveal>
        <div className="fp-experience-list">{experiences.map((item,index)=><Reveal key={item.company}><article className={index===0?"active":""}><div className="fp-exp-number">0{index+1}</div><div><time>{item.period}</time><h3>{item.role}</h3><p>{item.company}</p></div><img src={item.logo} alt={item.logoAlt}/><p>{item.impact[0]} {item.impact[item.impact.length-1]}</p></article></Reveal>)}</div>
        <a className="fp-light-link" href="/experiencia">Ver experiencia detallada →</a>
      </div>
    </section>

    <section className="fp-skills fp-section">
      <Reveal><header className="fp-heading"><p>Conocimientos</p><h2>Herramientas y <em>habilidades</em></h2><span>Ecommerce, analítica, desarrollo, automatización y gestión.</span></header></Reveal>
      <div className="fp-skill-grid">{expandedToolCategories.slice(0,6).map((cat,index)=><Reveal key={cat.title}><article><span>0{index+1}</span><h3>{cat.title}</h3><div>{cat.items.slice(0,6).map(x=><small key={x}>{x}</small>)}</div></article></Reveal>)}</div>
    </section>

    <section className="fp-work fp-section" id="proyectos">
      <Reveal><header className="fp-heading"><p>Portafolio</p><h2>Proyectos <em>seleccionados</em></h2><span>Casos donde conecté necesidades comerciales, operación y tecnología.</span></header></Reveal>
      <div className="fp-work-grid">{projects.map((project,index)=><Reveal key={project.title}><article><a href={`https://${project.website}`} target="_blank" rel="noreferrer"><img src={project.image} alt={project.title}/><span>Ver proyecto ↗</span></a><div><small>0{index+1} · {project.metric}</small><h3>{project.title}</h3><p>{project.description}</p></div></article></Reveal>)}</div>
    </section>

    <section className="fp-numbers"><div className="fp-section">{kpis.map(x=><div key={x.label}><strong>{x.value}</strong><span>{x.label}<small>{x.suffix}</small></span></div>)}</div></section>

    <section className="fp-equantum fp-section"><Reveal><div><p className="fp-script">Emprendimiento</p><h2>eQuantum<br/><span>Consulting Group</span></h2><p>Soluciones de ecommerce, desarrollo web, automatización, analítica e inteligencia artificial aplicada para empresas paraguayas.</p><a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">Conocer eQuantum</a></div></Reveal><div className="fp-equantum-art"><i/><i/><i/></div></section>

    <footer className="fp-contact" id="contacto"><div className="fp-section"><Reveal><p className="fp-script">Disponible para</p><h2>Nuevos desafíos</h2><p>Conversemos sobre ecommerce, productos, operaciones, datos y tecnología.</p><div><a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a><a href={`mailto:${contact.email}`}>Email</a><a href={contact.linkedin}>LinkedIn</a><a href={contact.cv} download>Descargar CV</a></div><small>{contact.whatsappLabel} · {contact.email}</small></Reveal></div></footer>
  </main>;
}

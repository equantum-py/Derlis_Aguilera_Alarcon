import { Reveal } from "../components/reveal";
import { contact, experiences, kpis, projects } from "../lib/portfolio-data";
import { capabilities, expandedToolCategories, technicalPractice } from "../lib/professional-profile";

export default function Home() {
  return <main className="fp-home">
    <section className="fp-hero" id="inicio">
      <div className="fp-shape fp-shape-a"/><div className="fp-shape fp-shape-b"/><div className="fp-dot fp-dot-a"/><div className="fp-dot fp-dot-b"/>
      <aside className="fp-rail"><a href="#inicio">DA</a><span/><a href={contact.linkedin}>in</a><a href={`https://wa.me/${contact.whatsapp}`}>w</a><a href={`mailto:${contact.email}`}>@</a></aside>
      <nav className="fp-nav"><a className="fp-logo" href="#inicio"><i/> DERLIS</a><div><a href="#servicios">Performance</a><a href="#desarrollo">Automatización</a><a href="#experiencia">Experiencia</a><a href="#proyectos">Proyectos</a></div><a className="fp-nav-button" href={contact.cv} download>Descargar CV</a></nav>
      <div className="fp-hero-inner">
        <Reveal><div className="fp-hero-copy"><p className="fp-script">Hola, soy</p><h1>DERLIS <span>AGUILERA</span></h1><strong>Digital Marketing &amp; Performance Analyst</strong><p>Transformo datos de ecommerce, campañas y analítica web en reportes claros, oportunidades de negocio y mejoras medibles. Combino marketing, dashboards y automatización.</p><div className="fp-actions"><a className="fp-primary" href={`https://wa.me/${contact.whatsapp}`}>Contactarme</a><a className="fp-secondary" href={contact.cv} download>Descargar CV</a></div></div></Reveal>
        <Reveal delay={.08}><div className="fp-portrait"><div className="fp-ring"/><div className="fp-circle"/><img src="/profile/derlis.jpg" alt="Derlis Aguilera"/><span>Disponible</span></div></Reveal>
      </div>
    </section>

    <section className="fp-services fp-section" id="servicios">
      <Reveal><header className="fp-heading"><p>Marketing, datos y negocio</p><h2>Performance <em>digital</em></h2><span>Del dato al hallazgo: reportes consistentes, dashboards y recomendaciones accionables.</span></header></Reveal>
      <div className="fp-service-grid">{capabilities.map((item,index)=><Reveal key={item.title}><article className={`fp-service fp-service-${index+1}`}><span className="fp-service-icon">0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>)}</div>
    </section>

    <section className="fp-development" id="desarrollo"><div className="fp-section">
      <Reveal><header className="fp-heading light"><p>Automatización y soporte técnico</p><h2>Tecnología <em>aplicada al marketing</em></h2><span>Experiencia práctica conectando datos, herramientas y procesos para reducir tareas manuales.</span></header></Reveal>
      <div className="fp-development-grid">{technicalPractice.map((area,index)=><Reveal key={area.title}><article><span>0{index+1}</span><h3>{area.title}</h3><p>{area.description}</p><div>{area.skills.map(skill=><small key={skill}>{skill}</small>)}</div></article></Reveal>)}</div>
      <Reveal><div className="fp-dev-work"><div><p className="fp-script">Cómo aporto</p><h3>Reportes confiables y procesos más ágiles.</h3></div><ul><li>Configuración y mejora de dashboards para seguimiento de KPIs.</li><li>Consultas SQL, integración de fuentes y preparación de datos.</li><li>Control de calidad, consistencia y documentación de métricas.</li><li>Automatización de reportes y tareas operativas repetitivas.</li></ul></div></Reveal>
    </div></section>

    <section className="fp-experience" id="experiencia">
      <div className="fp-section"><Reveal><header className="fp-heading light"><p>Trayectoria</p><h2>Mi experiencia <em>profesional</em></h2><span>De la operación y las ventas digitales a la estrategia ecommerce.</span></header></Reveal>
        <div className="fp-experience-list">{experiences.map((item,index)=><Reveal key={item.company}><article className={index===0?"active":""}><div><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.impact[item.impact.length-1]}</p></div><time>{item.period}</time></article></Reveal>)}</div>
        <a className="fp-light-link" href="/experiencia">Ver experiencia detallada →</a>
      </div>
    </section>

    <section className="fp-skills fp-section">
      <Reveal><header className="fp-heading"><p>Conocimientos</p><h2>Herramientas y <em>habilidades</em></h2><span>Analítica web, publicidad, visualización, ecommerce, automatización y desarrollo.</span></header></Reveal>
      <div className="fp-skill-grid">{expandedToolCategories.slice(0,6).map((cat,index)=><Reveal key={cat.title}><article><span className="fp-skill-icon">0{index+1}</span><div><h3>{cat.title}</h3><p>{cat.items.slice(0,4).join(", ")}.</p><i/></div></article></Reveal>)}</div>
    </section>

    <section className="fp-work fp-section" id="proyectos">
      <Reveal><header className="fp-heading"><p>Portafolio</p><h2>Proyectos <em>seleccionados</em></h2><span>Casos donde conecté necesidades comerciales, operación y tecnología.</span></header></Reveal>
      <div className="fp-work-grid">{projects.map((project,index)=><Reveal key={project.title}><article className={project.featured?"fp-project-featured":""}><a href={`https://${project.website}`} target="_blank" rel="noreferrer"><img className={project.imageFit==="contain"?"fp-project-contain":""} src={project.image} alt={project.title}/><span>Ver proyecto ↗</span></a><div><small>0{index+1} · {project.metric}</small><h3>{project.title}</h3><p>{project.description}</p>{project.featured&&<div className="fp-project-tech">{project.stack.slice(0,6).map(item=><b key={item}>{item}</b>)}</div>}</div></article></Reveal>)}</div>
    </section>

    <section className="fp-numbers"><div className="fp-section">{kpis.map(x=><div key={x.label}><strong>{x.value}</strong><span>{x.label}<small>{x.suffix}</small></span></div>)}</div></section>

    <section className="fp-equantum-wrap"><div className="fp-equantum fp-section"><Reveal><div className="fp-equantum-copy"><p className="fp-script">Mi emprendimiento</p><h2>eQuantum <span>Consulting Group</span></h2><p>Consultoría para empresas que necesitan ordenar, desarrollar y hacer crecer su negocio digital.</p><div className="fp-equantum-services"><span>Ecommerce</span><span>Desarrollo web</span><span>Automatización e IA</span><span>Analítica</span></div><a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">Visitar equantum.com.py →</a></div></Reveal><div className="fp-dashboard-art"><div className="fp-board"><header><span>Panel de resultados</span><small>Resumen comercial</small></header><div className="fp-dashboard-kpis"><div><small>Ventas digitales</small><strong>+30%</strong></div><div><small>Proyectos</small><strong>10</strong></div><div><small>Equipo liderado</small><strong>13</strong></div></div><div className="fp-dashboard-bars"><i/><i/><i/><i/><i/></div></div></div></div></section>

    <footer className="fp-contact" id="contacto"><div className="fp-section"><Reveal><p className="fp-script">Disponible para</p><h2>Nuevos desafíos</h2><p>Conversemos sobre marketing digital, performance, ecommerce, datos y automatización.</p><div><a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a><a href={`mailto:${contact.email}`}>Email</a><a href={contact.linkedin}>LinkedIn</a><a href={contact.cv} download>Descargar CV</a></div><small>{contact.whatsappLabel} · {contact.email}</small></Reveal></div></footer>
  </main>;
}

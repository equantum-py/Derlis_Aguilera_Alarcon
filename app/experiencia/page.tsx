import { Reveal } from "@/components/reveal";
import { contact, experiences, projects } from "@/lib/portfolio-data";

export default function ExperienciaPage() {
  return (
    <main>
      <a className="mobile-whatsapp" href={`https://wa.me/${contact.whatsapp}`} aria-label="Contactar por WhatsApp">WhatsApp</a>
      <nav className="nav">
        <a className="brand" href="/">Derlis Aguilera</a>
        <div><a href="/">Resumen</a><a href="/herramientas">Herramientas</a><a href="#projects">Trabajos</a></div>
      </nav>

      <section className="section page-hero">
        <Reveal>
          <p className="eyebrow">Experiencia</p>
          <h1>Experiencia laboral y trabajos realizados.</h1>
          <p className="hero-copy">Detalle de roles, responsabilidades y proyectos donde participé desde operación ecommerce, coordinación, analítica, automatización o creación web.</p>
        </Reveal>
      </section>

      <section className="section" id="experience">
        <Reveal><p className="eyebrow">Experiencia laboral detallada</p><h2>Roles y responsabilidades.</h2></Reveal>
        <div className="timeline">
          {experiences.map((item) => (
            <Reveal key={item.company}>
              <article className="timeline-item">
                <div className="timeline-meta"><time>{item.period}</time><h3>{item.company}</h3><p>{item.role}</p></div>
                <ul>{item.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal><p className="eyebrow">Trabajos realizados</p><h2>Casos con rol y autoría aclarados.</h2></Reveal>
        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <div className="project-image-wrap"><img src={project.image} alt={`Captura del proyecto ${project.title}`} className="project-image" /></div>
                <div className="project-topline"><span>{project.metric}</span><a href={`https://${project.website}`} target="_blank" rel="noreferrer">{project.website}</a></div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-ownership">{project.ownership}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags" aria-label={`Stack de ${project.title}`}>{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <dl className="case-list"><div><dt>Problema</dt><dd>{project.problem}</dd></div><div><dt>Acción</dt><dd>{project.action}</dd></div><div><dt>Resultado</dt><dd>{project.result}</dd></div></dl>
                <a className="case-link" href={`https://${project.website}`} target="_blank" rel="noreferrer">Ver caso</a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

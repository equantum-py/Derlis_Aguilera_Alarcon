import { Reveal } from "../../components/reveal";
import { contact, experiences, projects } from "../../lib/portfolio-data";
import {
  experienceEnhancements,
  outcomeTypes,
} from "../../lib/professional-profile";

export default function ExperienciaPage() {
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
          <a href="/experiencia">Experiencia</a>
          <a href="/herramientas">Herramientas</a>
        </div>
      </nav>

      <section className="section page-hero">
        <a className="back-link" href="/">← Volver al inicio</a>
        <Reveal>
          <p className="eyebrow">Experiencia profesional</p>
          <h1>Ecommerce, productos, marketing, datos y operaciones.</h1>
          <p className="hero-copy">
            Más de seis años acompañando canales digitales desde ventas,
            back office y gestión de clientes hasta estrategia ecommerce,
            analítica, automatización y coordinación multidisciplinaria.
          </p>
        </Reveal>
      </section>

      <section className="section" id="experience">
        <Reveal>
          <p className="eyebrow">Trayectoria detallada</p>
          <h2>Responsabilidades e impacto profesional.</h2>
        </Reveal>

        <div className="timeline">
          {experiences.map((item) => {
            const additions = experienceEnhancements[item.company] || [];
            return (
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
                  <div>
                    <ul>
                      {item.impact.map((impact) => <li key={impact}>{impact}</li>)}
                    </ul>
                    {additions.length > 0 && (
                      <div className="experience-extra">
                        <strong>Enfoque complementario</strong>
                        <ul>
                          {additions.map((addition) => <li key={addition}>{addition}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section philosophy">
        <Reveal>
          <p className="eyebrow">Indicadores de trabajo</p>
          <h2>Resultados evaluados con criterios comerciales y operativos.</h2>
          <p>
            El impacto se presenta mediante indicadores verificables. Cuando no
            existe una medición histórica confiable, el resultado se comunica
            de manera cualitativa y transparente.
          </p>
          <div className="outcome-list">
            {outcomeTypes.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Reveal>
      </section>

      <section className="section" id="projects">
        <Reveal>
          <p className="eyebrow">Casos profesionales</p>
          <h2>Proyectos, participación y resultados.</h2>
        </Reveal>

        <div className="project-grid">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    className="project-image"
                  />
                </div>
                <div className="project-topline">
                  <span>{project.metric}</span>
                  <a href={`https://${project.website}`} target="_blank" rel="noreferrer">
                    {project.website}
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-ownership">{project.ownership}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags" aria-label={`Competencias aplicadas en ${project.title}`}>
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <dl className="case-list">
                  <div><dt>Desafío</dt><dd>{project.problem}</dd></div>
                  <div><dt>Acción</dt><dd>{project.action}</dd></div>
                  <div><dt>Resultado</dt><dd>{project.result}</dd></div>
                </dl>
                <a
                  className="case-link"
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visitar proyecto
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { ProjectScreenshot } from "../../components/project-screenshot";
import { contact, experiences } from "../../lib/portfolio-data";
import { newProjects } from "../../lib/new-projects";
import "./experiencia.css";

export const metadata: Metadata = {
  title: "Experiencia profesional | Derlis Aguilera",
  description: "Trayectoria en ecommerce, marketing digital, operaciones, analítica y liderazgo de equipos en Paraguay.",
};

const summaries: Record<string, string> = {
  "Inverfin S.A.E.C.A.": "Estrategia y operación ecommerce sobre Shopify, liderazgo de equipo, análisis de ventas y optimización del canal digital.",
  "Fortis Mayorista": "Gestión ecommerce B2B, coordinación del lanzamiento del canal digital, marketing y liderazgo comercial.",
  "Teo S.A. Agencia de Desarrollo Web/App": "Gestión de clientes y proyectos digitales, coordinación multidisciplinaria y seguimiento comercial.",
  "Casa Paraná": "Supervisión de ventas digitales, back office, gestión de catálogo y seguimiento de prospectos.",
};

const highlights: Record<string, string[]> = {
  "Inverfin S.A.E.C.A.": ["Equipo de 3 personas", "≈30% de crecimiento en ventas digitales durante seis meses, según reportes internos", "≈30 categorías comerciales"],
  "Fortis Mayorista": ["Equipo de 13 colaboradores", "Ecommerce mayorista B2B", "SEO · SEM · Email marketing"],
  "Teo S.A. Agencia de Desarrollo Web/App": ["10 clientes y proyectos", "Coordinación de equipos", "Gestión de entregables"],
  "Casa Paraná": ["Equipo de 6 personas", "Ventas digitales y back office", "Seguimiento de leads y catálogo"],
};

const selectedTitles = ["Ultramaison", "Guara Market", "Relato Estratégico", "Limpiarte Paraguay"];
const selectedProjects = selectedTitles.map(title => newProjects.find(project => project.title === title)).filter((p): p is (typeof newProjects)[number] => Boolean(p));

export default function ExperienciaPage() {
  return <main className="xp-page">
    <section className="xp-hero">
      <div className="xp-container xp-hero-layout">
        <div>
          <p className="xp-kicker">TRAYECTORIA PROFESIONAL</p>
          <h1>Experiencia que conecta <span>negocio, datos y tecnología.</span></h1>
          <p className="xp-intro">Más de seis años en ecommerce, marketing digital y operaciones comerciales. Mi experiencia combina gestión de equipos, optimización de canales digitales y seguimiento de resultados.</p>
          <div className="xp-actions"><a href="#trayectoria">Ver trayectoria ↓</a><a href={contact.cv} download>Descargar CV ↗</a></div>
        </div>
        <aside className="xp-summary" aria-label="Experiencia en cifras">
          <div><strong>+6</strong><span>años de experiencia</span></div>
          <div><strong>13</strong><span>personas en el mayor equipo liderado</span></div>
          <div><strong>10</strong><span>clientes y proyectos gestionados en Teo</span></div>
          <div><strong>≈30%</strong><span>crecimiento de ventas digitales en seis meses, según reportes internos</span></div>
        </aside>
      </div>
    </section>

    <section className="xp-section" id="trayectoria">
      <div className="xp-container">
        <div className="xp-heading"><p className="xp-kicker">EXPERIENCIA LABORAL</p><h2>Cuatro etapas, <span>una trayectoria.</span></h2><p>Un resumen para leer rápido. Cada puesto permite consultar las responsabilidades completas sin alargar innecesariamente la página.</p></div>
        <div className="xp-jobs">{experiences.map((job, index) => <article className="xp-job" key={job.company}>
          <div className="xp-job-main">
            <div className="xp-job-logo"><img src={job.logo} alt={job.logoAlt} loading="lazy" /></div>
            <div className="xp-job-info"><span className="xp-period">{job.period}</span><h3>{job.company}</h3><strong>{job.role}</strong><p>{summaries[job.company]}</p></div>
            <span className="xp-job-index">0{index+1}</span>
          </div>
          <div className="xp-highlights">{(highlights[job.company] || []).map(item => <span key={item}>{item}</span>)}</div>
          <details className="xp-details"><summary>Ver responsabilidades completas <span>+</span></summary><ul>{job.impact.map(item => <li key={item}>{item}</li>)}</ul></details>
        </article>)}</div>
      </div>
    </section>

    <section className="xp-section xp-competencies">
      <div className="xp-container">
        <div className="xp-heading"><p className="xp-kicker">COMPETENCIAS</p><h2>Mi experiencia, <span>en tres áreas.</span></h2></div>
        <div className="xp-competency-grid">
          <article><span>01</span><h3>Ecommerce y operaciones</h3><p>Shopify, catálogos, precios, promociones, procesos y seguimiento comercial.</p></article>
          <article><span>02</span><h3>Marketing y analítica</h3><p>SEO, SEM, campañas, GA4, medición de tráfico y oportunidades de conversión.</p></article>
          <article><span>03</span><h3>Liderazgo y gestión</h3><p>Coordinación de equipos, clientes, proveedores, tareas y proyectos digitales.</p></article>
        </div>
      </div>
    </section>

    <section className="xp-section xp-work" id="proyectos">
      <div className="xp-container">
        <div className="xp-work-heading"><div><p className="xp-kicker">TRABAJOS SELECCIONADOS</p><h2>Proyectos que respaldan <span>mi experiencia.</span></h2><p>Una muestra breve de trabajos de Paraguay y Colombia. Los proyectos completos están disponibles en el portafolio.</p></div><a href="/proyectos">Ver los 17 proyectos ↗</a></div>
        <div className="xp-project-grid">{selectedProjects.map(project => <article key={project.title} className="xp-project">
          <a className="xp-project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.title}`}><ProjectScreenshot url={project.url} fallback="" alt={`Vista real del proyecto ${project.title}`} /></a>
          <div className="xp-project-content"><span>{project.category}</span><h3><a href={project.url} target="_blank" rel="noreferrer">{project.title} ↗</a></h3><p>{project.description}</p></div>
        </article>)}</div>
      </div>
    </section>

    <section className="xp-end"><div className="xp-container"><div><p className="xp-kicker">CONTACTO PROFESIONAL</p><h2>¿Querés conocer más sobre <span>mi trayectoria?</span></h2></div><div className="xp-actions"><a href={contact.linkedin} target="_blank" rel="noreferrer">Ver LinkedIn ↗</a><a href={contact.cv} download>Descargar CV ↓</a></div></div></section>
  </main>;
}

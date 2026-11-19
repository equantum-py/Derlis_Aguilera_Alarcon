import { ProjectScreenshot } from "../components/project-screenshot";
import { Reveal } from "../components/reveal";
import { contact } from "../lib/portfolio-data";
import { newProjects } from "../lib/new-projects";

const highlightedProjects = newProjects;

export default function Home() {
  return (
    <main className="rr-home">


      <section className="rr-hero" id="inicio">
        <div className="rr-container rr-hero-grid">
          <Reveal>
            <div className="rr-hero-copy">
              <div className="rr-status"><i /> Perfil profesional · Paraguay</div>
              <p className="rr-kicker">Ecommerce · Marketing digital · Estrategia · Analítica</p>
              <h1>Derlis Aguilera<span className="rr-hero-dot">.</span></h1><p className="rr-hero-position">Ecommerce · Estrategia digital · Operaciones</p>
              <p className="rr-lead">Más de seis años de experiencia conectando estrategia comercial, ecommerce, marketing digital y gestión de equipos. Mi enfoque está en mejorar procesos, analizar resultados y hacer crecer negocios.</p>
              <div className="rr-actions">
                <a className="rr-primary" href="/experiencia">Ver mi experiencia <span>↗</span></a>
                <a className="rr-secondary" href="/sobre-mi">Conocer mi historia →</a>
              </div>
              <div className="rr-contact-inline">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsappLabel}</a>
                <a href={`mailto:${contact.email}`}>Email · {contact.email}</a>
              </div>
            </div>
          </Reveal>
       </div>
      </section>

      <section className="rr-section rr-profile" id="perfil">
        <div className="rr-container">
          <Reveal><div className="rr-section-head"><p>Mi perfil profesional</p><h2>Experiencia que une <span>negocio, marketing y tecnología.</span></h2></div></Reveal>
          <div className="rr-profile-grid">
            <Reveal><article><span>01</span><h3>Estrategia y operaciones</h3><p>Gestión de canales digitales, coordinación de equipos, procesos comerciales y mejora continua de la experiencia del cliente.</p><div>Ecommerce Strategy · Operaciones · Liderazgo</div></article></Reveal>
            <Reveal><article><span>02</span><h3>Ecommerce y crecimiento</h3><p>Experiencia en Shopify, gestión de catálogos, promociones, SEO, conversión y análisis de ventas digitales.</p><div>Shopify · SEO · Conversión · KPIs</div></article></Reveal>
            <Reveal><article><span>03</span><h3>Marketing y analítica</h3><p>Conocimientos de Google Ads, Meta Ads, GA4 y seguimiento de indicadores como CTR, CPC, CPM, alcance y frecuencia.</p><div>Google Ads · Meta Ads · GA4 · Indicadores</div><a href="/marketing-digital" style={{display:"inline-block",marginTop:12,fontWeight:800,fontSize:12,color:"#0b9d86"}}>Ver experiencia en marketing digital ↗</a></article></Reveal>
          </div>
        </div>
      </section>

      <section className="rr-section rr-projects" id="proyectos">
        <div className="rr-container">
          <Reveal><div className="rr-section-head rr-project-head"><p>Proyectos como evidencia</p><h2>Trabajos que reflejan <span>mis conocimientos y experiencia.</span></h2></div></Reveal>
          <div className="rr-featured-intro"><strong>Experiencia con proyectos de Paraguay y Colombia</strong><span>Una selección de trabajos digitales en los que aplico capacidades de ecommerce, diseño, tecnología y gestión.</span></div>
          <div className="rr-project-grid rr-new-project-grid">
            {highlightedProjects.map((project, index) => (
              <Reveal key={project.title}>
                <article className={index < 2 ? "rr-premium-project" : ""}>
                  <a className="rr-project-image" href={project.url} target="_blank" rel="noreferrer">
                    <ProjectScreenshot url={project.url} fallback="" alt={`Vista del proyecto ${project.title}`} />
                    <span>Visitar ↗</span>
                  </a>
                  <div className="rr-project-body"><small>{project.category} · {project.status}</small><h3><a href={project.url} target="_blank" rel="noreferrer">{project.title}</a></h3><p>{project.description}</p><div className="rr-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-stack">
        <div className="rr-container">
          <div className="rr-stack-title"><span>Conocimientos y herramientas</span><p>Competencias que complementan mi experiencia en gestión, marketing, ecommerce y análisis de datos.</p></div>
          <div className="rr-stack-items">{["JavaScript","TypeScript","Python","PHP","HTML5","CSS3","SQL","React","Next.js","Node.js","FastAPI","Tailwind CSS","PostgreSQL","Supabase","Neon","Prisma","Shopify Liquid","Git","GitHub","Despliegue web","APIs REST","PWA","Figma","GA4","Google Ads","Meta Ads"].map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="rr-equantum">
        <div className="rr-container rr-equantum-grid">
          <div><p>Parte de mi trayectoria</p><h2>eQuantum<span>.</span></h2><p className="rr-equantum-copy">Además de mi experiencia corporativa, impulso proyectos digitales a través de mi emprendimiento eQuantum, donde aplico conocimientos de tecnología, ecommerce y estrategia.</p><a href="/sobre-mi">Conocer mi historia ↗</a></div>
          <div className="rr-eq-numbers"><div><strong>17</strong><span>proyectos seleccionados</span></div><div><strong>Internacional</strong><span>Paraguay · Colombia</span></div></div>
        </div>
      </section>

      <footer className="rr-footer" id="contacto">
        <div className="rr-container">
          <div className="rr-footer-top">
            <div className="rr-footer-copy"><p>Contacto profesional</p><h2>Conversemos sobre <span>nuevas oportunidades.</span></h2></div>
            <div className="rr-contact-cards">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.whatsappLabel}</strong><small>Contactarme ↗</small></a>
              <a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong><small>Contacto profesional ↗</small></a>
              <div><span>Ubicación</span><strong>Paraguay</strong><small>Disponible para oportunidades</small></div>
            </div>
          </div>
          <div className="rr-footer-links"><a href="#inicio">Inicio</a><a href="/experiencia">Experiencia</a><a href="/proyectos">Proyectos</a><a href="/sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></div>
          <div className="rr-footer-bottom"><span>© 2026 Derlis Aguilera. Todos los derechos reservados.</span><span>Desarrollado por <a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">eQuantum</a></span></div>
        </div>
      </footer>
    </main>
  );
}

import { ProjectScreenshot } from "../components/project-screenshot";
import { Reveal } from "../components/reveal";
import { contact } from "../lib/portfolio-data";
import { newProjects } from "../lib/new-projects";

const highlightedProjects = newProjects;

export default function Home() {
  return (
    <main className="rr-home">
      <header className="rr-nav">
        <a className="rr-brand" href="#inicio" aria-label="Ir al inicio">DA<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="/sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="rr-cv rr-cv-top" href={contact.cv} download>Descargar CV ↓</a>
      </header>

      <section className="rr-hero" id="inicio">
        <div className="rr-container rr-hero-grid">
          <Reveal>
            <div className="rr-hero-copy">
              <div className="rr-status"><i /> Disponible para nuevos proyectos</div>
              <p className="rr-kicker">Desarrollo web · Apps · Ecommerce · Marketing digital</p>
              <h1>Desarrollo digital<br/><span>que impulsa negocios.</span></h1>
              <p className="rr-lead">Diseño y desarrollo páginas web, tiendas Shopify, aplicaciones y estrategias de marketing digital para ayudar a las empresas a vender y crecer.</p>
              <div className="rr-actions">
                <a className="rr-primary" href="#proyectos">Ver proyectos <span>↗</span></a>
                <a className="rr-secondary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Solicitar presupuesto →</a>
              </div>
              <div className="rr-contact-inline">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp · {contact.whatsappLabel}</a>
                <a href={`mailto:${contact.email}`}>Email · {contact.email}</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rr-device-showcase" aria-label="Desarrollos recientes en distintos dispositivos">
              <a className="rr-device rr-device-laptop" href="https://chebagels.vercel.app/" target="_blank" rel="noreferrer" aria-label="Ver ecommerce CHE Bagels">
                <div className="rr-laptop-screen">
                  <div className="rr-screen-top"><span/><span/><span/><small>CHE Bagels · Ecommerce</small></div>
                  <ProjectScreenshot url="https://chebagels.vercel.app/" fallback="" alt="Vista de CHE Bagels en laptop" priority />
                </div>
                <div className="rr-laptop-base"/>
                <span className="rr-device-label">CHE Bagels <b>Ecommerce ↗</b></span>
              </a>
              <a className="rr-device rr-device-phone" href="https://vitaliserviciomedico.vercel.app/" target="_blank" rel="noreferrer" aria-label="Ver aplicación Vitalis">
                <div className="rr-phone-shell">
                  <div className="rr-phone-island"/>
                  <div className="rr-phone-content"><ProjectScreenshot url="https://vitaliserviciomedico.vercel.app/" fallback="" alt="Vista de Vitalis en celular" /></div>
                  <div className="rr-phone-bar"/>
                </div>
                <span className="rr-device-label">Vitalis <b>Aplicación ↗</b></span>
              </a>
              <a className="rr-device rr-device-mini" href="https://limpiarteparaguay.vercel.app/" target="_blank" rel="noreferrer" aria-label="Ver ecommerce Limpiarte">
                <div className="rr-mini-screen">
                  <div className="rr-screen-top"><span/><span/><span/><small>Limpiarte</small></div>
                  <ProjectScreenshot url="https://limpiarteparaguay.vercel.app/" fallback="" alt="Vista de Limpiarte en laptop" />
                </div>
                <span className="rr-device-label">Limpiarte <b>Ecommerce ↗</b></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rr-section rr-profile" id="servicios">
        <div className="rr-container">
          <Reveal><div className="rr-section-head"><p>Servicios digitales</p><h2>Soluciones para crear, vender <span>y hacer crecer tu negocio.</span></h2></div></Reveal>
          <div className="rr-profile-grid">
            <Reveal><article><span>01</span><h3>Web, apps y sistemas</h3><p>Diseño web, landing pages, aplicaciones, paneles administrativos y soluciones a medida.</p><div>Next.js · React · UX/UI · Desarrollo web</div></article></Reveal>
            <Reveal><article><span>02</span><h3>Ecommerce y Shopify</h3><p>Creación y optimización de tiendas, catálogos, promociones, conversiones y Google Merchant Center.</p><div>Shopify · Ecommerce · Merchant Center</div></article></Reveal>
            <Reveal><article><span>03</span><h3>Publicidad y analítica</h3><p>Campañas en Google Ads y Meta Ads, medición con GA4, dashboards, identidad visual y packaging.</p><div>Google Ads · Meta Ads · GA4 · Diseño</div></article></Reveal>
          </div>
        </div>
      </section>

      <section className="rr-section rr-projects" id="proyectos">
        <div className="rr-container">
          <Reveal><div className="rr-section-head rr-project-head"><p>Portafolio de proyectos</p><h2>Webs, ecommerce y aplicaciones <span>que podés explorar.</span></h2></div></Reveal>
          <div className="rr-featured-intro"><strong>Desarrollos recientes</strong><span>Webs, tiendas y aplicaciones creadas con enfoque comercial.</span></div>
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
          <div className="rr-stack-title"><span>Tecnologías y plataformas</span><p>Trabajo con herramientas profesionales para desarrollar, vender y medir.</p></div>
          <div className="rr-stack-items">{["JavaScript","TypeScript","Python","PHP","HTML5","CSS3","SQL","React","Next.js","Node.js","FastAPI","Tailwind CSS","PostgreSQL","Supabase","Neon","Prisma","Shopify Liquid","Git","GitHub","Despliegue web","APIs REST","PWA","Figma","GA4","Google Ads","Meta Ads"].map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="rr-equantum">
        <div className="rr-container rr-equantum-grid">
          <div><p>Emprendimiento</p><h2>eQuantum<span>.</span></h2><p className="rr-equantum-copy">Consultoría digital para empresas que necesitan ordenar, desarrollar y hacer crecer su negocio.</p><a href="https://www.equantum.com.py/" target="_blank" rel="noreferrer">Conocer eQuantum ↗</a></div>
          <div className="rr-eq-numbers"><div><strong>15</strong><span>proyectos seleccionados</span></div><div><strong>Digital</strong><span>estrategia + ejecución</span></div></div>
        </div>
      </section>

      <footer className="rr-footer" id="contacto">
        <div className="rr-container">
          <div className="rr-footer-top">
            <div className="rr-footer-copy"><p>¿Hablamos?</p><h2>Tu próximo proyecto <span>empieza acá.</span></h2></div>
            <div className="rr-contact-cards">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.whatsappLabel}</strong><small>Escribirme ahora ↗</small></a>
              <a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong><small>Enviar correo ↗</small></a>
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

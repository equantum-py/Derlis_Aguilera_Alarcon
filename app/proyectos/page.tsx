import "./catalog.css";
import { ProjectScreenshot } from "../../components/project-screenshot";
import { contact } from "../../lib/portfolio-data";
import { newProjects } from "../../lib/new-projects";

export default function ProyectosPage() {
  return <main className="portfolio-catalog">
    <header className="catalog-nav"><a href="/">DA<span>.</span></a><a href="/">← Volver al inicio</a><a href={contact.cv} download>Descargar CV ↓</a></header>
    <section className="catalog-intro"><p>PORTAFOLIO / PROYECTOS SELECCIONADOS</p><h1>Diseños que <em>podés explorar.</em></h1><p>Una selección de diecisiete páginas, tiendas online y aplicaciones de Paraguay y Colombia. Tocá la imagen o el nombre para visitar cada proyecto.</p></section>
    <section className="catalog-section catalog-section-alt"><div className="catalog-heading"><h2>17 proyectos destacados</h2><p>Diseño web, ecommerce, aplicaciones y experiencias digitales.</p></div>
      <div className="catalog-grid">{newProjects.map(p=><article className="catalog-card" key={p.title}>
        <a className="catalog-preview catalog-live-preview" href={p.url} target="_blank" rel="noreferrer"><ProjectScreenshot url={p.url} fallback="" alt={`Vista del proyecto ${p.title}`} /></a>
        <span className="catalog-type">{p.category}</span><h3><a href={p.url} target="_blank" rel="noreferrer">{p.title}</a></h3><p>{p.description}</p><a href={p.url} target="_blank" rel="noreferrer">Visitar proyecto ↗</a>
      </article>)}</div>
    </section>
    <section className="catalog-contact"><h2>¿Tenés un proyecto en mente?</h2><p>Desarrollo web, aplicaciones, Shopify, campañas digitales y analítica.</p><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Hablemos por WhatsApp ↗</a></section>
  </main>;
}

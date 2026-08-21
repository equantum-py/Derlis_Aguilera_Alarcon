import { Reveal } from "../../components/reveal";
import { contact } from "../../lib/portfolio-data";
import { expandedToolCategories } from "../../lib/professional-profile";

export default function HerramientasPage() {
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
          <p className="eyebrow">Conocimientos y herramientas</p>
          <h1>Ecommerce, desarrollo, datos, automatización y operaciones.</h1>
          <p className="hero-copy">
            Conocimientos aplicados para desarrollar y evolucionar aplicaciones, trabajar
            con datos, integrar servicios, corregir errores y mejorar productos digitales.
          </p>
        </Reveal>
      </section>

      <section className="section tools-grid" aria-label="Competencias profesionales">
        {expandedToolCategories.map((category) => (
          <Reveal key={category.title}>
            <article className="tool-card">
              <h3>{category.title}</h3>
              <div className="tool-list">
                {category.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2>¿Necesitás fortalecer tu operación ecommerce?</h2>
          <p>
            Conversemos sobre estrategia, productos, campañas, analítica,
            Shopify, logística o mejora de procesos.
          </p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contact.cv} download>Descargar CV</a>
            <a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>
          </div>
          <p className="contact-detail">
            {contact.whatsappLabel} · {contact.email}
          </p>
        </Reveal>
      </section>
    </main>
  );
}

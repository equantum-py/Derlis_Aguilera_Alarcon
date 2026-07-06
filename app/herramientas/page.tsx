import { Reveal } from "../../components/reveal";
import { contact, toolCategories } from "../../lib/portfolio-data";

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

      <nav className="nav">
        <a className="brand" href="/">
          Derlis Aguilera
        </a>

        <div>
          <a href="/">Inicio</a>
          <a href="/experiencia">Experiencia</a>
          <a href="/herramientas">Herramientas</a>
        </div>
      </nav>

      <section className="section page-hero">
        <a className="back-link" href="/">
          ← Volver al inicio
        </a>

        <Reveal>
          <p className="eyebrow">Herramientas</p>

          <h1>Herramientas que manejo.</h1>

          <p className="hero-copy">
            Plataformas, herramientas de medición, publicidad, automatización,
            desarrollo y ecommerce que utilizo para operar, analizar y mejorar
            canales digitales.
          </p>
        </Reveal>
      </section>

      <section className="section tools-grid">
        {toolCategories.map((category) => (
          <Reveal key={category.title}>
            <article className="tool-card">
              <h3>{category.title}</h3>

              <div className="tool-list">
                {category.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <p className="eyebrow">Contacto</p>

          <h2>¿Necesitás ordenar herramientas, medición o automatizaciones?</h2>

          <p>
            Conversemos sobre ecommerce, analytics, automatización, Shopify,
            campañas o procesos digitales.
          </p>

          <div className="contact-links">
            <a href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>

            <a href={`mailto:${contact.email}`}>Email</a>

            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="/cv/derlis-aguilera-cv.pdf" download>
              Descargar CV
            </a>
          </div>

          <p className="contact-detail">
            {contact.whatsappLabel} · {contact.email}
          </p>
        </Reveal>
      </section>
    </main>
  );
}
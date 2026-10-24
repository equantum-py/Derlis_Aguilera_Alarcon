import type { Metadata } from "next";
import { contact, experiences } from "../../lib/portfolio-data";
import "./sobre-mi.css";

export const metadata: Metadata = {
  title: "Sobre mí | Derlis Aguilera",
  description: "Conocé la historia, experiencia y conocimientos de Derlis Aguilera: desarrollo web, ecommerce, aplicaciones, diseño y marketing digital.",
};

const skills = [
  { title: "Desarrollo web y aplicaciones", items: ["JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS", "React", "Next.js", "Node.js", "FastAPI", "APIs REST", "PWA"] },
  { title: "Backend y bases de datos", items: ["PostgreSQL", "SQL", "Supabase", "Neon", "Prisma", "Autenticación y permisos", "Git", "GitHub"] },
  { title: "Ecommerce y crecimiento", items: ["Shopify", "Liquid", "Catálogos", "SEO", "Google Merchant Center", "Google Ads", "Meta Ads", "GA4", "Google Tag Manager"] },
  { title: "Diseño y producto digital", items: ["UX/UI", "Figma", "Diseño responsive", "Prototipado", "Dashboards", "Automatización", "Inteligencia artificial"] },
];

export default function SobreMiPage() {
  return <main className="about-page">
    <header className="about-nav"><a className="about-logo" href="/">DA<span>.</span></a><nav aria-label="Navegación"><a href="/">Inicio</a><a href="/proyectos">Proyectos</a><a href="/experiencia">Experiencia</a><a href="#contacto">Contacto</a></nav><a className="about-cv" href={contact.cv} download>Descargar CV ↓</a></header>
    <section className="about-hero">
      <div className="about-container about-hero-grid">
        <div className="about-intro"><p className="about-eyebrow">LA PERSONA DETRÁS DE LOS PROYECTOS</p><h1>Hola, soy <span>Derlis Aguilera.</span></h1><p className="about-lead">Me apasiona transformar ideas en experiencias digitales que funcionan, se ven bien y ayudan a los negocios a crecer.</p><p>Mi camino comenzó en las ventas y las operaciones comerciales. Trabajar de cerca con clientes, equipos y tiendas online me enseñó algo importante: la tecnología tiene valor cuando resuelve problemas reales.</p><div className="about-actions"><a href="/proyectos">Conocer mis proyectos ↗</a><a href="#historia">Mi historia ↓</a></div></div>
        <div className="about-portrait"><div className="about-portrait-frame"><div className="about-photo-placeholder" aria-label="Espacio reservado para la fotografía personal de Derlis Aguilera"><span>DA.</span><small>Fotografía personal pendiente de incorporar</small></div></div><div className="about-photo-caption"><strong>Derlis Aguilera</strong><span>Desarrollo digital · Ecommerce · Estrategia</span></div></div>
      </div>
    </section>
    <section className="about-story" id="historia"><div className="about-container about-story-grid"><div><p className="about-eyebrow">MI HISTORIA</p><h2>De entender los negocios a <em>construir sus soluciones.</em></h2></div><div className="about-prose"><p>Comencé mi trayectoria en el mundo comercial, trabajando con ventas digitales, atención a clientes y procesos de ecommerce. Con el tiempo asumí responsabilidades de coordinación, operación y liderazgo de equipos.</p><p>En empresas como Casa Paraná, Teo, Fortis e Inverfin fui conociendo de cerca los desafíos de vender por internet: organizar productos, mejorar la experiencia de compra, medir resultados y conectar el trabajo de diferentes áreas.</p><p>Esa experiencia despertó mi interés por el diseño y la programación. Empecé a llevar las ideas a la práctica, creando sitios web, tiendas online, aplicaciones y herramientas de gestión.</p><p>Hoy combino visión comercial, diseño, desarrollo y analítica. A través de eQuantum Consulting trabajo en proyectos digitales con una prioridad: que cada solución sea útil, clara y sostenible.</p></div></div></section>
    <section className="about-knowledge"><div className="about-container"><p className="about-eyebrow">LO QUE SÉ HACER</p><h2>Conocimientos que aplico <em>en proyectos reales.</em></h2><div className="about-skills-grid">{skills.map((group, i)=><article key={group.title}><span>0{i+1}</span><h3>{group.title}</h3><div>{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div></div></section>
    <section className="about-experience"><div className="about-container"><p className="about-eyebrow">TRAYECTORIA</p><h2>Experiencia que conecta <em>negocios y tecnología.</em></h2><div className="about-timeline">{experiences.map(item=><article key={item.company}><time>{item.period}</time><div><h3>{item.company}</h3><p>{item.role}</p></div></article>)}</div><a className="about-text-link" href="/experiencia">Ver trayectoria completa ↗</a></div></section>
    <section className="about-approach"><div className="about-container about-approach-grid"><div><p className="about-eyebrow">MI FORMA DE TRABAJAR</p><h2>Diseño con intención. <em>Desarrollo con propósito.</em></h2></div><p>Me gusta escuchar primero, entender qué necesita el negocio y después construir. Cuido los detalles visuales, la experiencia móvil, el rendimiento y la facilidad de uso. No busco sumar funciones por sumar: prefiero soluciones que realmente aporten valor.</p></div></section>
    <footer className="about-footer" id="contacto"><div className="about-container"><p className="about-eyebrow">¿TRABAJAMOS JUNTOS?</p><h2>Hablemos de tu <span>próximo proyecto.</span></h2><div className="about-footer-actions"><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Escribirme por WhatsApp ↗</a><a href={`mailto:${contact.email}`}>Enviar un correo ↗</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div className="about-footer-bottom"><span>© 2026 Derlis Aguilera</span><a href="/">Volver al inicio ↑</a></div></div></footer>
  </main>;
}

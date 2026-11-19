import type { Metadata } from "next";
import { contact } from "../../lib/portfolio-data";
import { newProjects } from "../../lib/new-projects";
import "./marketing-digital.css";

export const metadata: Metadata = {
  title: "Marketing Digital y Analítica | Derlis Aguilera",
  description: "Experiencia en marketing digital, Google Ads, Meta Ads, GA4, SEO, ecommerce, medición de campañas e indicadores de rendimiento.",
};

const indicators = [
  {name:"CTR",detail:"Porcentaje de clics respecto de las impresiones; permite evaluar la respuesta al anuncio."},
  {name:"CPC",detail:"Costo por clic; ayuda a analizar la eficiencia de la inversión publicitaria."},
  {name:"CPM",detail:"Costo por mil impresiones; útil para comparar el costo de exposición de campañas."},
  {name:"Alcance",detail:"Cantidad de personas únicas expuestas a una campaña."},
  {name:"Frecuencia",detail:"Promedio de veces que cada persona recibe un anuncio."},
  {name:"Conversión",detail:"Acciones comerciales logradas: consultas, registros o compras, según el objetivo."},
];

const strengths = [
  {title:"Publicidad digital",detail:"Google Ads, Meta Ads, campañas de búsqueda, segmentación, objetivos y seguimiento de desempeño."},
  {title:"Medición y analítica",detail:"Google Analytics 4, Google Tag Manager, Looker Studio y análisis de tráfico, comportamiento y conversiones."},
  {title:"SEO y visibilidad",detail:"Optimización de contenido, fichas de productos, estructura de sitios y visibilidad en buscadores."},
  {title:"Ecommerce y negocio",detail:"Shopify, catálogos, promociones, experiencia de compra y coordinación entre marketing, operaciones y ventas."},
];

export default function MarketingDigitalPage() {
  const selected = newProjects.filter(p=>["Ultramaison","Guara Market","Limpiarte Paraguay","Portal Verde","Corpicia"].includes(p.title));
  return <main className="mkt-page">

    <section className="mkt-hero"><div className="mkt-container"><p className="mkt-kicker">MARKETING DIGITAL · ANALÍTICA · ECOMMERCE</p><h1>Estrategia digital <span>orientada a resultados.</span></h1><p className="mkt-lead">Soy Derlis Aguilera. Combino experiencia comercial y gestión de ecommerce con conocimientos de publicidad digital, SEO, medición y análisis de indicadores para tomar mejores decisiones.</p><div className="mkt-actions"><a href="#competencias">Ver competencias ↓</a><a href="/experiencia">Trayectoria profesional ↗</a></div><p className="mkt-note">Experiencia en empresas de Paraguay y proyectos digitales para marcas de Paraguay y Colombia.</p></div></section>
    <section className="mkt-section" id="competencias"><div className="mkt-container"><p className="mkt-kicker">COMPETENCIAS PROFESIONALES</p><h2>Marketing que conecta <span>datos y negocio.</span></h2><div className="mkt-grid">{strengths.map((x,i)=><article key={x.title}><small>0{i+1}</small><h3>{x.title}</h3><p>{x.detail}</p></article>)}</div></div></section>
    <section className="mkt-section mkt-dark" id="indicadores"><div className="mkt-container"><p className="mkt-kicker">INDICADORES DE CAMPAÑAS</p><h2>Entender los números <span>para mejorar decisiones.</span></h2><p className="mkt-sub">Indicadores relevantes para evaluar campañas digitales y su relación con objetivos comerciales.</p><div className="mkt-metrics">{indicators.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.detail}</p></article>)}</div></div></section>
    <section className="mkt-section"><div className="mkt-container mkt-two"><div><p className="mkt-kicker">EXPERIENCIA PROFESIONAL</p><h2>Conozco el negocio <span>desde la operación.</span></h2></div><div><p>En Inverfin trabajo en estrategia y operaciones ecommerce, con seguimiento de indicadores comerciales, optimización de catálogo y SEO, coordinación de equipo y mejoras de conversión.</p><p>En Fortis participé en estrategias de marketing digital, SEO, SEM, email marketing y redes sociales, además de la gestión del canal ecommerce.</p><p>Mi experiencia también incluye gestión de clientes y proyectos digitales en Teo y supervisión de ventas digitales en Casa Paraná.</p><a className="mkt-text-link" href="/experiencia">Conocer mi experiencia completa ↗</a></div></div></section>
    <section className="mkt-section mkt-soft" id="proyectos"><div className="mkt-container"><p className="mkt-kicker">TRABAJOS SELECCIONADOS</p><h2>Proyectos que unen <span>experiencia digital y comercial.</span></h2><div className="mkt-projects">{selected.map(p=><a key={p.title} href={p.url} target="_blank" rel="noreferrer"><span>{p.category}</span><h3>{p.title} ↗</h3><p>{p.description}</p></a>)}</div><a className="mkt-text-link" href="/#proyectos">Ver los 17 proyectos del portafolio ↗</a></div></section>
    <footer className="mkt-footer"><div className="mkt-container"><p className="mkt-kicker">CONTACTO PROFESIONAL</p><h2>Conversemos sobre <span>marketing y crecimiento digital.</span></h2><div className="mkt-actions"><a href={`mailto:${contact.email}`}>Enviar correo ↗</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={contact.cv} download>Descargar CV ↓</a></div><p className="mkt-bottom">Derlis Aguilera · Paraguay · <a href="/">Volver al portafolio</a></p></div></footer>
  </main>;
}

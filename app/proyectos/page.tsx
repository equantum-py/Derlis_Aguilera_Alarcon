import "./catalog.css";
import Image from "next/image";
import { contact, projects } from "../../lib/portfolio-data";

const demos = [
  {name:"CHE Bagels",kind:"Ecommerce gastronómico",url:"https://chebagels.vercel.app/",status:"Demo"},
  {name:"Santa María",kind:"Ecommerce ferretería",url:"https://santamaria-indol.vercel.app/",status:"Demo"},
  {name:"Limpiarte Paraguay",kind:"Ecommerce productos de limpieza",url:"https://limpiarteparaguay.vercel.app/",status:"Demo"},
  {name:"Plataforma Arbitral APF",kind:"Aplicación deportiva PWA",url:"https://app-apf.vercel.app/",status:"Demo"},
  {name:"Relato Estratégico",kind:"Web corporativa y panel editorial",url:"https://relatoestrategico.vercel.app/",status:"Demo"},
  {name:"eQuantum Consulting",kind:"Sitio corporativo",url:"https://www.equantum.com.py/",status:"Sitio web"},
  {name:"eQuantum Equipo",kind:"Panel de gestión interna",url:"https://equipoequantum.vercel.app/",status:"Sistema privado"},
  {name:"InYou",kind:"Web y panel administrativo",url:"https://chocolate-squirrel-724944.hostingersite.com/",status:"Proyecto en desarrollo"},
  {name:"OportuLab",kind:"Aplicación web progresiva",url:"",status:"En desarrollo"},
  {name:"Campamento CBG",kind:"Web de eventos",url:"https://campamentocbg.vercel.app/",status:"Sitio web"},
  {name:"Vitalis",kind:"Aplicación y gestión de eventos médicos",url:"",status:"Demo privada"}
];

export default function ProyectosPage() {
 return <main className="portfolio-catalog">
  <header className="catalog-nav"><a href="/">DA<span>.</span></a><a href="/">← Volver al inicio</a><a href={contact.cv} download>Descargar CV ↓</a></header>
  <section className="catalog-intro"><p>PORTAFOLIO / TRABAJOS Y DEMOSTRACIONES</p><h1>Mirá lo que <em>podemos crear.</em></h1><p>Sitios web, tiendas online, aplicaciones y plataformas digitales. Explorá los trabajos, conocé mi participación y visitá cada proyecto.</p></section>
  <section className="catalog-section"><div className="catalog-heading"><h2>Trabajos destacados</h2><p>Experiencia y participación detalladas en cada caso.</p></div><div className="catalog-grid">{projects.map(p=><article className="catalog-card" key={p.title}><div className="catalog-preview"><Image src={p.image} alt={`Vista del proyecto ${p.title}`} width={700} height={430} unoptimized /></div><span className="catalog-type">{p.metric}</span><h3>{p.title}</h3><p>{p.description}</p><small>{p.ownership}</small><a href={`https://${p.website}`} target="_blank" rel="noreferrer">Visitar sitio ↗</a></article>)}</div></section>
  <section className="catalog-section catalog-section-alt"><div className="catalog-heading"><h2>Webs, aplicaciones y demos</h2><p>Proyectos adicionales en distintas etapas. No todos son productos comerciales terminados.</p></div><div className="catalog-grid">{demos.map(p=><article className="catalog-card" key={p.name}>{p.url && <div className="catalog-preview catalog-live-preview"><img src={`https://image.thum.io/get/width/900/crop/550/noanimate/${p.url}`} alt={`Vista previa del sitio ${p.name}`} loading="lazy" /></div>}<span className="catalog-type">{p.status}</span><h3>{p.name}</h3><p>{p.kind}</p>{p.url?<a href={p.url} target="_blank" rel="noreferrer">Abrir proyecto ↗</a>:<span className="catalog-unavailable">Acceso público pendiente</span>}</article>)}</div></section>
  <section className="catalog-contact"><h2>¿Tenés un proyecto en mente?</h2><p>Desarrollo web, aplicaciones, Shopify, campañas digitales y analítica.</p><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Hablemos por WhatsApp ↗</a></section>
 </main>
}

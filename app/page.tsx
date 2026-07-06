import { Reveal } from "@/components/reveal";
import { experiences, kpis, projects, stack } from "@/lib/portfolio-data";

const architectureNodes = ["Canales", "Data", "Automatización", "AI Ops", "Decisión"];

export default function Home() {
  return (
    <main>
      <nav className="nav glass">
        <strong>Derlis Aguilera</strong>
        <div><a href="#projects">Proyectos</a><a href="#contact">Contacto</a></div>
      </nav>

      <section className="hero section">
        <div className="gradient" />
        <Reveal>
          <span className="eyebrow">Ecommerce Strategy & AI Operations Specialist</span>
          <h1>Derlis Aguilera</h1>
          <p className="subtitle">Ecommerce Strategy<br />AI Operations<br />Digital Growth</p>
          <p className="hero-copy">Ayudo a empresas a escalar ecommerce mediante estrategia, automatización e inteligencia artificial.</p>
          <div className="actions"><a className="button primary" href="#projects">Ver Proyectos</a><a className="button" href="#contact">Contactar</a></div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="profile-card glass">
            <div className="avatar">DA</div>
            <p>Conecto negocio, tecnología y operación para transformar datos en crecimiento rentable.</p>
            <div className="signal"><span /> Disponible para consultoría ecommerce & IA</div>
          </div>
        </Reveal>
      </section>

      <section className="section kpi-grid" aria-label="KPI Impact">
        {kpis.map((kpi) => <Reveal key={kpi.label}><div className="kpi glass"><b>{kpi.value}</b><span>{kpi.suffix}</span><p>{kpi.label}</p></div></Reveal>)}
      </section>

      <section className="section two-col" id="about">
        <Reveal><div><span className="eyebrow">Sobre mí</span><h2>Más de 6 años creando crecimiento digital con criterio de negocio.</h2></div></Reveal>
        <Reveal><p className="large">Experiencia en Inverfin, Fortis Mayorista, Teo S.A. y Casa Paraná liderando iniciativas ecommerce, analítica, automatización y transformación digital. Mi enfoque no parte del código: parte del margen, la conversión, la experiencia de usuario y la capacidad operativa del negocio.</p></Reveal>
      </section>

      <section className="section" id="experience">
        <Reveal><span className="eyebrow">Evolución profesional</span><h2>Timeline visual orientado a resultados</h2></Reveal>
        <div className="timeline">{experiences.map((item) => <Reveal key={item.company}><article className="timeline-item glass"><time>{item.period}</time><h3>{item.company}</h3><strong>{item.role}</strong><ul>{item.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul></article></Reveal>)}</div>
      </section>

      <section className="section dashboard">
        <Reveal><span className="eyebrow">Dashboard personal</span><h2>Métricas de especialización</h2></Reveal>
        <div className="metrics glass">
          {[["Ecommerce Management", 94], ["AI Operations", 90], ["Business Intelligence", 88], ["Digital Growth", 92]].map(([label, value]) => (
            <div className="bar" key={label as string}><div><span>{label}</span><b>{value}%</b></div><progress value={value as number} max="100" /></div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal><span className="eyebrow">Proyectos destacados</span><h2>Casos de negocio: problema → acción → resultado</h2></Reveal>
        <div className="project-grid">{projects.map((project) => <Reveal key={project.title}><article className="project-card glass"><div className="screenshot"><span>{project.metric}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="case"><b>Problema</b><span>{project.problem}</span><b>Acción</b><span>{project.action}</span><b>Resultado</b><span>{project.result}</span></div><div className="tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></article></Reveal>)}</div>
      </section>

      <section className="section two-col">
        <Reveal><div><span className="eyebrow">AI Native</span><h2>Automatización como ventaja operativa, no como experimento.</h2></div></Reveal>
        <Reveal><div className="architecture glass">{architectureNodes.map((node, index) => <div className="node" key={node}><span>{String(index + 1).padStart(2, "0")}</span>{node}</div>)}</div></Reveal>
      </section>

      <section className="section">
        <Reveal><span className="eyebrow">Stack</span><h2>Herramientas para crecimiento, medición y ejecución</h2></Reveal>
        <div className="stack">{stack.map((tool) => <span className="tool glass" key={tool}>{tool}</span>)}</div>
      </section>

      <section className="section philosophy glass">
        <Reveal><span className="eyebrow">Filosofía</span><h2>Cómo entiendo el crecimiento digital</h2><p>No miro solamente ROAS. Analizo margen, conversión, experiencia de usuario, automatización y rentabilidad.</p></Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal><span className="eyebrow">Consultoría ecommerce & IA</span><h2>Trabajemos juntos</h2><p>Diseñemos un sistema de crecimiento digital medible, rentable y preparado para operar con inteligencia artificial.</p><div className="contact-links"><a href="mailto:derlis.aguilera@example.com">Email</a><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a><a href="https://github.com/" target="_blank">GitHub</a></div><a className="button primary" href="mailto:derlis.aguilera@example.com">Trabajemos juntos</a></Reveal>
      </section>
    </main>
  );
}

import { contact } from "../lib/portfolio-data";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Mi perfil", href: "/#perfil" },
  { label: "Experiencia", href: "/experiencia" },
  { label: "Marketing digital", href: "/marketing-digital" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];

export function SiteHeader() {
  return <header className="site-header">
    <div className="site-header-inner">
      <a className="site-header-brand" href="/" aria-label="Derlis Aguilera, inicio">DA<span>.</span></a>
      <nav className="site-header-links" aria-label="Navegación principal">
        {links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="site-header-cv" href={contact.cv} download>Descargar CV ↓</a>
    </div>
  </header>;
}

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { contact } from '../data'

const navLinks = [
  ['services', 'Services'],
  ['projets', 'Projets'],
  ['processus', 'Processus'],
  ['apropos', 'À propos'],
]

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Kreadis, accueil">
      <img src="/favicon.svg" alt="" width="34" height="34" />
      <span>Kreadis</span>
    </Link>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" />
    </svg>
  )
}

// Fait apparaître les éléments .reveal au défilement (à relancer à chaque changement de page)
export function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}

// Remonte en haut à chaque nouvelle page, ou défile jusqu'à l'ancre (#contact…)
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return null
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(([id, label]) => (
            <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Démarrer un projet
          </Link>
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <p>© {new Date().getFullYear()} Kreadis. Design UI/UX · Web · Mobile · Webmastering · Maintenance</p>
        <div className="socials">
          <a href={contact.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href={contact.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { useReveal } from '../components/Layout'
import './Project.css'

// Bandeau géant qui défile, inspiré des slogans en lettres contour
function Marquee({ text }) {
  const items = Array.from({ length: 4 }, () => text)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t} —</span>
        ))}
      </div>
    </div>
  )
}

function Block({ num, title, children }) {
  return (
    <section className="case-block reveal">
      <div className="case-label">
        <span className="case-num">{num}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-content">{children}</div>
    </section>
  )
}

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useReveal(slug)
  useEffect(() => {
    if (project) document.title = `${project.title} — Kreadis`
    return () => {
      document.title = 'Kreadis — Design & Développement digital'
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const next = projects[(index + 1) % projects.length]
  const prev = projects[(index - 1 + projects.length) % projects.length]

  return (
    <article className="case">
      {/* En-tête plein écran */}
      <header className="case-hero">
        <img src={project.image} alt="" />
        <div className="case-hero-inner container">
          <Link to="/#projets" className="back-link">
            <ArrowLeft size={18} /> Retour aux projets
          </Link>
          <span className="project-cat">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="case-tagline">{project.tagline}</p>
        </div>
      </header>

      <Marquee text={project.slogan} />

      {/* Fiche du projet */}
      <div className="container">
        <dl className="case-meta reveal">
          <div>
            <dt>{project.client ? 'Client' : 'Type'}</dt>
            <dd>{project.client || project.type}</dd>
          </div>
          <div>
            <dt>Année</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Services</dt>
            <dd>{project.services.join(' · ')}</dd>
          </div>
          <div>
            <dt>Outils</dt>
            <dd>{project.tools.join(' · ')}</dd>
          </div>
          {project.website && (
            <div className="case-meta-link">
              <a href={project.website} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {new URL(project.website).hostname.replace('www.', '')} <ArrowUpRight size={16} />
              </a>
            </div>
          )}
        </dl>

        <Block num="01" title="Contexte">
          {project.context.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Block>

        <Block num="02" title="Le défi">
          <p className="case-quote">« {project.challenge} »</p>
        </Block>

        <Block num="03" title="Mon approche">
          <ul className="checklist">
            {project.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Block>
      </div>

      {/* Galerie */}
      <div className="container case-gallery">
        {project.gallery.map((src, i) => (
          <figure key={src} className={`reveal ${i === 0 ? 'wide' : ''}`}>
            <img src={src} alt={`${project.title}, visuel ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>

      <div className="container">
        <Block num="04" title="Objectifs">
          <div className="case-goals">
            {project.goals.map((g) => (
              <div key={g.label}>
                <strong className="gradient-text">{g.value}</strong>
                <span>{g.label}</span>
              </div>
            ))}
          </div>
        </Block>
      </div>

      {/* Navigation entre projets */}
      <nav className="container case-nav" aria-label="Autres projets">
        <Link to={`/projet/${prev.slug}`} className="case-nav-link">
          <img src={prev.image} alt="" loading="lazy" />
          <span className="case-nav-dir">
            <ArrowLeft size={16} /> Projet précédent
          </span>
          <strong>{prev.title}</strong>
        </Link>
        <Link to={`/projet/${next.slug}`} className="case-nav-link next">
          <img src={next.image} alt="" loading="lazy" />
          <span className="case-nav-dir">
            Projet suivant <ArrowRight size={16} />
          </span>
          <strong>{next.title}</strong>
        </Link>
      </nav>

      <section className="container case-cta reveal">
        <h2>Un projet similaire en tête ?</h2>
        <p className="lead">Parlons-en : devis gratuit sous 48h.</p>
        <Link to="/#contact" className="btn btn-primary">
          Démarrer un projet <ArrowRight size={18} />
        </Link>
      </section>
    </article>
  )
}

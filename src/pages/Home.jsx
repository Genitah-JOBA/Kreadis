import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code,
  Globe,
  Mail,
  Palette,
  Phone,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import {
  aboutImage,
  aboutImage2,
  contact,
  heroImage,
  projects,
  services,
  steps,
  values,
} from '../data'
import { useReveal } from '../components/Layout'

const serviceIcons = {
  uiux: Palette,
  web: Code,
  mobile: Smartphone,
  webmaster: Globe,
  maintenance: ShieldCheck,
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="container hero-grid">
        <div className="hero-text reveal">
          <span className="eyebrow">Agence digitale · Design & Développement</span>
          <h1>
            Des expériences <span className="gradient-text">digitales</span> pensées pour faire grandir
            votre activité.
          </h1>
          <p className="lead">
            Kreadis est un studio digital indépendant qui accompagne entreprises et entrepreneurs de
            l'idée au lancement : design UI/UX, sites web, applications mobiles, webmastering et
            maintenance.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Parlons de votre projet <ArrowRight size={18} />
            </a>
            <a href="#projets" className="btn btn-ghost">
              Voir nos projets
            </a>
          </div>
          <ul className="hero-tags">
            {services.map((s) => (
              <li key={s.key}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-img">
            <img src={heroImage} alt="Maquettes d'application sur smartphone et ordinateur" />
          </div>
          <div className="float-card fc-1">
            <Palette size={20} />
            <div>
              <strong>UI/UX</strong>
              <small>Pensé pour vos utilisateurs</small>
            </div>
          </div>
          <div className="float-card fc-2">
            <Smartphone size={20} />
            <div>
              <strong>Web & Mobile</strong>
              <small>Rapide, moderne, responsive</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="values">
      <div className="container values-grid">
        {values.map((v) => (
          <div className="value reveal" key={v.label}>
            <strong className="gradient-text">{v.value}</strong>
            <span>{v.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Nos services"
          title="Tout votre digital, sous un même toit"
          text="Cinq expertises complémentaires pour concevoir, construire et faire vivre vos produits numériques."
        />
        <div className="services-grid">
          {services.map((s) => {
            const Icon = serviceIcons[s.key]
            return (
              <article className="service-card reveal" key={s.key}>
                <div className="service-img">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <span className="service-icon">
                    <Icon size={22} />
                  </span>
                </div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="chips">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const filters = ['Tous', 'UI/UX', 'Web', 'Mobile']
  const [active, setActive] = useState('Tous')
  const list = active === 'Tous' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section section-alt" id="projets">
      <div className="container">
        <SectionHead
          eyebrow="Portfolio"
          title="Projets & concepts"
          text="Une sélection d'études de cas illustrant le savoir-faire de Kreadis en design et en développement."
        />
        <div className="filters reveal" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={active === f ? 'active' : ''}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {list.map((p) => (
            <Link to={`/projet/${p.slug}`} className="project-card" key={p.slug}>
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="project-overlay">
                <span className="project-cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="project-more">
                  Voir l'étude de cas <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="processus">
      <div className="container">
        <SectionHead
          eyebrow="Notre méthode"
          title="Un processus clair, du brief au lancement"
        />
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step reveal" key={s.title}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section section-alt" id="apropos">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <img className="about-main" src={aboutImage} alt="Espace de travail avec ordinateur" loading="lazy" />
          <img className="about-small" src={aboutImage2} alt="Croquis d'interface sur tablette" loading="lazy" />
        </div>
        <div className="about-text reveal">
          <span className="eyebrow">À propos de Kreadis</span>
          <h2>Un studio indépendant, un seul contact</h2>
          <p className="lead">
            Kreadis est né d'une conviction : un bon produit digital doit être à la fois beau, simple à
            utiliser et solide techniquement.
          </p>
          <p className="lead">
            Avec Kreadis, vous échangez directement avec la personne qui conçoit et développe votre
            projet : pas d'intermédiaire, pas d'information perdue en route.
          </p>
          <ul className="checklist">
            <li>Un contact unique, du design jusqu'à la maintenance</li>
            <li>Des technologies modernes et éprouvées</li>
            <li>Des tarifs adaptés aux indépendants, PME et startups</li>
            <li>Un suivi transparent à chaque étape</li>
          </ul>
          <a href="#contact" className="btn btn-primary">
            Travaillons ensemble <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const empty = { name: '', email: '', service: services[0].title, message: '' }
  const [form, setForm] = useState(empty)
  // idle | sending | success | activation | error
  const [status, setStatus] = useState('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Envoi via FormSubmit (formsubmit.co) : le message arrive directement dans la boîte mail,
  // sans serveur. Au tout premier envoi, FormSubmit envoie un e-mail d'activation à confirmer.
  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorDetail('')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nom: form.name,
          email: form.email,
          Service: form.service,
          Message: form.message,
          _subject: `Kreadis — Nouveau projet ${form.service} (${form.name})`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      // Premier envoi : FormSubmit attend que l'adresse soit activée par e-mail
      if (/activat/i.test(data.message || '')) {
        setStatus('activation')
        return
      }
      if (!res.ok || String(data.success) === 'false') {
        throw new Error(data.message || `Erreur ${res.status}`)
      }
      setStatus('success')
      setForm(empty)
    } catch (err) {
      console.error('Envoi du formulaire impossible :', err)
      setErrorDetail(err.message === 'Failed to fetch' ? 'connexion au service impossible' : err.message)
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-box reveal">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2>Un projet en tête ?</h2>
          <p className="lead">Parlez-moi de votre idée : je vous réponds sous 48h avec un devis gratuit.</p>
          <ul className="contact-list">
            <li>
              <Mail size={18} /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Phone size={18} /> <a href={`tel:${contact.phoneLink}`}>{contact.phone}</a>
            </li>
            <li>
              <Briefcase size={18} /> {contact.location}
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Nom
            <input name="name" required value={form.name} onChange={update} placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update}
              placeholder="vous@exemple.com"
            />
          </label>
          <label>
            Service
            <select name="service" value={form.service} onChange={update}>
              {services.map((s) => (
                <option key={s.key}>{s.title}</option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={update}
              placeholder="Décrivez votre projet…"
            />
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours…' : 'Envoyer'} <ArrowUpRight size={18} />
          </button>
          {status === 'success' && (
            <p className="form-status success" role="status">
              Merci ! Votre message a bien été envoyé, je vous réponds très vite.
            </p>
          )}
          {status === 'activation' && (
            <p className="form-status error" role="alert">
              Le formulaire doit d'abord être activé : un e-mail « Activate Form » a été envoyé à{' '}
              {contact.email} (vérifiez aussi les spams). Cliquez sur le lien, puis renvoyez votre
              message.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status error" role="alert">
              L'envoi a échoué. Écrivez-moi directement à{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> ou appelez le {contact.phone}.
              {errorDetail && <small className="form-status-detail">Détail : {errorDetail}</small>}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  useReveal('home')
  return (
    <>
      <Hero />
      <Values />
      <Services />
      <Projects />
      <Process />
      <About />
      <Contact />
    </>
  )
}

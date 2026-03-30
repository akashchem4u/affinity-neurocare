import { useState, useEffect } from 'react'

export default function Navbar({ onSchedule }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Patient Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <div className="navbar-logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
              </svg>
            </div>
            <div className="navbar-logo-text">
              <strong>Affinity Neurocare</strong>
              <span>Neurology · DFW Texas</span>
            </div>
          </a>

          <div className="navbar-links">
            {links.map(l => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="navbar-actions">
            <a href="tel:2144078580" className="navbar-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.64 5.05 2 2 0 0 1 3.61 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              214-407-8580
            </a>
            <button className="navbar-links navbar-cta" onClick={onSchedule} style={{ background: 'var(--gold)', color: 'white', padding: '10px 20px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', border: 'none', cursor: 'pointer', transition: 'var(--transition)' }}>
              Book Appointment
            </button>
          </div>

          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav open">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="tel:2144078580" style={{ color: 'var(--gold-light)', fontWeight: 600, marginTop: 4 }}>
              📞 214-407-8580
            </a>
            <button className="btn-primary" onClick={() => { setMenuOpen(false); onSchedule(); }} style={{ marginTop: 8 }}>
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

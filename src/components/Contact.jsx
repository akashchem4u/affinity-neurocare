import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header fade-in" ref={ref}>
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Two Convenient <em>DFW</em> Locations</h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            Serving the Dallas-Fort Worth metroplex with expert neurological care.
            Both locations offer comprehensive in-office diagnostics.
          </p>
        </div>

        <div className="contact-grid">
          {/* Carrollton */}
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <h3>Carrollton Office</h3>
            <p>4323 North Josey Lane, Suite 301<br />Carrollton, TX 75010</p>
            <a href="https://maps.google.com/?q=4323+North+Josey+Lane+Suite+301+Carrollton+TX+75010" target="_blank" rel="noopener noreferrer">
              Get Directions →
            </a>
          </div>

          {/* Frisco */}
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <h3>Frisco Office</h3>
            <p>8350 Dallas Parkway, Suite 300<br />Frisco, TX 75034</p>
            <a href="https://maps.google.com/?q=8350+Dallas+Parkway+Suite+300+Frisco+TX+75034" target="_blank" rel="noopener noreferrer">
              Get Directions →
            </a>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <h3>Call Us</h3>
            <p>Our team is available during business hours to answer questions, assist with referrals, and schedule appointments.</p>
            <a href="tel:2144078580">214-407-8580 →</a>
          </div>

          {/* Insurance */}
          <div className="contact-card">
            <div className="contact-card-icon">🏥</div>
            <h3>Insurance & Billing</h3>
            <p>We accept Aetna, Cigna, UnitedHealthcare, and most major insurance plans. Please call to verify your specific coverage before your visit.</p>
            <a href="tel:2144078580">Verify Coverage →</a>
          </div>
        </div>

        {/* Map placeholder */}
        <div style={{
          marginTop: 48,
          background: 'var(--navy)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          position: 'relative',
          height: 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Decorative grid map background */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🗺️</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--white)', marginBottom: 8 }}>
              Serving the Dallas-Fort Worth Metroplex
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
              Carrollton · Frisco · and surrounding DFW communities
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://maps.google.com/?q=4323+North+Josey+Lane+Suite+301+Carrollton+TX+75010"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.82rem', padding: '10px 20px' }}
              >
                Carrollton Directions
              </a>
              <a
                href="https://maps.google.com/?q=8350+Dallas+Parkway+Suite+300+Frisco+TX+75034"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.08)', color: 'white',
                  fontSize: '0.82rem', padding: '10px 20px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.12)', fontWeight: 600,
                  transition: 'var(--transition)',
                }}
              >
                Frisco Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

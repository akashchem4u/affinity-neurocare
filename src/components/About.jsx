import { useEffect, useRef } from 'react'

const STAFF = [
  { initials: 'KN', name: 'Kaitlyn', role: 'Nurse Practitioner' },
  { initials: 'SH', name: 'Shervonha', role: 'Office Manager' },
  { initials: 'AX', name: 'Alexis', role: 'Front Desk' },
  { initials: 'LH', name: 'Leah', role: 'Clinical Staff' },
]

const VALUES = [
  { icon: '💬', label: 'Open Communication', desc: 'We educate every patient about their condition' },
  { icon: '❤️', label: 'Compassionate Care', desc: 'Heartfelt support for patients of all ages' },
  { icon: '🔬', label: 'In-Office Diagnostics', desc: 'Convenient testing without lengthy referrals' },
  { icon: '⭐', label: 'Advanced Treatments', desc: "Today's most effective neurological therapies" },
]

export default function About() {
  const ref = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    if (cardRef.current) obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left fade-in" ref={ref}>
            <div className="section-label" style={{ color: 'var(--gold-light)' }}>
              <span style={{ background: 'var(--gold-light)', display: 'inline-block', width: 32, height: 1 }} />
              Meet Our Team
            </div>
            <h2 className="section-title">
              Devoted to Every<br /><em>Patient's</em> Journey
            </h2>

            <div className="about-quote">
              <p>
                "We believe every patient deserves heartfelt support, an honest conversation,
                and expert medical care — from first visit through long-term management."
              </p>
            </div>

            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 0 }}>
              Affinity Neurocare was founded on the principle that neurological care should be both
              clinically excellent and deeply personal. Dr. Dike and his team take the time to truly
              understand each patient's unique situation, crafting individualized treatment plans that
              address the whole person — not just the diagnosis.
            </p>

            <div className="about-values">
              {VALUES.map(v => (
                <div key={v.label} className="about-value">
                  <div className="about-value-icon">{v.icon}</div>
                  <div className="about-value-text">
                    <strong>{v.label}</strong>
                    <span>{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right fade-in" ref={cardRef} style={{ transitionDelay: '0.2s' }}>
            <div className="doctor-card">
              <div className="doctor-card-header">
                <div className="rating-badge">
                  <div className="stars">★★★★★</div>
                  <div className="score">4.81</div>
                  <div className="reviews">32 Reviews</div>
                </div>
                <div className="doctor-avatar">ND</div>
                <div className="doctor-name">Dr. Nnamdi C. Dike</div>
                <div className="doctor-cred">DO · Neurologist · Board Certified</div>
              </div>

              <div className="doctor-card-body">
                <div className="doctor-stat-row">
                  <div className="doctor-stat">
                    <div className="num">DO</div>
                    <div className="lbl">Credential</div>
                  </div>
                  <div className="doctor-stat">
                    <div className="num">2</div>
                    <div className="lbl">DFW Locations</div>
                  </div>
                  <div className="doctor-stat">
                    <div className="num">8+</div>
                    <div className="lbl">Specialties</div>
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginBottom: 20, lineHeight: 1.65 }}>
                  Dr. Dike is a Doctor of Osteopathic Medicine specializing in neurology.
                  Patients consistently praise his thoroughness, compassion, and ability to
                  explain complex conditions in plain language. Rated one of the best
                  neurologists in the DFW area.
                </p>

                <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>
                  Care Team
                </div>
                <div className="doctor-staff">
                  {STAFF.map(s => (
                    <div key={s.name} className="doctor-staff-item">
                      <div className="doctor-staff-avatar">{s.initials}</div>
                      <span>{s.name}</span>
                      <span className="doctor-staff-role">{s.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

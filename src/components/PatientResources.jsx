import { useEffect, useRef } from 'react'

const RESOURCES = [
  { icon: '📋', label: 'New Patient Intake Form', desc: 'Complete before your first visit to save time' },
  { icon: '📄', label: 'Medical Record Release Form', desc: 'Authorize transfer of your medical records' },
  { icon: '📅', label: 'Online Appointment Booking', desc: 'Request your appointment 24/7' },
  { icon: '📞', label: 'After-Visit Support', desc: 'Call 214-407-8580 for post-visit questions' },
]

const INSURANCE = ['Aetna', 'Cigna', 'UnitedHealthcare', 'Most Major Plans']

export default function PatientResources({ onSchedule }) {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (leftRef.current) obs.observe(leftRef.current)
    if (rightRef.current) obs.observe(rightRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="resources" id="resources">
      <div className="container">
        <div className="resources-inner">
          <div className="fade-in" ref={leftRef}>
            <div className="section-label">Patient Resources</div>
            <h2 className="section-title">
              Everything You Need<br />
              to <em>Get Started</em>
            </h2>
            <p className="section-desc" style={{ marginTop: 16 }}>
              We've made it as easy as possible to begin your care journey. Download forms,
              book online, and confirm insurance coverage before your first visit.
            </p>

            <div className="resources-list">
              {RESOURCES.map(r => (
                <div key={r.label} className="resource-item">
                  <div className="resource-item-icon">{r.icon}</div>
                  <div className="resource-item-text">
                    <strong>{r.label}</strong>
                    <span>{r.desc}</span>
                  </div>
                  <span className="resource-item-arrow">→</span>
                </div>
              ))}
            </div>

            <div className="insurance-section">
              <h4>Insurance Accepted</h4>
              <div className="insurance-logos">
                {INSURANCE.map(ins => (
                  <div key={ins} className="insurance-logo">{ins}</div>
                ))}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 12 }}>
                Please contact our office to confirm your specific plan is accepted.
              </p>
            </div>
          </div>

          <div className="fade-in" ref={rightRef} style={{ transitionDelay: '0.15s' }}>
            <div className="resources-cta-panel">
              <div className="section-label">Ready to Begin?</div>
              <h3>
                Your Path to <em>Better</em><br />Neurological Health
              </h3>
              <p>
                Booking with Affinity Neurocare is simple. New and returning patients can
                request appointments online or by phone — our team typically responds within
                one business day.
              </p>

              <div className="cta-steps">
                <div className="cta-step">
                  <div className="cta-step-num">1</div>
                  <span>Request your appointment online or call us</span>
                </div>
                <div className="cta-step">
                  <div className="cta-step-num">2</div>
                  <span>Complete your new patient intake forms</span>
                </div>
                <div className="cta-step">
                  <div className="cta-step-num">3</div>
                  <span>Confirm insurance coverage with our team</span>
                </div>
                <div className="cta-step">
                  <div className="cta-step-num">4</div>
                  <span>Attend your consultation with Dr. Dike</span>
                </div>
              </div>

              <button className="btn-primary" onClick={onSchedule} style={{ width: '100%', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Request an Appointment
              </button>

              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <a href="tel:2144078580" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  Or call us at <strong style={{ color: 'var(--gold-light)' }}>214-407-8580</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

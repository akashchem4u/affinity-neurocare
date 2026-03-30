export default function Footer({ onSchedule }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="navbar-logo" style={{ marginBottom: 4 }}>
              <div className="navbar-logo-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                </svg>
              </div>
              <div className="navbar-logo-text">
                <strong>Affinity Neurocare</strong>
                <span>Neurology · DFW Texas</span>
              </div>
            </div>
            <p>
              Compassionate, expert neurological care for patients of all ages
              across the Dallas-Fort Worth metroplex. Led by Dr. Nnamdi C. Dike, DO.
            </p>
            <a href="tel:2144078580" className="footer-phone-link">
              📞 214-407-8580
            </a>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['Migraines', 'Multiple Sclerosis', 'Neuropathy', 'Concussion', 'Dementia', 'Seizures & Epilepsy', 'Stroke & TIA', 'Back Pain'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Patient Info</h4>
            <ul>
              <li><a href="#resources">New Patient Forms</a></li>
              <li><a href="#resources">Medical Records Release</a></li>
              <li><a href="#resources">Insurance & Billing</a></li>
              <li><a href="#about">Meet Dr. Dike</a></li>
              <li><a href="#testimonials">Patient Reviews</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              <li>
                <a href="https://maps.google.com/?q=4323+North+Josey+Lane+Suite+301+Carrollton+TX" target="_blank" rel="noopener noreferrer">
                  Carrollton, TX
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=8350+Dallas+Parkway+Suite+300+Frisco+TX" target="_blank" rel="noopener noreferrer">
                  Frisco, TX
                </a>
              </li>
              <li><a href="#contact">Get Directions</a></li>
            </ul>
            <button
              onClick={onSchedule}
              style={{
                marginTop: 20,
                background: 'var(--gold)',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                padding: '12px 20px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseOut={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Affinity Neurocare · Dr. Nnamdi C. Dike, DO · All rights reserved.
          </span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

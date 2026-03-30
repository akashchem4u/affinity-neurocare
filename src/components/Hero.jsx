export default function Hero({ onSchedule }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />

      {/* Decorative right panel */}
      <div className="hero-visual">
        <div className="hero-visual-inner">
          <svg className="hero-brain-art" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="150" stroke="rgba(191,140,68,0.4)" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" stroke="rgba(191,140,68,0.3)" strokeWidth="1" strokeDasharray="8 4" />
            <circle cx="200" cy="200" r="60" stroke="rgba(191,140,68,0.25)" strokeWidth="1" />
            {/* Brain-like paths */}
            <path d="M140 180 C130 160 140 140 160 138 C165 120 180 110 200 112 C220 110 235 120 238 138 C258 140 268 160 260 180 C270 195 265 215 250 220 C248 235 238 245 225 244 C220 255 212 260 200 260 C188 260 180 255 175 244 C162 245 152 235 150 220 C135 215 130 195 140 180Z" stroke="rgba(191,140,68,0.5)" strokeWidth="1.5" fill="rgba(191,140,68,0.03)" />
            <path d="M200 112 C200 140 185 155 185 175" stroke="rgba(191,140,68,0.3)" strokeWidth="1" />
            <path d="M200 112 C200 140 215 155 215 175" stroke="rgba(191,140,68,0.3)" strokeWidth="1" />
            <path d="M140 180 C158 178 170 188 170 200" stroke="rgba(191,140,68,0.25)" strokeWidth="1" />
            <path d="M260 180 C242 178 230 188 230 200" stroke="rgba(191,140,68,0.25)" strokeWidth="1" />
            {/* Neural dots */}
            {[
              [200, 112], [160, 138], [238, 138], [140, 180], [260, 180],
              [150, 220], [250, 220], [175, 244], [225, 244], [200, 260],
              [185, 175], [215, 175], [200, 200]
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="rgba(191,140,68,0.6)" />
            ))}
            {/* Outer ring nodes */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const x = 200 + 150 * Math.cos(angle)
              const y = 200 + 150 * Math.sin(angle)
              return <circle key={`outer-${i}`} cx={x} cy={y} r="3" fill="rgba(191,140,68,0.3)" />
            })}
            {/* Connection lines to outer ring */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const x = 200 + 150 * Math.cos(angle)
              const y = 200 + 150 * Math.sin(angle)
              return <line key={`line-${i}`} x1="200" y1="200" x2={x} y2={y} stroke="rgba(191,140,68,0.08)" strokeWidth="1" />
            })}
          </svg>

          {/* Floating stat cards */}
          <div className="hero-stat-float hero-stat-float-1">
            <div className="stat-num">4.81★</div>
            <div className="stat-label">Patient Rating</div>
          </div>
          <div className="hero-stat-float hero-stat-float-2">
            <div className="stat-num">8+</div>
            <div className="stat-label">Specialties</div>
          </div>
          <div className="hero-stat-float hero-stat-float-3">
            <div className="stat-num">2</div>
            <div className="stat-label">DFW Locations</div>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          <span className="hero-eyebrow-text">Board-Certified Neurology · DFW Texas</span>
        </div>

        <h1 className="hero-h1">
          Expert Care for<br />
          Your <em>Neurological</em><br />
          <strong>Health</strong>
        </h1>

        <p className="hero-sub">
          Led by Dr. Nnamdi C. Dike, DO, Affinity Neurocare delivers compassionate,
          cutting-edge neurological treatment across two convenient DFW locations —
          with the personal attention you deserve.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={onSchedule}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Request an Appointment
          </button>
          <a href="tel:2144078580" className="hero-btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.64 5.05 2 2 0 0 1 3.61 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call 214-407-8580
          </a>
        </div>

        <div className="hero-locations">
          <div className="hero-loc">
            <svg className="hero-loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div className="hero-loc-city">Carrollton</div>
              <div className="hero-loc-text">4323 N. Josey Ln, Suite 301<br/>Carrollton, TX 75010</div>
            </div>
          </div>
          <div className="hero-divider" />
          <div className="hero-loc">
            <svg className="hero-loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div className="hero-loc-city">Frisco</div>
              <div className="hero-loc-text">8350 Dallas Pkwy, Suite 300<br/>Frisco, TX 75034</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

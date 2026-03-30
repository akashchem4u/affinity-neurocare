import { useState, useEffect } from 'react'

const SERVICES = [
  { icon: '🧠', label: 'Migraine Treatment' },
  { icon: '🔬', label: 'Multiple Sclerosis' },
  { icon: '⚡', label: 'Neuropathy' },
  { icon: '🛡️', label: 'Concussion Evaluation' },
  { icon: '🫀', label: 'Dementia / Memory' },
  { icon: '🌩️', label: 'Seizures / Epilepsy' },
  { icon: '🩺', label: 'Stroke / TIA' },
  { icon: '🦴', label: 'Back Pain' },
  { icon: '📋', label: 'New Patient / General' },
  { icon: '🔄', label: 'Follow-Up Visit' },
]

const LOCATIONS = [
  { id: 'carrollton', city: 'Carrollton', address: '4323 N. Josey Ln, Suite 301\nCarrollton, TX 75010' },
  { id: 'frisco', city: 'Frisco', address: '8350 Dallas Pkwy, Suite 300\nFrisco, TX 75034' },
]

const TIME_SLOTS = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

const UNAVAILABLE = [1, 5, 9, 13] // indexes of unavailable slots

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

function Calendar({ selected, onSelect }) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  const firstDay = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const isPast = (day) => {
    const d = new Date(viewYear, viewMonth, day)
    d.setHours(0,0,0,0)
    const t = new Date(); t.setHours(0,0,0,0)
    return d < t
  }

  const isSelected = (day) => {
    if (!selected) return false
    return selected.getDate() === day && selected.getMonth() === viewMonth && selected.getFullYear() === viewYear
  }

  const isToday = (day) => {
    return today.getDate() === day && today.getMonth() === viewMonth && today.getFullYear() === viewYear
  }

  const isWeekend = (day) => {
    const dow = new Date(viewYear, viewMonth, day).getDay()
    return dow === 0 || dow === 6
  }

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <div className="calendar-wrap">
      <div className="calendar-header">
        <button className="cal-nav" onClick={prevMonth}>‹</button>
        <h4>{MONTHS[viewMonth]} {viewYear}</h4>
        <button className="cal-nav" onClick={nextMonth}>›</button>
      </div>
      <div className="calendar-grid">
        {DAYS.map(d => <div key={d} className="cal-day-name">{d}</div>)}
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} className="cal-day empty" />
          const past = isPast(day) || isWeekend(day)
          const sel = isSelected(day)
          const tod = isToday(day)
          return (
            <div
              key={day}
              className={`cal-day${sel ? ' selected' : ''}${tod && !sel ? ' today' : ''}${past ? ' past' : ''}`}
              onClick={() => !past && onSelect(new Date(viewYear, viewMonth, day))}
              title={isWeekend(day) ? 'Closed on weekends' : ''}
            >
              {day}
            </div>
          )
        })}
      </div>
      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 8 }}>
        * Weekend appointments not available. Closed Sun & Sat.
      </p>
    </div>
  )
}

const STEPS = ['Service', 'Date & Time', 'Your Info', 'Confirm']

export default function ScheduleModal({ onClose }) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const [selectedService, setSelectedService] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    dob: '', insurance: '', isNewPatient: 'yes', notes: '',
  })

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const canNext = () => {
    if (step === 0) return !!selectedService
    if (step === 1) return !!selectedLocation && !!selectedDate && !!selectedTime
    if (step === 2) return form.firstName && form.lastName && form.phone && form.email
    return true
  }

  const handleNext = () => {
    if (step < 3) setStep(s => s + 1)
    else setSubmitted(true)
  }

  const formatDate = (d) => {
    if (!d) return '—'
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>✕</button>
          <div className="modal-eyebrow">Affinity Neurocare · DFW Texas</div>
          <div className="modal-title">
            {submitted ? 'Request Received!' : 'Request an Appointment'}
          </div>
          <div className="modal-subtitle">
            {submitted
              ? 'We\'ll confirm your appointment within 1 business day'
              : 'Dr. Nnamdi C. Dike, DO · 214-407-8580'}
          </div>

          {!submitted && (
            <div className="modal-steps">
              {STEPS.map((s, i) => (
                <div key={s} className={`modal-step ${i === step ? 'active' : i < step ? 'done' : ''}`}>
                  <div className="modal-step-num">{i < step ? '✓' : i + 1}</div>
                  <span className="modal-step-label">{s}</span>
                  {i < STEPS.length - 1 && <div className="modal-step-line" />}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-body">
          {submitted ? (
            <div className="modal-success">
              <div className="success-icon">✅</div>
              <h3>Appointment Request Sent</h3>
              <p>
                Thank you, <strong>{form.firstName}</strong>! We've received your request for a{' '}
                <strong>{selectedService}</strong> appointment. Our team will contact you at{' '}
                <strong>{form.phone}</strong> or <strong>{form.email}</strong> within one business day
                to confirm your appointment.
              </p>
              <div className="confirm-box" style={{ textAlign: 'left' }}>
                <div className="confirm-row">
                  <span className="confirm-row-icon">🗓️</span>
                  <span className="confirm-row-label">Date</span>
                  <span className="confirm-row-value">{formatDate(selectedDate)}</span>
                </div>
                <div className="confirm-row">
                  <span className="confirm-row-icon">🕐</span>
                  <span className="confirm-row-label">Time</span>
                  <span className="confirm-row-value">{selectedTime}</span>
                </div>
                <div className="confirm-row">
                  <span className="confirm-row-icon">📍</span>
                  <span className="confirm-row-label">Location</span>
                  <span className="confirm-row-value">{LOCATIONS.find(l => l.id === selectedLocation)?.city} Office</span>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Questions? Call us at <a href="tel:2144078580" style={{ color: 'var(--gold)', fontWeight: 600 }}>214-407-8580</a>
              </p>
              <button className="btn-primary" onClick={onClose} style={{ marginTop: 8 }}>
                Close
              </button>
            </div>
          ) : (
            <>
              {/* STEP 0 — Service */}
              {step === 0 && (
                <>
                  <div className="modal-section-title">What brings you in?</div>
                  <div className="service-select-grid">
                    {SERVICES.map(s => (
                      <div
                        key={s.label}
                        className={`service-option ${selectedService === s.label ? 'selected' : ''}`}
                        onClick={() => setSelectedService(s.label)}
                      >
                        <span className="service-option-icon">{s.icon}</span>
                        {s.label}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 1 — Location, Date, Time */}
              {step === 1 && (
                <>
                  <div className="modal-section-title">Choose Location & Time</div>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 10, letterSpacing: '0.04em' }}>
                      Select Office Location
                    </div>
                    <div className="location-options">
                      {LOCATIONS.map(loc => (
                        <div
                          key={loc.id}
                          className={`location-option ${selectedLocation === loc.id ? 'selected' : ''}`}
                          onClick={() => setSelectedLocation(loc.id)}
                        >
                          <h4>📍 {loc.city}</h4>
                          <p style={{ whiteSpace: 'pre-line' }}>{loc.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 10, letterSpacing: '0.04em' }}>
                      Select Date
                    </div>
                    <Calendar selected={selectedDate} onSelect={setSelectedDate} />
                  </div>

                  {selectedDate && (
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 10, letterSpacing: '0.04em' }}>
                        Available Times — {formatDate(selectedDate)}
                      </div>
                      <div className="time-slots">
                        {TIME_SLOTS.map((t, i) => (
                          <div
                            key={t}
                            className={`time-slot ${selectedTime === t ? 'selected' : ''} ${UNAVAILABLE.includes(i) ? 'unavailable' : ''}`}
                            onClick={() => !UNAVAILABLE.includes(i) && setSelectedTime(t)}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* STEP 2 — Patient Info */}
              {step === 2 && (
                <>
                  <div className="modal-section-title">Your Information</div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        value={form.lastName}
                        onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="(214) 555-0123"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        value={form.dob}
                        onChange={e => setForm(f => ({ ...f, dob: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label>Insurance Provider</label>
                      <select
                        value={form.insurance}
                        onChange={e => setForm(f => ({ ...f, insurance: e.target.value }))}
                      >
                        <option value="">Select insurance...</option>
                        <option>Aetna</option>
                        <option>Cigna</option>
                        <option>UnitedHealthcare</option>
                        <option>Blue Cross Blue Shield</option>
                        <option>Medicare</option>
                        <option>Medicaid</option>
                        <option>Other / Self-Pay</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Are you a new patient?</label>
                    <select
                      value={form.isNewPatient}
                      onChange={e => setForm(f => ({ ...f, isNewPatient: e.target.value }))}
                    >
                      <option value="yes">Yes, I'm a new patient</option>
                      <option value="no">No, I'm an existing patient</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Additional Notes (optional)</label>
                    <textarea
                      placeholder="Describe your symptoms or any relevant medical history..."
                      value={form.notes}
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                    />
                  </div>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    🔒 Your information is kept strictly confidential and is only used to prepare for your appointment.
                  </p>
                </>
              )}

              {/* STEP 3 — Confirm */}
              {step === 3 && (
                <>
                  <div className="modal-section-title">Review & Confirm</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 24 }}>
                    Please review your appointment details before submitting. Our team will contact you
                    to confirm the final time.
                  </p>

                  <div className="confirm-box">
                    <div className="confirm-row">
                      <span className="confirm-row-icon">🧠</span>
                      <span className="confirm-row-label">Service</span>
                      <span className="confirm-row-value">{selectedService}</span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-row-icon">📍</span>
                      <span className="confirm-row-label">Location</span>
                      <span className="confirm-row-value">{LOCATIONS.find(l => l.id === selectedLocation)?.city} Office</span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-row-icon">🗓️</span>
                      <span className="confirm-row-label">Date</span>
                      <span className="confirm-row-value">{formatDate(selectedDate)}</span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-row-icon">🕐</span>
                      <span className="confirm-row-label">Time</span>
                      <span className="confirm-row-value">{selectedTime}</span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-row-icon">👤</span>
                      <span className="confirm-row-label">Patient</span>
                      <span className="confirm-row-value">{form.firstName} {form.lastName}</span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-row-icon">📞</span>
                      <span className="confirm-row-label">Phone</span>
                      <span className="confirm-row-value">{form.phone}</span>
                    </div>
                    <div className="confirm-row">
                      <span className="confirm-row-icon">📧</span>
                      <span className="confirm-row-label">Email</span>
                      <span className="confirm-row-value">{form.email}</span>
                    </div>
                    {form.insurance && (
                      <div className="confirm-row">
                        <span className="confirm-row-icon">🏥</span>
                        <span className="confirm-row-label">Insurance</span>
                        <span className="confirm-row-value">{form.insurance}</span>
                      </div>
                    )}
                  </div>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    By submitting, you consent to being contacted by Affinity Neurocare to confirm
                    your appointment. This is a request only — your appointment is not confirmed until
                    you receive a call or email from our office.
                  </p>
                </>
              )}

              {/* Footer nav */}
              <div className="modal-footer">
                {step > 0
                  ? <button className="btn-back" onClick={() => setStep(s => s - 1)}>
                      ← Back
                    </button>
                  : <span />
                }
                <button
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!canNext()}
                  style={{ opacity: canNext() ? 1 : 0.45, cursor: canNext() ? 'pointer' : 'not-allowed' }}
                >
                  {step === 3 ? 'Submit Request' : 'Continue →'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

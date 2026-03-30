import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: '🧠',
    title: 'Migraine Treatment',
    desc: 'Comprehensive migraine management from acute pain relief to long-term prevention. We address all four phases — prodrome, aura, attack, and post-drome — with targeted therapies including Botox for chronic cases.',
    tags: ['Acute Care', 'Botox Therapy', 'Preventive Meds', 'Trigger Management'],
  },
  {
    icon: '🔬',
    title: 'Multiple Sclerosis (MS)',
    desc: 'Advanced diagnostics including brain MRI and evoked potential testing, paired with disease-modifying therapies to slow progression, manage acute attacks, and improve long-term quality of life.',
    tags: ['MRI Diagnostics', 'Disease-Modifying Therapy', 'PT & OT Coordination'],
  },
  {
    icon: '⚡',
    title: 'Neuropathy',
    desc: 'Diagnosis and treatment of peripheral, proximal, and diabetic neuropathy. We address root causes — from vitamin deficiencies to autoimmune conditions — with oral medications, nerve blocks, and TENS therapy.',
    tags: ['Peripheral Neuropathy', 'Diabetic Neuropathy', 'Nerve Blocks', 'TENS'],
  },
  {
    icon: '🛡️',
    title: 'Concussion Care',
    desc: 'Thorough evaluation, skull fracture screening, and personalized post-concussion rehabilitation. We also manage post-concussion syndrome for patients with persistent symptoms beyond initial recovery.',
    tags: ['Diagnostic Screening', 'Rehab Planning', 'Post-Concussion Syndrome'],
  },
  {
    icon: '🫀',
    title: 'Dementia & Memory',
    desc: "We diagnose and manage all major dementia types including Alzheimer's, Lewy body, vascular, and frontotemporal. Early diagnosis enables better outcomes through cholinesterase inhibitors and memantine.",
    tags: ["Alzheimer's", 'Lewy Body', 'Vascular Dementia', 'Family Support'],
  },
  {
    icon: '🌩️',
    title: 'Seizures & Epilepsy',
    desc: 'Full seizure evaluation and epilepsy management with anti-seizure medications, dietary guidance, and advanced interventions including vagus nerve stimulation and deep brain stimulation when needed.',
    tags: ['Focal & Generalized', 'Anti-Seizure Meds', 'VNS', 'Deep Brain Stim'],
  },
  {
    icon: '🩺',
    title: 'Stroke & TIA',
    desc: 'Up to 80% of strokes are preventable. We provide rapid assessment, ischemic and hemorrhagic stroke treatment, TIA evaluation, and comprehensive post-stroke rehabilitation and prevention planning.',
    tags: ['Ischemic Stroke', 'Hemorrhagic Stroke', 'TIA', 'Stroke Prevention'],
  },
  {
    icon: '🦴',
    title: 'Back Pain & Spine',
    desc: 'Neurological evaluation of back pain caused by herniated discs, spinal stenosis, and degenerative disc disease. Treatment ranges from conservative NSAIDs and physical therapy to targeted spinal injections.',
    tags: ['Herniated Disc', 'Stenosis', 'Spinal Injections', 'Sciatica'],
  },
]

export default function Services({ onSchedule }) {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header fade-in" ref={el => refs.current[0] = el}>
          <div className="section-label">Our Specialties</div>
          <h2 className="section-title">
            Comprehensive <em>Neurological</em> Care
          </h2>
          <p className="section-desc">
            From complex neurological conditions to spine-related disorders, Dr. Dike and his team
            offer in-office diagnostics and the most advanced treatment protocols available.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="service-card fade-in"
              ref={el => refs.current[i + 1] = el}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button className="btn-primary" onClick={onSchedule} style={{ marginRight: 16 }}>
            Schedule a Consultation
          </button>
          <a href="tel:2144078580" className="btn-ghost">
            Questions? Call us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

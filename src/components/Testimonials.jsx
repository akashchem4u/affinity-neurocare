import { useEffect, useRef } from 'react'

const REVIEWS = [
  { name: "Trin P.", initial: "T", rating: 5, date: "Dec 2025", text: "THE BEST Neurologist I have witnessed in my 35+ years in healthcare. The entire team — Shervonha, Alexis, Leah, Tommy, Derrick, and Dr. Dike — made me feel like the only patient in the building." },
  { name: "Billie B.", initial: "B", rating: 5, date: "Jul 2025", text: "Excellent experience with Dr. Dike, Kaitlyn and the whole staff. Always welcoming and friendly. I never feel rushed and every question gets answered thoroughly." },
  { name: "Linda J.", initial: "L", rating: 5, date: "Jul 2025", text: "NP Kaitlin is awesome. She is patient and very thorough. I came in worried and left with a clear understanding of my condition and a solid treatment plan." },
  { name: "Patricia I.", initial: "P", rating: 5, date: "Oct 2023", text: "Best Neurologist in the DFW area, period. Dr. Dike takes the time to actually listen and explains everything clearly. I feel genuinely cared for at every visit." },
  { name: "Royce J.", initial: "R", rating: 5, date: "Feb 2024", text: "Extremely thorough — Dr. Dike listened to all of my concerns and did not dismiss anything. He ran the right tests and we had a diagnosis quickly. Highly recommend." },
  { name: "Brian S.", initial: "B", rating: 5, date: "May 2022", text: "One of the most knowledgeable doctors I have ever seen. He explains my neurological condition in terms I actually understand, which makes managing it so much easier." },
  { name: "Stephanie S.", initial: "S", rating: 5, date: "Apr 2023", text: "By far the best Neurologist in the DFW area. After years of misdiagnoses elsewhere, Dr. Dike identified my condition on the first visit. Life-changing care." },
  { name: "Julissa V.", initial: "J", rating: 5, date: "Mar 2022", text: "Stroke patient here. The care I received from everyone at Affinity Neurocare is amazing. Dr. Dike walked me through my recovery step by step. Forever grateful." },
  { name: "Russell B.", initial: "R", rating: 5, date: "May 2023", text: "Quick and accurate diagnosis of small fiber neuropathy. Other practices had me running in circles for months. Dr. Dike identified it promptly and had me on the right treatment path." },
]

function Stars({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < count ? '#F59E0B' : '#D1D5DB' }}>&#9733;</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    if (headerRef.current) obs.observe(headerRef.current)
    return () => obs.disconnect()
  }, [])

  const doubled = [...REVIEWS, ...REVIEWS]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header fade-in" ref={headerRef}>
          <div className="section-label">Patient Stories</div>
          <h2 className="section-title">
            Trusted by <em>Thousands</em> Across DFW
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 16 }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#F59E0B', fontSize: '1.2rem' }}>&#9733;</span>)}
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)' }}>4.81</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>/ 5.0 &middot; 32 verified reviews</span>
          </div>
        </div>
      </div>

      <div className="testimonials-track-wrap" style={{ marginTop: 48 }}>
        <div className="testimonials-track">
          {doubled.map((r, i) => (
            <div key={i} className="testimonial-card">
              <Stars count={r.rating} />
              <p className="testimonial-text">&ldquo;{r.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{r.initial}</div>
                <div className="testimonial-meta">
                  <strong>{r.name}</strong>
                  <span>{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'

const WALLETS = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    color: '#F7931A',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="16" r="16" fill="#F7931A"/>
        <path d="M22.5 13.8c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.7-.4-.7 2.6-1.3-.3.7-2.7-1.7-.4-.7 2.7-1.1-.3-2.3-.6-.4 1.8s1.3.3 1.2.3c.7.2.8.6.8 1l-.8 3.3c.1 0 .2.1.3.1l-.3-.1-1.1 4.5c-.1.2-.3.5-.8.4 0 .1-1.2-.3-1.2-.3l-.8 2 2.2.5 1.2.3-.7 2.8 1.7.4.7-2.7 1.3.3-.7 2.7 1.7.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2-.04-3.2-1.5-3.9 1.1-.2 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2-3.9.9-5 .6l.9-3.5c1.1.3 4.6.8 4.1 2.9zm.5-5.3c-.5 1.8-3.3.9-4.3.7l.8-3.2c1 .2 4 .7 3.5 2.5z" fill="white"/>
      </svg>
    ),
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    color: '#627EEA',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="16" r="16" fill="#627EEA"/>
        <path d="M16 6l-.1.4v13l.1.1 6-3.5L16 6z" fill="white" fillOpacity=".8"/>
        <path d="M16 6L10 16l6 3.5V6z" fill="white"/>
        <path d="M16 21.1l-.1.1v4.8l.1.1 6-8.4-6 3.4z" fill="white" fillOpacity=".8"/>
        <path d="M16 26V21.1l-6-3.4 6 8.3z" fill="white"/>
        <path d="M16 19.5l6-3.5-6-2.7v6.2z" fill="white" fillOpacity=".4"/>
        <path d="M10 16l6 3.5v-6.2L10 16z" fill="white" fillOpacity=".6"/>
      </svg>
    ),
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    color: '#2775CA',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="16" cy="16" r="16" fill="#2775CA"/>
        <path d="M20 18.3c0-2-1.2-2.7-3.6-3-1.7-.2-2-.7-2-1.4 0-.7.5-1.2 1.6-1.2 1 0 1.5.3 1.8 1.1.1.2.3.3.5.3h1.1c.3 0 .5-.2.5-.5v-.1c-.3-1.4-1.4-2.4-2.9-2.6v-1.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v1.5c-1.8.3-2.9 1.5-2.9 3 0 1.9 1.2 2.6 3.6 2.9 1.6.3 2 .7 2 1.5 0 .8-.7 1.3-1.8 1.3-1.4 0-1.9-.6-2.1-1.4-.1-.2-.3-.4-.5-.4h-1.2c-.3 0-.5.2-.5.5v.1c.3 1.5 1.3 2.6 3.1 2.9v1.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-1.5c1.8-.3 3-1.5 3-3.1z" fill="white"/>
      </svg>
    ),
  },
]

export default function CryptoWallet() {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  function handleCopy(address, symbol) {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(symbol)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <section className="crypto-wallet" id="crypto-wallet">
      <div className="container">
        <div className="fade-in" ref={sectionRef}>
          <div className="section-label">Crypto Payments</div>
          <h2 className="section-title">
            Pay with <em>Cryptocurrency</em>
          </h2>
          <p className="section-desc" style={{ marginTop: 16, marginBottom: 40 }}>
            We accept cryptocurrency payments for your convenience. Send payment directly
            to one of our verified wallet addresses below. Please contact our office to
            confirm payment details before sending.
          </p>

          <div className="crypto-cards">
            {WALLETS.map(w => (
              <div key={w.symbol} className="crypto-card">
                <div className="crypto-card-header">
                  <div className="crypto-icon">{w.icon}</div>
                  <div>
                    <div className="crypto-name">{w.name}</div>
                    <div className="crypto-symbol">{w.symbol}</div>
                  </div>
                </div>

                <div className="crypto-address-label">Wallet Address</div>
                <div className="crypto-address-box">
                  <code className="crypto-address">{w.address}</code>
                  <button
                    className={`crypto-copy-btn${copied === w.symbol ? ' copied' : ''}`}
                    onClick={() => handleCopy(w.address, w.symbol)}
                    title="Copy address"
                    aria-label={`Copy ${w.name} address`}
                  >
                    {copied === w.symbol ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                    {copied === w.symbol ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="crypto-disclaimer">
            Always verify the wallet address before sending funds. Contact our office at{' '}
            <a href="tel:2144078580" style={{ color: 'var(--gold)', fontWeight: 600 }}>
              214-407-8580
            </a>{' '}
            to confirm payment receipt. Crypto payments are non-refundable.
          </p>
        </div>
      </div>
    </section>
  )
}

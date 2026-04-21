'use client';

export default function StripeThriveCart() {
  return (
    <section className="stripe-section" id="platilne-platforme">
      <div className="why-orb why-orb-1" />
      <div className="container">
        <div className="why-header">
          <span className="section-label">Plačilne platforme</span>
          <h2 className="section-title">Prodajate prek Stripe<br />ali ThriveCart?</h2>
          <p className="section-sub">Stripe in ThriveCart nista klasični spletni trgovini — sta specializirani platformi za sprejemanje plačil in prodajo digitalnih produktov. eHero podpira tudi ti dve integraciji.</p>
        </div>

        <div className="why-features">

          {/* Stripe */}
          <div className="why-feat">
            <div className="why-feat-num">💳</div>
            <div className="why-feat-body">
              <h3>Stripe — platforma za sprejemanje plačil</h3>
              <p>Stripe je globalna platforma za online plačila, ki jo pogosto uporabljajo SaaS podjetja, freelancerji in spletne storitve. eHero omogoča avtomatski prenos Stripe naročil v Minimax — skupaj s podatki o stranki in natančnimi zneski.</p>
            </div>
            <div className="why-feat-card">
              <div className="why-error-list">
                <div className="why-error-row why-error-ok">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Enkratna plačila (charges)
                </div>
                <div className="why-error-row why-error-ok">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Naročnine (subscriptions)
                </div>
                <div className="why-error-row why-error-ok">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Mednarodne stranke
                </div>
              </div>
              <span className="why-feat-caption">Podprte vrste Stripe transakcij</span>
            </div>
          </div>

          {/* ThriveCart */}
          <div className="why-feat why-feat-rev">
            <div className="why-feat-num">🛒</div>
            <div className="why-feat-card">
              <div className="why-feat-stat">
                <span className="why-stat-num">100%</span>
                <span className="why-stat-label">avtomatizacija</span>
              </div>
              <div className="why-feat-bar">
                <div className="why-feat-bar-fill" style={{ width: '100%', background: 'linear-gradient(90deg,var(--purple),var(--aqua))' }} />
              </div>
              <div className="why-flow-wrap" style={{ marginTop: '16px' }}>
                <div className="why-flow-step">
                  <div className="why-flow-icon" style={{ background: '#E0FAF8' }}>
                    <img src="/images/thrivecart-icon.png" alt="ThriveCart" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                  </div>
                  <span>ThriveCart</span>
                </div>
                <span className="why-flow-arrow">→</span>
                <div className="why-flow-step">
                  <div className="why-flow-icon" style={{ background: '#f5f0ff' }}>
                    <img src="/images/eHero-black.png" alt="eHero" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                  </div>
                  <span>eHero</span>
                </div>
                <span className="why-flow-arrow">→</span>
                <div className="why-flow-step">
                  <div className="why-flow-icon" style={{ background: '#EBF5FF' }}>
                    <img src="/images/minimax-icon.png" alt="Minimax" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                  </div>
                  <span>Minimax</span>
                </div>
              </div>
              <span className="why-feat-caption">Potek avtomatske sinhronizacije</span>
            </div>
            <div className="why-feat-body">
              <h3>ThriveCart — nakupni voziček za digitalne produkte</h3>
              <p>ThriveCart je priljubljena platforma za prodajo digitalnih tečajev, e-knjig in downloadov. Ker ne gre za klasično spletno trgovino, je integracija z Minimaxom še toliko bolj zapletena brez eHero. Mi poskrbimo, da vsako ThriveCart naročilo pristane v Minimaxu — brez vašega posredovanja.</p>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://app.ehero.si/registracija" className="btn-primary large">
            Začni brezplačno →
          </a>
        </div>
      </div>

      <style jsx>{`
        .stripe-section {
          background: var(--bg-soft);
          padding: 96px 5%;
          position: relative;
          overflow: hidden;
        }
        .why-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .why-orb-1 {
          width: 480px; height: 480px;
          top: -100px; left: -100px;
          background: rgba(144,94,230,0.08);
        }
        .container { position: relative; z-index: 1; }
        .why-header { margin-bottom: 4rem; }
        .why-features { display: flex; flex-direction: column; gap: 80px; }
        .why-feat {
          display: grid;
          grid-template-columns: 60px 1fr 420px;
          gap: 48px;
          align-items: center;
        }
        .why-feat-rev { grid-template-columns: 60px 420px 1fr; }
        @media (max-width: 900px) {
          .why-feat, .why-feat-rev { grid-template-columns: 1fr; gap: 24px; }
        }
        .why-feat-num { font-size: 2.5rem; line-height: 1; opacity: 0.4; }
        .why-feat-body h3 { font-size: 1.5rem; font-weight: 800; color: #111827; letter-spacing: -0.02em; margin-bottom: 1rem; }
        .why-feat-body p { font-size: 1rem; color: var(--text-400); line-height: 1.75; }
        .why-feat-card {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }
        .why-error-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 12px; }
        .why-error-row {
          display: flex; align-items: center; gap: 10px;
          font-size: .9rem; font-weight: 500; padding: 8px 12px; border-radius: 8px;
        }
        .why-error-ok { background: #ECFAF5; color: #0a7a65; }
        .why-feat-caption { font-size: .875rem; color: var(--text-300); font-weight: 500; }

        .why-feat-stat { margin-bottom: 8px; }
        .why-stat-num { font-size: 2.5rem; font-weight: 800; color: var(--purple); letter-spacing: -0.05em; display: block; line-height: 1; }
        .why-stat-label { font-size: .875rem; color: var(--text-400); }
        .why-feat-bar { height: 8px; background: var(--bg-soft); border-radius: 9999px; overflow: hidden; margin-bottom: 4px; }
        .why-feat-bar-fill { height: 100%; border-radius: 9999px; }

        .why-flow-wrap { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .why-flow-step { display: flex; flex-direction: column; align-items: center; gap: 6px; font-size: .8rem; font-weight: 600; color: var(--text-600); }
        .why-flow-icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 4px;
        }
        .why-flow-arrow { font-size: 1.25rem; color: var(--text-300); margin-bottom: 20px; }

        @media (max-width: 640px) {
          .stripe-section { padding: 60px 5%; }
        }
      `}</style>
    </section>
  );
}

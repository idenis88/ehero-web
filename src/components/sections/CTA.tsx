'use client';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <span className="section-label">Začnite danes</span>
          <h2>Preizkusite brezplačno.<br />Brez tveganja.</h2>
          <p>Povežite vašo Etsy, Shopify ali eBay trgovino z Minimax računovodskim programom in odkrijte, kako enostavno lahko poteka vaše poslovanje.</p>
          <div className="cta-actions">
            <a href="https://app.ehero.si/registracija" className="btn-primary large">
              Začni zdaj – brezplačno
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
            <a href="mailto:info@ehero.si" className="btn-outlined large">Pošlji sporočilo</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section { padding: 80px 5%; background: var(--bg); }
        .cta-inner {
          max-width: 760px; margin: 0 auto; text-align: center;
          background: var(--bg-soft); border: 1.5px solid var(--border-purple);
          border-radius: 24px; padding: 64px 48px;
          position: relative; overflow: hidden;
        }
        .cta-inner::before {
          content: ''; position: absolute; top: -80px; left: 50%;
          transform: translateX(-50%); width: 480px; height: 280px;
          background: radial-gradient(ellipse, rgba(144,94,230,.1), transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .cta-inner h2 {
          font-size: clamp(1.75rem, 3vw, 2.75rem); font-weight: 800;
          color: #111827; letter-spacing: -.03em; line-height: 1.15; margin-bottom: 1rem;
        }
        .cta-inner p {
          font-size: 1.0625rem; color: var(--text-400); line-height: 1.7;
          margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto;
        }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 640px) { .cta-inner { padding: 40px 24px; } }
      `}</style>
    </section>
  );
}

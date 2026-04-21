'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="orb orb-purple" style={{ width: 520, height: 520, top: -100, right: -100 }} />
      <div className="orb orb-aqua" style={{ width: 440, height: 440, bottom: -60, left: -80 }} />
      <div className="orb" style={{ width: 380, height: 380, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'rgba(144,94,230,0.05)', filter: 'blur(60px)' }} />

      <div className="hero-badge">
        <span className="badge-dot-wrap">
          <span className="badge-dot" />
          <span className="badge-dot-ring" />
        </span>
        Zaupajo nam prodajalci, ki želijo avtomatizirati poslovanje
      </div>

      <h1>Povežite <em>Minimax</em> z<br />vašo spletno trgovino</h1>

      <p className="hero-sub">
        Avtomatski prenos naročil iz Etsy, Shopify, WooCommerce, eBay, Stripe in ThriveCart neposredno v Minimax. Konec ročnega prepisovanja, konec napak — vi se posvetite rasti vašega posla.
      </p>

      <div className="hero-actions">
        <a href="https://app.ehero.si/registracija" className="hero-btn-primary">
          Začni brezplačno
          <svg className="hero-btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>
        <a href="#kako-deluje" className="hero-btn-ghost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>
          </svg>
          Kako deluje
        </a>
      </div>

      <div className="hero-perks">
        <div className="hero-perk">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Brezplačno do 10 naročil / mesec
        </div>
        <div className="hero-perk">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Nastavitev v 10–15 minutah
        </div>
      </div>

      <a href="https://apps.shopify.com/ehero-1" target="_blank" rel="noopener" style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '2rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          padding: '11px 22px 11px 16px', background: '#fff',
          border: '1.5px solid #D1D5DB', borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,.08)',
        }}>
          <img src="/images/shopify-icon.png" alt="Shopify" style={{ display: 'block', width: '32px', height: '32px', objectFit: 'contain' }} />
          <div style={{ textAlign: 'left', lineHeight: '1.25' }}>
            <div style={{ fontSize: '.68rem', fontWeight: 500, color: '#6B7280', letterSpacing: '.04em', textTransform: 'uppercase' }}>Na voljo tudi v</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', letterSpacing: '-.02em' }}>Shopify App Store</div>
          </div>
        </div>
      </a>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 5% 96px;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }
        .hero > *:not(.orb) { position: relative; z-index: 1; }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 0; }
        .orb-purple { background: rgba(144,94,230,0.18); }
        .orb-aqua { background: rgba(63,216,200,0.14); }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--purple-light); border: 1px solid var(--border-purple);
          border-radius: 9999px; padding: 6px 16px; font-size: 0.8125rem;
          font-weight: 600; color: var(--purple); margin-bottom: 1.5rem; letter-spacing: 0.01em;
        }
        .badge-dot-wrap { position: relative; width: 8px; height: 8px; flex-shrink: 0; margin: 3px; }
        .badge-dot { position: absolute; inset: 0; border-radius: 50%; background: var(--purple); }
        .badge-dot-ring {
          position: absolute; inset: -3px; border-radius: 50%;
          border: 1.5px solid var(--purple); opacity: 0;
          animation: ring-pulse 2.2s ease-in-out infinite;
        }
        @keyframes ring-pulse {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        h1 {
          font-size: 2rem; font-weight: 800; max-width: 58rem;
          color: #111827; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) { h1 { font-size: 3rem; } }
        @media (min-width: 1024px) { h1 { font-size: 3.75rem; } }
        h1 em { font-style: italic; color: var(--purple); }
        .hero-sub { font-size: 1.0625rem; color: var(--text-400); max-width: 44rem; line-height: 1.75; margin-bottom: 2rem; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-bottom: 1.75rem; }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 28px; background: var(--purple); color: #fff;
          border-radius: 11px; font-size: 1.0625rem; font-weight: 600;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.18s, transform 0.15s, box-shadow 0.18s;
          box-shadow: 0 4px 18px rgba(144,94,230,0.3);
        }
        .hero-btn-primary:hover { background: var(--purple-dark); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(144,94,230,0.4); }
        .hero-btn-arrow { transition: transform 0.2s; }
        .hero-btn-primary:hover .hero-btn-arrow { transform: translateX(4px); }
        .hero-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 15px 20px; background: transparent; color: var(--text-400);
          border: none; border-radius: 11px; font-size: 1.0625rem; font-weight: 500;
          cursor: pointer; transition: color 0.15s, background 0.15s; text-decoration: none;
        }
        .hero-btn-ghost:hover { color: var(--purple); background: rgba(144,94,230,0.06); }
        .hero-perks { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; font-size: 0.875rem; color: var(--text-400); }
        .hero-perk { display: flex; align-items: center; gap: 6px; }
        .hero-perk svg { color: var(--purple); }
        @media (max-width: 640px) {
          .hero { padding: 100px 5% 60px; }
          .hero-sub { font-size: 0.9375rem; }
          .hero-actions { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-ghost { width: 100%; max-width: 320px; justify-content: center; }
          .hero-badge { font-size: 0.75rem; padding: 5px 12px; }
        }
      `}</style>
    </section>
  );
}
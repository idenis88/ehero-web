'use client';

export default function WhyEhero() {
  return (
    <section className="zakaj-section">
      <div className="container">
        <div className="zakaj-wrap">
          <div className="zakaj-card">
            <span className="section-label">Naša zgodba</span>
            <h2>Zakaj smo ustvarili eHero</h2>
            <p>Ker tudi sami prodajamo na Shopify, Etsy in eBay — in smo se borili z isto težavo. <strong>Vsak mesec ročno prepisovati račune, usklajevati zaloge, loviti napake.</strong> Namesto tega smo ustvarili aplikacijo.</p>
            <p>Ko vaša trgovina zraste na 30+ naročil mesečno, postane to enostavno <strong>zelo zamudno in polno napak.</strong></p>
            <p>Namesto da bi ustvarjali, sedite pred zaslonom in tipkate. Ponavljajoča, tehnična opravila naj opravi eHero aplikacija — <strong>točno za to je bila ustvarjena.</strong></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .zakaj-section {
          background: #fff;
          padding: 72px 5% 24px;
        }
        .zakaj-wrap {
          max-width: 700px;
          margin: 0 auto;
        }
        .zakaj-card {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 24px;
          padding: 56px 56px 48px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05);
        }
        .zakaj-card h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.03em;
          line-height: 1.25;
          margin: 12px 0 28px;
        }
        .zakaj-card p {
          font-size: 1rem;
          color: var(--text-400);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }
        .zakaj-card p:last-child { margin-bottom: 0; }
        .zakaj-card strong { color: #111827; }

        @media (max-width: 640px) {
          .zakaj-section { padding: 40px 5% 16px; }
          .zakaj-card { padding: 28px 24px 24px; border-radius: 16px; }
          .zakaj-card h2 { font-size: 1.375rem; margin: 8px 0 20px; }
        }
      `}</style>
    </section>
  );
}

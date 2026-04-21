'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const PLANS = [
  {
    name: 'BREZPLAČEN',
    monthlyPrice: '0 €',
    yearlyPrice: '0 €',
    desc: 'Za testiranje in mikro trgovine',
    features: ['Do 10 naročil / mesec', '1 spletna trgovina', 'Do 3 nalepke / mesec', '0,10 € za vsako naslednje'],
    cta: 'Začni brezplačno',
    featured: false,
  },
  {
    name: 'ZAČETNI',
    monthlyPrice: '9,90 €',
    yearlyPrice: '8,25 €',
    desc: 'Za manjše trgovine',
    features: ['Do 100 naročil / mesec', '1 spletna trgovina', 'Neomejeno nalepk', '0,05 € za vsako naslednje'],
    cta: 'Preizkusi brezplačno',
    featured: false,
  },
  {
    name: 'STARTUP',
    monthlyPrice: '19,90 €',
    yearlyPrice: '15,00 €',
    desc: 'Za rastoče trgovine',
    features: ['Do 500 naročil / mesec', 'Do 3 spletne trgovine', 'Neomejeno nalepk', '0,03 € za vsako naslednje'],
    cta: 'Preizkusi brezplačno',
    featured: true,
  },
  {
    name: 'PROFESIONALNI',
    monthlyPrice: '34,90 €',
    yearlyPrice: '20,00 €',
    desc: 'Za večje trgovine',
    features: ['Do 2.000 naročil / mesec', 'Do 5 spletnih trgovin', 'Neomejeno nalepk', '0,02 € za vsako naslednje'],
    cta: 'Preizkusi brezplačno',
    featured: false,
  },
  {
    name: 'HERO',
    monthlyPrice: '69,90 €',
    yearlyPrice: '30,00 €',
    desc: 'Za velike trgovine',
    features: ['Do 5.000 naročil / mesec', 'Neomejeno trgovin', 'Neomejeno nalepk', '0,02 € za vsako naslednje'],
    cta: 'Preizkusi brezplačno',
    featured: false,
  },
];

const CHECK = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [pos, setPos] = useState(0);
  const [badgeLeft, setBadgeLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);

  const VIS = 3;
  const MAX = PLANS.length - VIS;
  const FEATURED_IDX = 2;

  const scroll = (dir: number) => setPos(p => Math.max(0, Math.min(MAX, p + dir)));

  const updateBadge = useCallback(() => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.offsetWidth / VIS;
    const featLeft = scrollRef.current.offsetLeft + (FEATURED_IDX - pos) * w;
    setBadgeLeft(featLeft + w / 2);
  }, [pos]);

  useEffect(() => {
    updateBadge();
    window.addEventListener('resize', updateBadge);
    return () => window.removeEventListener('resize', updateBadge);
  }, [updateBadge]);

  const featVisible = pos <= FEATURED_IDX && FEATURED_IDX < pos + VIS;

  return (
    <section className="pricing" id="cene">
      <div className="container">
        <div className="pricing-header">
          <span className="section-label">Cenik</span>
          <h2 className="section-title">Izberite paket</h2>
          <p className="section-sub" style={{ fontSize: '.95rem', color: 'var(--text-300)' }}>
            Navedene cene so brez DDV. Izberite paket glede na vaše potrebe.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <div className="billing-toggle-wrap">
              <span className="billing-label" style={{ color: !isYearly ? '#111827' : '#9CA3AF', fontWeight: !isYearly ? 600 : 500 }}>Mesečno</span>
              <button className="billing-btn" onClick={() => setIsYearly(v => !v)} style={{ background: isYearly ? 'var(--purple)' : '#E5E7EB' }}>
                <div className="billing-knob" style={{ transform: isYearly ? 'translateX(20px)' : 'translateX(0)' }} />
              </button>
              <span className="billing-label" style={{ color: isYearly ? '#111827' : '#9CA3AF', fontWeight: isYearly ? 600 : 500 }}>Letno</span>
              <span className="billing-badge">Prihrani do 40%</span>
            </div>
          </div>
        </div>

        <div className="plans-wrap">
          <button className="plan-nav-btn plan-nav-prev" onClick={() => scroll(-1)} style={{ opacity: pos === 0 ? 0.35 : 1 }}>&#8249;</button>
          <button className="plan-nav-btn plan-nav-next" onClick={() => scroll(1)} style={{ opacity: pos >= MAX ? 0.35 : 1 }}>&#8250;</button>

          {featVisible && (
            <div className="popular-badge" style={{ left: badgeLeft, transform: 'translateX(-50%)' }}>
              ⚡ Najpopularnejši
            </div>
          )}

          <div className="plans-scroll" ref={scrollRef}>
            <div
              className="plans-track"
              style={{ transform: `translateX(-${pos * (100 / VIS)}%)` }}
              onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
              onTouchEnd={e => {
                const diff = touchStart.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) scroll(diff > 0 ? 1 : -1);
              }}
            >
              {PLANS.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`plan-card${plan.featured ? ' plan-featured' : ''}`}
                  style={{
                    borderRadius: i === 0 ? '18px 0 0 18px' : i === PLANS.length - 1 ? '0 18px 18px 0' : '0',
                  }}
                >
                  <div className="plan-name">{plan.name}</div>
                  <div style={{ minHeight: '56px' }}>
                    <div className="plan-price">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span>/ mes.</span>
                    </div>
                  </div>
                  <p className="plan-desc">{plan.desc}</p>
                  <hr className="plan-divider" />
                  <ul className="plan-features">
                    {plan.features.map(f => (
                      <li key={f} className="plan-feature">
                        <div className="plan-check">{CHECK}</div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://app.ehero.si/registracija" target="_blank" className={`plan-btn${plan.featured ? ' plan-btn-white' : ' plan-btn-outline'}`}>
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="plan-dots">
            {[0, 1, 2].map(i => (
              <button key={i} className={`pdot${pos === i ? ' active' : ''}`} onClick={() => setPos(i)} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing { background: var(--bg); padding: 96px 5%; }
        .pricing-header { text-align: center; margin-bottom: 2rem; }
        .billing-toggle-wrap {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; border: 1px solid var(--border);
          border-radius: 9999px; padding: 6px 6px 6px 18px;
          box-shadow: 0 1px 4px rgba(0,0,0,.06);
        }
        .billing-label { font-size: .9375rem; }
        .billing-btn {
          position: relative; width: 44px; height: 24px;
          border: none; border-radius: 9999px; cursor: pointer;
          transition: background .22s; flex-shrink: 0; padding: 0;
        }
        .billing-knob {
          position: absolute; left: 3px; top: 3px;
          width: 18px; height: 18px; background: #fff; border-radius: 50%;
          box-shadow: 0 1px 4px rgba(0,0,0,.18); transition: transform .22s;
        }
        .billing-badge {
          display: inline-flex; align-items: center;
          padding: 3px 12px; background: #ECFDF5;
          border-radius: 9999px; font-size: .72rem; font-weight: 700; color: #065f46;
        }
        .plans-wrap { position: relative; margin-top: 48px; }
        .plan-nav-btn {
          position: absolute; top: 50%; transform: translateY(-50%);
          z-index: 10; width: 40px; height: 40px;
          border-radius: 50%; border: 1.5px solid var(--border);
          background: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; color: var(--text-400);
          box-shadow: 0 2px 8px rgba(0,0,0,.07);
        }
        .plan-nav-prev { left: -20px; }
        .plan-nav-next { right: -20px; }
        .popular-badge {
          position: absolute; z-index: 30; top: -13px;
          display: inline-flex; align-items: center; gap: 4px;
          background: var(--purple-dark); color: #fff;
          font-size: .8rem; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 5px 18px; border-radius: 9999px;
          white-space: nowrap; border: 2px solid #fff;
          box-shadow: 0 2px 8px rgba(144,94,230,.3);
          pointer-events: none;
          transition: left .38s cubic-bezier(.4,0,.2,1);
        }
        .plans-scroll {
          border-radius: 20px; border: 1.5px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,.07);
          overflow: hidden; margin-top: 20px;
        }
        .plans-track {
          display: flex; align-items: stretch;
          transition: margin-left .38s cubic-bezier(.4,0,.2,1);
        }
        .plan-card {
          flex: 0 0 33.333%; min-width: 0; background: #fff;
          border-right: 1px solid #F3F4F6;
          padding: 2rem 1.75rem;
          display: flex; flex-direction: column;
        }
        .plan-card:last-child { border-right: none; }
        .plan-featured { background: var(--purple); }
        .plan-name {
          font-size: .8rem; font-weight: 700; margin-bottom: .5rem;
          color: #9CA3AF; letter-spacing: .08em; text-transform: uppercase;
        }
        .plan-featured .plan-name { color: rgba(255,255,255,.7); }
        .plan-price {
          display: flex; align-items: baseline; gap: 4px;
          font-size: 2.25rem; font-weight: 800;
          letter-spacing: -.05em; line-height: 1; margin-bottom: 2px; color: #111827;
        }
        .plan-price span { font-size: .8rem; font-weight: 400; color: var(--text-300); }
        .plan-featured .plan-price { color: #fff; }
        .plan-featured .plan-price span { color: rgba(255,255,255,.6); }
        .plan-desc { font-size: .95rem; color: #9CA3AF; line-height: 1.5; min-height: 40px; margin-bottom: 1rem; }
        .plan-featured .plan-desc { color: rgba(255,255,255,.7); }
        .plan-divider { border: none; border-top: 1px solid #F3F4F6; margin: 1rem 0; }
        .plan-featured .plan-divider { border-color: rgba(255,255,255,.15); }
        .plan-features { flex: 1; display: flex; flex-direction: column; gap: 8px; margin-bottom: 1.25rem; list-style: none; }
        .plan-feature { display: flex; align-items: center; gap: 10px; font-size: .9375rem; color: var(--text-600); line-height: 1.4; }
        .plan-featured .plan-feature { color: rgba(255,255,255,.92); }
        .plan-check {
          flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%;
          background: rgba(144,94,230,.1);
          display: flex; align-items: center; justify-content: center; color: var(--purple);
        }
        .plan-featured .plan-check { background: rgba(255,255,255,.2); color: #fff; }
        .plan-btn {
          display: block; text-align: center; padding: 13px 16px; border-radius: 10px;
          font-size: 1rem; font-weight: 600; transition: all .18s; cursor: pointer;
          text-decoration: none; flex-shrink: 0;
        }
        .plan-btn-outline { background: transparent; color: var(--purple); border: 1.5px solid var(--border-purple); }
        .plan-btn-outline:hover { background: var(--purple-light); border-color: var(--purple); }
        .plan-btn-white { background: #fff; color: var(--purple); border: 1.5px solid rgba(255,255,255,.5); font-weight: 700; box-shadow: 0 2px 10px rgba(0,0,0,.12); }
        .plan-btn-white:hover { background: #f5f0ff; }
        .plan-dots { display: flex; justify-content: center; gap: 7px; margin-top: 20px; }
        .pdot { width: 8px; height: 8px; border-radius: 50%; border: none; background: #D1D5DB; cursor: pointer; padding: 0; transition: all .2s; }
        .pdot.active { background: var(--purple); width: 24px; border-radius: 4px; }
        @media (max-width: 640px) {
          .pricing { padding: 60px 5%; }
          .plan-nav-btn { display: none; }
          .popular-badge { display: none; }
        }
      `}</style>
    </section>
  );
}

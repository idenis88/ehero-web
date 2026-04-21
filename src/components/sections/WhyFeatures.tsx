'use client';

import { useEffect, useRef } from 'react';

export default function WhyFeatures() {
  const barBeforeRef = useRef<HTMLDivElement>(null);
  const barAfterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => { if (barBeforeRef.current) barBeforeRef.current.style.width = '100%'; }, 200);
          setTimeout(() => { if (barAfterRef.current) barAfterRef.current.style.width = '6%'; }, 400);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const section = document.getElementById('prednosti');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why" id="prednosti">
      <div className="why-orb why-orb-1" />
      <div className="why-orb why-orb-2" />
      <div className="container">
        <div className="why-header">
          <span className="section-label">Zakaj eHero</span>
          <h2 className="section-title">Vse kar potrebujete za<br />brezhibno računovodstvo</h2>
          <p className="section-sub">Pozabite na ročno prepisovanje, neusklajene zaloge in zamujene račune. Ponavljajoča, tehnična opravila naj opravi eHero — točno za to je bila aplikacija ustvarjena.</p>
        </div>

        <div className="why-features">

          {/* Feature 1 */}
          <div className="why-feat">
            <div className="why-feat-num">01</div>
            <div className="why-feat-body">
              <h3>Samodejni prenos naročil v Minimax</h3>
              <p>Ob vsakem naročilu se podatki o kupcu, izdelkih, cenah, poštnini in popustih samodejno prenesejo v Minimax. Račun se pripravi sam — vi ga potrdite ali pa vklopite samodejno izdajo.</p>
            </div>
            <div className="why-feat-card">
              <div className="why-feat-time">
                <div className="why-feat-time-row">
                  <span className="why-time-label" style={{ color: '#b91c1c' }}>Prej</span>
                  <div className="why-time-bar-wrap">
                    <div className="why-time-bar" style={{ background: '#FEF2F2' }}>
                      <div ref={barBeforeRef} className="why-time-fill" style={{ width: '0%', background: '#fca5a5', transition: 'width 1s ease' }} />
                    </div>
                  </div>
                  <span className="why-time-val" style={{ color: '#b91c1c' }}>5 min</span>
                </div>
                <div className="why-feat-time-row">
                  <span className="why-time-label" style={{ color: '#0a7a65' }}>Sedaj</span>
                  <div className="why-time-bar-wrap">
                    <div className="why-time-bar" style={{ background: '#ECFAF5' }}>
                      <div ref={barAfterRef} className="why-time-fill" style={{ width: '0%', background: '#6ee7b7', transition: 'width 1s ease 0.3s' }} />
                    </div>
                  </div>
                  <span className="why-time-val" style={{ color: '#0a7a65' }}>5 sek</span>
                </div>
              </div>
              <span className="why-feat-caption">Čas obdelave enega naročila</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="why-feat why-feat-rev">
            <div className="why-feat-num">02</div>
            <div className="why-feat-card">
              <div className="why-error-list">
                <div className="why-error-row why-error-bad">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  Napačen naslov stranke
                </div>
                <div className="why-error-row why-error-bad">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  Pozabljeno naročilo
                </div>
                <div className="why-error-row why-error-bad">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  Napačna cena poštnine
                </div>
                <div className="why-error-row why-error-ok">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Z eHero: brez ročnih napak
                </div>
              </div>
              <span className="why-feat-caption">Tipične napake pri ročnem vnosu</span>
            </div>
            <div className="why-feat-body">
              <h3>Brez ročnega prepisovanja podatkov</h3>
              <p>Naslov, cena, poštnina in popusti se prenesejo neposredno — brez tipkanja in brez napak, ki nastanejo pri ročnem vnosu.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="why-feat" style={{ alignItems: 'flex-start' }}>
            <div className="why-feat-num">03</div>
            <div className="why-feat-body">
              <h3>Sinhronizacija zalog med vsemi platformami</h3>
              <p>Naša aplikacija poleg prenosa naročil omogoča tudi napredno sinhronizacijo izdelkov in zalog med vašo spletno trgovino in programom Minimax. Nov izdelek, ki ga dodate v Minimax, lahko z enim klikom prenesete tudi v Shopify, Etsy ali WooCommerce — hitro, enostavno in brez ročnega vnosa.</p>
              <ul className="inv-benefit-list" style={{ marginTop: '1.5rem' }}>
                <li className="inv-benefit-item">
                  <div className="inv-benefit-icon" style={{ background: '#ECFAF5' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a7a65" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                  </div>
                  <div><strong>Vedno točen vpogled v stanje zalog</strong><p>Usklajene zaloge v realnem času — brez ročnega usklajevanja.</p></div>
                </li>
                <li className="inv-benefit-item">
                  <div className="inv-benefit-icon" style={{ background: '#EEF4FF' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  </div>
                  <div><strong>Hitrejše usklajevanje z računovodstvom</strong><p>Minimax vedno odraža dejansko stanje — brez zamud in razlik.</p></div>
                </li>
                <li className="inv-benefit-item">
                  <div className="inv-benefit-icon" style={{ background: '#FFF8EC' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
                  </div>
                  <div><strong>Manj možnosti za napake ali pozabljene posodobitve</strong><p>Aplikacija poskrbi, da so vse platforme vedno usklajene.</p></div>
                </li>
              </ul>
            </div>
            <div className="why-feat-card">
              <div style={{ background: '#fff', border: '1.5px solid var(--border)', borderRadius: '20px', padding: '28px 24px', boxShadow: '0 4px 24px rgba(0,0,0,.06)' }}>
                <div style={{ fontSize: '.875rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-300)', marginBottom: '20px' }}>Primer sinhronizacije zalog</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'var(--bg-soft)', borderRadius: '10px', border: '1px solid var(--border-purple)' }}>
                  <img src="/images/minimax-icon.png" alt="Minimax" width="28" height="28" style={{ display: 'block', width: '28px', height: '28px', objectFit: 'contain', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '.9rem', fontWeight: 700, color: '#111827' }}>Nov izdelek v Minimaxu</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--text-300)' }}>Zaloga: 50 kosov</div>
                  </div>
                  <span style={{ fontSize: '.76rem', fontWeight: 600, background: 'var(--purple-light)', color: 'var(--purple)', padding: '3px 8px', borderRadius: '20px' }}>Izvor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '36px', position: 'relative' }}>
                  <div style={{ width: '1.5px', height: '100%', background: 'linear-gradient(to bottom, rgba(144,94,230,.4), rgba(34,216,143,.4))' }} />
                  <div style={{ position: 'absolute', background: '#fff', padding: '2px 8px', borderRadius: '20px', border: '1px solid var(--border)', fontSize: '.74rem', fontWeight: 600, color: 'var(--text-400)' }}>eHero sinhronizira</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    { name: 'Shopify', icon: '/images/shopify-icon.png' },
                    { name: 'Etsy', icon: '/images/etsy-icon.png' },
                    { name: 'WooCommerce', icon: '/images/woo-icon.png' },
                  ].map(p => (
                    <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#fff', borderRadius: '10px', border: '1px solid var(--border)' }}>
                      <img src={p.icon} alt={p.name} width="24" height="24" style={{ display: 'block', width: '24px', height: '24px', objectFit: 'contain', flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '.875rem', fontWeight: 600, color: '#111827' }}>{p.name}</div>
                        <div style={{ fontSize: '.78rem', color: '#22d88f', fontWeight: 600 }}>✓ posodobljeno</div>
                      </div>
                      <span style={{ fontSize: '.84rem', fontWeight: 700, color: '#374151' }}>50 kosov</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22d88f', boxShadow: '0 0 6px rgba(34,216,143,.5)', flexShrink: 0 }} />
                  <span style={{ fontSize: '.8rem', fontWeight: 600, color: '#374151' }}>Vse platforme sinhronizirane · v realnem času</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .why {
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
        .why-orb-2 {
          width: 400px; height: 400px;
          bottom: 0; right: -80px;
          background: rgba(63,216,200,0.08);
        }
        .why-header {
            margin-bottom: 4rem;
            position: relative;
            z-index: 1;
        }
        .why-features {
          display: flex;
          flex-direction: column;
          gap: 80px;
          position: relative;
          z-index: 1;
        }
        .why-feat {
          display: grid;
          grid-template-columns: 60px 1fr 420px;
          gap: 48px;
          align-items: center;
        }
        .why-feat-rev {
          grid-template-columns: 60px 420px 1fr;
        }
        @media (max-width: 900px) {
          .why-feat, .why-feat-rev {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        .why-feat-num {
          font-size: 3rem;
          font-weight: 800;
          color: var(--purple-light);
          letter-spacing: -0.05em;
          line-height: 1;
          user-select: none;
        }
        .why-feat-body h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .why-feat-body p {
          font-size: 1rem;
          color: var(--text-400);
          line-height: 1.75;
        }
        .why-feat-card {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }

        /* Time bars */
        .why-feat-time { display: flex; flex-direction: column; gap: 14px; margin-bottom: 12px; }
        .why-feat-time-row { display: flex; align-items: center; gap: 10px; }
        .why-time-label { font-size: .8125rem; font-weight: 600; min-width: 36px; }
        .why-time-bar-wrap { flex: 1; }
        .why-time-bar { height: 8px; border-radius: 9999px; overflow: hidden; }
        .why-time-fill { height: 100%; border-radius: 9999px; }
        .why-time-val { font-size: .8125rem; font-weight: 700; min-width: 36px; text-align: right; }
        .why-feat-caption { font-size: .75rem; color: var(--text-300); font-weight: 500; }

        /* Error list */
        .why-error-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 12px; }
        .why-error-row {
          display: flex; align-items: center; gap: 10px;
          font-size: .9rem; font-weight: 500; padding: 8px 12px;
          border-radius: 8px;
        }
        .why-error-bad { background: #FEF2F2; color: #b91c1c; }
        .why-error-ok { background: #ECFAF5; color: #0a7a65; }

        /* Inventory benefits */
        .inv-benefit-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
        .inv-benefit-item { display: flex; align-items: flex-start; gap: 14px; }
        .inv-benefit-icon {
          width: 36px; height: 36px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .inv-benefit-item strong { font-size: .9375rem; font-weight: 700; color: #111827; display: block; margin-bottom: 2px; }
        .inv-benefit-item p { font-size: .875rem; color: var(--text-400); margin: 0; }

        @media (max-width: 640px) {
          .why { padding: 60px 5%; }
          .why-feat-num { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}

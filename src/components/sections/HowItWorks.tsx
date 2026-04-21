'use client';

import { useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '1',
    title: 'Povežete trgovino',
    desc: 'Etsy, eBay, Shopify ali WooCommerce povežete z eHero z le enim klikom.',
  },
  {
    num: '2',
    title: 'Nastavite Minimax',
    desc: 'Prek jasnih navodil povežete Minimax račun z aplikacijo.',
  },
  {
    num: '3',
    title: 'Naročila in zaloge se uskladijo',
    desc: 'Naročila se samodejno prenesejo, zaloge pa se ob tem avtomatsko posodobijo.',
  },
  {
    num: '4',
    title: 'Računi so izdani',
    desc: 'Računi se pripravijo v Minimaxu — vi pa izberete, ali jih potrdite ročno ali pa se samodejno potrdijo in pošljejo.',
  },
];

const CARDS = [
  { name: 'Minimax', icon: '/images/minimax-icon.png', receives: true, pill: '↑ Prejema naročila', pillColor: '#1d9e75' },
  { name: 'Shopify', icon: '/images/shopify-icon.png', receives: false, pill: '← Pošilja naročila', pillColor: '#905EE6' },
  { name: 'eBay', icon: '/images/ebay-icon.png', receives: false, pill: '← Pošilja naročila', pillColor: '#905EE6' },
  { name: 'ThriveCart', icon: '/images/thrivecart-icon.png', receives: false, pill: '↑ Pošilja naročila', pillColor: '#905EE6' },
  { name: 'WooCommerce', icon: '/images/woo-icon.png', receives: false, pill: '↑ Pošilja naročila', pillColor: '#905EE6' },
  { name: 'Etsy', icon: '/images/etsy-icon.png', receives: false, pill: 'Pošilja naročila →', pillColor: '#905EE6' },
  { name: 'Stripe', icon: '/images/stripe-icon.png', receives: false, pill: 'Pošilja naročila →', pillColor: '#905EE6' },
];

const BASE_ANGLES = [270, 321, 13, 64, 116, 167, 218];

export default function HowItWorks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext('2d')!;
    let W: number, H: number, cx: number, cy: number, R: number;

    const particles = CARDS.map((_, i) => ({
      t: i / CARDS.length,
      speed: 0.0028 + i * 0.0002,
    }));

    function resize() {
      const rect = wrap!.getBoundingClientRect();
      W = rect.width; H = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = W * dpr; canvas!.height = H * dpr;
      canvas!.style.width = W + 'px'; canvas!.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; cy = H / 2;
      R = Math.min(W, H) * 0.385;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rad = BASE_ANGLES[i] * Math.PI / 180;
        card.style.left = (cx + R * Math.cos(rad)) + 'px';
        card.style.top = (cy + R * Math.sin(rad)) + 'px';
      });
    }

    function getCenter(card: HTMLDivElement) {
      const cr = card.getBoundingClientRect();
      const wr = wrap!.getBoundingClientRect();
      return { x: cr.left - wr.left + cr.width / 2, y: cr.top - wr.top + cr.height / 2 };
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const now = performance.now() / 1000;

      [0.35, 0.6, 0.85].forEach((maxR, i) => {
        const phase = ((now * 0.35 + i * 0.7) % 1);
        ctx.beginPath();
        ctx.arc(cx, cy, 50 + phase * maxR * 160, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(144,94,230,${(1 - phase) * 0.15})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const nc = getCenter(card);
        const recv = CARDS[i].receives;
        const dx = cx - nc.x; const dy = cy - nc.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / dist; const uy = dy / dist;
        const cr = card.getBoundingClientRect();
        const hw = cr.width / 2; const hh = cr.height / 2;
        const eOff = Math.abs(ux) > Math.abs(uy) ? hw / Math.abs(ux) : hh / Math.abs(uy);
        const sOff = Math.min(eOff + 8, dist * 0.44);

        let x1: number, y1: number, x2: number, y2: number;
        if (recv) {
          x1 = cx - ux * 52; y1 = cy - uy * 52;
          x2 = nc.x + ux * (sOff - 4); y2 = nc.y + uy * (sOff - 4);
        } else {
          x1 = nc.x + ux * sOff; y1 = nc.y + uy * sOff;
          x2 = cx - ux * 52; y2 = cy - uy * 52;
        }

        ctx.beginPath();
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.strokeStyle = recv ? 'rgba(29,158,117,0.28)' : 'rgba(144,94,230,0.28)';
        ctx.lineWidth = recv ? 2.2 : 1.8;
        ctx.setLineDash([]);
        ctx.stroke();

        const aSize = 7;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - ux * aSize - uy * aSize * 0.45, y2 - uy * aSize + ux * aSize * 0.45);
        ctx.lineTo(x2 - ux * aSize + uy * aSize * 0.45, y2 - uy * aSize - ux * aSize * 0.45);
        ctx.closePath();
        ctx.fillStyle = recv ? 'rgba(29,158,117,0.8)' : 'rgba(144,94,230,0.8)';
        ctx.fill();

        const p = particles[i];
        p.t = (p.t + p.speed) % 1;
        const px = x1 + (x2 - x1) * p.t;
        const py = y1 + (y2 - y1) * p.t;
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = recv ? 'rgba(29,158,117,0.92)' : 'rgba(144,94,230,0.92)';
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="how" id="kako-deluje">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span className="section-label">Postopek</span>
          <h2 className="section-title">Od povezave do avtomatizacije<br />v nekaj minutah</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Deluje v brskalniku, brez kakršnegakoli nameščanja. Nastavitev vzame le 10–15 minut.
          </p>
        </div>

        <div className="how-steps">
          {STEPS.map((step, i) => (
            <div key={step.num} className="how-step">
              <div className="how-step-top">
                <div className="how-step-line" style={{ visibility: i === 0 ? 'hidden' : 'visible' }} />
                <div className="how-step-circle">{step.num}</div>
                <div className="how-step-line" style={{ visibility: i === STEPS.length - 1 ? 'hidden' : 'visible' }} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', margin: '56px 0 24px' }}>
          <p className="section-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
            eHero deluje kot most med vašimi prodajnimi kanali in Minimaxom. eHero poskrbi, da se vsa naročila prenesejo samodejno.
          </p>
        </div>

        <div ref={wrapRef} className="hub-wrap">
          <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
          <div className="hub-center">
            <img src="/images/eHero-black.png" alt="eHero" style={{ width: '66px', height: '66px', objectFit: 'contain', borderRadius: '10px' }} />
          </div>
          {CARDS.map((card, i) => (
            <div
              key={card.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="hub-card"
              style={{ borderColor: card.receives ? 'rgba(29,158,117,0.5)' : undefined }}
            >
              <img src={card.icon} alt={card.name} style={{ width: '32px', height: '32px', objectFit: 'contain', display: 'block' }} />
              <span className="hub-card-name">{card.name}</span>
              <span className="hub-card-pill" style={{ color: card.pillColor }}>{card.pill}</span>
            </div>
          ))}
        </div>

        <div className="hub-stats">
          <div className="hub-stat"><div className="hub-stat-num">6+</div><div className="hub-stat-label">Podprtih platform</div></div>
          <div className="hub-stat-divider" />
          <div className="hub-stat"><div className="hub-stat-num">1</div><div className="hub-stat-label">Nastavitev</div></div>
          <div className="hub-stat-divider" />
          <div className="hub-stat"><div className="hub-stat-num">100%</div><div className="hub-stat-label">Avtomatski prenos</div></div>
          <div className="hub-stat-divider" />
          <div className="hub-stat"><div className="hub-stat-num">0</div><div className="hub-stat-label">Ročnih napak</div></div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://app.ehero.si/registracija" className="btn-primary large">
            Začni zdaj – brezplačno
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .how { background: var(--bg); padding: 96px 5%; }
        .how-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          margin: 48px 0;
        }
        @media (max-width: 900px) { .how-steps { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .how-steps { grid-template-columns: 1fr; } }
        .how-step { display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; }
        .how-step-top { display: flex; align-items: center; width: 100%; }
        .how-step-circle {
          width: 48px; height: 48px; border-radius: 50%;
          border: 1.5px solid var(--border-purple);
          background: var(--purple-light); color: var(--purple);
          font-size: 1.125rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          cursor: pointer;
        }
        .how-step-circle:hover { background: var(--purple); color: #fff; border-color: var(--purple); }
        .how-step-line { flex: 1; height: 1px; background: var(--border); }
        .how-step h3 { font-size: 1.0625rem; font-weight: 700; color: #111827; margin: 0; text-align: center; }
        .how-step p { font-size: 0.9375rem; color: var(--text-400); line-height: 1.65; margin: 0; text-align: center; max-width: 220px; }

        .hub-wrap {
          position: relative; width: 600px; height: 600px;
          margin: 0 auto 32px; max-width: 100%; overflow: hidden;
        }
        .hub-center {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100px; height: 100px; border-radius: 50%;
          background: #fff; border: 2px solid rgba(144,94,230,.4);
          box-shadow: 0 0 0 10px rgba(144,94,230,.06), 0 6px 24px rgba(144,94,230,.15);
          display: flex; align-items: center; justify-content: center; z-index: 10;
        }
        .hub-card {
          position: absolute; transform: translate(-50%, -50%);
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          padding: 10px 14px; background: #fff;
          border: 1.5px solid var(--border); border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,.07); z-index: 10;
          white-space: nowrap; min-width: 90px;
        }
        .hub-card-name { font-size: 0.8rem; font-weight: 700; color: #111827; }
        .hub-card-pill { font-size: 0.68rem; font-weight: 600; }

        .hub-stats {
          display: flex; align-items: center; justify-content: center;
          background: var(--bg-soft); border: 1px solid var(--border);
          border-radius: 16px; padding: 24px 32px; flex-wrap: wrap;
        }
        .hub-stat { text-align: center; padding: 0 32px; }
        .hub-stat-num { font-size: 2rem; font-weight: 800; color: var(--purple); letter-spacing: -0.03em; line-height: 1; }
        .hub-stat-label { font-size: 0.8125rem; color: var(--text-400); margin-top: 4px; }
        .hub-stat-divider { width: 1px; height: 40px; background: var(--border); }

        @media (max-width: 768px) {
          .hub-wrap { display: none; }
          .hub-stats { padding: 20px 16px; }
          .hub-stat { padding: 0 16px; }
          .hub-stat-divider { display: none; }
        }
        @media (max-width: 640px) {
          .how { padding: 60px 5%; }
        }
      `}</style>
    </section>
  );
}

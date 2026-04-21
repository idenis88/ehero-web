'use client';

import { useState, useEffect } from 'react';

const SLIDES = [
  {
    initials: 'TP',
    quote: '"Sedaj namesto mene to naredi aplikacija, ki deluje brezhibno."',
    body: 'Vsak mesec sem izgubil ure za izdajanje računov. Nastavitev je bila enostavna, in od takrat vse teče samo od sebe.',
    name: 'Tomaž Petek',
    company: 'Etsy trgovina z lesenimi izdelki',
  },
  {
    initials: 'AC',
    quote: '"Ko dobim naročilo, me podatki že čakajo v Minimaxu."',
    body: 'Aplikacija eHero je super. Vse kar moram storiti je, da račun izdam, izdelam in pošljem. Všeč mi je, da se izognem morebitnim napakam pri prepisovanju.',
    name: 'Anita Česnik Mažgon',
    company: 'All little Rockstars',
  },
  {
    initials: 'ŽM',
    quote: '"Aplikacija mi prihrani več kot 10 ur na mesec."',
    body: 'Končno več časa za ustvarjanje! Toplo priporočam vsem, ki prodajajo na Etsy, Shopify ali eBay in uporabljajo Minimax za računovodstvo.',
    name: 'Žiga Mlakar',
    company: 'Print-on-demand trgovina',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent(c => (c + 1) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-container">
        <div className="testi-heading">
          <span className="section-label">Mnenja</span>
          <h2 className="section-title">Kar pravijo naši<br />uporabniki</h2>
        </div>

        <div className="testi-slider">
          <button className="testi-arrow testi-prev" onClick={prev} aria-label="Prejšnji">‹</button>
          <button className="testi-arrow testi-next" onClick={next} aria-label="Naslednji">›</button>

          <div className="testi-slide active" key={current}>
            <div className="testi-avatar-fallback">{slide.initials}</div>
            <p className="testi-quote-title">{slide.quote}</p>
            <p className="testi-quote-body">{slide.body}</p>
            <div className="testi-author-name">{slide.name}</div>
            <div className="testi-author-company">{slide.company}</div>
          </div>
        </div>

        <div className="testi-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          background: var(--bg-soft);
          padding: 96px 5%;
          overflow: hidden;
        }
        .testi-container {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .testi-heading { margin-bottom: 52px; }
        .testi-slider {
          position: relative;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .testi-slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: testi-in 360ms ease both;
        }
        @keyframes testi-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: none; }
        }
        .testi-avatar-fallback {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--aqua));
          display: flex; align-items: center; justify-content: center;
          font-size: 1.375rem; font-weight: 700; color: #fff;
          border: 4px solid #fff;
          box-shadow: 0 4px 18px rgba(0,0,0,.1);
          margin-bottom: 32px;
        }
        .testi-quote-title {
          font-size: clamp(1.375rem, 3vw, 2rem);
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .testi-quote-body {
          font-size: 1rem;
          color: var(--text-400);
          line-height: 1.75;
          max-width: 580px;
          margin: 0 auto 24px;
        }
        .testi-author-name {
          font-size: .9375rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }
        .testi-author-company {
          font-size: .75rem;
          font-weight: 600;
          color: var(--purple);
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .testi-arrow {
          position: absolute;
          top: 80px;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          background: #fff;
          font-size: 1rem;
          color: var(--text-600);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all .15s;
          z-index: 2;
        }
        .testi-arrow:hover { border-color: var(--purple); color: var(--purple); }
        .testi-prev { left: -60px; }
        .testi-next { right: -60px; }
        .testi-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 36px;
        }
        .testi-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          border: none;
          background: #D1D5DB;
          cursor: pointer;
          padding: 0;
          transition: all .2s;
        }
        .testi-dot.active {
          background: var(--purple);
          width: 24px;
          border-radius: 4px;
        }
        @media (max-width: 860px) {
          .testi-prev { left: -4px; }
          .testi-next { right: -4px; }
        }
        @media (max-width: 640px) {
          .testimonials { padding: 60px 5%; }
          .testi-slide { padding: 28px 20px; }
        }
      `}</style>
    </section>
  );
}

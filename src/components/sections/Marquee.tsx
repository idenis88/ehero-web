'use client';

const LOGOS = [
  {
    id: 'etsy',
    name: 'Etsy',
    color: '#EA6B00',
    bg: '#FEF0E8',
    icon: <img src="/images/etsy-icon.png" alt="Etsy" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
  {
    id: 'shopify',
    name: 'Shopify',
    color: '#5A8E00',
    bg: '#EDFAE8',
    icon: <img src="/images/shopify-icon.png" alt="Shopify" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
  {
    id: 'woo',
    name: 'WooCommerce',
    color: '#96588A',
    bg: '#F5EEF8',
    icon: <img src="/images/woo-icon.png" alt="WooCommerce" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
  {
    id: 'ebay',
    name: 'eBay',
    color: '#444',
    bg: '#F8F8F8',
    icon: <img src="/images/ebay-icon.png" alt="eBay" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    color: '#6772E5',
    bg: '#EEF0FF',
    icon: <img src="/images/stripe-icon.png" alt="Stripe" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
  {
    id: 'thrivecart',
    name: 'ThriveCart',
    color: '#00A89A',
    bg: '#E0FAF8',
    icon: <img src="/images/thrivecart-icon.png" alt="ThriveCart" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
  {
    id: 'minimax',
    name: 'Minimax',
    color: '#023444',
    bg: '#EEF3FF',
    icon: <img src="/images/minimax-icon.png" alt="Minimax" width="22" height="22" style={{ display: 'block', width: '22px', height: '22px', objectFit: 'contain' }} />,
  },
];

const MARQUEE_ITEMS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-inner-wrap">
        <span className="marquee-eyebrow">Podprte platforme</span>

        <div className="marquee-viewport">
          <div className="marquee-group">
            <div className="marquee-track">
              {MARQUEE_ITEMS.map((logo, i) => (
                <div key={`${logo.id}-${i}`} className={`marquee-logo lm-${logo.id}`}>
                  <div className="marquee-logo-inner">
                    <div className="logo-mark" style={{ background: logo.bg, overflow: 'hidden' }}>
                      {logo.icon}
                    </div>
                    <span className="logo-name" style={{ color: logo.color }}>
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          padding: 0;
          background: var(--bg);
          width: 100%;
        }
        .marquee-inner-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 5% 52px;
        }
        .marquee-eyebrow {
          display: block;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-300);
          margin-bottom: 20px;
        }
        .marquee-viewport {
          width: 100%;
          overflow: hidden;
          background: var(--bg-soft);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 4px 0;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-group:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: marquee-scroll 32s linear infinite;
          will-change: transform;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        .marquee-logo {
          flex-shrink: 0;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(0, 0, 0, 0.06);
          opacity: 0.7;
          filter: grayscale(15%);
          transition: opacity 0.25s, filter 0.25s;
          white-space: nowrap;
        }
        .marquee-logo:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        .marquee-logo-inner {
          display: flex;
          align-items: center;
          gap: 9px;
          white-space: nowrap;
        }
        .logo-mark {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-name {
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
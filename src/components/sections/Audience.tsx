'use client';

export default function Audience() {
  return (
    <section id="komu-namenjeno" style={{ background: '#fff', padding: '96px 5%' }}>
      <div className="container">

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <span className="section-label">Komu je namenjeno</span>
            <h2 className="section-title">Razvito posebej za<br />slovenske prodajalce</h2>
            <p className="section-sub">Ta aplikacija je namenjena slovenskim spletnim prodajalcem, ki prodajajo na Etsy, Shopify, WooCommerce ali eBay in za računovodstvo uporabljajo Minimax.</p>
            <div style={{ marginTop: '24px', padding: '16px 20px', background: 'var(--purple-light)', border: '1px solid var(--border-purple)', borderRadius: '10px', fontSize: '1rem', color: 'var(--purple)', fontWeight: 500 }}>
              💡 Brez skrbi – tehnično znanje ni potrebno. Namestitev je preprosta, skozi celoten postopek pa vas vodimo korak za korakom.
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '2rem' }}>
            {[
              { icon: '/images/etsy-icon.png', alt: 'Etsy', title: 'Prodajalci na Etsy, Shopify, WooCommerce ali eBay', desc: 'Primerno tudi če imate le 10 naročil na mesec — vaš čas je dragocen.' },
              { icon: '/images/shopify-icon.png', alt: 'Shopify', title: 'Ustvarjalci fizičnih ali digitalnih izdelkov', desc: 'Bodisi prodajate ročno delo, tisk na zahtevo ali digitalne prenose.' },
              { icon: '/images/minimax-icon.png', alt: 'Minimax', title: 'Tisti, ki želijo poslovati bolj profesionalno', desc: 'Brez napak, brez zamujenih naročil, brez stresa ob koncu meseca.' },
            ].map(item => (
              <div key={item.title}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '18px 20px', background: '#fff', border: '1.5px solid var(--border)', borderRadius: '12px', transition: 'border-color .2s, box-shadow .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-purple)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 18px rgba(144,94,230,.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', padding: '4px' }}>
                  <img src={item.icon} alt={item.alt} width="30" height="30" style={{ display: 'block', width: '30px', height: '30px', objectFit: 'contain' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '.9375rem', fontWeight: 700, color: '#111827', marginBottom: '3px', letterSpacing: '-.01em' }}>{item.title}</h4>
                  <p style={{ fontSize: '.9375rem', color: 'var(--text-400)', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopify strip */}
        <div style={{ paddingTop: '40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', background: '#fff', borderTop: '1.5px solid var(--border)', borderRight: '1.5px solid var(--border)', borderBottom: '1.5px solid var(--border)', borderLeft: '4px solid #5A8E00', borderRadius: '14px', padding: '24px 32px', boxShadow: '0 1px 4px rgba(0,0,0,.06)', flexWrap: 'wrap' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EDFAE8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', padding: '4px' }}>
              <img src="/images/shopify-icon.png" alt="Shopify" width="40" height="40" style={{ display: 'block', width: '40px', height: '40px', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>eHero je na voljo v Shopify App Store</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-400)', margin: 0 }}>Za Shopify trgovce je eHero na voljo prek uradne Shopify App Store strani, kjer si ga lahko namestite z enim klikom.</p>
            </div>
            <a href="https://apps.shopify.com/ehero-1" target="_blank" rel="noopener" className="btn-primary" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Namesti zdaj →</a>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo-link" aria-label="eHero">
              <img 
                src="/images/eHero-white.png"
                alt="eHero" 
                style={{ height: '40px', width: 'auto', display: 'block' }} 
              />
            </a>
            <p className="footer-tagline">Samodejni prenos naročil iz Shopify, WooCommerce, Etsy in eBay v Minimax. Avtomatizacija računovodstva za slovenske spletne prodajalce.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="footer-social" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0f14"/></svg>
              </a>
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-nav-cols">
            <div className="footer-col">
              <h4 className="footer-col-title">Integracije</h4>
              <ul className="footer-col-links">
                <li><a href="#">Shopify</a></li>
                <li><a href="#">WooCommerce</a></li>
                <li><a href="#">Etsy</a></li>
                <li><a href="#">eBay</a></li>
                <li><a href="#">Stripe</a></li>
                <li><a href="#">ThriveCart</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Računovodstvo</h4>
              <ul className="footer-col-links">
                <li><a href="#">Minimax</a></li>
                <li><a href="#">Metakocka</a></li>
                <li><a href="#">Čebelca</a></li>
                <li><a href="#">e-računi</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Strani</h4>
              <ul className="footer-col-links">
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Affiliate partnerji</a></li>
                <li><a href="#">Navodila</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Račun</h4>
              <ul className="footer-col-links">
                <li><a href="https://app.ehero.si/registracija" target="_blank">Registracija</a></li>
                <li><a href="https://app.ehero.si/prijava" target="_blank">Prijava</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} eHero. Vse pravice pridržane.</p>
          <div className="footer-bottom-links">
            <a href="#">Politika zasebnosti</a>
            <a href="#">Pogoji poslovanja</a>
          </div>
          <p className="footer-disclaimer">The terms "Etsy", "Shopify" and "eBay" are trademarks of their respective owners. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
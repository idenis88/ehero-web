'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '#kako-deluje', label: 'Kako deluje' },
  { href: '#prednosti', label: 'Prednosti' },
  { href: '#komu-namenjeno', label: 'Komu je namenjeno' },
  { href: '#cene', label: 'Cenik' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="eh-header">
      <div className="eh-header-inner">
        <nav className="eh-nav" id="main-nav">
          <div className="eh-nav-row">
            {/* Logo */}
            <Link href="/" className="eh-logo">
              <img 
                src="/images/eHero-black.png"
                alt="eHero" 
                style={{ height: '28px', width: 'auto', display: 'block' }} 
              />
            </Link>

            {/* Desktop links */}
            <ul className="eh-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="eh-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="eh-actions">
              <a href="https://app.ehero.si/prijava" className="eh-login">
                Prijava
              </a>
              <a href="https://app.ehero.si/registracija" className="eh-cta">
                Začni brezplačno
              </a>

              {/* Hamburger */}
              <button
                className="eh-hamburger"
                aria-label="Odpri meni"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  {mobileOpen ? (
                    <path
                      d="M5 5L17 17M17 5L5 17"
                      stroke="#374151"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ) : (
                    <>
                      <path d="M3 6h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 11h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 16h16" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <div className={`eh-mobile ${mobileOpen ? 'open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="eh-m-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="eh-m-cta-row">
              <a href="https://app.ehero.si/prijava" className="eh-m-cta secondary">
                Prijava
              </a>
              <a href="https://app.ehero.si/registracija" className="eh-m-cta primary">
                Začni brezplačno →
              </a>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .eh-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 14px 20px;
        }
        .eh-header-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .eh-nav {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
          border: 1px solid var(--border);
        }
        .eh-nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px 12px 24px;
          gap: 8px;
        }
        .eh-logo {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.03em;
        }
        .eh-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 1023px) {
          .eh-links {
            display: none;
          }
        }
        .eh-nav-link {
          padding: 8px 14px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-600);
          border-radius: 8px;
          transition: background 0.12s, color 0.12s;
          text-decoration: none;
          display: block;
        }
        .eh-nav-link:hover {
          background: #f9fafb;
          color: var(--purple);
        }
        .eh-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .eh-login {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-600);
          border-radius: 8px;
          transition: background 0.12s, color 0.12s;
          text-decoration: none;
        }
        .eh-login:hover {
          background: #f9fafb;
          color: var(--purple);
        }
        @media (max-width: 1023px) {
          .eh-login,
          .eh-cta {
            display: none !important;
          }
        }
        .eh-cta {
          display: inline-flex;
          align-items: center;
          padding: 9px 18px;
          background: var(--purple);
          color: #fff;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: background 0.15s;
          text-decoration: none;
        }
        .eh-cta:hover {
          background: var(--purple-dark);
        }
        .eh-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 6px;
        }
        @media (max-width: 1023px) {
          .eh-hamburger {
            display: inline-flex;
          }
        }
        .eh-mobile {
          display: none;
          flex-direction: column;
          gap: 2px;
          padding: 8px 12px 16px;
          border-top: 1px solid var(--border);
        }
        .eh-mobile.open {
          display: flex;
        }
        .eh-m-link {
          display: flex;
          align-items: center;
          padding: 11px 14px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-600);
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.12s, color 0.12s;
        }
        .eh-m-link:hover {
          background: #f9fafb;
          color: var(--purple);
        }
        .eh-m-cta-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px 8px 4px;
          border-top: 1px solid var(--border);
          margin-top: 4px;
        }
        .eh-m-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.12s;
        }
        .eh-m-cta.secondary {
          background: #f3f4f6;
          color: #1a1a2e;
        }
        .eh-m-cta.secondary:hover {
          background: #e5e7eb;
        }
        .eh-m-cta.primary {
          background: var(--purple);
          color: #fff;
          font-weight: 600;
        }
        .eh-m-cta.primary:hover {
          background: var(--purple-dark);
        }
      `}</style>
    </header>
  );
}

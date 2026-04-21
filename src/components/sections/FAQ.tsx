'use client';

import { useState } from 'react';

const FAQS_LEFT = [
  { q: 'Ali moram biti tehničen in kako dolgo traja nastavitev?', a: 'Ne. Platforme povežete z nekaj kliki, brez tehničnega znanja. Nastavitev običajno vzame 10–15 minut — jasna navodila in video vodiči vas vodijo korak za korakom.' },
  { q: 'Ali se naročila sinhronizirajo avtomatsko?', a: 'Da. Aplikacija stalno spremlja vsa nova naročila in jih zajame samodejno. Če je katero neuspešno preneseno, prejmete opozorilo, tako da imate popoln nadzor.' },
  { q: 'Ali lahko povežem več platform v en eHero račun?', a: 'Za Etsy, WooCommerce, eBay, Stripe in ThriveCart — ja, vse platforme upravljate v enem eHero računu. Za Shopify pa je potreben ločen eHero račun za vsako Shopify trgovino.' },
  { q: 'Koliko stane aplikacija?', a: 'Vsi paketi vključujejo 14-dnevno brezplačno preizkusno obdobje. Za Etsy, WooCommerce, eBay in ostale platforme je na voljo tudi brezplačni paket za do 10 naročil mesečno. Višji paketi se cenovno prilagajajo vaši rasti, brez skritih stroškov.' },
  { q: 'Kaj se zgodi z obstoječimi naročili — se prenesejo tudi stara?', a: 'Da. Ob prvi nastavitvi izberete datum od katerega želite prenesti naročila. Tako lahko prenesete tudi naročila iz preteklosti.' },
];

const FAQS_RIGHT = [
  { q: 'Ali to deluje za fizične in digitalne izdelke?', a: 'Da. eHero deluje za vse vrste naročil — fizične izdelke in digitalne prenose.' },
  { q: 'Ali je povezava varna in ali potrebujem posebna dovoljenja?', a: 'Da, popolnoma varno. eHero uporablja uradne API-je vseh podprtih platform — podatki se prenašajo varno in skladno z zakonodajo. Za vsako platformo samo potrdite avtorizacijo med svojo trgovino in eHero računom, brez posebnih dovoljenj.' },
  { q: 'Kaj če pride do napake?', a: 'Naša slovenska podpora je vedno na voljo. Pišite nam in z veseljem vam bomo pomagali. Aplikacija je podprta z rednimi posodobitvami.' },
  { q: 'Ali je eHero primeren tudi za manjše trgovine?', a: 'Da. Brezplačni paket pokrije do 10 naročil mesečno. Že pri 10 naročilih prihranite ure ročnega dela — eHero to reši v sekundah. Začnete brezplačno, nadgradite ko rastete.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li style={{ borderBottom: '1px solid #F3F4F6' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif', fontSize: '1.0625rem',
          fontWeight: 600, color: '#111827', textAlign: 'left', gap: '16px',
        }}
      >
        {q}
        <span style={{ flexShrink: 0, width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--purple)', transition: 'transform .3s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      {open && (
        <p style={{ padding: '0 0 18px', fontSize: '1rem', color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{a}</p>
      )}
    </li>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: 'var(--bg-soft)', padding: '80px 5%' }}>
      <div className="container">
        <div>
          <span className="section-label">Pogosta vprašanja</span>
          <h2 className="section-title">Imate vprašanja?<br />Mi imamo odgovore.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px', marginTop: '3rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {FAQS_LEFT.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </ul>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {FAQS_RIGHT.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function JustStart() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((s) => !s);

  // City detection state
  const [city, setCity] = useState(null);

  // Load Calendly widget script once
  useEffect(() => {
    const id = "calendly-widget";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Detect user's city with geolocation -> reverse geocode, fallback to IP geolocation
  useEffect(() => {
    let cancelled = false;
    const abort = new AbortController();

    const setSafeCity = (name) => {
      if (!cancelled && name && typeof name === "string") {
        setCity(name);
      }
    };

    const ipCityFallback = async () => {
      try {
        // Try ipwho.is (no key, CORS-enabled)
        const r = await fetch("https://ipwho.is/?fields=city,region,country,success", { signal: abort.signal });
        const j = await r.json();
        if (j && j.success) {
          setSafeCity(j.city || j.region || null);
          return;
        }
      } catch (_) {}
      try {
        // Secondary fallback: ipapi.co
        const r2 = await fetch("https://ipapi.co/json/", { signal: abort.signal });
        const j2 = await r2.json();
        if (j2 && (j2.city || j2.region)) {
          setSafeCity(j2.city || j2.region);
        }
      } catch (_) {
        // swallow; will default to placeholder
      }
    };

    const reverseGeocode = async (lat, lon) => {
      try {
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
        const r = await fetch(url, { signal: abort.signal });
        const j = await r.json();
        const name = j.city || j.locality || j.localityName || j.principalSubdivision || null;
        if (name) {
          setSafeCity(name);
        } else {
          await ipCityFallback();
        }
      } catch (_) {
        await ipCityFallback();
      }
    };

    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => reverseGeocode(pos.coords.latitude, pos.coords.longitude),
        () => {
          ipCityFallback();
        },
        { enableHighAccuracy: false, timeout: 7000, maximumAge: 60 * 60 * 1000 }
      );
    } else {
      ipCityFallback();
    }

    return () => {
      cancelled = true;
      abort.abort();
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/dimitri-mcdaniel-9oh/new-meeting", // test
        // url: "https://calendly.com/dimitri-mcdaniel-9oh/new-meeting",
      });
    } else {
      // fallback: scroll to inline widget
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Prepare city display only if detected
  const hasCity = !!(city && city.trim());
  const cleanCity = hasCity ? city.trim() : "";

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="logo">OFROOT × Marketing</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
        <nav className={`menu ${menuOpen ? "open" : ""}`} aria-label="Main">
          <ul>
            <li><a href="#how">How it works</a></li>
            <li><a href="#proof">Why us</a></li>
            <li><a href="#book">Book a Call</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="jumbotron">
        <h1 className="jumbotronTitle">We bring you 10+ new jobs/month — or you don’t pay.</h1>
        <p className="jumbotronSubtitle">
          Plumbers & home services{hasCity ? <> in <strong>{cleanCity}</strong></> : ""} — we make your phone ring with real customers.
        </p>
        <p className="microNote">Based on tracked, local leads that convert to jobs for home services (e.g., plumbing, HVAC).</p>
        <div className="ctaRow">
          <button
            className="cta-button"
            onClick={() => {
              document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Free Call
          </button>
          <a className="cta-secondary" href="tel:+1-614-500-2315">Or call (614) 500‑2315</a>
        </div>
        <ul className="trust">
          <li>✔ No win, no fee</li>
          <li>✔ 10‑minute discovery</li>
          <li>✔ Cancel anytime</li>
        </ul>
      </section>

      <main className="main">
        {/* How it works */}
        <section id="how" className="section">
          <h2>How it works</h2>
          <ol className="steps">
            <li>1️⃣ <strong>Launch</strong> → Target high‑intent searches (e.g., “emergency plumber near me”).</li>
            <li>2️⃣ <strong>Convert</strong> → Fast landing pages with click‑to‑call + quote form.</li>
            <li>3️⃣ <strong>Track</strong> → Every call & lead tracked. <em>No jobs = no fee.</em></li>
          </ol>
        </section>

        {/* Proof/Why Us */}
        <section id="proof" className="section">
          <h2>Why choose us</h2>
          <ul className="grid bullets">
            <li><strong>Risk‑free:</strong> Pay only for real jobs.</li>
            <li><strong>Qualified local leads:</strong> Calls + form submissions that convert.</li>
            <li><strong>Fast launch:</strong> Live within 48 hours — done for you.</li>
            <li><strong>Transparent reporting:</strong> Call recordings + performance reports.</li>
          </ul>
        </section>

        {/* Testimonial */}
        <section className="section testimonial">
          <blockquote>“Booked 18 new plumbing jobs in month one.” — MARS</blockquote>
        </section>

        {/* Booking (inline Calendly) */}
        <section id="book" className="section">
          <h2>Book your free 10‑minute call</h2>
          <p className="subtle">Slots fill fast — secure your setup in 2 business days.</p>
          <div className="ctaRow" style={{ marginTop: 12 }}>
            <button className="cta-button" onClick={openCalendly}>Book Your Free Call</button>
            <a className="cta-secondary" href="#sample-report">View Sample Report</a>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dimitri-mcdaniel-9oh/new-meeting"
            style={{ minWidth: 320, height: 620, marginTop: 16 }}
          />
        </section>

        {/* Sample report (light placeholder) */}
        <section id="sample-report" className="section">
          <h2>Sample performance report</h2>
          <div className="sampleReport">Preview the metrics we share: calls, lead quality, conversion rate, and ROI. (Sample available on request.)</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#book" className="footer-logo">OFROOT × Marketing</a>
        <p className="footer-copy">© {new Date().getFullYear()} OFROOT Technology. All rights reserved.</p>
      </footer>

      {/* Styles (keep your existing palette/layout) */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
        .page { font-family:'JetBrains Mono', monospace; color:#000; background:#fff; }
        .header { display:flex; justify-content:space-between; align-items:center; padding:16px 20px; border-bottom:1px solid #ddd; position:sticky; top:0; background:#fff; z-index:10; }
        .logo { font-weight:700; }
        .hamburger { font-size:1.5rem; background:none; border:none; cursor:pointer; }
        .menu { display:none; position:absolute; right:20px; top:56px; background:#fff; border:1px solid #ddd; border-radius:8px; padding:10px; }
        .menu.open { display:block; }
        .menu ul { margin:0; padding:0; list-style:none; }
        .menu li { margin:8px 0; }
        .menu a { text-decoration:none; color:#000; }
        .jumbotron { text-align:center; padding:120px 20px 80px; min-height:70vh; display:flex; flex-direction:column; justify-content:center; color:#fff; border-bottom:none; background: linear-gradient(135deg, #00FFA6 0%, #00D084 25%, #00B87A 50%, #00A86B 75%, #00E4B1 100%); background-size: 420% 420%; animation: jadeShift 6s linear infinite; position: relative; overflow: hidden; }
        .jumbotron > * { position: relative; z-index: 1; }
        .jumbotron::before { content: ""; position: absolute; inset: -20%; background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 100%); transform: translateX(-60%); animation: jadeShine 4s ease-in-out infinite; pointer-events: none; }
        .jumbotron::after { content: ""; position: absolute; inset: -10%; background:
          radial-gradient(60% 60% at 20% 30%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%),
          radial-gradient(50% 50% at 80% 70%, rgba(0,255,200,0.18) 0%, rgba(0,255,200,0) 55%);
          mix-blend-mode: screen; filter: saturate(140%);
          animation: jadePulse 7s ease-in-out infinite;
          pointer-events: none;
        }
        .jumbotronTitle { font-size:2.8rem; margin:0; }
        .jumbotronSubtitle { margin-top:12px; color:#fff; }
        .ctaRow { margin-top:20px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .cta-button { padding:12px 18px; background:#0b5fff; color:#fff; border-radius:6px; font-weight:700; border:none; cursor:pointer; }
        .cta-secondary { display:inline-flex; align-items:center; padding:12px 16px; border:1px solid #ddd; border-radius:6px; text-decoration:none; color:#000; }
        .jumbotron .cta-secondary { border-color: rgba(255,255,255,0.6); color:#fff; }
        .jumbotron .cta-secondary:hover { border-color: #fff; }
        .trust { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin:16px 0 0; padding:0; list-style:none; color:#555; }
        .jumbotron .trust { color: rgba(255,255,255,0.92); }
        .main { max-width:900px; margin:0 auto; padding:40px 20px 80px; }
        .section { padding:32px 0; border-bottom:1px solid #222; }
        h2 { margin:0 0 12px; font-size:1.6rem; }
        .steps { list-style:decimal; padding-left:1.2rem; color:#333; }
        .steps li { margin:10px 0; }
        .grid.bullets { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:12px; padding:0; list-style:none; }
        .grid.bullets li { background:#f9f9f9; border:1px solid #ddd; border-radius:8px; padding:14px; }
        .calendly-inline-widget { width:100%; border:1px solid #eee; border-radius:10px; box-shadow:0 8px 20px rgba(0,0,0,.05); }
        .footer { text-align:center; padding:28px 20px; border-top:1px solid rgba(255,255,255,0.3); position:relative; overflow:hidden; color:#fff; background: linear-gradient(135deg, #00FFA6 0%, #00D084 25%, #00B87A 50%, #00A86B 75%, #00E4B1 100%); background-size: 420% 420%; animation: jadeShift 6s linear infinite; }
        .footer::before { content: ""; position: absolute; inset: -20%; background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%); transform: translateX(-60%); animation: jadeShine 5s ease-in-out infinite; pointer-events: none; }
        .footer::after { content: ""; position: absolute; inset: -10%; background:
          radial-gradient(60% 60% at 20% 30%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 60%),
          radial-gradient(50% 50% at 80% 70%, rgba(0,255,200,0.14) 0%, rgba(0,255,200,0) 55%);
          mix-blend-mode: screen; filter: saturate(140%);
          animation: jadePulse 7s ease-in-out infinite;
          pointer-events: none;
        }
        .footer-logo { text-decoration:none; font-weight:700; color:#fff; }
        .footer-copy { color:#fff; margin-top:8px; font-size:.95rem; opacity:.9; }
        @keyframes jadeShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes jadeShine { 0% { transform: translateX(-60%) rotate(0.001deg); opacity: .25; } 50% { transform: translateX(60%) rotate(0.001deg); opacity: .55; } 100% { transform: translateX(-60%) rotate(0.001deg); opacity: .25; } }
        @keyframes jadePulse { 0% { transform: translate(-5%, -5%) scale(1); opacity: .25; } 50% { transform: translate(5%, 5%) scale(1.08); opacity: .5; } 100% { transform: translate(-5%, -5%) scale(1); opacity: .25; } }
        @media (prefers-reduced-motion: reduce) { .jumbotron, .footer { animation: none; } .jumbotron::before, .jumbotron::after, .footer::before, .footer::after { animation: none; opacity: 0; } }
        @media (max-width:768px){ .jumbotronTitle{font-size:2.2rem;} .jumbotron{ min-height:60vh; padding:100px 16px 60px; } }
      `}</style>

      {/* Add-on styles for new elements */}
      <style jsx>{`
        .microNote { margin-top:8px; font-size:0.95rem; opacity:0.9; }
        .section.testimonial { background:#f7fdf8; border:1px solid #d5f3e6; border-radius:10px; padding:16px; }
        .section.testimonial blockquote { margin:0; font-style:italic; color:#0a3d2c; }
        .subtle { margin-top:6px; color:#666; }
        .sampleReport { margin-top:8px; background:#fafafa; border:1px solid #eee; border-radius:10px; padding:16px; color:#555; text-align:center; }
      `}</style>
    </div>
  );
}

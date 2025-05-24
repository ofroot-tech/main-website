"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function JustStart() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="page">
      {/* Navbar */}
      <header className="header">
        <div className="logo">OFROOT x JUST START</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/justStart/signUp">Sign Up</Link> <br></br>
            </li>
              <hr></hr>
    <li>
              <Link href="/justStart/signIn">Sign In</Link> <br></br>
    </li>
              <hr></hr>
<li>
              <Link href="/">OFROOT</Link>
</li>
              <hr></hr>
              {/* <li>
                <a href="https://www.ofroot.health">OFROOT HEALTH</a>
              </li> */}
            {/* <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </header>

      <section className="jumbotron">
        <h1 className="jumbotronTitle">JUST START</h1>
        <p className="jumbotronSubtitle">
            Empowering Home Service Businesses with Cutting-Edge Tools
        </p>
      </section>

      <main className="main">
        <section className="section">
            <h2>Why Choose Just Start?</h2>
            <p>
                Just Start is your all-in-one platform designed specifically for home
                service businesses—contractors, cleaners, landscapers, handymen, and
                beyond. It’s more than just software. It’s your competitive edge.
            </p>
        </section>

        <section className="section">
          <h2>Features</h2>
            <ul>
              <li>
                <span>🔧</span> Automated branding tools – instantly create high-quality banners, QR codes, and marketing assets.
              </li>
              <li>
                <span>👥</span> Customer management – clean, intuitive, and built to scale.
              </li>
              <li>
                <span>📝</span> AI-powered blog creation – optimized content that helps you rank and reach more customers.
              </li>
              <li>
                <span>📅</span> Smart forms, lead tracking, booking – built-in and ready to go.
              </li>
              <li>
                <span>🚀</span> Growth-focused launch tools – because speed and momentum matter.
              </li>
            </ul>
        </section>

        <section className="section">
          <h2>Get Started Today</h2>
            <p>
              Join thousands of businesses already using Just Start to grow and
              succeed. Let’s build something real. Let’s Just Start.
            </p>
            {/* <a href="/contact" className="cta-button">
              Contact Us
            </a> */}
          </section>

          <section className="section">
  <h2>Subscription Plans</h2>
  <div className="plans">
    <div className="plan">
      <h3>Basic</h3>
      <p className="price">$10/month</p>
      <ul>
        <li>✔ Automated Branding Tools</li>
        <li>✔ Customer Management</li>
        <li>✖ AI-Powered Blog Creation</li>
        <li>✖ Smart Forms & Booking</li>
      </ul>
      <button className="cta-button">Choose Basic</button>
    </div>
    <div className="plan">
      <h3>Pro</h3>
      <p className="price">$25/month</p>
      <ul>
        <li>✔ Automated Branding Tools</li>
        <li>✔ Customer Management</li>
        <li>✔ AI-Powered Blog Creation</li>
        <li>✔ Smart Forms & Booking</li>
      </ul>
      <button className="cta-button">Choose Pro</button>
    </div>
    <div className="plan">
      <h3>Enterprise</h3>
      <p className="price">Custom Pricing</p>
      <ul>
        <li>✔ All Pro Features</li>
        <li>✔ Dedicated Support</li>
        <li>✔ Custom Integrations</li>
        <li>✔ Advanced Analytics</li>
      </ul>
      <button className="cta-button">Contact Us</button>
    </div>
  </div>
</section>

<section className="section">
  <h2>Comprehensive Features</h2>
  <div className="features-grid">
    <div className="feature-category">
      <h3>Marketing</h3>
      <ul>
        <li>✔ Create Your Brand</li>
        <li>✔ QR Code Generation</li>
        <li>✔ SEO Growth</li>
      </ul>
    </div>
    <div className="feature-category">
      <h3>Core Operational Features</h3>
      <ul>
        <li>✔ Scheduling & Dispatch</li>
        <li>✔ Customer Relationship Management (CRM)</li>
        <li>✔ Insights & Reports</li>
        <li>✔ Estimate to Quote</li>
        <li>✔ SMS Alerts</li>
      </ul>
    </div>
    <div className="feature-category">
      <h3>Business Intelligence & Reporting</h3>
      <ul>
        <li>✔ Analytics Dashboard</li>
        <li>✔ Custom Reporting Tools</li>
      </ul>
    </div>
    <div className="feature-category">
      <h3>Administrative & Support Tools</h3>
      <ul>
        <li>✔ Document Management</li>
        <li>✔ Inventory Management</li>
        <li>✔ Project Management</li>
        <li>✔ Ticketing System</li>
      </ul>
    </div>
    <div className="feature-category">
      <h3>Integrations & Automations</h3>
      <ul>
        <li>✔ Third-Party Integrations</li>
        <li>✔ Workflow Automation</li>
      </ul>
    </div>
    <div className="feature-category">
      <h3>Tasks</h3>
      <ul>
        <li>✔ Build Analytics Dashboard</li>
        <li>✔ Create Reporting Tools</li>
        <li>✔ Build QR Code Generator</li>
        <li>✔ Implement Third-Party Integrations</li>
        <li>✔ Develop Workflow Automations</li>
        <li>✔ File Business Paperwork (LLC)</li>
        <li>✔ Get Business Cards</li>
      </ul>
    </div>
  </div>
</section>
      </main>

       
       <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="/" className="footer-logo">OFROOT x JUST START</a>
            <ul className="footer-menu">
              {/* <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li> */}
              <Link href="/">OFROOT</Link>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="lni lni-facebook-filled"></i></a>
            <a href="#" aria-label="Twitter"><i className="lni lni-twitter-filled"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="lni lni-linkedin-original"></i></a>
            <a href="#" aria-label="Instagram"><i className="lni lni-instagram-original"></i></a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} OFROOT Technology. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

      .page {
          background: #ffffff;
          color: #000000;
          font-family: 'JetBrains Mono', monospace;
          margin: 0;
          padding: 0;
        }

        .jumbotron {
          // background: radial-gradient(circle,rgb(255, 253, 253),rgb(236, 251, 237),rgb(244, 255, 244));

          text-align: center;
          padding: 80px 20px 60px;
          border-bottom: 1px solid #222;
        }

        .jumbotronTitle {
          font-size: 3.2rem;
          font-weight: 700;
          color: #000000;
          letter-spacing: 0.8px;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin: 0;
        }

        .jumbotronSubtitle {
          font-size: 1.2rem;
          color: #555555;
          margin-top: 12px;
          opacity: 0;
          transform: translateY(20px);
          animation: emergeFromBottom 1s ease-out forwards;
        }

        @keyframes emergeFromBottom {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .main {
          max-width: 800px;
          margin: auto;
          padding: 60px 20px;
        }

        .section {
          border-bottom: 1px solid #222;
          padding-bottom: 40px;
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.8rem;
          color: #000000;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 1.2rem;
          color: #333333;
          margin-top: 25px;
          margin-bottom: 10px;
        }

        p {
          font-size: 1rem;
          color: #555555;
          line-height: 1.7;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 12px;
          font-size: 1rem;
          color: #333333;
          display: flex;
          align-items: center;
        }

        li span {
          margin-right: 10px;
        }

        .footer {
          // background: #f9f9f9;
          background: radial-gradient(circle,rgb(255, 253, 253),rgb(236, 251, 237),rgb(244, 255, 244));
          padding: 40px 20px;
          text-align: center;
          border-top: 1px solid #ddd;
        }

        .footer-container {
          max-width: 800px;
          margin: auto;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #000000;
          text-decoration: none;
          margin-bottom: 20px;
          display: inline-block;
        }

        .footer-menu {
          list-style: none;
          padding: 0;
          margin: 20px 0;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .footer-menu li {
          display: inline;
        }

        .footer-menu a {
          color: #555555;
          text-decoration: none;
          font-size: 1rem;
        }

        .footer-menu a:hover {
          color: #000000;
        }

        .footer-social {
          margin: 20px 0;
        }

        .footer-social a {
          color: #555555;
          margin: 0 10px;
          font-size: 1.2rem;
          text-decoration: none;
        }

        .footer-social a:hover {
          color: #000000;
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: #888888;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .jumbotronTitle {
            font-size: 2.4rem;
          }

          .jumbotronSubtitle {
            font-size: 1rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1.1rem;
          }

          p {
            font-size: 0.95rem;
          }

          .footer-menu {
            flex-direction: column;
            gap: 10px;
          }

          .footer-social a {
            font-size: 1rem;
          }
        }

        // sidebar menu
               .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #ffffff;
          border-bottom: 1px solid #ddd;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #000000;
        }

        .hamburger {
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 60px;
          right: 20px;
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .menu.open {
          display: flex;
        }

        .menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          margin: 10px 0;
        }

        .menu a {
          text-decoration: none;
          color: #000000;
          font-size: 1rem;
        }

        .menu a:hover {
          color: #0070f3;
        }

        .plans {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-top: 20px;
          }

          .plan {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            width: 300px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .plan h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
          }

          .price {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 15px;
            color: #0070f3;
          }

          .plan ul {
            list-style: none;
            padding: 0;
            margin: 0 0 20px;
            text-align: left;
          }

          .plan ul li {
            margin-bottom: 10px;
            font-size: 1rem;
            color: #555;
          }
            
        .cta-button {
            display: inline-block;
            width: 100%;
            padding: 10px 20px;
            background: #0070f3;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .cta-button:hover {
            background: #005bb5;
          }

          .features-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-top: 20px;
          }

          .feature-category {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            width: 300px;
            text-align: left;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .feature-category h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
          }

          .feature-category ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .feature-category ul li {
            margin-bottom: 10px;
            font-size: 1rem;
            color: #555;
          }
      `}</style>
    </div>
  );
}
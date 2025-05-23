"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
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
                <Link href="/justStart">JUST START</Link>
              </li>     
                <hr></hr>
            <li>
              <a href="https://www.ofroot.health">OFROOT HEALTH</a>
            </li>
              <hr></hr>
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
        <h1 className="jumbotronTitle">OFROOT Technology</h1>
        <p className="jumbotronSubtitle">Empowering Business Through Technology</p>
      </section>

      <main className="main">
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            To build technology that works—powerful, clean, and easy to use. No fluff. No bloat. Just results.
          </p>
        </section>

        <section className="section">
          <h2>Our Flagship Product: Just Start</h2>
          <p>
          Every business deserves a strong foundation. <strong>Just Start</strong> is our all-in-one 
          platform designed specifically for home service businesses—contractors,
          cleaners, landscapers, handymen, and beyond. It’s more than just software. It’s your competitive edge.
          </p>

          <h3>With Just Start, you get:</h3>
          <ul>
            <li><span>🔧</span> Automated branding tools – instantly create high-quality banners, QR codes, and marketing assets.</li>
            <li><span>👥</span> Customer management – clean, intuitive, and built to scale.</li>
            <li><span>📝</span> AI-powered blog creation – optimized content that helps you rank and reach more customers.</li>
            <li><span>📅</span> Smart forms, lead tracking, booking – built-in and ready to go.</li>
            <li><span>🚀</span> Growth-focused launch tools – because speed and momentum matter.</li>
          </ul>
            {/* Add the link to the Just Start page */}
            <Link href="/justStart">
            Learn More About <span className="cta-button">Just Start</span>
            </Link>
        </section>

        <section className="section">
          <h2>Why OfRoot?</h2>
          <p>
            We’ve been in your shoes—building from the ground up, solving real-world problems with limited resources and big dreams. That’s why our tools are built for performance, efficiency, and scale. <br></br><br></br>
          </p>
          <p>We don’t just sell software. We deliver results. <br></br><br></br>
          Let’s build something real. Let’s Just Start.</p>
        </section>
      </main>

       
       <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="/" className="footer-logo">OFROOT</a>
            <ul className="footer-menu">
              {/* <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li> */}
              <Link href="/justStart">Just Start</Link>
              {/* <li><a href="#privacy">Just Start</a></li> */}
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

        .cta-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background: radial-gradient(circle,rgb(255, 253, 253),rgb(236, 251, 237),rgb(244, 255, 244));
          color: black;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          position: relative;
        }

        .cta-button::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background: #ffffff;
          border-bottom: 2px dottedrgb(52, 50, 50);
          position: absolute;
          bottom: -5px;
          left: 0;
        }

        .cta-button:hover {
          background: radial-gradient(circle,rgb(45, 31, 31),rgb(4, 97, 10),rgb(76, 101, 76));
          color: white;
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
      `}</style>
    </div>
  );
}
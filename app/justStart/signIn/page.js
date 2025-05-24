"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [success, setSuccess] = useState(""); // Success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://your-laravel-backend.com/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Login successful!");
        localStorage.setItem("authToken", data.token); // Save the token in localStorage
        console.log("User Data:", data.user); // Log user data for debugging
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to log in.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
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
          
                <li>
                <Link href="/justStart/signUp">Sign Up</Link>
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
        <h1 className="jumbotronTitle">Sign In</h1>
        <p className="jumbotronSubtitle">Welcome back to Just Start!</p>
      </section>

      <main className="main">
        <section className="section">
          <h2>Sign in to your Account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="cta-button" disabled={loading}>
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </form>
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

            .signup-form {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: #333;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .form-group input:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 4px rgba(0, 112, 243, 0.5);
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
      `}</style>
    </div>
  );
}
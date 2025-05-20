"use client";
export default function Home() {
  return (
    <div className="page">
      <section className="jumbotron">
        <h1 className="jumbotronTitle">OFROOT Technology</h1>
        <p className="jumbotronSubtitle">Empowering Business Through Technology</p>
      </section>

      <main className="main">
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            Create powerful technology that anyone can use — no fluff, no bloat. Just results.
          </p>
        </section>

        <section className="section">
          <h2>Our Flagship Product: Just Start</h2>
          <p>
            We believe every business deserves a strong start. <strong>Just Start</strong> is our
            all-in-one software built for home services companies — from contractors to
            cleaners, landscapers to handymen.
          </p>

          <h3>With Just Start, you get:</h3>
          <ul>
            <li><span>🔧</span> Automated branding (banners, QR codes)</li>
            <li><span>👥</span> Clean customer management</li>
            <li><span>📝</span> SEO blog content generation</li>
            <li><span>📅</span> Smart forms, lead tracking, booking</li>
            <li><span>🚀</span> Launch tools built for fast growth</li>
          </ul>
        </section>

        <section className="section">
          <h2>Why OfRoot?</h2>
          <p>
            We’ve built from zero too. Our tools solve real-world problems, save time, and scale
            with your ambition.
          </p>
          <p>Let’s build something that works. Let’s Just Start.</p>
        </section>
      </main>

      <style jsx>{`
        .page {
          background: #0a0a0a;
          color: #ddd;
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
          margin: 0;
          padding: 0;
        }

        .jumbotron {
          background: #111;
          text-align: center;
          padding: 80px 20px 60px;
          border-bottom: 1px solid #222;
        }

        .jumbotronTitle {
          font-size: 3.2rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.8px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          margin: 0;
        }

        .jumbotronSubtitle {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 12px;
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
          color: #fff;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 1.2rem;
          color: #ccc;
          margin-top: 25px;
          margin-bottom: 10px;
        }

        p {
          font-size: 1rem;
          color: #bbb;
          line-height: 1.7;
        }

        ul {
          list-style: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 12px;
          font-size: 1rem;
          color: #ccc;
          display: flex;
          align-items: center;
        }

        li span {
          margin-right: 10px;
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
        }
      `}</style>
    </div>
  );
}

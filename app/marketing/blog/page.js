"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Simple in-memory posts list (replace with CMS or filesystem later)
const initialPosts = [
  {
    slug: "google-ads-for-plumbers",
    title: "Google Ads for Plumbers: A No‑Fluff Playbook",
    excerpt: "Turn high‑intent searches into booked jobs with a tight, local campaign.",
    date: "2025-08-20",
    tags: ["Google Ads", "Plumbing", "Local"],
  },
  {
    slug: "call-tracking-setup",
    title: "Call Tracking Setup: See Which Leads Become Jobs",
    excerpt: "Track every call and form submission so you only pay for real outcomes.",
    date: "2025-08-18",
    tags: ["Attribution", "Tracking"],
  },
];

export default function BlogIndex() {
  const [posts, setPosts] = useState(initialPosts);

  // In a real setup, fetch posts here
  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  return (
    <div className="blogPage">
      <header className="blogHeader">
        <h1>Marketing Blog</h1>
        <p>Short, actionable posts for home‑service growth.</p>
      </header>
      <main className="blogMain">
        <ul className="postGrid">
          {posts.map((p) => (
            <li key={p.slug} className="postCard">
              <h2><Link href={`/marketing/blog/${p.slug}`}>{p.title}</Link></h2>
              <p className="meta">{new Date(p.date).toLocaleDateString()} · {p.tags.join(" · ")}</p>
              <p>{p.excerpt}</p>
              <Link className="readMore" href={`/marketing/blog/${p.slug}`}>Read more →</Link>
            </li>
          ))}
        </ul>
      </main>
      <style jsx>{`
        .blogPage { max-width: 960px; margin: 0 auto; padding: 40px 20px 80px; }
        .blogHeader { text-align: center; margin-bottom: 24px; }
        .postGrid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
        .postCard { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; background: #fff; }
        .postCard h2 { margin: 0 0 8px; font-size: 1.25rem; }
        .postCard .meta { color: #6b7280; font-size: 0.9rem; margin: 0 0 8px; }
        .readMore { color: #0b5fff; text-decoration: none; font-weight: 600; }
      `}</style>
    </div>
  );
}

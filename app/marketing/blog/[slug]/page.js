"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

// Demo loader (replace with real data source)
const posts = {
  "google-ads-for-plumbers": {
    title: "Google Ads for Plumbers: A No‑Fluff Playbook",
    date: "2025-08-20",
    tags: ["Google Ads", "Plumbing", "Local"],
    body: `
      <p>Turn high‑intent searches into booked jobs by focusing on exact‑match keywords and call‑only ads during peak hours.</p>
      <ul>
        <li>Target: emergency + near me + city service combos</li>
        <li>Ad types: search + call‑only; extensions: call + location</li>
        <li>Landing: click‑to‑call first, quote form second</li>
        <li>Tracking: record calls and score quality</li>
      </ul>
    `,
  },
  "call-tracking-setup": {
    title: "Call Tracking Setup: See Which Leads Become Jobs",
    date: "2025-08-18",
    tags: ["Attribution", "Tracking"],
    body: `
      <p>Install dynamic number insertion and capture source, keyword, and call outcome. Only pay for real jobs.</p>
      <ol>
        <li>Provision tracking numbers per channel</li>
        <li>Log call duration, recording, and status</li>
        <li>Feed to a simple performance report</li>
      </ol>
    `,
  },
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts[slug];
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!post) return notFound();

  return (
    <article className="postPage">
      <header>
        <h1>{post.title}</h1>
        <p className="meta">{new Date(post.date).toLocaleDateString()} · {post.tags.join(" · ")}</p>
      </header>
      {mounted && <div className="content" dangerouslySetInnerHTML={{ __html: post.body }} />}
      <p style={{ marginTop: 24 }}>
        <Link href="/marketing/blog">← Back to Blog</Link>
      </p>
      <style jsx>{`
        .postPage { max-width: 800px; margin: 0 auto; padding: 40px 20px 80px; }
        .meta { color: #6b7280; }
        .content :global(p) { line-height: 1.7; margin: 12px 0; }
        .content :global(ul), .content :global(ol) { margin: 12px 0 12px 18px; }
      `}</style>
    </article>
  );
}

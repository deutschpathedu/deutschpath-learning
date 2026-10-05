import Link from "next/link";

const features = [
  { number: "01", title: "Structured Lessons", bengali: "গুছানো পাঠ", copy: "ছোট ছোট পাঠে ভিত্তি থেকে শেখা—কোনো ধাপ বাদ না দিয়ে।", icon: "↗" },
  { number: "02", title: "Vocabulary", bengali: "শব্দভাণ্ডার", copy: "দৈনন্দিন জীবনের দরকারি জার্মান শব্দ, বাংলা অর্থসহ।", icon: "Aa" },
  { number: "03", title: "Pronunciation", bengali: "উচ্চারণ", copy: "শুনুন, অনুকরণ করুন এবং আত্মবিশ্বাসের সঙ্গে বলুন।", icon: "◖))" },
  { number: "04", title: "Practice & Quizzes", bengali: "অনুশীলন ও কুইজ", copy: "শেখা মনে রাখতে ছোট অনুশীলন আর নিজের জ্ঞান যাচাই।", icon: "✳" },
  { number: "05", title: "Progress Tracking", bengali: "অগ্রগতি", copy: "কোন পাঠ শেষ করেছেন এবং পরের ধাপ কী—সব এক নজরে।", icon: "↗" },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="flag-dots"><i /><i /><i /></span> DEUTSCH LERNEN, SCHRITT FÜR SCHRITT</div>
            <h1>Deutsch<span className="hero-path">Path</span><span className="hero-period">.</span></h1>
            <p className="hero-tagline">Learn German <span>•</span> Build Your Future</p>
            <p className="hero-bengali">জার্মান শেখা হোক সহজ, সুন্দর আর আপনার নিজের গতিতে।<br />একটি ছোট ধাপ—প্রতিদিন, একটি নতুন সম্ভাবনার দিকে।</p>
            <div className="hero-actions">
              <Link href="/learn/a1/module-01" className="button button-red">শেখা শুরু করুন <span aria-hidden="true">→</span></Link>
              <Link href="/learn" className="button button-ghost">শেখা চালিয়ে যান <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="hero-course-label"><span className="hero-course-line" /> German A1 <span>•</span> Batch 01</div>
          </div>
          <div className="hero-visual" aria-label="A1 জার্মান শেখার গ্রাফিক">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-sun" /><div className="visual-word">Hallo<span>.</span></div>
            <div className="visual-note note-one"><span>01</span><b>Erste Schritte</b><small>আপনার প্রথম ধাপ</small></div>
            <div className="visual-note note-two"><span>GUTEN TAG</span><b>শুরু হোক কথা</b></div>
            <div className="visual-asterisk">✳</div>
            <span className="visual-coordinate">52° 31′ 12″ N<br />13° 24′ 18″ E</span>
          </div>
        </div>
        <div className="hero-bottom"><span>DEUTSCHPATH LEARNING PORTAL</span><span>01 — 03 <i /></span></div>
      </section>

      <section className="feature-section">
        <div className="section-heading"><div><span className="eyebrow">LERNEN MIT SYSTEM · গুছিয়ে শেখা</span><h2>ভাষা শেখা, এক ধাপ করে।</h2></div><p>শুধু শব্দ নয়—জার্মান ভাষার সঙ্গে গড়ে তুলুন নিজের আত্মবিশ্বাস।</p></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top"><span>{feature.number}</span><span className="feature-icon" aria-hidden="true">{feature.icon}</span></div>
              <h3>{feature.title}</h3><h4>{feature.bengali}</h4><p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-roadmap">
        <div><span className="eyebrow">DEIN NÄCHSTER SCHRITT · আপনার পরের ধাপ</span><h2>Heute A1.<br /><span>Morgen alles möglich.</span></h2><p>ভাষা শেখার যাত্রা শুরু হয় প্রথম ছোট ধাপ থেকে।</p><Link href="/learn" className="text-link">আপনার শেখার পথ দেখুন <span aria-hidden="true">→</span></Link></div>
        <div className="home-levels">
          <div className="home-level level-now"><span>01 · এখন চালু</span><strong>A1</strong><small>Grundlagen · ভিত্তি</small></div>
          <div className="level-connector" />
          <div className="home-level level-future"><span>02 · ভবিষ্যৎ কোর্স</span><strong>A2</strong><small>Aufbau · আরও এগিয়ে</small></div>
          <div className="level-connector" />
          <div className="home-level level-future"><span>03 · ভবিষ্যৎ কোর্স</span><strong>B1</strong><small>Selbstständig · সাবলীলতার পথে</small></div>
        </div>
      </section>

      <section className="home-cta">
        <div><span className="eyebrow">DEIN ERSTER SCHRITT · আপনার প্রথম ধাপ</span><h2>Einfach anfangen.</h2><p>শুরু করতে পারলেই অর্ধেক পথ পেরোনো।</p></div>
        <Link href="/learn/a1/module-01" className="button button-dark">A1 শেখা শুরু করুন <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}

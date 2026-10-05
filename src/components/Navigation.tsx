"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/vocabulary", label: "Vocabulary" },
  { href: "/practice", label: "Practice" },
  { href: "/progress", label: "Progress" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="প্রধান নেভিগেশন">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">D</span>
          <span>Deutsch<span className="brand-accent">Path</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div id="main-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link className="nav-cta" href="/learn" onClick={() => setMenuOpen(false)}>শুরু করুন <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
}

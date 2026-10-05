import type { Metadata } from "next";
import { Navigation } from "@/src/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeutschPath — Learn German • Build Your Future",
  description: "বাংলাভাষীদের জন্য ধাপে ধাপে জার্মান শেখার প্ল্যাটফর্ম।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        <Navigation />
        {children}
        <footer className="site-footer">
          <div className="footer-brand"><span className="brand-mark" aria-hidden="true">D</span><span>Deutsch<span className="brand-accent">Path</span></span></div>
          <p>Learn German <span>•</span> Build Your Future</p>
          <span className="footer-note">Schritt für Schritt · ধাপে ধাপে</span>
        </footer>
      </body>
    </html>
  );
}

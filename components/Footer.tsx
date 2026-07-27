"use client";

import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  showCommitments?: boolean;
};

export default function Footer({ showCommitments = true }: FooterProps) {
  const go = (label: string) => {
    const id = label === "À propos" ? "apropos" : label === "Devis" ? "devis" : label.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      return;
    }
    window.location.assign(`/#${id}`);
  };

  return (
    <>
      {showCommitments && (
        <aside className="trust-section" aria-label="Nos engagements" style={{ background: "var(--bg2)", padding: "0 48px 80px" }}>
          <div className="section-inner trust-grid" style={{ maxWidth: 1160, margin: "0 auto" }}>
            {[["Devis gratuit", "Sans engagement"], ["Proposition sur mesure", "Adaptée à votre activité"], ["Réponse sous 24 h", "Pour avancer rapidement"]].map(([title, text]) => (
              <div className="trust-item" key={title}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--text)", marginBottom: 8 }}>{title}</div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 13, color: "var(--muted)" }}>{text}</div>
              </div>
            ))}
          </div>
        </aside>
      )}
      <footer className="footer" style={{ background: "var(--bg-dark)", padding: "64px 48px" }}>
        <div className="footer-inner footer-top" style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32, paddingBottom: 40, marginBottom: 40, borderBottom: "1px solid var(--border-dark)" }}>
          <Image className="footer-logo" src="/logo-assistann-clean.svg" alt="Assist'Ann" width={500} height={500} style={{ height: 72, width: "auto" }} />
          <nav className="footer-nav" aria-label="Navigation de pied de page" style={{ display: "flex", gap: 40 }}>
            {["Services","À propos","Processus","Devis"].map(l => (
              <button className="footer-nav-link" type="button" key={l} onClick={() => go(l)} style={{ border: 0, background: "transparent", padding: 0, fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", cursor: "pointer" }}>{l}</button>
            ))}
          </nav>
          <div className="footer-contact" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10, textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dark)" }}>Une question ?</span>
            <a href="mailto:contact@assistann.fr" style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, color: "var(--text-dark)" }}>contact@assistann.fr</a>
          </div>
        </div>
        <div className="footer-inner footer-bottom" style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: ".14em", color: "var(--muted-dark)" }}>ASSIST&apos;ANN — ASSISTANTE DIGITALE</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            <Link href="/mentions-legales" style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "var(--muted-dark)" }}>Mentions légales</Link>
            <Link href="/politique-de-confidentialite" style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "var(--muted-dark)" }}>Confidentialité</Link>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "var(--muted-dark)" }}>© 2026 Assist&apos;Ann</span>
          </div>
        </div>
      </footer>
    </>
  );
}

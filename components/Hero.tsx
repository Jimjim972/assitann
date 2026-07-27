"use client";

import Image from "next/image";

export default function Hero() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 76,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section className="hero" style={{
      minHeight: "100vh", background: "var(--bg)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "120px 40px 80px", position: "relative", overflow: "hidden", textAlign: "center",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "80px 80px", opacity: .4,
      }} />

      <div className="hero-content" style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
        <Image className="hero-logo" src="/logo-assistann-cropped.png" alt="Assist'Ann" width={1018} height={1122} style={{ height: 120, width: "auto", marginBottom: 48, opacity: .95 }} priority />

        <h1 className="hero-title" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.15, color: "var(--text)", marginBottom: 40, letterSpacing: "-.01em" }}>
          <span className="hero-title-line">Votre assistante digitale</span>
        </h1>

        <p className="hero-subtitle" style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "var(--muted)", maxWidth: 520, margin: "0 auto 52px" }}>
          De l&apos;administratif à la facturation, en passant par la gestion des ressources humaines, je serai votre appui.
        </p>

        <div className="hero-actions" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="cta-primary" type="button" onClick={() => go("devis")} style={{
            background: "var(--grad)", color: "#fff", border: "none", borderRadius: 2,
            padding: "20px 56px", fontFamily: "var(--font-display)", fontSize: 11,
            letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer",
          }}>Demander un devis</button>
        </div>

        <div className="hero-stats" aria-label="Engagements" style={{ display: "flex", justifyContent: "center", gap: 64, marginTop: 72, paddingTop: 48, borderTop: "1px solid var(--border)" }}>
          {[["Sur mesure","Accompagnement personnalisé"],["Flexible","Selon vos besoins"],["24 h","Délai de réponse"]].map(([n, l]) => (
            <div className="hero-stat" key={l} style={{ textAlign: "center" }}>
              <div className="grad-text" style={{ fontFamily: "var(--font-display)", fontSize: n.length > 8 ? 22 : 28, fontWeight: 600 }}>{n}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--muted)", marginTop: 8, letterSpacing: ".06em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
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

  const goTop = () => {
    if (window.location.pathname !== "/") {
      window.location.assign("/");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <nav aria-label="Navigation principale" className="site-nav" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(250,250,250,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all .35s", padding: "0 48px",
    }}>
      <div className="nav-inner" style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
        <button type="button" onClick={goTop} aria-label="Revenir à l’accueil" style={{ border: 0, background: "transparent", cursor: "pointer", padding: 0 }}>
          <Image className="nav-logo" src="/logo-assistann-cropped.png" alt="" width={1018} height={1122} style={{ height: 52, width: "auto", objectFit: "contain" }} priority />
        </button>
        <div className="nav-links" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {[["services","Services"],["apropos","À propos"],["processus","Processus"]].map(([id, label]) => (
            <button className="nav-section-link" type="button" key={id} onClick={() => go(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-display)", fontSize: 11,
              letterSpacing: ".18em", textTransform: "uppercase",
              color: "var(--muted)", transition: "color .2s", padding: 0,
            }}>{label}</button>
          ))}
          <button className="nav-quote" type="button" onClick={() => go("devis")} style={{
            border: "1px solid var(--indigo)", borderRadius: 2, padding: "10px 28px",
            fontFamily: "var(--font-display)", fontSize: 10,
            letterSpacing: ".18em", textTransform: "uppercase",
            color: "var(--indigo)", background: "transparent", cursor: "pointer",
            transition: "all .2s",
          }}>Devis gratuit</button>
        </div>
      </div>
    </nav>
  );
}

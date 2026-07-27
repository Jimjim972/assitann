const steps = [
  { n: "01", t: "Décrivez vos besoins", d: "Complétez simplement le formulaire de contact en m'expliquant votre demande. Plus vous me donnerez d'informations, plus je pourrai vous proposer une solution adaptée." },
  { n: "02", t: "Recevez votre proposition personnalisée", d: "Recevez sous 24 heures un devis personnalisé, construit en fonction de vos besoins et de vos attentes. Je vous contacterai afin d'échanger sur cette proposition, de répondre à vos questions et d'ajuster, si nécessaire, les prestations avant toute validation." },
  { n: "03", t: "Démarrons votre accompagnement", d: "Une fois le devis validé, nous organisons un entretien afin de faire connaissance, définir ensemble les modalités de notre collaboration et mettre en place une organisation adaptée à votre fonctionnement." },
];

export default function Process() {
  return (
    <section className="section" id="processus" aria-labelledby="process-title" style={{ background: "var(--bg)", padding: "112px 48px" }}>
      <div className="section-inner" style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="process-heading" style={{ textAlign: "center", marginBottom: 80 }}>
          <h2 id="process-title" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", color: "var(--text)", lineHeight: 1.2 }}>
            Prêt à déléguer ? Voici <span className="grad-text">la marche à suivre.</span>
          </h2>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }}>
          {steps.map((s, i) => (
            <article className="process-card" key={i} style={{ background: "#fff", padding: "52px 44px", position: "relative", transition: "transform .2s, box-shadow .2s" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid var(--indigo)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
                <span className="grad-text" style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600 }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18, color: "var(--text)", marginBottom: 20, letterSpacing: ".03em" }}>{s.t}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, lineHeight: 1.85, color: "var(--muted)" }}>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

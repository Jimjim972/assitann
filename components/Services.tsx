"use client";

const cards = [
  {
    title: "Administratif",
    items: ["Suivi de dossiers", "Mise à jour des tableaux de bord", "Saisie de données", "Rédaction et mise en forme de documents", "Comptes rendus"],
  },
  {
    title: "Organisation",
    items: ["Gestion des e-mails", "Gestion d'agenda", "Préparation de réunions ou d'évènements", "Déplacements"],
  },
  {
    title: "Gestion",
    items: ["Saisie comptable", "Devis", "Facturation", "Bons de commande", "Suivi des impayés"],
  },
  {
    title: "Ressources humaines",
    items: ["Recrutement", "Saisie des variables de paie", "Suivi des visites médicales", "Lien avec les agences d'intérim"],
  },
];

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title" style={{ background: "var(--bg)", padding: "112px 48px" }}>
      <div className="section-inner" style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div className="section-heading" style={{ marginBottom: 72 }}>
          <h2 id="services-title" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", color: "var(--text)", lineHeight: 1.2, maxWidth: 720 }}>
            Des solutions <span className="grad-text">adaptées à votre activité</span>
          </h2>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)" }}>
          {cards.map((c, i) => (
            <article className="service-card" key={i} style={{ background: "#fff", padding: "44px 36px 48px", position: "relative", transition: "transform .2s, box-shadow .2s" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: ".18em", color: "var(--indigo)", marginBottom: 28, opacity: .6 }}>0{i + 1}</div>
              <div style={{ width: 32, height: 2, background: "var(--grad)", marginBottom: 24 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16, color: "var(--text)", marginBottom: 16, lineHeight: 1.4, letterSpacing: ".03em" }}>{c.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 8, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, lineHeight: 1.8, color: "var(--muted)" }}>
                    <span style={{ color: "var(--indigo)" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="apropos" aria-labelledby="about-title" style={{ background: "var(--bg2)", padding: "112px 48px" }}>
      <div className="section-inner about-grid" style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
        <div className="about-photo" style={{
          aspectRatio: "3/4",
          border: "1px solid var(--border)",
          position: "relative", overflow: "hidden",
        }}>
          <Image src="/anne.jpg" alt="Anne-Emmanuelle, assistante administrative déléguée" fill sizes="(max-width: 1024px) 100vw, 532px" style={{ objectFit: "cover" }} />
        </div>

        <div className="about-copy">
          <h2 id="about-title" className={styles.title}>
            <span className={styles.intro}>Bonjour, je suis</span>
            <span className={styles.name}>Anne-Emmanuelle,</span>
            <span className={styles.call}>
            <em>mais appelez-moi</em> <span className="grad-text">Anne.</span>
            </span>
          </h2>
          <div style={{ width: 48, height: 1, background: "var(--grad)", marginBottom: 36 }} />
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, lineHeight: 1.9, color: "var(--muted)", marginBottom: 24 }}>
            J&apos;accompagne les entrepreneurs et les entreprises en leur apportant un soutien administratif, organisationnel et RH, avec un seul objectif : leur faire gagner du temps et leur permettre de se concentrer sur leur activité.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 16, lineHeight: 1.9, color: "var(--muted)" }}>
            Au-delà des compétences, je crois qu&apos;une collaboration durable repose sur trois piliers : la confiance, la transparence et la communication. C&apos;est avec ces valeurs que je m&apos;investis dans chaque mission, en proposant un accompagnement fiable, flexible et adapté à vos besoins.
          </p>

          <div className="about-stats" aria-label="Valeurs de l'accompagnement" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: 52, paddingTop: 52, borderTop: "1px solid var(--border)" }}>
            {[["Fiable","Suivi attentif"],["Flexible","Organisation adaptée"],["Humain","Relation de confiance"]].map(([n, l], i) => (
              <div className="about-stat" key={l} style={{ textAlign: "center", borderRight: i < 2 ? "1px solid var(--border)" : "none", padding: "0 20px" }}>
                <div className="grad-text" style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--muted)", letterSpacing: ".08em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function QuoteForm() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", service: "", volume: "", message: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = "Obligatoire";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.service) e.service = "Obligatoire";
    if (!form.message.trim()) e.message = "Obligatoire";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      const firstInvalid = ["nom", "email", "service", "message"].find((field) => e[field]);
      requestAnimationFrame(() => document.getElementById(firstInvalid ?? "")?.focus());
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setErrors({ message: "Erreur d'envoi, réessayez plus tard." });
    } finally {
      setLoading(false);
    }
  };

  const inp = (field: string): React.CSSProperties => ({
    width: "100%", padding: "14px 18px", background: "var(--bg)",
    border: `1px solid ${errors[field] ? "#E05555" : "var(--border)"}`,
    borderRadius: 2, fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 15, color: "var(--text)", outline: "none",
  });

  return (
    <section className="section" id="devis" aria-labelledby="quote-title" style={{ background: "var(--bg2)", padding: "112px 48px" }}>
      <div className="section-inner" style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="quote-heading" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 id="quote-title" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", color: "var(--text)", marginBottom: 20, lineHeight: 1.2 }}>
            Parlons de <span className="grad-text">vos besoins</span>
          </h2>
          <div style={{ width: 48, height: 1, background: "var(--grad)", margin: "0 auto" }} />
        </div>

        {sent ? (
          <div className="success-panel" role="status" aria-live="polite" style={{ background: "#fff", border: "1px solid var(--border)", padding: "80px 48px", textAlign: "center" }}>
            <Image src="/logo-assistann-cropped.png" alt="" width={1018} height={1122} style={{ height: 80, width: "auto", marginBottom: 32, opacity: .8 }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, color: "var(--text)", marginBottom: 20 }}>Message envoyé !</h3>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
              Merci pour votre confiance. Je vous contacte dans les 24 heures pour discuter de votre projet.
            </p>
          </div>
        ) : (
          <form className="quote-form" noValidate onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid var(--border)", padding: "52px 48px" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor="website">Votre site internet</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={e => setForm({ ...form, website: e.target.value })}
              />
            </div>
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              {[["nom","Nom et prénom","Ann Martin","text","name"],["email","Email","vous@email.com","email","email"]].map(([f, l, p, t2, ac]) => (
                <div key={f}>
                  <label htmlFor={f} style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", display: "block", marginBottom: 10 }}>{l} *</label>
                  <input className="form-control" id={f} name={f} required autoComplete={ac} aria-invalid={Boolean(errors[f])} aria-describedby={errors[f] ? `${f}-error` : undefined} style={inp(f)} value={form[f as keyof typeof form]} placeholder={p} type={t2}
                    onChange={e => { setForm({ ...form, [f]: e.target.value }); setErrors({ ...errors, [f]: "" }); }} />
                  {errors[f] && <div id={`${f}-error`} role="alert" style={{ fontFamily: "var(--font-body)", color: "#E05555", fontSize: 11, marginTop: 5 }}>{errors[f]}</div>}
                </div>
              ))}
            </div>

            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <label htmlFor="tel" style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", display: "block", marginBottom: 10 }}>Téléphone</label>
                <input className="form-control" id="tel" name="tel" type="tel" autoComplete="tel" style={inp("tel")} value={form.tel} placeholder="+33 6 00 00 00 00" onChange={e => setForm({ ...form, tel: e.target.value })} />
              </div>
              <div>
                <label htmlFor="service" style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", display: "block", marginBottom: 10 }}>Service souhaité *</label>
                <select className="form-control" id="service" name="service" required aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} style={{ ...inp("service"), cursor: "pointer" }} value={form.service}
                  onChange={e => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: "" }); }}>
                  <option value="">Choisir...</option>
                  <option>Administratif</option>
                  <option>Organisation</option>
                  <option>Gestion</option>
                  <option>Ressources humaines</option>
                  <option>Combinaison de services</option>
                </select>
                {errors.service && <div id="service-error" role="alert" style={{ fontFamily: "var(--font-body)", color: "#E05555", fontSize: 11, marginTop: 5 }}>{errors.service}</div>}
              </div>
            </div>

            <fieldset style={{ border: 0, marginBottom: 20 }}>
              <legend style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", display: "block", marginBottom: 14 }}>Volume estimé</legend>
              <div className="volume-options" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["Quelques heures/sem.","Mi-temps","Temps plein","À définir"].map(v => (
                  <button className="volume-option" key={v} type="button" aria-pressed={form.volume === v} onClick={() => setForm({ ...form, volume: v })} style={{
                    padding: "10px 20px",
                    border: `1px solid ${form.volume === v ? "var(--indigo)" : "var(--border)"}`,
                    background: form.volume === v ? "var(--bg2)" : "transparent",
                    color: form.volume === v ? "var(--indigo)" : "var(--muted)",
                    fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase",
                    cursor: "pointer", borderRadius: 2,
                  }}>{v}</button>
                ))}
              </div>
            </fieldset>

            <div style={{ marginBottom: 36 }}>
              <label htmlFor="message" style={{ fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".15em", color: "var(--muted)", display: "block", marginBottom: 10 }}>Votre message *</label>
              <textarea className="form-control" id="message" name="message" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} style={{ ...inp("message"), height: 120, resize: "vertical", lineHeight: 1.7 }} value={form.message}
                placeholder="Décrivez votre activité et vos besoins..."
                onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }} />
              {errors.message && <div id="message-error" role="alert" style={{ fontFamily: "var(--font-body)", color: "#E05555", fontSize: 11, marginTop: 5 }}>{errors.message}</div>}
            </div>

            <button className="cta-primary" type="submit" disabled={loading} style={{
              width: "100%", padding: "18px",
              background: loading ? "var(--muted)" : "var(--grad)",
              color: "#fff", border: "none", borderRadius: 2,
              fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
              cursor: loading ? "not-allowed" : "pointer",
            }}>
              {loading ? "Envoi en cours..." : "Envoyer ma demande de devis"}
            </button>

            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 18, letterSpacing: ".06em" }}>
              Réponse garantie sous 24h · Devis 100 % gratuit
            </p>
            <p className="privacy-note" style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 11, lineHeight: 1.65, color: "var(--muted)", textAlign: "center", marginTop: 14 }}>
              <span>Vos informations sont utilisées uniquement pour répondre à votre demande et préparer une proposition.</span>{" "}
              <Link href="/politique-de-confidentialite">En savoir plus.</Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

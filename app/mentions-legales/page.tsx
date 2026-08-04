import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentions légales — Assist'Ann",
  description: "Mentions légales et informations relatives au site Assist'Ann.",
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNoticePage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Link className={styles.backLink} href="/">← Retour à l’accueil</Link>
            <h1>Mentions légales</h1>
            <p>
              Informations relatives à l’édition et à l’utilisation du site assistann.com.
            </p>
            <span className={styles.updated}>Dernière mise à jour : 22 juillet 2026</span>
          </div>
        </section>

        <section className={styles.content} aria-label="Informations légales">
          <div className={styles.contentInner}>
            <article className={styles.document}>
              <section>
                <h2><span>1.</span> Éditeur du site</h2>
                <p>
                  Le site assistann.com est édité par Anne-Emmanuelle Jean-Louis, entrepreneur
                  individuel exerçant sous le régime de la micro-entreprise.
                </p>
                <dl className={styles.details}>
                  <div><dt>Nom</dt><dd>Anne-Emmanuelle Jean-Louis</dd></div>
                  <div><dt>Statut juridique</dt><dd>Entrepreneur individuel — micro-entrepreneur</dd></div>
                  <div><dt>SIRET</dt><dd>994 982 205 00019</dd></div>
                  <div><dt>Adresse professionnelle</dt><dd>2 place Ravel, 91270 Vigneux-sur-Seine, France</dd></div>
                  <div><dt>E-mail</dt><dd><a href="mailto:contact@assistann.fr">contact@assistann.fr</a></dd></div>
                  <div><dt>Directrice de la publication</dt><dd>Anne-Emmanuelle Jean-Louis</dd></div>
                </dl>
              </section>

              <section>
                <h2><span>2.</span> Hébergement du site</h2>
                <p>
                  Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina,
                  CA 91723, États-Unis.
                </p>
                <p>Téléphone : +1 559 288 7060</p>
                <p>Site internet : <a href="https://vercel.com" rel="noreferrer">vercel.com</a></p>
              </section>

              <section>
                <h2><span>3.</span> Propriété intellectuelle</h2>
                <p>
                  L’ensemble des contenus présents sur ce site, notamment les textes, images,
                  photographies, illustrations, logos, éléments graphiques, vidéos et documents
                  téléchargeables, est protégé par les dispositions du Code de la propriété
                  intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, diffusion, modification ou exploitation,
                  totale ou partielle, sans autorisation écrite préalable est interdite, sauf
                  exception prévue par la loi.
                </p>
              </section>

              <section>
                <h2><span>4.</span> Responsabilité</h2>
                <p>
                  Les informations publiées sur ce site sont fournies à titre informatif et sont
                  régulièrement mises à jour. L’éditrice s’efforce de fournir des informations
                  exactes, sans pouvoir garantir leur exhaustivité, leur actualisation permanente
                  ou la disponibilité continue du site.
                </p>
                <p>
                  Elle ne saurait être tenue responsable des erreurs, omissions ou d’une
                  indisponibilité temporaire du site. L’utilisateur demeure seul responsable de
                  l’utilisation qu’il fait des informations présentes sur le site.
                </p>
              </section>

              <section>
                <h2><span>5.</span> Liens hypertextes</h2>
                <p>
                  Le site peut contenir des liens vers des sites tiers. L’éditrice n’exerce aucun
                  contrôle sur ces sites et ne peut être tenue responsable de leur contenu, de leur
                  disponibilité ou de leur politique de confidentialité.
                </p>
              </section>

              <section>
                <h2><span>6.</span> Données personnelles</h2>
                <p>
                  Les informations relatives au traitement des données personnelles et à l’exercice
                  de vos droits sont détaillées dans notre <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer showCommitments={false} />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "../mentions-legales/page.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Assist'Ann",
  description: "Informations sur le traitement des données personnelles par Assist'Ann.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Link className={styles.backLink} href="/">← Retour à l’accueil</Link>
            <h1 className={styles.longTitle}>Politique de confidentialité</h1>
            <p>
              Informations relatives à la collecte, à l’utilisation et à la protection de vos
              données personnelles.
            </p>
            <span className={styles.updated}>Dernière mise à jour : 5 août 2026</span>
          </div>
        </section>

        <section className={styles.content} aria-label="Politique de confidentialité">
          <div className={styles.contentInner}>
            <article className={styles.document}>
              <section>
                <h2><span>1.</span> Responsable du traitement</h2>
                <p>
                  Le responsable du traitement des données est Anne-Emmanuelle Jean-Louis,
                  entrepreneur individuel, SIRET 994 982 205 00019, domiciliée au 2 place Ravel,
                  91270 Vigneux-sur-Seine, France. Pour toute question ou demande relative à vos
                  données : <a href="mailto:contact@assistann.fr">contact@assistann.fr</a>.
                </p>
              </section>

              <section>
                <h2><span>2.</span> Données collectées</h2>
                <p>Selon votre utilisation du site, les données suivantes peuvent être collectées :</p>
                <ul>
                  <li>nom et prénom ;</li>
                  <li>adresse e-mail ;</li>
                  <li>numéro de téléphone, lorsque vous choisissez de le communiquer ;</li>
                  <li>service recherché et volume estimé ;</li>
                  <li>
                    contenu de votre message et toute information transmise volontairement,
                    notamment le nom de votre entreprise ;
                  </li>
                  <li>
                    données techniques strictement nécessaires au fonctionnement et à la sécurité
                    du site, telles que l’adresse IP et les journaux techniques.
                  </li>
                </ul>
              </section>

              <section>
                <h2><span>3.</span> Finalités du traitement</h2>
                <p>Les données sont traitées afin de :</p>
                <ul>
                  <li>répondre aux demandes envoyées via le formulaire de contact ;</li>
                  <li>établir un devis personnalisé ;</li>
                  <li>assurer le suivi des échanges commerciaux ;</li>
                  <li>gérer la relation avec les prospects et les clients ;</li>
                  <li>assurer le fonctionnement et la sécurité du site ;</li>
                  <li>respecter les obligations légales, fiscales et comptables.</li>
                </ul>
              </section>

              <section>
                <h2><span>4.</span> Bases légales</h2>
                <p>
                  Le traitement repose sur l’exécution de mesures précontractuelles lorsque vous
                  demandez un devis, sur l’exécution du contrat lorsque vous devenez client, sur
                  l’intérêt légitime d’Assist&apos;Ann à répondre aux autres demandes et à assurer la
                  sécurité du site, ainsi que sur le respect de ses obligations légales. Le
                  consentement sera recueilli séparément si un traitement facultatif le nécessitant
                  est ajouté ultérieurement.
                </p>
              </section>

              <section>
                <h2><span>5.</span> Destinataires des données</h2>
                <p>
                  Les données sont destinées à Anne-Emmanuelle Jean-Louis. Elles peuvent être
                  traitées, dans la limite de leurs missions, par les prestataires techniques
                  nécessaires au fonctionnement du service, notamment Vercel pour l’hébergement et
                  Resend pour l’acheminement des courriels. Aucune donnée n’est vendue ni cédée à des
                  tiers à des fins commerciales.
                </p>
              </section>

              <section>
                <h2><span>6.</span> Durées de conservation</h2>
                <ul>
                  <li>les demandes sont conservées le temps nécessaire à leur traitement ;</li>
                  <li>
                    les données des prospects peuvent être conservées jusqu’à trois ans à compter
                    de leur collecte ou du dernier contact émanant du prospect ;
                  </li>
                  <li>
                    les contrats et correspondances commerciales peuvent être conservés pendant
                    cinq ans ;
                  </li>
                  <li>
                    les factures et pièces comptables sont conservées pendant dix ans à compter de
                    la clôture de l’exercice concerné.
                  </li>
                </ul>
              </section>

              <section>
                <h2><span>7.</span> Transferts hors de l’Espace économique européen</h2>
                <p>
                  Certains prestataires techniques sont établis aux États-Unis. Lorsque des données
                  sont traitées hors de l’Espace économique européen, ces transferts sont encadrés
                  par les garanties appropriées prévues par le RGPD, notamment les clauses
                  contractuelles types de la Commission européenne ou un mécanisme de transfert
                  reconnu applicable.
                </p>
              </section>

              <section>
                <h2><span>8.</span> Sécurité</h2>
                <p>
                  Des mesures techniques et organisationnelles raisonnables sont mises en œuvre afin
                  de protéger les données personnelles contre l’accès non autorisé, la perte,
                  l’altération ou la divulgation.
                </p>
              </section>

              <section>
                <h2><span>9.</span> Vos droits</h2>
                <p>
                  Conformément au RGPD, vous pouvez demander l’accès, la rectification, l’effacement
                  ou la limitation du traitement de vos données, vous opposer au traitement lorsque
                  ce droit s’applique et demander la portabilité des données lorsque celle-ci est
                  applicable. Adressez votre demande à
                  {" "}<a href="mailto:contact@assistann.fr">contact@assistann.fr</a>. En cas de
                  désaccord persistant, vous pouvez introduire une réclamation auprès de la
                  {" "}<a href="https://www.cnil.fr" rel="noreferrer">CNIL</a>.
                </p>
              </section>

              <section>
                <h2><span>10.</span> Cookies</h2>
                <p>
                  Le site utilise Vercel Web Analytics afin de produire des statistiques de
                  fréquentation agrégées, notamment sur les pages consultées, la provenance du
                  trafic et les catégories d’appareils ou de navigateurs utilisés. Cette solution
                  fonctionne sans cookie et ne permet pas de suivre les visiteurs entre différents
                  sites. Les données sont utilisées uniquement pour mesurer l’audience et améliorer
                  le site. Aucun cookie publicitaire n’est utilisé. Si un service soumis au
                  consentement est ajouté ultérieurement, un mécanisme de consentement conforme sera
                  mis en place avant son activation.
                </p>
              </section>

              <section>
                <h2><span>11.</span> Modification de la politique</h2>
                <p>
                  La présente politique peut être modifiée afin de tenir compte des évolutions
                  législatives, réglementaires ou techniques. La date de mise à jour indiquée en
                  haut de cette page permet d’identifier sa version la plus récente.
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

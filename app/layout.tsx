import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.assistann.com"),
  title: "Assist'Ann — Assistante Administrative Déléguée",
  description: "De l'administratif à la facturation, en passant par la gestion des ressources humaines, je serai votre appui.",
  applicationName: "Assist'Ann",
  authors: [{ name: "Assist'Ann" }],
  creator: "Assist'Ann",
  keywords: ["assistante administrative", "gestion administrative", "facturation", "ressources humaines", "organisation"],
  alternates: { canonical: "/" },
  icons: { icon: "/logo-assistann-cropped.png", apple: "/logo-assistann-cropped.png" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Assist'Ann",
    title: "Assist'Ann — Assistante Administrative Déléguée",
    description: "Un accompagnement administratif fiable, flexible et personnalisé selon les besoins de votre activité.",
    images: [{ url: "/logo-assistann-cropped.png", width: 1018, height: 1122, alt: "Logo Assist'Ann" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assist'Ann — Assistante Administrative Déléguée",
    description: "Un accompagnement administratif fiable, flexible et personnalisé selon les besoins de votre activité.",
    images: ["/logo-assistann-cropped.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${raleway.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

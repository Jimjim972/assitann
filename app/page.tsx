import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu principal</a>
      <Nav />
      <main id="contenu">
        <Hero />
        <Services />
        <About />
        <Process />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

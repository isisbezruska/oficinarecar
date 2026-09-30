import { About } from "@/components/About";
import { AutomotiveAesthetics } from "@/components/AutomotiveAesthetics";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CustomerReviews } from "@/components/CustomerReviews";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustBar />
        <Services />
        <BeforeAfter />
        <AutomotiveAesthetics />
        <Gallery />
        <CustomerReviews />
        <HowItWorks />
        <About />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

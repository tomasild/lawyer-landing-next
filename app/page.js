import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Services from "@/app/components/services/Services";
import Faq from "@/app/components/faq/Faq";
import Purpose from "@/app/components/purpose/Purpose";
import Cta from "@/app/components/cta/Cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Services />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

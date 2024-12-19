import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Services from "@/app/components/services/Services";
import Faq from "@/app/components/faq/Faq";
import Quote from "@/app/components/quote/Quote";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="">
        <Hero />
        <Services />
        <About />
        <Quote />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

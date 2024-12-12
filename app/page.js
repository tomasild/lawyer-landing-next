import Image from "next/image";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Services from "@/app/components/services/Services";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

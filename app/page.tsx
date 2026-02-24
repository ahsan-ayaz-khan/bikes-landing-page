import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import MainFeature from "@/components/sections/MainFeature";
import Testimonials from "@/components/sections/Testimonials";
import Faqs from "@/components/sections/Faqs";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainFeature />
        <Testimonials />
        <Faqs />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

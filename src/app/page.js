import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

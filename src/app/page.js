import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import FeaturesCard from "@/components/home/FeaturesCard";
import GetOrganized from "@/components/home/GetOrganized";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesCard />
        <GetOrganized />
      </main>
      <Footer />
    </div>
  );
}

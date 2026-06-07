import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SideQuestsSection } from "@/components/SideQuestsSection";
import { SpotlightSection } from "@/components/SpotlightSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SpotlightSection />
        <SideQuestsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
      </main>
    </>
  );
}

export default HomePage;

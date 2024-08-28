import { useEffect } from "react";
import AboutUsSection from "./components/AboutUsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PortfolioSection />
      <Footer />
    </>
  );
}

export default App;

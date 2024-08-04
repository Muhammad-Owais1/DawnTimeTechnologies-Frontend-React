import { useEffect } from "react";
import AboutUsSection from "./components/AboutUsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesSection from "./components/ServicesSection";

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
    </>
  );
}

export default App;

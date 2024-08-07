import React, { useState } from "react";

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <section className="py-20 mt-40 font-['Poppins'] text-gray-800 relative z-30 bg-white">
      Website is currently being build by Muhammmad Owais.
    </section>
  );
}

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
      <h1 className="ml-20 mb-20 font-bold text-4xl">Our Services</h1>
      <p className="px-20">
        Sorry, At the moment website is being developed so you can't make order
        through our website.
      </p>
      <h2 className="px-20 font-bold">Order now on</h2>
      <p className="px-20">Whatsapp: +92 3281936673</p>
      <p className="px-20">Email: dawntimetechnologies@gmail.com </p>

      <div className="relative rounded-[60px] w-[90vw] m-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 90}vw)` }}
        >
          <div
            className={`flex items-center justify-around flex-col plan w-[90vw] bg-black h-[90vh] relative z-20`}
          >
            <img
              src="https://i.pinimg.com/originals/33/30/2e/33302e2d2fbc77d74e9c489eaa0a1552.gif"
              className="w-full absolute -z-10 blur-md"
              alt=""
            />
            <div className="flex items-end justify-center gap-2 text-white">
              <h2 className="text-[40px] font-bold">Mobile App</h2>
              <p>Only</p>
            </div>
            <div className="flex items-center justify-center gap-10">
              {[
                [
                  "Small App",
                  "Static app with two or three pages",
                  "https://cdn.dribbble.com/users/11196168/screenshots/18108429/media/9a25fc840487358bca44e787b9cb178f.png?resize=400x300&vertical=center",
                ],
                [
                  "Normal App",
                  "Dynamic app with two or three pages",
                  "https://cdn.dribbble.com/userupload/4152891/file/original-0e67241921d540b465286011afc0c8c6.webp?resize=400x0",
                ],
                [
                  "Large App",
                  "Dynamic app with 4 to 10 pages",
                  "https://cdn.dribbble.com/users/3333362/screenshots/6956775/media/b3fc98f559ddcc1b9f817647d960ef46.jpg?resize=400x0",
                ],
                [
                  "Custom Order",
                  "Custom order",
                  "https://cdn.dribbble.com/userupload/2801419/file/original-761c69e8a0e30a71e7d7e2086b1f43b9.png?resize=1504x1128",
                ],
              ].map((item, index) => (
                <div
                  data-aos="fade-left"
                  key={index}
                  className={`h-72 w-56 ${
                    item[0] === "Custom Order" ? "bg-blue-900" : "bg-cyan-950"
                  } rounded-md  flex flex-col items-center justify-around border-[1px] text-white relative overflow-hidden card`}
                >
                  <div className="bg-white h-0 w-0 rounded-full absolute card-hover"></div>
                  <h3
                    className={`${
                      item[0] == "Custom Order" && "text-white"
                    } relative z-10 font-semibold`}
                  >
                    {item[0]}
                  </h3>
                  <p
                    className={`${
                      item[0] == "Custom Order" && "text-white"
                    } relative z-10 text-xs text-center`}
                  >
                    {item[1]}
                  </p>
                  <div className="relative z-10 w-40 h-24 overflow-hidden flex items-center justify-center bg-white rounded-lg">
                    <img src={item[2]} alt="" className="w-full " />
                  </div>
                  <button className="relative z-10 bg-white text-black text-xs px-10 py-2 rounded-md">
                    Order
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={`plan w-[90vw] h-[90vh]`}></div>
          <div className={`plan w-[90vw] bg-black h-[90vh]`}></div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </section>
  );
}

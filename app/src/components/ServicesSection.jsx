import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function ServicesSection() {
  return (
    <section className=" mt-40 font-['Poppins'] text-gray-800 bg-white">
      <h1 className="px-20 font-bold text-4xl mb-10">Services</h1>
      <div className="bg-cyan-9004 py-3 flex flex-col gap-3 bg-slate-400">
        <Marquee>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-around">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="h-3 w-3 bg-white mx-5"></div>
              ))}
            </div>
          ))}
        </Marquee>
        <Marquee>
          <div className="h-10 w-[300px] bg-black mx-6"></div>
          <div className="h-10 w-[300px] bg-black mx-6"></div>
          <div className="h-10 w-[300px] bg-black mx-6"></div>
          <div className="h-10 w-[300px] bg-black mx-6"></div>
        </Marquee>
        <Marquee>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex justify-around">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="h-3 w-3 bg-white mx-5"></div>
              ))}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

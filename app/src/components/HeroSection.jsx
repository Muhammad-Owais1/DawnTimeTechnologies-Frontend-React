import React from "react";
import Marquee from "react-fast-marquee";
import UI1 from "../imgs/ui1.png";
import UI2 from "../imgs/ui2.jpg";
import UI3 from "../imgs/ui3.png";
import UI4 from "../imgs/ui4.jpg";
import UI5 from "../imgs/ui5.png";
import UI6 from "../imgs/ui6.png";
import UI7 from "../imgs/ui7.png";

export default function HeroSection() {
  return (
    <div id="home" className="py-14 px-20 w-screen overflow-x-hidden relative ">
      <h1 className="font-['Poppins'] mb-10 font-bold text-[25px] sm:text-[40px] text-center px-0 sm:px-20">
        Come On. Don't Think Too Much. Get Your Solution. Get Your First Job.
      </h1>

      <div className="h-full  p-1 hero-tile-y hidden flex-col items-center justify-center ">
        <div className="transition-[0.3s] hover:h-[242px] hover:w-[252px] h-[218px] w-[212px] bg-cyan-400 rounded-3xl flex items-center justify-center">
          <img src={UI2} className="w-[80%]" alt="" />
        </div>
      </div>

      <div className="h-full sm-hero-tile-y p-1 hidden flex-col items-center justify-center gap-3">
        <div className="h-[211px] w-[212px] hover:h-[244px] hover:w-[252px] transition-[0.3s] bg-cyan-500 rounded-3xl flex items-center justify-center">
          <img className="w-[80%]" src={UI3} alt="" />
        </div>
        <div className="h-[128px] w-[212px] transition-[0.3s] hover:h-[200px] hover:w-[252px] box-content bg-cyan-300 rounded-3xl flex items-center justify-center">
          <img src={UI1} className="w-[80%]" alt="" />
        </div>
      </div>

      <div className=" flex items-center justify-center w-full  min-h-[450px] gap-[10px]">
        <div className="hero-tile-x h-full  p-1 flex flex-col items-center justify-center ">
          <div className="transition-[0.3s] hover:h-[242px] hover:w-[252px] h-[218px] w-[212px] bg-cyan-400 rounded-3xl flex items-center justify-center">
            <img src={UI2} className="w-[80%]" alt="" />
          </div>
        </div>

        <div className="h-full sm-hero-tile-x p-1 flex flex-col items-center justify-center gap-3">
          <div className="h-[211px] w-[212px] hover:h-[244px] hover:w-[252px] transition-[0.3s] bg-cyan-500 rounded-3xl flex items-center justify-center">
            <img className="w-[80%]" src={UI3} alt="" />
          </div>
          <div className="h-[128px] w-[212px] transition-[0.3s] hover:h-[200px] hover:w-[252px] box-content bg-cyan-300 rounded-3xl flex items-center justify-center">
            <img src={UI1} className="w-[80%]" alt="" />
          </div>
        </div>
        {/* hover:px-5 hover:py-14 */}
        <div className=" h-full  p-1 flex flex-col items-center justify-center">
          <div className=" hover:w-[252px] hover:h-[490px] hover:py-7 transition-[0.3s]   h-[442px] w-[212px]  bg-cyan-700 rounded-3xl flex items-center justify-center">
            <img src={UI7} className="w-[80%]" alt="" />
          </div>
        </div>

        <div className="h-full sm-hero-tile-x  p-1 flex flex-col items-center justify-center gap-3">
          <div className="h-[128px] w-[212px] transition-[0.3s] hover:h-[219px] hover:w-[252px] bg-cyan-600 rounded-3xl flex items-center justify-center">
            <img src={UI5} className="w-[70%]" alt="" />
          </div>
          <div className="transition-[0.3s] hover:h-[322px] hover:w-[252px] h-[211px] w-[212px] bg-cyan-800 rounded-3xl flex items-center justify-center">
            <img className="h-[80%]" src={UI6} alt="" />
          </div>
        </div>

        <div className="hero-tile-x h-full p-1 flex flex-col items-center justify-center ">
          <div className="transition-[0.3s] hover:h-[330px] hover:w-[252px] h-[218px] w-[212px] bg-cyan-200 rounded-3xl flex items-center justify-center">
            <img src={UI4} className="w-[70%]" alt="" />
          </div>
        </div>
      </div>

      <div className="h-full sm-hero-tile-y  p-1 hidden flex-col items-center justify-center gap-3">
        <div className="h-[128px] w-[212px] transition-[0.3s] hover:h-[219px] hover:w-[252px] bg-cyan-600 rounded-3xl flex items-center justify-center">
          <img src={UI5} className="w-[70%]" alt="" />
        </div>
        <div className="transition-[0.3s] hover:h-[322px] hover:w-[252px] h-[211px] w-[212px] bg-cyan-800 rounded-3xl flex items-center justify-center">
          <img className="h-[80%]" src={UI6} alt="" />
        </div>
      </div>

      <div className="hero-tile-y h-full p-1 hidden flex-col items-center justify-center ">
        <div className="transition-[0.3s] hover:h-[330px] hover:w-[252px] h-[218px] w-[212px] bg-cyan-200 rounded-3xl flex items-center justify-center">
          <img src={UI4} className="w-[70%]" alt="" />
        </div>
      </div>
      <div className="absolute left-0 top-[150px] -z-20">
        <Marquee>
          {[
            "WE DEVELOP.",
            "WE DEVELOP.",
            "WE DEVELOP.",
            "WE DEVELOP.",
            "WE DEVELOP.",
          ].map((item, index) => (
            <p
              key={index}
              className="ml-[150px] text-[80px] text-gray-200 font-black font-['Poppins']"
            >
              {item}
            </p>
          ))}
        </Marquee>
      </div>
      <Marquee>
        {[
          "GET YOUR WEBSITE READY NOW.",
          "GET YOUR APP READY NOW.",
          "JOIN US AND EARN.",
          "GET CODING TASKS.",
          "DO OUR MARKETING.",
        ].map((item, index) => (
          <p className="text-sm font-black font-['Poppins'] ml-5" key={index}>
            {item}
          </p>
        ))}
      </Marquee>
    </div>
  );
}

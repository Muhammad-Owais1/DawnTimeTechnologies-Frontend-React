import React, { useState, useEffect } from "react";
import BannerLogo from "../imgs/BannerLogo.png";
import Logo from "../imgs/Logo.png";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 86) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // Assuming 640px as the sm breakpoint
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" bg-slate-950 h-[86px] p-0 hidden sm:flex items-center justify-around flex-row gap-8  relative">
        <img className="w-[200px]" src={BannerLogo} alt="" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-black text-white sm:text-[40px] text-lg font-['Roboto'] italic ">
            WE ARE HERE.
          </h1>
          <div className="h"></div>
        </div>
        <div className="flex items-center justify-center sm:flex-col felx-row gap-2">
          <h2 className="text-orange-600 font-bold bg-white w-28 py-1 text-center rounded-full">
            Join Us
          </h2>
          <h2 className="text-orange-600 font-bold bg-white w-28 py-1 text-center rounded-full">
            Order Now
          </h2>
        </div>
      </div>

      <div className="h-[73px]">
        <nav
          className={` w-full flex items-center justify-around flex-col sm:flex-row bg-white  border-b-[1px] border-gray-200 {${
            navOpen ? "gap-0" : "gap-5"
          }} bg-white  top-0 z-10  ${
            navFixed ? "fixed top-0 left-0 right-0" : ""
          }`}
        >
          <div className="flex items-center justify-between w-full sm:w-auto px-4 py-5">
            <img className="w-36" src={Logo} alt="" />
            <button
              onClick={() => setNavOpen(navOpen ? false : true)}
              className="flex sm:hidden"
            >
              x
            </button>
          </div>
          <div
            className={`flex justify-center sm:visible sm:h-auto sm:gap-20 gap-3 flex-col sm:flex-row sm:py-0  ${
              navOpen ? "h-[271px] visible" : "h-0 invisible"
            }  overflow-hidden `}
          >
            <ul className="flex items-center justify-center gap-4 flex-col sm:flex-row">
              {["home", "about us", "portfolio", "services", "join us"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item}`}
                      className="uppercase text-xs font-semibold font-['Poppins'] hover:text-cyan-600"
                    >
                      {item}
                    </a>
                    <div className=" bg-cyan-600"></div>
                  </li>
                )
              )}
            </ul>
            <button className="nav-contact-btn border-cyan-600 border-2 py-2 px-3 rounded-full relative overflow-hidden ">
              <div className="bg-cyan-600 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0"></div>
              <a
                href=""
                className="uppercase text-xs font-semibold font-['Poppins'] h-full w-full flex items-center justify-center relative z-10"
              >
                contact us
              </a>
            </button>
          </div>
        </nav>
      </div>

      <div className=" bg-slate-950  h-auto  p-4 sm:hidden flex items-center justify-around flex-col  gap-8  relative -z-10">
        <img className="w-[200px]" src={BannerLogo} alt="" />
        <div className="flex fle-col items-center justify-center">
          <h1 className="font-black text-white sm:text-[40px] text-lg font-['Roboto'] italic ">
            WE ARE HERE.
          </h1>
          <div className="h"></div>
        </div>
        <div className="flex items-center justify-center sm:flex-col felx-row gap-2">
          <h2 className="text-orange-600 font-bold bg-white w-28 py-1 text-center rounded-full">
            Join Us
          </h2>
          <h2 className="text-orange-600 font-bold bg-white w-28 py-1 text-center rounded-full">
            Order Now
          </h2>
        </div>
      </div>
    </>
  );
}

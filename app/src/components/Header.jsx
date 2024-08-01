import React from "react";
import BannerLogo from "../imgs/BannerLogo.png";
import Logo from "../imgs/Logo.png";

export default function Header() {
  return (
    <header>
      <div className="bg-slate-950 sm:h-[86px] h-auto sm:p-0 p-4 flex items-center justify-around flex-col sm:flex-row gap-8">
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

      <nav className="flex items-center justify-around py-5 border-b-[1px] border-gray-200">
        <img className="w-36" src={Logo} alt="" />
        <ul className="flex items-center justify-center gap-4">
          {["home", "about us", "portfolio", "services", "join us"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href=""
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
          <div className="bg-cyan-600 rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10"></div>
          <a
            href=""
            className="uppercase text-xs font-semibold font-['Poppins'] h-full w-full flex items-center justify-center"
          >
            contact us
          </a>
        </button>
      </nav>
    </header>
  );
}

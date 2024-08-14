import React, { useState } from "react";

export default function ServicesSection() {
  return (
    <section className="p-20 mt-40 font-['Poppins'] text-gray-800 bg-white">
      <h1 className="font-bold text-4xl mb-10">About Us</h1>
      <div>
        <h2 className="font-bold text-1xl">Website Development</h2>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {[
            [
              "Fix or Make Static Web",
              "Basic Plan",
              "You get a static website. It's usually a single-page website or sometimes a 3 to 4 page website.",
              "5$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Standard Plan",
              "You get a static website with additional features and up to 5 pages.",
              "15$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Premium Plan",
              "You get a static website with advanced features and up to 10 pages.",
              "25$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Ultimate Plan",
              "You get a static website with all premium features and up to 15 pages.",
              "35$ - 20%",
            ],
          ].map((item, index) => (
            <div
              key={index}
              className={`p-3 hover:p-5 transition-[0.3s] box-content shadow-md shadow-slate-400 ${
                index === 0
                  ? "bg-green-400"
                  : index === 1
                  ? "bg-cyan-400"
                  : index === 2
                  ? "bg-black"
                  : index === 3 && "bg-yellow-300"
              } rounded-lg flex flex-col items-start justify-between h-52 w-56 `}
            >
              <p className="text-[10px] text-slate-700">{item[0]}</p>
              <h3
                className={`font-semibold ${
                  index == 2 ? "text-white" : "text-black"
                } text-lg`}
              >
                {item[1]}
              </h3>
              <p
                className={`${
                  index == 2 ? "text-white" : "text-black"
                } text-xs`}
              >
                {item[2]}
              </p>
              <div className="h-[0.5px] w-full bg-gray-600 mt-5"></div>
              <p className="text-[10px] text-slate-700">Price Negotiable</p>
              <h4
                className={`font-semibold text-lg ${
                  index === 2 ? "text-white" : "text-black"
                }`}
              >
                {item[3]}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-1xl">Mobile Application Development</h2>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {[
            [
              "Fix or Make Static Web",
              "Basic Plan",
              "You get a static website. It's usually a single-page website or sometimes a 3 to 4 page website.",
              "5$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Standard Plan",
              "You get a static website with additional features and up to 5 pages.",
              "15$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Premium Plan",
              "You get a static website with advanced features and up to 10 pages.",
              "25$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Ultimate Plan",
              "You get a static website with all premium features and up to 15 pages.",
              "35$ - 20%",
            ],
          ].map((item, index) => (
            <div
              key={index}
              className={`p-3 hover:p-5 transition-[0.3s] box-content shadow-md shadow-slate-400 ${
                index === 0
                  ? "bg-green-400"
                  : index === 1
                  ? "bg-cyan-400"
                  : index === 2
                  ? "bg-black"
                  : index === 3 && "bg-yellow-300"
              } rounded-lg flex flex-col items-start justify-between h-52 w-56 `}
            >
              <p className="text-[10px] text-slate-700">{item[0]}</p>
              <h3
                className={`font-semibold ${
                  index == 2 ? "text-white" : "text-black"
                } text-lg`}
              >
                {item[1]}
              </h3>
              <p
                className={`${
                  index == 2 ? "text-white" : "text-black"
                } text-xs`}
              >
                {item[2]}
              </p>
              <div className="h-[0.5px] w-full bg-gray-600 mt-5"></div>
              <p className="text-[10px] text-slate-700">Price Negotiable</p>
              <h4
                className={`font-semibold text-lg ${
                  index === 2 ? "text-white" : "text-black"
                }`}
              >
                {item[3]}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div></div>
      <div>
        <h2 className="font-bold text-1xl">
          Website + Mobile Application Development
        </h2>
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {[
            [
              "Fix or Make Static Web",
              "Basic Plan",
              "You get a static website. It's usually a single-page website or sometimes a 3 to 4 page website.",
              "5$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Standard Plan",
              "You get a static website with additional features and up to 5 pages.",
              "15$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Premium Plan",
              "You get a static website with advanced features and up to 10 pages.",
              "25$ - 20%",
            ],
            [
              "Fix or Make Static Web",
              "Ultimate Plan",
              "You get a static website with all premium features and up to 15 pages.",
              "35$ - 20%",
            ],
          ].map((item, index) => (
            <div
              key={index}
              className={`p-3 hover:p-5 transition-[0.3s] box-content shadow-md shadow-slate-400 ${
                index === 0
                  ? "bg-green-400"
                  : index === 1
                  ? "bg-cyan-400"
                  : index === 2
                  ? "bg-black"
                  : index === 3 && "bg-yellow-300"
              } rounded-lg flex flex-col items-start justify-between h-52 w-56 `}
            >
              <p className="text-[10px] text-slate-700">{item[0]}</p>
              <h3
                className={`font-semibold ${
                  index == 2 ? "text-white" : "text-black"
                } text-lg`}
              >
                {item[1]}
              </h3>
              <p
                className={`${
                  index == 2 ? "text-white" : "text-black"
                } text-xs`}
              >
                {item[2]}
              </p>
              <div className="h-[0.5px] w-full bg-gray-600 mt-5"></div>
              <p className="text-[10px] text-slate-700">Price Negotiable</p>
              <h4
                className={`font-semibold text-lg ${
                  index === 2 ? "text-white" : "text-black"
                }`}
              >
                {item[3]}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

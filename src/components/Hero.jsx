import dashboard from "../assets/dashboard.jpeg";

import React, { useState } from "react";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function goToMarketHandler() {
    navigate("/markets");
  }
  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl ">
                Decentralized P2P Crypto Market
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#d9de4a]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl ">
                    On Stellar
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                A decentralized P2P marketplace for Stellar assets & tokens -
                enabling secure, escrow-backed trading and lending without
                intermediaries.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <button
                  onClick={goToMarketHandler}
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  {" "}
                  Go To P2P Markets
                </button>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Learn more
                </a>
              </div>
            </div>

            <div>
              <img className="w-full" src="/heroInfo.png" alt="" />
            </div>
            {/* <div className="">
              <img className="w-auto h-full" src="/HeroInfo2.png" alt="" />
            </div> */}

            {/* <div className="w-full h-[500px] overflow-visible">
              <img
                src="/HeroInfo2.png"
                alt="Hero Section"
                className="w-full h-full object-cover"
              />
            </div> */}
            {/* <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
              <img
                src="/HeroInfo2.png"
                alt="Hero Section"
                className="w-auto h-full object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>

      <Stats />
    </div>
  );
}

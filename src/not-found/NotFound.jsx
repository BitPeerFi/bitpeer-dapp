import React, { useState } from "react";
import { Link } from "react-router-dom";

import sorobanBanner from "../assets/sorobanBanner.png";
import { EmojiSad } from "iconsax-react";

export default function NotFound() {
  return (
    <div className="overflow-x-hidden h-screen justify-center ">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0  h-full  flex">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8  max-w-7xl">
          <div className="max-w-3xl mx-auto h-full   text-center">
            <div className="flex flex-row mt-20 justify-center text-center items-center gap-2 ">
              {/* <EmojiSad size="42" color="#000000" /> */}
              <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:leading-tight  lg:leading-tight font-pj">
                Page not found
              </h1>
            </div>

            <div className="relative inline-flex mt-4 group">
              <Link
                to="./"
                className="relative inline-flex items-center justify-center px-8 py-3  font-semibold text-white transition-all duration-200 bg-orange-600 font-pj rounded-sm "
                role="button"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

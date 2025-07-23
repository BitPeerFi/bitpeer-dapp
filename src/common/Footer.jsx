import React, { useState } from "react";
import Logo from "../assets/socketLogo.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 sm:pt-16 lg:pt-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between mt-14 lg:mt-24">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              title=""
              className="flex font-semibold text-2xl  gap-[6px] items-center"
            >
              <img className="w-auto h-9" src="/bitpeerIcon.svg" alt="" />{" "}
              <div>BitPeer</div>
            </NavLink>
          </div>

          <ul className="flex items-center justify-center mt-8 space-x-6 sm:mt-12 sm:space-x-16 lg:mt-0">
            <li>
              <NavLink
                to="/markets/trades"
                title="dApp"
                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Buy & Sell{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/markets/loans"
                title="quests"
                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Lend & Borrow{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                title="documentation"
                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
              >
                {" "}
                Liquidity{" "}
              </NavLink>
            </li>

            <li>
              <a
                href="mailto:info@bitpeer.fi?subject=BitPeer%20Support%20and%20Enquiries"
                title="BitPeer Support and Enquiries"
                className="text-lg font-medium text-gray-900 transition-all duration-200 font-pj hover:text-gray-600"
              >
                Support
              </a>
            </li>
          </ul>

          <ul className="flex items-center justify-center mt-8 space-x-3 sm:mt-12 lg:justify-end lg:mt-0">
            <li>
              <a
                href="https://x.com/BitPeerFi"
                target="_blank"
                title="twitter (x)"
                className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </li>

            {/* <li>
              <a
                href="https://t.me/SocketFi"
                target="_blank"
                title="telegram"
                className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6177 3.97579L20.0908 20.6088C19.8247 21.7827 19.1308 22.0749 18.1447 21.5219L12.7708 17.5619L10.1777 20.0558C9.89078 20.3427 9.65078 20.5827 9.09773 20.5827L9.48382 15.1097L19.4438 6.1097C19.8769 5.72361 19.3499 5.5097 18.7708 5.89578L6.45774 13.6488L1.15687 11.9897C0.0038219 11.6297 -0.0170477 10.8367 1.39687 10.2836L22.1308 2.29579C23.0908 1.93579 23.9308 2.5097 23.6177 3.97579Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li> */}

            <li>
              <a
                href="https://github.com/orgs/bitpeerfi/repositories"
                target="_blank"
                title="Github"
                className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <hr className="mt-10 border-gray-300" />

        <div className="mt-10 md:flex md:items-center md:justify-between">
          <ul className="flex items-center justify-center space-x-6 md:order-2 md:justify-end">
            <li>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-600 transition-all duration-200 font-pj hover:text-gray-900"
              >
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-600 transition-all duration-200 font-pj hover:text-gray-900"
              >
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-base font-normal text-center text-gray-600 md:text-left md:mt-0 md:order-1 font-pj">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import Logo from "../assets/socketLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { ConnectWallet } from "../utils/soroban";

import { useMediaQuery } from "react-responsive";
import { ArrowRight2 } from "iconsax-react";

export default function Header({
  setUserKey,
  setNetwork,
  userKey,
  isWalletInstalled,
  connecting,
  setConnecting,
}) {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setExpanded(false);
    }
  }, [isLargeScreen]);

  async function handleConnect() {
    setConnecting(() => true);
    await ConnectWallet(setUserKey, setNetwork);
    setConnecting(() => false);
  }

  return (
    <header className="">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
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

          <button
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <NavLink
              to="/markets/trades"
              title=""
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Buy & Sell
            </NavLink>

            <NavLink
              to="/markets/loans"
              title=""
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Lend & Borrow
            </NavLink>

            <NavLink
              to="/"
              title=""
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Liquidity
            </NavLink>

            {/* <a
              href="#"
              title=""
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Pricing{" "}
            </a> */}

            <div className="w-px h-5 bg-black/20"></div>

            {/* <a
              href="#"
              title=""
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Log in{" "}
            </a> */}

            <NavLink
              to="/markets"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-orange-600 hover:border-black hover:bg-orange-600 hover:text-white transition-all duration-200"
              role="button"
            >
              {" "}
              P2P Markets
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

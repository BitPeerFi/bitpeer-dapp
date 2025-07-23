import { Add, CloseCircle } from "iconsax-react";
import React, { useState } from "react";
import PairedButton from "../../components/PairedButton";
import TradeBuy from "./TradeBuy";
import TradeSell from "./TradeSell";
import MarketBanner from "./MarketBanner";
import { NavLink, useNavigate } from "react-router-dom";

export default function P2PMarketsDashboard() {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }

  const markets = [
    {
      id: 1,
      title: "Trading Market",
      description:
        "Trade Stellar assets on BitPeer’s decentralized P2P marketplace. List offers, negotiate with users, and settle securely on-chain — no intermediaries.",
      buttonLabel: "Launch Trading Market",
      path: "/markets/trades",
    },

    {
      id: 2,
      title: "Lending Market",
      description:
        "Lend and borrow Stellar assets on BitPeer’s decentralized P2P marketplace. List offers, negotiate with users, and access secure, on-chain credit — no intermediaries.",
      buttonLabel: "Launch Lending Market",
      path: "/markets/loans",
    },
  ];
  return (
    <div className="flex  flex-col h-screen">
      <header className="">
        <div className="hidden py-3  border-b border-green-300 lg:block">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between space-x-6">
              <div className="flex items-center justify-between w-full ">
                <div>
                  {" "}
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-3 py-2 text-2xl font-medium text-gray-900 transition-all duration-200  rounded-lg "
                  >
                    P2P Markets
                  </a>
                </div>

                <div className="flex items-center space-x-2 xl:space-x-4">
                  <button
                    onClick={goBackHandler}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 "
                  >
                    <CloseCircle className="w-6 h-6 mr-2 -ml-1 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl">
              <div className="max-w-md">
                <h1 className="text-lg font-bold text-gray-900">
                  BitPeer P2P Markets
                </h1>
                <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                  List of available decentralized p2p markets on BitPeer
                </p>
              </div>
            </div>

            <div className="px-4 mx-auto mt-8 max-w-7xl">
              {markets?.map((market) => (
                <MarketBanner key={market?.id} market={market} />
              ))}

              {/* <div className="mt-8 overflow-hidden bg-white border border-gray-200 rounded-xl">
                <div className="px-4 py-5 sm:p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-bold text-gray-900">
                        Team Members
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipis.
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold leading-4 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                      >
                        Add New Member
                      </button>
                    </div>
                  </div>

                  <div className="flow-root mt-8">
                    <div className="-my-5 divide-y divide-gray-100">
                      <div className="py-5">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-female.png"
                              alt=""
                            />
                            <div className="absolute -top-px -right-px w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>

                          <div className="ml-4">
                            <p className="text-sm font-bold text-gray-900">
                              Arlene McCoy
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                              @arlenemc
                            </p>
                          </div>

                          <div className="flex items-center justify-end ml-auto space-x-8">
                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-900"
                            >
                              {" "}
                              Remove{" "}
                            </a>

                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700"
                            >
                              {" "}
                              Edit{" "}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-female-2.png"
                              alt=""
                            />
                            <div className="absolute -top-px -right-px w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></div>
                          </div>

                          <div className="ml-4">
                            <p className="text-sm font-bold text-gray-900">
                              Darrell Steward
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                              @darrellsteward
                            </p>
                          </div>

                          <div className="flex items-center justify-end ml-auto space-x-8">
                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-900"
                            >
                              {" "}
                              Remove{" "}
                            </a>

                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700"
                            >
                              {" "}
                              Edit{" "}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-female-3.png"
                              alt=""
                            />
                            <div className="absolute -top-px -right-px w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>

                          <div className="ml-4">
                            <p className="text-sm font-bold text-gray-900">
                              Marvin McKinney
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                              @marvinmc
                            </p>
                          </div>

                          <div className="flex items-center justify-end ml-auto space-x-8">
                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-900"
                            >
                              {" "}
                              Remove{" "}
                            </a>

                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700"
                            >
                              {" "}
                              Edit{" "}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-male.png"
                              alt=""
                            />
                            <div className="absolute -top-px -right-px w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>

                          <div className="ml-4">
                            <p className="text-sm font-bold text-gray-900">
                              Floyd Miles
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                              @floydmiles
                            </p>
                          </div>

                          <div className="flex items-center justify-end ml-auto space-x-8">
                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-900"
                            >
                              {" "}
                              Remove{" "}
                            </a>

                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700"
                            >
                              {" "}
                              Edit{" "}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-male-2.png"
                              alt=""
                            />
                            <div className="absolute -top-px -right-px w-3.5 h-3.5 bg-gray-300 border-2 border-white rounded-full"></div>
                          </div>

                          <div className="ml-4">
                            <p className="text-sm font-bold text-gray-900">
                              Albert Flores
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                              @albertfl
                            </p>
                          </div>

                          <div className="flex items-center justify-end ml-auto space-x-8">
                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-900"
                            >
                              {" "}
                              Remove{" "}
                            </a>

                            <a
                              href="#"
                              title=""
                              className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700"
                            >
                              {" "}
                              Edit{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import { Add } from "iconsax-react";
import React, { useState } from "react";
import PairedButton from "../../components/PairedButton";
import TradeBuy from "./TradeBuy";
import TradeSell from "./TradeSell";

const trades = [
  {
    id: 1,
    username: "Sam Timothy",
    payment: ["Bank Transfer", "Bank Deposit"],
    stats: { trades: 21334, rating: 97, time: "11m 06s" },
    trade: {
      price: "1.05",
      amount: "20345",
      limitMin: "18.1",
      limitMax: "20245",
    },
  },
  {
    id: 2,
    username: "Jerry Mos",
    payment: ["Bank Transfer", "Bank Deposit"],
    stats: { trades: 1334, rating: 95, time: "06m 06s" },
    trade: {
      price: "1.06",
      amount: "230",
      limitMin: "5",
      limitMax: "200",
    },
  },
  {
    id: 3,
    username: "Alice Rif",
    payment: ["Zelle", "Cash App"],
    stats: { trades: 2030, rating: 99, time: "04m 06s" },
    trade: {
      price: "1.05",
      amount: "1050",
      limitMin: "50",
      limitMax: "1050",
    },
  },
  {
    id: 4,
    username: "Adele Man",
    payment: ["PayPal"],
    stats: { trades: 132, rating: 93.4, time: "15m 06s" },
    trade: {
      price: "1.09",
      amount: "320",
      limitMin: "10",
      limitMax: "320",
    },
  },
  {
    id: 5,
    username: "Albert Hector",
    payment: ["Chase Bank"],
    stats: { trades: 53, rating: 96, time: "17m 00s" },
    trade: {
      price: "1.08",
      amount: "2345",
      limitMin: "2345",
      limitMax: "2345",
    },
  },
];

export default function P2PMarket() {
  const [isBuy, setIsBuy] = useState(true);
  return (
    <div className="flex flex-col">
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
                    P2P Market
                  </a>
                </div>

                <div className="flex items-center space-x-2 xl:space-x-4">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200  rounded-lg "
                  >
                    <svg
                      className="w-6 h-6 mr-2 -ml-1 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    Home P2P
                    {/* <svg
                      className="w-5 h-5 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg> */}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 "
                  >
                    <svg
                      className="w-6 h-aut mr-2 -ml-1 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 5.25C4.16421 5.25 4.5 4.91421 4.5 4.5C4.5 4.08579 4.16421 3.75 3.75 3.75C3.33579 3.75 3 4.08579 3 4.5C3 4.91421 3.33579 5.25 3.75 5.25Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 12.75C4.16421 12.75 4.5 12.4142 4.5 12C4.5 11.5858 4.16421 11.25 3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 20.25C4.16421 20.25 4.5 19.9142 4.5 19.5C4.5 19.0858 4.16421 18.75 3.75 18.75C3.33579 18.75 3 19.0858 3 19.5C3 19.9142 3.33579 20.25 3.75 20.25Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 4.5H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 12H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 19.5H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    My Ads
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 "
                  >
                    <svg
                      className="w-6 h-6 mr-2 -ml-1 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 5.25C4.16421 5.25 4.5 4.91421 4.5 4.5C4.5 4.08579 4.16421 3.75 3.75 3.75C3.33579 3.75 3 4.08579 3 4.5C3 4.91421 3.33579 5.25 3.75 5.25Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 4.5H21"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 12L21 12"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 19L21 19"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.03711 8.90039L7.33496 8.90625C8.02995 8.93878 8.71525 9.09148 9.35938 9.3584C10.0953 9.66339 10.7636 10.1118 11.3252 10.6768H11.3242C12.4609 11.8137 13.0995 13.3553 13.0996 14.9629C13.0996 16.57 12.4612 18.1111 11.3252 19.248L11.3262 19.249C10.7668 19.8281 10.0972 20.2897 9.35742 20.6074C8.61759 20.9252 7.82177 21.0926 7.0166 21.0996C6.21151 21.1066 5.41314 20.9533 4.66797 20.6484C3.92273 20.3436 3.24515 19.8935 2.67578 19.3242C2.10654 18.755 1.65645 18.078 1.35156 17.333C1.08473 16.6809 0.934091 15.9876 0.905273 15.2852L0.900391 14.9844C0.907387 14.1793 1.07477 13.3833 1.39258 12.6436C1.71032 11.904 2.17198 11.235 2.75098 10.6758L3.24414 10.1826L3.31543 10.2539L4.15625 11.1006L4.22656 11.1719L4.15527 11.2422L3.73145 11.6582L3.73242 11.6592C2.98616 12.4054 2.51448 13.3822 2.39453 14.4307C2.27458 15.4792 2.51377 16.5371 3.07227 17.4326C3.63081 18.3281 4.4762 19.0087 5.4707 19.3623C6.46509 19.7158 7.55035 19.7226 8.54883 19.3809C9.54733 19.039 10.4007 18.3683 10.9697 17.4795C11.5387 16.5907 11.7901 15.5351 11.6826 14.4854C11.575 13.4355 11.1144 12.4532 10.377 11.6982C9.66593 10.9703 8.73756 10.4955 7.7334 10.3438V11.4854H6.34082V8.90039H7.03711ZM4.99707 11.9404L8.01953 14.9629L7.94922 15.0342L7.1084 15.875L7.03711 15.9453L4.01465 12.9229L3.94336 12.8525L4.92578 11.8701L4.99707 11.9404Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0.2"
                      />
                    </svg>
                    History
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 "
                  >
                    <Add className="w-6 h-6 mr-2 -ml-1 text-gray-600" />
                    {/* <svg
                      className="w-6 h-6 mr-2 -ml-1 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg> */}
                    Create New Ad
                  </a>
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
                  Trade Stellar Assets & Tokens Seamlessly
                </h1>
                <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                  An optimized decentralized P2P crypto exchange designed to
                  facilitate the seamless trading of Stellar assets and tokens
                  against several fiat currencies.
                </p>
              </div>
            </div>

            <div className="px-4 mx-auto mt-8 pb-20  max-w-7xl">
              <div className="w-full pb-1 overflow-x-auto">
                <div className=" flex items-center">
                  <PairedButton isBuy={isBuy} setIsBuy={setIsBuy} />
                </div>
              </div>

              <div className="w-full pb-1 overflow-x-auto">
                <div className="border-b border-gray-200 flex items-center">
                  <nav className="flex -mb-px  space-x-10">
                    <a
                      href="#"
                      className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      XLM
                    </a>

                    <a
                      href="#"
                      className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      USDT
                    </a>

                    <a
                      href="#"
                      className="py-4 text-sm font-medium text-orange-600 transition-all duration-200 border-b-2 border-orange-600 whitespace-nowrap"
                    >
                      {" "}
                      USDC
                    </a>

                    <a
                      href="#"
                      className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      BTC
                    </a>

                    <a
                      href="#"
                      className="py-4 text-sm font-medium text-gray-500 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                    >
                      {" "}
                      ETH
                    </a>
                  </nav>
                  <div className="flex-1 hidden max-w-xs ml-auto lg:block">
                    <label for="" className="sr-only">
                      {" "}
                      Search{" "}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>

                      <input
                        type="search"
                        name=""
                        id=""
                        className="border block w-full py-2 pl-10 border-gray-300 rounded-lg sm:text-sm"
                        placeholder="Search here"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 md:block hidden  ">
                <div className="px-4  sm:px-6  ">
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="col-span-2 flex md:flex-col md:items-start items-center justify-between">
                      <p className="text-base font-base text-gray-900">
                        BUY FROM
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-base font-base text-gray-900">
                        PAYMENT
                      </p>
                    </div>

                    <div className="col-span-2">
                      <p className="text-base font-base text-gray-900">PRICE</p>
                    </div>
                  </div>
                </div>
              </div>
              {isBuy &&
                trades?.map((trade) => (
                  <TradeBuy key={trade?.id} trade={trade} />
                ))}
              {!isBuy &&
                trades?.map((trade) => (
                  <TradeSell key={trade?.id} trade={trade} />
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

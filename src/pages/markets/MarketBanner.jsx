import { MedalStar, Status, Timer1 } from "iconsax-react";
import PriceInfoCard from "./PriceInfoCard";
import { Link, NavLink } from "react-router-dom";

export default function MarketBanner({ market }) {
  return (
    <Link
      key={market?.id}
      className="py-12  sm:py-16 lg:py-20"
      // to={`/projects/${getProjectId("StellarJar")}`}
    >
      <div className="px-0  mx-auto max-w-7xl ">
        <div className="mx-auto mt-8 overflow-hidden bg-white shadow-md shadow-gray-300  sm:mt-10 rounded-lg hover:-translate-y-1">
          <div className="relative px-6 pt-12 md:py-10 md:px-8 lg:py-5 md:flex md:items-center md:justify-between">
            {/* LEFT DIV */}
            <div className="relative text-center md:text-left md:pl-8 lg:pl-0 md:w-2/3">
              <p className="text-2xl font-bold text-gray-900 mb-3">
                {market?.title}
              </p>
              <p className="text-lg font-normal leading-relaxed text-gray-700 font-pj">
                {market?.description}
              </p>
              <NavLink
                to={market?.path}
                className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold text-white transition-all duration-200 bg-orange-600 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-90 rounded-sm"
              >
                {market?.buttonLabel}
              </NavLink>
            </div>

            {/* RIGHT DIV */}
            <div className="mt-8 md:mt-0 md:w-1/2 md:flex md:justify-end">
              {/* <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 ">
                  <div className="overflow-hidden text-gray-800  border border-orange-500 rounded-xl">
                    <div className="p-4">
                      <div className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-8 h-8 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                          />
                        </svg>
                        <div className="ml-8">
                          <p className="text-3xl font-bold  font-pj">1,394</p>
                          <p className="mt-3 text-lg font-normal leading-tight text-gray-700 font-pj">
                            Successful P
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden text-gray-800  border border-orange-500 rounded-xl">
                    <div className="p-4">
                      <div className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-8 h-8 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        <div className="ml-8">
                          <p className="text-3xl font-bold font-pj">477</p>
                          <p className="mt-3 text-lg font-normal leading-tight text-gray-700 font-pj">
                            Happy Clients
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden text-gray-800  border border-orange-500 rounded-xl">
                    <div className="p-3">
                      <div className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-8 h-8 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <div className="ml-8">
                          <p className="text-3xl font-bold  font-pj">~10K</p>
                          <p className="mt-3 text-lg font-normal leading-tight text-gray-700 font-pj">
                            Monthly Visitors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden text-gray-800 border border-orange-500 rounded-xl">
                    <div className="p-4">
                      <div className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-8 h-8 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                          />
                        </svg>
                        <div className="ml-8">
                          <p className="text-3xl font-bold font-pj">3k</p>
                          <p className="mt-3 text-lg font-normal leading-tight text-gray-700 font-pj">
                            Email Subscribers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="grid grid-cols-2">
                <div className="pt-4 pb-4 pr-4 pl-4">
                  <p className="text-2xl font-medium tracking-tight text-orange-600">
                    15+
                  </p>
                  <h3 className="mt-3 text-base font-medium text-gray-700">
                    Total Buy Offers
                  </h3>
                </div>

                <div className=" border-l border-gray-200  p-4">
                  <p className="text-2xl font-medium tracking-tight text-orange-600">
                    10+
                  </p>
                  <h3 className="mt-3 text-base font-medium text-gray-700">
                    Total Sell Offers
                  </h3>
                </div>

                <div className="p-4 border-t border-gray-200 ">
                  <p className="text-2xl font-medium tracking-tight text-orange-600">
                    1300+
                  </p>
                  <h3 className="mt-3 text-base font-medium text-gray-700">
                    Traded Volume
                  </h3>
                </div>

                <div className="p-4 border-t border-l border-gray-200 ">
                  <p className="text-2xl font-medium tracking-tight text-orange-600">
                    7+
                  </p>
                  <h3 className="mt-3 text-base font-medium text-gray-700">
                    Active Traders
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

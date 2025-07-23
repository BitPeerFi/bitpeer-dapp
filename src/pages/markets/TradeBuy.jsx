import { MedalStar, Status, Timer1 } from "iconsax-react";
import PriceInfoCard from "./PriceInfoCard";

export default function TradeBuy({ trade }) {
  return (
    <div
      key={trade?.id}
      className="mt-2 overflow-hidden bg-white border border-green-200 shadow-md rounded-xl"
    >
      <div className="px-4 py-5 sm:p-6 ">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
          <div className=" col-span-2 flex md:flex-col md:items-start items-center justify-between">
            <p className="text-base font-bold text-gray-900">
              {trade?.username}
            </p>

            <div className="flow-root md:mt-4">
              <div className="-my-5 divide-y divide-gray-100">
                <div className="py-5">
                  <div className="flex items-center">
                    <div className="relative flex-shrink-0">
                      <Status
                        className="text-gray-600 h-8 w-auto"
                        variant="Bold"
                      />
                    </div>

                    <div className="ml-4">
                      <div className="flex items-center gap-3">
                        {" "}
                        <div className="text-sm flex gap-1 items-center  text-gray-900">
                          Trades:{" "}
                          <span className="font-bold">
                            {trade?.stats?.trades}
                          </span>
                        </div>
                        <div className="text-sm  text-gray-900">
                          <div className="flex gap-1 items-center">
                            <svg
                              className="text-green-600 h-[22px] w-auto"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 1L14.4697 8.60081H22.4616L15.996 13.2984L18.4656 20.8992L12 16.2016L5.53436 20.8992L8.00402 13.2984L1.53838 8.60081H9.53035L12 1Z"
                                fill="currentColor"
                              />
                            </svg>

                            <span className="font-bold">
                              {trade?.stats?.rating}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-500">
                        Avg Completion Time:{" "}
                        <span className="font-bold"> {trade?.stats?.time}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex items-start  flex-wrap  gap-x-1">
            {trade?.payment?.map((payment, index) => (
              <span
                key={index}
                className="text-base font-semibold  text-gray-900"
              >
                {payment}
                {index < trade.payment.length - 1 && ","}
              </span>
            ))}
          </div>

          <div className="col-span-2">
            {" "}
            <PriceInfoCard trade={trade} />
          </div>

          <div className="col-span-1 mt-4 sm:mt-0 hidden md:block">
            <button
              type="button"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold leading-4 text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-orange-500"
            >
              Buy USDC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

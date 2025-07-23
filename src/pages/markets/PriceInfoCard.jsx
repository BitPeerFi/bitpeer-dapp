import React from "react";

export default function PriceInfoCard({ trade }) {
  return (
    <div className=" md:max-w-xs  w-full   space-y-2 text-gray-800">
      <div className="text-xl font-semibold">
        {trade?.trade?.price}{" "}
        <span className="text-sm text-gray-500 font-normal">USD</span>
      </div>

      <div className="flex justify-between w-full ">
        <div>
          {" "}
          <div className="text-sm pt-2">
            <span className="text-gray-500">Amount:</span>{" "}
            <span className="font-semibold">{trade?.trade?.amount}</span>{" "}
            <span className="text-gray-500">USDC</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Trade limit:</span>{" "}
            <span className="font-semibold">{trade?.trade?.limitMin}</span>{" "}
            <span className="text-gray-500">USDC → </span>
            <span className="font-semibold">{trade?.trade?.limitMax}</span>{" "}
            <span className="text-gray-500">USDC</span>
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold leading-4 text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-orange-500"
          >
            Buy XLM
          </button>
        </div>
      </div>
    </div>
  );
}

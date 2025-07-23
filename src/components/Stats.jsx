import React from "react";

const Stats = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto text-center md:gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20 sm:text-left">
          <div className="pb-8 transition-all duration-200 border-b-2 border-gray-200 ">
            <p className="text-5xl font-semibold tracking-tight text-orange-600">
              36K+
            </p>
            <h3 className="mt-3 text-base font-medium text-gray-500">
              Satisfied global clients
            </h3>
          </div>

          <div className="pb-8 transition-all duration-200 border-b-2 border-gray-200 ">
            <p className="text-5xl font-semibold tracking-tight text-orange-600">
              79%
            </p>
            <h3 className="mt-3 text-base font-medium text-gray-500">
              Download total range
            </h3>
          </div>

          <div className="pb-8 transition-all duration-200 border-b-2 border-gray-200 ">
            <p className="text-5xl font-semibold tracking-tight text-orange-600">
              64K+
            </p>
            <h3 className="mt-3 text-base font-medium text-gray-500">
              Finishing success projects
            </h3>
          </div>

          <div className="pb-8 transition-all duration-200 border-b-2 border-gray-200 ">
            <p className="text-5xl font-semibold tracking-tight text-orange-600">
              25+
            </p>
            <h3 className="mt-3 text-base font-medium text-gray-500">
              Branding awards winning
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from "react";

const LoadingSpinner = ({ count = 8 }) => {
  return (
    <div className="max-w-[1440px] mx-auto  py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="card bg-base-100 border border-gray-200 shadow-md transition-transform"
        >
          <figure className="h-48 overflow-hidden p-5 mt-5 rounded-md">
            <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[670px] skeleton rounded-md"></div>
          </figure>

          <div className="card-body">
            <h2 className="card-title skeleton h-6 w-2/3 rounded"></h2>

            <div className="flex justify-between mt-3">
              <div className="skeleton h-6 w-20 rounded-md"></div>
              <div className="skeleton h-6 w-20 rounded-md"></div>
            </div>

            <div className="btn mt-5 skeleton h-10 w-full rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;

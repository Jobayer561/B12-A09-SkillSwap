import React from "react";

const HowItWork = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-2 py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-blue-600">
              1
            </div>
            <h3 className="text-xl font-semibold mt-4">Find a Skill</h3>
            <p className="text-gray-600 mt-2">
              Explore hundreds of skills offered by expert providers.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-blue-600">
              2
            </div>
            <h3 className="text-xl font-semibold mt-4">Book a Session</h3>
            <p className="text-gray-600 mt-2">
              Pick an available slot and reserve your learning session.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-blue-600">
              3
            </div>
            <h3 className="text-xl font-semibold mt-4">Join & Learn</h3>
            <p className="text-gray-600 mt-2">
              Attend the session and learn directly from skilled mentors.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 transition-transform">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-blue-600">
              4
            </div>
            <h3 className="text-xl font-semibold mt-4">Rate & Improve</h3>
            <p className="text-gray-600 mt-2">
              Rate your provider and continue upgrading your skills over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

import React from "react";

const TopRatedProviders = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-bold my-6">Top Rated Providers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://creatorworldd.com/wp-content/uploads/2024/12/FB_IMG_1734106780258-1024x1024.jpg"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Provider"
            />
            <h3 className="text-xl font-bold mt-3">Jhankar Mahbub</h3>
            <p className="text-gray-500">Web Development</p>
            <p className="font-semibold text-green-600 mt-1">5500 tk</p>

            <p className="text-sm text-gray-600 mt-2">Experience: 8 Years</p>
            <p className="text-sm text-gray-600">Sessions: 500+</p>
            <p className="text-yellow-500 font-semibold mt-1">⭐ 4.9 Rating</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Provider"
            />
            <h3 className="text-xl font-bold mt-3">Lina Rahman</h3>
            <p className="text-gray-500">Health & Fitness</p>
            <p className="font-semibold text-green-600 mt-1">2700 tk</p>

            <p className="text-sm text-gray-600 mt-2">Experience: 5 Years</p>
            <p className="text-sm text-gray-600">Students: 95+</p>
            <p className="text-yellow-500 font-semibold mt-1">⭐ 4.9 Rating</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Provider"
            />
            <h3 className="text-xl font-bold mt-3">Alex Martin</h3>
            <p className="text-gray-500">Music</p>
            <p className="font-semibold text-green-600 mt-1">5000 tk</p>

            <p className="text-sm text-gray-600 mt-2">Experience: 6 Years</p>
            <p className="text-sm text-gray-600">Students: 80+</p>
            <p className="text-yellow-500 font-semibold mt-1">⭐ 4.8 Rating</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1579865346865-9223701ba92e"
              className="w-28 h-28 object-cover rounded-full mx-auto"
              alt="Provider"
            />
            <h3 className="text-xl font-bold mt-3">Emily Carter</h3>
            <p className="text-gray-500">Culinary Arts</p>
            <p className="font-semibold text-green-600 mt-1">2200 tk</p>

            <p className="text-sm text-gray-600 mt-2">Experience: 4 Years</p>
            <p className="text-sm text-gray-600">Cakes Made: 300+</p>
            <p className="text-yellow-500 font-semibold mt-1">⭐ 4.7 Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;

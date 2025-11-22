import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div className="min-h-80 md:min-h-[400px] lg:min-h-[480px] flex justify-center items-center bg-gray-100">
      <div className="max-w-xl w-full mx-4">
        <section className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          {loading ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <ClockLoader size={80} color="green" />
              <p className="text-gray-600">Loading profile...</p>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto object-cover"
              />

              <div>
                <h1 className="text-sm sm:text-xl font-semibold">
                  Name: {user?.displayName || "No Display Name"}
                </h1>
                <h2 className="text-sm sm:text-lg">Email: {user?.email}</h2>
              </div>
            </div>
          )}
          <Link
            to={"/updateProfile"}
            className="btn w-1/2 bg-secondary text-white mt-6"
          >
            Update Profile
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Profile;

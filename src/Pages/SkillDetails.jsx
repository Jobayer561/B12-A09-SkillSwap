import React from "react";
import UseSkill from "../hooks/UseSkill";
import { Link, useParams } from "react-router";
import toast from "react-hot-toast";
import { CircleLoader } from "react-spinners";
import SkillError from "./SkillError";

const SkillDetails = () => {
  const { id } = useParams();
  const { skills, loading } = UseSkill();
  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <CircleLoader size={80} color="green" />
      </div>
    );
  }

  const skill = skills?.find((s) => String(s.skillId) === id);
  console.log(skill);
  if (!skill) {
    return <SkillError />;
  }
  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skill || {};

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Session Booked Successfully!");
    e.target.reset();
  };
  return (
    <div className="">
      <div className="max-w-[1440px]  mx-auto px-6 py-8  text-gray-950 ">
        <div className="w-full max-w-6xl mx-auto rounded-2xl p-4 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 ">
            <div className="lg:w-1/2">
              <img
                src={image}
                alt={skillName}
                className="w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] object-cover object-center rounded-2xl"
              />
            </div>

            <div className="lg:w-1/2 mt-8 md:mt-0 rounded-2xl p-6">
              <h1 className="text-2xl md:text-4xl font-bold text-center primary mb-4 animate-pulse">
                {skillName}
              </h1>

              <p className="text-cyan-400 text-center text-xl font-semibold max-w-3xl mx-auto mb-8">
                {description}
              </p>

              <div className="flex flex-col items-center gap-6 font-semibold text-amber-700/80">
                <p>
                  <span className="font-bold text-indigo-500">
                    Slot Available :
                  </span>{" "}
                  {slotsAvailable}
                </p>
                <p>
                  <span className="font-bold text-indigo-500">
                    ProviderName :{" "}
                  </span>{" "}
                  {providerName}
                </p>
                <p>
                  <span className="font-bold text-indigo-500 whitespace-nowrap">
                    ProviderEmail :{" "}
                  </span>{" "}
                  {providerEmail}
                </p>
                <p>
                  <span className="font-bold text-indigo-500">Price : </span>{" "}
                  {price} tk
                </p>
                <p>
                  <span className="font-bold text-indigo-500">Rating : </span>{" "}
                  ⭐ {rating}
                </p>
                <p>
                  <span className="font-bold text-indigo-500">Category : </span>{" "}
                  {category}
                </p>
              </div>
            </div>
          </div>
          <div className="py-12 max-w-xl mx-auto">
            <h2 className="font-semibold text-4xl text-center">Book Session</h2>

            <form onSubmit={handleBook} className="my-4">
              <label className="block mb-1 text-sm font-medium">Name</label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                className="input input-info w-full "
              />
              <label className="block mb-1 mt-2 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="input input-info w-full  "
              />

              <div className="flex sm:flex-row flex-col items-center gap-4 justify-center mt-4">
                <button
                  type="submit"
                  className="btn bg-secondary sm:w-1/3 w-full text-white"
                >
                  Book a Session
                </button>
                <Link
                  to="/"
                  className="btn bg-primary sm:w-1/3 w-full text-white"
                >
                  Go Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

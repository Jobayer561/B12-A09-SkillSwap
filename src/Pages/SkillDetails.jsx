import React from "react";
import UseSkill from "../hooks/UseSkill";
import { useParams } from "react-router";

const SkillDetails = () => {
  const { id } = useParams();
  const { skills, loading } = UseSkill();
  if (loading) {
    return <p>Loading...</p>;
  }
  const skill = skills?.find((s) => String(s.skillId) === id);
  console.log(skill);
  const {
    skillId,
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
  console.log(
    skillId,
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category
  );
  return (
    <div className="">
      <div className="max-w-[1440px]  mx-auto px-4 py-8  text-gray-950 ">
        <div className="w-full max-w-6xl mx-auto rounded-2xl p-2 overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 ">
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
                  Provider NAME :{" "}
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
                <span className="font-bold text-indigo-500">Rating : </span> ⭐{" "}
                {rating}
              </p>
              <p>
                <span className="font-bold text-indigo-500">Category : </span>{" "}
                {category}
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

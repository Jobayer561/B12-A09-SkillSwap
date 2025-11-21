import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillsCard = ({ skill, index }) => {
  const { skillName, price, rating, image, skillId } = skill;
  return (
    <div className="">
      <div className="">
        <div
          className={`card bg-base-100 border border-gray-200 shadow-md hover:scale-105 transition-transform
                  animate__animated animate__fadeInUp`}
          style={{ animationDelay: `${index * 0.7}s` }}
        >
          <figure className="h-48 overflow-hidden p-5 mt-5 rounded-md">
            <img
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[670px] object-cover shadow-lg rounded-md"
              src={image}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{skillName}</h2>

            <div className="flex justify-between">
              <div className="flex items-center gap-1 text-[#00D390] px-2 py-2 w-1/4 bg-[#F1F5E8] justify-center font-semibold rounded-md">
                {price}tk
              </div>
              <div className="flex items-center gap-1 text-[#FF8811] px-2 py-2 w-1/4 bg-[#FFF0E1] justify-center font-semibold rounded-md">
                <FaStar />
                {rating}
              </div>
            </div>
            <Link to={`/skill/${skillId}`} className="btn btn-primary mt-5">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

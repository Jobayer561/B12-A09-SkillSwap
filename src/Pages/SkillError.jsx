import React from "react";
import errorSkill from "../assets/Skill-Error.png";

import { Link } from "react-router";
const SkillError = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center py-12 px-4">
        <img className="h-[300px]" src={errorSkill} alt="" />
        <h1 className="text-3xl md:text-5xl font-semibold mb-3 mt-8">
          Oops, Skill not found!
        </h1>
        <p className="text-gray-500 mb-3">
          The Skill you are requesting is not found on our system. please try
          another Skill
        </p>
        <Link to="/" className="btn bg-green-500 text-white">
          Go Back
        </Link>
      </div>
    </>
  );
};

export default SkillError;

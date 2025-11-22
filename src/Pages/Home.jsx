import React from "react";
import SwiperHome from "./SwiperHome";
import UseSkill from "../hooks/UseSkill";
import SkillsCard from "./SkillsCard";
import TopRatedProviders from "./TopRatedProviders";
import HowItWork from "./HowItWork";
import SuccessStories from "./SuccessStories";
import LoadingSpinner from "./LoadingSpinner";
import { CircleLoader } from "react-spinners";
const Home = () => {
  const { skills, loading } = UseSkill();

  return (
    <div className="pb-10">
      <div className="bg-linear-to-r  from-gray-100 to-gray-200">
        {loading ? (
          <div className="max-w-7xl mx-auto h-[90vh] flex justify-center items-center">
            <CircleLoader size={80} color="green" />
          </div>
        ) : (
          <SwiperHome />
        )}

        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-2xl md:text-4xl text-center font-bold my-10">
            Popular Skills
          </h2>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
              {skills.map((skill, index) => (
                <SkillsCard
                  key={skill.skillId}
                  skill={skill}
                  loading={loading}
                  index={index}
                />
              ))}
            </div>
          )}
          <TopRatedProviders />
          <HowItWork />
          <SuccessStories />
        </div>
      </div>
    </div>
  );
};

export default Home;

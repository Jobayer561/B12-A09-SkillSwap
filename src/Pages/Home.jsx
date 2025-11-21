import React from "react";
import SwiperHome from "./SwiperHome";
import UseSkill from "../hooks/UseSkill";
import SkillsCard from "./SkillsCard";
import TopRatedProviders from "./TopRatedProviders";
import HowItWork from "./HowItWork";

const Home = () => {
  const { skills, loading } = UseSkill();

  return (
    <div className="pb-10">
      <div className="bg-linear-to-r  from-gray-100 to-gray-200">
        <SwiperHome />

        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-semibold my-10">
            Popular Skills
          </h2>
          {loading ? (
            <h1>Loading...</h1>
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
          <HowItWork/>
        </div>
      </div>
    </div>
  );
};

export default Home;

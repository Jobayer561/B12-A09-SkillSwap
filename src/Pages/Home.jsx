import React from "react";
import SwiperHome from "./SwiperHome";
import UseSkill from "../hooks/UseSkill";
import SkillsCard from "./SkillsCard";

const Home = () => {
  const { skills, loading } = UseSkill();

  return (
    <div>
      <div className="">
        <SwiperHome />

        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-semibold mb-10">
            Popular Skills
          </h2>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            skills.map((skill, index) => (
              <SkillsCard
                key={skill.skillId}
                skill={skill}
                loading={loading}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import UseSkill from '../hooks/UseSkill'
import { useParams } from 'react-router';

const SkillDetails = () => {
    const {id} = useParams();
    const {skills,loading} = UseSkill();
if(loading){
    return <p>Loading...</p>
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
    <div>SkillDetails</div>
  )
}

export default SkillDetails
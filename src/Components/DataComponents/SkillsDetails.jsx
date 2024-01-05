import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skillsDetails } from "../../Redux/Actions";
import SkillsData from "./SavedData/SkillsData";

const SkillsDetails = () => 
{
  const dispatch = useDispatch();
  const data = useSelector((state) => state.skills);
  const [skill, setSkill] = useState([{ skillName: "",proficiency: "",}]);

  const setSkillFields = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...skill];
    updatedSkills[index][name] = value;
    setSkill(updatedSkills);
  };

  const addSkill = () => {
    setSkill([
      ...skill,
      {
        skill: "",
        proficiency: "",
      },
    ]);
  };

  const onSubmit = () => {
    dispatch(skillsDetails(skill));
    console.log("Submitted");
  };

  return (
    <div id="skills" className="bg-transparent">
      <div className="container my-3 p-4 text-sm bg-black rounded-2xl">
        {data && <SkillsData/>}
        {skill.map((s,index)=>(
        <div key={index} className="bg-transparent my-3">
          
          <div className="flex col-3 gap-2 bg-transparent">
            <input
              type="text"
              placeholder={`Skill ${index+1}:`}
              name="skill"
              className="border-2 border-sky-400 lg:w-[30%] p-3 rounded-2xl my-2"
              onChange={(e) => setSkillFields(index,e)}
              value={skill[index].skill}
            />

            <input
              type="text"
              placeholder="Proficiency in %"
              name="proficiency"
              className="border-2 border-sky-400 w-[30%] p-3 rounded-2xl my-2"
              onChange={(e) => setSkillFields(index,e)}
              value={skill[index].proficiency}
            />
          </div>
        </div>
        ))}

        <button
          className="bg-sky-400 text-black p-3 mx-2 font-bold rounded-2xl hover:bg-red-400 w-[200px] my-3"
          onClick={addSkill}
        >
          Add More Skill
        </button>

        <button
          className="flex justify-center items-center border-2 border-sky-400 w-full 
                         bg-green-600 p-3 my-3 font-bold rounded-2xl 
                         hover:bg-sky-400 hover:text-black"
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SkillsDetails;

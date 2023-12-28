import React from "react";
import { useSelector } from "react-redux";

const SkillsData = () => {
  const data = useSelector((state) => state.skills);
  console.log("Skills: ", data);
  return (
    <div>
      <div className="flex items-center">
        <h1>Skills :</h1>
        {data.map((s, i) => (
          <h1
            key={i}
            className="bg-orange-400 font-bold text-black p-3 mx-2 rounded-2xl border-2 border-white"
          >
            {s.skill} - {s.proficiency}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SkillsData;

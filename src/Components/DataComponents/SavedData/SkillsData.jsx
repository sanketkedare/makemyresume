import React from "react";
import { useSelector } from "react-redux";

const SkillsData = () => {
  const data = useSelector((state) => state.skills);
  console.log("Skills: ", data);
  return (
    <div className="flex items-center bg-transparent lg:h-[50px] h-[100px] overflow-x-auto">
      <div className="flex items-center bg-transparent">
        <h1 className="bg-transparent">Skills :</h1>
        {data.map((s, i) => (
          <h1
            key={i}
            className="bg-orange-400 font-bold text-black p-3 mx-2 rounded-2xl border-2 border-white w-auto"
          >
            {s.skill}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SkillsData;

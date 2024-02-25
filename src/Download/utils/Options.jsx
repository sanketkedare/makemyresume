import React from "react";

const Options = ({question,data,fun}) => 
{

  return (
    <div
      className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${data ? "bg-green-400" : "bg-red-400"}`}
    >
      <h1 className="w-[80%] bg-transparent text-black font-bold">
        {question}
      </h1>
      <label className="bg-transparent text-black font-bold">
        <input
          type="radio"
          value="yes"
          checked={data}
          onChange={() => fun(true)}
        />
        Yes
      </label>
      <label className="bg-transparent text-black font-bold">
        <input
          type="radio"
          value="no"
          checked={!data}
          onChange={() => fun(false)}
        />
        No
      </label>
    </div>
  );
};

export default Options;

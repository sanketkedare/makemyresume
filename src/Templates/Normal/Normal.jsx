import React from "react";
import Main from "./Main";

const Normal = () => {
  return (
    <div className=" mx-auto  mt-4 lg:mr-6 p-3 flex items-center justify-center ">
      <div className="h-[500px] w-[360px] overflow-hidden border-2 bg-white border-black p-1 z-10 flex">
        <Main />
      </div>
    </div>
  );
};

export default Normal;

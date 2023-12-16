import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeProcess = () => {
  return (
    <div>
      {/* Proccess */}
      <div className=" m-5  border-2 border-sky-600 p-10 rounded-2xl lg:w-[98vw] w-[110vw] ">
        <h1 className="text-white text-center font-bold text-[40px] my-10">
          How to use ?
        </h1>
        <br />
        <div className="lg:flex text-white justify-evenly items-center grid">
          <div className="h-[200px] w-[200px] bg-gradient-to-r from-violet-800 to-blue-600 border-2 border-white p-3 rounded-full flex justify-center items-center text-xl font-bold">
            <h1 className="text-white bg-transparent">Fill Your Details</h1>
          </div>
          <FaLongArrowAltRight />

          <div className="h-[200px] w-[200px] bg-gradient-to-r from-blue-600 to-red-700 border-2 border-white p-3 rounded-full flex justify-center items-center text-xl font-bold">
            <h1 className="text-white bg-transparent">Select Template</h1>
          </div>
          <FaLongArrowAltRight />
          <div className=" h-[200px] w-[200px] bg-gradient-to-r from-red-800 to-yellow-600 border-2 border-white p-3 rounded-full flex justify-center items-center text-xl font-bold">
            <h1 className="text-white bg-transparent text-center">
              Download Resume{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProcess;

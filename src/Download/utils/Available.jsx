import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Available = () => {
    const data = useSelector((state) => state.basic.name);

  return (
    <div
      className="flex justify-between items-center w-full my-4
                          border-2 border-green-500 p-2 rounded-xl bg-green-400"
    >
      <h1 className="bg-transparent text-black font-bold">Available Data :</h1>
      <div className="flex bg-inherit items-center">
        <h1 className="bg-transparent text-black font-bold">
          {data ? data: "No Data Available"}
        </h1>

        <Link to={"/details"} className="bg-inherit flex items-center">
          <div className="ml-3 bg-inherit h-[30px] my-auto">
            <button className="bg-black w-full px-3 rounded-2xl hover:bg-red-600 hover:text-white hover:border-black border-2 h-full">
              Edit
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Available;

/*eslint-disable*/

import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[100px] shadow-inner">

      {/* Main Navbar */}

      <div className="lg:flex justify-between py-1 p-3 bg-blue-900 shadow-inner lg:h-15 lg:px-6  top-0 z-10 w-full rounded-b-xl">

        <h1 className="flex lg:justify-center items-center lg:text-lg my-1 font-bold lg:p-3 text-center bg-inherit border-2 border-white rounded-xl">
          <TfiWrite className="mx-4 bg-transparent" />
          Make My Resume
        </h1>

        <div className=" bg-blue-900">
          <div className="flex justify-center items-center h-[100%] bg-blue-900">

            <h3 className="text-center lg:text-sm text-[10px] font-bold  bg-blue-900">
              "Hey, You are using{" "}<span className="text-green-400 lg:text-sm bg-blue-900">Demo Mode</span>..!!"
            </h3>

            <Link to={"/"} className="bg-inherit ">
              <button className="rounded-xl font-bold px-4 p-2 mx-5 bg-sky-500 text-black hover:bg-green-500 border-2 border-black">
                Go To Home
              </button>
            </Link>

          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;

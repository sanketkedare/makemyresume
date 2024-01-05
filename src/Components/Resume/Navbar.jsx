/*eslint-disable*/

import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { HiOutlineTemplate } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => 
{
  const data = useSelector((state)=>state.basic.name);

  return (
    <div className="h-[90px] shadow-inner bg-transparent text-white">

      {/* Main Navbar */}

      <div className="lg:flex justify-between py-1 p-3 bg-blue-900 shadow-inner lg:h-15 lg:px-6  top-0 z-10 w-full rounded-b-xl">

        <h1 className="flex lg:justify-center items-center lg:text-lg my-1 font-bold lg:p-3 text-center bg-inherit  rounded-xl">
          <TfiWrite className="mx-4 bg-transparent" />
          Make My Resume
        </h1>

        <div className=" bg-blue-900">
          <div className="flex justify-center items-center h-[100%] bg-blue-900">

            <h3 className="text-center lg:text-sm text-[10px] font-bold  bg-blue-900">
              "Hey, You are using{" "}<span className="text-green-400 lg:text-sm bg-blue-900">Demo Mode</span>..!!"
            </h3>

            <Link to={"/"} className="bg-inherit flex ">
              <button className="flex items-center rounded-xl font-bold p-2 mx-5 bg-sky-500 text-black hover:bg-green-500 border-2 border-black">
                <FaHome className="bg-inherit" />
              </button>
              
            </Link>
            <Link to={"/create"} className="bg-inherit flex ">
              
              {data && <button className="flex items-center rounded-xl font-bold p-2  bg-sky-500 text-black hover:bg-green-500 border-2 border-black">
              <HiOutlineTemplate className="bg-inherit mr-1" />Create
              </button>}
            </Link>

          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;

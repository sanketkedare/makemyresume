import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

const HomeNav = () => {

  return (
    <>
      {/* Home Navbar */}
      <div className="lg:flex items-center justify-between w-full p-3 bg-black h-15 px-6 text-white fixed top-0">
        <h1 className="flex justify-center items-center lg:text-2xl text-3xl font-bold p-3 text-center">
          <TfiWrite className="mx-4" />
          Make My Resume
        </h1>
        <div className="flex lg:px-4 lg:text-lg text-center">
          <Link to={"/details"}>
            <button className="rounded-xl font-bold  p-4 hover:bg-sky-700 hover:text-gray-100 ">
              Make Resume
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeNav;

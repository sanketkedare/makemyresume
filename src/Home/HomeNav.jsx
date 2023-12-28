import React from "react";
import { TfiWrite } from "react-icons/tfi";

const HomeNav = () => {
  return (
    <>
      {/* Home Navbar */}
      <div className="flex w-full p-3 bg-black h-[70px] text-white">

        <h1 className="flex items-center lg:text-lg font-bold relative">
          <TfiWrite className="mx-4" />
          Make My Resume
        </h1>
      </div>
    </>
  );
};

export default HomeNav;

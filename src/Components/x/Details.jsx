import React, { useState, useEffect } from "react";
import Navbar from "../Resume/Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import BasicDetails from "./Pages/BasicDetails";
import Download from "./Pages/Download";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Extra from "./Pages/Extra";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

const Index = () => {
  const Progress = useSelector((state) => state.Progress);
  const currentPage = useSelector((state) => state.Page);

  useEffect(() => {}, [currentPage]);

  return (
    <div className="w-full">
      <Navbar />
      <Sidebar />
      <div className=" flex items-center w-3/4 h-[4vh] right-8 p-1 top-16 mt-3 shadow-inner bg-gray-100 border-2 border-black rounded-2xl fixed text-black">
        <p
          className="flex items-center justify-end p-2 text-[12px] rounded-2xl text-black bg-green-500 h-full"
          style={{ width: `${Progress}%` }}
        ></p>
        {`${Progress}`}%
      </div>
      <div className="p-5 px-10 w-3/4 h-[80vh] right-8 bottom-7 shadow-inner bg-gray-300 rounded-2xl fixed text-black">
        {currentPage === "BasicDetails" && <BasicDetails />}
        {currentPage === "Download" && <Download />}
        {currentPage === "Education" && <Education />}
        {currentPage === "Experience" && <Experience/>}
        {currentPage === "Extra" && <Extra/>}
        {currentPage === "Projects" && <Projects/>}
        {currentPage === "Skills" && <Skills/>}
      </div>
    </div>
  );
};

export default Index;

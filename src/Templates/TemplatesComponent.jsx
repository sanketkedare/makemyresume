import React, { useEffect, useState } from "react";
import Navbar from "../Components/Resume/Navbar";
import "./templates.css";
import { useDispatch, useSelector } from "react-redux";
import { seTemplate } from "../Redux/Actions";

import Protemplate from "../Images/Templates/Pro.jpg";
import Nrmaltemplate from "../Images/Templates/Normal.jpg";
import Ninjamplate from "../Images/Templates/Ninja.jpg";
import { Link } from "react-router-dom";

const TemplatesComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.basic.name);
  const [path, setPath] = useState("/details");

  const selectedTemplate = (template) => {
    dispatch(seTemplate(template));

    if (!data.length > 0) {
      alert(
        "No data availavailable.. redirecting towards 'Basic details' page...."
      );
    }
  };

  useEffect(() => {
    if (data.length > 0) setPath("/create");
    console.log(path);
  }, [path]);

  return (
    <div id="templates" className=" lg:h-[100vh]  w-full fixed">
      <Navbar />

      {/* Resume Selection */}
      <div
        id="template"
        className="border-2 p-3 border-white lg:w-[99%] w-[95%] m-auto rounded-2xl overflow-y-auto"
      >
        <div className="lg:flex ">
          {/* Normal Resumse */}
          <div className="flex items-center">
            <span className="mr-2 border-2 border-yellow-400 p-3 rounded-r-full bg-orange-500 text-black font-bold w-[100px]">
              Normal:
            </span>
            <hr className="w-full" />
          </div>

          <div className="h-[50vh] overflow-x-auto flex items-center px-3 p-2 justify-center">
            {/* Templates Cousal */}
            <div className="flex gap-6 p-3">
              <div className="w-[200px] h-[300px] border-2 border-white rounded-xl">
                <div className="h-[90%] flex justify-center items-center">
                  <img
                    src={Nrmaltemplate}
                    className="w-[100%] h-[100%] overflow-hidden p-2"
                    alt="Normal"
                  />
                </div>

                <Link to={path}>
                  <button
                    className="w-full h-[10%] rounded-md font-bold bg-sky-400 text-black relative"
                    onClick={() => selectedTemplate("Normal")}
                  >
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Ninja Resumes */}
          <div className="flex items-center">
            <span className="mr-2 border-2 border-yellow-400 p-3 rounded-r-full bg-orange-500 text-black font-bold w-[100px]">
              Ninja
            </span>
            <hr className="w-full" />
          </div>

          <div className="h-[50vh] overflow-x-auto flex items-center justify-center px-3 p-2">
            {/* Templates Cousal */}
            <div className="flex gap-6 p-3">
              <div className="w-[200px] h-[300px] border-2 border-white rounded-xl">
                <div className="h-[90%] flex justify-center items-center">
                  <img
                    src={Ninjamplate}
                    className="w-[100%] h-[100%] overflow-hidden p-2"
                    alt="Normal"
                  />
                </div>

                <Link to={path}>
                  <button
                    className="w-full h-[10%] rounded-md font-bold bg-sky-400 text-black relative"
                    onClick={() => selectedTemplate("Ninja")}
                  >
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pro Resumes */}
          <div className="flex items-center">
            <span className="mr-2 border-2 border-yellow-400 p-3 rounded-r-full bg-orange-500 text-black font-bold w-[100px]">
              Pro
            </span>
            <hr className="w-full" />
          </div>

          <div className="h-[50vh] overflow-x-auto flex items-center justify-center px-3 p-2">
            {/* Templates Cousal */}
            <div className="flex gap-6 p-3">
              <div className="w-[200px] h-[300px] border-2 border-white rounded-xl">
                <div className="h-[90%] flex justify-center items-center">
                  <img
                    src={Protemplate}
                    className="w-[100%] h-[100%] overflow-hidden p-2"
                    alt="Normal"
                  />
                </div>

                <Link to={path}>
                  <button
                    className="w-full h-[10%] rounded-md font-bold bg-sky-400 text-black relative"
                    onClick={() => selectedTemplate("Pro")}
                  >
                    Download
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesComponent;

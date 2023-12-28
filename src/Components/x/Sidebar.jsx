import React from "react";
import "../../src/App.css";
import { useDispatch, useSelector } from "react-redux";
import { fillDetailsOf } from "../../Redux/Actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Page);

  const setPage = (pageName) => {
    dispatch(fillDetailsOf(pageName));
    console.log(page);
  };

  console.log(page);
  return (
    <>
      {/* Side Bar */}
      <div className=" bg-green-200 shadow-inner lg:h-[90vh]  lg:w-1/5 lg:bottom-1 lg:left-1 lg:fixed lg:mt-0 mt-6 lg:rounded-2xl rounded-b-2xl p-3 text-lg border-2 border-black">
        <h1 className="flex items-center justify-center h-[10%] text-black font-bold text-xl py-3 bg-sky-400 rounded-3xl text-center border-2 border-black">
          Complete Details
        </h1>
        <div className="flex items-center justify-between p-6 my-auto h-[85%]">
          <ul className="flex-row p-3">
            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full "
              onClick={() => setPage("BasicDetails")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/material-rounded/28/details.png"
                alt="details"
                className="mr-2"
              />
              Basic Details
            </li>

            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full"
              onClick={() => setPage("Education")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/dotty/28/education.png"
                alt="education"
                className="mr-2"
              />
              Education
            </li>

            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full"
              onClick={() => setPage("Experience")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios-filled/28/customer-insight.png"
                alt="customer-insight"
                className="mr-2"
              />
              Experience
            </li>

            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full"
              onClick={() => setPage("Skills")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/badges/28/persuasion-skills.png"
                alt="persuasion-skills"
                className="mr-2"
              />
              Skills
            </li>

            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full"
              onClick={() => setPage("Projects")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/28/project.png"
                alt="project"
                className="mr-2"
              />
              Projects
            </li>

            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full"
              onClick={() => setPage("Extra")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios/50/extra-features.png"
                alt="extra-features"
                className="mr-2"
              />
              Extra
            </li>

            <li
              className="flex text-black py-3 text-lg font-bold my-2 border-b-2 border-white w-full"
              onClick={() => setPage("Download")}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/material-outlined/28/download--v1.png"
                alt="download--v1"
                className="mr-2"
              />
              Download
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

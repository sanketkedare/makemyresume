import React, { useState } from "react";
import Navbar from "../Components/Resume/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CreateResume from "../Templates/CreateResume";
import { seTemplate } from "../Redux/Actions";
import { Link } from "react-router-dom";

const Download = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const template = useSelector((state) => state.Template || "No Data Available");
  const [includeDOB, setIncludeDOB] = useState(true);
  const [grade, setIncludeGrade] = useState(true);
  const [projectdate, setProjectDate] = useState(true);
  const [certification, setCetificationn] = useState(true);
  const [lang, setLang] = useState(true);
  const [photo, setPhoto] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [create, setCreate] = useState(false);
  const [selections, setSelection] = useState();

  const onCreate = () => 
  {
    setCreate(true);
    setSelection({
      includeDOB,
      grade,
      photo,
      certification,
      lang,
      projectdate});
    console.log(selections);
  };

  const changeTemplate = (temp) => {
    dispatch(seTemplate(temp));
    dropdownHandler();
  };
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  return (
    <div id="download" className=" text-white overflow-y-auto">
      <Navbar />

      <div className="lg:flex">
      <div className="lg:w-full mx-auto">
        <h1 className="bg-inherit font-bold text-xl text-center mt-4">
          Please, Answer few questions ?
        </h1>

        {/* Analization */}
        <div className="flex mx-auto lg:w-[60%] w-[90%] py-5">
          <div className="text-left mt-6  w-full">
            <div
              className="flex justify-between items-center w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl bg-green-400"
            >
              <h1 className="bg-transparent text-black font-bold ">
                Slected Template
              </h1>
              <div className="bg-transparent flex items-center ">
                <h1 className="bg-transparent text-black font-bold">
                  {template}
                </h1>
                <div className="ml-3 bg-inherit h-[30px] my-auto">
                  <button
                    className="bg-black px-3 rounded-2xl hover:bg-red-600 hover:text-white hover:border-black border-2 h-full"
                    onClick={dropdownHandler}
                  >
                    Change
                  </button>
                  {dropdown && (
                    <div className="z-10 sticky rounded-xl bg-gray-400 p-1 border-2 border-black">
                      <h1
                        className="text-center border-b-2 hover:bg-green-400 p-1 rounded-xl bg-inherit text-black"
                        onClick={() => changeTemplate("Normal")}
                      >
                        Normal
                      </h1>
                      <h1
                        className="text-center border-b-2 hover:bg-green-400 p-1 rounded-xl bg-inherit text-black"
                        onClick={() => changeTemplate("Ninja")}
                      >
                        Ninja
                      </h1>
                      <h1
                        className="text-center border-b-2 hover:bg-green-400 p-1 rounded-xl bg-inherit text-black"
                        onClick={() => changeTemplate("Pro")}
                      >
                        Pro
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className="flex justify-between items-center w-full my-4
                          border-2 border-green-500 p-2 rounded-xl bg-green-400"
            >
              <h1 className="bg-transparent text-black font-bold">
                Available Data :
              </h1>
              <div className="flex bg-inherit items-center">
                <h1 className="bg-transparent text-black font-bold">
                  {data.basic.name ? data.basic.name : "No Data Available"}
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

            <div
              className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${includeDOB ? "bg-green-400" : "bg-red-400"}`}
            >
              <h1 className="w-[80%] bg-transparent text-black font-bold">
                You want to include your Date of birth ?
              </h1>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="yes"
                  checked={includeDOB}
                  onChange={() => setIncludeDOB(true)}
                />
                Yes
              </label>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="no"
                  checked={!includeDOB}
                  onChange={() => setIncludeDOB(false)}
                />
                No
              </label>
            </div>

            <div
              className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${grade ? "bg-green-400" : "bg-red-400"}`}
            >
              <h1 className="w-[80%] bg-transparent text-black font-bold">
                Do you want to include grade of education ?
              </h1>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="yes"
                  checked={grade}
                  onChange={() => setIncludeGrade(true)}
                />
                Yes
              </label>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="no"
                  checked={!grade}
                  onChange={() => setIncludeGrade(false)}
                />
                No
              </label>
            </div>

            <div
              className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${projectdate ? "bg-green-400" : "bg-red-400"}`}
            >
              <h1 className="w-[80%] bg-transparent text-black font-bold">
                Do you want to include project completion date ?
              </h1>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="yes"
                  checked={projectdate}
                  onChange={() => setProjectDate(true)}
                />
                Yes
              </label>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="no"
                  checked={!projectdate}
                  onChange={() => setProjectDate(false)}
                />
                No
              </label>
            </div>
            <div
              className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${certification ? "bg-green-400" : "bg-red-400"}`}
            >
              <h1 className="w-[80%] bg-transparent text-black font-bold">
                Do you include All of your Certification ?
              </h1>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="yes"
                  checked={certification}
                  onChange={() => setCetificationn(true)}
                />
                Yes
              </label>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="no"
                  checked={!certification}
                  onChange={() => setCetificationn(false)}
                />
                No
              </label>
            </div>
            <div
              className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${lang ? "bg-green-400" : "bg-red-400"}`}
            >
              <h1 className="w-[80%] bg-transparent text-black font-bold">
                Do you want to include Languages in your resume ?
              </h1>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="yes"
                  checked={lang}
                  onChange={() => setLang(true)}
                />
                Yes
              </label>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="no"
                  checked={!lang}
                  onChange={() => setLang(false)}
                />
                No
              </label>
            </div>

            <div
              className={`flex justify-between w-full my-4 
                          border-2 border-green-500 p-2 rounded-xl
                          ${photo ? "bg-green-400" : "bg-red-400"}`}
            >
              <h1 className="w-[80%] bg-transparent text-black font-bold">
                Do you want to include Photograph in Resume ?
              </h1>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="yes"
                  checked={photo}
                  onChange={() => setPhoto(true)}
                />
                Yes
              </label>
              <label className="bg-transparent text-black font-bold">
                <input
                  type="radio"
                  value="no"
                  checked={!photo}
                  onChange={() => setPhoto(false)}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="flex">
          <button
            className="bg-inherit text-black font-bold text-center w-[50%] mx-auto border-2 border-white p-2 rounded-lg my-2 bg-sky-500
                     hover:bg-yellow-700 hover:text-white"
            onClick={onCreate}
          >
            Create Resume
          </button>
        </div>
      </div>
      {create && <CreateResume props={template} />}
      </div>
    </div>
  );
};

export default Download;

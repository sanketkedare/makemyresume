/*eslint-disable*/

import React, { useState } from "react";
import Navbar from "../Components/Resume/Navbar";
import CreateResume from "../Templates/CreateResume";
import Selection from "./utils/Selection";
import Options from "./utils/Options";
import Available from "./utils/Available";
import CreateButton from "./utils/CreateButton";

const Download = () => {
  const [includeDOB, setIncludeDOB] = useState(true);
  const [grade, setIncludeGrade] = useState(true);
  const [projectdate, setProjectDate] = useState(true);
  const [certification, setCetificationn] = useState(true);
  const [lang, setLang] = useState(true);
  const [photo, setPhoto] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [create, setCreate] = useState(false);
  const [selections, setSelection] = useState(); //For future use

  const onCreate = () => 
  {
    setCreate(true);
    setSelection({includeDOB,grade,photo,certification,lang, projectdate});
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
           <Selection dropdown={dropdown} setDropdown={setDropdown}/>
           <Available/>
           <Options question={"Do you want to include your Birthdate ?"} data={includeDOB} fun={setIncludeDOB}/>
           <Options question={"Do you want to include grade of education ?"} data={grade} fun={setIncludeGrade}/>
           <Options question={"Do you want to include project completion date ?"} data={projectdate} fun={setProjectDate}/>
           <Options question={"Do you include All of your Certification ?"} data={certification} fun={setCetificationn}/>
           <Options question={"Do you want to include Languages in your resume ?"} data={lang} fun={setLang}/>
           <Options question={"Do you want to include Photograph in Resume ?"} data={photo} fun={setPhoto}/>
          </div>
        </div>
       <CreateButton fun = {onCreate}/>

      </div>
   
             {create && <CreateResume  />}
      </div>
    </div>
  );
};

export default Download;

import React, { useState } from "react";
import Navbar from "./Navbar";
import { AiFillCaretRight } from "react-icons/ai";
import { FaChevronCircleRight, FaChevronCircleDown } from "react-icons/fa";
import BasicDetails from "../DataComponents/BasicDetails";
import EducationalDetails from "../DataComponents/EducationalDetails";
import SkillsDetails from "../DataComponents/SkillsDetails";
import Projects from "../DataComponents/Projects";
import Experience from "../DataComponents/Experience";
import Internship from "../DataComponents/Internship";
import Certification from "../DataComponents/Certification";
import Languages from "../DataComponents/Languages";
import Social from "../DataComponents/Social";
import Photo from "../DataComponents/Photo";
import {Link} from "react-router-dom"

import "./resume.css";

const Index = () => {
  const [basicDetailsOpen, setBasicdetailsOpen] = useState(true);
  const [educationDetailsOpen, setEducationdetailsOpen] = useState(false);
  const [skillsDetailsOpen, setSkilldetailsOpen] = useState(false);
  const [projectsOpen, setProjectsDetailsOpen] = useState(false);
  const [experienceOpen, setExperiencesDetailsOpen] = useState(false);
  const [internshipOpen, setInternshipsDetailsOpen] = useState(false);
  const [certificatesOpen, setCertificatesDetailsOpen] = useState(false);
  const [languagesOpen, setLanguagesDetailsOpen] = useState(false);
  const [socialOpen, setSocailOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <div className="bg-black h-[100vh] overflow-y-auto pb-2 fixed w-[100vw]">
      <Navbar />

      <div
        id="resume"
        className=" container lg:w-3/4 w-[90%] m-auto border-2 border-sky-600 p-3 rounded-2 rounded-lg  overflow-x-auto bg-none"
      >
        <h1 className="flex  justify-start items-center text-justify lg:text-[15px] font-bold my-4 bg-transparent">
          <AiFillCaretRight className="bg-transparent" />
          Hello! I'm Jarwes, and I'll create your resume based on the
          information you provide. This section is where you can enter your
          details.
        </h1>

        {/* Details Components Here */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3 ">
          <div
            className="flex items-center justify-between w-[100%] bg-transparent"
            onClick={() => setBasicdetailsOpen(!basicDetailsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Personal Information
            </h1>
            {!basicDetailsOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {basicDetailsOpen && (
              <FaChevronCircleDown className="rounded-full bg-black" />
            )}
          </div>
        </div>
        {basicDetailsOpen && <BasicDetails />}

        {/* Education Details Component */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent w-[100%]"
            onClick={() => setEducationdetailsOpen(!educationDetailsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Education Details
            </h1>
            {!educationDetailsOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {educationDetailsOpen && (
              <FaChevronCircleDown className="rounded-full bg-black" />
            )}
          </div>
        </div>
        {educationDetailsOpen && <EducationalDetails />}

        {/* Skills component */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setSkilldetailsOpen(!skillsDetailsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Skills</h1>
            {!skillsDetailsOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {skillsDetailsOpen && (
              <FaChevronCircleDown className="rounded-full bg-black" />
            )}
          </div>
        </div>
        {skillsDetailsOpen && <SkillsDetails />}

        {/* Projects */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setProjectsDetailsOpen(!projectsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Projects (Optional)
            </h1>
            {!projectsOpen && <FaChevronCircleRight className="rounded-full bg-black" />}
            {projectsOpen && <FaChevronCircleDown className="rounded-full bg-black" />}
          </div>
        </div>
        {projectsOpen && <Projects />}

        {/* Experience Section */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setExperiencesDetailsOpen(!experienceOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Experience</h1>
            {!experienceOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {experienceOpen && <FaChevronCircleDown className="rounded-full bg-black" />}
          </div>
        </div>
        {experienceOpen && <Experience />}

        {/* Internship */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setInternshipsDetailsOpen(!internshipOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Internships (Optional)
            </h1>
            {!internshipOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {internshipOpen && <FaChevronCircleDown className="rounded-full bg-black" />}
          </div>
        </div>
        {internshipOpen && <Internship />}

        {/* Cetification */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setCertificatesDetailsOpen(!certificatesOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Certifications (Optional)
            </h1>
            {!certificatesOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {certificatesOpen && (
              <FaChevronCircleDown className="rounded-full bg-black" />
            )}
          </div>
        </div>
        {certificatesOpen && <Certification />}

        {/* Languages */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setLanguagesDetailsOpen(!languagesOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Languages (Optional)
            </h1>
            {!languagesOpen && (
              <FaChevronCircleRight className="rounded-full bg-black" />
            )}
            {languagesOpen && <FaChevronCircleDown className="rounded-full bg-black" />}
          </div>
        </div>
        {languagesOpen && <Languages />}

        {/* Social Links */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent  w-[100%]"
            onClick={() => setSocailOpen(!socialOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">
              Social Links (Optional)
            </h1>
            {!socialOpen && <FaChevronCircleRight className="rounded-full bg-black" />}
            {socialOpen && <FaChevronCircleDown className="rounded-full bg-black" />}
          </div>
        </div>
        {socialOpen && <Social />}

        {/* Photo */}
        <div className="w-[100%] border-white h-[40px] bg-gradient-to-tr from-red-400 to-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-transparent w-[100%]"
            onClick={() => setPhotoOpen(!photoOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Photo</h1>
            {!photoOpen && <FaChevronCircleRight className="rounded-full bg-black" />}
            {photoOpen && <FaChevronCircleDown className="rounded-full bg-black" />}
          </div>
        </div>
        {photoOpen && <Photo />}

        {/* Next Process Button */}
        <Link to={'/templates'}>
          <button className="bg-sky-400 w-full border-2 border-black text-black hover:text-white text-xl p-3 rounded-2xl font-bold shadow-inner
                               hover:bg-red-500 my-5">
            Select Template
          </button>
          </Link>
      </div>
    </div>
  );
};

export default Index;

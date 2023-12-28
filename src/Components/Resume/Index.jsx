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

const Index = () => 
{
  const [basicDetailsOpen, setBasicdetailsOpen] = useState(false);
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
    <div id="resume" className="h-[100vh]">

      <Navbar />

      <div className="container lg:w-3/4 w-[90%] m-auto border-2 border-sky-600 p-3 rounded-2 rounded-lg  overflow-x-auto">

        <h1 className="flex justify-start items-center text-justify lg:text-[15px] font-bold my-4">
          <AiFillCaretRight />
          Hello! I'm Jarwes, and I'll create your resume based on the
          information you provide. This section is where you can enter your
          details.
        </h1>

        {/* Details Components Here */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setBasicdetailsOpen(!basicDetailsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Personal Information</h1>
            {!basicDetailsOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {basicDetailsOpen && (
              <FaChevronCircleDown className="rounded-full" />
            )}
          </div>
        </div>
        {basicDetailsOpen && <BasicDetails />}

        {/* Education Details Component */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setEducationdetailsOpen(!educationDetailsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Education Details</h1>
            {!educationDetailsOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {educationDetailsOpen && (
              <FaChevronCircleDown className="rounded-full" />
            )}
          </div>
        </div>
        {educationDetailsOpen && <EducationalDetails />}

        {/* Skills component */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setSkilldetailsOpen(!skillsDetailsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Skills</h1>
            {!skillsDetailsOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {skillsDetailsOpen && (
              <FaChevronCircleDown className="rounded-full" />
            )}
          </div>
        </div>
        {skillsDetailsOpen && <SkillsDetails />}

        {/* Projects */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setProjectsDetailsOpen(!projectsOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Projects</h1>
            {!projectsOpen && <FaChevronCircleRight className="rounded-full" />}
            {projectsOpen && <FaChevronCircleDown className="rounded-full" />}
          </div>
        </div>
        {projectsOpen && <Projects />}

        {/* Experience Section */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setExperiencesDetailsOpen(!experienceOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Experience</h1>
            {!experienceOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {experienceOpen && <FaChevronCircleDown className="rounded-full" />}
          </div>
        </div>
        {experienceOpen && <Experience />}

        {/* Internship */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setInternshipsDetailsOpen(!internshipOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Internship</h1>
            {!internshipOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {internshipOpen && <FaChevronCircleDown className="rounded-full" />}
          </div>
        </div>
        {internshipOpen && <Internship />}

        {/* Cetification */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setCertificatesDetailsOpen(!certificatesOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Certifications</h1>
            {!certificatesOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {certificatesOpen && (
              <FaChevronCircleDown className="rounded-full" />
            )}
          </div>
        </div>
        {certificatesOpen && <Certification />}

        {/* Languages */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setLanguagesDetailsOpen(!languagesOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Languages</h1>
            {!languagesOpen && (
              <FaChevronCircleRight className="rounded-full" />
            )}
            {languagesOpen && <FaChevronCircleDown className="rounded-full" />}
          </div>
        </div>
        {languagesOpen && <Languages />}

        {/* Social Links */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setSocailOpen(!socialOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Social Links</h1>
            {!socialOpen && <FaChevronCircleRight className="rounded-full" />}
            {socialOpen && <FaChevronCircleDown className="rounded-full" />}
          </div>
        </div>
        {socialOpen && <Social />}

        {/* Photo */}
        <div className="w-[100%] border-white h-[40px] bg-yellow-400 text-black  my-2 rounded-2xl flex items-center p-3">
          <div
            className="flex items-center justify-between bg-inherit w-[100%]"
            onClick={() => setPhotoOpen(!photoOpen)}
          >
            <h1 className="text-black bg-transparent font-bold">Photo</h1>
            {!photoOpen && <FaChevronCircleRight className="rounded-full" />}
            {photoOpen && <FaChevronCircleDown className="rounded-full" />}
          </div>
        </div>
        {photoOpen && <Photo />}

      </div>
    </div>
  );
};

export default Index;

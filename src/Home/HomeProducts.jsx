import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HomeProducts = () => {
  return (
    <>
      {/* Products */}
      <div className="p-10 m-5 border-2 border-sky-700 rounded-3xl shadow-xl lg:w-[98vw] w-[110vw] ">
        <div className="flex items-center lg:w-1/4 text-3xl text-left font-bold capitalize text-white my-10 bg-gradient-to-r from-yellow-700  via-red-600 to-red-950 p-5 rounded-r-3xl">
          <BsArrowRightCircleFill className="bg-transparent mx-6" />
          Our Products
        </div>

        <div className="p-4 mt-3 text-white">
          <div className="lg:flex justify-center items-center mt-10">
            <div className="h-[400px] lg:w-[400px] w-full text-2xl  p-10 m-2 bg-sky-500 rounded-3xl border-2 border-white shadow-inner">
              Student
            </div>
            <p className=" w-full lg:w-[50%] font-sm text-[15px]  text-justify lg:font-serif m-3">
              <sapn className="text-lg font-bold capitalize underline">
                A normal resume
              </sapn>{" "}
              serves as a foundational document, structured conventionally into
              sections delineating education, experience, and skills. It follows
              a standardized format, employing common fonts and bullet points
              for clarity. Typically aimed at entry-level positions, it abstains
              from elaborate designs or creative elements, focusing on
              presenting information succinctly. Its simplicity makes it
              universally accepted and easily comprehensible to recruiters.
              While it lacks innovation, it remains a reliable tool for
              traditional industries valuing professionalism and adherence to
              established norms. Despite its simplicity, crafting a normal
              resume requires attention to detail, ensuring an objective,
              professional tone throughout its content, making it suitable for
              various job applications across different sectors.
              <br />
              <button className="flex  justify-center items-center border-2 border-white bg-red-900 my-10 p-3 rounded-3xl">
                See Templates{" "}
                <BsArrowRightCircleFill className="bg-red-900 mx-2" />
              </button>
            </p>
          </div>

          <div className="lg:flex justify-center items-center flex-row-reverse mt-10">
            
            <div className="h-[400px] lg:w-[400px] w-full  p-3 m-2 bg-sky-500 rounded-3xl border-2 border-white shadow-inner">
              Ninja
            </div>
            <p className=" w-full lg:w-[50%] font-sm text-[15px]  text-justify lg:font-serif m-3">
              <sapn className="text-lg font-bold capitalize underline">
                The ninja resume
              </sapn>{" "}
              thrives on creativity, presenting information in unconventional
              ways to captivate attention. Employing visually appealing designs,
              infographics, and storytelling techniques, it communicates
              achievements in a manner that's both impactful and memorable.
              Targeted toward specific job roles, it showcases digital prowess
              and results-oriented achievements with a tech-savvy approach. Its
              adaptive nature allows for constant evolution to align with
              changing job market trends. This type of resume serves not only as
              a professional tool but also as a personal branding and networking
              asset, leaving a lasting impression due to its unique and engaging
              elements.
              <br />
              <button className="flex  justify-center items-center border-2 border-white bg-red-900 my-10 p-3 rounded-3xl">
                See Templates{" "}
                <BsArrowRightCircleFill className="bg-red-900 mx-2" />
              </button>
            </p>
          </div>

          <div className="lg:flex justify-center items-center mt-10">
            <div className="h-[400px] lg:w-[400px] w-full  p-3 m-2 bg-sky-500 rounded-3xl border-2 border-white shadow-inner">
              Pro
            </div>
            <p className=" w-full lg:w-[50%] font-sm text-[15px]  text-justify lg:font-serif m-3">
              Designed for seasoned professionals,
              <sapn className="text-lg font-bold capitalize underline">
                the pro resume
              </sapn>{" "}
              is a strategic masterpiece, meticulously tailored to specific job
              applications or industries. Its content is comprehensive and
              detailed, focusing on achievements, career progression, and
              industry-specific keywords. Using advanced formatting techniques,
              it ensures readability and clarity, presenting achievements with
              quantifiable data and strategic language that highlights
              leadership abilities. Ideal for executives and specialists, this
              resume showcases a depth of experience, strategic vision, and a
              clear growth trajectory. Often complemented by a robust LinkedIn
              profile, it serves as a consultant or specialist's tool,
              effectively communicating expertise, achievements, and
              professional growth to a discerning audience.
              <br />
              <button className="flex  justify-center items-center border-2 border-white bg-red-900 my-10 p-3 rounded-3xl">
                See Templates{" "}
                <BsArrowRightCircleFill className="bg-red-900 mx-2" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProducts;

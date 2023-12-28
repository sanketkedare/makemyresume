import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { BsArrowRightCircleFill } from "react-icons/bs";

const HomeMessage = () => {
  return (
    <>
      {/* Massage */}
      <div
        id="homeMassage"
        className="flex justify-center items-center bg-black text-white"
      >
        <div className="container w-3/4">
          <h1 className=" font-bold text-center lg:text-[60px] text-[20px] capitalize">
            "Craft your <span className="text-sky-700">professional story</span>{" "}
            effortlessly with our intuitive resume builder. where your career
            aspirations meet{" "}
            <span className="text-sky-700">perfect presentation.</span>"
          </h1>

          <div className="flex justify-center gap-5 items-center">
            <Link to={"/details"}>
              <button className="flex justify-center rounded-xl font-bold my-10 mx-auto p-4 bg-sky-700 hover:bg-red-900 border-2 border-white ">
                Create Resume
              </button>
            </Link>

            <Link to={"/templates"}>
              <button className="flex  justify-center items-center border-2 border-white bg-gradient-to-t from-red-900 to-yellow-500 my-10 p-3 rounded-3xl">
                See Templates
                <BsArrowRightCircleFill className="bg-transparent mx-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMessage;

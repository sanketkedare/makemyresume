import React from "react";
import { Link } from "react-router-dom";

const HomeMessage = () => {
  
  return (
    <>
      {/* Massage */}
      <div className=" lg:mt-0 mt-14 py-32 text-center lg:px-48 lg:py-40 p-20 bg-black text-white lg:w-full w-[120vw] ">
        <h1 className="font-bold lg:text-[60px] text-[20px] capitalize">
          "Craft your <span className="text-sky-700">professional story</span>{" "}
          effortlessly with our intuitive resume builder. where your career
          aspirations meet{" "}
          <span className="text-sky-700">perfect presentation.</span>"
        </h1>
        <Link to={"/details"}>
          <button className="rounded-xl font-bold my-10 p-4 bg-sky-700 hover:bg-red-900 border-2 border-white ">
            Use Free Trial Here
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeMessage;

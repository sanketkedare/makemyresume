import React from "react";
import productDetails from "./Products.json";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Products = ({ typeR }) => {
  const normalResume = productDetails[typeR];
  console.log("Data:", normalResume);

  return (
    <div className="lg:flex justify-center items-center mt-10 bg-black">

      <div className="lg:h-[400px] h-[250px] lg:w-[400px] w-full text-2xl m-auto p-10 bg-sky-500 rounded-3xl border-2 border-white shadow-inner">
        {normalResume.type}
      </div>

      <div className="w-[100%] lg:w-[50%] m-auto mt-2 lg:h-[400px] h-[250px] bg-transparent">

        <h1 className="text-lg text-sky-500 font-bold capitalize bg-transparent">{normalResume.info}</h1>

        <div className="lg:mt-3 text-sm text-justify h-[60%] overflow-y-auto bg-transparent">
             {normalResume.description}
        </div>
        

        <button className="flex  justify-center items-center border-2 border-white bg-red-900 my-10 p-3 rounded-3xl ">
          See Templates 
          <BsArrowRightCircleFill className="bg-red-900 mx-2 bg-transparent" />
        </button>

      </div>

    </div>
  );
};

export default Products;

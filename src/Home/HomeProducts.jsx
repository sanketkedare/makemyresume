import React, { useState } from "react";
import Products from "./Products/Products.jsx";
import "./home.css";

const HomeProducts = () => {
  const [typeR, setTypeR] = useState("Ninja");
  const Type = ["Normal", "Ninja", "Pro"];

  return (
    <div className="h-[100vh] p-4 bg-[#091f1f2a]">
      {/* Products */}
      <div className="p-10 border-2 border-sky-700 rounded-3xl shadow-xl h-[100%] bg-black">
        <div className="buttons flex justify-center items-center bg-transparent">
          {Type.map((item) => (
            <button
              key={item} // Don't forget to add a unique key when mapping over an array
              className={`py-3 rounded-xl border-2 border-gray-50 text-center font-bold bg-sky-500 m-2 text-white lg:w-[100px] w-[75px] lg:text-sm ${
                typeR === item ? "active" : ""
              }`}
              onClick={() => setTypeR(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-3 text-white bg-gray-50">
          <Products typeR={typeR} />
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;

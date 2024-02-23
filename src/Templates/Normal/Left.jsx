import React from "react";
import Gmail from "../../Images/gmail.png";
import { useSelector } from "react-redux";

const Left = () => {
  const data = useSelector((state) => state.basic.name);

  return (
    <div className="text-white w-[40%] h-[100%] bg-transparent rounded-2xl ">
      <div className="grid items-center justify-center bg-inherit h-[125px]">
        <div className="flex justify-center items-center p-1 h-[90px] w-full overflow-hidden rounded-full">
          <img src={Gmail} alt="passportPoto" className="h-[100%] p-2 bg-inherit" />
        </div>
        <h1 className="text-center text-black bg-inherit flex-wrap text-[1px] font-bold p-1 ">
          {data}
        </h1>
      </div>
      <div className="h-[75%] rounded-xl bg-pink-300 z-1"></div>
    </div>
  );
};

export default Left;

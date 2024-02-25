import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { seTemplate } from "../../Redux/Actions";

const Selection = ({dropdown,setDropdown}) => 
{
    const dispatch = useDispatch();

    const template = useSelector((state) => state.Template || "No Data Available");

    const changeTemplate = (temp) => {
        dispatch(seTemplate(temp));
        dropdownHandler();
      };
      const dropdownHandler = () => {
        setDropdown(!dropdown);
      };

  return (
    <div
      className="flex justify-between items-center w-full my-4 
                border-2 border-green-500 p-2 rounded-xl bg-green-400"
    >
      <h1 className="bg-transparent text-black font-bold ">
        Selected Template
      </h1>
      <div className="bg-transparent flex items-center ">
        <h1 className="bg-transparent text-black font-bold">{template}</h1>
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
  );
};

export default Selection;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { intenshipDetails } from "../../Redux/Actions";
import InternShipData from "./SavedData/InternShipData";

const Internship = () => 
{
  const dispatch = useDispatch();

  const data = useSelector((state) => state.InternShip);

  const [isInternShip, setIsInternShip] = useState(false);

  const [internShip, setInternShip] = useState([
    {
      position: "",
      organization: "",
      timePeriod: "",
      description: "",
      date: "",
    },
  ]);

  const setInternShipFields = (index, e) => {
    const { name, value } = e.target;
    const updated = [...internShip];
    updated[index][name] = value;
    setInternShip(updated);
  };

  const addInternShip = () => {
    setInternShip([
      ...internShip,
      {
        position: "",
        organization: "",
        totalPeriod: "",
        description: "",
        date: "",
      },
    ]);
  };

  const handleInternShipChange = (e) => {
    setIsInternShip(e.target.value === "YES");
  };

  const onSave = () => {
    if (!isInternShip) {
      dispatch(intenshipDetails(isInternShip));
    } else {
      dispatch(intenshipDetails(internShip));
      console.log(internShip);
      console.log("Submitted");
    }
  };
  return (
    <div id="internship" className="bg-transparent">
      <div className="container my-3 p-4 text-sm bg-black rounded-2xl">
        <div className="flex my-4 p-2 items-center bg-transparent">
          <h1 className="bg-transparent">Q. Have you done any Internship ?</h1>
          <select
            onChange={handleInternShipChange}
            className="mx-3 border-2 border-sky-400 px-3 py-2 rounded-2xl bg-black"
          >
            <option value="NO" className="bg-transparent">No</option>
            <option value="YES" className="bg-transparent">Yes</option>
          </select>
        </div>
        {isInternShip ? (
          <div className="bg-transparent">
            {data && <InternShipData/>}

            {internShip.map((e, index) => (
              <table key={index} style={{ width: "100%" }} className="bg-transparent">
                <h1 className="bg-sky-400 text-black p-2 font-bold rounded-2xl border-2 border-white text-sm w-[150px] text-center">
                  Internship {index + 1}:
                </h1>
                <tbody className="bg-transparent">
                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">Position : </lable>
                    </th>
                    <td className="bg-transparent">
                      <input
                        type="text"
                        name="position"
                        id="position"
                        placeholder="Eg. - Software Engineer"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setInternShipFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">Organization : </lable>
                    </th>
                    <td className="bg-transparent">
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        placeholder="Eg. - TCS"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setInternShipFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">Total Period : </lable>
                    </th>
                    <td className="bg-transparent">
                      <input
                        type="text"
                        name="totalPeriod"
                        id="totalPeriod"
                        placeholder="Eg. - 1 Year"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setInternShipFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">Description : </lable>
                    </th>
                    <td className="bg-transparent">
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Eg. - Description of your Internship"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setInternShipFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">From Date - Till Date : </lable>
                    </th>
                    <td className="bg-transparent">
                      <input
                        type="text"
                        name="date"
                        id="date"
                        placeholder="Eg. - Currently Working / jan 2020 - Jan 2024"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setInternShipFields(index, e)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
            <button className="bg-sky-400 text-black p-3 my-4 font-bold rounded-2xl hover:bg-red-400 w-[200px]"
                     onClick={addInternShip}>
              Add More 
            </button>
          </div>
        ) : (
          <div className="bg-transparent flex items-center justify-center my-2 bg-green-300 text-black p-2 rounded-3xl font-bold">
            <h1 className="bg-transparent text-black text-center">You can Save and Move to Next Section</h1>
          </div>
        )}

       <button
          className="flex justify-center items-center border-2 border-sky-400 w-full 
                         bg-green-600 p-3 my-5 font-bold rounded-2xl 
                         hover:bg-sky-400 hover:text-black"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Internship;

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
    <div id="internship">
      <div className="container my-3 px-4 text-sm">
        <div className="flex my-4 p-2 items-center">
          <h1>Q. Have you done any Internship ?</h1>
          <select
            onChange={handleInternShipChange}
            className="mx-3 border-2 border-sky-400 px-3 py-2 rounded-2xl"
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
        {isInternShip ? (
          <div>
            {data && <InternShipData/>}

            {internShip.map((e, index) => (
              <table key={index} style={{ width: "100%" }}>
                <h1 className="bg-yellow-400 text-black p-3 font-bold rounded-2xl border-2 mt-5 border-white">
                  Internship {index + 1}
                </h1>
                <tbody>
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor="">Position : </lable>
                    </th>
                    <td>
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
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor="">Organization : </lable>
                    </th>
                    <td>
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
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor="">Total Period : </lable>
                    </th>
                    <td>
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
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor="">Description : </lable>
                    </th>
                    <td>
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
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor="">From Date - Till Date : </lable>
                    </th>
                    <td>
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
            <button className="bg-yellow-400 text-black p-3 font-bold rounded-2xl hover:bg-red-400"
                     onClick={addInternShip}>
              Add More Exprerience
            </button>
          </div>
        ) : (
          <div>
            <h1>You can Save and Move to Next Section</h1>
          </div>
        )}

       <button
          className="flex justify-center items-center border-2 border-sky-400 w-full 
                         bg-green-600 p-3 my-3 font-bold rounded-2xl 
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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experienceDetails } from "../../Redux/Actions";
import ExperienceData from "./SavedData/ExperienceData";

const Experience = () => 
{
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Experience);

  const [isExperienced, setIsExperienced] = useState(false);

  const [experience, setExperience] = useState([
    {
      position: "",
      organization: "",
      totalexperience: "",
      description: "",
      date: "",
    },
  ]);

  const setExperienceFields = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experience];
    updated[index][name] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        position: "",
        organization: "",
        totalexperience: "",
        description: "",
        date: "",
      },
    ]);
  };

  const handleExperienceChange = (e) => {
    setIsExperienced(e.target.value === "experienced");
  };

  const onSave = () => {
    if (!isExperienced) {
      dispatch(experienceDetails(isExperienced));
    } else {
      dispatch(experienceDetails(experience));
      console.log(experience);
      console.log("Submitted");
    }
  };

  return (
    <div id="Experience">
      <div className="container my-3 px-4 text-sm">
        <div className="flex my-4 p-2 items-center">
          <h1>Q. Are you Fresher or Experienced ?</h1>
          <select
            onChange={handleExperienceChange}
            className="mx-3 border-2 border-sky-400 px-3 py-2 rounded-2xl"
          >
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        {isExperienced ? (
          <div>
            {data && <ExperienceData />}

            {experience.map((e, index) => (
              <table key={index} style={{ width: "100%" }}>
                <h1 className="bg-yellow-400 text-black p-3 font-bold rounded-2xl border-2 mt-5 border-white">
                  Experience {index + 1}
                </h1>
                <tbody>
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor = ''>Position : </lable>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        placeholder="Eg. - Software Engineer"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setExperienceFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor = ''>Organization : </lable>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        placeholder="Eg. - TCS"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setExperienceFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor = ''>Total Experience : </lable>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="totalexperience"
                        id="totalexperience"
                        placeholder="Eg. - 1 Year"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setExperienceFields(index, e)}
                      />
                    </td>

                  </tr>
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor = ''>Description : </lable>
                    </th>
                    <td>
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Eg. - Description of your Experience"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setExperienceFields(index, e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor = ''>From Date - Till Date : </lable>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        placeholder="Eg. - Currently Working / jan 2020 - Jan 2024"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setExperienceFields(index, e)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}

            <button className="bg-yellow-400 text-black p-3 font-bold rounded-2xl hover:bg-red-400"
                     onClick={addExperience}>
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

export default Experience;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { educationDetails } from "../../Redux/Actions";
import Education from "./SavedData/Education";

const EducationalDetails = () => 
{
  const dispatch = useDispatch();
  const Data = useSelector((s) => s.education);
  const [education, setEducation] = useState([{qualification: "",university: "",feild: "",passoutYear: "",grade: "",},]);


  const setEducationFields = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        qualification: "",
        university: "",
        field: "",
        passoutYear: "",
        grade: "",
      },
    ]);
  };

  

  const onSubmit = () => {
    dispatch(educationDetails(education));
    console.log("Submitted");
  };


  return (
    <div id="education" className="bg-transparent">
      <div className="container bg-black p-4 text-sm rounded-2xl">
        {Data && <Education/>}
        {education.map((edu, index) => (
          <table style={{ width: "100%" }} className="bg-transparent">
            <h1 className="bg-sky-400 text-black p-2 my-2 font-bold rounded-2xl border-2 border-white w-[150px] text-center">
              Education {index + 1}
            </h1>
            <tbody className="bg-transparent">
              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="qualification" className="bg-transparent">Qualification :</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    placeholder="Eg. - Bachelor's of Engineering"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setEducationFields(index, e)}
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="university" className="bg-transparent">University :</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="university"
                    id="university"
                    placeholder="Eg. - Mumbai University"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setEducationFields(index, e)}
                    value={education[index].university}
                  />
                </td>
              </tr>
              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="feild" className="bg-transparent">Feild of Study :</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="feild"
                    id="feild"
                    placeholder="Eg. - Electronics Engineering"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setEducationFields(index, e)}
                    value={education[index].feild}
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="passoutYear" className="bg-transparent">Passout Year:</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="passoutYear"
                    id="passoutYear"
                    placeholder="Eg. - 2024"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setEducationFields(index, e)}
                    value={education[index].passoutYear}
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="grade" className="bg-transparent">Grade:</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="grade"
                    id="grade"
                    placeholder="Eg. - A++ / 95% / 9.8"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setEducationFields(index, e)}
                    value={education[index].grade}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ))}

        <button
          onClick={addEducation}
          className="bg-sky-400 text-black p-3 my-3 font-bold rounded-2xl hover:bg-red-400 w-[200px]"
        >
          Add More Education
        </button>
        <button
          className="flex justify-center items-center border-2 border-sky-400 w-full 
                         bg-green-600 p-3 my-5 font-bold rounded-2xl 
                         hover:bg-sky-400 hover:text-black"
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EducationalDetails;

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
    <div id="education" className="">
      <div className="container  my-3 px-4 text-sm">
        {Data && <Education/>}
        {education.map((edu, index) => (
          <table style={{ width: "100%" }}>
            <h1 className="bg-yellow-400 text-black p-3 font-bold rounded-2xl border-2 border-white">
              Education {index + 1}
            </h1>
            <tbody>
              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>
                  <label htmlFor="qualification">Qualification :</label>
                </th>
                <td>
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

              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>
                  <label htmlFor="university">University :</label>
                </th>
                <td>
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
              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>
                  <label htmlFor="feild">Feild of Study :</label>
                </th>
                <td>
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

              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>
                  <label htmlFor="passoutYear">Passout Year:</label>
                </th>
                <td>
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

              <tr>
                <th style={{ width: "10%", textAlign: "left" }}>
                  <label htmlFor="grade">Grade:</label>
                </th>
                <td>
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
          className="bg-yellow-400 text-black p-3 font-bold rounded-2xl hover:bg-red-400"
        >
          Add Education
        </button>
        <button
          className="flex justify-center items-center border-2 border-sky-400 w-full 
                         bg-green-600 p-3 my-3 font-bold rounded-2xl 
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

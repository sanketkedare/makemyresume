import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectsDetails } from "../../Redux/Actions";
import ProjectsData from "./SavedData/ProjectsData";

const Projects = () => {
  const dispatch = useDispatch();

  const Data = useSelector((s) => s.Projects);

  console.log("Projects: ", Data);

  const [projects, setProjects] = useState([
    { title: "", organization: "", skill: "", description: "", date: "" },
  ]);

  const setProjectFields = (index, e) => {
    const { name, value } = e.target;
    const updatedProject = [...projects];
    updatedProject[index][name] = value;
    setProjects(updatedProject);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", organization: "", skill: "", description: "", date: "" },
    ]);
  };

  const onSave = () => {
    dispatch(projectsDetails(projects));
    console.log(projects)
    console.log("Submitted");
  };

  return (
    <div id="projects" className="bg-transparent">
      <div className="container p-4 text-sm bg-black rounded-2xl">
        {Data && <ProjectsData />}
        {projects.map((p, index) =>(
          <table style={{ width: "100%" }} className="bg-transparent">
            <h1 className="bg-sky-400 text-sm w-[100px] text-center mt-3 text-black p-3 font-bold rounded-2xl border-2 border-white">
              Project {index + 1}:
            </h1>

            <tbody className="bg-transparent">
              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="title" className="bg-transparent">Title :</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Eg. - Resume Builder"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setProjectFields(index, e)}
                  />
                </td>
              </tr>
              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="organization" className="bg-transparent"> Organization:</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    placeholder="Eg. - TCS"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setProjectFields(index, e)}
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="skill" className="bg-transparent"> Skills Used:</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="skill"
                    id="skill"
                    placeholder="Eg. - Java, Spring Boot,etc"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setProjectFields(index, e)}
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="description" className="bg-transparent"> Description:</label>
                </th>
                <td className="bg-transparent">
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Eg. - Description of your project"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setProjectFields(index, e)}
                  />
                </td>
              </tr>

              <tr className="bg-transparent">
                <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                  <label htmlFor="date" className="bg-transparent">Complition Date:</label>
                </th>
                <td className="bg-transparent">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="Eg. - Ongoing / Jan 2024 / 2020"
                    className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                    onChange={(e) => setProjectFields(index, e)}
                  />
                </td>
              </tr>

            </tbody>
          </table>
        ))}
        <button
          onClick={addProject}
          className="bg-sky-400 text-black p-3 font-bold rounded-2xl hover:bg-red-400 w-[200px] my-3"
        >
          Add More Project
        </button>
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

export default Projects;

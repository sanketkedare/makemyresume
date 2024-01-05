import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socialLinksDetails } from "../../Redux/Actions";

const Social = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.SocialLinks);
  console.log("SocialLinks: ", data);

  const [socialLink, setSocialLink] = useState({
    linkedin: data.linkedin,
    github: data.github,
    portfollio: data.portfollio,
    other: data.other,
  });

  const { linkedin, github, portfollio, other } = socialLink;

  const addDetails = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setSocialLink((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    dispatch(socialLinksDetails(socialLink));
    console.log("Submitted");
  };

  return (
    <div id="socialDetails" className="bg-transparent">
      <div className="container  my-3 p-4 bg-black rounded-2xl text-sm">
        <table style={{ width: "100%" }} className="bg-transparent">
          <tbody className="bg-transparent">
            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="name" className="bg-transparent">Github:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="github"
                  id="github"
                  placeholder="github"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={github}
                />
              </td>
            </tr>
            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="name" className="bg-transparent">LinkedIn:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="linkedin"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={linkedin}
                />
              </td>
            </tr>
            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="name" className="bg-transparent">Portfolio:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="portfollio"
                  id="portfollio"
                  placeholder="portfolio"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={portfollio}
                />
              </td>
            </tr>
            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="name" className="bg-transparent">Other:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="other"
                  id="other"
                  placeholder="other"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={other}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-transparent flex items-center justify-center my-2 bg-green-300 text-black p-2 rounded-3xl font-bold">
            <h1 className="bg-transparent text-black text-center">You can Save and Move to Next Section</h1>
          </div>
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

export default Social;

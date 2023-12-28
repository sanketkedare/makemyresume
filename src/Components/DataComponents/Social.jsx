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
    <div id="socialDetails" className="">
      <div className="container  my-3 px-4 text-sm">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="name">Github:</label>
              </th>
              <td>
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
            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="name">LinkedIn:</label>
              </th>
              <td>
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
            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="name">Portfolio:</label>
              </th>
              <td>
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
            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="name">Other:</label>
              </th>
              <td>
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

export default Social;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../Redux/Actions";

const BasicDetails = () => 
{
  const dispatch = useDispatch();
  const user = useSelector((state) => state.basic);
  console.log(user);

  const [basicDetails, setBasicDetails] = useState({
    name: user.name,
    mobile: user.mobile,
    email: user.email,
    dob: user.dob,
    city: user.city,
    job: user.job,
    about: user.about,
    objective: user.objective,
  });

  const { name, email, mobile, city, dob, about, objective, job } =
    basicDetails;

  const addDetails = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setBasicDetails((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitt = () => {
    dispatch(userDetails(basicDetails));
    console.log("Submitted");
  };

  return (
    <div id="basicDetails" className="bg-transparent">
      {/* Actual Data Component */}
      <div className="container  my-3 px-4 text-sm bg-black p-4 rounded-2xl shadow-lg">
        <table style={{ width: "100%" }} className="bg-transparent">
          <tbody className="bg-transparent p-5">
            <tr className="bg-transparent p-5">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="name" className="bg-transparent">Name:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={name}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="mobile" className="bg-transparent">Mobile:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={mobile}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="email" className="bg-transparent">Email:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={email}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="dob" className="bg-transparent">Birth Date:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="Date Of Birth"
                  className="border-2 border-sky-400 p-3 w-[100%] rounded-2xl my-2"
                  onChange={addDetails}
                  value={dob}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="city" className="bg-transparent">City:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={city}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="job" className="bg-transparent">Job:</label>
              </th>
              <td className="bg-transparent">
                <input
                  type="text"
                  name="job"
                  id="job"
                  placeholder="Job Title"
                  className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                  onChange={addDetails}
                  value={job}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="about" className="bg-transparent">About You:</label>
              </th>
              <td className="bg-transparent">
                <textarea
                  placeholder="About"
                  name="about"
                  id="about"
                  className="border-2 border-sky-400 w-full p-3 rounded-2xl my-2"
                  onChange={addDetails}
                  value={about}
                />
              </td>
            </tr>

            <tr className="bg-transparent">
              <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                <label htmlFor="objective" className="bg-transparent">Carear Objective:</label>
              </th>
              <td className="bg-transparent">
                <textarea
                  placeholder="Carear Objective"
                  name="objective"
                  id="objective"
                  className="border-2 border-sky-400 p-3 w-full  rounded-2xl"
                  onChange={addDetails}
                  value={objective}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="flex justify-center items-center border-2 border-sky-400 w-full 
                         bg-green-600 p-3 my-5 font-bold rounded-2xl 
                         hover:bg-sky-400 hover:text-black"
          onClick={onSubmitt}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BasicDetails;

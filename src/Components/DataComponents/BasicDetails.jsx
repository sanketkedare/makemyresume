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
    <div id="basicDetails" className="">
      {/* Actual Data Component */}
      <div className="container  my-3 px-4 text-sm">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="name">Name:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="mobile">Mobile:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="email">Email:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="dob">Birth Date:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="city">City:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="job">Job:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="about">About You:</label>
              </th>
              <td>
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

            <tr>
              <th style={{ width: "10%", textAlign: "left" }}>
                <label htmlFor="objective">Carear Objective:</label>
              </th>
              <td>
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
                         bg-green-600 p-3 my-3 font-bold rounded-2xl 
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

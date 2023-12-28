import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CertificateData from "./SavedData/CertificateData";
import { certificatesDetails } from "../../Redux/Actions";

const Certification = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Certificates);

  const [iscertificates, setIscertificates] = useState(false);

  const [certificates, setcertificates] = useState([
    {
      name: "",
      organization: "",
      description: "",
    },
  ]);

  const setcertificatesFields = (index, e) => {
    const { name, value } = e.target;
    const updated = [...certificates];
    updated[index][name] = value;
    setcertificates(updated);
  };

  const addcertificates = () => {
    setcertificates([
      ...certificates,
      {
        name: "",
        organization: "",
        description: "",
      },
    ]);
  };

  const handlecertificatesChange = (e) => {
    setIscertificates(e.target.value === "YES");
  };

  const onSave = () => {
    if (!iscertificates) {
      dispatch(certificatesDetails(iscertificates));
    } else {
      dispatch(certificatesDetails(certificates));
      console.log(certificates);
      console.log("Submitted");
    }
  };

  return (
    <div id="certificates">
      <div className="container my-3 px-4 text-sm">
        <div className="flex my-4 p-2 items-center">
          <h1>Q. Do you have any certification ?</h1>
          <select
            onChange={handlecertificatesChange}
            className="mx-3 border-2 border-sky-400 px-3 py-2 rounded-2xl"
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
        {iscertificates ? (
          <div>
            {data && <CertificateData/>}
            {certificates.map((c,index)=>(
              <table key={index} style={{ width: "100%" }}>
                <h1 className="bg-yellow-400 text-black p-3 font-bold rounded-2xl border-2 mt-5 border-white">
                  Certificate {index + 1}
                </h1>
                <tbody>
                <tr>
                    <th style={{ width: "10%", textAlign: "left" }}>
                      <lable htmlFor="">Name : </lable>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Eg. - MERN STACK DEVELOPER"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setcertificatesFields(index, e)}
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
                        placeholder="Eg. - Almabetter"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setcertificatesFields(index, e)}
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
                        placeholder="Eg. - Description of your Certificate"
                        className="border-2 border-sky-400 p-3 w-full rounded-2xl my-2"
                        onChange={(e) => setcertificatesFields(index, e)}
                      />
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            ))}
            <button className="bg-yellow-400 text-black p-3 font-bold rounded-2xl hover:bg-red-400"
                     onClick={addcertificates}>
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

export default Certification;

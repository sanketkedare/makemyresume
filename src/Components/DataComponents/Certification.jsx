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
    <div id="certificates" className="bg-transparent">
      <div className="container my-3 p-4 text-sm bg-black rounded-2xl">
        <div className="flex my-4 p-2 items-center bg-transparent">
          <h1 className="bg-transparent">Q. Do you have any certification ?</h1>
          <select
            onChange={handlecertificatesChange}
            className="mx-3 border-2 border-sky-400 px-3 py-2 rounded-2xl bg-black"
          >
            <option value="NO" className="bg-black text-white">No</option>
            <option value="YES" className="bg-black text-white">Yes</option>
          </select>
        </div>
        {iscertificates ? (
          <div className="bg-transparent">
            {data && <CertificateData/>}
            {certificates.map((c,index)=>(
              <table key={index} style={{ width: "100%" }} className="bg-transparent my-3">
                <h1 className="bg-sky-400 text-black p-3 font-bold rounded-2xl border-2 border-white w-[120px] text-sm text-center">
                  Certificate {index + 1}:
                </h1>
                <tbody className="bg-transparent">
                <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="name" className="bg-transparent">Name : </lable>
                    </th>
                    <td className="bg-transparent">
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
                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">Organization : </lable>
                    </th>
                    <td className="bg-transparent">
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

                  <tr className="bg-transparent">
                    <th style={{ width: "10%", textAlign: "left" }} className="bg-transparent">
                      <lable htmlFor="" className="bg-transparent">Description : </lable>
                    </th>
                    <td className="bg-transparent">
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
            <button className="bg-sky-400 text-black p-3 font-bold rounded-2xl hover:bg-red-400 w-[200px] my-3"
                     onClick={addcertificates}>
              Add More Certificates
            </button>
          </div>
        ) : (
          <div className="bg-transparent flex items-center justify-center my-2 bg-green-300 text-black p-2 rounded-3xl font-bold">
            <h1 className="bg-transparent text-black text-center">You can Save and Move to Next Section</h1>
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

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { languagesDetails } from '../../Redux/Actions';
import LanguageData from './SavedData/LanguageData';

const Languages = () => 
{
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Languages);
  console.log("Languages: ", data);

  const [language, setlanguage] = useState([{ language: "",proficiency: "",}]);

  const setlanguageFields = (index, e) => {
    const { name, value } = e.target;
    const updatedlanguage= [...language];
    updatedlanguage[index][name] = value;
    setlanguage(updatedlanguage);
  };

  const addlanguage = () => {
    setlanguage([
      ...language,
      {
        language: "",
        proficiency: "",
      },
    ]);
  };

  const onSubmit = () => {
    dispatch(languagesDetails(language));
    console.log("Submitted");
  };

  return (
    <div id="skills" className="">
      <div className="container my-3 px-4 text-sm">
        {data && <LanguageData/>}
        {language.map((lan,index)=>(
        <div key={index}>
          
          <div className="flex col-3 gap-2">
            <input
              type="text"
              placeholder={`Language ${index+1}:`}
              name="language"
              className="border-2 border-sky-400 w-[30%] p-3 rounded-2xl my-2"
              onChange={(e) => setlanguageFields(index,e)}
              value={language[index].language}
            />

            <input
              type="text"
              placeholder="Proficiency in %"
              name="proficiency"
              className="border-2 border-sky-400 w-[30%] p-3 rounded-2xl my-2"
              onChange={(e) => setlanguageFields(index,e)}
              value={language[index].proficiency}
            />
          </div>
        </div>
        ))}

        <button
          className="bg-sky-400 text-black p-3 mx-2 font-bold rounded-2xl hover:bg-red-400"
          onClick={addlanguage}
        >
          Add More Language
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
  )
}

export default Languages

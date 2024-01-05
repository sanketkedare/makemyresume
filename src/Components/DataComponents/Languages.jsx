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
    <div id="skills" className="bg-transparent">
      <div className="container my-3 p-4 text-sm bg-black rounded-2xl">
        {data && <LanguageData/>}
        {language.map((lan,index)=>(
        <div key={index}  className="bg-transparent">
          
          <div className="flex col-3 gap-2 bg-transparent">
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
              className="border-2 border-sky-400 lg:w-[30%] p-3 rounded-2xl my-2"
              onChange={(e) => setlanguageFields(index,e)}
              value={language[index].proficiency}
            />
          </div>
        </div>
        ))}

        <button
          className="bg-sky-400 text-black p-3 mx-2 font-bold rounded-2xl hover:bg-red-400 my-3 w-[200px]"
          onClick={addlanguage}
        >
          Add More Languages
        </button>

        <div className="bg-transparent flex items-center justify-center my-2 bg-green-300 text-black p-2 rounded-3xl font-bold">
            <h1 className="bg-transparent text-black text-center">You can Save and Move to Next Section</h1>
          </div>

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
  )
}

export default Languages

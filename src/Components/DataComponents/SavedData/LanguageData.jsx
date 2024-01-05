import React from 'react'
import { useSelector } from 'react-redux'

const LanguageData = () => 
{
    const data = useSelector((state)=>state.Languages);
    console.log("Languages: ", data);

  return (
    <div className="bg-transparent my-3">
       <div className="flex items-center bg-transparent">
        <h1 className="bg-transparent mr-3">Saved Language :</h1>
        {data.map((s, i) => (
          <h1
            key={i}
            className="bg-orange-400 font-bold text-black p-3 mx-2 rounded-2xl border-2 border-white"
          >
            {s.language} - {s.proficiency}%
          </h1>
        ))}
      </div>
    </div>
  )
}

export default LanguageData

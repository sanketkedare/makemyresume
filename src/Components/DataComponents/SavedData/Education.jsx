import React from 'react'
import { useSelector } from 'react-redux';

const Education = () => 
{
    const data = useSelector((state)=>state.education);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4 bg-transparent'>

        {data.map((edu,index)=>(
            <div key={index} className='w-[50%] p-4 border-2 border-blue-400 rounded-2xl bg-transparent'>
                <h1 className="bg-transparent">Education {index +1}</h1>
                <h2 className="bg-transparent">Qualifiacation : {edu.qualification}</h2>
                <h3 className="bg-transparent">University : {edu.university}</h3>
                <h3 className="bg-transparent">Field : {edu.feild}</h3>
                <h3 className="bg-transparent">Year : {edu.passoutYear}</h3>
                <h3 className="bg-transparent">Grade : {edu.grade}</h3>
            </div>
        ))}

      
    </div>
  )
}

export default Education

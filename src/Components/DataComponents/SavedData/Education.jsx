import React from 'react'
import { useSelector } from 'react-redux';

const Education = () => 
{
    const data = useSelector((state)=>state.education);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4'>

        {data.map((edu,index)=>(
            <div key={index} className='w-[50%] p-4 border-2 border-blue-400  text-black rounded-2xl'>
                <h1>Education {index +1}</h1>
                <h2>Qualifiacation : {edu.qualification}</h2>
                <h3>University : {edu.university}</h3>
                <h3>Field : {edu.feild}</h3>
                <h3>Year : {edu.passoutYear}</h3>
                <h3>Grade : {edu.grade}</h3>
            </div>
        ))}

      
    </div>
  )
}

export default Education

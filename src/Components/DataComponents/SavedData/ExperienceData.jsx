import React from 'react'
import { useSelector } from 'react-redux';

const ExperienceData = () => 
{
  const data = useSelector((state)=>state.Experience);
  console.log(data);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4'>
        {data.map((exp,index)=>(
            <div key={index} className='w-[50%] p-4 border-2 border-blue-400  text-black rounded-2xl'>
                <h1>Experience {index + 1}</h1>
                <h2>Position : {exp.position}</h2>
                <h3>Organisation : {exp.organization}</h3>
                <h3>Total experience : {exp.totalexperience}</h3>
                <h3>Description : {exp.description}</h3>
                <h3>From - Till : {exp.date}</h3>
            </div>
        ))}
    </div>
  )
}

export default ExperienceData

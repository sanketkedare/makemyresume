import React from 'react'
import { useSelector } from 'react-redux';

const ExperienceData = () => 
{
  const data = useSelector((state)=>state.Experience);
  console.log(data);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4 bg-transparent'>
        {data.map((exp,index)=>(
            <div key={index} className='w-[50%] p-4 border-2 border-blue-400 rounded-2xl bg-transparent'>
                <h1 className="bg-transparent">Experience {index + 1}</h1>
                <h2 className="bg-transparent">Position : {exp.position}</h2>
                <h3 className="bg-transparent">Organisation : {exp.organization}</h3>
                <h3 className="bg-transparent">Total experience : {exp.totalexperience}</h3>
                <h3 className="bg-transparent">Description : {exp.description}</h3>
                <h3 className="bg-transparent">From - Till : {exp.date}</h3>
            </div>
        ))}
    </div>
  )
}

export default ExperienceData

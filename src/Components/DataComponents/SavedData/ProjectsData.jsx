import React from 'react'
import { useSelector } from 'react-redux';

const Projects = () => 
{
  const data = useSelector((state)=>state.Projects);
  console.log(data);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4'>
        {data.map((project,index)=>(
            <div key={index} className='w-[50%] p-4 border-2 border-blue-400  text-black rounded-2xl'>
                <h1>Project {index + 1}</h1>
                <h2>Title : {project.title}</h2>
                <h3>Skills Used : {project.skill}</h3>
                <h3>Organisation : {project.organization}</h3>
                <h3>Date : {project.date}</h3>
                <h3>Description : {project.description}</h3>
            </div>
        ))}
    </div>
  )
}

export default Projects

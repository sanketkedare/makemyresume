import React from 'react'
import { useSelector } from 'react-redux';

const Projects = () => 
{
  const data = useSelector((state)=>state.Projects);
  console.log(data);

  return (
    <div className='flex justify-evenly my-3 items-center w-full h-full bg-transparent'>
        {data.map((project,index)=>(
            <div key={index} className='w-[100%] p-4 border-2 border-blue-400   rounded-2xl bg-transparent'>
                <h1 className="bg-transparent">Project {index + 1}</h1>
                <h2 className="bg-transparent">Title : {project.title}</h2>
                <h3 className="bg-transparent">Skills Used : {project.skill}</h3>
                <h3 className="bg-transparent">Organisation : {project.organization}</h3>
                <h3 className="bg-transparent">Date : {project.date}</h3>
                <h3 className="bg-transparent">Description : {project.description}</h3>
            </div>
        ))}
    </div>
  )
}

export default Projects

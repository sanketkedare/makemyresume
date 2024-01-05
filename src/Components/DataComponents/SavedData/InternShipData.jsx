import React from 'react'
import { useSelector } from 'react-redux';

const InternShipData = () => 
{
    const data = useSelector((state)=>state.InternShip);
    console.log(data);
  
    return (
      <div className='flex justify-evenly items-center w-full h-full my-4 bg-transparent'>
          {data.map((intern,index)=>(
              <div key={index} className='w-[100%] p-4 border-2 border-blue-400  rounded-2xl bg-transparent'>
                  <h1 className="bg-transparent">Internship {index + 1}</h1>
                  <h2 className="bg-transparent">Position : {intern.position}</h2>
                  <h3 className="bg-transparent">Organisation : {intern.organization}</h3>
                  <h3 className="bg-transparent">Total Period : {intern.totalexperience}</h3>
                  <h3 className="bg-transparent">Description : {intern.description}</h3>
                  <h3 className="bg-transparent">From - Till : {intern.date}</h3>
              </div>
          ))}
      </div>
    )
}

export default InternShipData

import React from 'react'
import { useSelector } from 'react-redux';

const InternShipData = () => 
{
    const data = useSelector((state)=>state.InternShip);
    console.log(data);
  
    return (
      <div className='flex justify-evenly items-center w-full h-full my-4'>
          {data.map((intern,index)=>(
              <div key={index} className='w-[50%] p-4 border-2 border-blue-400  text-black rounded-2xl'>
                  <h1>Internship {index + 1}</h1>
                  <h2>Position : {intern.position}</h2>
                  <h3>Organisation : {intern.organization}</h3>
                  <h3>Total : {intern.totalexperience}</h3>
                  <h3>Description : {intern.description}</h3>
                  <h3>From - Till : {intern.date}</h3>
              </div>
          ))}
      </div>
    )
}

export default InternShipData

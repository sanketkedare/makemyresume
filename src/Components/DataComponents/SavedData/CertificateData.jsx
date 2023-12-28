import React from 'react'
import { useSelector } from 'react-redux';

const CertificateData = () => 
{
  const data = useSelector((state)=>state.Certificates);
  console.log(data);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4'>
      {data.map((certificate,index)=>(
          <div key={index} className='w-[50%] p-4 border-2 border-blue-400  text-black rounded-2xl'>
              <h1>Certificate {index + 1}</h1>
              <h2>Name : {certificate.name}</h2>
              <h3>Organization : {certificate.organization}</h3>
              <h3>Description : {certificate.description}</h3>
          </div>
      ))}
      
    </div>
  )
}

export default CertificateData

import React from 'react'
import { useSelector } from 'react-redux';

const CertificateData = () => 
{
  const data = useSelector((state)=>state.Certificates);
  console.log(data);

  return (
    <div className='flex justify-evenly items-center w-full h-full my-4 bg-transparent text-white'>
      {data.map((certificate,index)=>(
          <div key={index} className='w-[50%] p-4 border-2 border-blue-400   rounded-2xl text-white'>
              <h1 className="bg-transparent">Certificate {index + 1}</h1>
              <h2 className="bg-transparent">Name : {certificate.name}</h2>
              <h3 className="bg-transparent">Organization : {certificate.organization}</h3>
              <h3 className="bg-transparent">Description : {certificate.description}</h3>
          </div>
      ))}
      
    </div>
  )
}

export default CertificateData

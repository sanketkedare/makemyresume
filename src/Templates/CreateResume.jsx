import React from 'react'
import Ninja from './Ninja/Ninja'
import Pro from './Pro/Pro'
import Normal from './Normal/Normal'
import { useSelector } from 'react-redux'

const CreateResume = () => 
{
  const template = useSelector((state) => state.Template );

  switch(template){

    case "Ninja":
      return <Ninja/>

    case "Pro":
      return <Pro/>

    default:
      return <Normal/>
  }
}

export default CreateResume

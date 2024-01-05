import React from 'react'
import Ninja from './Ninja/Ninja'
import Pro from './Pro/Pro'
import Normal from './Normal/Normal'

const CreateResume = ({props}) => 
{
  switch(props){

    case "Ninja":
      return <Ninja/>

    case "Pro":
      return <Pro/>

    default:
      return <Normal/>
  }
}

export default CreateResume

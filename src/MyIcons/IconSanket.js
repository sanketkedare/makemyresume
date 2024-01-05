import React from "react";

import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import gmail from "../Images/gmail.png";
import phone from "../Images/phone.png";
import link from "../Images/link.png";
import Almabetter from "../Images/Almabetter.png";



//Social Icons

const GitIcon = () => {
  return <img src={github} alt="github" className="rounded-full h-[80px]"/>;
};
export default GitIcon;

export const LinkedInIcon = () => {
  return <img src={linkedin} alt="linkedin" className="p-3 rounded-full h-[80px]"/>;
};

export const LinkIcon = () =>{
  return <img src={link} alt="link" className="p-3 rounded-full h-[80px]"/>;
}



// Contact Icons

export const GmailIcon = () => {
  return <img src={gmail} alt="gmail" className="p-3 rounded-3xl h-[80px]"/>;
}

export const PhoneIcon = () => {
  return <img src={phone} alt="phone" className="p-3 rounded-3xl h-[80px]"/>;
}




// Institutes
export const AlmaIcon = () =>{
  return <img src={Almabetter} alt="Almabetter" className="p-3 rounded-3xl h-[80px]"/>;
}
// import React, { useRef, useState } from 'react';
import React from "react"
import "./testimonials.css"
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
// import AVATAR3 from '../../assets/avatar3.jpg'
// import AVATAR4 from '../../assets/avatar4.jpg'











const peers = [
  {
    avatar: AVATAR1,
    name: "Shahier Nashaat",
    review:
      "Somdotta is one of the best teammates I have ever worked with, she is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
  },
  {
    avatar: AVATAR2,
    name: "Chimwewme Sinyinza",
    review:
      "I had the chance to work with Somdotta on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  },
  // {
  //   avatar: AVATAR3,
  //   name: "Shahier Nashaat",
  //   review:
  //     "Somdotta is one of the best teammates I have ever worked with, she is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
  // },
  // {
  //   avatar: AVATAR4,
  //   name: "Chimwewme Sinyinza",
  //   review:
  //     "I had the chance to work with Somdotta on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
  // },
];
const Testimonials = () => {
  return(
    <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <div className="container testimonials__container">
    {peers.map(({avatar,name,review},index)=>{
  return(
    <div key={index} className="testimonial">
    <div className="testimonial-img">
      <img src={avatar} alt="avatar"/>
    </div>
    <h5>{name}</h5>
    <small className='client_review'>{review}</small>
  </div>
  )})}
    </div>
  </section>
  
  )
      
    

}

export default Testimonials

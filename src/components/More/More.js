import React from 'react';
import './More.css';
import { IoCloudDownloadOutline } from "react-icons/io5";


function More() {

  const onButtonclick = () => {
    const pdfUrl = "./asset/Fadayo.FR.CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Fadayo.FR.CV.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="more-about">
      <h2>More About Me</h2>
      <p>
      From my humble beginnings tinkering with code in my college dorm room, I've honed my skills in HTML, CSS, and JavaScript,
      constantly pushing the boundaries of what's possible on the web. I thrive on the challenge of bringing ideas to life,
      leveraging frameworks like Bootstrap (CSS Framework) 
      and  React to create dynamic and intuitive interfaces that engage users from the moment they land on a site.
      </p>
      <p>
      My mission as a front-end developer is simple: to create digital experiences that captivate, inspire, and leave a lasting 
      impression. I'm committed to delivering results that exceed expectations and leave a smile on the faces of users.
      </p>
      <p>
      So, if you're ready to take your online presence to the next level, I'd love to chat! Let's
      turn your web dreams into reality.
      </p>
      <a href="./asset/Fadayo.FR.CV.pdf" target='_blank'> 
    <button className="hero-download" onClick={onButtonclick}> &nbsp; Download CV &nbsp; <IoCloudDownloadOutline/> 
    </button></a>
    </section>
  )
}

export default More
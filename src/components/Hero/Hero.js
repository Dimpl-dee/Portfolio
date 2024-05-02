import React from 'react';
import './Hero.css';




function Hero() {
 

  return (
    <section className="hero" id="about">
    
    <div className="hero-hello">
    <i>👋🏽</i>
    <span>Hello, I am</span>
    <h3>Fadayo</h3>
    </div>

   
    <hr className="orange"/>
      <img
        src="./images/about-img.png"
        alt="dayo"
        loading="lazy"
        className="hero-img"
      />
      <i className="green-heart">💚</i>
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">About Me</h2>
        <p className="bio-text">
        A Front-end developer who is pushing creative limits, and creating 
        immersive digital experiences. 
        I have acquired the skills and 
        knowledge necessary to make your project a success. I enjoy every step of the
        building process, from discussion to collaboration!
        </p>
       
      </div>
   
     
</section>


  )
}

export default Hero
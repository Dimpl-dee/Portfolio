import React from 'react';
import './Project.css';

function Project() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Creative Portfolio</h2>
      <div className="projects-container">
        <div class="project-container project-card">
          <img
            src="./images/tesla-clone.png"
            alt="expense-tracker"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Tesla Clone</h3>
          <p className="project-details">
          A clone of the Tesla website created using styled-components, 
          Material UI, React-redux, and redux/toolkit. Explore the features 
          and implementation details of this impressive project.
          </p>
          <a href="https://tesla-clone-psi-gray.vercel.app/" target="_blank" className="project-link">Check it Out 😊</a>
        </div>
        <div className="project-container project-card">
          <img
            src="./images/hookpq.png"
            alt="netflic-clone"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Hoo qk </h3>
          <p className="project-details">
          Welcome to the Home of Pleasure, where you can indulge in live shows,
          erotic stories, and more. Explore our website built with React, HTML, 
          and Bootstrap for a truly immersive experience.
          </p>
          <a href="https://hooqk-page-ycm4.vercel.app/" target="_blank" class="project-link">Check it Out 🙈</a>
        </div>
        <div className="project-container project-card">
          <img
            src="./images/real-estate.png"
            alt="greeny-earth"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Real-Estate Website</h3>
          <p className="project-details">
          Our agency website showcases our residencies in the field of React.js 
          development with a focus on providing value through the use of Bootstrap. 
          Explore how we deliver excellence through our services.
          </p>
          <a href="https://agency-self-nine.vercel.app/" target="_blank" class="project-link">Check it Out 🤭</a>
        </div>
      </div>
    </section>
  )
}

export default Project
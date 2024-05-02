import React from 'react';
import './Skill.css'

function Skill() {
  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">My Top Skills</h2>

      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
        
          <img
            src="./images/htmls.webp"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
         
          <img
            src="./images/css.png"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="./images/JavaScript-logo.png"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>

        <div className="second-set animate__animated animate__pulse">
          <img
            src="./images/boot.png"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="./images/react.png"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="./images/node.png"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>
      </div>
    </section>
  )
}

export default Skill
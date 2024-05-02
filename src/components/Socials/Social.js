import React from 'react';
import './Social.css';
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { FaGithubAlt } from "react-icons/fa";

function Social() {
  return (
    <div className="socials">
      <a href="https://www.instagram.com/dimpl_dee?igsh=MTljbnVtOW1zYXl3OQ%3D%3D&utm_source=qr" target="_blank">
        <FaInstagram className="socicon"/>
      </a>
      <a href="https://www.linkedin.com/in/ifadayo-agbato-a25928202/" target="_blank">
        <CiLinkedin className="socicon"/>
        </a>
      <a href="https://twitter.com/i_agbato" target="_blank"
        ><LuTwitter className="socicon"/></a>
      <a href="https://github.com/Dimpl-dee" target="_blank"
        > <FaGithubAlt class="socicon"/>
      </a>
      </div>
  )
}

export default Social
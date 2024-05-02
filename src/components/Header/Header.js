import React from 'react';
import './Header.css';

function Header() {
  return (
    <section className="h-wrapper">
      <div className="container">
        <nav>
        <h1 className="h-name">FADAYO</h1>
      <ul class="navigation">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
        </nav>
      </div>

    </section>
  )
}

export default Header
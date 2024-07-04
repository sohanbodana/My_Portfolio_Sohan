import React from 'react';
import { Link } from 'react-scroll';
import fl from './lg.png';
import './Nav.css';  // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand flex items-center m-0 p-0" href="#">
        <img src={fl} className="logo w-12 h-12 mr-3" alt="Logo" />
        <span className="sohan">Hello, I Am Sohan</span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item ">
            <Link to="home" smooth={true} duration={500} className="nav-link size4" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="contact-me" smooth={true} duration={500} className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

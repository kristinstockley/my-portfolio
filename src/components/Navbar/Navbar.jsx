import React from 'react';
import './Navbar.scss';
import ResumeModal from '../ResumeModal/ResumeModal';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';




export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand display-1">Kristin.</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link> 
          </li> */}
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/kristin-stockley/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/kristinstockley"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"

              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


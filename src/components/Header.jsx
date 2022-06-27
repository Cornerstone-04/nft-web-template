import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("open");
  };
  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate("/")}>
        Logo
      </h1>
      <nav className="navigation" ref={navRef}>
        <div className="links">
          <h1>Name</h1>
          <a className="nav_link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="nav_link" href="#rarity">
            Rarity
          </a>
          <a className="nav_link" href="#roadmap">
            Roadmap
          </a>
          <a className="nav_link" href="#faq">
            FAQ
          </a>
        </div>
        <a className="staking" href="/roadmap">
          Staking
        </a>
        <button className="menu close" onClick={showNavbar}>
        {/* <FontAwesomeIcon icon="fa-solid fa-xmark"/> */}
        <FaTimes/>
      </button>
      </nav>
      <button className="menu" onClick={showNavbar}>
      {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      <FaBars/>
      </button>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import logo from '../../images/logo.svg';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  // Keeps the click functionality for the hamburger/close icons to open and close the drawer
  const showMenu = () => {
    setIsActive(!isActive);
  };

  // NEW FIX: Explicitly forces the menu state closed and clears scrollbar locks when any nav link is chosen
  const handleLinkClick = () => {
    setIsActive(false);
  };

  // Lock both html and body elements to prevent background scroll leaks
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isActive]);

  return (
    <nav className={`${styles.navbar} ${styles.navFixed}`}>
      <div className={styles.logoContainer}>
        <a href="#"><img src={logo} alt="Logo" className={styles.logo}/></a>
        <a href="#"><p>Portfolio</p></a>
      </div>

      {/* The mobile drawer works best as an independent top-level overlay inside the nav wrapper */}
      <div className={`${styles.menuDrawer} ${isActive ? styles.menuActive : ''}`}>
        <ul>
          {/* Swapped onClick to use handleLinkClick so desktop clicks won't lock your layout */}
          <li><a href="#" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact Me</a></li>
          <li>
            <a 
              href="https://drive.google.com/file/d/1t2zScisabJSFvn_gbUAtbnSgM382Dih9/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      
      <div className={styles.iconWrapper} onClick={showMenu}>
        {isActive ? (
          <IoMdClose className={styles.menuIcon} />
        ) : (
          <CiMenuBurger className={styles.menuIcon} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";
import styles from "./navbar.module.css";
import logo from '../../images/logo.svg'

function Navbar() {
  return (
    <>
      <nav id={styles.navbar}>
        <div id={styles.logoContainer}>
        <a href="#"><img src={logo} alt="" id={styles.logo}/></a>
        <a href="#"><p>Portfolio</p></a>
        </div>
        <div id={styles.navbarItemsContainer}>
          <ul>
            <a href="#"><li id={styles.navbarLiItems}>Home</li></a>
            <a href="#_contactMainContainer_jzre6_1"><li id={styles.navbarLiItems}>Contact Me</li></a>
            <a href="#_skillsMainContainer_1jrys_1"><li id={styles.navbarLiItems}>Skills</li></a>
            <a href="#_projectsMainContainer_1s8az_1"><li id={styles.navbarLiItems}>Projects</li></a>
            <a href="https://drive.google.com/file/d/14zBsh0aPX9h0Dhb7_-XD2nIH31NcfOsZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><li  id={styles.navbarLiItems}>Resume</li></a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from '../../images/logo.svg'
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
  
    const showMenu = () => {
      setIsActive(!isActive);
    };
  

  return (
    <>
      <nav id={styles.navbar} className={styles.navFixed}>
        <div id={styles.logoContainer}>
        <a href="#"><img src={logo} alt="" id={styles.logo}/></a>
        <a href="#"><p>Portfolio</p></a>
        </div>
        <div id={styles.navbarItemsContainer}>
          <ul className={`${isActive ? styles.flex : ''} ${isActive ? styles.menu : ''}`}>
            <a href="#"><li id={styles.navbarLiItems}  onClick={showMenu}>Home</li></a>
            <a href="#_contactMainContainer_1hous_1"><li id={styles.navbarLiItems} onClick={showMenu}>Contact Me</li></a>
            <a href="#_skillsMainContainer_btoek_1"><li id={styles.navbarLiItems} onClick={showMenu}>Skills</li></a>
            <a href="#_projectsMainContainer_1l5f2_1"><li id={styles.navbarLiItems} onClick={showMenu}>Projects</li></a>
            <a href="https://drive.google.com/file/d/14zBsh0aPX9h0Dhb7_-XD2nIH31NcfOsZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><li  id={styles.navbarLiItems} onClick={showMenu}>Resume</li></a>
          </ul>
            <CiMenuBurger style={{display:"none"}} id={styles.menuIcon} onClick={showMenu}/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

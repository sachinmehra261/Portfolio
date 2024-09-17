import React from "react";
import styles from "./about.module.css";
import profile from '../../images/profile.png'
import fb from '../../images/fb.svg'
import insta from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <>
      <div id={styles.aboutMainContainer}>
        <div id={styles.aboutContentContainer}>
          <p>
            Hello,<span>I'm</span>
          </p>
          <p>Sachin Mehra</p>
          <p>Full Stack Developer</p>
          <p>
            I am committed to finding innovative solutions and continuously
            experimenting to help my clients achieve their goals.
          </p>
          <a href="whatsapp://send?phone=9682348051&text=Hello%20Sachin Mehra%20"><button id={styles.whatsAppConnect}><p>Let’s Talk </p><FaWhatsapp id={styles.whatsAppLogo}/></button></a>
          <div id={styles.socialMedia}>
            <p>Check out My</p>
            <a href="https://www.facebook.com/profile.php?id=100015125777257" target="_blank" rel="noopener noreferrer"><img src={fb} alt="" /></a>
            <a href="https://www.instagram.com/mehrasachin907/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /></a>
            <a href="https://www.linkedin.com/in/sachin-mehra-8a7541275" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
            <a href="mailto:mehrasachin261@gmail.com" target="_blank" rel="noopener noreferrer"><IoMdMail id={styles.mailLogo}/></a>
          
          </div>
        </div>
        <div id={styles.profilePicture}>
            {/* <img src={profile} alt="" /> */}
            <div></div>
        </div>
      </div>
    </>
  );
}

export default About;

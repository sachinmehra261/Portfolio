import React from "react";
import styles from "./about.module.css";
import profile from "../../images/profile.png";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div id={styles.aboutMainContainer}>
      <div id={styles.aboutContentContainer}>
        <p>
          Hello, <span>I'm</span>
        </p>
        <p>Sachin Mehra</p>
        <p>Full Stack Developer</p>
        <p>
          I am committed to finding innovative solutions and continuously
          experimenting to help my clients achieve their goals.
        </p>

        <div className={styles.buttonContainer}>
          {/* WhatsApp Button */}
          <a href="whatsapp://send?phone=9682348051&text=Hello%20Sachin%20Mehra">
            <button id={styles.whatsAppConnect}>
              Let’s Talk <FaWhatsapp />
            </button>
          </a>

          {/* Mail Button */}
          <a href="mailto:mehrasachin261@gmail.com">
            <button className={styles.mailConnect}>
              Mail Me <IoMdMail />
            </button>
          </a>
        </div>
      </div>

      <div id={styles.profilePicture}>
        <div>
          <img
            src={profile}
            alt="Sachin Mehra"
            className={styles.innerProfileImage}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

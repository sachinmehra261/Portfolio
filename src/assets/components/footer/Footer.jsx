import React from "react";
import styles from "./footer.module.css";
import fb from '../../images/fb.svg'
import insta from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer id={styles.footer}>
        <div id={styles.copyrightContainer}>
          <p>Copyright &#169; 2024 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

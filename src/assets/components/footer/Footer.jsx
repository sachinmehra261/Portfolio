import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <p>Copyright &#169; 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
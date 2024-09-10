import React from "react";
import styles from "./servicecard.module.css";
import servicecard from '../../images/servicecard1.svg'

function ServiceCard() {
  return (
    <>
      <div id={styles.serviceCardContainer}>
        <img src={servicecard} alt="" id={styles.serviceCardImg}/>
        <p>Graphic Designer</p>
        <p>strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</p>
      </div>
      <div id={styles.serviceCardContainer}>
        <img src={servicecard} alt="" id={styles.serviceCardImg}/>
        <p>Graphic Designer</p>
        <p>strive to create visually impact designs that effectively communicate ,messages & meet their unique needs.</p>
      </div>
    </>
  );
}

export default ServiceCard;

import React from "react";
import styles from "./servicecard.module.css";
import servicecardImg1 from '../../images/service-image-01.png'
import servicecardImg2 from '../../images/service-image-02.png'

function ServiceCard() {
  return (
    <>
      <div id={styles.serviceCardContainer}>
        <img src={servicecardImg1} alt="" id={styles.serviceCardImg}/>
        <p className={styles.servicesHeading}>Crafting User-Centric Experiences</p>
        <p>Proficient in HTML, CSS, and JavaScript and popular frameworks like React to build intuitive and visually appealing user interfaces.</p>
      </div>
      <div id={styles.serviceCardContainer}>
        <img src={servicecardImg2} alt="" id={styles.serviceCardImg}/>
        <p className={styles.servicesHeading}>Powering Robust and Scalable Applications</p>
        <p>Skilled in Java, Hibernate, Spring Boot and SQL for building efficient and scalable applications, ensuring data security.</p>
      </div>
    </>
  );
}

export default ServiceCard;

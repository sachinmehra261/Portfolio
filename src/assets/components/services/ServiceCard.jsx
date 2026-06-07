import React from "react";
import styles from "./servicecard.module.css";
import servicecardImg1 from '../../images/service-image-01.png';
import servicecardImg2 from '../../images/service-image-02.png';

function ServiceCard() {
  const services = [
    {
      img: servicecardImg1,
      title: "Crafting User-Centric Experiences",
      desc: "Proficient in HTML, CSS, and JavaScript and popular frameworks like React to build intuitive and visually appealing user interfaces."
    },
    {
      img: servicecardImg2,
      title: "Powering Robust and Scalable Applications",
      desc: "Skilled in Java, Hibernate, Spring Boot and SQL for building efficient and scalable applications, ensuring data security."
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <div className={styles.serviceCard} key={index}>
          <img src={service.img} alt={service.title} className={styles.serviceCardImg} />
          <h3 className={styles.servicesHeading}>{service.title}</h3>
          <p className={service.descClassName || ''}>{service.desc}</p>
        </div>
      ))}
    </>
  );
}

export default ServiceCard;
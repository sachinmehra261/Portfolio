import React from 'react';
import styles from './services.module.css';
import ServiceCard from './ServiceCard';

function Services() {
  return (
    <section id="services" className={styles.servicesMainContainer}>
      <h2 className={styles.sectionHeading}>My Services</h2>
      <p className={styles.sectionSubheading}>What I Do</p>
      <div className={styles.servicesGridContainer}>
        <ServiceCard />
      </div>
    </section>
  );
}

export default Services;
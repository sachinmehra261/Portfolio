import React from 'react'
import styles from './services.module.css'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <>
        <div id={styles.servicesMainContainer}>
            <p>My Services</p>
            <p>What I Do</p>
            <div id={styles.servicesSubContainer}>
                <ServiceCard/>
            </div>
        </div>
    </>
  )
}

export default Services

import React from 'react'
import styles from './contact.module.css'


function Contact() {
  
  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
        <div id={styles.contactMainContainer}>
            <p id={styles.contactHeading}>Contact <span>Me</span></p>
            <form id={styles.contactForm} onSubmit={handleSubmit}>
                <input type="text" name="name" id={styles.name} placeholder='Enter your name'/>
                <input type="email" name="email" id={styles.email} placeholder='Enter your email'/>
                <input type="tel" name="phone" id={styles.phone} placeholder='Enter your phone number'/>
                <textarea name="message" id={styles.message} placeholder='Enter message'></textarea>
                <button>Submit</button>
            </form>
        </div>

    </>
  )
}

export default Contact

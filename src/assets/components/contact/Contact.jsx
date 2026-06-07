import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css"; // Ensure this matches your CSS file name

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const SERVICE_ID = "service_ndhsxxc";
    const TEMPLATE_ID = "template_5h2nd2z";
    const PUBLIC_KEY = "cMHHFTdEXFv09NyfC";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatusMessage("Message sent successfully! I will get back to you soon.");
          formRef.current.reset(); // Automatically clears out the input fields
          
          // FIX: Clears the success message after 5 seconds
          setTimeout(() => {
            setStatusMessage("");
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setStatusMessage("Something went wrong. Please try again or email me directly.");
          console.error("EmailJS Error:", error.text);

          // FIX: Clears the error message after 5 seconds too
          setTimeout(() => {
            setStatusMessage("");
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out by submitting the form below!</p>

        {/* Bind your form submission handler and the reference hooks */}
        <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="user_name">Name</label>
            <input 
              type="text" 
              name="name"  /* FIXED: Changed from "from_name" to "name" to match your EmailJS {{name}} variable */
              id="user_name" 
              required 
              placeholder="Your Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user_email">Email</label>
            <input 
              type="email" 
              name="from_email" /* KEEPT: Matches your EmailJS template settings panel dynamic field */
              id="user_email" 
              required 
              placeholder="Your Email Address"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user_message">Message</label>
            <textarea 
              name="message"     /* KEEPT: Matches your EmailJS template content body variable */
              id="user_message" 
              rows="6" 
              required 
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className={styles.submitButton}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* User Feedback Status Alerts Display */}
          {statusMessage && <p className={styles.statusText}>{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
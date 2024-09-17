import React from "react";
import styles from "./projects.module.css";
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
import { FaCode } from "react-icons/fa";

function Projects() {
  return (
    <>
      <div id={styles.projectsMainContainer}>
        <p>Recent <span>Projects</span></p>
        <p>
          I bring a passion for creating user-friendly experiences and a drive
          design trends and technologies to deliver top-notch designs that meet
          needs and exceed their expectations
        </p>
        <div id={styles.projectsCardContainer}>
            <div id={styles.projectCard}>
            <img src={project1} alt="" />
            </div>
            <div className={styles.projectSeparator}></div>
            <div id={styles.projectContent}>
              <p>FoodTaurant</p>
              <p>Dynamic and responsive food ordering website developed showcasing a sleek and intuitive user interface. and backend user-centered design principles and logics.</p>
              <p><strong>Technologies used : </strong>Html, Css, JavaScript, React, Java, Hibernate, SpringBoot, MySql, Rest API.</p>
              <a href="https://github.com/sachinmehra261/FoodTaurant.git" target="_blank"><button className={styles.codeBtn}>Code &nbsp;<FaCode/></button></a>
            </div>
        </div>
        <div id={styles.projectsCardContainer}>
            <div id={styles.projectCard}>
            <img src={project2} alt="" />
            </div>
            <div className={styles.projectSeparator}></div>
            <div id={styles.projectContent}>
              <p>Event Manager : </p>
              <p>Developed a dynamic frontend and integrated with a backend with functionalities enabling efficient event scheduling and management.</p>
              <p><strong>Technologies used : </strong>JavaScript, React, Java, Hibernate, SpringBoot, Mysql</p>
              <a href="https://github.com/sachinmehra261/EventManagement.git" target="_blank"><button className={styles.codeBtn}>Code &nbsp;<FaCode/></button></a>
            </div>
        </div>
        <div id={styles.projectsCardContainer}>
            <div id={styles.projectCard}>
            <img src={project3} alt="" />
            </div>
            <div className={styles.projectSeparator}></div>
            <div id={styles.projectContent}>
              <p>ChatApplication</p>
              <p>Created a chat application with full CRUD functionality, role-based access control (Student, User, Institute),</p>
              <p><strong>Technologies used : </strong>React.js for the frontend, Spring Boot with Hibernate for the backend, and WebSockets for real-time communication.</p>
              <a href="https://github.com/sachinmehra261/Chatroom.git" target="_blank"><button className={styles.codeBtn}>Code &nbsp;<FaCode/></button></a>
            </div>
        </div>
        {/* <div id={styles.projectViewBtnContainer}>
            <button>prev</button>
            <button>next</button>
        </div> */}
      </div>
    </>
  );
}

export default Projects;

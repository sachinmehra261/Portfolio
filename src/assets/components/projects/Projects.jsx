import React from "react";
import styles from "./projects.module.css";
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import { FaCode } from "react-icons/fa";

function Projects() {
  const projectData = [
    {
      img: project1,
      title: "FoodTaurant",
      desc: "Dynamic and responsive food ordering website developed showcasing a sleek and intuitive user interface and backend user-centered design principles and logics.",
      tech: "Html, Css, JavaScript, React, Java, Hibernate, SpringBoot, MySql, Rest API.",
      link: "https://github.com/sachinmehra261/FoodTaurant.git"
    },
    {
      img: project2,
      title: "Event Manager",
      desc: "Developed a dynamic frontend and integrated with a backend with functionalities enabling efficient event scheduling and management.",
      tech: "JavaScript, React, Java, Hibernate, SpringBoot, Mysql",
      link: "https://github.com/sachinmehra261/EventManagement.git"
    },
    {
      img: project3,
      title: "ChatApplication",
      desc: "Created a chat application with full CRUD functionality, role-based access control (Student, User, Institute).",
      tech: "React.js for the frontend, Spring Boot with Hibernate for the backend, and WebSockets for real-time communication.",
      link: "https://github.com/sachinmehra261/Chatroom.git"
    }
  ];

  return (
    <div id="projects" className={styles.projectsMainContainer}>
      <h2 className={styles.sectionHeading}>Recent <span>Projects</span></h2>
      <p className={styles.sectionSubheading}>
        I bring a passion for creating user-friendly experiences and a drive to deliver top-notch designs.
      </p>
      
      <div className={styles.projectsList}>
        {projectData.map((project, index) => (
          <div className={styles.projectsCardContainer} key={index}>
            <div className={styles.projectCard}>
              <img src={project.img} alt={project.title} />
            </div>
            <div className={styles.projectSeparator}></div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <p><strong>Technologies used: </strong>{project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className={styles.codeBtn}>Code &nbsp;<FaCode/></button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
import React from "react";
import styles from "./skills.module.css";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import JavaScript from "../../images/js.svg";
import react from "../../images/react.svg";
import mysql from "../../images/sql.svg";
import java from "../../images/java.svg";
import springboot from "../../images/springboot.png";
import dart from "../../images/dart.svg";
import flutter from "../../images/flutter.png"; // 1. Imported your new Flutter SVG
import github from "../../images/github.png"; // 1. Imported your new Flutter SVG

function Skills() {
  // 2. Added Flutter into your techSkills array mapping data
  const techSkills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: JavaScript },
    { name: "React", img: react },
    { name: "Java", img: java },
    { name: "SpringBoot", img: springboot },
    { name: "Dart", img: dart },
    { name: "Flutter", img: flutter },
    { name: "MySQL", img: mysql },
    { name: "Github", img: github }
  ];

  return (
    <section id="skills" className={styles.skillsMainContainer}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.sectionHeading}>Skills</h2>
      </div>
      <div className={styles.skillsGrid}>
        {techSkills.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.imgWrapper}>
              <img src={skill.img} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
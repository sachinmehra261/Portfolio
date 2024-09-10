import React from "react";
import styles from "./skills.module.css";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import JavaScript from "../../images/js.svg";
import react from "../../images/react.svg";
import mysql from "../../images/sql.svg";
import java from "../../images/java.svg";
import springboot from "../../images/springboot.svg";
import hibernate from "../../images/hibernate.svg";

function Skills() {
  return (
    <>
      <div id={styles.skillsMainContainer}>
        <div>
          <p>Skills</p>
        </div>
        <div id={styles.skillsSubContainer}>
          <div id={styles.skillCard}>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div id={styles.skillCard}>
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div id={styles.skillCard}>
            <img src={JavaScript} alt="" />
            <p>JavaScript</p>
          </div>
          <div id={styles.skillCard}>
            <img src={react} alt="" />
            <p>React</p>
          </div>
        </div>
        <div id={styles.skillsSubContainer}>
          <div id={styles.skillCard}>
            <img src={java} alt="" />
            <p>Java</p>
          </div>
          <div id={styles.skillCard}>
            <img src={springboot} alt="" />
            <p>SpringBoot</p>
          </div>
          <div id={styles.skillCard}>
            <img src={hibernate} alt="" />
            <p>Hibernate</p>
          </div>
          <div id={styles.skillCard}>
            <img src={mysql} alt="" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

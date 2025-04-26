import React from 'react'
import {getImageUrl} from "../../Utils";
import styles from "./projectcard.module.css";

export const Projectcard = ({
    project:{title,imageSrc,description, skills, source}
}) => {
  return (
    <div className={styles.container}>
        <img 
            src={getImageUrl (imageSrc)} 
            alt={`Image of ${title}`}
            className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {
                skills.map((skill, id)=>{
                return (
                <li key={id} className={styles.skill}>{skill}</li>
                 ) })
            }
        </ul>
        <div className={styles.links}>
            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
  );
};

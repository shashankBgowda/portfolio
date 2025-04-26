import React from 'react'
import projects from "../../data/projects.json";
import styles from "./Project.module.css";
import { Projectcard } from './projectcard';


export const Project = () => {
  return (
    <section className={styles.container} id="Projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                projects.map((project, id)=>{
                    return (
                        <Projectcard key={id} project={project}/>
                    );
                })
            }
        </div>
    </section>
  )
}

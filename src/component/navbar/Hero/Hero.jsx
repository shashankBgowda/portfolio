import React from 'react'
import { getImageUrl } from '../../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I'm Shashank</h1>
            <p className={styles.description}>I'm a FULL STACK DEVELOPER using
             React and Nodejs.
            </p>
            <a href='mailto:shashankbg74@gmail.com' className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/My_photo.jpeg")} alt="Hero image" className={styles.heroimg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
  );
};

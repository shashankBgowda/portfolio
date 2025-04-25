import React from 'react';
/*import { getImageUrl } from '../../utils';*/

import aboutImage from 'D:/works/Portfolio/myportfolio/assets/about/aboutImage.png';
import cursorIcon from 'D:/works/Portfolio/myportfolio/assets/about/cursorIcon.png';
import serverIcon from 'D:/works/Portfolio/myportfolio/assets/about/serverIcon.png';

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img 
                src={aboutImage} 
                alt="me sitting" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={cursorIcon}
                        alt="Cursor icon" />
                        <div className={styles.aboutItemText}> 
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend dev with great experience working 
                                on many projects.
                            </p>
                        </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={serverIcon} 
                        alt="Server icon" />
                        <div className={styles.aboutItemText}> 
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fasrt and optimised 
                                backend with great projects.
                            </p>
                        </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={serverIcon} 
                        alt="UI icon" />
                        <div className={styles.aboutItemText}> 
                            <h3>UI Developer</h3>
                            <p>I have designed multiple landing pages 
                                anf have created designs for systems as well.
                            </p>
                        </div>
                </li>
            </ul>
        </div>
    </section>
  );
};

import React from 'react'
import { getImageUrl } from '../../Utils';
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fell free to reach out..</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email icon'/>
                <a href='mailto:shashankbg74@gmail.com'>shashankbg74@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/LinkedinIcon.png")} alt='Linkedin icon'/>
                <a href='https://www.linkedin.com/in/shashankbg/'>Linkedin.com/shashankBG</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github icon'/>
                <a href='https://github.com/shashankBgowda'>Github.com/shashankBG</a>
            </li>

            <li className={styles.link}>
                <a href='https://leetcode.com/u/ShashankB_G31/'>Leetcode.com/shashankBG</a>
            </li>
        </ul>
    </footer>
  )
}

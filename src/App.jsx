
import styles from "./App.module.css";
import { About } from "./component/About/About";
import { Contact } from "./component/contact/contact";
import { Experience } from "./component/Experiene/experience";
import { Hero } from "./component/Hero/Hero";
import { Navbar } from "./component/navbar/Navbar";
import { Project } from "./component/Projects/project";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About />
    <Experience/>
    <Project/>
    <Contact />
  </div>
}

export default App

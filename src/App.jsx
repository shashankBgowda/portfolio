
import styles from "./App.module.css";
import { About } from "./component/About/About";
import { Experience } from "./component/Experiene/experience";
import { Hero } from "./component/Hero/Hero";
import { Navbar } from "./component/navbar/Navbar";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About />
    <Experience/>
  </div>
}

export default App

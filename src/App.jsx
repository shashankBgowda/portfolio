
import styles from "./App.module.css";
import { Hero } from "./component/navbar/Hero/Hero";
import { Navbar } from "./component/navbar/Navbar";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero/>
  </div>
}

export default App

import AboutMe from "../AboutMe";
import Banner from "../Banner";
import Projects from "../Projects";
import SectionsCards from "../SectionsCards/SectionsCards";
import styles from "./main.module.css";

function Main() {
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <AboutMe />
        <SectionsCards title="Skills" />
        <SectionsCards title="Hobbies" />
        {/* <Projects /> */}
      </div>
    </>
  );
}

export default Main;

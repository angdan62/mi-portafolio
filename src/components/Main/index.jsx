import styles from "./main.module.css";
import Banner from "../Banner";
import AboutMe from "../AboutMe";
import SectionInfo from "../SectionInfo";
import SectionsCards from "../SectionsCards";
import AcademySection from "../AcademySection";

function Main() {
  return (
    <div className={styles.container}>
      <SectionInfo title="">
        <Banner></Banner>
      </SectionInfo>
      <SectionInfo title="ACERCA DE MI.">
        <AboutMe></AboutMe>
      </SectionInfo>
      <SectionInfo title="SKILLS">
        <SectionsCards />
      </SectionInfo>
      <SectionInfo title="HOBBIES">
      <SectionsCards />
      </SectionInfo>
      <SectionInfo title="FORMACIÓN">
        <AcademySection />
      </SectionInfo>
      <SectionInfo title="EXPERIENCIA PROFESIONAL"></SectionInfo>
      <SectionInfo title="PROYECTOS WEB DESARROLLADOS"></SectionInfo>
      <SectionInfo title="CONTACTO"></SectionInfo>
    </div>
  );
}

export default Main;

import styles from "./ProfessionalExperienceCard.module.css";
import logo from "../../img/professionalExperience/decod_print.png";

export default function ProfessionalExperienceCard() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="decod" />
        <div className={styles.info}>
          <h2>Encriptador de Texto</h2>
          <p>Challenge Alra Codificador</p>
          <div className={styles.controls}>
            <button>Repositorio</button>
            <button>Ver demo</button>
          </div>
        </div>
      </div>
    </>
  );
}

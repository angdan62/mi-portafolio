import styles from "./AcademyCard.module.css";
import logo from "../../img/academy/alura_logo.png";

export default function AcademyCard() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.academyList}>
          <li><img src={logo} alt="Logo" /></li>
          <li><h4>Formación en UI Design</h4></li>
          <li><p>2024 - Alura</p></li>
        </ul>
      </div>
    </>
  );
}

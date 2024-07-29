import { SectionCard } from "../SectionCard";
import styles from "./SectionsCards.module.css";
import { FaHtml5 } from "react-icons/fa";

function SectionsCards({ title }) {
  return (
    <>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.cards}>
          <SectionCard logo={<FaHtml5 />} title="HTML"></SectionCard>
        </div>
      </div>
    </>
  );
}

export default SectionsCards;

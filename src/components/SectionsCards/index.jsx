import styles from "./SectionsCards.module.css";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import SectionCard from "../SectionCard";

function SectionsCards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <SectionCard logo={<FaHtml5 />} title="HTML"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
          <SectionCard logo={<FaCss3Alt />} title="CSS"></SectionCard>
        </div>
      </div>
    </>
  );
}

export default SectionsCards;

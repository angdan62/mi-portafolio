import AcademyCard from "../AcademyCard";
import styles from "./AcademySection.module.css";

export default function AcademySection(){
    return(<>
        <div className={styles.container}>
            <AcademyCard></AcademyCard>
            <AcademyCard></AcademyCard>
            <AcademyCard></AcademyCard>
            <AcademyCard></AcademyCard>
            <AcademyCard></AcademyCard>
            <AcademyCard></AcademyCard>
            <AcademyCard></AcademyCard>
        </div>
    </>);
}
import ProfessionalExperienceCard from "../ProfessionalExperienceCard";
import styles from "./ProfessionalExperience.module.css";

export default function ProfessionalExperience(){
    return (<>
        <div className={styles.container}>
            <ProfessionalExperienceCard />
            <ProfessionalExperienceCard />
            <ProfessionalExperienceCard />
        </div>
    </>);
}
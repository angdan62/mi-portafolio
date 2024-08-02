import DevelopedProjectsCard from "../DevelopedProjectsCard";
import styles from "./DevelopedProjects.module.css";

export default function DevelopedProjects(){
    return (<>
        <div className={styles.container}>
            <DevelopedProjectsCard />
            <DevelopedProjectsCard />
            <DevelopedProjectsCard />
        </div>
    </>);
}
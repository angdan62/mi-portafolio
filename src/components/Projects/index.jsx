import CardProject from "../CardProject";
import styles from "./Projects.module.css";

function Projects (){
    return(<>
        <div className={styles.container}>
            <h1>MIS PROYECTOS</h1>
            <CardProject />
        </div>
    </>);
}

export default Projects;
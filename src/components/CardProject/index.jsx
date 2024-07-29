import styles from "./CardProject.module.css";

function CardProject(){
    return (<>
        <div className={styles.container}>
             <div className={styles.logo}>

             </div>
             <div className={styles.info}>
                <div className={styles.text}>

                </div>
                <div className={styles.controls}>
                    <button className={styles.button}>Github</button>
                    <button className={styles.button}>Visitar</button>
                </div>
             </div>
        </div>
    </>);
}

export default CardProject;
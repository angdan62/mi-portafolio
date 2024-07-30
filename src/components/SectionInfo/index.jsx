import styles from "./SectionInfo.module.css";

export default function SectionInfo({ title, children}){
    return(<>
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.component}>
                {children}
            </div>
        </div>
    </>);
}
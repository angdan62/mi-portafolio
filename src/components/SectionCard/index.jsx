import styles from "./SectionCard.module.css";

export default function SectionCard({logo, title}){
    return(<>
        <div className={styles.container}>
            <ul className={styles.cardList}>
                <li>{logo}</li>
                <li>{title}</li>
            </ul>
        </div>
    </>);
}
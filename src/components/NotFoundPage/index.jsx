import styles from "./NotFoundPage.module.css";
import notFound from "./notFound.webp";

function NotFoundPage(){
    return(<>
        <div className={styles.container}>
            <img src={ notFound } alt="NotFound" />
        </div>
    </>)
}

export default NotFoundPage;
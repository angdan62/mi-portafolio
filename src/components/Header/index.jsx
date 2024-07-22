import styles from "./Header.module.css";

function Header(){
    return(<>
        <header className={styles.headerContainer}>
            <div className={styles.headerLogo}>
                <img src="" alt="" />
            </div>
            <nav className={styles.headerNav}>
            </nav>
        </header>
    </>)
}

export default Header;
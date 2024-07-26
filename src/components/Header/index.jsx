import HeaderLink from "../HeaderLink";
import styles from "./Header.module.css";
import logo from "./logo2.png";
import { IoHomeOutline, IoChatboxOutline, IoCafeOutline, IoDesktopOutline } from "react-icons/io5";

function Header(){
    return(<>
        <header className={styles.headerContainer}>
            <div className={styles.headerLogo}>
                <img src={logo} alt="Logo" />
            </div>
            <nav className={styles.headerNav}>
                <HeaderLink url="./" logo={<IoHomeOutline />}>Inicio</HeaderLink>
                <HeaderLink url="./aboutme" logo={<IoCafeOutline />}>Sobre mi</HeaderLink>
                <HeaderLink url="./proyects" logo={<IoDesktopOutline />}>Portafolio</HeaderLink>
                <HeaderLink url="./contact" logo={<IoChatboxOutline />}>Contacto</HeaderLink>
            </nav>
        </header>
    </>)
}

export default Header;
import styles from "./HeaderLink.module.css";
import { Link } from "react-router-dom";

function HeaderLink({ children, logo, url }) {
  return (
    <Link to={url} className={styles.container}>
      {logo}
      <span className={styles.link}>{children}</span>
    </Link>
  );
}

export default HeaderLink;

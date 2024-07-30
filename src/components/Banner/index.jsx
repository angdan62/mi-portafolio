import styles from "./Banner.module.css";
import photoMe from "../../img/title__profile__img.png";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoDocumentAttachSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className={styles.container}>
      <div className={styles.logo}>
          <img src={photoMe} alt="AboutMe" />
        </div>
        <div className={styles.title}>
          <h2>
            Hola, mi nombre es Angel Cesar Villa Flores y este es mi portafolio
            trabajo.
          </h2>
          <h3>
            Soy ingeniero en Sistemas, que comienza en el fascinante mundo del
            desarrollo web. Actualmente, estoy aprendiendo y perfeccionando mis
            habilidades en HTML, CSS y JavaScript para crear interfaces de
            usuario atractivas y funcionales con el uso de herramientas como lo
            es React.
          </h3>
          <ul className={styles.netwoksList}>
            <li><Link className="networkElement" to="https://github.com/angdan62" target="_blank" ><IoLogoGithub />Github</Link></li>
            <li><Link className="networkElement" to="https://www.linkedin.com/in/angel-cesar-villa-flores-21033b1b0/" target="_blank"><IoLogoLinkedin />Linkedin</Link></li>
            <li><Link className="networkElement" to="https://www.instagram.com/angelceesar" target="_blank"><IoLogoInstagram />Instagram</Link></li>
            <li><Link className="networkElement" to="./" target="_blank"><IoDocumentAttachSharp />Curriculum</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner;

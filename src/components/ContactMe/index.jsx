import styles from "./ContactMe.module.css";
import contactImage from "./contact_image.png";

export default function ContactMe() {
  return (
    <>
      <div className={styles.container}>
        <img src={contactImage} alt="Contact Me" className={styles.image} />
        <form className={styles.form}>
          <div className={styles.info}>
            <h2>Contacto</h2>
            <p>
              Completa el siguiente formulario y me pondré en contacto con usted
              lo antes posible.
            </p>
          </div>
          <div className={styles.formText}>
            <input type="text" name="" id="" placeholder="Nombre" className={styles.text} />
            <input type="email" name="" id="" placeholder="E-mail" className={styles.text} />
            <input type="text" name="" id="" placeholder="Asunto" className={styles.text} />
            <input type="textarea" name="" id="" placeholder="Mensaje" className={styles.textarea} />
            <input type="submit" name="" id="" className={styles.button} />
          </div>
          
        </form>
      </div>
    </>
  );
}

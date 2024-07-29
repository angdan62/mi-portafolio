import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutMe}>
          <h1>SOBRE MI</h1>
          <div className={styles.aboutMeInfo}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat,
              libero magna et netus iaculis massa porta at, ullamcorper diam
              maecenas congue curabitur sapien hendrerit. Primis molestie
              viverra mattis suspendisse erat nam leo aliquam nibh ultrices,
              tincidunt posuere tortor netus placerat vestibulum taciti habitant
              feugiat odio, praesent integer lacinia tempor ornare aliquet
              montes lectus conubia. Donec cubilia aliquam tempor habitant
              sapien turpis class, suspendisse diam mattis platea malesuada
              sollicitudin himenaeos viverra, magnis venenatis maecenas fusce
              hendrerit placerat.
            </p>
            <p>
              Scelerisque auctor semper congue aliquam, litora tincidunt sapien
              volutpat, ut rutrum egestas. Fringilla hac ultrices tortor taciti
              platea volutpat nam feugiat duis quis augue, eu nisi ligula
              posuere leo condimentum risus auctor eget. Senectus imperdiet sed
              ligula in aliquet mollis class dapibus venenatis, dictumst turpis
              magnis montes facilisis conubia orci odio proin nunc, nascetur
              ridiculus tellus massa mi cras tempor augue.
            </p>
          </div>
        </div>
        <div className={styles.studies}>
          <h1>MIS ESTUDIOS</h1>
          <div className={styles.studiesList}>
            <ul>
              <li>
                2023. Ingeniería en Sistemas Computacionales. Utel Universidad.
                Titulado.
              </li>
              <li>
                2023. Ingeniería en Sistemas Computacionales. Utel Universidad.
                Titulado.
              </li>
              <li>
                2023. Ingeniería en Sistemas Computacionales. Utel Universidad.
                Titulado.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.workExperience}>
          <h1>MI EXPERIENCIA LABORAL</h1>
          <div className={styles.workExperienceList}>
            <ul>
              <li>
                2024 - Actualidad. Procuraduría General de Justicia del Estado
                de BCS. Encargado de tecnologías en zona sur.
              </li>
              <li>
                2024 - Actualidad. Procuraduría General de Justicia del Estado
                de BCS. Encargado de tecnologías en zona sur.
              </li>
              <li>
                2024 - Actualidad. Procuraduría General de Justicia del Estado
                de BCS. Encargado de tecnologías en zona sur.
              </li>
              <li>
                2024 - Actualidad. Procuraduría General de Justicia del Estado
                de BCS. Encargado de tecnologías en zona sur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

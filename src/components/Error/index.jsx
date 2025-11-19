import { NavLink } from "react-router-dom";
import styles from "./Error.module.scss";

export default function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>
        <span> Oups! La page que&nbsp;</span> vous demandez n'existe pas.
      </p>
      <NavLink to="/" className={styles.backToHome}>
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

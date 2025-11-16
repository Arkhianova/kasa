import styles from "./Footer.module.scss";
import logoFooter from "../../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logoFooter} alt="Logo header" className={styles.logo} />
      <p className={styles.copyright}>&copy; 2025 Kasa. All rights reserved</p>
    </footer>
  );
}


import { useState } from "react";
import styles from "./Collapse.module.scss";
import iconClosed from "../../assets/closed.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.collapse}>
      <div className={styles.header}>
        <h2 className={styles.titre}>{title}</h2>

        <img
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
          src={iconClosed}
          alt="afficher le contenu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        <p className={`${styles.paragraph} ${isOpen ? styles.show : ""}`}>
          {content}
        </p>
      </div>
    </div>
  );
}

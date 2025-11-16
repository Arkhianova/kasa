import { useState } from "react";
import styles from "./Collapse.module.scss";
import iconOpened from "../../assets/opened.png";
import iconClosed from "../../assets/closed.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.collapse}>
      <div className={styles.header}>
        <h2 className={styles.titre}>{title}</h2>
        <img
          className={styles.icon}
          src={isOpen ? iconOpened : iconClosed}
          alt="afficher le contenu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className={styles.content}>
          <p className={styles.paragraph}>{content}</p>
        </div>
      )}
    </div>
  );
}


import {NavLink} from "react-router-dom";
import styles from "./Card.module.scss";

export default function Card(props) {
  const { title, cover, id } = props;
  
  return (
     <NavLink to={`/annonce/${id}`} className={styles.link} end>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.img} src={cover} alt={title} />
      </div>
    </NavLink>
  );
}

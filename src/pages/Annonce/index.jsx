import { useParams } from "react-router-dom";
import styles from "./Annonce.module.scss";

export default function Annonce() {
  const { id } = useParams();

  return (
    <div className={styles.Annonce}>
      Annonce numéro : {id} 
    </div>
  );
}
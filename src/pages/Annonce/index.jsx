import React from "react";
import styles from "./Annonce.module.scss";
import { useParams } from "react-router-dom";

export default function Annonce() {
  const params = useParams();
  const { id } = params;
  return (
    <div className={styles.Annonce}>
      Annonce numéro : {id}  
    </div>
  );
}
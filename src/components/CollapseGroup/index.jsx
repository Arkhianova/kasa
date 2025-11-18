import styles from "./CollapseGroup.module.scss";
import Collapse from "../Collapse";
import jsonData from "../../json_data/valeurs.json";

export default function CollapseGroup() {
  const data = jsonData.map((item) => ({
    index: item.index,
    title: item.titre,
    description: item.description,
  }));

  return (
    <section className={styles.collapseGroup}>
      {data.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.description} />
      ))}
    </section>
  );
}

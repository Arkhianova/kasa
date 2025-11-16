import styles from "./Gallery.module.scss";
import Card from "../Card";
import jsonData from "../../json_data/logements.json";

export default function Gallery() {
  console.log(jsonData);
  const data = jsonData.map((item) => ({
    id: item.id,
    title: item.title,
    cover: item.cover,
  }));

  return (
    <section className={styles.gallery}>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          cover={item.cover}
          id={item.id}
        />
      ))}
    </section>
  );
}


import styles from "./Banner.module.scss";
import homeBanner from "../../assets/banner-home.png";
import aboutBanner from "../../assets/banner-about.png";

export default function Banner({ page }) {

  return (
    <div className={styles.heroBanner} >
      <img
         className={`${styles.img} ${page === "home" ? styles.home : styles.about}`}
        src={page === "home" ? homeBanner : aboutBanner}
          alt={`Banner for ${page} page`}
        />
    </div>
  );
}

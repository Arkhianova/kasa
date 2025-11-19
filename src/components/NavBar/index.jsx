import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li className={`${styles.navItem} ${styles.home}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Accueil
          </NavLink>
        </li>
        <li className={`${styles.navItem} ${styles.about}`}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

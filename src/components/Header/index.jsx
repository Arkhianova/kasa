import styles from "./Header.module.scss";
import Navbar from '../NavBar';
import logoHeader from '../../assets/logo-header.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img 
        src={logoHeader} 
        alt="Logo header" 
        className={styles.logo}
      />
      <Navbar />
    </header>
  );
}

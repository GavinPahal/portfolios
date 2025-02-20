import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/images/lgog.png" alt="Logo" className={styles.logo} />
        <span className={styles.name}>Gavin Pahal</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/https://www.gavinpahal.com/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/case-study">Case Study</Link></li>
      </ul>
    </nav>
  );  
};

export default NavBar;

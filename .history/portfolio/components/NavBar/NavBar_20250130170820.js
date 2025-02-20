import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link href="/">Gavin</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/case-study">Case Study</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

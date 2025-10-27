import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = Math.min(1, scrollY / 300);
  const backgroundAlpha = Math.min(0.95, scrollY / 250);

  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${backgroundAlpha})`,
        backdropFilter: `blur(${backgroundAlpha * 10}px)`,
        opacity: fadeIn,
      }}
    >
      <div className={styles.logoContainer}>
        <img src="/images/lgog.png" alt="Logo" className={styles.logo} />
        <span className={styles.name}>Gavin Pahal</span>
      </div>

      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/AboutMe">About</Link></li>
        <li><Link href="/case-study">Case Study</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

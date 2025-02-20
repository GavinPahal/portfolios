import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500); // Delay before animation starts
  }, []);

  return (
    <header className={styles.hero}>
      <img
        src="/images/Group 6.png"
        alt="Gavin Pahal Portfolio"
        className={styles.heroImage}
      />
      <div className={`${styles.heroText} ${animate ? styles.showText : ""}`}>
        <h1 className={styles.title}>
          Hi, <br /> I'm <br /> Gavin Pahal
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;

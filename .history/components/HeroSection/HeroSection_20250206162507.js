import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const words = "Hi, I'm Gavin";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + words[index]);
        setIndex(index + 1);
      }, 100); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <header className={styles.hero}>
      <img
        src="/images/Group 6.png"
        alt="Gavin Pahal Portfolio"
        className={styles.heroImage}
      />
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          <span className={styles.animatedText}>{displayText}</span> <br /> Pahal
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;

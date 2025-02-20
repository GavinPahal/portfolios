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
      <div className={styles.heroText}>
        <h1 className={styles.highlightedText}>{displayText}</h1>

      </div>
      <img
        src="/images/Group 6.png"
        alt="Gavin Pahal Portfolio"
        className={styles.heroImage}
      />
    </header>
  );
};

export default HeroSection;

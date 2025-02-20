import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const words = "Hi, I'm Gavin Pahal";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [activeBranch, setActiveBranch] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + words[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBranch((prev) => (prev < 5 ? prev + 1 : 5)); // Adjust branches
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.branchContainer}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`${styles.branch} ${i <= activeBranch ? styles.show : ""}`}
          ></div>
        ))}
      </div>
      <div className={styles.heroText}>
        <h1 className={styles.highlightedText}>{displayText}</h1>
      </div>
      <img
        src="/images/Group 188.png"
        alt="Gavin Pahal Portfolio"
        className={styles.heroImage}
      />
    </header>
  );
};

export default HeroSection;

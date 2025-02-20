import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"]; // Two-line text
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line < words.length && index < words[line].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => {
          const updatedText = [...prev];
          updatedText[line] += words[line][index];
          return updatedText;
        });
        setIndex(index + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else if (line < words.length - 1) {
      setLine(line + 1);
      setIndex(0);
    }
  }, [index, line, words]);

  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.highlightedText}>
          {displayText[0]} <br /> {displayText[1]}
        </h1>
      </div>
      <img
        src="/images/Vector (4).png" // Make sure this path matches your stored image
        alt="Decorative Branch"
        className={styles.branchImage}
      />
    </header>
  );
};

export default HeroSection;

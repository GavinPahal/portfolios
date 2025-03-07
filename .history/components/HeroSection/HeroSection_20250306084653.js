import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const [showSquares, setShowSquares] = useState(false);

  useEffect(() => {
    if (line < words.length && index < words[line].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => {
          const updatedText = [...prev];
          updatedText[line] += words[line][index];
          return updatedText;
        });
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (line < words.length - 1) {
      setLine(line + 1);
      setIndex(0);
    }
  }, [index, line, words]);

  useEffect(() => {
    setTimeout(() => setShowResume(true), 2000);
    setTimeout(() => setShowSquares(true), 2500);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1>{displayText[0]} <br /> {displayText[1]}</h1>
        {showResume && (
          <Link href="/resume" className={styles.resumeButton}>Resume</Link>
        )}
      </div>
      
      <div className={styles.squaresContainer}>
        {showSquares &&
          [1, 2, 3, 4].map((num) => (
            <div key={num} className={styles.square}></div>
          ))}
      </div>
    </header>
  );
};

export default HeroSection;

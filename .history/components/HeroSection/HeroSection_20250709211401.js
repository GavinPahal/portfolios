import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [showApple, setShowApple] = useState(false);

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
    setTimeout(() => {
      setShowApple(true);
    }, 2000);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.highlightedText}>
            {displayText[0]} <br /> {displayText[1]}
          </h1>
          <Link href="/resume" className={styles.resumeButton}>
            Resume
          </Link>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageBox}><img src="/images/box1.png" alt="Project 1" /></div>
          <div className={styles.imageBox}><img src="/images/box2.png" alt="Project 2" /></div>
          <div className={styles.imageBox}><img src="/images/box3.png" alt="Project 3" /></div>
          <div className={styles.imageBox}><img src="/images/box4.png" alt="Project 4" /></div>
        </div>
      </div>
      {showApple && (
        <Link href="/resume">
          <img
            src="/images/apple.svg"
            alt="Read Resume"
            className={styles.apple}
          />
        </Link>
      )}
    </header>
  );
};

export default HeroSection;
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
    } else {
      setTimeout(() => setShowApple(true), 2000);
    }
  }, [index, line, words]);

  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>{displayText[0]} <br /> {displayText[1]}</h1>
          <Link href="/resume" className={styles.resumeButton}>
            Resume
          </Link>
        </div>
        <div className={styles.imageGrid}>
          {["box1.png", "box2.png", "box3.png", "box4.png"].map((box, i) => (
            <div key={i} className={styles.imageBox}>
              <img src={`/images/${box}`} alt={`Project ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {showApple && (
        <img
          src="/images/apple.png"
          alt="Apple"
          className={styles.apple}
        />
      )}
    </header>
  );
};

export default HeroSection;

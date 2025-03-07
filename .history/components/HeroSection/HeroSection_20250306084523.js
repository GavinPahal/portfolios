import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [showElements, setShowElements] = useState(false);

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
      setShowElements(true);
    }, 2000);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1>{displayText[0]} <br /> {displayText[1]}</h1>
        <Link href="/resume" className={styles.resumeButton}>Resume</Link>
      </div>

      {/* Square Boxes */}
      <div className={styles.boxContainer}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`${styles.box} ${showElements ? styles.boxVisible : ""}`}></div>
        ))}
      </div>
    </header>
  );
};

export default HeroSection;
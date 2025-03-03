import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import ThreeDScene from "./ThreeDScene.js";

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
      <div className={styles.heroText}>
        <h1 className={styles.highlightedText}>
          {displayText[0]} <br /> {displayText[1]}
        </h1>
      </div>
      <img
        src="/images/branches.svg"
        alt="Decorative Branch"
        className={styles.branchImage}
      />
      {showApple && (
        <Link href="/resume">
          <div className={styles.appleContainer}>
            <ThreeDScene />
          </div>
        </Link>
      )}
    </header>
  );
};

export default HeroSection;
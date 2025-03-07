import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [showApple, setShowApple] = useState(false);
  const [showImages, setShowImages] = useState(false);

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
  }, [index, line]);

  useEffect(() => {
    setTimeout(() => {
      setShowApple(true);
    }, 2000);
    setTimeout(() => {
      setShowImages(true);
    }, 2500);
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.highlightedText}>
          {displayText[0]} <br /> {displayText[1]}
        </h1>
      </div>

      {/* Animated Square Boxes */}
      <div className={`${styles.imageGrid} ${showImages ? styles.showImages : ""}`}>
        {["box1.png", "box2.png", "box3.png", "box4.png"].map((src, index) => (
          <div key={index} className={styles.boxImage}>
            <img src={`/images/${src}`} alt={`Project preview ${index + 1}`} />
          </div>
        ))}
      </div>

      <img
        src="/images/branches.svg"
        alt="Decorative Branch"
        className={styles.branchImage}
      />

      {showApple && (
        <Link href="/resume">
          <img src="/images/apple.svg" alt="Read Resume" className={styles.apple} />
        </Link>
      )}
    </header>
  );
};

export default HeroSection;

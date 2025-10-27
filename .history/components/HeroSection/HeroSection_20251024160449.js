import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Typing animation
  useEffect(() => {
    if (line < words.length && index < words[line].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => {
          const updated = [...prev];
          updated[line] += words[line][index];
          return updated;
        });
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (line < words.length - 1) {
      setLine(line + 1);
      setIndex(0);
    }
  }, [index, line]);

  // Scroll tracking for fade + parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade and motion logic
  const fadeOut = Math.max(0, 1 - scrollY / 300); // controls disappearance rate
  const moveUp = Math.min(scrollY / 3, 100); // slight upward motion
  const imageShift = scrollY * 0.2; // parallax effect

  return (
    <header className={styles.hero}>
      <div
        className={styles.heroText}
        style={{
          opacity: fadeOut,
          transform: `translateY(-${moveUp}px)`,
        }}
      >
        <h1 className={styles.highlightedText}>
          {displayText[0]} <br /> {displayText[1]}
        </h1>
      </div>

      <img
        src="/images/branches.svg"
        alt="Decorative Branch"
        className={styles.branchImage}
        style={{ transform: `translateY(${imageShift}px)` }}
      />
    </header>
  );
};

export default HeroSection;

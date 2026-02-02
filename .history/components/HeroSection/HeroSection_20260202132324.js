import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const words = ["GAVIN PAHAL"];
  const [displayText, setDisplayText] = useState([""]);
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Typing animation
  useEffect(() => {
    if (index < words[0].length) {
      const timeout = setTimeout(() => {
        setDisplayText([displayText[0] + words[0][index]]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeOut = Math.max(0, 1 - scrollY / 300);
  const moveUp = Math.min(scrollY / 3, 100);

  return (
    <section className={styles.hero}>
      <div
        className={styles.heroText}
        style={{
          opacity: fadeOut,
          transform: `translateY(-${moveUp}px)`
        }}
      >
        <span className={styles.highlightedText}>
          {displayText[0]}
        </span>

        <p className={styles.subText}>
          I’m Gavin, a digital designer creating clean, intuitive experiences
          that feel natural to use. I blend graphic design and UI/UX to simplify
          ideas, solve real problems, and design with clarity, purpose, and intention.
        </p>

        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
};

export default HeroSection;

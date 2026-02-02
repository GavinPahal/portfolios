import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const words = ["GAVIN PAHAL"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [scrollY, setScrollY] = useState(0);


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


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeOut = Math.max(0, 1 - scrollY / 300);
  const moveUp = Math.min(scrollY / 3, 100);

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

   
        <p className={styles.subText}>
          I’m Gavin, a digital designer creating clean, intuitive experiences that feel natural to
          use. I blend graphic design and UI/UX to simplify ideas, solve real problems, and design
          with clarity, purpose, and intention.
        </p>

        {/* Animated arrow for scroll transition */}
        <div className={styles.arrowContainer}>
          <img
            src="/down-Double Down.png" // <-- replace with actual arrow path (you can use your given SVG)
            alt="Scroll down"
            className={styles.arrow}
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

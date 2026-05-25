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
  }, [index, displayText, words]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeOut = Math.max(0, 1 - scrollY / 300);
  const moveUp = Math.min(scrollY / 3, 100);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/Rectangle 65 (1).png')"
      }}
    >
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

        <h1 className={styles.mainHeading}>
          SoftMoc Hero Banner Concept
        </h1>

        <p className={styles.subText}>
          A homepage hero banner concept inspired by comfort-first
          footwear brands, blending modern UI design with strong
          retail visual storytelling.
        </p>

        <a
          href="#projects"
          className={styles.ctaButton}
        >
          View Project
        </a>

        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useEffect, useState, useRef } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import ThreeDScene from "../ThreeDScene/ThreeDScene";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const [displayText, setDisplayText] = useState(["", ""]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [showApple, setShowApple] = useState(false);
  const heroRef = useRef(null);

  // Typewriter effect
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

  // Show apple after delay
  useEffect(() => {
    setTimeout(() => {
      setShowApple(true);
    }, 2000);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const branch = heroRef.current.querySelector(`.${styles.branchImage}`);
        const text = heroRef.current.querySelector(`.${styles.heroText}`);

        if (branch) {
          branch.style.transform = `rotate(-70deg) translateX(${scrollY * 0.5}px)`;
        }
        if (text) {
          text.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.hero} ref={heroRef}>
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
      {/* Falling Leaves */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={styles.leaf}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 30 + 20}px`,
          }}
        />
      ))}
    </header>
  );
};

export default HeroSection;
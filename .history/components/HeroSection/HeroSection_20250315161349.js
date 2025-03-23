import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import gsap from "gsap";

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
  const boxesRef = useRef([]);

  const images = [
    "/images/bite.svg",
    "/images/Organge cans 1.png",
    "/images/box3.png",
    "/images/box4.png",
  ];

  useEffect(() => {
    boxesRef.current.forEach((box) => {
      gsap.to(box, {
        x: () => Math.random() * 1600 - 800,
        y: () => Math.random() * 1000 - 500,
        scale: () => Math.random() * 1.2 + 0.8,
        duration: 5 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>
            {words[0]}
            <br />
            {words[1]}
          </h1>
          <Link href="/resume">
            <button className={styles.resumeButton}>Resume</button>
          </Link>
        </div>
        <div className={styles.imageGrid}>
          {images.map((image, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className={styles.imageBox}
              style={{
                top: ${Math.random() * 100}%,
                left: ${Math.random() * 100}%,
              }}
            >
              <img src={image} alt={Project ${i + 1}} />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection; 
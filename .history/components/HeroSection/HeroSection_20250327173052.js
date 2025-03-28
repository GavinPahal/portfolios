import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./HeroSection.module.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable"; 

gsap.registerPlugin(Draggable); 

const HeroSection = () => {
  const router = useRouter();
  const words = ["Hi, I'm", "Gavin Pahal"];
  const boxesRef = useRef([]);
  
  const images = [
    "/images/Basketball.svg",
    "/images/book.png",
    "/images/gutiars.png",
    "/images/glove.svg",
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

      // Make images draggable
      Draggable.create(box, {
        type: "x,y",
        bounds: "body",
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
          <button
            className={styles.resumeButton}
            onClick={() => router.push("/resume")}
          >
            Resume
          </button>
        </div>
        <div className={styles.imageGrid}>
          {images.map((image, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className={styles.imageBox}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <img src={image} alt={`Project ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
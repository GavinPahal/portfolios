"use client";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { Svg, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import styles from "./HeroSection.module.css";

// Typing animation setup
const words = ["Hi, I'm", "Gavin Pahal"];
const HeroSection = () => {
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
  }, [index, line]);

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

      {/* 3D Scene */}
      <Canvas className={styles.canvas} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Branch />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Clickable Animated Apple */}
      {showApple && (
        <Link href="/resume">
          <img
            src="/images/apple.svg"
            alt="Read Resume"
            className={styles.apple}
          />
        </Link>
      )}
    </header>
  );
};

// 3D Branch Component (With Sway Animation)
const Branch = () => {
  const branchRef = useRef();

  // Smooth sway animation
  const { rotation } = useSpring({
    rotation: [0, 0, 0.05],
    loop: { reverse: true },
    config: { mass: 1, tension: 100, friction: 20 },
  });

  return (
    <a.group ref={branchRef} position={[0, 1, -3]} rotation={rotation}>
      <Svg src="/images/Vector.svg" scale={[1.5, 1.5, 1.5]} />
    </a.group>
  );
};

export default HeroSection;

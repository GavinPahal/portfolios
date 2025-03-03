"use client";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
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
      <Canvas className={styles.canvas} camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls />
        <Tree />
        {showApple && <Apple />}
      </Canvas>

      {/* Clickable Apple (Fallback) */}
      {showApple && (
        <Link href="/resume">
          <img src="/images/apple.svg" alt="Read Resume" className={styles.appleFallback} />
        </Link>
      )}
    </header>
  );
};

// 🌳 3D Tree (Swaying Animation)
const Tree = () => {
  const branchRef = useRef();

  useFrame(({ clock }) => {
    branchRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.05;
  });

  return (
    <a.mesh ref={branchRef} position={[0, 1, -3]}>
      {/* Tree Trunk */}
      <cylinderGeometry args={[0.2, 0.3, 4, 8]} />
      <meshStandardMaterial color={"#5C4033"} />
      {/* Leaves */}
      <mesh position={[0, 2, 0]}>
        <coneGeometry args={[1.5, 2, 8]} />
        <meshStandardMaterial color={"#228B22"} />
      </mesh>
    </a.mesh>
  );
};

// 🍎 3D Apple (Falls Down)
const Apple = () => {
  const appleRef = useRef();
  const [falling, setFalling] = useState(true);

  useFrame(() => {
    if (falling) {
      appleRef.current.position.y -= 0.02; // Falling Speed
      if (appleRef.current.position.y <= -1.5) {
        setFalling(false); // Stop Falling
      }
    }
  });

  return (
    <a.mesh ref={appleRef} position={[0, 3, -3]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={"red"} />
    </a.mesh>
  );
};

export default HeroSection;

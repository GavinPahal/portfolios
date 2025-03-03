"use client";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Corrected import
import { Float } from "@react-three/drei"; // ✅ Ensure correct import
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
        <Branch />
      </Canvas>

      {/* Floating Apple Animation */}
      {showApple && (
        <Link href="/resume">
          <motion.img
            src="/images/apple.svg"
            alt="Read Resume"
            className={styles.apple}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [0, -5, 0], opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </Link>
      )}
    </header>
  );
};

// 3D Branch Component (Swaying Effect)
const Branch = () => {
  const branchRef = useRef();

  useFrame(({ clock }) => {
    if (branchRef.current) {
      branchRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={branchRef} position={[0, 1, -3]}>
        <cylinderGeometry args={[0.1, 0.2, 4, 8]} />
        <meshStandardMaterial color={"#5C4033"} />
      </mesh>
    </Float>
  );
};

export default HeroSection;

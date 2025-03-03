"use client";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import Link from "next/link";
import { Float, Environment } from "@react-three/drei";
import styles from "./HeroSection.module.css";

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
      {/* Text Section */}
      <div className={styles.heroText}>
        <h1 className={styles.highlightedText}>
          {displayText[0]} <br /> {displayText[1]}
        </h1>
      </div>

      {/* 3D Scene - Dark Branch */}
      <Canvas className={styles.canvas} camera={{ position: [0, 0, 5] }}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <TreeBranch />
      </Canvas>

      {/* Floating Apple Effect */}
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

// **Custom 3D Branch Component**
const TreeBranch = () => {
  const branchRef = useRef();

  useFrame(({ clock }) => {
    if (branchRef.current) {
      branchRef.current.rotation.z = Math.sin(clock.elapsedTime) * 0.05; // Slight swaying effect
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
      <mesh ref={branchRef} position={[1, 1.5, -3]} scale={[1.8, 1.8, 1.8]}>
        {/* Main Branch */}
        <cylinderGeometry args={[0.1, 0.2, 5, 8]} />
        <meshStandardMaterial color={"#1a1a1a"} />

        {/* Smaller Branches */}
        <mesh position={[-0.3, 1.8, 0]} rotation={[0.5, 0.2, 0]}>
          <cylinderGeometry args={[0.05, 0.1, 2, 6]} />
          <meshStandardMaterial color={"#1a1a1a"} />
        </mesh>

        <mesh position={[0.3, 2.5, 0]} rotation={[-0.3, -0.2, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 1.5, 6]} />
          <meshStandardMaterial color={"#1a1a1a"} />
        </mesh>
      </mesh>
    </Float>
  );
};

export default HeroSection;

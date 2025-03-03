import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

// 3D Apple Model Component
const AppleModel = () => {
  const { scene } = useGLTF("/models/apple.glb"); // Replace with your 3D apple model path
  return <primitive object={scene} scale={0.5} />;
};

const HeroSection = () => {
  const words = ["Hi, I'm", "Gavin Pahal"];
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
  }, [index, line, words]);

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
      <img
        src="/images/branches.svg"
        alt="Decorative Branch"
        className={styles.branchImage}
      />
      <AnimatePresence>
        {showApple && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.appleContainer}
          >
            <Link href="/resume">
              <Canvas
                style={{ width: "150px", height: "150px", cursor: "pointer" }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AppleModel />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeroSection;
import styles from "./HeroSection.module.css";
"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
 
const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
 
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}

const HeroSection = () => {
  return (
    <header className={styles.hero}>
      <img src="/images/Group 6.png" alt="Gavin Pahal Portfolio" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Hi, <br /> I'm <br /> Gavin Pahal
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;

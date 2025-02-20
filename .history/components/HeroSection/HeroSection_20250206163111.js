import styles from "./HeroSection.module.css";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

const HeroSection = () => {
  return (
    <header className={styles.hero}>
      <img
        src="/images/Group 6.png"
        alt="Gavin Pahal Portfolio"
        className={styles.heroImage}
      />
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          <TextGenerateEffect words="Hi, I'm Gavin Pahal" />
        </h1>
      </div>
    </header>
  );
};

export default HeroSection;

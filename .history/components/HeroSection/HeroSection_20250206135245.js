import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <header className={styles.hero}>
      <img src="/images/Group 6.png" alt="Gavin Pahal Portfolio" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Hi, <br /> I'm <br /> Gavin Pahal
        </h1>
        <button className={styles.resumeButton}>View Resume</button>
      </div>
    </header>
  );
};

export default HeroSection;

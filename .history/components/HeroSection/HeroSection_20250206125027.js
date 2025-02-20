import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <header className={styles.hero}>
      <img src="/images/home-page.png" alt="Gavin Pahal Portfolio" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1>Hi, I'm Gavin Pahal</h1>
        <button className={styles.resumeButton}>View Resume</button>
      </div>
    </header>
  );
};

export default HeroSection;

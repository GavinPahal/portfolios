import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Gavin's Portfolio</h1>
        <p className={styles.subtitle}>A collection of my best work</p>
        <a href="/resume.pdf" className={styles.button} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

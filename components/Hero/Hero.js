import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Cans</h1>
      <img className={styles.heroImage} src="/images/Drink Mockups.png" alt="Tiger Claw Cans" />
    </section>
  );
};

export default Hero;

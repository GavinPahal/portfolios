import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Magazine</h1>
      <img src="/images/magazine-cover.png" alt="Magazine Cover" />
    </section>
  );
};

export default Hero;

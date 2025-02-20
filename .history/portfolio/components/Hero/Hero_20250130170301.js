import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Cans</h1>
      <div className={styles.images}>
        <img src="/images/Rectangle 64.png" alt="Tiger Claw Can Left" />
      </div>
    </section>
  );
};

export default Hero;

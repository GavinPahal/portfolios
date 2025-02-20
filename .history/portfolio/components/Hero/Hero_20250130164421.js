import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Cans</h1>
      <div className={styles.images}>
        <img src="/images/cans-left.png" alt="Tiger Claw Can Left" />
        <img src="/images/cans-center.png" alt="Tiger Claw Can Center" />
        <img src="/images/cans-right.png" alt="Tiger Claw Can Right" />
      </div>
    </section>
  );
};

export default Hero;

import styles from "./After.module.css";

const After = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>AfterEffects</h1>
      <img className={styles.heroImage} src="/images/basketball.png" alt="basketball" />
    </section>
  );
};

export default After;

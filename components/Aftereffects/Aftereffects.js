import styles from "./Aftereffects.module.css";

const Aftereffects = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Motion Graphics</h1>
      <img className={styles.heroImage} src="/images/basketball.png" alt="basketball" />
    </section>
  );
};

export default Aftereffects;

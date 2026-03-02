import styles from "./PocketHero.module.css";

const PocketHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Pocket Pals</h1>
      <img className={styles.heroImage} src="/images/Rectangle 64 (1).png" alt="Pocket Pals App Preview" />
    </section>
  );
};

export default PocketHero;

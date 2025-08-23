import styles from "./Materials.module.css";

const Materials = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Circular Materials</h1>
      <img className={styles.heroImage} src="/images/materials.png" alt="basketball" />
    </section>
  );
};

export default  Materials;

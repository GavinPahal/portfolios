import styles from "./Materials.module.css";

const Materials = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Internship</h1>
      <img className={styles.heroImage} src="/images/materials.png" alt="basketball" />
    </section>
  );
};

export default  Materials;

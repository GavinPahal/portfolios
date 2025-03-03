import styles from "./MagazineCover.module.css";

const MagazineCover = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>MagazineCover</h1>
      <img  className={styles.coverImage}  src="/images/Rectangle 64 (2).png" alt="Magazine Cover"  />
    </section>
  );
};

export default MagazineCover;

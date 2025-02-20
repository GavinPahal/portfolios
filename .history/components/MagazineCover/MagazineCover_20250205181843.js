import styles from "./MagazineCover.module.css";

const MagazineCover = () => {
  return (
    <section className={styles.cover}>
      <h1 className={styles.title}>Magazine</h1>
      <img src="/Magazine.png" alt="Magazine Cover" className={styles.image} />
    </section>
  );
};

export default MagazineCover;

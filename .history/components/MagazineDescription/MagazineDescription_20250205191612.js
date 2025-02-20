import styles from "./MagazineDescription.module.css";

const MagazineDescription = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <img src="/images/magazine-inside.png" alt="Magazine Page" className={styles.image} />
        <div className={styles.text}>
          <h2>Designing Magazine</h2>
          <p>
            INSPIRA is a magazine dedicated to Swedish interior design, where minimalism blends with warmth...
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagazineDescription;

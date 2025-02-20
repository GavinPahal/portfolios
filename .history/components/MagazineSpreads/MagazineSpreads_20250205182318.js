import styles from "./MagazineSpreads.module.css";

const MagazineSpreads = () => {
  return (
    <section className={styles.spreads}>
      <h2>Magazine Spreads</h2>
      <div className={styles.grid}>
        <img src="/images/spread1.png" alt="Spread 1" />
        <img src="/images/spread2.png" alt="Spread 2" />
      </div>
    </section>
  );
};

export default MagazineSpreads;

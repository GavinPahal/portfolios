import styles from "./MagazineSpreads.module.css";

const MagazineSpreads = () => {
  return (
    <section className={styles.spreads}>
      <h2>Magazine Spreads</h2>
      <div className={styles.grid}>
        <img src="/images/spread-1.png" alt="Spread 1" />
        <img src="/images/spread-2.png" alt="Spread 2" />
        <img src="/images/spread-3.png" alt="Spread 3" />
      </div>
    </section>
  );
};

export default MagazineSpreads;

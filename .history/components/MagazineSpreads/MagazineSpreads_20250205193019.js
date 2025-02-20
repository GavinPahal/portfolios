import styles from "./MagazineSpreads.module.css";

const MagazineSpreads = () => {
  return (
    <section className={styles.spreads}>
      <h2>Magazine Spreads</h2>
      <div className={styles.grid}>
        <img src="/images/Screenshot 2025-02-03 042737.png" alt="Spread 1" />
        <img src="/images/Screenshot 2025-02-03 042554.png" alt="Spread 2" />
        <img src="/images/Screenshot 2025-02-03 042514.png" alt="Spread 3" />
      </div>
    </section>
  );
};

export default MagazineSpreads;

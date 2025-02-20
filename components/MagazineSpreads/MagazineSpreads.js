import styles from "./MagazineSpreads.module.css";

const MagazineSpreads = () => {
  return (
    <section className={styles.dielines}>
      <h2 className={styles.title}>Spreads</h2>
      <div className={styles.images}>
        <img src="/images/Screenshot 2025-02-03 042737.png" alt="Tiger Claw Dieline 1" />
        <img src="/images/Screenshot 2025-02-03 042554.png" alt="Tiger Claw Dieline 2" />
        <img src="/images/Screenshot 2025-02-03 042514.png" alt="Tiger Claw Dieline 3" />
      </div>
    </section>
  );
};
   


export default MagazineSpreads;

import styles from "./Dielines.module.css";

const Dielines = () => {
  return (
    <section className={styles.dielines}>
      <h2 className={styles.title}>Dielines</h2>
      <div className={styles.images}>
        <img src="/images/Organge cans 1.png" alt="Tiger Claw Dieline 1" />
        <img src="/images/Green 1.png" alt="Tiger Claw Dieline 2" />
        <img src="/images/dieline-3.png" alt="Tiger Claw Dieline 3" />
      </div>
    </section>
  );
};

export default Dielines;

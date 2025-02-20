import styles from "./Dielines.module.css";

const Dielines = () => {
  return (
    <section className={styles.dielines}>
      <h2 className={styles.title}>Dielines</h2>
      <div className={styles.images}>
        <img src="/dieline-1.png" alt="Tiger Claw Dieline 1" />
        <img src="/dieline-2.png" alt="Tiger Claw Dieline 2" />
        <img src="/dieline-3.png" alt="Tiger Claw Dieline 3" />
      </div>
    </section>
  );
};

export default Dielines;

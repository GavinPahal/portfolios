import styles from "./Summer.module.css";

const Summer = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>Summer Guide</h2>

      <div className={styles.images}>
        <img src="/images/Use a recycling app.png" alt="Summer" />
      </div>

      <p className={styles.desc}>
Summer Guides has a clean and simple design that feels fresh and easy to follow. 
i's approachable, well put together, and captures the light, relaxed feeling of summer.
      </p>
    </section>
  );
};

export default Summer;

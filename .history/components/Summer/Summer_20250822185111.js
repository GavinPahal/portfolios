import styles from "./Summer.module.css";

const Summer = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>Summer Guide</h2>

      <div className={styles.images}>
        <img src="/images/Use a recycling app.png" alt="Sumnmer" />
      </div>
      <p className={styles.desc}>
        These images represent the creative journey of this project from early concept sketches to refined design explorations, 
        and finally the polished outcome. Together, they highlight the workflow, decision-making, and visual storytelling 
        that shaped the final presentation.
      </p>
    </section>
  );
};

export default Summer;

import styles from "./Summer.module.css";

const Desktop = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>WireFrame</h2>

      <div className={styles.images}>
        <img src="/images/Desktop.png" alt="Summer" />
      </div>

      <p className={styles.desc}>
        These images represent the creative journey of this project from early concept sketches to refined design explorations, 
        and finally the polished outcome. Together, they highlight the workflow, decision-making, and visual storytelling 
        that shaped the final presentation.
      </p>
    </section>
  );
};

export default Desktop;

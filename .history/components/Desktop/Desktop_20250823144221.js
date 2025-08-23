import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>WireFrame</h2>

      <div className={styles.imagesRow}>
        <img src="/images/Desktop-1.png" alt="Section 1" />
        <img src="/images/Desktop-2.png" alt="Section 2" />
        <img src="/images/Desktop-3.png" alt="Section 3" />
        <img src="/images/Desktop-4.png" alt="Section 4" />
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








  hi-fi wireframe shows a clean, modern recycling platform that makes stats, tips, and impact easy to see.
  It uses simple icons, charts, and interactive FAQs to keep things clear and engaging while encouraging sustainable habits.
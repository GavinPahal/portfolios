import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>WireFramesh2>

      <div className={styles.imagesRow}>
        <img src="/images/horizontal_slice_1.png" alt="Section 1" />
        <img src="/images/horizontal_slice_2.png"alt="Section 2" />
        <img src="/images/horizontal_slice_3.png" />
        <img src="/images/horizontal_slice_4.png"alt="Section 1" />
      </div>

      <p className={styles.desc}>
  hi-fi wireframe shows a clean, modern recycling platform that makes stats, tips, and impact easy to see.
  It uses simple icons, charts, and interactive FAQs to keep things clear and engaging while encouraging sustainable habits.
      </p>
    </section>
  );
};

export default Desktop;







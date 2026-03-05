import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>Sustainability Guide</h2>

      <div className={styles.imagesRow}>
        <img src="/images/horizontal_slice_1.png" alt="Section 1" />
        <img src="/images/horizontal_slice_2.png"alt="Section 2" />
        <img src="/images/horizontal_slice_3.png" />
        <img src="/images/horizontal_slice_4.png"alt="Section 1" />
      </div>

      <p className={styles.desc}>
The Sustainability Guide is an interactive resource that transforms recycling habits into a clear narrative of positive change. By visualizing where plastic is diverted and providing real-time impact statistics, the platform gives users a transparent look at their environmental contribution. I utilized clean data visualization and intuitive layouts to ensure the full impact of every effort is easy to see and understand
      </p>
    </section>
  );
};

export default Desktop;







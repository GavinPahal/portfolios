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
Sustainability Guide is an interactive resource that transforms recycling habits into a clear narrative of impact. By visualizing where plastic is diverted and providing real-time statistics, the platform gives users a transparent look at their environmental contribution through clean data visualization and intuitive layouts
      </p>
    </section>
  );
};

export default Desktop;







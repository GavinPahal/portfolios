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
Sustainability Guide is an interactive resource designed to bridge the gap between individual action and environmental impact. By visualizing where recycled plastic is diverted and providing real-time data on resource conservation, the platform transforms abstract habits into a clear narrative of positive change. My goal was to provide users with a transparent look at their contribution, using clean data visualization and intuitive layouts to show the full impact of their efforts.
      </p>
    </section>
  );
};

export default Desktop;







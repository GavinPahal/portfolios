import styles from "./StyleGuide.module.css";

const StyleGuide = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>Style Guide</h2>
      <img src="/images/pocket-style-guide.png" alt="Pocket Pals Style Guide" />
    </section>
  );
};

export default StyleGuide;

import styles from "./Sections.module.css";
import BeforeAfter from "../BeforeAfter/BeforeAfter";
import PersonaCarousel from "../PersonaCarousel/PersonaCarousel";

const Sections = () => {
  return (
    <section className={styles.sections}>
      <h2 className={styles.title}>Project Overview</h2>
      <p className={styles.text}>
        GoldiBite is an AI-powered app that helps users with dietary restrictions...
      </p>

      <div className={styles.splitSection}>
        <h2>Problems</h2>
        <p>
          Designing a user-friendly interface for allergen detection...
        </p>
      </div>

      <div className={styles.splitSection}>
        <h2>Challenges</h2>
        <p>
          The app needed to process large amounts of allergy and translation data...
        </p>
      </div>

      <div className={styles.splitSection}>
        <h2>Solution</h2>
        <p>
          GoldiBite features a structured layout with intuitive navigation...
        </p>
      </div>

      <h2 className={styles.title}>Logo</h2>
      <img src="/images/logo.png" alt="GoldiBite Logo" className={styles.logo} />

      <h2 className={styles.title}>Low-Fi vs Hi-Fi</h2>
      <BeforeAfter before="/images/lowfi.png" after="/images/hifi.png" />

      <h2 className={styles.title}>Flow State</h2>
      <img src="/images/flowchart.png" alt="Flow State Diagram" className={styles.flowChart} />

      <h2 className={styles.title}>External Testing</h2>
      <p className={styles.text}>
        Checking food labels is time-consuming and error-prone...
      </p>

      <h2 className={styles.title}>User Persona</h2>
      <PersonaCarousel />
    </section>
  );
};

export default Sections;

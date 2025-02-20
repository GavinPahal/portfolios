import styles from "./Sections.module.css";

const Sections = () => {
  return (
    <section className={styles.sections}>
      <h2>Project Overview</h2>
      <p>GoldiBite is an AI-powered app that helps users with dietary restrictions...</p>

      <h2>Problems</h2>
      <p>Designing a user-friendly interface for allergen detection...</p>

      <h2>Challenges</h2>
      <p>The app needed to process large amounts of allergy and translation data...</p>

      <h2>Solution</h2>
      <p>GoldiBite features a structured layout with intuitive navigation...</p>

      <h2>Logo</h2>
      <img src="/images/logo.png" alt="GoldiBite Logo" />

      <h2>Flow State</h2>
      <img src="/images/flowchart.png" alt="Flow State Diagram" />

      <h2>External Testing</h2>
      <p>Checking food labels is time-consuming and error-prone...</p>

      <h2>User Persona</h2>
      <img src="/images/persona.png" alt="User Persona" />
    </section>
  );
};

export default Sections;

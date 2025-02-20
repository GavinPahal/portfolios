import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
         <NavBar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>About Me</h1>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.subheading}>Hi, I'm Gavin Pahal</h2>
          <p>
            I’m a passionate designer and developer with a keen eye for detail
            and a love for creating engaging user experiences. My journey
            started with a fascination for technology and has evolved into a
            career dedicated to crafting digital experiences that matter.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/2218e97c-1500-630-90.png" alt="Gavin Pahal" />
        </div>
      </section>

      {/* Additional Sections */}
      <section className={styles.additionalInfo}>
        <h2 className={styles.subheading}>My Skills</h2>
        <ul className={styles.skillsList}>
          <li>UI/UX Design</li>
          <li>Frontend Development</li>
          <li>Prototyping & Wireframing</li>
          <li>Animation & Interaction Design</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;

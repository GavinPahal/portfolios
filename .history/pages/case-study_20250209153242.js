import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import PersonaCarousel from "../components/PersonaCarousel/PersonaCarousel";
import styles from "../styles/CaseStudy.module.css";

const CaseStudy = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.container}>
        <h1 className={styles.title}>Case Study</h1>

        {/* Image Carousel */}
        <ImageCarousel />

        {/* Project Overview */}
        <div className={styles.textBlock}>
          <h2>Project Overview</h2>
          <p>
          GoldiBite is an AI-powered app that helps users with dietary restrictions make safe food choices. It scans labels through a camera, photo upload, or manual input to detect allergens, track nutrition, and send instant alerts. A translation tool ensures users understand ingredients anywhere, making shopping and dining easier.
          </p>
          <div className={styles.links}>
            <a href="#">App Link</a>
            <a href="#">Blog Link</a>
          </div>
        </div>

        {/* Problems */}
        <div className={styles.splitSection}>
          <div className={styles.text}>
            <h2>Problems</h2>
            <p>Designing a user-friendly interface for allergen detection...</p>
          </div>
          <div className={styles.imagePlaceholder} />
        </div>

        {/* Challenges */}
        <div className={styles.splitSectionReverse}>
          <div className={styles.imagePlaceholder} />
          <div className={styles.text}>
            <h2>Challenges</h2>
            <p>The app needed to process large amounts of allergy and translation data...</p>
          </div>
        </div>

        {/* Solution */}
        <div className={styles.splitSection}>
          <div className={styles.text}>
            <h2>Solution</h2>
            <p>GoldiBite features a structured layout with intuitive navigation...</p>
          </div>
          <div className={styles.imagePlaceholder} />
        </div>

        {/* Logo Section */}
        <div className={styles.center}>
          <h2>Logo</h2>
          <img src="/images/logo1.png" alt="GoldiBite Logo" />
          <img src="/images/logo2.png" alt="GoldiBite Logo Variation" />
        </div>

        {/* Low-Fi vs Hi-Fi Before/After */}
        <h2 className={styles.title}>Low-Fi vs Hi-Fi</h2>
        <BeforeAfter before="/images/lowfi.png" after="/images/hifi.png" />

        {/* Flow State */}
        <h2 className={styles.title}>Flow State</h2>
        <img src="/images/flowchart.png" className={styles.flowChart} />

        {/* External Testing */}
        <h2 className={styles.title}>External Testing</h2>
        <p className={styles.textBlock}>
          Checking food labels is time-consuming and error-prone...
        </p>

        {/* User Persona Carousel */}
        <h2 className={styles.title}>User Persona</h2>
        <PersonaCarousel />
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;

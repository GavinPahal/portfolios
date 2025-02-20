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
          <h2 className={styles.subheading}>Project Overview</h2>
          <p>
            GoldiBite is an AI-powered app that helps users with dietary restrictions make safe food choices. 
            It scans labels through a camera, photo upload, or manual input to detect allergens, track nutrition, 
            and send instant alerts. A translation tool ensures users understand ingredients anywhere, making shopping 
            and dining easier.
          </p>
          <div className={styles.links}>
            <a href="#" className={styles.underline}>App Link</a>
            <a href="#" className={styles.underline}>Blog Link</a>
          </div>
        </div>

        {/* Problems */}
        <div className={styles.splitSection}>
          <div className={styles.text}>
            <h2 className={styles.subheading}>Problems</h2>
            <p>
              Designing a user-friendly interface for allergen detection and menu translation was challenging. 
              Presenting complex allergy data clearly without overwhelming users required a careful balance of 
              simplicity and detail. Ensuring accurate translations while maintaining an intuitive layout added 
              to the complexity.
            </p>
          </div>
          <div className={styles.imagePlaceholder} />
        </div>

        {/* Challenges - Fixed Layout */}
        <div className={styles.splitSectionReverse}>
          <div className={styles.imagePlaceholder} />
          <div className={styles.text}>
            <h2 className={styles.subheading}>Challenges</h2>
            <p>
              The app needed to process large amounts of allergy and translation data while keeping interactions 
              smooth and accessible. Maintaining readability across different languages, screen sizes, and user 
              preferences required thoughtful design decisions to ensure clarity and ease of use.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className={styles.splitSection}>
          <div className={styles.text}>
            <h2 className={styles.subheading}>Solution</h2>
            <p>
              GoldiBite features a structured layout with intuitive navigation, making allergen detection 
              and menu translations effortless. A clear visual hierarchy ensures key information is easily 
              accessible, reducing user frustration. By focusing on accessibility and simplicity, the app 
              delivers a seamless and reliable experience for travelers.
            </p>
          </div>
          <div className={styles.imagePlaceholder} />
        </div>

        {/* Logo Section */}
        <div className={styles.center}>
          <h2 className={styles.subheading}>Logo</h2>
          <img src="/images/logo1.png" alt="GoldiBite Logo" />
          <img src="/images/logo2.png" alt="GoldiBite Logo Variation" />
        </div>

        {/* Low-Fi vs Hi-Fi Before/After */}
        <h2 className={styles.subheading}>Low-Fi vs Hi-Fi</h2>
        <BeforeAfter before="/images/browine 1.png" after="/images/Organge cans 1.png" />

        {/* Flow State */}
        <h2 className={styles.subheading}>Flow State</h2>
        <p className={styles.textBlock}>
          Users set dietary preferences, scan food, and receive real-time alerts. AI detects allergens, 
          tracks nutrition, and estimates portions. A translation tool ensures ingredient clarity, making 
          safe choices effortless.
        </p>
        <img src="/images/Group 1 1.png" className={styles.flowChart} />

        {/* External Testing */}
        <h2 className={styles.subheading}>External Testing</h2>
        <p className={styles.textBlock}>
          Checking food labels is time-consuming and error-prone. GoldiBite removes uncertainty with AI, 
          providing instant insights. Users make informed decisions with speed and confidence.
        </p>

        {/* User Persona Carousel */}
        <h2 className={styles.subheading}>User Persona</h2>
        <PersonaCarousel />
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;

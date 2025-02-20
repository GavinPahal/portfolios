import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import PersonaCarousel from "../components/PersonaCarousel/PersonaCarousel";
import BackToTop from "../components/BackToTop/BackToTop";
import styles from "../styles/CaseStudy.module.css";

const CaseStudy = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.container}>
        <h1 className={styles.title}>GoldiBite</h1>

        {/* Adjusted Carousel */}
        <div className={styles.carouselWrapper}>
          <ImageCarousel />
        </div>

        {/* Project Overview */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Project Overview</h2>
          <p>
            GoldiBite is an AI-powered app that helps users with dietary restrictions make safe food choices. 
            It scans labels through a camera, photo upload, or manual input to detect allergens, track nutrition, 
            and send instant alerts. A translation tool ensures users understand ingredients anywhere, making shopping 
            and dining easier.
          </p>
          <div className={styles.links}>
            <a href="https://goldibite-blog.vercel.app/" className={styles.underline}>Blog Link</a>
            <a href="https://www.figma.com/proto/ghF7xs4mzV1Dn8Lkl1QY1N/Untitled" className={styles.underline}>Figma Link</a>
          </div>
        </div>

        {/* Problems & Challenges - Side by Side */}
        <div className={styles.flexContainer}>
          <div className={styles.textBox}>
            <h2 className={styles.subheading}>Problems</h2>
            <p>
              Designing a user-friendly interface for allergen detection and menu translation was challenging. 
              Presenting complex allergy data clearly without overwhelming users required a careful balance of 
              simplicity and detail.
            </p>
          </div>
          <div className={styles.textBox}>
            <h2 className={styles.subheading}>Challenges</h2>
            <p>
              The app needed to process large amounts of allergy and translation data while keeping interactions 
              smooth and accessible. Maintaining readability across different languages and screen sizes was a priority.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className={styles.textBlock}>
          <h2 className={styles.subheading}>Solution</h2>
          <p>
            GoldiBite features a structured layout with intuitive navigation, making allergen detection 
            and menu translations effortless. A clear visual hierarchy ensures key information is easily 
            accessible, reducing user frustration.
          </p>
        </div>

        {/* Logo Section */}
        <div className={styles.center}>
          <h2 className={styles.heading}>Logo</h2>
          <p className={styles.textBlock}>
            The GoldiBite logo is a sleek, modern wordmark that puts readability and professionalism first. 
            Its minimalistic design reinforces brand recognition and allows it to be versatile for different uses.
          </p>
          <div className={styles.logoContainer}>
            <img src="/images/wordmark2 1.png" alt="GoldiBite Logo Variation" className={styles.img} />
            <img src="/images/webHorizontal 1.png" alt="GoldiBite Logo" className={styles.img} />
          </div>
        </div>

        {/* Hi-Fi vs Low-Fi */}
        <h2 className={styles.heading}>Hi-Fi vs Low-Fi</h2>
        <BeforeAfter before="/images/high.png" after="/images/low.png" />

        {/* Flow State */}
        <h2 className={styles.heading}>Flow State</h2>
        <p className={styles.textBlock}>
          Users set preferences, scan food, and receive real-time alerts. AI analyzes ingredients, detects allergens, tracks nutrition, and estimates portions.
        </p>
        <img src="/images/Group 1 1.png" className={styles.flowChart} />

        {/* External Testing */}
        <h2 className={styles.heading}>External Testing</h2>
        <p className={styles.textBlock}>
          Reading food labels is time-consuming and error-prone. We assigned tasks strategically, ensuring AI development for fast analysis, simple UI design, and accurate allergen data.
        </p>

        {/* User Persona */}
        <h2 className={styles.heading}>User Persona</h2>
        <PersonaCarousel />
      </section>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default CaseStudy;

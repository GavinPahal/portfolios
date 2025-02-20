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
        <h1 className={styles.title}>GoldiBite</h1>

        {/* Image Carousel */}
        <ImageCarousel />

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
            <a href="https://www.figma.com/team_invite/redeem/ygfamPuPlc4awhpH5pyvxs" className={styles.underline}>Figma Link</a>
          </div>
        </div>

        {/* Problems */}
        <div className={styles.splitSection}>
          <div className={styles.text}>
            <h2 className={styles.subheading}>Problems</h2>
            <p className={styles.textBlock}>
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
            <p className={styles.textBlock}>
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
            <p className={styles.textBlock}>
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
          <h2 className={styles.heading}>Logo</h2>
          <p className={styles.textBlock}>
          The GoldiBite logo is a sleek, modern wordmark that puts readability and professionalism first. Its minimalistic design reinforces brand recognition and allows it to be versatile enough for different uses. The monochromatic palette adds timelessness and adaptability.

        </p>
          <img src="/images/wordmark2 1.png" alt="GoldiBite Logo Variation" className={styles.img}  />
          <img src="/images/webHorizontal 1.png" alt="GoldiBite Logo" className={styles.imgs}/>

        </div>

        {/* Low-Fi vs Hi-Fi Before/After */}
        <h2 className={styles.heading}>Low-Fi vs Hi-Fi</h2>
        <BeforeAfter before="/images/hi-fi.png" after="/images/low-fi.png" />


        {/* Flow State */}
        <h2 className={styles.heading}>Flow State</h2>
        <p className={styles.textBlock}>
        Users set preferences, scan food, and receive real-time alerts. AI analyzes ingredients, detects allergens, tracks nutrition, and estimates portions.
         If a restricted item is found, users get instant warnings. 
         A translation tool ensures ingredient clarity, making safe choices simple and stress-free.
        </p>
        <img src="/images/Group 1 1.png" className={styles.flowChart} />

        {/* External Testing */}
        <h2 className={styles.heading}>External Testing</h2>
        <p className={styles.textBlock}>
        Reading food labels is time-consuming and error-prone.
         We assigned tasks strategically developers built AI for fast analysis, designers ensured a simple interface, and researchers refined allergen data. 
         This focus made GoldiBite accurate, efficient, and user-friendly, empowering users to make safe food choices instantly.
        </p>

        {/* User Persona Carousel */}
        <h2 className={styles.heading}>User Persona</h2>
        <PersonaCarousel />
      </section>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default CaseStudy;

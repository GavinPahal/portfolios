import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import PersonaCarousel from "../components/PersonaCarousel/PersonaCarousel";
import styles from "../styles/CaseStudy.module.css";
import BackToTop from "../components/BackToTop/BackToTop";



const Effects = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.container}>
        {/* Project Overview */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Project Overview</h2>
          <p>
            GoldiBite is an AI-powered app that helps users with dietary restrictions make safe food choices.
            It scans labels through a camera, photo upload, or manual input to detect allergens, track nutrition,
            and send instant alerts. A translation tool ensures users understand ingredients anywhere, making
            shopping and dining easier.
          </p>

        </div>

        {/* Problems & Challenges (Side-by-Side) */}


        <h2 className={styles.headings}>User Research</h2>
        <p className={styles.textBlock}>
          Research was crucial to understanding user needs and preferences. We conducted surveys, interviews,
          and usability tests to gather insights on user behavior and expectations. This data informed our design
          decisions, ensuring GoldiBite met user needs and provided a valuable solution.
        </p>
        <UserResearch />
        {/* User Persona Carousel */}
        <h2 className={styles.headings}>User Persona</h2>
        <PersonaCarousel />



        {/* Logo Section */}
        <div className={styles.center}>
          <h2 className={styles.headings}>Style Guide</h2>
          <p className={styles.textBlocks}>
            The GoldiBite logo is a sleek, modern wordmark that keeps things simple while staying professional and easy to read.
            Its minimal design makes it super versatile, and the monochromatic palette gives it a classic, and nostalgic feel.
          </p>
          <img src="/images/wordmark2 1.png" alt="GoldiBite Logo Variation" className={styles.img}
          />
          <img
            src="/images/webHorizontal 1.png"
            alt="GoldiBite Logo"
            className={styles.imgs}
          />
          <img
            src="/images/Style Guide.svg"
            alt="GoldiBite Logo Variation"
            className={styles.imgss}
          />
        </div>

        {/* Flow State */}
        <h2 className={styles.heading}>Flow State</h2>
        <p className={styles.textBlock}>
          Users set preferences, scan food, and receive real-time alerts. AI analyzes ingredients,
          detects allergens, tracks nutrition, and estimates portions. If a restricted item is found,
          users get instant warnings. A translation tool ensures ingredient clarity, making safe
          choices simple and stress-free.
        </p>
        <img src="/images/Group 1 1.png" className={styles.flowChart} />

      {/* Low-Fi vs Hi-Fi Before/After */}
<div className={styles.beforeAfterSection}>
  <h2 className={styles.heading}> Low-Fi vs Hi-Fi </h2>
  <BeforeAfter before="/images/high.png" after="/images/hi.png" />
</div>

        <h2 className={styles.heading}>Brochures</h2>
        <Brochures />
        <h2 className={styles.heading}>Promotion Video</h2>
        <p className={styles.textBlock}>
          Capturing the essence of GoldiBite in a short video was crucial for promoting the app.
          We highlighted key features, such as allergen detection, nutrition tracking, and menu translation,
          to show users how GoldiBite simplifies safe food choices. The video’s engaging visuals and
          informative content helped drive user engagement and interest.
        </p>
        <video width="800" height="800" controls preload="none" className={styles.video} poster="/images/bite.svg">
          <source src="/images/Ks.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>

      </section>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Effects;
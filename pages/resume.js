import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import styles from "../styles/resume.module.css"; 

const Resume = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.dielines}>
        <h2 className={styles.title}>Resume</h2>
        <div className={styles.images}>
          <img src="/images/Gavin_Pahal_Resume-1.png" alt="Resume Page 1" />
        </div>
      </section>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Resume;

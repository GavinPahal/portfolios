import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>Gavin Pahal</p>
        <div className={styles.contact}>
          <span>Contact Info</span>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="mailto:example@example.com">
              <img src="/images/email-icon.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Up Option */}
      {showScroll && (
        <div className={styles.scrollContainer} onClick={scrollToTop}>
          <span className={styles.scrollText}>Back to Top</span>
          <div className={styles.underline}></div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

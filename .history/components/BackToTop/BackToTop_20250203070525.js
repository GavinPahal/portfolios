import { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <div className={styles.scrollContainer} onClick={scrollToTop}>
        <span className={styles.scrollText}>Back to Top</span>
        <div className={styles.underline}></div>
      </div>
    )
  );
};

export default BackToTop;

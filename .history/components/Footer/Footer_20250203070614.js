import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>Gavin Pahal</p>
        <div className={styles.contact}>
          <span>Contact Info</span>
          <div className={styles.icons}>
            <a href="www.linkedin.com/in/gavin-pahal" target="_blank" rel="noopener noreferrer">
              <img src="/images/LinkedIn (1).png" alt="LinkedIn" />
            </a>
            <a href="mailto:gavinpahal2003@gmail.com">
              <img src="/images/Gmail Logo (1).png" alt="Email" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Up Component */}
      <BackToTop />
    </footer>
  );
};

export default Footer;

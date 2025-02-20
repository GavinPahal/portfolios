import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};

export default Footer;

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Left Side: Name */}
        <p className="name">Gavin Pahal</p>

        {/* Right Side: Contact Info */}
        <div className="contact">
          <span className="contact-title">Contact Info</span>
          <div className="icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="mailto:example@example.com">
              <img src="/images/email-icon.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: "url('/images/Banner.png')"
      }}
    ></section>
  );
};

export default HeroSection;
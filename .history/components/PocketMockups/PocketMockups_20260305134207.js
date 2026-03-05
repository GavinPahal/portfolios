import styles from "./PocketMockups.module.css";

const PocketMockups = () => {
  return (
    <section className={styles.mockups}>
      <div className={styles.imageContainer}>
        <img src="/images/Rectangle 75.png" alt="Pocket Pals Mockup" />
      </div>
      <div className={styles.textContainer}>
        <h2>PocketPals</h2>
        <p>
PocketPals is designed to trigger curiosity in children and make learning fun. The client wanted to move away from conventional games and articles in favor of creative, accessible content. This was achieved through linked articles paired with a mix-and-match game, effectively fusing education and play.

A vibrant palette, playful icons, and soft edges form a friendly, inviting interface. Simple layouts, large buttons, and subtle animations ensure the app is intuitive for children. Each element, from storytelling to research, comes together into one cohesive and inclusive experience that fulfills the client's vision to capture young imaginations.
        </p>
        <div className={styles.buttonContainer}>
        <a
              href="https://pocketpals.vercel.app/"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
            View App
            </a>
          </div>
      </div>
    </section>
  );
};

export default PocketMockups;

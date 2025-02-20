import styles from "./PocketMockups.module.css";

const PocketMockups = () => {
  return (
    <section className={styles.mockups}>
      <div className={styles.imageContainer}>
        <img src="/images/pocket-mockup.png" alt="Pocket Pals Mockup" />
      </div>
      <div className={styles.textContainer}>
        <h2>Developing PocketPals</h2>
        <p>
          Pocket Pals is a way to trigger curiosity in children and make their learning fun. 
          The client wanted the app not to have conventional games and articles but creative and 
          accessible content. This was achieved through linked articles with a mix-and-match game, 
          fusing education and play. Colorful colors, playful icons, and soft edges formed a friendly, 
          accessible app. Simple layouts, large buttons, and subtle animations made it accessible and 
          usable for kids. Each element, from storytelling to research, came together into one cohesive 
          and inclusive experience representative of the client’s vision to capture young imaginations.
        </p>
      </div>
    </section>
  );
};

export default PocketMockups;

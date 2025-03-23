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
          Pocket Pals is a way to trigger curiosity in children and make their learning fun. 
          The client wanted the app not to have conventional games and articles but creative and 
          accessible content. This was achieved through linked articles with a mix-and-match game, 
          fusing education and play. Colorful colors, playful icons, and soft edges formed a friendly, 
          accessible app. Simple layouts, large buttons, and subtle animations made it accessible and 
          usable for kids. Each element, from storytelling to research, came together into one cohesive 
          and inclusive experience representative of the client's vision to capture young imaginations.
        </p>
        <div className={styles.buttonContainer}>
        <a
              href="https://www.figma.com/proto/ghF7xs4mzV1Dn8Lkl1QY1N/Untitled?node-id=1-4068&t=g3isglPHdRw0JOZO-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3972&show-proto-sidebar=1"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Protoype 
            </a>
          </div>
      </div>
    </section>
  );
};

export default PocketMockups;

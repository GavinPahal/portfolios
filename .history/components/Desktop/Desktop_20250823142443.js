import Image from "next/image";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>WireFrame</h2>
      <div className={styles.images}>
        <Image 
          src="/images/Desktop.png" 
          alt="Desktop Wireframe" 
          width={1600} 
          height={900} 
          className={styles.img} 
        />
      </div>
      <p className={styles.desc}>
 hi-fi wireframe shows a clean, modern recycling platform that makes stats, tips, and impact easy to see.
  It uses simple icons, charts, and interactive FAQs to keep things clear and engaging while encouraging sustainable habits.
      </p>
    </section>
  );
};

export default Desktop;

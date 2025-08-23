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
        These images represent the creative journey of this project from early concept sketches to refined design explorations, 
        and finally the polished outcome.
      </p>
    </section>
  );
};

export default Desktop;

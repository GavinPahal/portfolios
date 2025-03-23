import { useState } from "react";
import styles from "./Brochures.module.css";

const images = ["/images/four.png", "/images/two.png",];

const  Brochures = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <img src={images[index]} className={styles.image} />
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>
  );
};

export default Brochures;

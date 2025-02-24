import { useState } from "react";
import styles from "./brochuresCarousel.module.css";

const images = ["/images/one.png","/images/two.png", "/images/three.png", "Screenshot_2024-11-15_at_2.24.24_PM.png" ];

const ImageCarousel = () => {
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

export default ImageCarousel;

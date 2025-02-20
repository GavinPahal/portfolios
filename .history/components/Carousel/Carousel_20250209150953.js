import { useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/images/Organge cans 1.png",
  "/images/Rectangle 65.png",
  "/images/Rectangle 64 (1).png",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <img src={images[index]} alt="Carousel Slide" className={styles.image} />
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>
  );
};

export default Carousel;

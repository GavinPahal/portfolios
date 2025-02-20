import { useState } from "react";
import styles from "./PersonaCarousel.module.css";

const personas = ["/Screenshot 2025-02-08 192123 1.png", "Screenshot 2025-02-08 192849.jpg","Screenshot 2025-02-08 192908.jpg","Screenshot 2025-02-08 192944.jpg","Screenshot 2025-02-08 193010.jpg"];

const PersonaCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % personas.length);
  const prevSlide = () => setIndex((index - 1 + personas.length) % personas.length);

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <img src={personas[index]} className={styles.image} />
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>
  );
};

export default PersonaCarousel;

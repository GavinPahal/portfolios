import { useState } from "react";
import styles from "./PersonaCarousel.module.css";

const personas = [
  "/images/one.png",
  "/images/two.png",    
    "/images/three.png",
    "/images/four.png",
];

const PersonaCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % personas.length);
  const prevSlide = () => setIndex((index - 1 + personas.length) % personas.length);

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <img src={personas[index]} alt="User Persona" className={styles.image} />
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>
  );
};

export default PersonaCarousel;

import { useState } from "react";
import styles from "./UserResearch.module.css";

const personas = [
  "/images/Screenshot 2025-02-18 112247.png",
  "/images/Screenshot 2025-02-18 112339.png",
  "/images/Screenshot 2025-02-18 112439.png",
  "/images/Screenshot 2025-02-08 192944.png",
  "/images/Screenshot 2025-02-08 193010.png"
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

import { useState, useRef } from "react";
import styles from "./BeforeAfter.module.css";

const BeforeAfter = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  return (
    <div
      className={styles.beforeAfterContainer}
      ref={containerRef}
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={(e) => handleDrag(e.touches[0])}
    >
      <div
        className={styles.beforeImage}
        style={{ width: `${sliderPosition}%`, backgroundImage: `url(${before})` }}
      />
      <div className={styles.afterImage} style={{ backgroundImage: `url(${after})` }} />
      <div
        className={styles.slider}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className={styles.sliderLine} />
        <div className={styles.sliderCircle} />
      </div>
    </div>
  );
};

export default BeforeAfter;

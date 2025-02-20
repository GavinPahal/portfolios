import { useState, useRef, useEffect } from "react";
import styles from "./BeforeAfter.module.css";

const BeforeAfter = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  const handleMouseDown = () => {
    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = () => {
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className={styles.beforeAfterContainer} ref={containerRef}>
      <div
        className={styles.beforeImage}
        style={{ width: `${sliderPosition}%`, backgroundImage: `url(${before})` }}
      />
      <div className={styles.afterImage} style={{ backgroundImage: `url(${after})` }} />
      <div
        className={styles.slider}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className={styles.sliderLine} />
        <div className={styles.sliderCircle} />
      </div>
    </div>
  );
};

export default BeforeAfter;

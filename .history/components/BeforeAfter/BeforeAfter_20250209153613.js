import { useState } from "react";
import styles from "./BeforeAfter.module.css";

const BeforeAfter = ({ before, after }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className={styles.container}>
      <h3>{showAfter ? "After" : "Before"}</h3>
      <img src={showAfter ? after : before} className={styles.image} />
      <button onClick={() => setShowAfter(!showAfter)}>Toggle</button>
    </div>
  );
};

export default BeforeAfter;

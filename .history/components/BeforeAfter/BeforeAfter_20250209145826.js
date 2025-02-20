import { useState } from "react";
import styles from "./BeforeAfter.module.css";

const beforeImages = [
  "/images/before1.png",
  "/images/before2.png",
];
const afterImages = [
  "/images/after1.png",
  "/images/after2.png",
];

const BeforeAfter = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        <h3>Before</h3>
        <img src={beforeImages[index]} alt="Before Image" className={styles.image} />
      </div>
      <div>
        <h3>After</h3>
        <img src={afterImages[index]} alt="After Image" className={styles.image} />
      </div>
      <button onClick={() => setIndex((index + 1) % beforeImages.length)}>
        Next
      </button>
    </div>
  );
};

export default BeforeAfter;

import styles from "./MagazineDescription.module.css";

const Mockups = () => {
  return (
    <section className={styles.mockups}>
      <div className={styles.imageContainer}>
        <img src="/images/Rectangle 65 (3).png" alt="Hand holding a Tiger Claw can" />
      </div>
      <div className={styles.textContainer}>
        <h2>Mockups</h2>
        <p>
        INSPIRA is a magazine dedicated to Swedish interior design, where minimalism blends with warmth. It’s not
            merely about simplicity; it’s about crafting spaces that feel both effortless and intentional. Each issue
            delves into clean aesthetics, functional beauty, and the art of living with less but better. My design
            philosophy aligns seamlessly with this vision. I emphasize simplicity with purpose, clean layouts, intuitive
            navigation, and a user-centered approach that makes every interaction smooth. Every decision, from
            typography to spacing, is deliberate, ensuring clarity without clutter. Good design should feel natural and
            welcoming, guiding users effortlessly. INSPIRA embodies this philosophy, demonstrating that simplicity is
            not just a style—it’s a way of life.
        </p>
      </div>
    </section>
  );
};

export default Mockups;

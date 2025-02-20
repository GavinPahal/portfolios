import styles from "./MagazineDescription.module.css";

const MagazineDescription = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <img src="/images/magazine-description.png" alt="Magazine Design" className={styles.image} />
        <div className={styles.text}>
          <h2>Designing Magazine</h2>
          <p>
            INSPIRA is a magazine dedicated to Swedish interior design, where minimalism blends with warmth.
            It’s not merely about simplicity; it’s about crafting spaces that feel both effortless and intentional.
          </p>
          <p>
            My design philosophy aligns seamlessly with this vision. I emphasize simplicity with purpose, 
            clean layouts, intuitive navigation, and a user-centered approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagazineDescription;

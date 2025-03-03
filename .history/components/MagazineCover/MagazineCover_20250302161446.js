import styles from "./MagazineCover.module.css";

const MagazineCover = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>MagazineCover</h1>
      <img  src="/images/Rectangle 64 (2).png" alt="Magazine Cover"  {styles.img}/>
    </section>
  );
};

export default MagazineCover;

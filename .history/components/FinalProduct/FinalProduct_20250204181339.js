import styles from "./FinalProduct.module.css";

const FinalProduct = () => {
  return (
    <section className={styles.finalProduct}>
      <h2 className={styles.title}>Final Product</h2>
      <a className={styles.link} href="https://yourgameurl.com" target="_blank" rel="noopener noreferrer">
        View the Game
      </a>
      <img src="/images/iphone-x-mockup 1.png" alt="Pocket Pals Final Product" />
    </section>
  );
};

export default FinalProduct;

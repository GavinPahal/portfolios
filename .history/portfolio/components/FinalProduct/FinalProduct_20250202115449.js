import styles from "./FinalProduct.module.css";

const FinalProduct = () => {
  return (
    <section className={styles.finalProduct}>
      <h2 className={styles.title}>Final Product</h2>
      <img src="/images/pocket-final.png" alt="Pocket Pals Final Product" />
    </section>
  );
};

export default FinalProduct;

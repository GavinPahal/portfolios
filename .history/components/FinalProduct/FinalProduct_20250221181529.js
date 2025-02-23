import styles from "./FinalProduct.module.css";

const FinalProduct = () => {
  return (
    <section className={styles.finalProduct}>
      <h2 className={styles.title}>Final Product</h2>
      <a href="https://pocketpals.vercel.app/" class={styles.clickableApp} target="_blank">
  Pocket Pals
</a>

      <img src="/images/iphone-x-mockup 1.png" alt="Pocket Pals Final Product" />
    </section>
  );
};

export default FinalProduct;

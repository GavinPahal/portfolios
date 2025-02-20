import styles from "./Mockups.module.css";

const Mockups = () => {
  return (
    <section className={styles.mockups}>
      <div className={styles.imageContainer}>
        <img src="/images/mockup-hand.png" alt="Hand holding a Tiger Claw can" />
      </div>
      <div className={styles.textContainer}>
        <h2>Creating Mockups</h2>
        <p>
          Tiger Claw cans draw inspiration from the culture of martial arts and the raw energy of Tiger Muay Thai in Thailand.
          The brand is designed for martial artists looking for recovery; it highlights the potency of its THC-infused formula 
          to help post-training rejuvenation. The minimalist black tiger on a white background is a symbol of strength and intensity, 
          reflecting the aggressive focus of the tiger. The simplicity makes the product bold while relating it to the disciplined 
          and powerful mindset of its target audience. Tiger Claw is not just recovery but an aggressive companion for martial 
          artists who push themselves to the limits.
        </p>
      </div>
    </section>
  );
};

export default Mockups;

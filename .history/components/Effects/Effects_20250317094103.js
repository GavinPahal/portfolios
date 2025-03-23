import styles from "./Effects.module.css";

const Effects = () => {
  return (
    <section className={styles.dielines}>
      <h2 className={styles.title}>Assets</h2>
      <div className={styles.images}>
        <img src="/images/Organge cans 1.png" alt="Tiger Claw Dieline 1" />
        <img src="/images/Green 1.png" alt="Tiger Claw Dieline 2" />
        <img src="/images/browine 1.png" alt="Tiger Claw Dieline 3" />
      </div>
      <h2 className={styles.title}>Video</h2>
        <p className={styles.textBlock}>
          Capturing the essence of GoldiBite in a short video was crucial for promoting the app.
          We highlighted key features, such as allergen detection, nutrition tracking, and menu translation,
          to show users how GoldiBite simplifies safe food choices. The video’s engaging visuals and
          informative content helped drive user engagement and interest.
        </p>
        <video width="800" height="800" controls preload="none" className={styles.video} poster="/images/Ball.png">
          <source src="/images/FinalAssignment.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>

    </section>
  );
};

export default Effects;

import styles from "./Effects.module.css";

const Effects = () => {
  return (
    <section className={styles.dielines}>
      <h2 className={styles.title}>Assets</h2>
      <div className={styles.images}>
        <img src="/images/Seats.svg" alt="Seats" />
        <img src="/images/bonuce.png" alt="Basketball" />
        <img src="/images/hand.png" alt="Hands" />
      </div>
      <h2 className={styles.title}>Video</h2>
        <p className={styles.textBlock}>
        Making this basketball video was all about capturing the energy and making it fun to watch. 
        focused on teaching how to shoot and score effortlessly, plus some smooth dribbling techniques.
         used After Effects to add cool visuals and effects that kept it engaging and easy to follow. 
         The goal was to help players level up their game while keeping the video fast paced and exciting. 
         In the end, it wasn’t just about showing skills, rather was about creating a video that grabs attention and makes learning fun.


        </p>
        <video width="800" height="800" controls preload="none" className={styles.video} poster="/images/Balls.png">
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

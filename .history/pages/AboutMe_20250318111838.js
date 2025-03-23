import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <NavBar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>About Me</h1>
            </section>

            {/* Main Content */}
            <section className={styles.content}>
                <div className={styles.textBlock}>
                    <h2 className={styles.subheading}>Hi, I'm Gavin Pahal</h2>
                    <p>
                        Hey! I'm Gavin, a designer and front-end developer who loves bringing creative ideas to life through clean and visually striking designs.
                         I enjoy the challenge of blending aesthetics with functionality, making sure every project is smooth, engaging, and visually cohesive.
                        What sets me apart? My background in martial arts has shaped the way I approach design and development discipline, precision, and adaptability are second nature to me.
                         Just like in training, I'm always pushing to refine my skills, pay attention to the little details, and find creative solutions to problems.
                        When I'm not designing or coding, you’ll probably find me training, exploring new design trends, or fine tuning my latest project.

                        Let's create something awesome together!
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <img src="/images/unnamed.jpg" alt="Gavin Pahal" />
                </div>
            </section>
            
            <section className={styles.additionalInfo}>
                <h2 className={styles.subheading}>My Skills</h2>
                <ul className={styles.skillsList}>
                    <li>UI/UX Design</li>
                    <li>Frontend Development</li>
                    <li>Graphics Design</li>
                    <li>Animation & Interaction Design</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutMe;
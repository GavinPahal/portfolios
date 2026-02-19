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
                        I enjoy blending aesthetics with functionality, making sure every project feels smooth and intentional.
                        My background in martial arts shaped my mindset discipline, precision, and adaptability.
                        Just like training, I refine details and solve problems with focus.
                        When I'm not designing or coding, I'm training or fine-tuning my latest project.
                        Let's create something awesome together!
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <img src="/images/Image.jpeg" alt="Gavin Pahal" />
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <div className={styles.contactHeader}>
                    <h2>Want to get in touch?</h2>
                    <h3>Drop me a line!</h3>
                </div>

                <form className={styles.contactForm}>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>
                    </div>

                    <div className={styles.textAreaGroup}>
                        <textarea placeholder="Enter your message" rows="6" required></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        SUBMIT
                    </button>
                </form>
            </section>

        </div>
    );
};

export default AboutMe;
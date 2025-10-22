import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Mockups",
    image: "/images/Rectangle 77 (1).png",
    link: "/can",
    description: "High-quality product mockups to showcase your designs.",
  },
  {
    title: "PocketPals",
    image: "/images/Rectangle 75.png",
    link: "/pocket-pals",
    description: "An animal learning app for kids.",
  },
  {
    title: "Magazine",
    image: "/images/Rectangle 65 (1).png",
    link: "/magazine",
    description: "Helping travelers with food allergies find safe meals.",
  },
  {
    title: "GoldiBite",
    image: "/images/bite.png",
    link: "/case-study",
    description: "Helping travelers with food allergies find safe meals.",
  },
  {
    title: "AfterEffects",
    image: "/images/Rectangle 68.png",
    link: "/After",
    description: "Helping travelers with food allergies find safe meals.",
  },
  {
    title: "Circular Materials",
    image: "/images/Screensho.png",
    link: "/Material",
    description: "Helping travelers with food allergies find safe meals.",
  },
];

// Vue-style animation
const imageVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Projects() {
  return (
    <section className={styles.projects}>
      {projects.map((p, i) => (
        <div key={i} className={styles.project}>
          {/* Static background card */}
          <div className={styles.cardBg}></div>

          {/* Animated image */}
          <motion.div
            className={styles.imageWrapper}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            variants={imageVariants}
          >
            <img src={p.image} alt={p.title} className={styles.image} />
          </motion.div>

          {/* Text stays still */}
          <div className={styles.textBox}>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.description}>{p.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

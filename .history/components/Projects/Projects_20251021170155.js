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

export default function Projects() {
  return (
    <section className={styles.projects}>
      {projects.map((p, i) => (
        <motion.a
          key={i}
          href={p.link}
          className={styles.project}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <div className={styles.card}>
            <img src={p.image} alt={p.title} className={styles.image} />
            <div className={styles.textBox}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </section>
  );
}

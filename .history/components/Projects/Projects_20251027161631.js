import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Mockups",
    image: "/images/Rectangle 77 (1).png",
    link: "/can",
    description: ".",
  },
  {
    title: "PocketPals",
    image: "/images/Rectangle 75.png",
    link: "/pocket-pals",
    description: ".",
  },
  {
    title: "Magazine",
    image: "/images/Rectangle 65 (1).png",
    link: "/magazine",
    description: ".",
  },
  {
    title: "GoldiBite",
    image: "/images/bite.png",
    link: "/case-study",
    description: ".",
  },
  {
    title: "AfterEffects",
    image: "/images/Rectangle 68.png",
    link: "/After",
    description: ".",
  },
  {
    title: "Circular Materials",
    image: "/images/Screensho.png",
    link: "/Material",
    description: ".",
  },
];


const imageVariants = {
  offscreen: {
    y: 200,
    opacity: 0,
    rotate: -10,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
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
        <motion.a
          key={i}
          href={p.link}
          className={styles.project}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.6, once: false }} 
        >
          <div className={styles.card}>
            <motion.img
              src={p.image}
              alt={p.title}
              className={styles.image}
              variants={imageVariants}
            />
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

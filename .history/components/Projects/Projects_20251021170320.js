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

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, duration: 0.6 },
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
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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

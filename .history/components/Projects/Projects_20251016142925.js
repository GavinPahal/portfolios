import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className={styles.cardContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          <motion.div variants={cardVariants} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

const projects = [
  { title: "Mockups", image: "/images/Rectangle 77 (1).png" },
  { title: "PocketPals", image: "/images/Rectangle 75.png" },
  { title: "Magazine", image: "/images/Rectangle 65 (1).png" },
  { title: "GoldiBite", image: "/images/bite.png" },
  { title: "AfterEffects", image: "/images/Rectangle 68.png" },
  { title: "Circular Materials", image: "/images/Screensho.png" },
];

export default Projects;

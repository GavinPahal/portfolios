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
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -3,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <section className={styles.projects}>
      {projects.map((project, i) => (
        <motion.a
          key={i}
          href={project.link}
          className={styles.project}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5 }}
          variants={cardVariants}
        >
          <div className={styles.cardBg} />
          <div className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
        </motion.a>
      ))}
    </section>
  );
};

export default Projects;

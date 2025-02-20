import styles from "./Projects.module.css";

const projects = [
  {
    title: "Mockups",
    image: "/images/mockups.jpg", // Update with actual image path
    link: "/mockups",
  },
  {
    title: "PocketPals",
    image: "/images/pocketpals.jpg", // Update with actual image path
    link: "/pocketpals",
  },
  {
    title: "GoldiBite",
    image: "/images/goldibite.jpg", // Update with actual image path
    link: "/goldibite",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <img src={project.image} alt={project.title} className={styles.image} />
          <h3 className={styles.title}>{project.title}</h3>
          <a href={project.link} className={styles.button}>Read More</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;

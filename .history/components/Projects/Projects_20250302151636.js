import { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";
import styles from "./Projects.module.css";


const projects = [
  {
    title: "Mockups",
    image: "/images/Rectangle 77 (1).png", // Update with actual image path
    link: "/can",
    description: "High-quality product mockups to showcase your designs.",
  },
  {
    title: "PocketPals",
    image: "/images/Rectangle 75.png", // Update with actual image path
    link: "/pocket-pals",
    description: "An animal learning app for kids.",
  },
  {
    title: "Magazine",
    image: "/images/Rectangle 65 (1).png", // Update with actual image path
    link: "/magazine",
    description: "Helping travelers with food allergies find safe meals.",
  },
  {
    title: "GoldiBite",
    image: "/images/Rectangle 66.png", // Update with actual image path
    link: "/case-study",
    description: "Helping travelers with food allergies find safe meals.",
  },
  
];

const Projects = () => {
  const [visible, setVisible] = useState(null);
  const popperRef = useRef([]);
  const tooltipRef = useRef([]);

  const handleMouseEnter = (index) => {
    setVisible(index);
    createPopper(popperRef.current[index], tooltipRef.current[index], {
      placement: "top",
      modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
    });
  };

  const handleMouseLeave = () => {
    setVisible(null);
  };

  return (
    <section className={styles.projects}>
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          className={styles.project}
          ref={(el) => (popperRef.current[index] = el)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={project.image} alt={project.title} className={styles.image} />
          <h3 className={styles.title}>{project.title}</h3>
          
          <div
            ref={(el) => (tooltipRef.current[index] = el)}
            className={`${styles.overlay} ${visible === index ? styles.show : ""}`}
          >
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;

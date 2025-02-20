import { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Mockups",
    image: "/images/Rectangle 65 (2).png",
    link: "/mockups",
    description: "Tiger Claw cans are inspired by martial arts culture and recovery, featuring a bold minimalist tiger design.",
  },
  {
    title: "Pocket Pals",
    image: "/images/pocketpals.png",
    link: "/pocketpals",
    description: "A fun and interactive app that introduces children to different animal companions through engaging stories.",
  },
  {
    title: "GoldiBite",
    image: "/images/goldibite.png",
    link: "/goldibite",
    description: "A food allergy safety app designed to help travelers find safe meals worldwide with confidence.",
  },
];

const Projects = () => {
  const [tooltip, setTooltip] = useState(null);
  const popperRef = useRef(null);
  const tooltipRef = useRef(null);

  const showTooltip = (event, text) => {
    setTooltip(text);
    createPopper(event.currentTarget, tooltipRef.current, {
      placement: "top",
    });
  };

  return (
    <section className={styles.projects}>
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          className={styles.project}
          onMouseEnter={(e) => showTooltip(e, project.description)}
          onMouseLeave={() => setTooltip(null)}
          ref={popperRef}
        >
          <img src={project.image} alt={project.title} />
          <div className={styles.overlay}>
            <h2>{project.title}</h2>
          </div>
        </a>
      ))}
      {tooltip && <div ref={tooltipRef} className={styles.tooltip}>{tooltip}</div>}
    </section>
  );
};

export default Projects;

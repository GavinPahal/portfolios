import { useState, useRef } from "react";
import { createPopper } from "@popperjs/core";
import styles from "./Home.module.css";

const projects = [
  {
    title: "Mockups",
    image: "/images/e.png",
    link: "/mockups",
    description:
      "Tiger Claw cans are inspired by martial arts culture and recovery, featuring a bold minimalist tiger design.",
  },
  {
    title: "Pocket Pals",
    image: "/images/pocketpals.png",
    link: "/pocketpals",
    description:
      "A fun and interactive app that introduces children to different animal companions through engaging stories.",
  },
  {
    title: "GoldiBite",
    image: "/images/goldibite.png",
    link: "/goldibite",
    description:
      "A food allergy safety app designed to help travelers find safe meals worldwide with confidence.",
  },
];

const Home = () => {
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Hi, I'm Gavin Pahal</h1>
        <button className={styles.resumeButton}>View Resume</button>
      </header>

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
        {tooltip && (
          <div ref={tooltipRef} className={styles.tooltip}>
            {tooltip}
          </div>
        )}
      </section>

      <footer className={styles.footer}>
        <p>Contact Info</p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:gavin@example.com">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

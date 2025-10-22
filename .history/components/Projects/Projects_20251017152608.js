"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Projects.module.css";

const projects = [/* your data here */];

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    // runs only in the browser, after hydration
    gsap.fromTo(
      `.${styles.project}`,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        rotate: -3,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={containerRef} className={styles.projects}>
      {projects.map((p, i) => (
        <a key={i} href={p.link} className={styles.project}>
          <div className={styles.cardBg} />
          <div className={styles.card}>
            <img src={p.image} alt={p.title} className={styles.image} />
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.description}>{p.description}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

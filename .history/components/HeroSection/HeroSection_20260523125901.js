# Updated Hero Section for Your SoftMoc Portfolio Submission

Use your custom banner as the hero background to make the portfolio immediately feel branded and aligned with the assignment.

## Updated `HeroSection.jsx`

```jsx
import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import heroBanner from "../../assets/Banner(1).png";

const HeroSection = () => {
  const words = ["GAVIN PAHAL"];
  const [displayText, setDisplayText] = useState([""]);
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Typing animation
  useEffect(() => {
    if (index < words[0].length) {
      const timeout = setTimeout(() => {
        setDisplayText([displayText[0] + words[0][index]]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, displayText, words]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeOut = Math.max(0, 1 - scrollY / 300);
  const moveUp = Math.min(scrollY / 3, 100);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${heroBanner})`
      }}
    >
      <div
        className={styles.heroText}
        style={{
          opacity: fadeOut,
          transform: `translateY(-${moveUp}px)`
        }}
      >
        <span className={styles.highlightedText}>
          {displayText[0]}
        </span>

        <h1 className={styles.mainHeading}>
          SoftMoc Hero Banner Concept
        </h1>

        <p className={styles.subText}>
          A homepage hero banner concept inspired by comfort-first footwear
          brands, blending modern UI design with strong retail visual storytelling.
        </p>

        <a
          href="#projects"
          className={styles.ctaButton}
        >
          View Project
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
```

---

## Updated `HeroSection.module.css`

```css
.hero {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 0 8%;
  position: relative;
  overflow: hidden;
}

.heroText {
  max-width: 650px;
  color: white;
  transition: all 0.3s ease;
}

.highlightedText {
  font-size: 1rem;
  letter-spacing: 4px;
  font-weight: 600;
  color: #d4b08a;
  display: block;
  margin-bottom: 1rem;
}

.mainHeading {
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.subText {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 550px;
}

.ctaButton {
  display: inline-block;
  padding: 14px 28px;
  background: white;
  color: black;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.ctaButton:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}
```

---

## Portfolio Tip for SoftMoc

Under this hero section, add a short case study section with:

* Brand chosen
* Design goal
* Target audience
* Why you chose the typography/colors
* UX thinking behind the layout

That makes the project feel more like a professional UI/UX presentation rather than just a graphic banner.

You can also title the project:

**“Comfort Meets Motion — SoftMoc Homepage Hero Exploration”**

import { useState, useEffect } from "react";
import "./ScrollUp.module.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <div className="scroll-container" onClick={scrollToTop}>
        <span className="scroll-text">Back to Top</span>
        <div className="underline"></div>
      </div>
    )
  );
};

export default ScrollUp;

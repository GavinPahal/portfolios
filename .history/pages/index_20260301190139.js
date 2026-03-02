import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Projects />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default home;

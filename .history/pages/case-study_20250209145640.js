import NavBar from "../components/NavBar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import Sections from "../components/Sections/Sections";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const CaseStudy = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title">Case Study</h1>
      <Carousel />
      <Sections />
      <BeforeAfter />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default CaseStudy;

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import MagazineDescription from "../components/MagazineDescription/MagazineDescription";
import MagazineSpreads from "../components/MagazineSpreads/MagazineSpreads";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const Magazine = () => {
  return (
    <div>
      <NavBar />
      <Magazine />
      <MagazineDescription />
      <MagazineSpreads />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Magazine;

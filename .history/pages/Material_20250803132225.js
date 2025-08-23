import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import Materials from "../components/Materials/Materials";
import Effects from "../components/Effects/Effects";

const Material = () => {
  return (
    <div>
      <NavBar />
      <Materials/>
      <Effects/>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Material;

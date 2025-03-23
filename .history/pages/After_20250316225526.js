import NavBar from "../components/NavBar/NavBar";
import After from "../components/After/After";
import Mockups from "../components/Mockups/Mockups";
import Dielines from "../components/Dielines/Dielines";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const After = () => {
  return (
    <div>
      <NavBar />
      <After/>
      <Mockups />
      <Dielines />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default After;

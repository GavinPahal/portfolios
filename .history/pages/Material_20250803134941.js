import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import Materials from "../components/Materials/Materials";
import Blog from "../components/Blog/Blog";

const Material = () => {
  return (
    <div>
      <NavBar />
      <Materials/>
      <Blog/>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Material;

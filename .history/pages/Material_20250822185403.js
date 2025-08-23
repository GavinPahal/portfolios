import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import Materials from "../components/Materials/Materials";
import Blog from "../components/Blog/Blog";
import Summer from "../components/Summer/Summer";

const Material = () => {
  return (
    <div>
      <NavBar />
      <Materials/>
      <Blog/>
      <Summer/>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Material;

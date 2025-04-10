import NavBar from "../components/NavBar/NavBar";
import PocketHero from "../components/PocketHero/PocketHero";
import PocketMockups from "../components/PocketMockups/PocketMockups";
import StyleGuide from "../components/StyleGuide/StyleGuide";
import Layouts from "../components/Layouts/Layouts";
import FinalProduct from "../components/FinalProduct/FinalProduct";
import Footer from "../components/Footer/Footer";

const PocketPals = () => {
  return (
    <div>
      <NavBar />
      <PocketHero />
      <PocketMockups />
      <StyleGuide />
      <Layouts />
      <FinalProduct />
      <Footer />
    </div>
  );
};

export default PocketPals;

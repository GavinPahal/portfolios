import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Mockups from "../components/Mockups/Mockups";
import Dielines from "../components/Dielines/Dielines";
import ScrollUp from "../components/ScrollUp/ScrollUp"; // Import ScrollUp
import Footer from "../components/Footer/Footer";

const Cans = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Mockups />
      <Dielines />
      
      {/* Scroll Up Component Above Footer */}
      <ScrollUp />
      
      <Footer />
    </div>
  );
};

export default Cans;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MagazineCover from "../components/MagazineCover";
import MagazineDescription from "../components/MagazineDescription";
import MagazineSpreads from "../components/MagazineSpreads";

export default function Home() {
  return (
    <>
      <Navbar />
      <MagazineCover />
      <MagazineDescription />
      <MagazineSpreads />
      <Footer />
    </>
  );
}

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import MagazineCover from "../components/MagazineCover/MagazineCover";
import MagazineDescription from "../components/MagazineDescription/MagazineDescription";
import MagazineSpreads from "../components/MagazineSpreads/MagazineSpreads";

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

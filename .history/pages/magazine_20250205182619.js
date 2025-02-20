import Footer from "../components/Footer/Footer";
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

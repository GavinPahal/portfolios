import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const Resume = () => {
  return (
    <div>
      <NavBar />
      <section>
        <h2>Resume</h2>
        <div>
          <img src="/images/Gavin_Pahal_Resume-1.png" alt="Resume Page 1" />
        </div>
      </section>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Resume;

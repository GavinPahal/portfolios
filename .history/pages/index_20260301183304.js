import Head from 'next/head';          // ← Add this import

import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const Home = () => {                   // ← Renamed for clarity (optional but recommended)
  return (
    <>
      <Head>
        <title>Gavin Pahal – UI/UX & Digital Designer | Clean, Intuitive Experiences</title>
        <meta
          name="description"
          content="Gavin Pahal is a digital designer specializing in UI/UX, graphic design, motion graphics, and purposeful digital experiences. Explore my portfolio of clean, intuitive work."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gavinpahal.com/" />

        {/* Open Graph tags – improves how your site looks when shared on social media */}
        <meta property="og:title" content="Gavin Pahal – Digital Designer" />
        <meta
          property="og:description"
          content="Creating clean, intuitive UI/UX and digital experiences that feel natural to use."
        />
        <meta property="og:url" content="https://www.gavinpahal.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.gavinpahal.com/path-to-your-main-hero-or-portfolio-image.jpg" // Replace with real image URL from your public folder
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>
        <NavBar />
        <HeroSection />
        <Projects />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
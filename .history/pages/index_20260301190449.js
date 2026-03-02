import Head from 'next/head';

import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

const Home = () => {
  return (
    <>
      <Head>
        <title>Gavin Pahal – UI/UX & Digital Designer | Clean, Intuitive Experiences</title>
        <meta
          name="description"
          content="Gavin Pahal. Digital designer creating clean, intuitive UI/UX, graphic design, motion graphics, and print experiences."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gavinpahal.com/" />

        <meta property="og:title" content="Gavin Pahal – UI/UX & Digital Designer" />
        <meta
          property="og:description"
          content="Clean, intuitive digital experiences."
        />
        <meta property="og:url" content="https://www.gavinpahal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gavin Pahal" />
        <meta property="og:image" content="https://www.gavinpahal.com/Front.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.gavinpahal.com/Front.png" />
      </Head>

      <div>
        <NavBar />

        <HeroSection />

        {/* Optional: Tiny one-liner if you want something under hero (delete the whole section if not) */}
        {/* <p style={{ textAlign: 'center', margin: '2rem 0', fontSize: '1.1rem' }}>
          Scroll to explore selected projects.
        </p> */}

        <Projects />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
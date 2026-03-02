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
          content="Gavin Pahal is a Vancouver-based digital designer specializing in UI/UX, graphic design, motion graphics, and print. Creating clean, intuitive experiences that feel natural. Explore my portfolio."
        />
        <meta 
          name="keywords" 
          content="Gavin Pahal, UI/UX designer Vancouver, digital designer, portfolio, motion graphics, graphic design, print design, After Effects" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gavinpahal.com/" />

        <meta property="og:title" content="Gavin Pahal – UI/UX & Digital Designer" />
        <meta
          property="og:description"
          content="Vancouver-based digital designer creating clean, intuitive UI/UX experiences, graphic design, motion graphics, and print layouts."
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

        {/* Short, optional intro – remove this entire <section> if you want ZERO extra text */}
        <section
          style={{
            maxWidth: '800px',
            margin: '0 auto 3rem',
            padding: '0 1rem',
            textAlign: 'center',
            fontSize: '1.1rem',
          }}
        >
          <p>
            Vancouver-based digital designer focused on clean, intuitive UI/UX, graphic design, motion graphics, and print.
          </p>
          <p>
            Scroll to explore selected projects.
          </p>
        </section>

        <Projects />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default Home;
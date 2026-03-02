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
          content="Gavin Pahal is a Vancouver-based digital designer specializing in UI/UX, graphic design, motion graphics, and purposeful digital experiences. Creating clean, intuitive work that feels natural to use. Explore my portfolio."
        />
        <meta name="keywords" content="Gavin Pahal, UI/UX designer, digital designer Vancouver, portfolio, motion graphics, graphic design, print design, After Effects" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gavinpahal.com/" />

        <meta property="og:title" content="Gavin Pahal – UI/UX & Digital Designer" />
        <meta
          property="og:description"
          content="Vancouver-based digital designer creating clean, intuitive UI/UX experiences, graphic design, motion graphics, and print layouts that solve real problems with clarity and purpose."
        />
        <meta property="og:url" content="https://www.gavinpahal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gavin Pahal" />
        <meta
          property="og:image"
          content="https://www.gavinpahal.com/Front.png"  // Full URL – replace filename if your actual OG/hero image is different (e.g., /og-image.jpg)
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.gavinpahal.com/Front.png" />
      </Head>

      <div>
        <NavBar />

        <HeroSection />

        {/* Expanded bio section – adds depth for SEO without cluttering design */}
        <section
          style={{
            maxWidth: '800px',
            margin: '0 auto 4rem',
            padding: '0 1rem',
            textAlign: 'center',
          }}
        >
          <h1>Gavin Pahal – UI/UX & Digital Designer</h1>
          <p>
            Vancouver-based digital designer creating clean, intuitive experiences that feel natural to use. 
            I blend UI/UX design, graphic design, motion graphics (After Effects), and print layouts to simplify 
            complex ideas, solve real user problems, and deliver visuals with clarity, purpose, and intention.
          </p>
          <p>
            Explore my portfolio featuring the GoldiBite AI-powered allergen scanner app, INSPIRA Swedish interior 
            design magazine editorial layouts, After Effects motion graphics videos (e.g., basketball tutorials), 
            sustainable packaging internship work at Circular Materials, high-fidelity product mockups, and kid-friendly 
            animal learning app designs.
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
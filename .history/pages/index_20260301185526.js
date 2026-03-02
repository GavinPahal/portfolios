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
          content="Gavin Pahal is a Vancouver-based digital designer specializing in UI/UX, graphic design, motion graphics, and purposeful digital experiences. Creating clean, intuitive work that feels natural to use. Explore my portfolio of selected projects."
        />
        <meta 
          name="keywords" 
          content="Gavin Pahal, UI/UX designer Vancouver, digital designer, portfolio, motion graphics, graphic design, print design, After Effects, GoldiBite, INSPIRA magazine" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gavinpahal.com/" />

        {/* Open Graph for social previews */}
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
          content="https://www.gavinpahal.com/Front.png"  // Change to your actual hero/OG image path if different
        />

        {/* Twitter/X card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gavin Pahal – UI/UX & Digital Designer" />
        <meta name="twitter:description" content="Creating clean, intuitive digital experiences that feel natural. Portfolio of UI/UX, motion, graphic & print design." />
        <meta name="twitter:image" content="https://www.gavinpahal.com/Front.png" />
      </Head>

      <div>
        <NavBar />

        <HeroSection />

        {/* Expanded content section – this adds substantial text to help homepage dominate branded searches */}
        <section
          style={{
            maxWidth: '900px',
            margin: '0 auto 5rem',
            padding: '0 1.5rem',
            lineHeight: '1.7',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>
            Gavin Pahal – UI/UX & Digital Designer
          </h2>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Vancouver-based digital designer creating clean, intuitive experiences that feel natural and effortless to use. 
            I specialize in blending UI/UX design, graphic design, motion graphics (After Effects), and print editorial layouts 
            to simplify complex ideas, solve real user problems, and deliver visuals with clarity, purpose, and strong intention.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            My work focuses on minimalism with meaning: reducing noise while maximizing impact and usability. 
            From the GoldiBite AI-powered allergen scanner app (helping users with dietary restrictions make safe food choices via label scanning, 
            nutrition tracking, and instant alerts), to INSPIRA Swedish interior design magazine editorial layouts, 
            After Effects motion graphics videos (like basketball tutorials), sustainable packaging during my internship at Circular Materials, 
            high-fidelity product mockups, and kid-friendly animal learning app concepts—every project prioritizes user-centered clarity and functional beauty.
          </p>

          <p style={{ fontSize: '1.1rem' }}>
            Scroll down to explore selected case studies and projects. Open to collaborations, freelance, or full-time opportunities—feel free to reach out via contact.
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
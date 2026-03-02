// ... your existing imports and <Head> ...

const Home = () => {
  return (
    <>
      <Head>
        {/* Your current Head is good – just ensure og:image is absolute */}
        <meta property="og:image" content="https://www.gavinpahal.com/Front.png" />
        <meta name="twitter:image" content="https://www.gavinpahal.com/Front.png" />
        {/* Optional: add if not there */}
        <meta name="keywords" content="Gavin Pahal, UI/UX designer Vancouver, digital designer, portfolio, motion graphics, graphic design" />
      </Head>

      <div>
        <NavBar />
        <HeroSection />

        {/* NEW: Expanded content block – this adds ~250 words + headings for SEO strength */}
        <section style={{ maxWidth: '900px', margin: '0 auto 5rem', padding: '0 1.5rem', lineHeight: '1.7' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Gavin Pahal – UI/UX & Digital Designer</h1>
          
          <p>
            I'm a Vancouver-based digital designer focused on crafting clean, intuitive experiences that feel natural and effortless to use. 
            With a background in UI/UX design, graphic design, motion graphics (After Effects), and print editorial layouts, I blend visual clarity 
            with purposeful functionality to simplify complex ideas and solve real user problems.
          </p>
          
          <p>
            My approach emphasizes minimalism with intention: reducing clutter while maximizing impact. Whether designing AI-powered apps like 
            GoldiBite (an allergen-scanning tool for dietary restrictions), editorial magazine spreads for INSPIRA Swedish interior design, 
            motion graphics videos for tutorials, sustainable packaging during my internship at Circular Materials, high-fidelity product mockups, 
            or kid-friendly animal learning apps, the goal is always the same—create work that is both beautiful and highly usable.
          </p>
          
          <h2 style={{ fontSize: '2rem', margin: '2.5rem 0 1rem' }}>What I Specialize In</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• UI/UX design for web and mobile apps</li>
            <li>• Graphic design and print layouts (magazines, brochures)</li>
            <li>• Motion graphics and After Effects animations</li>
            <li>• Product mockups and visual storytelling</li>
            <li>• Sustainable and user-centered design principles</li>
          </ul>

          <p style={{ marginTop: '2rem' }}>
            Browse my portfolio below to see case studies and selected projects. I'm open to collaborations—feel free to reach out.
          </p>
        </section>

        <Projects />
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};
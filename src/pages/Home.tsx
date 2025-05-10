import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
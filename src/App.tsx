import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'SimilipalTech - Software Service Company';
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="font-lato text-base text-text bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
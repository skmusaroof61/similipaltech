import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-primary py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-text hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm" className="ml-2">
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-text focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 bg-white shadow-inner">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-text hover:text-accent transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="primary" size="sm" fullWidth>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
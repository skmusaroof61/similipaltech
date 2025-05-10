import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Section */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-text mb-6 text-sm leading-relaxed">
              SimilipalTech is a forward-thinking software service company dedicated to creating 
              innovative solutions that help businesses thrive in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text hover:text-accent transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/SIMILIPALTECH" className="text-text hover:text-accent transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com/SIMILIPALTECH" className="text-text hover:text-accent transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-text hover:text-accent transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-text hover:text-accent transition-colors duration-200">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-text font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Applications', 'UI/UX Design', 'Cloud Services', 'DevOps', 'AI Solutions'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-text hover:text-accent transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-text font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
               
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-text hover:text-accent transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-text font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-text text-sm">
                 MAYURBHANJ  ODISHA INDIA
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-text hover:text-accent transition-colors duration-200 text-sm">
                  +91 9827 XXXX XX
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@similipaltech.com" className="text-text hover:text-accent transition-colors duration-200 text-sm">
                  similipaltech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text text-sm mb-4 md:mb-0">
              &copy; {currentYear} SimilipalTech. All rights reserved.
            </p>
            <div className="flex space-x-6">
            <p className="text-text text-sm mb-4 md:mb-0">
           MADE WITH LOVE IN MAYURBHANJ
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
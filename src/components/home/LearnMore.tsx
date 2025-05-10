import React from 'react';
import Button from '../ui/Button';

const LearnMore: React.FC = () => {
  return (
    <section id="learn-more" className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-6">
            Learn More About SimilipalTech
          </h2>
          <p className="text-text-secondary mb-6">
            At SimilipalTech, we are more than just a technology company. We are a passionate team committed to building
            sustainable, impactful, and cutting-edge solutions that empower businesses worldwide. We focus on understanding
            our clients' challenges and providing them with solutions that drive innovation and growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-text-secondary">
            <h3 className="font-poppins font-semibold text-xl mb-4">Our Vision</h3>
            <p className="mb-4">
              Our vision is to be a leader in technology solutions, known for delivering simple, reliable, and innovative 
              services that help businesses grow and thrive. We aim to create lasting impact by staying true to our core values.
            </p>
            <h3 className="font-poppins font-semibold text-xl mb-4">Our Services</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom Web and App Development</li>
              <li>AI & Machine Learning Solutions</li>
              <li>Cloud Services and Integration</li>
              <li>UI/UX Design & User Research</li>
              <li>Digital Marketing and SEO</li>
            </ul>
          </div>
          
          <div className="text-text-secondary">
            <h3 className="font-poppins font-semibold text-xl mb-4">Our Team</h3>
            <p className="mb-4">
              Our team is composed of industry experts with years of experience in software development, design, and 
              technology consulting. We work together to deliver exceptional results, always putting the needs of our clients 
              at the forefront.
            </p>
            <h3 className="font-poppins font-semibold text-xl mb-4">Join Us</h3>
            <p className="mb-4">
              We are constantly looking for talented individuals who share our values and vision. If you’re passionate about 
              technology and want to make a difference, we would love to hear from you.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;

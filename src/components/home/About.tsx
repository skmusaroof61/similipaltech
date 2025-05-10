import React from 'react';
import Button from '../ui/Button';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const keyPoints = [
    'Simplicity: We believe in clean design and simple, effective solutions.',
    'Reliability: We take pride in delivering high-quality work that our clients can count on.',
    'Innovation: We embrace creativity and forward-thinking to solve problems in new ways.',
    'Collaboration: We work together as a team and with our clients to create the best results.',
    'Integrity: We operate with honesty and transparency in everything we do.',
    'Continuous Growth: We are committed to learning, adapting, and improving every day, just like nature.',
  ];
  

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-full bg-secondary/50 rounded-xl absolute top-4 right-4 z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SimilipalTech team collaboration" 
                className="w-full h-auto rounded-xl relative z-10 shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-6">
              About SimilipalTech
            </h2>
            <p className="text-text-secondary mb-12 ">
            SimilipalTech was born out of a deep connection to Similipal, a beautiful forest in Odisha, India. Much like the forest—diverse, vibrant, and ever-evolving—we strive to create technology that is strong, flexible, and impactful. What started as a simple idea has blossomed into a dedicated team, passionate about providing meaningful digital solutions to businesses worldwide.
            </p>
            <p className="text-text-secondary mb-8">
              We believe in building long-term partnerships with our clients, understanding their 
              unique challenges, and crafting solutions that drive growth and innovation.
            </p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{point}</span>
                </div>
              ))}
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
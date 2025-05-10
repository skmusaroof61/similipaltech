import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-text leading-tight mb-6">
              Transforming Ideas into <span className="text-accent">Digital Reality</span>
            </h1>
            <p className="text-text-secondary text-lg mb-8 max-w-lg leading-relaxed">
              SimilipalTech is a forward-thinking software service company dedicated to helping 
              businesses innovate, adapt, and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
             <a href='#Contact'> <Button variant="primary" size="lg">
                contact us
              </Button>
             </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="w-full h-full bg-secondary/30 rounded-xl absolute top-4 left-4 z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital software solutions" 
                className="w-full h-auto rounded-xl relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
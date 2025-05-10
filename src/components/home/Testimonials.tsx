import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'InnovateTech',
      content: 'SimilipalTech transformed our digital presence with their exceptional web development services. Their team was highly professional, communicative, and delivered the project ahead of schedule.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Michael Thompson',
      position: 'Product Manager',
      company: 'DataFlow Systems',
      content: 'Working with SimilipalTech on our mobile application was a seamless experience. They understood our requirements perfectly and created an intuitive, feature-rich app that our users love.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Marketing Director',
      company: 'GrowthEdge',
      content: 'The team at SimilipalTech not only delivered a beautiful website but also provided valuable insights that improved our conversion rates. Their attention to detail and commitment to quality is unmatched.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">Client Testimonials</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with SimilipalTech.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="absolute top-6 left-6 text-accent opacity-20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-text text-lg italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-text">{testimonials[currentIndex].name}</h4>
                  <p className="text-text-secondary text-sm">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev} 
              className="p-2 rounded-full bg-white text-text hover:bg-accent hover:text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    currentIndex === index ? 'bg-accent' : 'bg-secondary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next} 
              className="p-2 rounded-full bg-white text-text hover:bg-accent hover:text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
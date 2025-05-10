import React, { useState } from 'react';
import Card, { CardContent } from '../ui/Card';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Cloud', 'AI'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A modern e-commerce platform with seamless checkout experience.'
    },
    {
      id: 2,
      title: 'Health Tracking App',
      category: 'Mobile',
      image: 'https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile application for tracking health metrics and fitness goals.'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Intuitive financial dashboard with data visualization components.'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure',
      category: 'Cloud',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Scalable cloud infrastructure setup for a growing SaaS company.'
    },
    {
      id: 5,
      title: 'AI Recommendation Engine',
      category: 'AI',
      image: 'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Machine learning algorithm for personalized content recommendations.'
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      category: 'Web',
      image: 'https://images.pexels.com/photos/9896141/pexels-photo-9896141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Patient management portal for healthcare providers.'
    },
  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">Our Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered to clients across various industries.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-primary text-text hover:bg-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-poppins font-semibold text-lg text-text">{project.title}</h3>
                  <span className="text-xs bg-primary px-2 py-1 rounded text-accent">{project.category}</span>
                </div>
                <p className="text-text-secondary text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
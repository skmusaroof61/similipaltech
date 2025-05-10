import React from 'react';
import { Code, Smartphone, Palette, Cloud, Server, Brain } from 'lucide-react';
import Card, { CardHeader, CardContent } from '../ui/Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-start">
        <div className="bg-primary p-3 rounded-lg mb-4">
          <div className="text-accent">{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-poppins font-semibold text-xl mb-3 text-text">{title}</h3>
        <p className="text-text-secondary text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive, high-performance web applications using cutting-edge technologies that deliver exceptional user experiences.',
      icon: <Code size={24} />,
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.',
      icon: <Palette size={24} />,
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions that optimize performance, enhance security, and reduce operational costs.',
      icon: <Cloud size={24} />,
    },
    {
      title: 'DevOps',
      description: 'Streamlined development workflows and infrastructure automation for faster, more reliable software delivery.',
      icon: <Server size={24} />,
    },
    {
      title: 'AI Solutions',
      description: 'Custom artificial intelligence and machine learning solutions that provide valuable insights and automation capabilities.',
      icon: <Brain size={24} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">Our Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We offer a comprehensive range of software services to help your business succeed in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
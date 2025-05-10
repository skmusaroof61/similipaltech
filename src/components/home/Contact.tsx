import React, { useState } from 'react';
import Button from '../ui/Button';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success message (not implemented in this example)
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: 'Our Location',
      details: '123 SIMILIPAL, MAYURBHANJ, OD 757001, INDIA',
    },
    {
      icon: <Mail size={24} className="text-accent" />,
      title: 'Email Us',
      details: 'similipaltech@gmail.com',
      link: 'mailto:similipaltech@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-accent" />,
      title: 'Call Us',
      details: '+91 1234 5678 90',
      link: 'tel:+91 1234567890',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">Contact Us</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-primary rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="font-poppins font-semibold text-lg text-text mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-text-secondary">{info.details}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-primary rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-text font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-text font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              >
                <option value="">Select a subject</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-text font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button variant="primary" size="lg" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
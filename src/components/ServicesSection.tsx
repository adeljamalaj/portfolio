
import React from 'react';
import { Monitor, Palette, Image, Video, Code, Webcam, PenLine } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      icon: <Monitor className="w-10 h-10 text-accent-blue" />,
      description: "Custom website design with responsive layouts for optimal viewing on any device."
    },
    {
      title: "Graphic Design",
      icon: <Palette className="w-10 h-10 text-accent-blue" />,
      description: "Creative design solutions for both print and digital media to enhance your brand."
    },
    {
      title: "Poster Design",
      icon: <Image className="w-10 h-10 text-accent-blue" />,
      description: "Eye-catching poster designs for events, promotions, and advertisements."
    },
    {
      title: "Logo Designing",
      icon: <PenLine className="w-10 h-10 text-accent-blue" />,
      description: "Distinctive and memorable logo designs that represent your brand identity."
    },
    {
      title: "Videography",
      icon: <Video className="w-10 h-10 text-accent-blue" />,
      description: "Professional video production services from concept to final edit."
    },
    {
      title: "IT Support",
      icon: <Code className="w-10 h-10 text-accent-blue" />,
      description: "Technical assistance for hardware, software, and network-related issues."
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Offering a comprehensive range of IT and creative services to meet your professional needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center card-hover border border-gray-100"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-blue-50">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

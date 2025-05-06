
import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Technical Assistant",
      company: "Lusail Shooting Complex, Qatar",
      period: "April 2024",
      description: [
        "Assisted in technical operations for ISSF Shotgun Olympic Qualification and other competitions.",
        "Troubleshot hardware/software issues, configured networks, installed CCTV, sound systems, printers, and network devices."
      ]
    },
    {
      title: "Network Associate",
      company: "CDAC Trivandrum, India",
      period: "October 2024",
      description: [
        "Created network infrastructure diagrams for data centers.",
        "Provided technical support and maintained technical equipment."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 md:mb-0">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-accent-blue bg-white"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                      <div className="flex items-center mb-2 justify-between">
                        <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                        <Briefcase size={20} className="text-accent-blue ml-2" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-gray-600 mb-4">{exp.company}</p>
                      <ul className={`text-gray-700 space-y-1 ${index % 2 === 0 ? 'md:pl-0' : 'md:pl-0'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline layout */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

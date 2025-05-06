
import React from 'react';
import { Award } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Calicut University",
      period: "2021–2024",
    },
    {
      degree: "Masters in Computer Applications",
      institution: "IGNOU",
      period: "2024–2026",
      current: true,
    },
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 pl-0 md:pl-2 lg:pl-4">
            <p className="text-lg text-gray-700 mb-6">
              Detail-oriented and adaptable IT professional with a strong foundation in computer networking, system administration, programming, graphic design and videography. Seeking opportunities to leverage technical expertise and problem-solving skills to support IT operations and drive innovation. Passionate about artificial intelligence, cybersecurity, entrepreneurship and growth.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Award className="mr-2 text-accent-blue" /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">
                      {edu.period} {edu.current && <span className="text-accent-blue">(Currently studying)</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://i.postimg.cc/kX2XBp3g/2.jpg"
                alt="Adel Jamal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

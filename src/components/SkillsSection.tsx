
import React from 'react';
import { Monitor, Code, Pen, Webcam } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "IT Support & System Administration",
      icon: <Monitor className="w-8 h-8 text-accent-blue" />,
      skills: ["Troubleshooting", "System Maintenance", "Domain Management", "Hardware Support", "OS Administration"]
    },
    {
      title: "Networking",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent-blue">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>,
      skills: ["Network Troubleshooting", "Router/Switch Setup", "Diagnostic Tools (traceroute, ping)", "Network Infrastructure"]
    },
    {
      title: "Graphic Design",
      icon: <Pen className="w-8 h-8 text-accent-blue" />,
      skills: ["Adobe Photoshop", "Adobe Premiere Pro", "Logo Design", "Poster Creation", "Visual Communication"]
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8 text-accent-blue" />,
      skills: ["Python", "JavaScript", "Flutter", "Web Development", "App Development"]
    },
    {
      title: "Videography",
      icon: <Webcam className="w-8 h-8 text-accent-blue" />,
      skills: ["Video Editing", "Shooting", "Post-production", "Visual Storytelling"]
    },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.5)] hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700/60 text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

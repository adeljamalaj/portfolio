
import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "IT Support Professional",
      issuer: "Google",
      icon: <ShieldCheck className="w-10 h-10 text-accent-blue" />,
      description: "Comprehensive IT support skills covering troubleshooting, system administration, networking, and security."
    },
    {
      title: "Certified Network Expert (KCNE)",
      issuer: "Keltron",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-blue">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>,
      description: "Expert-level networking skills including network design, implementation, troubleshooting, and management."
    },
    {
      title: "AI Essentials",
      issuer: "Google",
      icon: <Award className="w-10 h-10 text-accent-blue" />,
      description: "Fundamentals of artificial intelligence, machine learning concepts, and practical AI applications."
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      icon: <Award className="w-10 h-10 text-accent-blue" />,
      description: "Non-technical introduction to AI concepts, applications, and implementation strategies for organizations."
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Certifications</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0 p-3 bg-gray-100 rounded-full">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">Issued by {cert.issuer}</p>
                  <p className="text-gray-500">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;


import React, { useState } from 'react';
import { ArrowDownCircle, Loader } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return <section id="home" className="relative min-h-screen bg-dark-charcoal flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-charcoal to-black opacity-90"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Adel <span className="text-accent-blue">Jamal</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              IT Professional | Graphic Designer | Problem Solver
            </h2>
            <p className="text-gray-400 max-w-lg mb-8">
              Fixing tech, crafting designs, and occasionally breaking things—just to fix them better.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="bg-accent-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </a>
              <a href="#contact" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center pb-12 lg:pb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
                  <Loader className="w-12 h-12 text-accent-blue animate-spin" />
                </div>
              )}
              <Avatar className="w-full h-full border-4 border-accent-blue shadow-xl">
                <AvatarImage 
                  alt="Adel Jamal" 
                  className="object-cover" 
                  src="https://i.postimg.cc/xjx1jSZZ/1.jpg"
                  onLoad={() => setImageLoaded(true)} 
                  style={{ display: imageLoaded ? "block" : "none" }}
                />
                <AvatarFallback className="text-4xl bg-accent-blue text-white">AJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <ArrowDownCircle size={36} className="hover:text-accent-blue transition-colors" />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;

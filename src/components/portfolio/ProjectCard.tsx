
import React from 'react';
import ImageWithLoading from './ImageWithLoading';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
  };
  onClick: (project: any) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover cursor-pointer transform hover:scale-[1.01] transition-transform duration-300"
      onClick={() => onClick(project)}
    >
      <div className="h-64 overflow-hidden relative">
        <ImageWithLoading 
          item={{src: project.thumbnail, alt: project.title}} 
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <button className="text-accent-blue font-medium flex items-center">
          View Details
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

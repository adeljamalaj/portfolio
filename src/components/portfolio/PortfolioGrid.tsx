
import React from 'react';
import ProjectCard from './ProjectCard';

interface PortfolioGridProps {
  projects: Array<{
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
  }>;
  onProjectClick: (project: any) => void;
}

const PortfolioGrid = ({ projects, onProjectClick }: PortfolioGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;

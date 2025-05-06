
import React, { useState } from 'react';
import PortfolioFilterTabs from './portfolio/PortfolioFilterTabs';
import PortfolioGrid from './portfolio/PortfolioGrid';
import ProjectDetailDialog from './portfolio/ProjectDetailDialog';
import ItemDetailDialog from './portfolio/ItemDetailDialog';
import { tabs, projects } from './portfolio/data/portfolioData';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => 
    activeTab === 'all' ? true : project.category === activeTab
  );

  // Handler for opening project details
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  
  // Handler for viewing individual items
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Close the modal
  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Showcasing a selection of my most notable projects across different domains.
          </p>
        </div>

        <PortfolioFilterTabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <PortfolioGrid 
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />

        {/* Project Detail Dialog */}
        <ProjectDetailDialog 
          selectedProject={selectedProject}
          onItemClick={handleItemClick}
          onClose={handleCloseProject}
        />
        
        {/* Item Detail Dialog */}
        <ItemDetailDialog 
          selectedItem={selectedItem}
          onClose={handleClose}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;

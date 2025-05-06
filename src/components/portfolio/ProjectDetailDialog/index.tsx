
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LeaderboardApp from './LeaderboardApp';
import VolunteeringApp from './VolunteeringApp';
import NetworkInfographic from './NetworkInfographic';
import GraphicDesignWorks from './GraphicDesignWorks';

interface ProjectDetailDialogProps {
  selectedProject: any;
  onItemClick: (item: any) => void;
  onClose: () => void;
}

const ProjectDetailDialog = ({ selectedProject, onItemClick, onClose }: ProjectDetailDialogProps) => {
  if (!selectedProject) return null;

  return (
    <Dialog open={!!selectedProject} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          <p className="text-gray-600 mb-6">{selectedProject.description}</p>
          
          {/* Project-specific components */}
          {selectedProject.id === 1 && (
            <LeaderboardApp project={selectedProject} onItemClick={onItemClick} />
          )}
          
          {selectedProject.id === 2 && (
            <VolunteeringApp project={selectedProject} onItemClick={onItemClick} />
          )}
          
          {selectedProject.id === 3 && (
            <NetworkInfographic project={selectedProject} onItemClick={onItemClick} />
          )}
          
          {selectedProject.id === 4 && (
            <GraphicDesignWorks project={selectedProject} onItemClick={onItemClick} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;

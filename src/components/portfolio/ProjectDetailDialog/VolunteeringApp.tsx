
import React from 'react';
import { Image } from 'lucide-react';
import ImageWithLoading from '../ImageWithLoading';

interface VolunteeringAppProps {
  project: any;
  onItemClick: (item: any) => void;
}

const VolunteeringApp = ({ project, onItemClick }: VolunteeringAppProps) => {
  return (
    <>
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {project.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.items.map((item: any) => (
          <div 
            key={item.id} 
            className="relative overflow-hidden rounded-md cursor-pointer group"
          >
            <div className="aspect-[3/6]">
              <ImageWithLoading 
                item={item}
                onClick={() => onItemClick(item)}
                className="h-full rounded-md"
                objectFit="contain"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity flex items-center justify-center">
              <Image className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VolunteeringApp;

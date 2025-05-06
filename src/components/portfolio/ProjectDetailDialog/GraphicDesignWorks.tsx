
import React from 'react';
import { Image } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImageWithLoading from '../ImageWithLoading';

interface GraphicDesignWorksProps {
  project: any;
  onItemClick: (item: any) => void;
}

const GraphicDesignWorks = ({ project, onItemClick }: GraphicDesignWorksProps) => {
  const renderImageGrid = (items: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item: any) => (
        <div 
          key={item.id} 
          className="relative overflow-hidden rounded-md cursor-pointer group"
        >
          <ImageWithLoading 
            item={item}
            onClick={() => onItemClick(item)}
            className="w-full rounded-md hover:scale-105 transition-transform duration-300"
            objectFit="contain"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity flex items-center justify-center">
            <Image className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-sm">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
  return (
    <div className="relative w-full">
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="logos">Logos</TabsTrigger>
          <TabsTrigger value="ads">Ads</TabsTrigger>
          <TabsTrigger value="infographics">Infographics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events" className="mt-4">
          {renderImageGrid(project.items.events)}
        </TabsContent>
        
        <TabsContent value="logos" className="mt-4">
          {renderImageGrid(project.items.logos)}
        </TabsContent>
        
        <TabsContent value="ads" className="mt-4">
          {renderImageGrid(project.items.ads)}
        </TabsContent>
        
        <TabsContent value="infographics" className="mt-4">
          {renderImageGrid(project.items.infographics)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GraphicDesignWorks;

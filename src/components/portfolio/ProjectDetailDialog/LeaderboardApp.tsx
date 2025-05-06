
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import ImageWithLoading from '../ImageWithLoading';

interface LeaderboardAppProps {
  project: any;
  onItemClick: (item: any) => void;
}

const LeaderboardApp = ({ project, onItemClick }: LeaderboardAppProps) => {
  // Function to determine if an image is portrait
  const isPortrait = (index: number) => {
    // Images 3 and 4 are portrait mode (indexes 3 and 4)
    return index === 3 || index === 4;
  };
  
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
      
      <div className="mb-6">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-accent-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Website
        </a>
      </div>
      
      <div className="relative w-full py-6">
        <Carousel className="w-full">
          <CarouselContent>
            {project.items.map((item: any, index: number) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-none">
                    <CardContent className="flex items-center justify-center p-2">
                      <div className="relative w-full h-full">
                        <ImageWithLoading 
                          item={item}
                          onClick={() => onItemClick(item)}
                          className="rounded-md cursor-pointer"
                          objectFit="contain"
                          aspectRatio={isPortrait(index) ? 3/4 : 16/9}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
                          <p>{item.caption}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-5" />
          <CarouselNext className="-right-5" />
        </Carousel>
      </div>
    </>
  );
};

export default LeaderboardApp;

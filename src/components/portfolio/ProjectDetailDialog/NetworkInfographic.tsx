
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import ImageWithLoading from '../ImageWithLoading';

interface NetworkInfographicProps {
  project: any;
  onItemClick: (item: any) => void;
}

const NetworkInfographic = ({ project, onItemClick }: NetworkInfographicProps) => {
  return (
    <div className="relative w-full py-6">
      <Carousel className="w-full">
        <CarouselContent>
          {project.items.map((item: any) => (
            <CarouselItem key={item.id}>
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="flex p-0">
                    <div className="relative w-full">
                      <div className="max-h-[70vh]">
                        <ImageWithLoading 
                          item={item}
                          onClick={() => onItemClick(item)}
                          className="w-full rounded-md cursor-pointer"
                          objectFit="contain"
                        />
                      </div>
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
  );
};

export default NetworkInfographic;

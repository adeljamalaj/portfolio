
import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageWithLoadingProps {
  item: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  aspectRatio?: number | null;
}

const ImageWithLoading = ({ 
  item, 
  onClick = () => {}, 
  className = "",
  objectFit = "cover",
  aspectRatio = null
}: ImageWithLoadingProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const imageContent = (
    <>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader className="w-8 h-8 text-accent-blue animate-spin" />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Image failed to load</span>
        </div>
      ) : (
        <img 
          src={item.src} 
          alt={item.alt} 
          className={`w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${onClick ? 'cursor-pointer' : ''}`}
          style={{ objectFit }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          onClick={onClick}
          loading="lazy"
        />
      )}
    </>
  );
  
  return aspectRatio ? (
    <AspectRatio ratio={aspectRatio} className={`relative ${className}`}>
      {imageContent}
    </AspectRatio>
  ) : (
    <div className={`relative ${className}`}>
      {imageContent}
    </div>
  );
};

export default ImageWithLoading;

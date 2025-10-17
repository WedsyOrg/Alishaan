'use client';

import Image from 'next/image';
import { StoryImage } from '../stories-data';

interface DesktopCarouselProps {
  stories: StoryImage[];
  currentIndex: number;
}

export default function DesktopCarousel({ 
  stories, 
  currentIndex 
}: DesktopCarouselProps) {
  // Fixed skeleton pattern: small-medium-large-medium-small
  // Images swap into these fixed positions based on currentIndex
  const getImageForPosition = (positionIndex: number, current: number) => {
    // Map fixed positions to actual image indices
    // Position indices: 0=small-left, 1=medium-left, 2=large-center, 3=medium-right, 4=small-right
    let imageIndex = current - 2 + positionIndex; // Center the current image at position 2
    
    // Handle wrapping for circular arrangement
    if (imageIndex < 0) imageIndex += stories.length;
    if (imageIndex >= stories.length) imageIndex -= stories.length;
    
    return imageIndex;
  };

  const getImagePosition = (positionIndex: number) => {
    // Fixed skeleton pattern based on position index
    switch (positionIndex) {
      case 0: return 'small-left';      // Fixed small position
      case 1: return 'medium-left';     // Fixed medium position
      case 2: return 'large-center';    // Fixed large position
      case 3: return 'medium-right';    // Fixed medium position
      case 4: return 'small-right';     // Fixed small position
      default: return 'hidden';
    }
  };

  const getImageSize = (position: string) => {
    switch (position) {
      case 'small-left':
      case 'small-right':
        return 'w-32 h-40'; // Small images - more square
      case 'medium-left':
      case 'medium-right':
        return 'w-48 h-56'; // Medium images
      case 'large-center':
        return 'w-64 h-80'; // Large image - more rectangular
      default:
        return 'w-32 h-40';
    }
  };

  const getImageOpacity = (position: string) => {
    return position === 'large-center' ? 'opacity-100' : 'opacity-70';
  };

  return (
    <div className="hidden lg:flex items-center justify-center gap-6 ">
      {/* Fixed skeleton positions - only image content changes */}
      <div className="relative w-52 h-60 rounded-xl overflow-hidden opacity-70">
        <div
          key={stories[getImageForPosition(0, currentIndex)].id}
          className="absolute inset-0 rounded-inherit overflow-hidden"
        >
          <Image
            src={stories[getImageForPosition(0, currentIndex)].mainImage}
            alt={`Wedding story ${stories[getImageForPosition(0, currentIndex)].id}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 0vw"
          />
        </div>
      </div>

      <div className="relative w-68 h-86 rounded-xl overflow-hidden opacity-70">
        <div
          key={stories[getImageForPosition(1, currentIndex)].id}
          className="absolute inset-0 rounded-inherit overflow-hidden"
        >
          <Image
            src={stories[getImageForPosition(1, currentIndex)].mainImage}
            alt={`Wedding story ${stories[getImageForPosition(1, currentIndex)].id}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 0vw"
          />
        </div>
      </div>

      <div className="relative w-84 h-120 rounded-xl overflow-hidden opacity-100">
        <div
          key={stories[getImageForPosition(2, currentIndex)].id}
          className="absolute inset-0 rounded-inherit overflow-hidden"
        >
          <Image
            src={stories[getImageForPosition(2, currentIndex)].mainImage}
            alt={`Wedding story ${stories[getImageForPosition(2, currentIndex)].id}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 0vw"
          />
        {/* Testimonial Overlay - Always on center position */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg leading-none">&quot;</span>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed flex-1">
                {stories[getImageForPosition(2, currentIndex)].testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative  w-68 h-86 rounded-xl overflow-hidden opacity-70">
        <div
          key={stories[getImageForPosition(3, currentIndex)].id}
          className="absolute inset-0 rounded-inherit overflow-hidden"
        >
          <Image
            src={stories[getImageForPosition(3, currentIndex)].mainImage}
            alt={`Wedding story ${stories[getImageForPosition(3, currentIndex)].id}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 0vw"
          />
        </div>
      </div>

      <div className="relative w-52 h-60 rounded-xl overflow-hidden opacity-70">
        <div
          key={stories[getImageForPosition(4, currentIndex)].id}
          className="absolute inset-0 rounded-inherit overflow-hidden"
        >
          <Image
            src={stories[getImageForPosition(4, currentIndex)].mainImage}
            alt={`Wedding story ${stories[getImageForPosition(4, currentIndex)].id}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 0vw"
          />
        </div>
      </div>
    </div>
  );
}

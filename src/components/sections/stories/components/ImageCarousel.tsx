'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { StoryImage } from '../stories-data';

interface ImageCarouselProps {
  stories: StoryImage[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function ImageCarousel({ 
  stories, 
  currentIndex, 
  onIndexChange 
}: ImageCarouselProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play: advance slides on an interval, looping infinitely
  useEffect(() => {
    const AUTOPLAY_INTERVAL_MS = 3000;

    const id = setInterval(() => {
      if (isTransitioning) return;
      // Respect document visibility to avoid advancing in background tabs
      if (typeof document !== 'undefined' && document.hidden) return;

      const nextIndex = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
      setIsTransitioning(true);
      onIndexChange(nextIndex);
      // Match manual transition timing
      const transitionDurationMs = 650;
      setTimeout(() => setIsTransitioning(false), transitionDurationMs);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(id);
  }, [currentIndex, stories.length, onIndexChange, isTransitioning]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    onIndexChange(newIndex);
    setTimeout(() => setIsTransitioning(false), 650);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIndex);
    setTimeout(() => setIsTransitioning(false), 650);
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="lg:hidden flex items-center justify-center gap-4 w-full max-w-sm mx-auto">
      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrevious}
        disabled={isTransitioning}
        className="flex-shrink-0 w-10 h-10  rounded-lg flex items-center justify-center hover:bg-[#44008a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous image"
      >
        <Image
          src="/assets/stories/icons/right.png"
          alt="Previous"
          width={30}
          height={40}
          className="w-7 h-7"
        />
      </button>

      {/* Main Image Container */}
      <div className="relative aspect-[3/5] rounded-2xl overflow-hidden flex-1">
        <div
          key={currentStory.id}
          className="absolute inset-0 rounded-inherit overflow-hidden"
        >
          <Image
            src={currentStory.mainImage}
            alt={`Wedding story ${currentStory.id}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Testimonial Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
            <div className="flex items-start gap-3">
              {/* Quotation Mark Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg leading-none">&quot;</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-sm leading-relaxed flex-1">
                {currentStory.testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="flex-shrink-0 w-10 h-10  rounded-lg flex items-center justify-center hover:bg-[#44008a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next image"
      >
        <Image
          src="/assets/stories/icons/left.png"
          alt="Next"
          width={20}
          height={20}
          className="w-7 h-7"
        />
      </button>
    </div>
  );
}
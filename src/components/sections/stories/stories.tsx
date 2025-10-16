'use client';

import { useState } from 'react';
import { ComponentProps } from 'react';
import ImageCarousel from './components/ImageCarousel';
import DesktopCarousel from './components/DesktopCarousel';
import GalleryView from './components/GalleryView';
import PaginationDots from './components/PaginationDots';
import Button from '../../ui/Button';
import { storiesData } from './stories-data';

interface StoriesSectionProps extends ComponentProps<'section'> {
  isVisible?: boolean;
}

export default function StoriesSection({ 
  isVisible = true,
  className = '',
  ...props 
}: StoriesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with third image (index 2) as shown in design

  if (!isVisible) return null;

  const handleImageSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className={`py-16 px-4 md:px-6 lg:px-8 ${className}`}
      {...props}
    >
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Left decorative line with key symbol */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-black"></div>
              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            
            {/* Main heading */}
            <h2 className="text-3xl font-normal text-black font-dream-avenue">
              Stories We&apos;ve Created Together
            </h2>
            
            {/* Right decorative line with flourish */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-black rounded-sm relative">
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-black rounded-full"></div>
              </div>
              <div className="w-12 h-px bg-black"></div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Image Carousel */}
        <div className="mb-6">
          <ImageCarousel 
            stories={storiesData}
            currentIndex={currentIndex}
            onIndexChange={setCurrentIndex}
          />
        </div>

        {/* Desktop Image Carousel */}
        <div className="mb-6">
          <DesktopCarousel 
            stories={storiesData}
            currentIndex={currentIndex}
          />
        </div>

        {/* Pagination Dots */}
        <div className="mb-6">
          <PaginationDots 
            totalSlides={storiesData.length}
            currentSlide={currentIndex}
            onDotClick={handleDotClick}
          />
        </div>

        {/* Gallery View - Hidden on desktop */}
        <div className="mb-8 lg:hidden">
          <GalleryView 
            stories={storiesData}
            currentIndex={currentIndex}
            onImageSelect={handleImageSelect}
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            text="LET'S CREATE YOUR STORY"
            bg="bg-[#840032]"
            textColor="text-white"
            hover="hover:bg-[#6b0029]"
            className="shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
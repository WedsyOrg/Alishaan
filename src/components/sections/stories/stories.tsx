'use client';

import { useState } from 'react';
import { ComponentProps } from 'react';
import ImageCarousel from './components/ImageCarousel';
import DesktopCarousel from './components/DesktopCarousel';
import GalleryView from './components/GalleryView';
import PaginationDots from './components/PaginationDots';
import Button from '../../ui/Button';
import { storiesData } from './stories-data';
import { motion } from 'framer-motion';

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
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-12 h-px bg-black"></div>
              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </motion.div>
            
            {/* Main heading */}
            <motion.h2 
              className="text-2xl lg:text-5xl font-light text-black font-dream-avenue"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              Stories We&apos;ve Created Together
            </motion.h2>
            
            {/* Right decorative line with flourish */}
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              <div className="w-4 h-4 bg-black rounded-sm relative">
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-black rounded-full"></div>
              </div>
              <div className="w-12 h-px bg-black"></div>
            </motion.div>
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
        <motion.div 
          className="flex justify-center font-cinzel"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <Button 
            text="LET'S CREATE YOUR STORY"
            bg="bg-[#840032]"
            textColor="text-white"
            hover="hover:bg-[#6b0029]"
            className="shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
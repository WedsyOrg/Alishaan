'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import HOW_IT_WORKS_CONSTANTS from '@/constants/howItWorks.json';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if container is in viewport
      if (rect.bottom < 0 || rect.top > windowHeight) return;
      
      // Simple scroll-based step calculation
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      const newStep = Math.floor(scrollProgress * HOW_IT_WORKS_CONSTANTS.steps.length);
      
      setActiveStep(Math.max(0, Math.min(newStep, HOW_IT_WORKS_CONSTANTS.steps.length - 1)));
    };

    // Set first step as active on mount
    setActiveStep(0);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
        {/* Title Section */}
        <div className="flex items-center justify-center mb-12 px-6">
          <div className="flex-1 h-px bg-gray-300 relative flex justify-end">
            <Image 
              src="/assets/left.svg" 
              alt="decoration" 
              width={73}
              height={5}
              className="absolute -translate-y-1/2"
            />
          </div>
          <h2 className="text-3xl text-center mx-6 text-gray-900" style={{ 
            fontFamily: 'Dream Avenue, Playfair Display, Georgia', 
            fontWeight: '400',
            letterSpacing: '0.02em',
            fontStyle: 'normal'
          }}>
            {HOW_IT_WORKS_CONSTANTS.title}
          </h2>
          <div className="flex-1 h-px bg-gray-300 relative flex justify-start">
            <Image 
              src="/assets/right.svg" 
              alt="decoration" 
              width={73}
              height={5}
              className="absolute -translate-y-1/2"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="w-full bg-[#F4F4F4] px-6 py-8">
          <div className="space-y-8">
            {HOW_IT_WORKS_CONSTANTS.steps.map((step, index) => {
              const isActive = index === activeStep;
              
              return (
                <motion.div 
                  key={step.id} 
                  className="flex items-start space-x-4"
                  animate={{ opacity: isActive ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      animate={{
                        backgroundColor: isActive ? '#7C2D12' : '#9CA3AF',
                        scale: isActive ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.id}
                    </motion.div>
                    {index < HOW_IT_WORKS_CONSTANTS.steps.length - 1 && (
                      <div className="w-px h-16 bg-gray-300 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <motion.h3 
                      className="text-black font-normal mb-2" 
                      style={{ fontFamily: 'Spartan' }}
                      animate={{
                        fontSize: isActive ? '1.5rem' : '1.25rem',
                        fontWeight: isActive ? '500' : '400'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <motion.div
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        height: isActive ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p 
                        className="text-black font-light text-sm" 
                        style={{ fontFamily: 'Montserrat' }}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import HOW_IT_WORKS_CONSTANTS from '@/constants/howItWorks.json';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('sm'); // Default to mobile
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  // Track current breakpoint
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) { // lg breakpoint
        setCurrentBreakpoint('lg');
      } else if (width >= 768) { // md breakpoint
        setCurrentBreakpoint('md');
      } else { // sm breakpoint
        setCurrentBreakpoint('sm');
      }
    };

    // Set initial breakpoint on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to get responsive font size
  const getFontSize = useCallback((isActive: boolean, breakpoint: string) => {
    if (isActive) {
      if (breakpoint === 'lg') return '3rem';
      if (breakpoint === 'md') return '2rem';
      return '1.6rem'; // 'sm' or default
    } else {
      if (breakpoint === 'lg') return '2.5rem';
      if (breakpoint === 'md') return '1.5rem';
      return '1.5rem'; // 'sm' or default
    }
  }, []);

  // Update active step based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if container is in viewport
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      // Calculate scroll progress through the section
      const sectionHeight = rect.height;
      const scrolledIntoView = -rect.top;
      const scrollProgress = Math.max(0, Math.min(1, scrolledIntoView / (sectionHeight - windowHeight / 2)));

      // Map scroll progress to steps (0-33% = step 0, 33-66% = step 1, 66-100% = step 2)
      const stepIndex = Math.floor(scrollProgress * HOW_IT_WORKS_CONSTANTS.steps.length);
      const newActiveStep = Math.max(0, Math.min(stepIndex, HOW_IT_WORKS_CONSTANTS.steps.length - 1));

      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={containerRef} className="bg-white scroll-smooth">
        {/* Title Section */}
        <motion.div 
          className="flex items-center justify-center mb-10 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="flex-1 relative flex justify-end">
            <Image 
              src="/assets/left.svg" 
              alt="decoration" 
              width={200}
              height={5}
              className="absolute -translate-y-1/2"
            />
          </div>
          <h1 className="text-[32px] leading-tight text-center mx-6 text-gray-900" style={{ 
            fontFamily: 'Dream Avenue, Playfair Display, Georgia', 
            fontWeight: '400',
            letterSpacing: '0.02em',
            fontStyle: 'normal'
          }}>
            {HOW_IT_WORKS_CONSTANTS.title}
          </h1>
          <div className="flex-1 relative flex justify-start">
            <Image 
              src="/assets/right.svg" 
              alt="decoration" 
              width={200}
              height={5}
              className="absolute -translate-y-1/2"
            />
          </div>
        </motion.div>

        {/* Single responsive flex layout: image on top (mobile), right (desktop) */}
        {(() => {
          const stepImages = [
            '/assets/how_it_works_1.png',
            '/assets/how_it_works_2.png'
          ];
          const imageSrc = stepImages[Math.min(activeStep, stepImages.length - 1)];

          return (
            <motion.div 
              className="lg:px-20 px-6 flex flex-col md:flex-row bg-[#F4F4F4]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {/* Image container: order first on mobile, right on desktop with sticky */}
              <div className="order-1 md:order-2 md:flex-1 lg:flex-none lg:w-[32%] overflow-hidden lg:mr-25">
                <div className="w-full rounded-2xl flex items-center justify-center md:sticky md:top-24 my-10 p-8 md:p-10 min-h-[500px]" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                  {activeStep === 2 ? (
                    // Form for step 3
                    <div className="w-full max-w-[320px] flex flex-col justify-center">
                      <div className="mb-6 text-center">
                        <h3 
                          className="text-lg md:text-xl font-normal text-[#3C2415] mb-6"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Please enter your details
                        </h3>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <div>
                          <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full bg-transparent border-b border-gray-300 py-2 text-[#3C2415] placeholder-gray-500 text-sm focus:border-gray-500 focus:outline-none transition-colors"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          />
                        </div>

                        {/* Phone Field */}
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full bg-transparent border-b border-gray-300 py-2 text-[#3C2415] placeholder-gray-500 text-sm focus:border-gray-500 focus:outline-none transition-colors"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full bg-[#7C2D12] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#5C2A0F] transition-colors mt-6 text-sm"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  ) : (
                    // Image for steps 1 and 2
                    <div className="relative w-full max-w-[320px] h-full flex items-center justify-center">
                      <div className="relative w-full aspect-[3/4]">
                        <Image
                          src={imageSrc}
                          alt="How it works visual"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Steps container: below image on mobile, left on desktop */}
              <div className="order-2 md:order-1 md:flex-1 lg:w-[52%] flex flex-col justify-center lg:pl-20">
                <div className="w-full  py-10 rounded-xl">
                  <div className="relative">
                    {/* Single continuous vertical line for entire timeline */}
                    <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-300" />   
                      <div className="space-y-8">
                      {HOW_IT_WORKS_CONSTANTS.steps.map((step, index) => {
                        const isActive = index === activeStep;
                        
                        return (
                          <motion.div 
                            key={step.id} 
                            className="flex items-center space-x-5 relative gap-3"
                            animate={{ opacity: isActive ? 1 : 0.7 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {/* Timeline Circle */}
                            <div className="flex items-center relative z-10">
                              <motion.div 
                                className="rounded-full flex items-center justify-center text-white font-bold border-4 border-gray-100"
                                animate={{
                                  backgroundColor: isActive ? '#7C2D12' : '#6c6f74',
                                  scale: isActive ? 1.05 : 1,
                                  borderColor: isActive ? '#7C2D12' : '#6c6f74'
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{ width: isActive ? 54 : 48, height: isActive ? 54 : 48 }}
                              >
                                {step.id}
                              </motion.div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <motion.h3 
                                className="text-black font-normal mb-2" 
                                style={{ fontFamily: 'Spartan' }}
                                animate={{
                                  fontSize: getFontSize(isActive, currentBreakpoint),
                                  fontWeight: isActive ? '500' : '400'
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                              >
                                {step.title}
                              </motion.h3>
                              
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ 
                                    opacity: 1,
                                    height: 'auto'
                                  }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.5, ease: "easeInOut" }}
                                  style={{ overflow: 'hidden' }}
                                >
                                  <p 
                                    className="text-gray-800 font-light text-sm md:text-base lg:text-xl whitespace-pre-line" 
                                    style={{ fontFamily: 'Montserrat' }}
                                  >
                                    {step.description}
                                  </p>
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
    </section>
  );
}

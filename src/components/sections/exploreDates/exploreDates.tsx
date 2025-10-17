'use client';

import { ComponentProps } from 'react';
import Button from '../../ui/Button';

interface ExploreDatesSectionProps extends ComponentProps<'section'> {
  isVisible?: boolean;
}

export default function ExploreDatesSection({ 
  isVisible = true,
  className = '',
  ...props 
}: ExploreDatesSectionProps) {
  if (!isVisible) return null;

  return (
    <section 
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
      {...props}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0  w-full h-full object-cover"
      >
        <source 
          src="/assets/exploreDates/Explore - Angana The Courtyard - Avani Leisure (1080p, h264) (1).MOV" 
          type="video/mp4" 
        />
      </video>
      {/* Dark overlay on top of video */}
<div className="absolute inset-0 bg-black/50"></div>


      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between pt-20 lg:pt-32 pb-8 lg:pb-12">
        {/* Top Section - Heading and Subheading */}
        <div className="flex flex-col items-center">
          {/* Decorative lines spanning full width - outside padded container */}
          <div className="absolute left-0 right-0 flex items-center justify-center mb-6" style={{top: '5rem'}}>
            {/* Left decorative line */}
            <div className="flex-1 h-0.5 bg-white min-w-0"></div>
            
            {/* Main heading with container */}
            <div className="flex-shrink-0 mx-4 lg:mx-8 max-w-[16rem] md:max-w-none">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-none text-center" style={{ fontFamily: 'var(--font-dream-avenue)' }}>
                Your perfect venue awaits
              </h2>
            </div>
            
            {/* Right decorative line */}
            <div className="flex-1 h-0.5 bg-white min-w-0"></div>
          </div>

          <div className="text-center w-full px-4 md:px-6 lg:px-8 mt-18 lg:mt-6">
            {/* Subheading */}
            <h3 className="text-2xl lg:text-5xl font-normal text-white font-dream-avenue leading-relaxed">
              Let&apos;s make it yours
            </h3>
          </div>
        </div>

        {/* Bottom Section - Button with consistent spacing */}
        <div className="flex justify-center w-full px-4 md:px-8 lg:px-8">
          <Button 
            text="EXPLORE DATES"
            bg="bg-white/60"
            textColor="text-gray-800"
            hover="hover:bg-white/90"
            showArrow={true}
            className="shadow-lg px-20"
            style={{ fontFamily: 'var(--font-cinzel)',fontWeight: '300' }}
          />
        </div>
      </div>
    </section>
  );
}
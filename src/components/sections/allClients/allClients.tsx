'use client';

import { ComponentProps } from 'react';
import Image from 'next/image';
import { allClientsData } from './all-clients-data';

interface AllClientsSectionProps extends ComponentProps<'section'> {
  isVisible?: boolean;
}

export default function AllClientsSection({ 
  isVisible = true,
  className = '',
  ...props 
}: AllClientsSectionProps) {
  if (!isVisible) return null;

  return (
    <section 
      className={`py-16  ${className}`}
      {...props}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-xl font-normal text-[#523329] font-spartan leading-none">
            Venues That Trust Our Craft
          </h2>
        </div>
      </div>

      {/* Continuous Carousel - Full Width */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll gap-8">
          {/* First set of images */}
          {allClientsData.map((client) => (
            <div
              key={`first-${client.id}`}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={128}
                height={128}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {allClientsData.map((client) => (
            <div
              key={`second-${client.id}`}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={128}
                height={128}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

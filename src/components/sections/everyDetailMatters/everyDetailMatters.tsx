'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import EVERY_DETAIL_MATTERS_CONSTANTS from '@/constants/everyDetailMatters.json';

export default function EveryDetailMatters() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Title with horizontal line */}
        <motion.div 
          className="flex items-center justify-center lg:justify-start mb-10 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl lg:mr-6 lg:md:mr-8 whitespace-nowrap"
            style={{ 
              fontFamily: 'Dream Avenue, Playfair Display, Georgia',
              color: '#332211',
              fontStyle: 'italic'
            }}
          >
            {EVERY_DETAIL_MATTERS_CONSTANTS.title}
          </h2>
          <div className="hidden lg:block h-[1.5px] bg-[#C9A961] flex-1" />
        </motion.div>

        {/* Main content with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Image Div */}
          <motion.div 
            className="order-1 lg:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* Golden framed image */}
            <div className="lg:rounded-[32px] bg-gradient-to-br from-[#D4A84F] to-[#B8932D] p-4 md:p-5 inline-block w-full">
              <div className="relative lg:rounded-[24px] overflow-hidden w-full aspect-[4/3]">
                <Image
                  src="/assets/desktop/matter.png"
                  alt="Wedding celebration"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Div */}
          <motion.div 
            className="order-2 lg:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h3 
              className="text-[26px] sm:text-[30px] lg:text-[34px] font-normal leading-tight mb-6 md:mb-8"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#5C4B3A'
              }}
            >
              {EVERY_DETAIL_MATTERS_CONSTANTS.mainTitle}
            </h3>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {EVERY_DETAIL_MATTERS_CONSTANTS.services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-[15px] sm:text-base lg:text-[17px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: false }}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#5C4B3A'
                  }}
                >
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#5C4B3A] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
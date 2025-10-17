'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import EVERY_DETAIL_MATTERS_CONSTANTS from '@/constants/everyDetailMatters.json';
import Button from '@/components/ui/Button';

export default function EveryDetailMatters() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" style={{ boxShadow: '0 -8px 16px -4px rgba(0, 0, 0, 0.15)' }}>
      {/* Container */}
      {/* Title with horizontal line */}
      <motion.div 
          className="flex items-center justify-center lg:justify-start mb-10 md:mb-14 lg:mb-16 lg:pl-[16%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 
            className="text-4xl lg:text-5xl lg:mr-6 lg:md:mr-8 whitespace-nowrap text-black"
            style={{ 
              fontFamily: 'var(--font-dream-avenue)',
            }}
          >
            {EVERY_DETAIL_MATTERS_CONSTANTS.title}
          </h2>
          <div className="w-full hidden lg:block h-[3px] bg-[#C9A961] flex-1" />
        </motion.div>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        

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
            <div className="lg:rounded-[32px] bg-gradient-to-br from-[#B47801] to-[#B47801] p-4 md:p-5 inline-block w-full">
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
              className="text-3xl lg:text-4xl font-normal leading-tight mb-6 md:mb-8 whitespace-pre-line text-center lg:text-left"
              style={{ 
                fontFamily: 'var(--font-spartan)',
                fontWeight: '300',
                color: '#523329'
              }}
            >
              {EVERY_DETAIL_MATTERS_CONSTANTS.mainTitle}
            </h3>
            
            <ul className=" mb-8 md:mb-10 lg:pl-8 pl-8">
              {EVERY_DETAIL_MATTERS_CONSTANTS.services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-xl lg:text-2xl whitespace-pre-line"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: false }}
                  style={{ 
                    fontFamily: 'var(--font-spartan)',
                    fontWeight: '300',
                    color: '#523329'
                  }}
                >
                  <span className="w-1 h-1 md:w-1 md:h-1 bg-[#5C4B3A] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="mt-6 text-center lg:text-right"
            >
              <Button 
                text={EVERY_DETAIL_MATTERS_CONSTANTS.button.text}
                bg="bg-[#B47801]"
                hover="hover:bg-[#ad7301]"
                className="px-6 py-3 text-sm font-semibold uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '300' }}
              />
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
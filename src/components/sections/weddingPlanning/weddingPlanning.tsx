'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WEDDING_PLANNING_CONSTANTS from '@/constants/weddingPlanning.json';

export default function WeddingPlanning() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Image Section - Mobile Top, Desktop Right */}
      <motion.div 
        className="lg:w-1/2 relative h-[328px] lg:h-screen lg:order-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/desktop/wedding_planning.png"
          alt="Wedding planning"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content Section - Mobile Bottom, Desktop Left */}
      <div 
        className="lg:w-1/2 px-8 lg:px-18 py-8 flex flex-col justify-center lg:order-1"
        style={{
          background: 'linear-gradient(135deg, #B8BBB0 0%, #C1C4BD 100%)'
        }}
      >
        <div className="max-w-lg mx-auto">
          {/* Title */}
          <motion.h2 
            className="text-4xl font-serif text-[#523329] text-center mb-12 leading-tight lg:text-left lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Dream Avenue, Playfair Display, Georgia' }}
          >
            {WEDDING_PLANNING_CONSTANTS.title.line1}
            <br />
            {WEDDING_PLANNING_CONSTANTS.title.line2}
          </motion.h2>

          {/* Features List */}
          <div className="relative mb-12">
            {/* Main Vertical Line */}
            <div className="absolute left-0 -top-4 bottom-0 flex flex-col items-center">
                <Image
                  src="/assets/wedding.svg"
                  alt="timeline start"
                  width={12}
                  height={8}
                  className="mb-2"
                />
            </div>
            
              {WEDDING_PLANNING_CONSTANTS.features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="relative flex items-start pl-16 mb-8 pt-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Horizontal Arrow extending from vertical line */}
                  <Image
                    src="/assets/wedding_right_arrow.svg"
                    alt="timeline arrow"
                    width={48}
                    height={20}
                    className="absolute left-2 top-7 lg:top-8"
                  />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-3xl font-serif text-[#523329] mb-2" style={{ fontFamily: 'Spartan' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#691A00] text-sm lg:text-xl leading-relaxed" style={{ fontFamily: 'Montserrat' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

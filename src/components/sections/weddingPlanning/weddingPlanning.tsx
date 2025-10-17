'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WEDDING_PLANNING_CONSTANTS from '@/constants/weddingPlanning.json';
import Button from '@/components/ui/Button';

export default function WeddingPlanning() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Image Section - Mobile Top, Desktop Right */}
      <motion.div 
        className="lg:w-1/2 relative h-[328px] lg:h-auto lg:order-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Image
          src="/assets/desktop/wedding_planning.png"
          alt="Wedding planning"
          fill
          className="object-cover"
          priority
        />

        {/* Button for Desktop - Below Image */}
        <div className="hidden lg:block absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Button 
              text="CONNECT WITH AN EXPERT"
              bg='bg-[#523329]'
              hover='hover:bg-[#442c24]'
              className="px-8 py-3 text-sm font-normal" style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '300' }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section - Mobile Bottom, Desktop Left */}
      <div 
        className="lg:w-1/2 px-8 lg:px-18 py-12 lg:py-18 flex flex-col justify-center lg:order-1"
        style={{
          background: 'linear-gradient(180deg, rgba(184, 187, 176, 1) 0%, rgba(255, 255, 255, 1) 100%)'
        }}
      >
        <div className="max-w-lg mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12 lg:text-left"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#523329] leading-tight"
              style={{ fontFamily: 'var(--font-dream-avenue)' }}
            >
              {WEDDING_PLANNING_CONSTANTS.title.line1}
            </motion.h2>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#523329] leading-tight"
              style={{ fontFamily: 'var(--font-dream-avenue)' }}
            >
              {WEDDING_PLANNING_CONSTANTS.title.line2}
            </motion.h2>
          </motion.div>

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
                  viewport={{ once: false }}
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
                    <h3 className="text-2xl lg:text-4xl font-light text-[#523329] mb-2" style={{ fontFamily: 'var(--font-spartan)', fontWeight: '300' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#691A00] text-sm lg:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Button for Mobile - Below Content */}
          <div className="lg:hidden text-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <Button 
                text="CONNECT WITH AN EXPERT"
                bg='bg-[#523329]'
                hover='hover:bg-[#442c24]'
                className="px-8 py-3 text-sm font-normal"
                style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '300' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

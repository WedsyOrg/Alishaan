'use client';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Homepage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <Image
          src="/assets/homepage/homepage.png"
          alt="Alishaan Luxury Weddings"
          fill
          className="object-cover md:hidden"
          priority
        />
        {/* Desktop Background */}
        <Image
          src="/assets/homepage/home.png"
          alt="Alishaan Luxury Weddings"
          fill
          className="object-cover hidden md:block"
          priority
        />
        {/* Black to transparent gradient overlay (top to bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
      </div>
    
    
      {/* Content Container */}
      <div className="relative z-10 w-full px-4 py-5 text-left md:text-left">
        {/* Brand Section */}
        <div className='md:flex justify-between items-start gap-6 max-w-7xl mx-auto'>

      
        <motion.div 
          className="flex flex-col mb-2"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="text-4xl md:text-4xl lg:text-4xl font-light text-white mb-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            ALISHAAN
          </motion.h1>
          <motion.h2 
            className="text-lg md:text-xl lg:text-xl font-extralight text-white"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            LUXURY WEDDINGS
          </motion.h2>
        </motion.div>

        {/* Line Breaker - Mobile */}
        <div className="w-[60%] md:hidden h-0.5 bg-white mb-8" />
       

        {/* Tagline */}
        <motion.div 
          className="mb-8 md:ml-auto md:max-w-[45%] md:text-right"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <motion.p 
            className="text-5xl md:text-6xl lg:text-6xl text-white leading-tight md:text-right"
            style={{ fontFamily: 'var(--font-dream-avenue)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            Celebrations that speak without words
          </motion.p>
        </motion.div>

        </div>

        {/* By WEDSY */}
        <div className="mb-8">
          <h2 className="text-sm md:hidden text-white opacity-90 font-montserrat">
            By WEDSY
          </h2>
        </div>
        <div className="mt-90">
        {/* CTA Button */}
        <motion.div 
          className="mb-6 flex items-center justify-center md:justify-center"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <Button
            text="GET FREE CONSULTATION"
            bg="bg-white/90"
            textColor="text-gray-800"
            hover="hover:bg-white hover:scale-105"
            className="shadow-lg backdrop-blur-sm  md:w-[25%]"
            style={{ fontFamily: 'var(--font-cinzel)',fontWeight: '300' }}
          />
        </motion.div>

        {/* Line Breaker */}
        <motion.div 
          className="w-full md:w-[90%] h-0.5 bg-white mb-8 md:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        />

        {/* Statistics Section */}
        <motion.div 
          className="flex flex-row justify-between items-center mb-0 text-white md:justify-between md:max-w-[70%] md:mx-auto md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.15, delayChildren: 1.2 }}
        >
          <motion.div 
            className="flex flex-col items-center"
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-2xl md:text-3xl font-bold mb-1 font-poiret-one">
              12 years +
            </div>
            <div className="text-md md:text-sm opacity-90 font-montserrat">
              Experience
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-2xl md:text-3xl font-bold mb-1 font-poiret-one">
              4.9/5
            </div>
            <div className="text-md md:text-sm opacity-90 font-montserrat">
              Google
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center"
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-2xl md:text-3xl font-bold mb-1 font-poiret-one">
              1250+
            </div>
            <div className="text-md md:text-sm opacity-90 font-montserrat">
              Weddings
            </div>
          </motion.div>
        </motion.div>
        </div>
    </div>
    </section>
  );
}
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import EXPLORE_DATES_CONSTANTS from '@/constants/exploreDates.json';
import Button from '@/components/ui/Button';

export default function WeddingRequirement() {
  const [selectedBudget, setSelectedBudget] = useState('5-10');
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, budget: selectedBudget });
  };

  return (
    <section className="relative min-h-screen bg-[#3C2415]">
      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Section - Image (2/3 width) */}
        <div className="w-2/3 relative">
          <Image
            src="/assets/desktop/luxury_wedding.png"
            alt="Wedding couple"
            fill
            className="object-cover"
            priority
          />
          {/* Black transparent overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Branding Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-12">
            {/* Top Branding - ALISHAAN */}
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <motion.div 
                className="flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <Image 
                    src="/assets/white-left.svg" 
                    alt="decoration" 
                    width={123}
                    height={5}
                    className="mr-4"
                  />
                </motion.div>
                <motion.h1 
                  className="text-6xl font-serif text-white mx-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '300' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  {EXPLORE_DATES_CONSTANTS.branding.mainName}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <Image 
                    src="/assets/white-right.svg" 
                    alt="decoration" 
                    width={123}
                    height={5}
                    className="ml-4"
                  />
                </motion.div>
              </motion.div>
              <motion.h2 
                className="text-white text-lg font-medium"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '100' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: false }}
              >
                {EXPLORE_DATES_CONSTANTS.branding.subtitle}
              </motion.h2>
            </motion.div>
            
            {/* Bottom Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              viewport={{ once: false }}
            >
              <p 
                className="text-white text-2xl text-center"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '300' }}
              >
                {EXPLORE_DATES_CONSTANTS.branding.tagline}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Form Panel (1/3 width) */}
        <motion.div 
          className="w-2/3 bg-[#523329] flex items-center justify-center p-8 px-25"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="w-full max-w-3xl border border-[#523329] p-16 bg-white/75 rounded-4xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: false }}
          >
          {/* Form Header */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p 
              className="text-[#523329] text-2xl mb-2"
              style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
            >
              {EXPLORE_DATES_CONSTANTS.form.title}
            </p>
            <h3 
              className="text-2xl font-bold text-[#3C2415]"
              style={{ fontFamily: 'var(--font-spartan)', fontWeight: '400' }}
            >
              {EXPLORE_DATES_CONSTANTS.form.subtitle}
            </h3>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#523329] py-3 text-[#523329] placeholder-[#523329] focus:border-[#523329] focus:outline-none transition-all duration-300 hover:border-[#523329]"
                style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
              />
            </motion.div>

            {/* Date Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <input
                type="text"
                placeholder="When is your special day ?"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#523329] py-3 text-[#523329] placeholder-[#523329] focus:border-[#523329] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
              />
            </motion.div>

            {/* Budget Selection */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
              viewport={{ once: false }}
            >
              <p 
                className="text-[#000000] text-lg lg:text-xl mb-3"
                style={{ fontFamily: 'var(--font-spartan)', fontWeight: '500' }}
              >
                {EXPLORE_DATES_CONSTANTS.form.budget.label}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {EXPLORE_DATES_CONSTANTS.form.budget.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedBudget(option.value)}
                    className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                      selectedBudget === option.value
                        ? 'bg-[#523329] text-white shadow-lg'
                        : 'bg-white text-[#523329] hover:bg-gray-50 hover:shadow-md'
                    }`}
                    style={{ fontFamily: 'var(--font-spartan)', fontWeight: '300' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeOut", 
                    }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#523329] py-3 text-[#523329] placeholder-[#523329] focus:border-[#523329] focus:outline-none transition-all duration-300 hover:border-[#523329]"
                style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="mt-8 text-left"
            >
              <Button 
                text={EXPLORE_DATES_CONSTANTS.form.button.text}
                bg="bg-[#840032]"
                hover="hover:bg-[#70022c]"
                className="px-6 py-4 text-sm font-bold uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '300' }}
              />
            </motion.div>
          </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Layout - Form Over Image */}
      <div className="lg:hidden relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/desktop/luxury_wedding.png"
            alt="Wedding couple"
            fill
            className="object-cover"
            priority
          />
          {/* Black transparent overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Top Branding */}
          <motion.div 
            className="pt-8 pb-4 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="flex items-center justify-center mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
              >
                <Image 
                  src="/assets/white-left.svg" 
                  alt="decoration" 
                  width={103}
                  height={3}
                  className="mr-2"
                />
              </motion.div>
              <motion.h1 
                className="text-4xl font-serif text-white mx-2"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '300' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: false }}
              >
                {EXPLORE_DATES_CONSTANTS.branding.mainName}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
              >
                <Image 
                  src="/assets/white-right.svg" 
                  alt="decoration" 
                  width={103}
                  height={3}
                  className="ml-2"
                />
              </motion.div>
            </motion.div>
            <motion.h2 
              className="text-white text-sm text-center"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '100' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: false }}
            >
              {EXPLORE_DATES_CONSTANTS.branding.subtitle}
            </motion.h2>
          </motion.div>

          {/* Form Card - Centered */}
          <motion.div 
            className="flex-1 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="w-full max-w-sm bg-white/70 rounded-2xl px-4 min-h-[600px] flex flex-col justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: false }}
            >
              {/* Form Header */}
              <motion.div 
                className="mb-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: false }}
              >
                <p 
                  className="text-[#523329] text-2xl mb-1"
                  style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
                >
                  {EXPLORE_DATES_CONSTANTS.form.title}
                </p>
                <h3 
                  className="text-2xl text-[#523329]"
                  style={{ fontFamily: 'var(--font-spartan)', fontWeight: '500' }}
                >
                  {EXPLORE_DATES_CONSTANTS.form.subtitle}
                </h3>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-8 px-4">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#000000] py-2 text-[#000000] placeholder-[#000000] text-lg text-center focus:border-[#000000] focus:outline-none transition-all duration-300 hover:border-[#000000]"
                    style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
                  />
                </motion.div>

                {/* Date Field */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="text"
                    placeholder="When is your special day ?"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#000000] py-2 text-[#000000] placeholder-[#000000] text-lg text-center focus:border-[#000000] focus:outline-none transition-all duration-300 hover:border-[#000000]"
                    style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
                  />
                </motion.div>

                {/* Budget Selection */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
                  viewport={{ once: false }}
                >
                  <p 
                    className="text-[#000000] text-xl mb-2 text-center whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-spartan)', fontWeight: '500' }}
                  >
                    {EXPLORE_DATES_CONSTANTS.form.budget.label}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {EXPLORE_DATES_CONSTANTS.form.budget.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedBudget(option.value)}
                        className={`p-2 rounded-lg text-center transition-all duration-300 text-sm hover:scale-105 ${
                          selectedBudget === option.value
                            ? 'bg-[#523329] text-white shadow-lg'
                            : 'bg-white text-[#523329] hover:bg-gray-50 hover:shadow-md'
                        }`}
                        style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          ease: "easeOut", 
                        }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#000000] py-2 text-[#000000] placeholder-[#000000] text-lg text-center focus:border-[#000000] focus:outline-none transition-all duration-300 hover:border-[#000000]"
                    style={{ fontFamily: 'var(--font-spartan)', fontWeight: '350' }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="mt-8 text-center"
            >
              <Button 
                text={EXPLORE_DATES_CONSTANTS.form.button.text}
                bg="bg-[#840032]"
                hover="hover:bg-[#70022c]"
                className="px-6 py-4 text-xl font-bold uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-cinzel)', fontWeight: '300' }}
              />
            </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
    </div>
    </section>
  );
}
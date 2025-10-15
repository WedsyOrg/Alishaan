'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import EXPLORE_DATES_CONSTANTS from '@/constants/exploreDates.json';

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
                    src="/assets/left.svg" 
                    alt="decoration" 
                    width={73}
                    height={5}
                    className="mr-4"
                  />
                </motion.div>
                <motion.h1 
                  className="text-6xl font-serif text-white mx-4"
                  style={{ fontFamily: 'Dream Avenue, Playfair Display, Georgia' }}
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
                    src="/assets/right.svg" 
                    alt="decoration" 
                    width={73}
                    height={5}
                    className="ml-4"
                  />
                </motion.div>
              </motion.div>
              <motion.h2 
                className="text-white text-lg font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {EXPLORE_DATES_CONSTANTS.branding.tagline}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Section - Form Panel (1/3 width) */}
        <motion.div 
          className="w-2/3 bg-[#523329] flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="w-full max-w-3xl border border-[#8B4513] p-16 bg-white/75 rounded-4xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: false }}
          >
          {/* Form Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: false }}
          >
            <p 
              className="text-[#8B4513] text-sm mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {EXPLORE_DATES_CONSTANTS.form.title}
            </p>
            <h3 
              className="text-2xl font-bold text-[#3C2415]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {EXPLORE_DATES_CONSTANTS.form.subtitle}
            </h3>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
              viewport={{ once: false }}
            >
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#8B4513] py-3 text-[#3C2415] placeholder-[#8B4513] focus:border-[#5C2A0F] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
            </motion.div>

            {/* Date Field */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
              viewport={{ once: false }}
            >
              <input
                type="text"
                placeholder="When is your special day ?"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#8B4513] py-3 text-[#3C2415] placeholder-[#8B4513] focus:border-[#5C2A0F] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                className="text-[#8B4513] text-sm mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {EXPLORE_DATES_CONSTANTS.form.budget.label}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {EXPLORE_DATES_CONSTANTS.form.budget.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedBudget(option.value)}
                    className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                      selectedBudget === option.value
                        ? 'bg-[#8B4513] text-white shadow-lg'
                        : 'bg-white text-[#3C2415] hover:bg-gray-50 hover:shadow-md'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeOut", 
                      delay: 1.5 + (index * 0.1) 
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
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.8 }}
              viewport={{ once: false }}
            >
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#8B4513] py-3 text-[#3C2415] placeholder-[#8B4513] focus:border-[#5C2A0F] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-[#5C2A0F] transition-all duration-300 mt-8 hover:shadow-lg hover:scale-105"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {EXPLORE_DATES_CONSTANTS.form.button.text}
            </motion.button>
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
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Top Branding */}
          <motion.div 
            className="pt-6 pb-4 px-4"
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
                  src="/assets/left.svg" 
                  alt="decoration" 
                  width={40}
                  height={3}
                  className="mr-2"
                />
              </motion.div>
              <motion.h1 
                className="text-3xl sm:text-4xl font-serif text-white mx-2"
                style={{ fontFamily: 'Dream Avenue, Playfair Display, Georgia' }}
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
                  src="/assets/right.svg" 
                  alt="decoration" 
                  width={40}
                  height={3}
                  className="ml-2"
                />
              </motion.div>
            </motion.div>
            <motion.h2 
              className="text-white text-sm text-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
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
            className="flex-1 flex items-center justify-center px-4 py-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false }}
          >
            <motion.div 
              className="w-full max-w-sm bg-white/70 rounded-2xl p-8 sm:p-10 min-h-[600px] flex flex-col justify-center"
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
                  className="text-[#8B4513] text-xs mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {EXPLORE_DATES_CONSTANTS.form.title}
                </p>
                <h3 
                  className="text-lg font-bold text-[#3C2415]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {EXPLORE_DATES_CONSTANTS.form.subtitle}
                </h3>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full bg-transparent border-b-2 border-[#8B4513] py-2 text-[#3C2415] placeholder-[#8B4513] text-sm focus:border-[#5C2A0F] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                    className="w-full bg-transparent border-b-2 border-[#8B4513] py-2 text-[#3C2415] placeholder-[#8B4513] text-sm focus:border-[#5C2A0F] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                    className="text-[#8B4513] text-xs mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {EXPLORE_DATES_CONSTANTS.form.budget.label}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {EXPLORE_DATES_CONSTANTS.form.budget.options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedBudget(option.value)}
                        className={`p-2 rounded-lg text-center transition-all duration-300 text-xs hover:scale-105 ${
                          selectedBudget === option.value
                            ? 'bg-[#8B4513] text-white shadow-lg'
                            : 'bg-white text-[#3C2415] hover:bg-gray-50 hover:shadow-md'
                        }`}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          ease: "easeOut", 
                          delay: 1.6 + (index * 0.1) 
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
                  transition={{ duration: 0.5, ease: "easeOut", delay: 1.9 }}
                  viewport={{ once: false }}
                >
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-[#8B4513] py-2 text-[#3C2415] placeholder-[#8B4513] text-sm focus:border-[#5C2A0F] focus:outline-none transition-all duration-300 hover:border-[#6B3A1A]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#8B4513] text-white py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-[#5C2A0F] transition-all duration-300 mt-6 text-sm hover:shadow-lg hover:scale-105"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 2.1 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {EXPLORE_DATES_CONSTANTS.form.button.text}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Bottom Tagline */}
          <motion.div 
            className="pb-6 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.3 }}
            viewport={{ once: false }}
          >
            <p 
              className="text-white text-base sm:text-lg text-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {EXPLORE_DATES_CONSTANTS.branding.tagline}
            </p>
          </motion.div>
        </div>
    </div>
    </section>
  );
}
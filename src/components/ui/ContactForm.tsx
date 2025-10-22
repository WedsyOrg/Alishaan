'use client';
import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  submitText?: string;
  onSubmitSuccess?: () => void;
}

export default function ContactForm({ 
  isOpen, 
  onClose, 
  title = "Please enter your details",
  subtitle,
  submitText = "Submit",
  onSubmitSuccess
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8090/contact-form/', {
        name: formData.name,
        phone: formData.phone,
        email: '', // Default empty email
        budget: 0, // Default budget
        guestCount: 0, // Default guest count
        eventDate: '', // Default empty date
        venue: '', // Default empty venue
        additionalInfo: '' // Default empty additional info
      });

      console.log('Form submitted successfully:', response.data);
      
      // Reset form
      setFormData({ name: '', phone: '' });
      
      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      } else {
        // Default behavior - close the form
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-spartan)' }}
              >
                ✕
              </button>

              {/* Form Content */}
              <div className="w-full flex flex-col justify-center">
                <div className="mb-6 text-center">
                  <h3 
                    className="text-lg md:text-xl font-normal text-[#3C2415] mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {title}
                  </h3>
                  {subtitle && (
                    <p 
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'var(--font-spartan)' }}
                    >
                      {subtitle}
                    </p>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-[#3C2415] placeholder-gray-500 text-sm focus:border-gray-500 focus:outline-none transition-colors text-center"
                      style={{ fontFamily: 'var(--font-spartan)' }}
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-transparent border-b border-gray-300 py-2 text-[#3C2415] placeholder-gray-500 text-sm focus:border-gray-500 focus:outline-none transition-colors text-center"
                      style={{ fontFamily: 'var(--font-spartan)' }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#840032] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#820032] transition-colors mt-6 text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {isSubmitting ? 'Submitting...' : submitText}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

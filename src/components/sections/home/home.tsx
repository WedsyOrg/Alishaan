"use client";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Counter component for rolling number animation
function Counter({
  end,
  duration = 2,
  decimals = 0,
  suffix = "",
}: {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { once: false, amount: 0.1 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isInView) {
      setCount(0);

      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);

        // Linear progression - uniform speed
        const currentCount = startValue + (end - startValue) * progress;
        setCount(currentCount);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Cancel animation and reset when out of view
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setCount(0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={counterRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Homepage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    // You can add additional success handling here
    alert("Thank you! We will contact you soon.");
  };

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
        <div className="md:flex justify-between items-start gap-6 max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col mb-2"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="text-4xl md:text-4xl lg:text-4xl font-light text-white mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              ALISHAAN
            </motion.h1>
            <motion.h2
              className="text-lg md:text-xl lg:text-xl font-extralight text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
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
              style={{ fontFamily: "var(--font-dream-avenue)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
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
              className="shadow-lg backdrop-blur-sm md:w-[33%] lg:w-[25%]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: "300" }}
              onClick={() => setIsFormOpen(true)}
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
          <div className="flex flex-row justify-between items-center mb-0 text-white md:justify-between md:max-w-[70%] md:mx-auto md:gap-8">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 font-poiret-one">
                <Counter end={12} duration={2} decimals={0} suffix=" years +" />
              </div>
              <div className="text-md md:text-lg lg:text-2xl opacity-90 font-montserrat">
                Experience
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
            >
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 font-poiret-one">
                <Counter end={4.9} duration={2} decimals={1} suffix="/5" />
              </div>
              <div className="text-md md:text-lg lg:text-2xl opacity-90 font-montserrat">
                Google
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8,
              }}
            >
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 font-poiret-one">
                <Counter end={1250} duration={2.5} decimals={0} suffix="+" />
              </div>
              <div className="text-md md:text-lg lg:text-2xl opacity-90 font-montserrat">
                Weddings
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Popup */}
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Get Free Consultation"
        subtitle="Fill in your details and we'll get back to you"
        submitText="Get Consultation"
        onSubmitSuccess={handleFormSuccess}
        formType="get free consultation"
      />
    </section>
  );
}

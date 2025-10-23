"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import axios from "axios";
import HOW_IT_WORKS_CONSTANTS from "@/constants/howItWorks.json";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("sm");
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  // Track current breakpoint
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // lg breakpoint
        setCurrentBreakpoint("lg");
      } else if (width >= 768) {
        // md breakpoint
        setCurrentBreakpoint("md");
      } else {
        // sm breakpoint
        setCurrentBreakpoint("sm");
      }
    };

    // Set initial breakpoint on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to get responsive font size
  const getFontSize = useCallback((isActive: boolean, breakpoint: string) => {
    if (isActive) {
      if (breakpoint === "lg") return "3rem";
      if (breakpoint === "md") return "2rem";
      return "1.6rem"; // 'sm' or default
    } else {
      if (breakpoint === "lg") return "2.5rem";
      if (breakpoint === "md") return "1.5rem";
      return "1.5rem"; // 'sm' or default
    }
  }, []);

  // Handle sticky scroll behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current || !isSticky || scrollLocked) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isScrollingDown = e.deltaY > 0;

      // Only handle wheel events when section is sticky
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();
        setScrollLocked(true);

        if (isScrollingDown) {
          // Scrolling down: 0 -> 1 -> 2 -> unlock
          if (activeStep < 2) {
            setActiveStep((prev) => prev + 1);
          } else {
            // On step 2, unlock and allow scroll to next section
            setIsSticky(false);
            setActiveStep(0);
            window.scrollBy({ top: 100, behavior: "smooth" });
          }
        } else {
          // Scrolling up: 2 -> 1 -> 0 -> unlock
          if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
          } else {
            // On step 0, unlock and allow scroll to previous section
            setIsSticky(false);
            setActiveStep(0);
            window.scrollBy({ top: -100, behavior: "smooth" });
          }
        }

        // Unlock after animation
        setTimeout(() => setScrollLocked(false), 1200);
      }
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // Activate sticky when section reaches top
      if (rect.top <= 0 && rect.bottom >= window.innerHeight && !isSticky) {
        setIsSticky(true);
        setActiveStep(0);
      }

      // Deactivate sticky when scrolling away
      if ((rect.bottom < window.innerHeight || rect.top > 0) && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeStep, isSticky, scrollLocked]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiData = {
        name: formData.name,
        phonenumber: formData.phone,
        email: "not-provided@example.com", // Default email since not collected
        budget: 500000, // Default budget
        date: new Date().toISOString().split("T")[0], // Today's date
      };

      const response = await axios.post(
        "http://localhost:8090/contact-form/",
        apiData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Form submitted successfully:", response.data);
        alert("Thank you! We will contact you soon.");
        // Reset form
        setFormData({ name: "", phone: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="bg-white relative"
      style={{
        minHeight: isSticky ? "300vh" : "auto",
      }}
    >
      <div
        className={`${isSticky ? "fixed top-0 left-0 right-0 z-10 bg-white" : "relative"}`}
      >
        {/* Title Section */}
        <div className="flex items-center justify-center mb-10 px-6 pt-12">
          {/* Debug indicator */}
          {isSticky && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs">
              Step: {activeStep + 1}/3
            </div>
          )}
          <motion.div
            className="flex-1 relative flex justify-end"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Image
              src="/assets/left.svg"
              alt="decoration"
              width={200}
              height={5}
              className="absolute -translate-y-1/2"
            />
          </motion.div>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-6xl leading-tight text-center mx-6 text-gray-900"
            style={{
              fontFamily: "var(--font-dream-avenue)",
              fontWeight: "400",
              letterSpacing: "0.02em",
              fontStyle: "normal",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {HOW_IT_WORKS_CONSTANTS.title}
          </motion.h1>
          <motion.div
            className="flex-1 relative flex justify-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Image
              src="/assets/right.svg"
              alt="decoration"
              width={200}
              height={5}
              className="absolute -translate-y-1/2"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="lg:px-20 px-6 flex flex-col md:flex-row bg-[#F4F4F4] pb-12">
          {/* Image container */}
          <div className="order-1 md:order-2 md:flex-1 lg:flex-none lg:w-[32%] overflow-hidden lg:mr-25">
            <div
              className="w-full rounded-2xl flex items-center justify-center my-6 md:my-10 p-4 md:p-8 lg:p-10 min-h-[300px] md:min-h-[500px]"
              style={{
                boxShadow:
                  currentBreakpoint === "sm"
                    ? "none"
                    : "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              {activeStep === 2 ? (
                // Form for step 3
                <div className="w-full max-w-[320px] flex flex-col justify-center">
                  <div className="mb-6 text-center">
                    <h3
                      className="text-lg md:text-xl font-normal text-[#3C2415] mb-6"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Please enter your details
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-300 py-2 text-[#3C2415] placeholder-gray-500 text-sm focus:border-gray-500 focus:outline-none transition-colors text-center"
                        style={{ fontFamily: "var(--font-spartan)" }}
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full bg-transparent border-b border-gray-300 py-2 text-[#3C2415] placeholder-gray-500 text-sm focus:border-gray-500 focus:outline-none transition-colors text-center"
                        style={{ fontFamily: "var(--font-spartan)" }}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#840032] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#820032] transition-colors mt-6 text-sm pointer-cursor disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </div>
              ) : (
                // Image for steps 1 and 2
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-[200px] md:max-w-[320px] h-full flex items-center justify-center"
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={
                        activeStep === 0
                          ? "/assets/how_it_works_2.png"
                          : "/assets/how_it_works_1.png"
                      }
                      alt="How it works visual"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 200px, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Steps container */}
          <div className="order-2 md:order-1 md:flex-1 lg:w-[52%] flex flex-col justify-center lg:pl-20">
            <div className="w-full py-10 rounded-xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-300" />
                <div className="space-y-8">
                  {HOW_IT_WORKS_CONSTANTS.steps.map((step, index) => {
                    const isActive = index === activeStep;

                    return (
                      <motion.div
                        key={step.id}
                        className="flex items-center space-x-5 relative gap-3"
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {/* Timeline Circle */}
                        <div className="flex items-center relative z-10">
                          <motion.div
                            className="rounded-full flex items-center justify-center text-white font-bold border-4 border-gray-100"
                            animate={{
                              backgroundColor: isActive ? "#7C2D12" : "#6c6f74",
                              scale: isActive ? 1.05 : 1,
                              borderColor: isActive ? "#7C2D12" : "#6c6f74",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                              width: isActive ? 54 : 48,
                              height: isActive ? 54 : 48,
                            }}
                          >
                            {step.id}
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <motion.h3
                            className="text-black font-normal mb-2"
                            style={{
                              fontFamily: "var(--font-spartan)",
                              fontSize: getFontSize(
                                isActive,
                                currentBreakpoint
                              ),
                              fontWeight: isActive ? 400 : 300,
                            }}
                            animate={{
                              fontSize: getFontSize(
                                isActive,
                                currentBreakpoint
                              ),
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {step.title}
                          </motion.h3>

                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              style={{ overflow: "hidden" }}
                            >
                              <p
                                className="text-gray-800 font-light text-sm md:text-base lg:text-xl whitespace-pre-line"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                              >
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

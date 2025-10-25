"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StoryImage } from "../stories-data";
import { getImageUrl } from "@/utils/imageUtils";
interface DesktopCarouselProps {
  stories: StoryImage[];
  currentIndex: number;
}

export default function DesktopCarousel({
  stories,
}: DesktopCarouselProps) {
  const [offset, setOffset] = useState(0);

  // Continuously increment offset for infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % stories.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  // Get image index for each container position with continuous offset
  const getImageIndex = (position: number) => {
    return (offset + position) % stories.length;
  };

  // FIXED container configurations
  const containers = [
    { width: "w-52", height: "h-60", opacity: "opacity-70", position: 0 }, // small left
    { width: "w-68", height: "h-86", opacity: "opacity-70", position: 1 }, // medium left
    { width: "w-84", height: "h-120", opacity: "opacity-100", position: 2 }, // large center
    { width: "w-68", height: "h-86", opacity: "opacity-70", position: 3 }, // medium right
    { width: "w-52", height: "h-60", opacity: "opacity-70", position: 4 }, // small right
  ];

  return (
    <div className="hidden lg:flex items-center justify-center gap-6">
      {/* 5 FIXED containers - images flow through them */}
      {containers.map((container, idx) => {
        const imageIndex = getImageIndex(container.position);
        const story = stories[imageIndex];
        const isCenter = idx === 2;

        return (
          <div
            key={`container-${idx}`}
            className={`relative ${container.width} ${container.height} rounded-xl overflow-hidden ${container.opacity}`}
          >
            {/* Images slide through continuously with smooth overlap */}
            <AnimatePresence initial={false}>
              <motion.div
                key={`image-${story.id}-${offset}`}
                className="absolute inset-0"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{
                  x: {
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier
                  },
                  opacity: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src={getImageUrl(story.mainImage)}
                  alt={`Wedding story ${story.id}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 0vw"
                />

                {/* Testimonial Overlay - only on center container */}
                {isCenter && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-lg leading-none">
                            &quot;
                          </span>
                        </div>
                      </div>
                      <p className="text-white text-sm leading-relaxed flex-1">
                        {story.testimonial}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

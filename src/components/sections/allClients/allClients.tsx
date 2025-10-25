"use client";

import { ComponentProps } from "react";
import Image from "next/image";
import { allClientsData } from "./all-clients-data";
import { getImageUrl } from "@/utils/imageUtils";

interface AllClientsSectionProps extends ComponentProps<"section"> {
  isVisible?: boolean;
}

export default function AllClientsSection({
  isVisible = true,
  className = "",
  ...props
}: AllClientsSectionProps) {
  if (!isVisible) return null;

  return (
    <section className={`py-8 md:py-16 ${className}`} {...props}>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-6 md:mb-12">
        <div className="text-center">
          <h2 className="text-xl font-normal text-[#523329] font-spartan leading-none">
            Venues That Trust Our Craft
          </h2>
        </div>
      </div>

      {/* Continuous Carousel - Full Width */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll gap-16 md:gap-40">
          {/* First set of images */}
          {allClientsData.map((client) => (
            <div
              key={`first-${client.id}`}
              className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center"
            >
              <Image
                src={getImageUrl(client.image)}
                alt={client.name}
                width={160}
                height={160}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 160px, 128px"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {allClientsData.map((client) => (
            <div
              key={`second-${client.id}`}
              className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center"
            >
              <Image
                src={getImageUrl(client.image)}
                alt={client.name}
                width={160}
                height={160}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 160px, 128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

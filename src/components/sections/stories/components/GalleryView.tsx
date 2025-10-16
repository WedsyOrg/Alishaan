'use client';

import Image from 'next/image';
import { StoryImage } from '../stories-data';

interface GalleryViewProps {
  stories: StoryImage[];
  currentIndex: number;
  onImageSelect: (index: number) => void;
}

export default function GalleryView({ 
  stories, 
  currentIndex, 
  onImageSelect 
}: GalleryViewProps) {
  return (
    <div className="flex gap-2 justify-center overflow-x-auto pb-2">
      {stories.map((story, index) => (
        <button
          key={story.id}
          onClick={() => onImageSelect(index)}
          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
            index === currentIndex 
              ? '' 
              : 'border-gray-200 hover:border-[#44008a]/50'
          }`}
          aria-label={`View story ${story.id}`}
        >
          <Image
            src={story.thumbnail}
            alt={`Wedding story thumbnail ${story.id}`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            sizes="64px"
          />
        </button>
      ))}
    </div>
  );
}

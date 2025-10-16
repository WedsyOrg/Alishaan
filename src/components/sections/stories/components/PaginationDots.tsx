interface PaginationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick?: (index: number) => void;
}

export default function PaginationDots({ 
  totalSlides, 
  currentSlide, 
  onDotClick 
}: PaginationDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick?.(index)}
          className={`h-2 rounded-full transition-all duration-200 ${
            index === currentSlide 
              ? 'bg-[#06402B] w-8' 
              : 'bg-gray-300 w-2 hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

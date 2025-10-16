import Button from '@/components/ui/Button';
import Image from 'next/image';

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
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>
    
    
      {/* Content Container */}
      <div className="relative z-10 w-full px-4 py-16 text-left md:text-center">
        {/* Brand Section */}
        <div className='md:flex justify-between max-w-6xl mx-auto'>

      
        <div className="flex flex-col mb-2">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-light text-white mb-2 font-montserrat">
            ALISHAAN
          </h1>
          <h2 className="text-lg md:text-xl lg:text-xl font-extralight text-white font-montserrat">
            LUXURY WEDDINGS
          </h2>
        </div>

        {/* Line Breaker - Mobile */}
        <div className="w-[60%] md:hidden h-0.5 bg-white mb-8 md:hidden" />
       

        {/* Tagline */}
        <div className="mb-8">
          <p className="text-5xl md:text-6xl lg:text-6xl lg:max-w-[60%] text-white leading-tight font-dream-avenue ">
            Celebrations that speak without words
          </p>
        </div>

        </div>

        {/* By WEDSY */}
        <div className="mb-8">
          <h2 className="text-sm md:hidden text-white opacity-90 font-montserrat">
            By WEDSY
          </h2>
        </div>
        <div className="mt-90">
        {/* CTA Button */}
        <div className="mb-6 flex items-center justify-center md:justify-center">
          <Button
            text="GET FREE CONSULTATION"
            bg="bg-white/90"
            textColor="text-gray-800"
            hover="hover:bg-white hover:scale-105"
            className="shadow-lg backdrop-blur-sm"
          />
        </div>

        {/* Line Breaker */}
        <div className="w-full md:w-[90%] h-0.5 bg-white mb-8 md:mx-auto"  />

        {/* Statistics Section */}
        <div className="flex flex-row justify-between items-center mb-0 text-white md:justify-between md:max-w-[70%] md:mx-auto md:gap-8">
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold mb-1 font-poiret-one">
              12 years +
            </div>
            <div className="text-md md:text-sm opacity-90 font-montserrat">
              Experience
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold mb-1 font-poiret-one">
              4.9/5
            </div>
            <div className="text-md md:text-sm opacity-90 font-montserrat">
              Google
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold mb-1 font-poiret-one">
              1250+
            </div>
            <div className="text-md md:text-sm opacity-90 font-montserrat">
              Weddings
            </div>
          </div>
        </div>
        </div>
    </div>
    </section>
  );
}
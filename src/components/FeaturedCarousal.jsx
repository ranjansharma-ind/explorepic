import React, { useEffect, useRef } from 'react';

// Mock Data for the Promotional Ads
const PROMO_ADS = [
  {
    id: 'ad1',
    title: "Summer Sale ☀️",
    subtitle: "Up to 50% off on all Beach resorts this month.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop",
    // cta: "Claim Offer",
    color: "from-blue-900/80"
  },
  {
    id: 'ad2',
    title: "Mountain Retreats",
    subtitle: "Book your cozy cabin early and get free breakfast.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
    // cta: "Explore Now",
    color: "from-emerald-900/80"
  },
  {
    id: 'ad3',
    title: "City Escapes",
    subtitle: "Weekend getaways in Europe's top capitals.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
    // cta: "View Cities",
    color: "from-purple-900/80"
  }
];

export default function PromoCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Check if we reached the last slide (with a 10px buffer for rounding errors)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Loop back to the start smoothly
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' }); 
        } else {
          // Scroll to the next slide smoothly
          scrollRef.current.scrollTo({ left: scrollLeft + clientWidth, behavior: 'smooth' }); 
        }
      }
    }, 3500); // Change slide automatically every 3.5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-6 md:py-10 font-sans w-full">
      
      {/* 
        Main Container
        Limits max width on huge screens, but lets it stretch on mobile 
      */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="px-4 mb-4">
          <h2 className="text-xl font-bold text-slate-900">Featured Offers</h2>
        </div>

        {/* 
          Carousel Wrapper 
          - overflow-x-auto: Enables horizontal scrolling
          - snap-x snap-mandatory: Forces the scroll to snap to elements
          - scrollbar-hide: Custom class (defined below) to hide the ugly scrollbar
        */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROMO_ADS.map((ad) => (
            <div 
              key={ad.id} 
              // min-w-full forces each slide to take up exactly 100% of the screen width on mobile
              // snap-center ensures it aligns perfectly in the middle when swiping stops
              className="w-full min-w-full px-4 snap-center shrink-0"
            >
              <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                {/* Background Image */}
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay for text readability */}
                <div className={`absolute inset-0 bg-gradient-to-r ${ad.color} via-slate-900/40 to-transparent`} />
                
                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 w-max">
                    Promoted
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 max-w-[250px] sm:max-w-md md:max-w-lg leading-tight">
                    {ad.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-200 mb-5 max-w-[250px] sm:max-w-md md:max-w-lg">
                    {ad.subtitle}
                  </p>
                  <div>
                    {/* <span className="inline-block px-6 py-3 bg-white text-slate-900 text-sm font-bold rounded-full shadow-md hover:bg-slate-100 transition-colors active:scale-95">
                      {ad.cta}
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styles for webkit browsers added dynamically */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
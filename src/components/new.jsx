import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Star, 
  Heart, 
  Home, 
  Compass, 
  Bookmark, 
  User,
  SlidersHorizontal,
  Zap,
  Clock
} from 'lucide-react';

// Mock Data for Travel Destinations
const DESTINATIONS = [
  {
    id: 1,
    title: "Kyoto Temple",
    location: "Japan",
    price: 120,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    category: "Culture"
  },
  {
    id: 2,
    title: "Amalfi Coast",
    location: "Italy",
    price: 250,
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cb3a?q=80&w=800&auto=format&fit=crop",
    category: "Beach"
  },
  {
    id: 3,
    title: "Swiss Alps",
    location: "Switzerland",
    price: 180,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1531366936310-0960533f01b1?q=80&w=800&auto=format&fit=crop",
    category: "Mountain"
  },
  {
    id: 4,
    title: "Bali Villas",
    location: "Indonesia",
    price: 90,
    rating: 4.6,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    category: "Beach"
  },
  {
    id: 5,
    title: "Santorini",
    location: "Greece",
    price: 210,
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop",
    category: "City"
  },
  {
    id: 6,
    title: "Machu Picchu",
    location: "Peru",
    price: 150,
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop",
    category: "Culture"
  },
  {
    id: 7,
    title: "Banff National",
    location: "Canada",
    price: 140,
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
    category: "Mountain"
  },
  {
    id: 8,
    title: "Paris Center",
    location: "France",
    price: 190,
    rating: 4.5,
    reviews: 530,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
    category: "City"
  }
];

// Mock Data for Flash Trips
const FLASH_TRIPS = [
  {
    id: 'f1',
    title: "Weekend in Rome",
    location: "Italy",
    duration: "2 Days",
    price: 199,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
    tag: "-43% OFF"
  },
  {
    id: 'f2',
    title: "Dubai Desert Escape",
    location: "UAE",
    duration: "3 Days",
    price: 450,
    originalPrice: 800,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    tag: "Ending Soon"
  },
  {
    id: 'f3',
    title: "Kyoto Express",
    location: "Japan",
    duration: "4 Days",
    price: 599,
    originalPrice: 850,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    tag: "Last 2 Spots"
  }
];

const CATEGORIES = ["All", "Beach", "Mountain", "Culture", "City", "Forest"];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("home");
  const [favorites, setFavorites] = useState(new Set([2, 5]));

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) {
        newFavs.delete(id);
      } else {
        newFavs.add(id);
      }
      return newFavs;
    });
  };

  const filteredDestinations = activeCategory === "All" 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 md:pb-0 overflow-hidden">
      
      {/* Top Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Explore</span>
              <h1 className="text-xl font-bold text-slate-900 leading-none">Wanderlust</h1>
            </div>
            
            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Where to next?"
              />
            </div>

            <div className="flex items-center gap-3">
              <motion.button whileTap={{ scale: 0.9 }} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <SlidersHorizontal className="w-5 h-5" />
              </motion.button>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer"
              >
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="User profile" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto">
        
        {/* Hero Banner Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 pt-4 pb-2 md:pt-6 md:pb-4"
        >
          <div className="relative w-full h-56 md:h-80 rounded-3xl overflow-hidden shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1200&auto=format&fit=crop" 
              alt="Hero Landscape" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-5 md:p-8">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-3">
                Featured
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                Find your next <br/> adventure! 🌍
              </h2>
              <p className="text-slate-200 text-sm md:text-base mb-4 max-w-md hidden sm:block">
                Discover breathtaking destinations, exclusive flash trips, and the best travel deals tailored just for you.
              </p>
              <button className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-md">
                Start Exploring
              </button>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Scroll Categories */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="px-4 py-4 md:py-6 overflow-x-auto scrollbar-hide flex gap-2 sm:gap-3 items-center" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES.map((category) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-slate-900 rounded-full shadow-md shadow-slate-900/20"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Flash Trips Section (Horizontal Scroll for Mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-2 pb-6"
        >
          <div className="px-4 flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900">Flash Trips</h3>
              <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <div className="flex items-center gap-1 text-red-500 bg-red-50 px-2 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold tracking-wider">04:23:59</span>
            </div>
          </div>

          <div 
            className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {FLASH_TRIPS.map((trip) => (
              <motion.div 
                whileTap={{ scale: 0.98 }}
                key={trip.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[300px] bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-200">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Deal Tag */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2.5 py-1 rounded-lg shadow-md">
                    <span className="text-[11px] font-bold tracking-wide uppercase">{trip.tag}</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h4 className="font-bold text-slate-900 text-base leading-tight truncate">
                      {trip.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center text-slate-500 mb-3 text-xs">
                    <span className="font-medium bg-slate-100 px-2 py-0.5 rounded-md mr-2">{trip.duration}</span>
                    <MapPin className="w-3 h-3 mr-1 shrink-0" />
                    <span className="truncate">{trip.location}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-medium line-through">${trip.originalPrice}</span>
                      <div className="flex items-baseline">
                        <span className="font-bold text-slate-900 text-lg">${trip.price}</span>
                        <span className="text-[10px] text-slate-500 ml-0.5">/person</span>
                      </div>
                    </div>
                    <button className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Small Grid Cards Section */}
        <div className="px-4 pb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-end mb-4"
          >
            <h3 className="text-lg font-bold text-slate-900">Popular Destinations</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">See all</button>
          </motion.div>

          {/* The Grid: Animated layout changes */}
          <motion.div 
            layout
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            <AnimatePresence>
              {filteredDestinations.map((dest) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  key={dest.id} 
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Rating Badge (Top Left) */}
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-[11px] font-bold text-slate-800">{dest.rating}</span>
                    </div>
                    {/* Favorite Button (Top Right) */}
                    <motion.button 
                      whileTap={{ scale: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(dest.id);
                      }}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/50 backdrop-blur-md hover:bg-white transition-colors"
                    >
                      <motion.div
                        animate={{ scale: favorites.has(dest.id) ? [1, 1.3, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart 
                          className={`w-4 h-4 transition-colors ${favorites.has(dest.id) ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} 
                        />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <h4 className="font-semibold text-slate-900 text-sm md:text-base leading-tight truncate">
                        {dest.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center text-slate-500 mb-2">
                      <MapPin className="w-3 h-3 mr-1 shrink-0" />
                      <span className="text-xs truncate">{dest.location}</span>
                    </div>

                    <div className="mt-auto pt-2 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Price</span>
                        <div className="flex items-baseline">
                          <span className="font-bold text-slate-900 text-sm">${dest.price}</span>
                          <span className="text-[10px] text-slate-500 ml-0.5">/night</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
        className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 pb-safe z-40"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {['home', 'explore', 'saved', 'profile'].map((tab) => {
            const Icon = tab === 'home' ? Home : tab === 'explore' ? Compass : tab === 'saved' ? Bookmark : User;
            const isActive = activeTab === tab;
            
            return (
              <motion.button 
                key={tab}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveTab(tab)}
                className={`relative flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute -top-[1px] w-8 h-[2px] bg-blue-600 rounded-b-full"
                  />
                )}
                <Icon className={`w-6 h-6 ${isActive ? 'fill-blue-50' : ''}`} />
                <span className="text-[10px] font-medium capitalize">{tab}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
      
      {/* Hide scrollbar styles for webkit browsers added dynamically */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
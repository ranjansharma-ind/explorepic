import {
  Star,
  Heart,
  MapPin,
  Home,
  Compass,
  Bookmark,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Alternatives() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState(new Set([2, 5]));
  const [activeTab, setActiveTab] = useState("home");

  // --- MOCK DATA ---
  const DESTINATIONS = [
    {
      id: 1,
      title: "Chopta Tungnath",
      location: "Uttarakhand",
      date: "Oct14 - Oct21,2026",
      price: "9000",
      badge: "TOP-RATED",
      badgeColor: "bg-blue-800",
      category: "Culture",
      image:
        "https://images.unsplash.com/photo-1633702738734-443da2c18f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Jibhi-Tirthan",
      location: "Himachal",
      date: "Oct14 - Oct21,2026",
      price: "8999",
      badge: "4 SPOTLIGHT",
      badgeColor: "bg-blue-800",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Manali-Sissu-Kasol",
      location: "Himachal",
      date: "Oct14 - Oct21,2026",
      price: "11000",
      badge: "ONLY2SPOTLIGHT",
      badgeColor: "bg-red-600",
      category: "Mountain",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Embrace the wild Kedarnath",
      location: "Uttarakhand",
      date: "Oct14 - Oct21,2026",
      badge: "6SPOTLIGHT",
      badgeColor: "bg-green-800",
      price: "6500",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Auli with Gorson Bugyal",
      location: "Uttarakhand",
      badge: "TOP-RATED",
      date: "Oct14 - Oct21,2026",
      badgeColor: "bg-blue-800",
      price: "6550",
      category: "City",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
  ];

  const CATEGORIES = ["All", "Beach", "Mountain", "Culture", "City", "Forest"];

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) {
        newFavs.delete(id);
      } else {
        newFavs.add(id);
      }
      return newFavs;
    });
  };

  const filteredDestinations =
    activeCategory === "All"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeCategory);

  return (
    <div>
      {/* --- SECTION 3: ALTERNATIVE PACKAGES (Cross Scroll) --- */}
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-8 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-end mb-4"
          >
            <div className="text-left max-w-6xl">
              <div className="flex items-center gap-2">
              <h1 className="text-[#dd9b0b] font-bold text-4xl md:text-3xl tracking-widest uppercase font-extrabold mt-6 text-center text-neutral-900 dark:text-white transition-colors">Upcoming Trips</h1>
            </div>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              See all
            </button>
          </motion.div>
        </div>
        {/* Horizontal Scroll Container */}
        <main className="max-w-7xl mx-auto">
          {/* Horizontal Scroll Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="px-4 py-4 md:py-6 overflow-x-auto scrollbar-hide flex gap-2 sm:gap-3 items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Small Grid Cards Section */}
          <div className="px-4 pb-8">
            {/* The Grid: Animated layout changes */}
            <motion.div
              layout
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              <AnimatePresence mode="popLayout">
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
                    <div className="relative aspect-[4/4] w-full overflow-hidden bg-slate-200">
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
                        <span className="text-[11px] font-bold text-slate-800">
                          {dest.rating}
                        </span>
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
                          animate={{
                            scale: favorites.has(dest.id) ? [1, 1.3, 1] : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${favorites.has(dest.id) ? "fill-red-500 text-red-500" : "text-slate-700"}`}
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
                        <span className="text-xs truncate">
                          {dest.location}
                        </span>
                      </div>

                      <div className="mt-auto pt-2 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                            Price
                          </span>
                          <div className="flex items-baseline">
                            <span className="font-bold text-slate-900 text-sm">
                              ₹{dest.price}
                            </span>
                            <span className="text-[10px] text-slate-500 ml-0.5">
                              /night
                            </span>
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
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: 0.5,
          }}
          className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 pb-safe z-40"
        >
          <div className="flex items-center justify-around h-16 px-2">
            {["home", "explore", "saved", "profile"].map((tab) => {
              const Icon =
                tab === "home"
                  ? Home
                  : tab === "explore"
                    ? Compass
                    : tab === "saved"
                      ? Bookmark
                      : User;
              const isActive = activeTab === tab;

              return (
                <motion.button
                  key={tab}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${isActive ? "text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -top-[1px] w-8 h-[2px] bg-blue-600 rounded-b-full"
                    />
                  )}
                  <Icon
                    className={`w-6 h-6 ${isActive ? "fill-blue-50" : ""}`}
                  />
                  <span className="text-[10px] font-medium capitalize">
                    {tab}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
        {/* Hide scrollbar styles for webkit browsers added dynamically */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `,
          }}
        />
      </section>
    </div>
  );
}

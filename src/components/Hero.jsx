import { motion } from "framer-motion";
import { MapPin,Plane, Star } from "lucide-react";
import herogif from "../assets/droneshot.gif";

// --- THEME COLORS ---
// const colors = {
//   blue: "#002db3",
//   gold: "#e8bc5b",
//   green: "#8dc63f",
//   dark: "#0a192f",
//   light: "#f8f9fa",
// };

export default function App() {
  return (
    <div className="bg-white h-[50vh] md:h-[90vh] font-sans overflow-x-hidden selection:bg-[#e8bc5b] selection:text-white">
      {/* --- NEW REDESIGNED HERO SECTION --- */}
      <section className="relative h-[50vh] md:h-[90vh] w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-hidden flex items-center pt-24 pb-12">
        {/* Subtle glowing abstract background element */}
        <div className="absolute top-0 right-0 w-[50vw] h-screen bg-[#002db3] rounded-l-full opacity-40 blur-[120px] translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[30vw] h-[50vh] bg-[#8dc63f] rounded-tr-full opacity-10 blur-[100px] -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Typography & CTAs */}
          <div className="text-left py-12 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text--black font-medium tracking-widest p-6 uppercase text-sm flex items-center gap-2">
                <Plane size={16} /> Welcome to Explore Epic
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6 tracking-wide hidden sm:block">
                <span className="text-[#dd9b0b] font-bold text-4xl md:text-5xl tracking-widest uppercase">
                  Extraordinary
                </span>
                <br />
                <span className="font-bold text-4xl md:text-5xl tracking-widest uppercase">
                  Journeys
                </span>
              </h1>

              {/* Search Bar Component */}
              <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-full flex flex-col md:flex-row items-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40">
                {/* Location Input */}
                <div className="flex items-center flex-1 px-5 py-5 w-full inset-0 border-gray-100 group">
                  <MapPin
                    className="text-[#004dc2] mr-4 transition-transform group-hover:scale-110"
                    size={22}
                  />
                  <div className="flex flex-col items-start w-full">
                    <input
                      type="text"
                      placeholder="Where do you go?"
                      className="bg-transparent border-none focus:ring-0 text-[#1a2b49] placeholder-gray-400 w-full text-base font-medium outline-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Image Collage */}
          <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full hidden md:block mt-10 lg:mt-0">
            {/* Top Right Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 top-20 w-[55%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80"
                alt="Scenic View"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>

            {/* Bottom Left Secondary Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-0 bottom-20 w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#0a192f] z-20"
            >
              <img
                src={herogif}
                alt="Architecture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-1/3 left-[20%] z-30 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4 -translate-y-1/2"
            >
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#0a192f] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#0a192f] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-[#0a192f] object-cover"
                />
              </div>
              <div>
                <div className="flex text-[#e8bc5b] text-sm">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-white text-xs font-medium mt-1 tracking-wide">
                  10k+ Happy Travelers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Global Style overrides for hiding scrollbar in sliders while maintaining smooth native functionality */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        html {
          scroll-behavior: smooth;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
      `,
        }}
      />
    </div>
  );
}

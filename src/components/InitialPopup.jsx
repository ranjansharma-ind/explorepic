import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, User, Mail } from "lucide-react";

export default function InitialPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short 2-second delay on initial load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Initial Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setShowPopup(false)} // Close when clicking backdrop
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking modal body
              className="bg-white w-full max-w-[340px] sm:max-w-md md:max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-white/50 backdrop-blur-md p-1.5 rounded-full text-slate-800 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Section */}
              <div className="w-full h-32 md:w-1/2 md:h-auto relative bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                  alt="Tropical Beach" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
              </div>

              {/* Modal Content Section */}
              <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
                  Start Your Journey
                </h2>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  Leave your details below and our travel experts will get in touch to plan your perfect trip.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setShowPopup(false); }} className="space-y-3">
                  {/* Name Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white font-bold py-3 mt-2 rounded-xl shadow-lg hover:bg-slate-800 active:scale-95 transition-all"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

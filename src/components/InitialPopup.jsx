import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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
      {/* --- INITIAL POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-medium text-[#002db3] mb-2"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  Start Your Journey
                </h3>
                <p className="text-gray-500 font-light text-sm">
                  Submit a query and our travel experts will get back to you
                  shortly.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowPopup(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e8bc5b] focus:border-transparent font-light"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e8bc5b] focus:border-transparent font-light"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e8bc5b] focus:border-transparent font-light"
                    placeholder="you@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#002db3] hover:bg-[#002288] text-white font-medium py-3 rounded-xl transition-colors mt-4 shadow-lg"
                >
                  Submit Query
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

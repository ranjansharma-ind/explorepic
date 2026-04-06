// import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown} from 'lucide-react';

// 1. Constant component containing the full section logic (compact version)
const ExpeditionForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     company: '',
//     groupSize: '5 - 15 People',
//     destination: '',
//     requirements: ''
//   });

  return (
    <section className="bg-slate-50 min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-6 md:p-10 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Content & Consultation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold text-[#003580] mb-2 tracking-wide"
              >
                Start Your Custom Expedition
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-500 text-sm md:text-base leading-relaxed mb-6"
              >
                Tell us your vision. Whether it's a leadership retreat or a client incentive trip, 
                our designers will craft a proposal that exceeds your expectations.
              </motion.p>
            </div>

            {/* Direct Consultation Box - Reduced Size */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#003b8f] rounded-xl p-6 text-white relative overflow-hidden group"
            >
              <div className="relative z-10 items-start text-left">
                <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-2">
                  Direct Consultation
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-1 flex gap-3">
                  +91 82851 82582
                </h3>
                <p className="text-blue-100/70 text-sm font-medium">exploreepic@gmail.com</p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Right Column: The Form - More Compact Spacing */}
          <div className="lg:col-span-7">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#003b8f] uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-[#f3f3f3] border-none rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#ffb82b] transition-all outline-none"
                  />
                </div>
                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#003b8f] uppercase tracking-wider">Company</label>
                  <input 
                    type="text" 
                    placeholder="Organization name"
                    className="w-full bg-[#f3f3f3] border-none rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#ffb82b] transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Group Size */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#003b8f] uppercase tracking-wider">Group Size</label>
                  <div className="relative">
                    <select className="w-full bg-[#f3f3f3] border-none rounded-md p-3 appearance-none text-sm text-gray-700 focus:ring-2 focus:ring-[#ffb82b] transition-all outline-none cursor-pointer">
                      <option>5 - 15 People</option>
                      <option>16 - 30 People</option>
                      <option>30+ People</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                </div>
                {/* Destination */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#003b8f] uppercase tracking-wider">Preferred Destination</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Himachal, Kashmir"
                    className="w-full bg-[#f3f3f3] border-none rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#ffb82b] transition-all outline-none"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#003b8f] uppercase tracking-wider">Expedition Requirements</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-[#f3f3f3] border-none rounded-md p-3 text-sm text-gray-700 focus:ring-2 focus:ring-[#ffb82b] transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01, backgroundColor: '#f0ad1d' }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#ffb82b] text-[#1a1a1a] font-bold py-3.5 rounded-full shadow-md flex items-center justify-center gap-2 text-base transition-colors mt-2"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

// 2. Main export using the constant component
export default ExpeditionForm;
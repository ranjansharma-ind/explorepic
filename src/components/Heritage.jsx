import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Heritage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div>
      {/* --- SECTION 2: HERITAGE CIRCUITS --- */}
      <section id="experience" className="py-24 px-4 md:px-12 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-4"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Private Heritage Circuits
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
              Curated multi-city routes featuring personal historians, private
              jet transfers, and after-hours access to national monuments.
            </p>
          </div>

          {/* Main Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col lg:flex-row bg-white rounded-[2rem] shadow-xl overflow-hidden max-w-6xl mx-auto border border-gray-100"
          >
            {/* Left Image Side */}
            <div className="w-full lg:w-[45%] relative h-[300px] sm:h-[400px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1622225641765-8c8ef0dcb678?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Heritage Circuit"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-[#002db3] text-white text-xs font-medium px-4 py-1.5 rounded-full w-max tracking-wider">
                  12 DAYS
                </span>
                <span className="bg-white text-[#002db3] text-xs font-medium px-4 py-1.5 rounded-full w-max tracking-wider shadow-sm">
                  LUXURY PRIVATE
                </span>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h3
                  className="text-2xl md:text-3xl font-medium text-gray-900"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  The Royal Rajasthan Circuit
                </h3>
                <div className="sm:text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                    Starting From
                  </p>
                  <p className="text-3xl font-medium text-[#002db3]">12,499</p>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    per person / all inclusive
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative border-l-[1.5px] border-gray-200 ml-2 space-y-8 mb-10">
                {[
                  {
                    days: "Days 1 - 3: The Imperial Capital (Delhi)",
                    desc: "Arrival by private chauffeur. Stay at the Oberoi. Private twilight tour of Old Delhi with a renowned historian. Exclusive dining at the residence of a local art collector.",
                    active: true,
                  },
                  {
                    days: "Days 4 - 7: The Pink City Aura (Jaipur)",
                    desc: "Afternoon tea at the City Palace private terrace. Hot air balloon ride over Amer Fort at dawn. Curated jewelry workshop with 7th-generation artisans.",
                    active: false,
                  },
                  {
                    days: "Days 8 - 12: The Desert Romance (Jaisalmer)",
                    desc: "Glamping in the Thar Desert with royal tent service. Night photography sessions under the Milky Way. Private folk performance by Manganiyar musicians.",
                    active: false,
                  },
                ].map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div
                      className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ring-4 ring-white ${item.active ? "bg-[#002db3]" : "bg-gray-200"}`}
                    ></div>
                    <h4 className="font-medium text-gray-900 text-lg">
                      {item.days}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <button className="bg-[#002db3] hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition-colors w-full sm:w-auto text-sm">
                  Secure Your Spot
                </button>
                <button className="border border-[#002db3] text-[#002db3] hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors w-full sm:w-auto flex items-center justify-center gap-2 text-sm">
                  <Phone size={16} /> Call Owner
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

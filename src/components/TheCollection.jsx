import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function TheCollection() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <div>
      {/* --- SECTION 1: THE COLLECTION --- */}
      <section
        id="destinations"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[#002db3] mb-4">
            The Collection
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            North India travel experts offering adventure, budget, group &
            honeymoon trips across Himachal, Uttarakhand, Rajasthan & Kashmir.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]"
        >
          {/* Left Large Image */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group h-[400px] md:h-full cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jodhpur"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-[#e8bc5b] text-[#002db3] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                Featured Stay
              </span>
              <h3 className="text-white text-3xl font-medium tracking-wide">
                Jodhpur Royal Palace
              </h3>
              <p className="text-gray-300 mt-2 flex items-center gap-2 font-light">
                <MapPin size={16} className="text-[#8dc63f]" /> Rajasthan, India
              </p>
            </div>
          </motion.div>

          {/* Right Smaller Images */}
          <div className="flex flex-col gap-6 md:h-full">
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden group h-[250px] md:h-[calc(50%-12px)] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&q=80"
                alt="Stay 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white text-xl font-medium tracking-wide">
                  Desert Camp
                </h4>
                <p className="text-gray-300 text-sm font-light">Thar Desert</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden group h-[250px] md:h-[calc(50%-12px)] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1729690046108-2c8c34791996?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Stay 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white text-xl font-medium tracking-wide">
                  Lake View Villa
                </h4>
                <p className="text-gray-300 text-sm font-light">Udaipur</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

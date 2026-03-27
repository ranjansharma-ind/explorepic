import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Moments() {
  const moments = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534143026330-9db69e1fc220?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506461883276-594a12b11ac3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80",
  ];
  return (
    <div>
      {/* --- SECTION 4: CAPTURED MOMENTS --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#002db3] mb-4">
            Captured Moments
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Real memories created by Explore Epic. See the world through the
            lens of our travelers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {moments.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${
                i === 0
                  ? "col-span-2 row-span-2"
                  : i === 3
                    ? "col-span-2 row-span-1"
                    : ""
              }`}
            >
              <img
                src={img}
                alt={`Moment ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

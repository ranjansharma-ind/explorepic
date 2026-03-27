import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Alternatives() {
  // --- MOCK DATA ---
  const packages = [
    {
      id: 1,
      title: "Chopta Tungnath",
      location: "Uttarakhand",
      price: "8999",
      image:
        "https://images.unsplash.com/photo-1633702738734-443da2c18f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Jibhi-Tirthan",
      location: "Himachal",
      price: "8999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Manali-Sissu-Kasol",
      location: "Himachal",
      price: "11000",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Embrace the wild Kedarnath",
      location: "Uttarakhand",
      price: "6500",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Auli with Gorson Bugyal",
      location: "Uttarakhand",
      price: "6550",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "The queen of Thar Jaisalmer",
      location: "Rajasthan",
      price: "7999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      title: "Manali including Kheerganga",
      location: "Himachal",
      price: "5000",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      title: "Mcleodganj Triund Trip",
      location: "Himachal",
      price: "6999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
  ];
  return (
    <div>
      {/* --- SECTION 3: ALTERNATIVE PACKAGES (Cross Scroll) --- */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-light text-[#002db3]">
              Explore Alternatives
            </h2>
            <p className="text-gray-600 mt-2 font-light">
              Discover curated packages from across the region
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#002db3] hover:text-white transition-colors">
              <ChevronRight className="rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#002db3] hover:text-white transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-12 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -5 }}
              className="min-w-[300px] md:min-w-[380px] bg-white rounded-2xl overflow-hidden shadow-lg snap-start border border-gray-100"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#002db3] font-medium px-3 py-1 rounded-full text-sm">
                  {pkg.price}
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#8dc63f] font-medium text-sm mb-1">
                  {pkg.location}
                </p>
                <h3 className="text-xl font-normal text-gray-900 mb-4">
                  {pkg.title}
                </h3>
                <button className="text-[#002db3] font-medium flex items-center gap-1 hover:text-[#e8bc5b] transition-colors">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

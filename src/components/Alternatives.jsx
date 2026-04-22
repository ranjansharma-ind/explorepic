import { ChevronRight, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Alternatives() {
  // --- MOCK DATA ---
  const packages = [
    {
      id: 1,
      title: "Chopta Tungnath",
      location: "Uttarakhand",
      date: "Oct14 - Oct21,2026",
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      price: "9000",
      badge: "TOP-RATED",
      badgeColor: "bg-blue-800",
      image:
        "https://images.unsplash.com/photo-1633702738734-443da2c18f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Jibhi-Tirthan",
      location: "Himachal",
      date: "Oct14 - Oct21,2026",
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      price: "8999",
      badge: "4 SPOTLIGHT",
      badgeColor: "bg-blue-800",
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
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
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
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      price: "6500",
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
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      price: "6550",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "The queen of Thar Jaisalmer",
      location: "Rajasthan",
      badge: "TOP-RATED",
      badgeColor: "bg-blue-800",
      date: "Oct14 - Oct21,2026",
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      price: "7999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      title: "Manali including Kheerganga",
      location: "Himachal",
      badge: "TOP-RATED",
      badgeColor: "bg-blue-800",
      date: "Oct14 - Oct21,2026",
      price: "5000",
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      title: "Mcleodganj Triund Trip",
      location: "Himachal",
      badge: "TOP-RATED",
      badgeColor: "bg-blue-800",
      date: "Oct14 - Oct21,2026",
      descrition:
        "A lost city carved in rose-colored stone, hidden in majestic desert canyons.",
      price: "6999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div>
      {/* --- SECTION 3: ALTERNATIVE PACKAGES (Cross Scroll) --- */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-8 mb-10 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div className="text-left max-w-6xl mx-auto">
              <h1 className="text-4xl font-bold text-[#003580] mb-2 tracking-wide">
                Upcoming Trips
              </h1>
              <p className="text-gray-500 text-lg">
                Hand-picked itineraies with guaranted departure dates.
              </p>
            </div>
          </motion.div>
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
          className="flex gap-6 pt-2 overflow-x-auto snap-mandatory px-6 md:px-12 pb-12 hide-scrollbar max-w-7xl mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative min-w-[300px] md:min-w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg snap-start border border-gray-100"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-4 left-4 ${pkg.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-md`}
                >
                  {pkg.badge}
                </div>
              </div>
              <div className="p-6 text-left">
                <p className="text-gray-500 font-medium text-sm mb-2">
                  {pkg.location}
                </p>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {pkg.title}
                </h3>
                <p className="mb-5">{pkg.descrition}</p>
                <p className="text-gray-500 font-medium text-sm mb-10 flex gap-2 items-center">
                 <Calendar className="text-sm size-4 text-black"/> {pkg.date}
                </p>
                <motion.div
                  variants={itemVariants}
                  className="flex justify-between items-center pt-2 bottom-0 left-0 right-0 absolute px-4 py-4"
                >
                  <p className="font-semibold">
                    ₹ {pkg.price}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      / person
                    </span>
                  </p>
                  <motion.button
                    variants={itemVariants}
                    className="group flex text-sm font-medium bg-black hover:bg-customYellow hover:transition-all text-white p-2 rounded-lg text-center items-center"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

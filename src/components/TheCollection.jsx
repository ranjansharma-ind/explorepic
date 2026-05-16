import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const FlashSales = () => {
  const FLASH_TRIPS = [
    {
      id: 1,
      title: "Kedarnath Yatra",
      location: "Uttarakhand",
      duration: "2 Days",
      description: "A spiritual expedition to the heart of the Himalayas.",
      image:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "24,500",
      price: "20,825",
      tag: "15% OFF",
      badgeColor: "bg-red-600",
      label: "PER PERSON",
      buttonText: "Claim Offer",
      hasIcon: true,
    },
    {
      id: 2,
      title: "Jaisalmer Desert Safari",
      location: "Rajasthan",
      duration: "2 Days",
      description: "Experience the royalty of the golden city under the stars.",
      image:
        "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "18,000",
      price: "14,400",
      tag: "EARLY BIRD",
      badgeColor: "bg-green-700",
      label: "ALL-INCLUSIVE",
      buttonText: "Book with Discount",
      hasIcon: false,
    },
    {
      id: 3,
      title: "Munnar Tea Trails",
      location: "Kerla",
      duration: "2 Days",
      description: "A serene retreat into the emerald hills of Kerala.",
      image:
        "https://images.unsplash.com/photo-1580818135730-ebd11086660b?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "32,000",
      price: "25,600",
      tag: "LAST MINUTE",
      badgeColor: "bg-blue-800",
      label: "LIMITED SLOTS",
      buttonText: "Claim Offer",
      hasIcon: false,
    },
    {
      id: 4,
      title: "Munnar Tea Trails",
      location: "Kerla",
      duration: "2 Days",
      description: "A serene retreat into the emerald hills of Kerala.",
      image:
        "https://images.unsplash.com/photo-1580818135730-ebd11086660b?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "32,000",
      price: "25,600",
      tag: "LAST MINUTE",
      badgeColor: "bg-blue-800",
      label: "LIMITED SLOTS",
      buttonText: "Claim Offer",
      hasIcon: false,
    },
  ];

  return (
    <div className=" bg-gray-50 pt-12 px-4 md:-mt-15 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-8 md:px-8 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between items-end mb-4"
          >
            <div className="text-left max-w-6xl">
              <div className="flex items-center gap-2">
              <h3 className="text-4xl md:text-3xl tracking-widest uppercase font-extrabold mt-6 text-center text-neutral-900 dark:text-white transition-colors">Flash Sales</h3>
            </div>
            </div>
            <div className="flex items-center gap-1 text-red-500 bg-red-50 px-2 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold tracking-wider">04:23:59</span>
            </div>
          </motion.div>
        </div>
        {/* Flash Trips Section (Horizontal Scroll for Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-2 pb-6"
        >
          <div
            className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {FLASH_TRIPS.map((trip) => (
              <motion.div
                whileTap={{ scale: 0.98 }}
                key={trip.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[300px] bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-200">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Deal Tag */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2.5 pb-1 rounded-lg shadow-md">
                    <span className="text-[11px] font-bold tracking-wide uppercase">
                      {trip.tag}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h4 className="font-bold text-slate-900 text-base leading-tight truncate">
                      {trip.title}
                    </h4>
                  </div>

                  <div className="flex items-center text-slate-500 mb-3 text-xs">
                    <span className="font-medium bg-slate-100 px-2 py-0.5 rounded-md mr-2">
                      {trip.duration}
                    </span>
                    <MapPin className="w-3 h-3 mr-1 shrink-0" />
                    <span className="truncate">{trip.location}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-medium line-through">
                        ₹{trip.originalPrice}
                      </span>
                      <div className="flex items-baseline">
                        <span className="font-bold text-slate-900 text-lg">
                          ₹{trip.price}
                        </span>
                        <span className="text-[10px] text-slate-500 ml-0.5">
                          /person
                        </span>
                      </div>
                    </div>
                    <button className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlashSales;

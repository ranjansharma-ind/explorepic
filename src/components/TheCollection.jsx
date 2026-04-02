import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FlashSales = () => {
  const sales = [
    {
      id: 1,
      title: "Kedarnath Yatra",
      description: "A spiritual expedition to the heart of the Himalayas.",
      image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "24,500",
      discountedPrice: "20,825",
      badge: "15% OFF",
      badgeColor: "bg-red-600",
      label: "PER PERSON",
      buttonText: "Claim Offer",
      hasIcon: true
    },
    {
      id: 2,
      title: "Jaisalmer Desert Safari",
      description: "Experience the royalty of the golden city under the stars.",
      image: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "18,000",
      discountedPrice: "14,400",
      badge: "EARLY BIRD",
      badgeColor: "bg-green-700",
      label: "ALL-INCLUSIVE",
      buttonText: "Book with Discount",
      hasIcon: false
    },
    {
      id: 3,
      title: "Munnar Tea Trails",
      description: "A serene retreat into the emerald hills of Kerala.",
      image: "https://images.unsplash.com/photo-1580818135730-ebd11086660b?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      originalPrice: "32,000",
      discountedPrice: "25,600",
      badge: "LAST MINUTE",
      badgeColor: "bg-blue-800",
      label: "LIMITED SLOTS",
      buttonText: "Claim Offer",
      hasIcon: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const liveBadgeVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold text-[#003580] mb-2 tracking-wide">
              Flash Sales
            </h1>
            <p className="text-gray-500 text-lg">
              Expiring soon. These departures won't last.
            </p>
          </div>
          <div className="flex items-center">
            <motion.span 
              variants={liveBadgeVariants}
              initial="initial"
              animate="animate"
              className="bg-[#416901] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              LIVE NOW
            </motion.span>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5"
        >
          {sales.map((sale) => (
            <motion.div 
              key={sale.id} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow cursor-default"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={sale.image} 
                  alt={sale.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 ${sale.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-md`}>
                  {sale.badge}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#003580] mb-3">
                  {sale.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {sale.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-gray-400 line-through text-sm mb-0.5">
                        ₹{sale.originalPrice}
                      </p>
                      <motion.p
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05, originX: 0 }}
                        className="text-[#B38B31] text-3xl font-bold"
                      >
                        ₹{sale.discountedPrice}
                      </motion.p>
                    </div>
                    <div className="text-[10px] text-gray-400 font-semibold tracking-wider mb-1">
                      {sale.label}
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#003580] text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#002a66] transition-colors shadow-lg shadow-blue-900/10"
                  >
                    {sale.buttonText}
                    {sale.hasIcon && (
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Zap size={16} fill="currentColor" />
                      </motion.div>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FlashSales;
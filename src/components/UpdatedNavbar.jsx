import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = ["Home", "All Trips", "Group Trips", "Corporate", "Offers"];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 shadow-xl" : "bg-transparent"}`}
      >
        {/* Top Announcement Banner */}
        <div
          className={`w-full overflow-hidden transition-all duration-500 bg-gradient-to-r from-[#e8bc5b] via-[#fff5d1] to-[#e8bc5b] animate-shimmer flex items-center justify-center ${scrolled ? "h-0 opacity-0" : "h-[36px] opacity-100 shadow-md"}`}
        >
          <p className="text-[#002db3] text-sm font-medium tracking-wide flex items-center gap-2">
            ✨ Summer Holiday Sale! Kickstart your epic journey.{" "}
            <a
              href="#about"
              className="font-bold underline hover:text-white transition-colors cursor-pointer"
            >
              Book Now
            </a>
          </p>
        </div>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white/90 py-3 px-8`}
        >
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] max-w-7xl `}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`font-bold tracking-tight flex-shrink-0 cursor-pointer transition-all duration-300 text-2xl text-navy`}
            >
              <img
                src={logo}
                alt="logo"
                className="h-10 brightness-100 contrast-900"
              />
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden lg:flex flex-1 items-center justify-center space-x-1 xl:space-x-3">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-navy/80 hover:text-navy font-medium text-[13px] tracking-widest uppercase px-4 py-2 transition-all duration-300 relative group hover:text-customBlue"
                >
                  {/* <AnimatedNavLink key={link.href} href={link.href}></AnimatedNavLink> */}
                  {link}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-customYellow transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="hidden lg:flex items-center gap-5 flex-shrink-0"
            >
              <button className="bg-customYellow text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-saffron hover:shadow-lg hover:shadow-saffron/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                <Plane
                  size={16}
                  className="group-hover:text-black transition-colors duration-300"
                />
                Book a Trip
              </button>
            </motion.div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${mobileMenuOpen ? "bg-gray-100 text-navy" : "text-navy hover:bg-gray-50"}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity:0, x: "-100%" }}
              animate={{ opacity:1,  x: 0 }}
              exit={{ opacity:0, x: "-100%" }}
              onClick={() => setMobileMenuOpen(false)}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white/100 top-9 left-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-40 lg:hidden"
            >
              <div className="flex flex-col p-6 space-y-2 h-full">
                {/* Close Button */}
                {/* <div className="flex justify-end mb-4">
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div> */}

                {/* Links */}
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-navy/80 hover:text-customBlue font-semibold text-lg py-3 px-4 rounded-xl transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}

                {/* Bottom Button */}
                <div className="mt-auto pt-6 border-t">
                  <button className="w-full py-4 rounded-full bg-customYellow text-black font-semibold flex items-center justify-center gap-2">
                    <Plane size={18} /> Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;

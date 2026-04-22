import { useState, useEffect } from "react";
import {Phone, Plane, Menu, X } from "lucide-react";
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div>
      {/* --- HEADER & NAVBAR --- */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 shadow-xl" : "bg-transparent"}`}
      >
        {/* Top Announcement Banner */}
        <div
          className={`w-full overflow-hidden transition-all duration-500 bg-gradient-to-r from-[#e8bc5b] via-[#fff5d1] to-[#e8bc5b] animate-shimmer flex items-center justify-center ${isScrolled ? "h-0 opacity-0" : "h-[36px] opacity-100 shadow-md"}`}
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

        <nav
          className={`transition-all duration-500 w-full ${isScrolled ? "py-2" : "py-2"}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="logo" className="h-12"/>
              </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <a
                href="#destinations"
                className="text-black hover:text-[#e8bc5b] transition-colors font-light"
              >
                Home
              </a>
              <a
                href="#experience"
                className="text-white hover:text-[#e8bc5b] transition-colors font-light"
              >
                All Trips
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#e8bc5b] transition-colors font-light"
              >
                Group Trips
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#e8bc5b] transition-colors font-light"
              >
                Corporate
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#e8bc5b] transition-colors font-light"
              >
                Offers
              </a>
            </div>

            {/* Right Corner Buttons */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <button className="flex items-center gap-2 text-black hover:text-[#e8bc5b] transition-colors font-light">
                <Phone size={18} />
                <span className="hidden lg:inline">Call Us</span>
              </button>
              <button className="bg-[#e8bc5b] text-[#002db3] px-5 py-2 lg:px-6 lg:py-2.5 rounded-full font-medium hover:bg-white transition-colors flex items-center gap-2 shadow-lg text-sm lg:text-base">
                Book Now <Plane size={18} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#002db3] flex flex-col items-center py-6 gap-6 shadow-xl border-t border-blue-800">
              <a href="#destinations" className="text-white text-lg">
                Destinations
              </a>
              <a href="#experience" className="text-white text-lg">
                Experience
              </a>
              <a href="#about" className="text-white text-lg">
                About Us
              </a>
              <button className="flex items-center gap-2 text-white text-lg">
                <Phone size={18} /> Call Us
              </button>
              <button className="bg-[#e8bc5b] text-[#002db3] px-8 py-3 rounded-full font-bold">
                Book Now
              </button>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

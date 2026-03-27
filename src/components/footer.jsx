import { Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div>
      {/* --- FOOTER --- */}
      <footer
        id="about"
        className="bg-[#0a192f] pt-20 pb-10 px-6 md:px-12 text-gray-400 font-light"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="footer logo" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Crafting unforgettable journeys and exclusive stays for the modern
              adventurer. Your epic story begins here.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  Our Packages
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  Heritage Circuits
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-wide mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  rel="noopener norefferrer"
                  className="hover:text-[#e8bc5b] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-wide mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +1 (800) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Global Headquarters
              </li>
            </ul>
            <button className="mt-6 bg-[#002db3] text-white px-6 py-2 rounded-full border border-blue-800 hover:bg-[#e8bc5b] hover:text-[#002db3] hover:border-transparent transition-all font-medium">
              Consult an Expert
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Explore Epic. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.google.com"
              rel="noopener norefferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com"
              rel="noopener norefferrer"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://www.google.com"
              rel="noopener norefferrer"
              className="hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

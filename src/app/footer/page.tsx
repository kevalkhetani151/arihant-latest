"use client"
import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaUserPlus,
  FaUsersCog,
  FaCode,
  FaLaptopCode,
  FaNetworkWired,
  FaClock,
  FaHeadset,
  FaGlobe,
  FaAward
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Arihant Staffing Logo" className="h-22 w-64 object-contain" />
              {/* <span className="text-3xl font-black bg-gradient-to-r from-brand-orange-400 to-brand-orange-500 bg-clip-text text-transparent">
                Arihant Staffing
              </span> */}
            </div>
            
            {/* <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Revolutionizing recruitment through AI-powered matching and human expertise. 
              Connecting exceptional talent with visionary companies worldwide since 2008.
            </p> */}

            {/* Key Stats */}
          

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-orange-600 hover:to-brand-orange-600 transition-all duration-300 transform hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-blue-500 hover:to-brand-blue-600 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-blue-600 hover:to-brand-blue-700 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-orange-500 hover:to-brand-orange-500 transition-all duration-300 transform hover:scale-110 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-brand-orange-400 to-brand-orange-500 rounded-full mr-3"></div>
              Our Services
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a
                  href="rpo"
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaUserPlus className="w-4 h-4 mr-3 text-brand-blue-400 group-hover:text-brand-blue-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">RPO Solutions</span>
                </a>
              </li>
              <li>
                <a
                  href="/hr-solutions"
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaUsersCog className="w-4 h-4 mr-3 text-brand-blue-400 group-hover:text-brand-blue-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">HR Solutions</span>
                </a>
              </li>
              <li>
                <a
                  href="it-consultant"
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaCode className="w-4 h-4 mr-3 text-brand-blue-400 group-hover:text-brand-blue-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Web Development</span>
                </a>
              </li>
              <li>
                <a
                  href="it-consultant"
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaLaptopCode className="w-4 h-4 mr-3 text-brand-orange-400 group-hover:text-brand-orange-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">IT Consulting</span>
                </a>
              </li>
              <li>
                <a
                  href="bpo"
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaNetworkWired className="w-4 h-4 mr-3 text-brand-blue-400 group-hover:text-brand-blue-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">BPO Services</span>
                </a>
              </li>
              <li>
                <a
                  href="/staff-augmentation"
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaUserPlus className="w-4 h-4 mr-3 text-brand-blue-400 group-hover:text-brand-blue-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Staff Augmentation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-brand-blue-400 to-brand-orange-500 rounded-full mr-3"></div>
              Industries
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <p
                 
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-orange-400" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Technology</span>
                </p>
              </li>
              <li>
                <p
                 
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-orange-400" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Healthcare</span>
                </p>
              </li>
              <li>
                <p
                 
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-orange-400" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Finance</span>
                </p>
              </li>
              <li>
                <p
                
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-orange-400" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Manufacturing</span>
                </p>
              </li>
              <li>
                <p
                 
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-orange-400" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">E-commerce</span>
                </p>
              </li>
              <li>
                <p
                
                  className="hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-brand-orange-400" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Clean Energy</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-brand-blue-400 to-brand-blue-500 rounded-full mr-3"></div>
              Contact & Support
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 text-gray-300 mb-8">
              <div className="flex items-center space-x-3 group">
               
                <div>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors font-semibold">
                    +1 973-891-7576
                  </a>
                  <div className="text-sm text-gray-400">24/7 Support Line</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
               
                <div>
                  <a href="mailto:info@arihanthcs.com" className="hover:text-white transition-colors font-semibold">
                   info@arihanthcs.com
                  </a>
                  <div className="text-sm text-gray-400">General Inquiries</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
               
                <div>
                  <div className="hover:text-white transition-colors font-semibold">
                    123 Innovation Drive
                  </div>
                  <div className="text-sm text-gray-400">San Francisco, CA 94105</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
        
          </div>
        </div>

        {/* Newsletter Signup */}
      
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
            <p>&copy; 2025 Arihant Staffing AI Inc. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                Made with 
                <span className="text-brand-orange-500 mx-1 animate-pulse"></span> 
                in Gandhinagar
              </span>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

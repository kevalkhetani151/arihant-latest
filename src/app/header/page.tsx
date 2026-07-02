"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaChevronDown,
  FaBars,
  FaUserPlus,
  FaUsersCog,
  FaCode,
  FaLaptopCode,
  FaNetworkWired
} from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white backdrop-blur-lg border-b border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Arihant Staffing Logo" className="ml-4 md:ml-12 h-[60px] md:h-[90px] w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/home" className="nav-link text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300 hover:scale-110">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="nav-link text-gray-300 hover:text-brand-blue-400 transition-colors duration-300 font-semibold flex items-center space-x-1">
                  <span>Services</span>
                  <FaChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Full Width Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="p-8">
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      
                      {/* RPO Service */}
                      <Link href="/rpo" className="service-item flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-brand-blue-400 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center">
                            <FaUserPlus className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl group-hover:text-brand-blue-400">Recruitment Process Outsourcing</h4>
                          <p className="text-gray-300 text-base mt-2">Scale your team with skilled professionals and expand your workforce efficiently</p>
                        </div>
                      </Link>

                      {/* HR Solutions */}
                      <Link href="/hr-solutions" className="service-item flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-brand-blue-400 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-xl flex items-center justify-center">
                            <FaUsersCog className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl group-hover:text-brand-blue-400">HR Solutions</h4>
                          <p className="text-gray-300 text-base mt-2">Complete human resource management and strategic HR consulting services</p>
                        </div>
                      </Link>

                      {/* Web Development */}
                      {/* <Link href="/web-development" className="service-item flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-brand-blue-400 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center">
                            <FaCode className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl group-hover:text-brand-blue-400">Web Development</h4>
                          <p className="text-gray-300 text-base mt-2">Custom websites and web applications built with modern technologies</p>
                        </div>
                      </Link> */}

                      {/* IT Services */}
                      <Link href="/web-development" className="service-item flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-brand-blue-400 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-xl flex items-center justify-center">
                            <FaLaptopCode className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl group-hover:text-brand-blue-400">IT Services & Consulting</h4>
                          <p className="text-gray-300 text-base mt-2">Technology solutions and strategic IT consulting for business growth</p>
                        </div>
                      </Link>

                      {/* BPO */}
                      <Link href="/bpo" className="service-item flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-brand-blue-400 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center">
                            <FaNetworkWired className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl group-hover:text-brand-blue-400">Business Process Outsourcing</h4>
                          <p className="text-gray-300 text-base mt-2">Streamline operations with comprehensive BPO solutions and services</p>
                        </div>
                      </Link>

                      {/* Staff Augmentation */}
                      <Link href="/staff-augmentation" className="service-item flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group border border-gray-700 hover:border-brand-blue-400 hover:shadow-md">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center">
                            <FaUserPlus className="text-white text-2xl" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-xl group-hover:text-brand-blue-400">Staff Augmentation</h4>
                          <p className="text-gray-300 text-base mt-2">Scale your team with skilled professionals and expand your workforce efficiently</p>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <h5 className="text-white font-bold text-lg">Need a Custom Solution?</h5>
                        <p className="text-gray-300 text-sm">Let's discuss your specific requirements</p>
                      </div>
                      <div className="flex gap-3">
                        
                        <a href="/contact" className="px-6 py-3 border-2 border-brand-blue-500 text-brand-blue-400 font-bold rounded-xl hover:bg-brand-blue-600 hover:text-white transition-all duration-300">
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed Navigation Links */}
                {/* <a href="carrer" className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300">
               Carrer
              </a> */}
              <a href="about" className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300">
                About
              </a>
              <a href="contact" className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300">
                Contact Us
              </a>
            <Link href='contact'>
              <button className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-700 hover:from-brand-orange-700 hover:to-brand-orange-700 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
                Connect With Us
              </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-brand-orange-400 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       {/* Mobile Menu */}
<div className={`lg:hidden bg-gray-900 border-t border-gray-700 py-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
  <div className="max-w-7xl mx-auto px-6 space-y-4">
    <Link href="/home" className="block text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300 py-2">
      Home
    </Link>
    
    {/* Mobile Services Dropdown */}
    <div className="mobile-services">
      <button 
        className="flex items-center justify-between w-full text-gray-300 hover:text-brand-orange-400 font-semibold py-2"
        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
      >
        <span>Services</span>
        <FaChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`mt-3 ml-4 space-y-3 ${mobileServicesOpen ? 'block' : 'hidden'}`}>
        <Link href="/rpo" className="block text-gray-400 hover:text-brand-orange-400 text-sm py-1">
          Recruitment Process Outsourcing
        </Link>
        <Link href="/hr-solutions" className="block text-gray-400 hover:text-brand-orange-400 text-sm py-1">
          HR Solutions
        </Link>
        {/* <Link href="/web-development" className="block text-gray-400 hover:text-brand-orange-400 text-sm py-1">
          Web Development
        </Link> */}
        <Link href="/web-development" className="block text-gray-400 hover:text-brand-orange-400 text-sm py-1">
          IT Services & Consulting
        </Link>
        <Link href="/bpo" className="block text-gray-400 hover:text-brand-orange-400 text-sm py-1">
          Business Process Outsourcing
        </Link>
        <Link href="/staff-augmentation" className="block text-gray-400 hover:text-brand-orange-400 text-sm py-1">
          Staff Augmentation
        </Link>
      </div>
    </div>

    <Link href="/about" className="block text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300 py-2">
      About
    </Link>
    <Link href="/contact" className="block text-gray-300 hover:text-brand-orange-400 font-semibold transition-all duration-300 py-2">
      Contact Us
    </Link>
    
    <Link href="/contact" className="block">
      <button className="w-full bg-gradient-to-r from-brand-orange-500 to-brand-orange-700 text-white px-8 py-3 rounded-full font-bold mt-4 hover:from-brand-orange-700 hover:to-brand-orange-700 transition-all duration-300">
        Connect With Us
      </button>
    </Link>
  </div>
</div>

      </nav>
    </header>
  );
};

export default Header;

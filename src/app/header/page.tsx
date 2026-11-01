
"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUserPlus,
  FaUsersCog,
  FaNetworkWired,
  FaLaptopCode,
  FaGraduationCap,
  FaHeartbeat,
} from "react-icons/fa";

const services = [
  {
    title: "Staff Augmentation",
    href: "/staff-augmentation",
    description:
      "Scale your team with skilled professionals and expand your workforce efficiently.",
    icon: FaUserPlus,
  },
  {
    title: "Healthcare Solutions",
    href: "/healthcare",
    description:
      "Healthcare staffing and workforce solutions for medical organizations.",
    icon: FaHeartbeat,
  },
  {
    title: "HR Solutions",
    href: "/hr-solutions",
    description:
      "Complete human resource management and strategic HR consulting services.",
    icon: FaUsersCog,
  },
  {
    title: "IT Solutions",
    href: "/web-development",
    description:
      "Technology solutions and IT consulting to support your business growth.",
    icon: FaLaptopCode,
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    href: "/rpo",
    description:
      "Streamline your hiring process with expert recruitment and talent acquisition services.",
    icon: FaNetworkWired,
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white backdrop-blur-lg border-b border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between min-h-[76px] md:min-h-[100px]">

            {/* Logo */}
            <Link
              href="/home"
              onClick={closeMobileMenu}
              className="flex items-center flex-shrink-0"
            >
              <img
                src="/logo.png"
                alt="Arihant Staffing Logo"
                className="h-[60px] md:h-[85px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">

              <Link
                href="/home"
                className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                href="/gcc"
                className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-colors duration-300 whitespace-nowrap"
              >
                Global Capability Center
              </Link>

              {/* Desktop Services Dropdown */}
              <div className="relative group py-5">

                <button
                  type="button"
                  aria-haspopup="true"
                  className="flex items-center gap-2 text-gray-300 hover:text-brand-blue-400 font-semibold transition-colors duration-300"
                >
                  Services
                  <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
            {/* 'right-0' box ko right side se align karega aur left ki taraf open hoga, jisse screen overflow nahi hoga */}
<div className="absolute top-full right-0 md:-right-10 w-[95vw] sm:w-[600px] md:w-[750px] lg:w-[950px] xl:w-[1058px] max-w-[95vw] pt-4 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-[100]">
  
  <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
    <div className="p-6 md:p-8">
      
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-white text-xl md:text-2xl font-bold">
          Our Services
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Comprehensive solutions to support your business growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.href}
              href={service.href}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-700 hover:border-brand-blue-400 hover:bg-gray-700 transition-all duration-300 group/service"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon className="text-white text-xl" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-base mb-2 group-hover/service:text-brand-blue-400 transition-colors">
                  {service.title}
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h5 className="text-white font-bold text-lg">
            Need a Custom Solution?
          </h5>
          <p className="text-gray-400 text-sm mt-1">
            Let's discuss your specific business requirements.
          </p>
        </div>

        <Link
          href="/contact"
          className="px-6 py-3 border-2 border-brand-blue-500 text-brand-blue-400 font-bold rounded-xl hover:bg-brand-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-center"
        >
          Contact Us
        </Link>
      </div>

    </div>
  </div>
</div>
              </div>

              {/* About */}
              <Link
                href="/about"
                className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-colors duration-300"
              >
                About
              </Link>

              {/* Contact */}
              {/* <Link
                href="/contact"
                className="text-gray-300 hover:text-brand-orange-400 font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link> */}

              {/* CTA */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-brand-orange-500 to-brand-orange-700 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Connect With Us
              </Link>

            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-brand-orange-400 transition-colors duration-300 p-2"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden bg-gray-900 border-t border-gray-700 transition-all duration-300 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 space-y-2">

            {/* Home */}
            <Link
              href="/home"
              onClick={closeMobileMenu}
              className="block text-gray-300 hover:text-brand-orange-400 font-semibold py-3 transition-colors duration-300"
            >
              Home
            </Link>

            {/* Global Capability Center */}
            <Link
              href="/gcc"
              onClick={closeMobileMenu}
              className="block text-gray-300 hover:text-brand-orange-400 font-semibold py-3 transition-colors duration-300"
            >
              Global Capability Center
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="border-y border-gray-800">

              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-brand-orange-400 font-semibold py-4 transition-colors duration-300"
              >
                <span>Services</span>

                <FaChevronDown
                  className={`text-sm transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Services List */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServicesOpen
                    ? "max-h-[800px] opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 pl-3">

                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800 transition-colors duration-300 group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-lg flex items-center justify-center">
                          <Icon className="text-white text-lg" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-gray-200 text-sm font-semibold group-hover:text-brand-blue-400 transition-colors">
                            {service.title}
                          </h4>

                          <p className="text-gray-400 text-xs leading-relaxed mt-1 text-justify">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}

                </div>
              </div>

            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block text-gray-300 hover:text-brand-orange-400 font-semibold py-3 transition-colors duration-300"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block text-gray-300 hover:text-brand-orange-400 font-semibold py-3 transition-colors duration-300"
            >
              Contact Us
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block text-center bg-gradient-to-r from-brand-orange-500 to-brand-orange-700 text-white px-6 py-3 rounded-full font-bold mt-5 hover:shadow-lg transition-all duration-300"
            >
              Connect With Us
            </Link>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;

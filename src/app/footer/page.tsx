"use client";
import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  UserPlus,
  Users,
  Network,
  Laptop,
  GraduationCap,
  Activity,
  ArrowUpRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden border-t border-gray-800/60 font-sans">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-br from-brand-orange-500/30 to-amber-500/0 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-gradient-to-br from-brand-blue-500/30 to-indigo-500/0 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Arihant Staffing Logo" 
                className="h-16 w-auto object-contain brightness-110" 
              />
            </div>

            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Empowering organizations through AI-driven staffing, custom HR solutions, healthcare workforce management, and strategic IT consulting across global markets.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#', hoverBg: 'hover:bg-blue-600' },
                { icon: Twitter, label: 'Twitter', href: '#', hoverBg: 'hover:bg-sky-500' },
                { icon: Facebook, label: 'Facebook', href: '#', hoverBg: 'hover:bg-blue-700' },
                { icon: Instagram, label: 'Instagram', href: '#', hoverBg: 'hover:bg-pink-600' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${social.hoverBg} hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg`}
                >
                  <social.icon className="w-4 h-4 stroke-[2]" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services - Matched exactly with Dropdown */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-white mb-6 flex items-center space-x-2 tracking-wide uppercase text-xs">
              <span className="w-1.5 h-4 bg-brand-orange-500 rounded-full"></span>
              <span>Our Services</span>
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'Staff Augmentation', href: '/staff-augmentation', icon: UserPlus },
                { name: 'HR Solutions', href: '/hr-solutions', icon: Users },
                { name: 'RPO Solutions', href: '/rpo', icon: Network },
                { name: 'IT Services & Consulting', href: '/web-development', icon: Laptop },
                { name: 'Learning & Development', href: '/learning-development-solutions', icon: GraduationCap },
                { name: 'Healthcare Solutions', href: '/healthcare', icon: Activity },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <service.icon className="w-4 h-4 mr-2.5 text-brand-blue-400 group-hover:text-brand-orange-400 transition-colors duration-200 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All Industries - Spans 2 columns to cleanly show all 12 */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-6 flex items-center space-x-2 tracking-wide uppercase text-xs">
              <span className="w-1.5 h-4 bg-brand-blue-500 rounded-full"></span>
              <span>Industries We Serve</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 text-sm">
              {[
                'Technology',
                'BFSI',
                'Healthcare',
                'Pharma & Life Sciences',
                'Engineering & R&D',
                'Manufacturing',
                'Ed-Tech',
                'Retail & E-commerce',
                'Logistics & Supply Chain',
                'Telecom',
                'Energy & Utilities',
                'Automotive'
              ].map((industry, idx) => (
                <li key={idx}>
                  <div className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group cursor-pointer">
                    <ArrowUpRight className="w-3.5 h-3.5 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-brand-orange-400 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{industry}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
        <div className="lg:col-span-1">
  <h3 className="text-base font-semibold text-white mb-6 flex items-center space-x-2 tracking-wide uppercase text-xs">
    <span className="w-1.5 h-4 bg-gradient-to-b from-brand-orange-400 to-brand-blue-500 rounded-full"></span>
    <span>Contact Us</span>
  </h3>

  <div className="space-y-4 text-sm">
    {/* Phone */}
    <div className="flex items-start space-x-3 group">
      <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg group-hover:border-brand-blue-500/50 transition-colors flex-shrink-0">
        <Phone className="w-4 h-4 text-brand-blue-400" />
      </div>
      <div>
        <a
          href="tel:+917487960042"
          className="text-white font-medium hover:text-brand-orange-400 transition-colors block"
        >
          +91 7487-960042
        </a>
        <span className="text-xs text-gray-500">India Support</span>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start space-x-3 group">
      <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg group-hover:border-brand-blue-500/50 transition-colors flex-shrink-0">
        <Mail className="w-4 h-4 text-brand-blue-400" />
      </div>
      <div>
        <a
          href="mailto:info@artifytechsolution.com"
          className="text-white font-medium hover:text-brand-orange-400 transition-colors block"
        >
          info@artifytechsolution.com
        </a>
        <span className="text-xs text-gray-500">General Inquiries</span>
      </div>
    </div>

    {/* Address */}
    
  </div>
</div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arihant Staffing  Inc. All rights reserved.</p>
          
         
        </div>

      </div>
    </footer>
  );
};

export default Footer;
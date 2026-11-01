"use client";
import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
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
  Globe2
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 relative overflow-hidden border-t border-gray-800/60 font-sans">
      {/* Premium Background Blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-br from-brand-orange-500/30 to-amber-500/0 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-gradient-to-br from-brand-blue-500/30 to-indigo-500/0 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1: Company Info */}
          <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-12">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Arihant Staffing Logo" 
                className="h-16 w-auto object-contain brightness-110" 
              />
            </div>

            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              Empowering organizations through AI-driven staffing, custom HR solutions, healthcare workforce management, and strategic IT consulting across global markets.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/arihantstaffing/posts/?feedView=all', hoverBg: 'hover:bg-blue-600' },

              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-gray-900/80 border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white ${social.hoverBg} hover:border-transparent transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-lg`}
                >
                  <social.icon className="w-4 h-4 stroke-[2]" />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Our Services */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-8 flex items-center space-x-2 tracking-widest uppercase">
              <span className="w-2 h-2 bg-brand-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
              <span>Our Services</span>
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Staff Augmentation', href: '/staff-augmentation', icon: UserPlus },
                 { name: 'Healthcare Solutions', href: '/healthcare', icon: Activity },
                { name: 'HR Solutions', href: '/hr-solutions', icon: Users },
                { name: 'IT Services & Consulting', href: '/web-development', icon: Laptop },
                { name: 'RPO Solutions', href: '/rpo', icon: Network },
                {name : 'Global Capability Center', href : '/gcc' , icon : Globe2}

               
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <service.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-brand-orange-400 transition-colors duration-300 flex-shrink-0" />
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-8 flex items-center space-x-2 tracking-widest uppercase">
              <span className="w-2 h-2 bg-gradient-to-b from-brand-orange-400 to-brand-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              <span>Contact Us</span>
            </h3>

            <div className="space-y-6 text-sm">
              {/* India Support */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-brand-blue-500/50 group-hover:bg-gray-800/50 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4 text-brand-blue-400" />
                </div>
                <div className="pt-1">
                  <a
                    href="tel:+917487960042"
                    className="text-gray-200 font-medium hover:text-brand-orange-400 transition-colors block tracking-wide"
                  >
                    +91 7487-960042
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">India Support</span>
                </div>
              </div>

              {/* US Support */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-brand-blue-500/50 group-hover:bg-gray-800/50 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4 text-brand-blue-400" />
                </div>
                <div className="pt-1">
                  <a
                    href="tel:+14696069505"
                    className="text-gray-200 font-medium hover:text-brand-orange-400 transition-colors block tracking-wide"
                  >
                    +1 (469) 606-9505
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">US Support</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-brand-blue-500/50 group-hover:bg-gray-800/50 transition-all duration-300 flex-shrink-0">
                  <Mail className="w-4 h-4 text-brand-blue-400" />
                </div>
                <div className="pt-1">
                  <a
                    href="mailto:info@arihantstaffing.com"
                    className="text-gray-200 font-medium hover:text-brand-orange-400 transition-colors block"
                  >
                    info@arihantstaffing.com
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">General Inquiries</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arihant Staffing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
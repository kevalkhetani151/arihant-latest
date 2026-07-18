"use client"
import React, { useState, useEffect } from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaFileDownload, FaCalendar, FaPhone, FaEnvelope,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, FaCrown, 
  FaRobot, FaGlobe, FaPuzzlePiece, FaFilter, FaSearch, FaTrophy, FaChartLine,
  FaAward, FaCogs, FaIndustry, FaShoppingCart, FaHeartbeat,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // Check & Status Icons
  FaCheckCircle, FaRocket, FaBounce
} from 'react-icons/fa';

import {
  // Material Design Icons for additional variety
  MdDashboard, MdPeople, MdBarChart, MdSettings, MdNotifications, MdMail
} from 'react-icons/md';

import {
  // Bootstrap Icons for even more options
  BsHeartbeat, BsPulse
} from 'react-icons/bs';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from 'next/link';

const GCCServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.classList.add('bg-gray-900', 'border-gray-700');
        navbar.classList.remove('bg-gray-800/90');
        
        if (window.scrollY > 100) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Custom Styles */}
      <style jsx>{`
        .gradient-bg { 
          background: linear-gradient(135deg, #3DBEFF 0%, #007AB8 100%); 
        }
        .gradient-text { 
          background: linear-gradient(135deg, #3DBEFF 0%, #007AB8 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
        }
        .gradient-health {
          background: linear-gradient(135deg, #0099E6 0%, #007AB8 100%);
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .banner-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, #0099E6, #007AB8);
          opacity: 0.08;
        }
        .banner-shape-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          right: -200px;
          animation: float 6s ease-in-out infinite;
        }
        .banner-shape-2 {
          width: 250px;
          height: 250px;
          bottom: -125px;
          left: -125px;
          animation: float 4s ease-in-out infinite reverse;
        }
        .banner-shape-3 {
          width: 180px;
          height: 180px;
          top: 40%;
          right: 15%;
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .medical-grid {
          background: linear-gradient(45deg, #F0FAFF 25%, transparent 25%), 
                      linear-gradient(-45deg, #F0FAFF 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #F0FAFF 75%), 
                      linear-gradient(-45deg, transparent 75%, #F0FAFF 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out; }
        .animate-fadeInScale { animation: fadeInScale 0.6s ease-out; }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
      `}</style>

      {/* Navigation */}
      <Header />

      {/* GCC Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50 overflow-hidden">
        <div className="banner-shape banner-shape-1"></div>
        <div className="banner-shape banner-shape-2"></div>
        <div className="banner-shape banner-shape-3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-100 text-brand-blue-700 px-4 py-2 rounded-full text-xs font-semibold animate-on-scroll">
                
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight animate-on-scroll">
                Build Your
                <span className="gradient-text block">Global Capability Center</span>
                with Full Ownership
              </h1>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed animate-on-scroll">
                Move beyond outsourcing and stand up a captive team that's truly yours. We design, build, and operate Global Capability Centers that give you dedicated talent, direct control, and enterprise-grade delivery from day one.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-on-scroll">
                <button className="gradient-health text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                  <span>Start Your GCC Journey</span>
                  <FaArrowRight className="text-xs" />
                </button>
                <button className="border-2 border-brand-blue-300 text-brand-blue-700 px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FaFileDownload className="text-xs" />
                  <span>Download GCC Playbook</span>
                </button>
              </div>
              
              {/* Key GCC Stats */}
             
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* GCC Dashboard Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">GCC Control Center</h3>
                    <div className="flex space-x-2">
                       <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full"></div>
                    </div>                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaUsers className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Engineering Talent Pod</div>
                        <div className="text-sm text-gray-600">18 specialists onboarded this month</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Active</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaChartLine className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Time-to-Launch Reduced</div>
                        <div className="text-sm text-gray-600">From 9 months to under 3</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">70%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaTrophy className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Team Retention</div>
                        <div className="text-sm text-gray-600">95% first-year retention rate</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Excellent</div>
                  </div>
                </div>
                
                {/* Floating GCC Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow flex items-center justify-center">
                  <FaSearch className="text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-brand-blue-500 rounded-full opacity-60 animate-pulse-slow"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-brand-blue-500 rounded-full opacity-60 animate-heartbeat"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Our GCC Services */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
        Complete <span className="text-brand-blue-600">GCC Setup & Operating Models</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
        From your first feasibility study to a fully independent global center, we provide the full spectrum of Global Capability Center services needed to build, run, and eventually transition your captive operations.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* End-to-End GCC Setup */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaUsersCog className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">End-to-End GCC Setup</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Complete center formation covering entity structuring, site selection, talent strategy, and operational readiness, backed by a dedicated setup team from kickoff to launch.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Feasibility & location strategy</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Entity setup & legal structuring</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Dedicated launch team assignment</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Real-time build progress reporting</span>
          </li>
        </ul>
      </div>

      {/* Function-Specific GCC Build */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaFilter className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Function-Specific GCC Build</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Targeted capability pods for engineering, finance, analytics, or customer operations, with flexible team sizing and a scalable ramp-up plan.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">High-priority pod formation</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Specialized skill-set sourcing</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Phased headcount expansion</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Milestone-based engagement</span>
          </li>
        </ul>
      </div>

      {/* Leadership & Governance */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaCrown className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Leadership & Governance</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Site leadership hiring and governance design, including reporting structures, board-level visibility, and a clear escalation framework for HQ.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Center head & leadership hiring</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Governance & reporting design</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">HQ alignment frameworks</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Succession & continuity planning</span>
          </li>
        </ul>
      </div>

      {/* AI-Enabled GCC Operations */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaRobot className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">AI-Enabled GCC Operations</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Modern centers built with automation, AI-assisted workflows, and analytics dashboards baked in from day one, not bolted on later.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">AI-assisted talent matching</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Automated onboarding workflows</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Predictive capacity planning</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Live operational intelligence</span>
          </li>
        </ul>
      </div>

      {/* Multi-Country GCC Expansion */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaGlobe className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Multi-Country GCC Expansion</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Multi-geography capability hubs supported by local compliance expertise, cultural onboarding, and standardized processes across every site.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Multi-site coordination</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Local regulatory compliance</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Cultural onboarding programs</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Unified global processes</span>
          </li>
        </ul>
      </div>

      {/* Hybrid Ownership Model */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaPuzzlePiece className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Hybrid Ownership Model</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">A phased path from managed build-operate to full HQ ownership, so you get momentum early and control on your own timeline.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Build-operate-transfer structuring</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Scalable ownership milestones</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Structured knowledge transfer</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Flexible exit & transition terms</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Industry Coverage */}
      <section className="py-20 medical-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              <span className="gradient-text">Industry-Specific</span> GCC Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              We build Global Capability Centers across multiple industries, bringing deep domain knowledge to every function we stand up so your center speaks the language of your business from day one.
            </p>
          </div>

          {/* Popular Industries */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaLaptopCode className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Technology</h4>
              <p className="text-sm text-gray-600">Software, AI, Cloud</p>
            </div>
            
           <div className="text-center animate-on-scroll">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
    <FaHeartbeat className="text-2xl text-white" />
  </div>
  <h4 className="font-bold text-gray-800">Healthcare</h4>
  <p className="text-sm text-gray-600">Medical, Pharma</p>
</div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Finance</h4>
              <p className="text-sm text-gray-600">Banking, FinTech</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaIndustry className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Manufacturing</h4>
              <p className="text-sm text-gray-600">Automotive, Aerospace</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaShoppingCart className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Retail</h4>
              <p className="text-sm text-gray-600">E-commerce, Consumer</p>
            </div>
            
          </div>

          {/* All Industries Available */}
          {/* <div className="bg-white rounded-3xl shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Comprehensive Industry Coverage & Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">4,000+</div>
                <div className="text-sm text-gray-600">Tech Professionals Onboarded</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">2,500+</div>
                <div className="text-sm text-gray-600">Healthcare Specialists</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">2,200+</div>
                <div className="text-sm text-gray-600">Finance Professionals</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600">Capability Centers Launched</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Why Choose Our GCC Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant GCC Services?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A proven build methodology, a modern technology stack, and dedicated on-ground teams that deliver measurable results, turning a boardroom mandate into a fully operational global center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Proven GCC Expertise</h3>
              <p className="text-gray-600">Years of hands-on experience standing up captive centers for enterprise clients, navigating complex global hiring and compliance challenges across industries.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">70% Faster Launch</h3>
              <p className="text-gray-600">Industry-leading time-to-launch with dozens of successful center builds and consistently high client satisfaction across every ownership model we offer.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
    <FaCogs className="text-2xl text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-gray-800">Advanced Technology Stack</h3>
  <p className="text-gray-600">AI-assisted talent sourcing, automated onboarding, live operational dashboards, and modern tooling built into every center we help you launch.</p>
</div>
            
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-br from-gray-50 to-brand-blue-50 rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Proven <span className="gradient-text">GCC Track Record</span>
              </h3>
              <p className="text-lg text-gray-600">Our Global Capability Center engagements deliver measurable gains in speed, quality, and cost-efficiency for organizations expanding worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">225+</div>
                <div className="text-gray-600 font-semibold">Capability Centers Launched</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">70%</div>
                <div className="text-gray-600 font-semibold">Faster Center Launch</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">65%</div>
                <div className="text-gray-600 font-semibold">Cost Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GCC Lifecycle */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">GCC Lifecycle Framework</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A structured, five-stage approach that carries you from the first strategy conversation through independent, fully-owned global operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-heartbeat"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Design</h3>
              <p className="text-gray-600 leading-relaxed">We assess your goals, market options, and org structure to design a center blueprint aligned to your business case.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Build</h3>
              <p className="text-gray-600 leading-relaxed">We stand up the entity, hire founding teams, and put core infrastructure and processes in place for launch.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
               <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 shadow-md">
  <span className="text-2xl font-bold text-white">03</span>
</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Scale</h3>
              <p className="text-gray-600 leading-relaxed">Headcount and scope expand in planned phases, keeping quality and culture consistent as the center grows.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Transform</h3>
              <p className="text-gray-600 leading-relaxed">We introduce automation and higher-value workstreams, shifting the center from execution to strategic contribution.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">05</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-heartbeat"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Grow</h3>
              <p className="text-gray-600 leading-relaxed">Ownership transitions to your team on a timeline you set, with the center positioned for independent, long-term growth.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-600 via-brand-blue-600 to-brand-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              Ready to <span className="text-brand-orange-300">Build</span> Your Global Capability Center?
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Partner with our GCC experts to launch a captive center that scales with your business and stays fully aligned with your goals. We'll take you from vision to full ownership with results that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href='/contact'>
              <button className="bg-white text-brand-blue-700 px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                contact us
              </button>
              </Link>
             
            </div>
            
            {/* Contact Info */}
           
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default GCCServicesPage;
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
  FaCheckCircle, FaRocket, FaBounce,
  FaCar,
  FaBolt,
  FaBroadcastTower,
  FaTruck,
  FaGraduationCap,
  FaUniversity,
  FaFlask
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
import { useRouter } from 'next/navigation';

const RPOServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const router = useRouter();

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

      {/* RPO Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50 overflow-hidden">
        <div className="banner-shape banner-shape-1"></div>
        <div className="banner-shape banner-shape-2"></div>
        <div className="banner-shape banner-shape-3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-brand-blue-100 text-brand-blue-700 px-6 py-3 rounded-full text-sm font-semibold animate-on-scroll">

              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight animate-on-scroll">
                Transform Your
                <span className="gradient-text block">Hiring Process</span>
                with Expert RPO
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-on-scroll">
                Accelerate your talent acquisition with our end-to-end RPO solutions. We provide dedicated teams, cutting-edge technology, and strategic expertise to scale your hiring and build high-performing organizations faster than ever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <button
      onClick={() => router.push("/contact")}
      className="gradient-health text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
    >
      <span>Start Your RPO Journey</span>
      <FaArrowRight />
    </button>
               
              </div>
              
              {/* Key RPO Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 animate-on-scroll">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">85%</div>
                  <div className="text-sm text-gray-600 font-medium">Faster Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">74%</div>
                  <div className="text-sm text-gray-600 font-medium">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* RPO Dashboard Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">RPO Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaUsers className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Expert Professionals</div>
                        <div className="text-sm text-gray-600">25+ Team Members</div>
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
                        <div className="font-bold text-gray-800">Time-to-Fill Reduced</div>
                        <div className="text-sm text-gray-600">From 45 to 18 days average</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">60%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaTrophy className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Quality Hires</div>
                        <div className="text-sm text-gray-600">96% pass probation period</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Excellent</div>
                  </div>
                </div>
                
                {/* Floating RPO Elements */}
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

      {/* Our RPO Services */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
        Complete <span className="text-brand-blue-600">RPO Solutions Suite</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
        From strategic talent acquisition to executive search, we provide comprehensive recruitment process outsourcing that transforms your hiring capabilities and drives exceptional business results.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* End-to-End RPO */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaUsersCog className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">End-to-End RPO</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Complete recruitment outsourcing including strategy development, sourcing, screening, interviewing, and onboarding with dedicated account management.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Strategic workforce planning</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Full-cycle recruitment management</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Dedicated RPO team assignment</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Real-time analytics & reporting</span>
          </li>
        </ul>
      </div>

      {/* Selective RPO */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaFilter className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Selective RPO</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Targeted recruitment for specific roles, departments, or geographic locations with flexible engagement models and scalable solutions.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">High-volume hiring campaigns</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Specialized role recruitment</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Geographic expansion support</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Project-based engagements</span>
          </li>
        </ul>
      </div>

      {/* Executive Search RPO */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaCrown className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Executive Search RPO</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Senior-level executive recruitment with comprehensive assessment, market intelligence, competitive analysis, and succession planning support.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">C-suite & VP level searches</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Leadership assessment tools</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Market intelligence research</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Succession planning support</span>
          </li>
        </ul>
      </div>

      {/* Technology-Enabled RPO */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaRobot className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">AI-Powered RPO</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Next-generation recruitment leveraging AI-driven sourcing, automated screening, predictive analytics, and machine learning for optimal candidate matching.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">AI candidate matching algorithms</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Automated screening workflows</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Predictive hiring analytics</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Real-time talent intelligence</span>
          </li>
        </ul>
      </div>

      {/* Global RPO */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaGlobe className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Global RPO</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Multi-country recruitment with local market expertise, compliance management, cultural alignment, and standardized global processes for international expansion.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Multi-country operations</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Local compliance expertise</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Cultural assessment tools</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Standardized global processes</span>
          </li>
        </ul>
      </div>

      {/* Hybrid RPO */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaPuzzlePiece className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Hybrid RPO Model</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Flexible combination of internal recruiting teams and external RPO support for optimal cost-effectiveness, enhanced control, and scalable operations.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Blended team approach</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Scalable support model</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Knowledge transfer programs</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Flexible engagement terms</span>
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
              <span className="gradient-text">Industry-Specific</span> RPO Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              We provide specialized RPO services across multiple industries with deep domain knowledge and industry-specific recruitment expertise to meet your unique business challenges.
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
          <div className="bg-white rounded-3xl shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Comprehensive Industry Coverage & Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">800+</div>
                <div className="text-sm text-gray-600">Tech Professionals Placed</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">200+</div>
                <div className="text-sm text-gray-600">Healthcare Specialists</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">250+</div>
                <div className="text-sm text-gray-600">Finance Professionals</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">71+</div>
                <div className="text-sm text-gray-600">Executive Placements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our RPO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant RPO Services?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Our proven methodology, advanced technology platform, and dedicated expert teams deliver measurable results that transform your hiring capabilities and drive exceptional business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Proven RPO Expertise</h3>
              <p className="text-gray-600">5+ years of recruitment process outsourcing experience with enterprise-level clients and complex global hiring challenges across all industries.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">85% Faster Hiring</h3>
              <p className="text-gray-600">Industry-leading time-to-fill reduction with thousands of successful placements and consistently high client satisfaction scores across all engagement models.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
    <FaCogs className="text-2xl text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-gray-800">Advanced Technology Stack</h3>
  <p className="text-gray-600">AI-powered sourcing platform, automated workflows, predictive analytics, and cutting-edge recruitment technology for superior candidate matching and process efficiency.</p>
</div>
            
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-br from-gray-50 to-brand-blue-50 rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Proven <span className="gradient-text">RPO Success Record</span>
              </h3>
              <p className="text-lg text-gray-600">Our RPO services deliver quantifiable improvements in hiring efficiency, quality, and cost-effectiveness for organizations worldwide</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">1321+</div>
                <div className="text-gray-600 font-semibold">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">60%</div>
                <div className="text-gray-600 font-semibold">Time-to-Fill Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">74%</div>
                <div className="text-gray-600 font-semibold">Cost Per Hire Savings</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">98%</div>
                <div className="text-gray-600 font-semibold">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RPO Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">RPO Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A proven 4-step methodology that ensures seamless transition, rapid deployment, optimal results, and continuous improvement throughout our strategic partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-heartbeat"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Discovery & Strategy Development</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive assessment of hiring needs, current processes, organizational culture, and strategic objectives to design optimal RPO solution architecture.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Team Setup & Technology Integration</h3>
              <p className="text-gray-600 leading-relaxed">Deployment of dedicated recruitment specialists with advanced technology platform integration and seamless process alignment for immediate operational efficiency.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Launch & Full-Scale Execution</h3>
              <p className="text-gray-600 leading-relaxed">Complete recruitment operations activation with active candidate sourcing, screening, interviewing, and comprehensive hiring process management at scale.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Performance & Continuous Optimization</h3>
              <p className="text-gray-600 leading-relaxed">Real-time performance monitoring with advanced analytics, KPI tracking, regular optimization reviews, and strategic enhancements for sustained excellence.</p>
            </div>
            
          </div>
        </div>
      </section>
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 animate-on-scroll text-gray-800">
              Industries We <span className="text-brand-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Our staff augmentation solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>
      
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
        {/* Technology */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaLaptopCode className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Technology</h4>
        </div>
        
        {/* BFSI */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaUniversity className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">BFSI</h4>
        </div>
      
        {/* FMCG */}
       
        
        {/* Healthcare */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaHeartbeat className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Healthcare</h4>
        </div>
      
        {/* Pharma */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaFlask className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Pharma & Life Sciences</h4>
        </div>
      
        {/* Engineering */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaCogs className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Engineering & R&D</h4>
        </div>
        
        {/* Manufacturing */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaIndustry className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Manufacturing</h4>
        </div>
        
        {/* Ed-Tech */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaGraduationCap className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Ed-Tech</h4>
        </div>
        
        {/* E-commerce */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaShoppingCart className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Retail & E-commerce</h4>
        </div>
      
        {/* Retail */}
        
      
        {/* Real Estate */}
        
      
        {/* Logistics */}
        <div className="text-center animate-on-scroll">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
            <FaTruck className="text-2xl text-white" />
          </div>
          <h4 className="font-semibold text-gray-800">Logistics & Supply Chain</h4>
        </div>
        <div className="text-center animate-on-scroll">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
          <FaBroadcastTower className="text-2xl text-white" />
        </div>
        <h4 className="font-semibold text-gray-800">Telecom</h4>
      </div>
      
      <div className="text-center animate-on-scroll">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
          <FaBolt className="text-2xl text-white" />
        </div>
        <h4 className="font-semibold text-gray-800">Energy & Utilities</h4>
      </div>
      <div className="text-center animate-on-scroll">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
          <FaCar className="text-2xl text-white" />
        </div>
        <h4 className="font-semibold text-gray-800">Automotive</h4>
      </div>
        
      </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-600 via-brand-blue-600 to-brand-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              Ready to <span className="text-brand-orange-300">Transform</span> Your Hiring?
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Partner with our RPO experts to build a world-class talent acquisition function that scales with your business growth. We'll transform your hiring capabilities from day one and deliver exceptional results that drive sustainable success.
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

export default RPOServicesPage;

"use client"
import React, { useState, useEffect } from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaCalculator, FaPhone, FaEnvelope, FaCalendar,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, 
  FaHeadset, FaDatabase, FaBullhorn, FaCog, FaGlobe, FaRocket,
  // BPO Specific Icons
  FaChartLine, FaClock, FaThumbsUp, FaAward, FaShieldAlt,
  // Industry Icons
  FaUniversity, FaHeartbeat, FaShoppingCart, FaPlane, FaBuilding,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // General Icons
  FaCheckCircle
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from 'next/link';

const BPOServicesPage = () => {
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
        .gradient-bpo {
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
        .bpo-grid {
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
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      `}</style>

        <Header />

      {/* BPO Banner Section */}
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
                Streamline Your
                <span className="gradient-text block">Business Operations</span>
                with Expert BPO
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-on-scroll">
                Transform your business efficiency with comprehensive Business Process Outsourcing solutions. We handle your non-core operations so you can focus on strategic growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Link href='contact'>
                <button className="gradient-bpo text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2">
                  <span>Start BPO Journey</span>
                  <FaArrowRight />
                </button>
                </Link>
               
              </div>
              
              {/* Key BPO Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 animate-on-scroll">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">60%</div>
                  <div className="text-sm text-gray-600 font-medium">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Operations Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Service Quality</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* BPO Operations Dashboard Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">BPO Operations Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaHeadset className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Customer Support</div>
                        <div className="text-sm text-gray-600">24/7 multilingual support</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Active</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaCalculator className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Finance & Accounting</div>
                        <div className="text-sm text-gray-600">Invoice processing & reporting</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Running</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaDatabase className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Data Processing</div>
                        <div className="text-sm text-gray-600">Real-time data management</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Optimal</div>
                  </div>
                </div>
                
                {/* Floating BPO Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow flex items-center justify-center">
                  <FaCog className="text-white animate-spin-slow" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-brand-blue-500 rounded-full opacity-60 animate-pulse-slow"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow" style={{animationDelay: '1.5s'}}></div>
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

      {/* Our BPO Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Complete <span className="gradient-text">BPO Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              From customer support to back-office operations, we provide comprehensive BPO solutions that optimize your business processes and drive operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Customer Support Services */}
            <div className="service-card animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border-2 border-brand-blue-100 rounded-3xl p-8 hover:border-brand-blue-300 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaHeadset className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Customer Support Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">24/7 multilingual customer support across all channels including phone, email, chat, and social media with advanced CRM integration.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">24/7 omnichannel support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Multilingual customer service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Help desk & technical support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Live chat & social media support</span>
                </li>
              </ul>
            </div>

            {/* Finance & Accounting */}
            <div className="service-card animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border-2 border-brand-blue-100 rounded-3xl p-8 hover:border-brand-blue-300 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaCalculator className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Finance & Accounting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive financial operations including accounts payable/receivable, bookkeeping, financial reporting, and tax preparation services.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Accounts payable & receivable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Financial reporting & analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Invoice processing & management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Tax preparation & compliance</span>
                </li>
              </ul>
            </div>

            {/* Data Processing & Management */}
            <div className="service-card animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-orange-50 border-2 border-brand-blue-100 rounded-3xl p-8 hover:border-brand-blue-300 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <FaDatabase className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Processing & Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Accurate data entry, processing, and management services with advanced quality control and real-time reporting capabilities.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">High-volume data entry</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Data cleansing & validation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Database management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Real-time reporting & analytics</span>
                </li>
              </ul>
            </div>

            {/* Digital Marketing Support */}
            <div className="service-card animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border-2 border-brand-blue-100 rounded-3xl p-8 hover:border-brand-blue-300 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaBullhorn className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Marketing Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Complete digital marketing operations including social media management, content creation, SEO, and lead generation campaigns.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Social media management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Content creation & copywriting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">SEO & digital advertising</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Lead generation & nurturing</span>
                </li>
              </ul>
            </div>

            {/* Human Resources Support */}
            <div className="service-card animate-on-scroll bg-gradient-to-br from-brand-orange-50 to-brand-orange-50 border-2 border-brand-orange-100 rounded-3xl p-8 hover:border-brand-orange-300 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <FaUsersCog className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Human Resources Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">End-to-end HR operations including recruitment, payroll processing, benefits administration, and employee engagement programs.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Recruitment & screening</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Payroll processing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Benefits administration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Employee onboarding</span>
                </li>
              </ul>
            </div>

            {/* IT & Technical Support */}
            <div className="service-card animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border-2 border-brand-blue-100 rounded-3xl p-8 hover:border-brand-blue-300 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaLaptopCode className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">IT & Technical Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive IT support services including help desk, system monitoring, software testing, and technical documentation.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">24/7 IT help desk support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">System monitoring & maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Software testing & QA</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-brand-blue-500 mt-1" />
                  <span className="text-gray-700">Technical documentation</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BPO Benefits & ROI */}
    

      {/* Why Choose Our BPO Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant BPO Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Our proven methodology, experienced team, and technology-driven approach make us the preferred BPO partner for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">12+ Years BPO Expertise</h3>
              <p className="text-gray-600">Over a decade of experience in delivering world-class business process outsourcing solutions across industries.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Service Delivery</h3>
              <p className="text-gray-600">Multi-location service centers providing 24/7 support with multilingual capabilities and cultural understanding.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-orange-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Security & Compliance</h3>
              <p className="text-gray-600">ISO certified processes with robust security protocols ensuring complete data protection and regulatory compliance.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* BPO Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">BPO Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A proven 5-step methodology that ensures smooth transition and optimal performance of your outsourced processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Process Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Comprehensive evaluation of current processes to identify optimization opportunities.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Solution Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Custom BPO solution design aligned with your business objectives and requirements.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Transition Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Detailed transition plan with minimal disruption to ongoing operations.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Phased implementation with continuous monitoring and quality assurance.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">05</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Optimization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Continuous improvement and optimization based on performance metrics.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 animate-on-scroll text-gray-800">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Our BPO solutions are tailored to meet the unique operational needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaUniversity className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Banking & Finance</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaHeartbeat className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Healthcare</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaShoppingCart className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">E-commerce</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaPlane className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Travel & Hospitality</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Telecommunications</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaBuilding className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Real Estate</h4>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-600 via-brand-blue-600 to-brand-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              Ready to <span className="text-brand-orange-300">Transform</span> Your Operations?
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Discover how our BPO solutions can reduce costs, improve efficiency, and accelerate your business growth. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href='contact'>
              <button className="bg-white text-brand-blue-700 px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                Get Free BPO Assessment
              </button>
              </Link>
             
            </div>
            
            {/* Contact Info */}
            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <FaPhone className="text-2xl text-brand-orange-300" />
                <div>
                  <div className="font-semibold">BPO Specialists</div>
                  <div className="opacity-80">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-2xl text-brand-orange-300" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="opacity-80">bpo@arihantstaffing.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaCalendar className="text-2xl text-brand-orange-300" />
                <div>
                  <div className="font-semibold">Schedule Assessment</div>
                  <div className="opacity-80">Free Consultation</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default BPOServicesPage;

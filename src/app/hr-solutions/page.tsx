"use client"
import React, { useState, useEffect } from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaCalendarAlt, FaPhone, FaEnvelope, FaCalendar,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, 
  FaSearch, FaChartLine, FaHandshake, FaShieldAlt, FaCalculator, FaGraduationCap,
  FaClipboardList, FaStar, FaAward, FaClock,
  // Industry Icons
  FaHeartbeat, FaIndustry, FaShoppingCart,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // Check & Status Icons
  FaCheckCircle,
  FaUniversity,
  FaFlask,
  FaCogs,
  FaTruck,
  FaBroadcastTower,
  FaBolt,
  FaCar
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from 'next/link';

const HRSolutionsPage = () => {
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
        .gradient-hr {
          background: linear-gradient(135deg, #3DBEFF 0%, #FAA443 100%);
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
          background: linear-gradient(45deg, #3DBEFF, #FAA443);
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
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out; }
        .animate-fadeInScale { animation: fadeInScale 0.6s ease-out; }
      `}</style>

      {/* Header */}
       <Header />

      {/* HR Solutions Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-blue-50 via-brand-orange-50 to-brand-blue-50 overflow-hidden">
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
                <span className="gradient-text block">HR Operations</span>
                with Expert Solutions
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-on-scroll">
                Comprehensive human resource management solutions that streamline your HR processes, enhance employee engagement, and drive organizational growth through strategic people management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Link href='contact'>
               <button className="bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2">
  <span>Start HR Transformation</span>
  <FaArrowRight />
</button>
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 animate-on-scroll">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">550+</div>
                  <div className="text-sm text-gray-600 font-medium">Employees Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">94%</div>
                  <div className="text-sm text-gray-600 font-medium">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">60%</div>
                  <div className="text-sm text-gray-600 font-medium">Time Saved on HR Tasks</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* HR Solutions Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">HR Solutions Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaUsers className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Talent Acquisition</div>
                        <div className="text-sm text-gray-600">End-to-end recruitment & staffing</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">100% Coverage</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaClipboardList className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">HR Compliance</div>
                        <div className="text-sm text-gray-600">Policies, contracts & legal guidance</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Always Updated</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaHandshake className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Employee Engagement</div>
                        <div className="text-sm text-gray-600">Performance, retention & culture</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">High Impact</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-brand-orange-500 rounded-full opacity-60 animate-pulse-slow"></div>
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

      {/* Our HR Services */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
        Complete <span className="text-brand-blue-600">HR Service Suite</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
        From Talent Acquisition To Employee Development, We Provide Comprehensive HR Solutions That Cover Every Aspect Of Human Resource Management
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Talent Acquisition */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaSearch className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Talent Acquisition & Recruitment</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">End-to-end recruitment services from job posting to successful placement with comprehensive candidate screening and assessment.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Job posting and advertising across multiple platforms</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Comprehensive candidate screening and interviews</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Background verification and reference checks</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Onboarding process management</span>
          </li>
        </ul>
      </div>

      {/* Performance Management */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaChartLine className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Performance Management</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive performance evaluation systems with goal setting, regular reviews, and employee development programs.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Performance appraisal system design</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Goal setting and KPI tracking</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">360-degree feedback implementation</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Career development planning</span>
          </li>
        </ul>
      </div>

      {/* Employee Relations */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaHandshake className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Employee Relations</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Building positive workplace relationships through effective communication, conflict resolution, and employee engagement programs.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Conflict resolution and mediation</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Employee engagement surveys</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Communication strategy development</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Team building and culture initiatives</span>
          </li>
        </ul>
      </div>

      {/* Compliance Management */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaShieldAlt className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Compliance & Policy Management</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Ensure legal compliance with labor laws and regulations while developing comprehensive HR policies and procedures.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Labor law compliance auditing</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">HR policy development and updates</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Documentation and record keeping</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Risk assessment and mitigation</span>
          </li>
        </ul>
      </div>

      {/* Payroll Management */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaCalculator className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Payroll & Benefits Management</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Accurate payroll processing and comprehensive benefits administration to ensure employee satisfaction and compliance.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Automated payroll processing</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Tax calculation and filing</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Benefits enrollment and management</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Leave management and tracking</span>
          </li>
        </ul>
      </div>

      {/* Training & Development */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaGraduationCap className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Training & Development</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive learning and development programs to enhance employee skills and drive organizational growth.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Skills assessment and gap analysis</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Custom training program development</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Leadership development programs</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Certification and accreditation support</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Why Choose Our HR Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant HR Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Our proven track record and comprehensive approach make us the preferred HR partner for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
         <div className="animate-on-scroll bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
    <FaAward className="text-2xl text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-gray-800">14+ Years Experience</h3>
  <p className="text-gray-600">Decade-long expertise in HR management across diverse industries and company sizes.</p>
</div>
            
            <div className="animate-on-scroll bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">1250+ Employees Managed</h3>
              <p className="text-gray-600">Successfully managing HR operations for hundreds of employees across multiple organizations.</p>
            </div>
            
            <div className="animate-on-scroll bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">24/7 HR Support</h3>
              <p className="text-gray-600">Round-the-clock HR support to address urgent matters and ensure smooth operations.</p>
            </div>
            
          </div>

          {/* ROI Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Measurable <span className="gradient-text">Business Impact</span>
              </h3>
              <p className="text-lg text-gray-600">Our HR solutions deliver tangible results that drive business growth</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">60%</div>
                <div className="text-gray-600 font-semibold">Reduction in HR Administrative Time</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">40%</div>
                <div className="text-gray-600 font-semibold">Faster Recruitment Process</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">25%</div>
                <div className="text-gray-600 font-semibold">Improvement in Employee Retention</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">35%</div>
                <div className="text-gray-600 font-semibold">Cost Savings on HR Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">HR Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A systematic approach to HR transformation that ensures smooth implementation and maximum value delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center animate-on-scroll">
  <div className="relative mb-8">
    <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 shadow-md">
      <span className="text-2xl font-bold text-white">01</span>
    </div>
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
  </div>
  <h3 className="text-xl font-bold mb-4 text-gray-800">HR Assessment & Analysis</h3>
  <p className="text-gray-600 leading-relaxed">Comprehensive evaluation of your current HR processes, systems, and challenges to identify improvement opportunities.</p>
</div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Custom Strategy Development</h3>
              <p className="text-gray-600 leading-relaxed">Design tailored HR strategies and solutions that align with your business objectives and organizational culture.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">System Implementation</h3>
              <p className="text-gray-600 leading-relaxed">Deploy HR systems and processes with minimal disruption, including staff training and change management.</p>
            </div>
            <div className="text-center animate-on-scroll">
  <div className="relative mb-8">
    <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 shadow-md">
      <span className="text-2xl font-bold text-white">04</span>
    </div>
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
  </div>
  <h3 className="text-xl font-bold mb-4 text-gray-800">Ongoing Support & Optimization</h3>
  <p className="text-gray-600 leading-relaxed">Continuous monitoring, performance tracking, and optimization to ensure maximum efficiency and ROI.</p>
</div>
            
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
      <section className="py-20 bg-gradient-to-br from-brand-blue-600 via-brand-orange-600 to-brand-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              Ready to Transform Your <span className="text-brand-orange-300">HR Operations?</span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Let's discuss how our comprehensive HR solutions can streamline your operations, enhance employee satisfaction, and drive business growth. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href='contact'>
              <button className="bg-white text-brand-blue-700 px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                Get Free HR Consultation
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

export default HRSolutionsPage;

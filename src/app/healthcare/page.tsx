"use client"
import React, { useState, useEffect } from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaFileDownload, FaCalendar, FaPhone, FaEnvelope,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, FaCrown, 
  FaRobot, FaGlobe, FaPuzzlePiece, FaFilter, FaSearch, FaTrophy, FaChartLine,
  FaAward, FaCogs, FaIndustry, FaShoppingCart, FaHeartbeat, FaChalkboardTeacher,
  FaComments, FaGraduationCap, FaHandshake, FaUserNurse, FaUserMd, FaStethoscope,
  FaFlask, FaHospital, FaBed, FaAmbulance,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // Check & Status Icons
  FaCheckCircle, FaRocket, FaBounce,
  FaCar,
  FaBolt,
  FaBroadcastTower,
  FaTruck,
  FaUniversity
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

const HealthcareStaffingPage = () => {
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

      {/* Healthcare Staffing Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50 overflow-hidden">
        <div className="banner-shape banner-shape-1"></div>
        <div className="banner-shape banner-shape-2"></div>
        <div className="banner-shape banner-shape-3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-blue-100 text-brand-blue-700 px-4 py-2 rounded-full text-xs font-semibold animate-on-scroll">
                <span>Healthcare Staffing Solutions</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight animate-on-scroll">
               Connecting Healthcare Professionals
                <span className="gradient-text block">Powering Care.</span>
                 Empowering Better Patient Care. Nationwide.
              </h1>
              
             <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-justify">
  We connect highly qualified healthcare, allied health, clinical research,
  life sciences, and biomedical professionals with hospitals, healthcare
  systems, laboratories, pharmaceutical organizations, and medical device
  companies across the United States. Whether you're a healthcare professional
  seeking your next opportunity or a healthcare organization building a
  high-performing workforce, our specialized recruiters deliver the right
  talent with speed, quality, and compliance.
</p>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-on-scroll">
                <button className="gradient-health text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                  <span>Browse Open Positions</span>
                  <FaArrowRight className="text-xs" />
                </button>
                <button className="border-2 border-brand-blue-300 text-brand-blue-700 px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FaFileDownload className="text-xs" />
                  <span>Request Staffing Support</span>
                </button>
              </div>
              
             
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Staffing Dashboard Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Placement Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaUserNurse className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">ICU Travel RN Openings</div>
                      
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
                        <div className="font-bold text-gray-800">Time-to-Placement</div>
                        
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Fast</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaTrophy className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Clinician Retention</div>
                        
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">92%</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow flex items-center justify-center">
                  <FaHeartbeat className="text-white" />
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

      {/* Our Healthcare Staffing Services */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
        Complete <span className="text-brand-blue-600">Healthcare Staffing Coverage</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
        From bedside patient care to clinical research and biomedical engineering, Arihant Staffing delivers specialized healthcare talent across every stage of the healthcare ecosystem.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Travel Nursing */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaUserNurse className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Travel Nursing</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">We provide experienced travel nurses for short-term, long-term, rapid response, seasonal, and crisis assignments across the United States.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Registered Nurse (RN)</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">ICU / Critical Care</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Emergency Room / Trauma</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Labor & Delivery</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Operating Room / PACU</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">House Supervisor / DON</span>
          </li>
        </ul>
      </div>

      {/* Allied Health & Therapy */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaStethoscope className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Allied Health & Therapy</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Credentialed allied health professionals across therapy, imaging, laboratory, and pharmacy, available for short- and long-term contracts, permanent placement, or travel assignments.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Physical / Occupational Therapist</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Speech Language Pathologist</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Respiratory Therapist (CRT/RRT)</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">CT / MRI / Radiology Tech</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Cath Lab / CVOR Tech</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Pharmacist / Pharmacy Tech</span>
          </li>
        </ul>
      </div>

      {/* Clinical & Scientific Staffing */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaFlask className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Clinical & Scientific Staffing</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Premier consultants spanning the full clinical and scientific spectrum, supporting drug development, research, and regulatory work for pharmaceutical and life sciences organizations.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Clinical Research Associate</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Clinical Data Management</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Regulatory Affairs Consultant</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Biostatistician</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Drug Safety / Pharmacovigilance</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Medical Writer</span>
          </li>
        </ul>
      </div>

      {/* Biomedical & Medical Devices */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaCogs className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Biomedical & Medical Devices</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Engineering and technical talent supporting the design, validation, manufacturing, and field service of medical devices and biomedical equipment.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Biomedical / Clinical Engineer</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Design Verification & Validation Engineer</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Regulatory Affairs Specialist (FDA/CE)</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Quality Engineer, Medical Devices</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Field Service Engineer</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Risk Management Specialist (ISO 14971)</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Facilities We Serve */}
      <section className="py-20 medical-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              <span className="gradient-text">Facilities</span> We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              We staff across the full care continuum, placing professionals in facility types that range from acute care hospitals to community-based clinics.
            </p>
          </div>

          {/* Popular Facility Types */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaHospital className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Acute Care Centers</h4>
              <p className="text-sm text-gray-600">Hospitals, Trauma Centers</p>
            </div>
            
           <div className="text-center animate-on-scroll">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
    <FaBed className="text-2xl text-white" />
  </div>
  <h4 className="font-bold text-gray-800">Skilled Nursing & LTC</h4>
  <p className="text-sm text-gray-600">SNF, Long-Term Care</p>
</div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaHeartbeat className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Rehabilitation</h4>
              <p className="text-sm text-gray-600">Rehab & Behavioral Health</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaAmbulance className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Urgent Care</h4>
              <p className="text-sm text-gray-600">Urgent & Community Care</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Home Health</h4>
              <p className="text-sm text-gray-600">Home & Community Health</p>
            </div>
            
          </div>

          {/* Full Coverage Metrics */}
          {/* <div className="bg-white rounded-3xl shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Nationwide Reach & Placement Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">8,000+</div>
                <div className="text-sm text-gray-600">Clinicians Placed</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">1,200+</div>
                <div className="text-sm text-gray-600">Allied Health Professionals</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">600+</div>
                <div className="text-sm text-gray-600">Clinical & Scientific Consultants</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">300+</div>
                <div className="text-sm text-gray-600">Biomedical Engineers</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant Healthcare Staffing?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A dedicated specialist team, deep credentialing expertise, and coverage across the entire healthcare talent spectrum, from bedside to bench to biomedical engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Specialized Healthcare Recruiting</h3>
              <p className="text-gray-600">Our recruiters focus exclusively on healthcare staffing, enabling faster placements and stronger candidate matches.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Nationwide Coverage</h3>
              <p className="text-gray-600">Assignments and openings across all 50 states, so facilities and clinicians both get access to the widest possible range of opportunities.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
    <FaCheckCircle className="text-2xl text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-gray-800">Full Credentialing Support</h3>
  <p className="text-gray-600">Our team manages licensure, compliance, and credentialing end to end, so clinicians can focus on patient care, not paperwork.</p>
</div>
            
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-br from-gray-50 to-brand-blue-50 rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Our <span className="gradient-text">Track Record</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Consistent, measurable results across nursing, allied health, clinical, and biomedical placements for healthcare organizations nationwide.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

  <div className="text-center">
    <div className="text-5xl font-black gradient-text mb-2">
      50
    </div>
    <div className="text-gray-600 font-semibold">
      States Covered
    </div>
  </div>

  <div className="text-center">
    <div className="text-3xl lg:text-4xl font-black gradient-text mb-2 leading-tight">
       72 hours
    </div>
    <div className="text-gray-600 font-semibold">
      Average Time-to-Placement
    </div>
  </div>

  <div className="text-center">
    <div className="text-5xl font-black gradient-text mb-2">
      92%
    </div>
    <div className="text-gray-600 font-semibold">
      Assignment Completion Rate
    </div>
  </div>

</div>
          </div>
        </div>
      </section>

      {/* Our Staffing Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">Staffing Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A structured five-step approach that gets clinicians into the right assignment quickly, without cutting corners on compliance.
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
              <h3 className="text-xl font-bold mb-4 text-gray-800">Understand</h3>
              <p className="text-gray-600 leading-relaxed">We start with a conversation to understand your specialty, availability, and what you're looking for in your next assignment.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Match</h3>
              <p className="text-gray-600 leading-relaxed">Our specialists match you against open roles that fit your specialty, location preferences, and career goals.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
               <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 shadow-md">
  <span className="text-2xl font-bold text-white">03</span>
</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Credential</h3>
              <p className="text-gray-600 leading-relaxed">We handle licensure verification, compliance documentation, and facility-specific credentialing requirements.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Deploy</h3>
              <p className="text-gray-600 leading-relaxed">You're placed into your assignment with a clear start date, facility orientation, and a direct line to your recruiter.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">05</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-heartbeat"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Support</h3>
              <p className="text-gray-600 leading-relaxed">Ongoing support throughout your assignment, with an eye on your next opportunity when it's time to move on.</p>
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
              Ready to <span className="text-brand-orange-300">Find</span> Your Next Assignment?
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Whether you're a clinician ready for your next opportunity or a facility building out your care team, our staffing specialists are ready to help.
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

export default HealthcareStaffingPage;
"use client"
import React, { useState, useEffect } from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaFileDownload, FaCalendar, FaPhone, FaEnvelope,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, FaCrown, 
  FaRobot, FaGlobe, FaPuzzlePiece, FaFilter, FaSearch, FaTrophy, FaChartLine,
  FaAward, FaCogs, FaIndustry, FaShoppingCart, FaHeartbeat, FaChalkboardTeacher,
  FaComments, FaGraduationCap, FaHandshake,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // Check & Status Icons
  FaCheckCircle, FaRocket, FaBounce,
  FaCar,
  FaBolt,
  FaBroadcastTower,
  FaTruck,
  FaFlask,
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

const LearningDevelopmentPage = () => {
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

      {/* L&D Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50 overflow-hidden">
        <div className="banner-shape banner-shape-1"></div>
        <div className="banner-shape banner-shape-2"></div>
        <div className="banner-shape banner-shape-3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
             
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight animate-on-scroll">
                Empowering People.
                <span className="gradient-text block">Strengthening Organizations.</span>
                Building Future Leaders.
              </h1>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed animate-on-scroll">
                We help organizations, professionals, and students unlock their potential through customized learning experiences, leadership development, coaching, and workforce readiness programs. Our practical, industry-focused training enables individuals and teams to perform with confidence in today's evolving business environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-on-scroll">
                <button className="gradient-health text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                  <span>Explore Our Programs</span>
                  <FaArrowRight className="text-xs" />
                </button>
                <button className="border-2 border-brand-blue-300 text-brand-blue-700 px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FaFileDownload className="text-xs" />
                  <span>Download L&D Brochure</span>
                </button>
              </div>
              
              {/* Key L&D Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 animate-on-scroll">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black gradient-text">500+</div>
                  <div className="text-xs text-gray-600 font-medium">Programs Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black gradient-text">10K+</div>
                  <div className="text-xs text-gray-600 font-medium">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-black gradient-text">95%</div>
                  <div className="text-xs text-gray-600 font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Learning Impact Dashboard Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Learning Impact Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaChalkboardTeacher className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Leadership Cohort</div>
                        <div className="text-sm text-gray-600">24 first-time managers enrolled</div>
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
                        <div className="font-bold text-gray-800">Skill Assessment Scores</div>
                        <div className="text-sm text-gray-600">Up from 68% to 92% post-training</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">92%</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaTrophy className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Employee Engagement</div>
                        <div className="text-sm text-gray-600">Up 35% after coaching program</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">+35%</div>
                  </div>
                </div>
                
                {/* Floating L&D Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow flex items-center justify-center">
                  <FaGraduationCap className="text-white" />
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

      {/* Our L&D Services */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
        Complete <span className="text-brand-blue-600">Learning & Development Suite</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
        From boardroom-ready leadership programs to campus-to-corporate career readiness, our practical, outcome-driven training equips people at every stage of their professional journey.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Corporate Learning & Development */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaUsersCog className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Corporate Learning & Development</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">We partner with startups, SMEs, and multinational organizations to build high-performing teams through customized training solutions.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Leadership development</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">First-time manager training</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Executive coaching</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Change management</span>
          </li>
        </ul>
      </div>

      {/* Sales & Customer Excellence */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaTrophy className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Sales & Customer Excellence</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Equip your sales and service teams with practical skills that drive measurable business outcomes and stronger customer relationships.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Consultative & B2B selling</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Key account management</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Customer service excellence</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Negotiation skills</span>
          </li>
        </ul>
      </div>

      {/* Hiring & Talent Development */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaUserPlus className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Hiring & Talent Development</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Helping organizations attract, develop, and retain exceptional talent through structured hiring and growth frameworks.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Competency-based interviewing</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Assessment centers</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Succession planning</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">High-potential employee development</span>
          </li>
        </ul>
      </div>

      {/* Industry-Specific Training */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaIndustry className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Industry-Specific Training</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Customized learning solutions built around the real-world demands of your sector, from compliance to customer-facing skills.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Healthcare & pharmaceuticals</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Banking & financial services</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Manufacturing & logistics</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Retail & e-commerce</span>
          </li>
        </ul>
      </div>

      {/* Professional Skills Development */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaLaptopCode className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Skills Development</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Future-ready skills that keep today's workforce sharp, adaptable, and ready to solve real business problems.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Business communication</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Advanced Excel & business analytics</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Critical thinking & problem solving</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Project management</span>
          </li>
        </ul>
      </div>

      {/* Student Career Development */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaGraduationCap className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Student Career Development</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Bridging the gap between education and employment with hands-on preparation for the world of work.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Career counselling & planning</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Resume building & LinkedIn optimization</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Mock interviews & group discussions</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Campus-to-corporate readiness</span>
          </li>
        </ul>
      </div>

      {/* Coaching & Mentoring */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaHandshake className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Coaching & Mentoring</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Personalized, one-on-one coaching for professionals, managers, entrepreneurs, and students at every career stage.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Leadership & executive coaching</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Career & performance coaching</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Business coaching for entrepreneurs</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Student mentorship</span>
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
              <span className="gradient-text">Industries</span> We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Our training programs are built around real workplace scenarios across a wide range of industries, from healthcare to technology to financial services.
            </p>
          </div>

          {/* Popular Industries */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaLaptopCode className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Information Technology</h4>
              <p className="text-sm text-gray-600">Software, IT Services</p>
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
              <h4 className="font-bold text-gray-800">Banking & Finance</h4>
              <p className="text-sm text-gray-600">BFSI, Insurance</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaIndustry className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Manufacturing</h4>
              <p className="text-sm text-gray-600">Engineering, Logistics</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaShoppingCart className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Retail & Hospitality</h4>
              <p className="text-sm text-gray-600">E-commerce, BPO</p>
            </div>
            
          </div>

          {/* All Industries Available */}
          <div className="bg-white rounded-3xl shadow-xl p-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Comprehensive Reach & Program Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">10,000+</div>
                <div className="text-sm text-gray-600">Professionals Trained</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600">Corporate Programs</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600">Certified Trainers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant Learning & Development?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Customized programs, experienced trainers, and a delivery model built around real learning outcomes, not just hours in a classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Customized Learning Solutions</h3>
              <p className="text-gray-600">Every program is tailored to your organization's goals, culture, and skill gaps, not delivered off a generic template.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaChalkboardTeacher className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Experienced Industry Trainers</h3>
              <p className="text-gray-600">Interactive, practical workshops led by trainers with real industry experience, delivered online, onsite, or hybrid.</p>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
    <FaChartLine className="text-2xl text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-4 text-gray-800">Measurable Outcomes</h3>
  <p className="text-gray-600">Clear learning metrics and post-training coaching support ensure skills actually translate into on-the-job performance.</p>
</div>
            
          </div>

          {/* Success Metrics */}
          {/* <div className="bg-gradient-to-br from-gray-50 to-brand-blue-50 rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Our <span className="gradient-text">Mission</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">To empower individuals and organizations through practical learning, transformational leadership, and continuous professional development.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Programs Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">10K+</div>
                <div className="text-gray-600 font-semibold">Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">95%</div>
                <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">85%</div>
                <div className="text-gray-600 font-semibold">Repeat & Referral Clients</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">Learning Delivery Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A structured five-step process that turns a learning need into lasting behavior change, on the floor, not just in the workshop.
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
              <h3 className="text-xl font-bold mb-4 text-gray-800">Assess</h3>
              <p className="text-gray-600 leading-relaxed">We run a learning needs analysis to pinpoint real skill gaps, not assumed ones, across roles and teams.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Design</h3>
              <p className="text-gray-600 leading-relaxed">Programs are custom-built around your industry, audience, and business context, not pulled off a shelf.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
               <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 shadow-md">
  <span className="text-2xl font-bold text-white">03</span>
</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Deliver</h3>
              <p className="text-gray-600 leading-relaxed">Interactive, practical sessions delivered online, onsite, or hybrid by trainers with real industry background.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Reinforce</h3>
              <p className="text-gray-600 leading-relaxed">Post-training coaching and follow-up touchpoints help learning stick well beyond the last session.</p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">05</span>
                </div>
               <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-heartbeat"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Grow</h3>
              <p className="text-gray-600 leading-relaxed">We track outcomes over time and evolve the program as your people and business needs grow.</p>
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
              Learning Today. <span className="text-brand-orange-300">Leading</span> Tomorrow.
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Partner with our L&D team to build a workforce that's confident, capable, and ready for what's next, from first-time managers to future executives.
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

export default LearningDevelopmentPage;
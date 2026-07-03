"use client"
import React, { useState, useEffect } from 'react';
import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaPlay, FaPhone, FaEnvelope, FaCalendar,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, 
  FaCloud, FaShieldAlt, FaChartBar, FaServer, FaRocket, FaCog,
  // Technology Stack Icons
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaDatabase, FaRobot, 
  FaBrain, FaMicrosoft, FaAngular,
  // Industry Icons
  FaUniversity, FaHeartbeat, FaShoppingCart, FaIndustry, FaGraduationCap, FaBuilding,
  // General Icons
  FaCheckCircle, FaGlobe, FaSmileBeam, FaCogs,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaGithub
} from 'react-icons/fa';

import { SiTensorflow, SiKubernetes } from 'react-icons/si';
import Header from '../header/page';
import Footer from '../footer/page';

const ITSolutionsPage = () => {
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
        .gradient-it {
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
        .tech-grid {
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
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animate-rotate-slow { animation: rotate 20s linear infinite; }
      `}</style>

      {/* Navigation */}
         <Header />

      {/* IT Solutions Banner Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50 overflow-hidden">
        <div className="banner-shape banner-shape-1"></div>
        <div className="banner-shape banner-shape-2"></div>
        <div className="banner-shape banner-shape-3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-brand-blue-100 text-brand-blue-700 px-6 py-3 rounded-full text-sm font-semibold animate-on-scroll">
                <FaLaptopCode className="animate-pulse-slow" />
                <span>IT Solutions & Consultancy</span>
                <FaRocket className="text-brand-orange-500" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight animate-on-scroll">
                Digital
                <span className="gradient-text block">Transformation</span>
                Made Simple
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-on-scroll">
                Strategic IT consulting and cutting-edge technology solutions that drive digital transformation, enhance operational efficiency, and accelerate business growth in the modern digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <button className="gradient-it text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2">
                  <span>Start Digital Journey</span>
                  <FaArrowRight />
                </button>
                <button className="border-2 border-brand-blue-300 text-brand-blue-700 px-10 py-4 rounded-full font-bold hover:bg-brand-blue-50 transition-colors duration-300 flex items-center space-x-2">
                  <FaPlay />
                  <span>Watch Tech Demo</span>
                </button>
              </div>
              
              {/* Key Tech Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 animate-on-scroll">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">100+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">99.9%</div>
                  <div className="text-sm text-gray-600 font-medium">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">54%</div>
                  <div className="text-sm text-gray-600 font-medium">Cost Reduction</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative animate-on-scroll">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* IT Dashboard Mock */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">IT Infrastructure Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-blue-400 rounded-full"></div>
                    </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaCloud className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Cloud Infrastructure</div>
                        <div className="text-sm text-gray-600">Multi-region deployment</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Active</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaShieldAlt className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Security Status</div>
                        <div className="text-sm text-gray-600">Advanced threat protection</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">Secure</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-brand-blue-50 to-brand-blue-50 rounded-xl border border-brand-blue-100 animate-float" style={{animationDelay: '1s'}}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaRobot className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">GenAI Talent Solutions</div>
                        <div className="text-sm text-gray-600">LLM, Prompt Engineering, AI Ops</div>
                      </div>
                    </div>
                    <div className="text-brand-blue-500 font-bold text-lg">In-Demand</div>
                  </div>
                </div>
                
                {/* Floating Tech Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-blue-500 rounded-full opacity-60 animate-bounce-slow flex items-center justify-center">
                  <FaCog className="text-white animate-rotate-slow" />
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

      {/* Our IT Services */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
        Complete <span className="text-brand-blue-600">IT Service Portfolio</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
        From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions that modernize your technology stack and drive digital innovation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Cloud Solutions */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaCloud className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Cloud Solutions & Migration</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Seamless cloud migration and optimization services with multi-cloud strategies for enhanced scalability and cost efficiency.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">AWS, Azure, Google Cloud Platform</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Infrastructure as Code (IaC)</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Containerization & Microservices</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Auto-scaling & Load balancing</span>
          </li>
        </ul>
      </div>

      {/* Cybersecurity */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaShieldAlt className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Cybersecurity Solutions</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Advanced cybersecurity frameworks protecting your digital assets with multi-layered security protocols and threat intelligence.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Advanced threat detection & response</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Zero Trust security architecture</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Security audits & compliance</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Incident response & recovery</span>
          </li>
        </ul>
      </div>

      {/* Software Development */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaCode className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Custom Software Development</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Bespoke software solutions built with modern technologies to address unique business challenges and drive innovation.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Full-stack web applications</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Mobile app development</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">API development & integration</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">DevOps & CI/CD pipelines</span>
          </li>
        </ul>
      </div>

      {/* Data Analytics & GenAI */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaChartBar className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Analytics & Generative AI</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Transform raw data into actionable insights with advanced analytics, machine learning, generative AI, and artificial intelligence solutions.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Business intelligence dashboards</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Machine learning models</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Predictive analytics</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Data warehouse & ETL solutions</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Generative AI Applications</span>
          </li>
        </ul>
      </div>

      {/* Infrastructure Management */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaServer className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">IT Infrastructure Management</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive infrastructure management ensuring optimal performance, reliability, and scalability of your IT systems.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">24/7 system monitoring</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Network optimization</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Backup & disaster recovery</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Performance tuning</span>
          </li>
        </ul>
      </div>

      {/* Digital Transformation */}
      <div className="service-card animate-on-scroll bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <FaRocket className="text-3xl text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Transformation</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">Strategic digital transformation initiatives that modernize business processes and accelerate innovation.</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Digital strategy consulting</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Process automation</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Legacy system modernization</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-brand-blue-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Change management</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* Technology Stack */}
      <section className="py-20 tech-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              We Leverage Cutting-Edge Technologies And Industry Best Practices To Deliver Robust, Scalable, And Future-Ready Solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

            {/* React */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaReact className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">React.js</h4>
            </div>

            {/* Node.js */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaNodeJs className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Node.js</h4>
            </div>

            {/* Python */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaPython className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Python</h4>
            </div>

            {/* Java */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaJava className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Java</h4>
            </div>

            {/* AWS */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaAws className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">AWS</h4>
            </div>

            {/* Docker */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaDocker className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Docker</h4>
            </div>

            {/* Database */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaDatabase className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Databases</h4>
            </div>

            {/* Generative AI */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaRobot className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Generative AI</h4>
            </div>

            {/* TensorFlow */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaBrain className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">TensorFlow</h4>
            </div>

            {/* Kubernetes */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-400 to-brand-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaNetworkWired className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Kubernetes</h4>
            </div>

            {/* .NET */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaMicrosoft className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">.NET</h4>
            </div>

            {/* Angular */}
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange-600 to-brand-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaAngular className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Angular</h4>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Our IT Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Why Choose <span className="gradient-text">Arihant IT Solutions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              Our expertise, innovation, and commitment to excellence make us the preferred IT partner for businesses seeking digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    
            {/* Global Clients */}
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">50+ Global Clients</h3>
              <p className="text-gray-600">Trusted by organizations worldwide to deliver innovative IT and AI-driven solutions with measurable results.</p>
            </div>
    
            {/* AI & GenAI Solutions */}
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-blue-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaRobot className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI & GenAI Expertise</h3>
              <p className="text-gray-600">Specialized in artificial intelligence, generative AI, and automation to drive digital transformation and innovation.</p>
            </div>
    
            {/* Customer Satisfaction */}
            <div className="animate-on-scroll bg-gradient-to-br from-brand-blue-50 to-brand-orange-50 border border-brand-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaSmileBeam className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">99% Client Satisfaction</h3>
              <p className="text-gray-600">Proven track record of exceeding client expectations with reliable, scalable, and future-ready technology solutions.</p>
            </div>
    
          </div>

          {/* ROI Section */}
          <div className="bg-gradient-to-br from-gray-50 to-brand-blue-50 rounded-3xl shadow-xl p-12 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gray-800">
                Proven <span className="gradient-text">Business Results</span>
              </h3>
              <p className="text-lg text-gray-600">Our IT solutions deliver measurable impact that drives business growth and efficiency</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">54%</div>
                <div className="text-gray-600 font-semibold">Reduction in IT Costs</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">99.9%</div>
                <div className="text-gray-600 font-semibold">System Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">2x</div>
                <div className="text-gray-600 font-semibold">Faster Development Cycles</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black gradient-text mb-2">50%</div>
                <div className="text-gray-600 font-semibold">Improvement in Productivity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 animate-on-scroll text-gray-800">
              Our <span className="gradient-text">IT Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-on-scroll">
              A systematic approach to IT transformation ensuring seamless implementation and maximum value delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">IT Assessment & Analysis</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive evaluation of your current IT infrastructure, systems, and technology gaps to identify optimization opportunities.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Technology Strategy Design</h3>
              <p className="text-gray-600 leading-relaxed">Develop comprehensive IT strategies and technology roadmaps aligned with your business objectives and growth plans.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-orange-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-pulse-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Solution Development & Deployment</h3>
              <p className="text-gray-600 leading-relaxed">Build and deploy technology solutions using agile methodologies with rigorous testing and quality assurance.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue-400 rounded-full animate-bounce-slow"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Monitoring & Optimization</h3>
              <p className="text-gray-600 leading-relaxed">Continuous monitoring, performance optimization, and proactive maintenance to ensure peak system performance.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 animate-on-scroll text-gray-800">
              Industries We <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Our IT solutions are tailored to meet the unique technology needs of various industries.
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
                <FaIndustry className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Manufacturing</h4>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Education</h4>
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
              Ready to <span className="text-brand-orange-300">Accelerate</span> Your Digital Journey?
            </h2>
            <p className="text-xl mb-12 leading-relaxed opacity-90">
              Transform your business with our cutting-edge IT solutions and strategic technology consulting. Let's build the future of your organization together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-brand-blue-700 px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                Get Free IT Consultation
              </button>
              <button className="border-2 border-white/30 px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-colors duration-300">
                Download Technology Guide
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <FaPhone className="text-2xl text-brand-orange-300" />
                <div>
                  <div className="font-semibold">Call Our IT Team</div>
                  <div className="opacity-80">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaEnvelope className="text-2xl text-brand-orange-300" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="opacity-80">it@arihantstaffing.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaCalendar className="text-2xl text-brand-orange-300" />
                <div>
                  <div className="font-semibold">Schedule Demo</div>
                  <div className="opacity-80">Book Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default ITSolutionsPage;

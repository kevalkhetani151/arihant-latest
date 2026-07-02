"use client"
import React, { useState, useEffect, useRef } from 'react';
// New imports for the Hero Animation
import { motion, useScroll, useTransform } from 'framer-motion'; 
import { 
  FaCrown, FaRocket, FaPlayCircle, FaShieldAlt, FaAward, FaUsers,
  FaCompass, FaTelescope, FaGem, FaSeedling, FaGlobe, FaBrain,
  FaUserTie, FaLaptopCode, FaChartLine, FaMedal, FaTrophy, FaStar,
  FaCertificate, FaLightbulb, FaLeaf, FaHeart, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaCalendarAlt, FaUserPlus, FaUsersCog, FaCode,
  FaNetworkWired, FaBriefcase, FaHandshake, FaCheckCircle, FaQuoteRight,
  FaBuilding, FaCheck, FaBars, FaTimes, FaChevronDown, FaArrowRight,
  FaArrowDown // Added ArrowDown
} from 'react-icons/fa';
import { 
  FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaGithub 
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';
import Link from 'next/link';

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const observerRef = useRef(null);
  
  // --- NEW HERO HOOKS START ---
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // --- NEW HERO HOOKS END ---

  useEffect(() => {
    // Enhanced Intersection Observer for animations (Keeping your existing logic)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Array.from(entry.target.parentNode?.children || []).indexOf(entry.target) * 150;
          
          setTimeout(() => {
            entry.target.classList.add('animate-in');
            
            // Counter animation
            if (entry.target.classList.contains('counter-container')) {
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
              });
            }
          }, delay);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stats-card, .team-card, .culture-card, .award-card');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth counter animation
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 80;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, 20);
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#dna-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* New Hero Specific Styles */
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }

        .gradient-warm { 
          background: linear-gradient(135deg, #F5911E 0%, #DB7A0A 100%); 
        }
        .gradient-text-warm { 
          background: linear-gradient(135deg, #DB7A0A 0%, #DB7A0A 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        .gradient-gold {
          background: linear-gradient(135deg, #FAA443 0%, #DB7A0A 100%);
        }
        
        /* Existing Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        
        .team-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .team-card:hover::before {
          left: 100%;
        }
        .team-card:hover {
          transform: translateY(-10px) scale(1.03);
        }
        
        .stats-card, .team-card, .culture-card, .award-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .stats-card.animate-in, .team-card.animate-in, .culture-card.animate-in, .award-card.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* Timeline Styles */
        .timeline-line {
          position: relative;
          padding-left: 40px;
        }
        
        .timeline-line::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: -20px;
          width: 3px;
          background: linear-gradient(to bottom, #F5911E, #FAA443, #DB7A0A);
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        
        .timeline-item::after {
          content: '';
          position: absolute;
          left: -28px;
          top: 15px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(45deg, #F5911E, #FAA443);
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(245, 145, 30, 0.2);
          z-index: 10;
        }
        
        /* Button Styles */
        .btn-primary {
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }

        /* Floating Shapes for other sections */
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .shape {
          position: absolute;
          opacity: 0.08;
        }
        
        .shape:nth-child(1) { top: 15%; left: 8%; width: 100px; height: 100px; background: radial-gradient(circle, #F5911E 0%, transparent 70%); border-radius: 50%; animation: float 8s ease-in-out infinite; }
        .shape:nth-child(2) { top: 70%; right: 10%; width: 120px; height: 120px; background: radial-gradient(circle, #FAA443 0%, transparent 70%); animation: float 10s ease-in-out infinite 2s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @media (max-width: 768px) {
          .timeline-line { padding-left: 20px; }
          .timeline-line::before { left: 8px; }
          .timeline-item::after { left: -4px; width: 12px; height: 12px; }
        }
      `}</style>

     <div className="bg-white min-h-screen text-gray-800 font-inter">
        
        <Header />

        {/* --- HERO SECTION START (Untouched as requested) --- */}
        <div ref={heroRef} className="relative w-full h-[100vh] bg-[#111] text-white overflow-hidden font-sans ">
          
          {/* 1. DYNAMIC BACKGROUND (Noise + Gradient) */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
             
             {/* Animated Gradient Blobs */}
             <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
               transition={{ duration: 8, repeat: Infinity }}
               className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-brand-orange-600/20 rounded-full blur-[120px]"
             />
             <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-brand-blue-600/10 rounded-full blur-[100px]"></div>
          </div>

          {/* 2. MAIN HERO CONTENT */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 "
          >
            
            {/* Top Label */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1 }}
               className="absolute top-24 left-6 md:left-24 flex items-center gap-3 overflow-hidden"
            >
               <div className="w-2 h-2 bg-brand-orange-500 rounded-full"></div>
               
            </motion.div>

            {/* MASSIVE TYPOGRAPHY (The Hero) */}
            <div className="flex flex-col gap-0 leading-[0.9] font-black tracking-tighter uppercase mix-blend-exclusion">
              
              {/* LINE 1 */}
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="text-[12vw] md:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
                >
                  WE BUILD
                </motion.h1>
              </div>

              {/* LINE 2 (Indented) */}
              <div className="overflow-hidden self-start md:pl-[15vw]">
                <motion.div 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                  className="flex items-center gap-4 md:gap-8"
                >
                  {/* Video/Image Pill inside Text Block */}
                  <div className="hidden md:block w-[120px] h-[60px] md:w-[180px] md:h-[90px] rounded-full bg-brand-orange-600 relative overflow-hidden group">
                      {/* You can change this background image */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-110"></div>
                  </div>
                  <h1 className="text-[12vw] md:text-[9rem] text-white">
                    THE TEAMS
                  </h1>
                </motion.div>
              </div>

              {/* LINE 3 */}
              <div className="overflow-hidden self-end md:pr-[10vw]">
                 <motion.h1 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  className="text-[12vw] md:text-[9rem] stroke-text"
                >
                  OF TOMORROW
                </motion.h1>
              </div>
            </div>
          </motion.div>

          {/* 3. FLOATING STATS (Bottom Right) */}
         

          {/* 4. INFINITE MARQUEE STRIP (Bottom) */}
          <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/10 bg-[#111] flex items-center z-20">
             <div className="relative flex overflow-hidden whitespace-nowrap py-2 w-full">
              <motion.div 
                className="flex gap-12 items-center w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              >
                {/* Loop content */}
                {[...Array(6)].map((_, i) => (
                   <div key={i} className="flex gap-12 items-center text-sm font-bold text-gray-400 uppercase tracking-widest flex-shrink-0">
                      <span className="flex items-center gap-2"><FaGlobe size={14} className="text-brand-orange-500"/> Global Reach</span>
                     
                     
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>Data-Driven Hiring</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>Executive Search</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                   </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* 5. INTERACTIVE SCROLL BUTTON */}
          <div className="absolute bottom-10 left-10 z-20">
             <motion.button 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 1.2, type: "spring" }}
               onClick={scrollToNext}
               className="w-16 h-16 bg-brand-orange-600 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all duration-300"
             >
               <FaArrowDown size={20} className="animate-bounce" />
             </motion.button>
          </div>
        </div>
        {/* --- HERO SECTION END --- */}
        
       {/* Company DNA Section */}
        <section id="dna-section" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-800">
                Our <span className="text-brand-blue-600">DNA</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The fundamental elements that shape our identity, guide our decisions, and fuel our passion for creating extraordinary connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Mission */}
              <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaCompass className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-800">Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To revolutionize the staffing ecosystem by creating perfect synergies between extraordinary talent and visionary organizations.
                </p>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-brand-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaAward className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-800">Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To be the world's most trusted talent architect, where every professional discovers their dream career and every organization transforms.
                </p>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-brand-blue-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Values */}
              <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FaGem className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-800">Values</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Authenticity, Excellence, Innovation, and Partnership. We build transparent relationships and deliver exceptional results.
                </p>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-brand-blue-500 rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-800">
                Meet Our <span className="text-brand-blue-600">Visionaries</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The brilliant minds behind our success, driving innovation, excellence, and transformation across the global staffing landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* CEO */}
              <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue-400 to-brand-blue-600"></div>

                {/* Text Avatar */}
                <div className="relative mb-6 w-max mx-auto mt-2">
                  <div className="w-24 h-24 bg-brand-blue-50 rounded-full flex items-center justify-center shadow-inner border border-brand-blue-100">
                    <span className="text-4xl font-black text-brand-blue-600">N</span>
                  </div>
                </div>

                {/* Typography */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Nishant Panchamiya</h3>
                <p className="text-brand-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-5">
                  Chief Executive Officer
                </p>
                
                {/* Divider Line */}
                <div className="w-12 h-0.5 bg-gray-100 mx-auto mb-5 group-hover:bg-brand-blue-200 transition-colors duration-300"></div>
                
                <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                  Visionary leader with 15+ years transforming the staffing industry. Pioneer of AI-driven talent solutions and advocate for workplace innovation.
                </p>
              </div>

              {/* CTO */}
              <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue-400 to-brand-blue-600"></div>

                {/* Text Avatar */}
                <div className="relative mb-6 w-max mx-auto mt-2">
                  <div className="w-24 h-24 bg-brand-blue-50 rounded-full flex items-center justify-center shadow-inner border border-brand-blue-100">
                    <span className="text-4xl font-black text-brand-blue-600">D</span>
                  </div>
                </div>

                {/* Typography */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Dhaval Panchamiya</h3>
                <p className="text-brand-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider mb-5">
                  Director Of Recruiting Operations
                </p>
                
                {/* Divider Line */}
                <div className="w-12 h-0.5 bg-gray-100 mx-auto mb-5 group-hover:bg-brand-blue-200 transition-colors duration-300"></div>
                
                <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                  Technology innovator and AI pioneer with 15+ years creating next-generation HR solutions. Architect of our revolutionary matching algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-800">
                Our <span className="text-brand-blue-600">Culture</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The heartbeat of our organization — a vibrant ecosystem where innovation thrives, excellence is celebrated, and every team member reaches their potential.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              
              <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaLightbulb className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Innovation First</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">We embrace cutting-edge solutions and creative thinking to solve tomorrow's challenges today.</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaUsers className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Team Excellence</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Collaborative spirit and mutual respect form the foundation of our extraordinary achievements.</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaLeaf className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Growth Mindset</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Continuous learning and development drive personal and professional transformation.</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 shadow-md rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHeart className="text-lg sm:text-2xl text-white" />
                </div>
                <h4 className="font-black text-gray-800 text-base sm:text-lg mb-2 sm:mb-3">Purpose Driven</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Every action is guided by our commitment to creating meaningful impact in people's lives.</p>
              </div>

            </div>

            {/* Culture Showcase */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-brand-blue-600">Life at Artify TechSolution</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Flexible work arrangements and remote-first culture</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Comprehensive learning and development programs</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Innovation labs and entrepreneurship support</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-blue-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">Global mobility and cross-cultural experiences</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-48 sm:h-64 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <FaBuilding className="text-4xl sm:text-6xl text-brand-blue-500 mb-3 sm:mb-4 mx-auto" />
                      <p className="text-lg sm:text-xl font-bold text-gray-800">Modern Workspace</p>
                      <p className="text-gray-600 text-sm sm:text-base">Designed for Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight text-gray-800">
                Ready to Create Your <span className="text-brand-blue-600">Success Story?</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                Join the thousands of professionals and hundreds of companies who've discovered the transformative power of perfect connections. Let's architect your future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
                <Link href='contact'>
                  <button className="bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl text-base sm:text-lg flex items-center space-x-2 mx-auto sm:mx-0">
                    <FaRocket className="text-sm sm:text-lg" />
                    <span>Begin Your Journey</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Footer/>
      </div>
    </>
  );
};

export default AboutUs;
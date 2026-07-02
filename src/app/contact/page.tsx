"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaComments,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheck,
  FaClock,
  FaBolt,
  FaHandshake,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
  FaPaperPlane,
  FaSpinner,
  FaUserPlus,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaAward,
  FaChartLine,
  FaLightbulb,
  FaHeadset,
  FaCalendarAlt,
  FaVideo,
  FaArrowRight,
  FaQuoteLeft,
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaGlobeAmericas,
  FaPlay,
  FaCrown,
  FaGem,
  FaMedal,
  FaTrophy,
  FaCertificate,
  FaHeart,
  FaBriefcase,
  FaCode,
  FaNetworkWired,
  FaBars
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';

const ContactUs = () => {
  // State Management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    interest: '',
    urgency: '',
    budget: '',
    message: '',
    consent: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('form');
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const observerRef = useRef(null);
  const formRef = useRef(null);

  // Enhanced Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('data-animate');
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Counter Animation Effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = target / 100;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => animateCounters(), 20);
        } else {
          counter.innerText = target;
        }
      });
    };

    const timer = setTimeout(animateCounters, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form Validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.interest) errors.interest = 'Please select your interest';
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    if (!formData.consent) errors.consent = 'You must agree to the terms';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = Object.keys(formErrors)[0];
      const errorElement = document.querySelector(`[name="${firstError}"]`);
      errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      errorElement?.focus();
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        interest: '',
        urgency: '',
        budget: '',
        message: '',
        consent: false
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Data
  const stats = [
    { number: '99%', label: 'Success Rate', icon: FaAward },
    { number: '1H', label: 'Response Time', icon: FaClock },
    { number: '500+', label: 'Companies Served', icon: FaBuilding },
    { number: '15K+', label: 'Placements Made', icon: FaUsers }
  ];

  const testimonials = [
    {
      quote: "Arihant transformed our hiring process completely. We went from 8 weeks to 4 weeks average hire time.",
      name: "Sarah Johnson",
      role: "Head of HR",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      quote: "Their healthcare staffing expertise is unmatched. They understand our unique requirements perfectly.",
      name: "Dr. Michael Chen",
      role: "Chief Medical Officer", 
      company: "HealthFirst Medical",
      rating: 5
    },
    {
      quote: "Not only do they find great candidates, but the retention rate is incredible. 99% of placements stay long-term.",
      name: "Emma Rodriguez",
      role: "VP Operations",
      company: "Global Finance Ltd",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "How quickly can you fill our staffing requirements?",
      answer: "Our AI-powered matching system identifies qualified candidates within 24-48 hours for most positions. For specialized roles, we typically deliver shortlisted candidates within 3-5 business days.",
      icon: FaClock
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve Technology, Healthcare, Finance, Manufacturing, Retail, and Professional Services with specialized recruiters for each industry.",
      icon: FaBuilding
    },
    {
      question: "Do you provide international staffing solutions?",
      answer: "Yes, we operate across 25+ countries with local expertise, handling visa processes, work permits, and compliance requirements.",
      icon: FaGlobeAmericas
    }
  ];

  const contactMethods = [
    {
      id: 'form',
      title: 'Send Message',
      subtitle: 'Detailed inquiry',
      icon: FaPaperPlane,
      description: 'Get a personalized response within 1 hour'
    },
    {
      id: 'call',
      title: 'Call Direct',
      subtitle: 'Immediate response',
      icon: FaPhone, 
      description: 'Speak with an expert right now'
    },
    {
      id: 'meeting',
      title: 'Book Meeting',
      subtitle: 'Video consultation',
      icon: FaVideo,
      description: 'Schedule a 30-minute strategy session'
    }
  ];

  const services = [
    { name: 'Staff Augmentation', icon: '👥' },
    { name: 'HR Solutions', icon: '🎯' },
    { name: 'IT Services', icon: '💻' },
    { name: 'Healthcare Staffing', icon: '🏥' },
    { name: 'Consulting', icon: '💡' },
    { name: 'Career Services', icon: '🚀' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-brand-blue-50 to-brand-blue-50 min-h-screen text-gray-900 font-sans">
      
      {/* Enhanced Styling */}
      <style jsx>{`
        .font-sans { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        
        .gradient-primary { 
          background: linear-gradient(135deg, #0099E6 0%, #007AB8 50%, #005C8A 100%); 
        }
        .gradient-secondary { 
          background: linear-gradient(135deg, #0099E6 0%, #007AB8 100%); 
        }
        .gradient-accent { 
          background: linear-gradient(135deg, #DB7A0A 0%, #AF6108 100%); 
        }
        .gradient-warm { 
          background: linear-gradient(135deg, #F5911E 0%, #DB7A0A 50%, #DB7A0A 100%); 
        }
        .gradient-gold { 
          background: linear-gradient(135deg, #FAA443 0%, #DB7A0A 50%, #AF6108 100%); 
        }
        .gradient-text { 
          background: linear-gradient(135deg, #0099E6 0%, #007AB8 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        .gradient-text-warm { 
          background: linear-gradient(135deg, #F5911E 0%, #DB7A0A 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .glass-card-strong {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .animate-fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fade-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fade-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .animate-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-scale.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .input-field {
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
        
        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 153, 230, 0.15);
          border-color: #0099E6;
        }
        
        .input-field.error {
          border-color: #FAA443;
          box-shadow: 0 0 0 3px rgba(245, 145, 30, 0.1);
        }
        
        .btn-primary {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .testimonial-card {
          transition: all 0.5s ease;
        }
        
        .testimonial-card.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .testimonial-card:not(.active) {
          opacity: 0.5;
          transform: translateX(20px);
        }

        /* Banner Animation Classes */
        .text-animate-1 {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
          opacity: 0;
        }

        .text-animate-2 {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
          opacity: 0;
        }

        .text-animate-3 {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
          opacity: 0;
        }

        .text-animate-4 {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.4s forwards;
          opacity: 0;
        }

        .text-animate-5 {
          animation: slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s forwards;
          opacity: 0;
        }

        .stats-animate {
          animation: scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.2s forwards;
          opacity: 0;
        }

        .typewriter-text {
          overflow: hidden;
          border-right: 2px solid #F5911E;
          white-space: nowrap;
          animation: typewriter 2.5s steps(15) 0.8s forwards, blink 1s linear infinite 3.3s;
          width: 0;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 153, 230, 0.3); }
          50% { box-shadow: 0 0 30px rgba(0, 153, 230, 0.5); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .tab-button {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(135deg, #0099E6, #007AB8);
          border-radius: 2px;
        }
        
        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-content.open {
          max-height: 300px;
        }

        /* Floating Shapes */
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

        .shape:nth-child(1) {
          top: 15%;
          left: 8%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, #F5911E 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite, morphBounce 4s ease-in-out infinite;
        }

        .shape:nth-child(2) {
          top: 70%;
          right: 10%;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #FAA443 0%, transparent 70%);
          animation: float 10s ease-in-out infinite 2s, morphBounce 6s ease-in-out infinite 1s;
        }

        .shape:nth-child(3) {
          bottom: 20%;
          left: 15%;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, #DB7A0A 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite 4s, morphBounce 5s ease-in-out infinite 2s;
        }

        /* Animation Keyframes */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideFromLeft {
          0% { opacity: 0; transform: translateX(-50px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes slideFromRight {
          0% { opacity: 0; transform: translateX(50px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }

        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes typewriter {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #F5911E; }
        }

        @keyframes morphBounce {
          0%, 100% { border-radius: 50% 50% 50% 50%; }
          25% { border-radius: 60% 40% 60% 40%; }
          50% { border-radius: 40% 60% 40% 60%; }
          75% { border-radius: 50% 50% 60% 40%; }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .typewriter-text {
            border-right: none;
            animation: fadeInUp 0.8s ease-out 0.8s forwards;
            white-space: normal;
            width: auto;
            overflow: visible;
          }
        }
      `}</style>

      <Header />

      {/* Enhanced Contact Us Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Floating Background Shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        {/* Main Content Container */}
    <div className="max-w-7xl mx-auto px-6 relative z-10">
  <div className="flex items-center justify-center min-h-screen py-20">
    
    {/* Centered Main Content */}
    <div className="text-center space-y-8 max-w-5xl">
      
      {/* Enhanced Animated Badge */}
      <div className="inline-flex items-center space-x-3 glass-morphism px-6 py-3 rounded-full text-animate-1 shadow-lg">
        {/* <div className="w-3 h-3 bg-brand-blue-500 rounded-full animate-pulse"></div> */}
        {/* <span className="text-sm font-bold text-gray-800">🚀 #1 Staffing Solutions</span> */}
      </div>
      
      {/* Main Heading with Advanced Animation */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-800">
          <span className="block text-animate-2">Connect Exceptional</span>
          <span className="gradient-text-warm block typewriter-text">Talent</span>
          <span className="block text-animate-3" style={{animationDelay: '1.2s'}}>With Visionary</span>
          <span className="block text-animate-3" style={{animationDelay: '1.4s'}}>Organizations</span>
        </h1>
      </div>
      
      {/* Enhanced Subtitle with Staggered Animation */}
      <div className="text-animate-4 max-w-4xl mx-auto space-y-4">
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
          Your trusted staffing partner delivering perfect matches that drive success for over 14 years
        </p>
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
          We don't just fill positions – we architect careers and transform businesses through strategic talent partnerships that create lasting impact across Technology, Healthcare, Finance, and beyond.
        </p>
      </div>
      
      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 text-animate-5 justify-center">
        <button 
          onClick={() => setActiveTab('call')}
          className="group btn-primary gradient-warm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 sm:space-x-3"
        >
          <FaUsers className="text-sm sm:text-lg group-hover:animate-bounce" />
          <span>Find Top Talent Now</span>
          <FaArrowRight className="text-xs sm:text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => setActiveTab('form')}
          className="group glass-morphism text-brand-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 backdrop-blur-xl border border-brand-orange-200 hover:border-brand-orange-300"
        >
          <FaBriefcase className="text-sm sm:text-lg group-hover:text-brand-orange-800 transition-colors" />
          <span>Explore Opportunities</span>
        </button>
      </div>
      
      {/* Industry Expertise Tags */}
      <div className="flex flex-wrap justify-center gap-3 text-animate-5 max-w-3xl mx-auto" style={{animationDelay: '1.8s'}}>
        {[
          { name: 'Technology', icon: '💻' },
          { name: 'Healthcare', icon: '🏥' },
          { name: 'Hrsolutions', icon: '💼' },
         
        ].map((industry, index) => (
          <div key={index} className="glass-morphism px-4 py-2 rounded-full border border-gray-200 hover:border-brand-blue-300 transition-all">
            <span className="text-sm font-medium text-gray-700">
              {industry.icon} {industry.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Trust Indicators */}
      {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-animate-5" style={{animationDelay: '2s'}}>
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs font-bold text-white">500+</span>
            </div>
          </div>
          <span className="text-sm text-gray-600 font-medium">Trusted by Fortune 500 companies</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <FaStar className="text-brand-orange-400 text-sm" />
            <FaStar className="text-brand-orange-400 text-sm" />
            <FaStar className="text-brand-orange-400 text-sm" />
            <FaStar className="text-brand-orange-400 text-sm" />
            <FaStar className="text-brand-orange-400 text-sm" />
          </div>
          <span className="text-sm text-gray-600 font-medium">4.9/5 Client Satisfaction</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaAward className="text-brand-blue-500 text-sm" />
          <span className="text-sm text-gray-600 font-medium">ISO Certified Agency</span>
        </div>
      </div> */}

      {/* Key Stats Row - Staffing Focused */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-animate-5" style={{animationDelay: '2.4s'}}>
        <div className="text-center glass-morphism p-4 rounded-2xl border border-gray-200 hover:border-brand-blue-300 transition-all">
          <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
            <FaClock className="text-white text-xl" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">
            <span className="counter" data-target="24">0</span>H
          </div>
          <div className="text-sm text-gray-600 font-medium">Average Hire Time</div>
        </div>
        
        <div className="text-center glass-morphism p-4 rounded-2xl border border-gray-200 hover:border-brand-blue-300 transition-all">
          <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center mx-auto mb-3">
            <FaHandshake className="text-white text-xl" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">
            <span className="counter" data-target="15000">0</span>+
          </div>
          <div className="text-sm text-gray-600 font-medium">Successful Placements</div>
        </div>
        
        <div className="text-center glass-morphism p-4 rounded-2xl border border-gray-200 hover:border-brand-blue-300 transition-all">
          <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
            <FaAward className="text-white text-xl" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">
            <span className="counter" data-target="99">0</span>%
          </div>
          <div className="text-sm text-gray-600 font-medium">Success Rate</div>
        </div>
        
        <div className="text-center glass-morphism p-4 rounded-2xl border border-gray-200 hover:border-brand-blue-300 transition-all">
          <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3">
            <FaGlobeAmericas className="text-white text-xl" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-800 mb-1">
            <span className="counter" data-target="25">0</span>+
          </div>
          <div className="text-sm text-gray-600 font-medium">Countries Served</div>
        </div>
      </div> */}

      {/* Quick Service Links */}
      {/* <div className="flex flex-wrap justify-center gap-4 text-animate-5 max-w-2xl mx-auto" style={{animationDelay: '2.6s'}}>
        <button className="group flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-gray-200 hover:border-brand-blue-300 hover:bg-brand-blue-50 transition-all">
          <FaUserPlus className="text-brand-blue-600 group-hover:text-brand-blue-700" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue-700">Permanent Placement</span>
        </button>
        <button className="group flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-gray-200 hover:border-brand-blue-300 hover:bg-brand-blue-50 transition-all">
          <FaCrown className="text-brand-blue-600 group-hover:text-brand-blue-700" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue-700">Staff Augmentation</span>
        </button>
        <button className="group flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-gray-200 hover:border-brand-blue-300 hover:bg-brand-blue-50 transition-all">
          <FaCrown className="text-brand-blue-600 group-hover:text-brand-blue-700" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue-700">Executive Search</span>
        </button>
        <button className="group flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full border border-gray-200 hover:border-brand-blue-300 hover:bg-brand-blue-50 transition-all">
          <FaHeadset className="text-brand-blue-600 group-hover:text-brand-blue-700" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-brand-blue-700">HR Consulting</span>
        </button>
      </div> */}
      
    </div>
    
  </div>
</div>


        
        {/* Enhanced Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div 
            className="flex flex-col items-center space-y-2 cursor-pointer group animate-bounce"
            onClick={() => scrollToSection('contact-methods')}
          >
            <div className="w-6 h-10 border-2 border-brand-orange-500 rounded-full flex justify-center group-hover:border-brand-orange-600 transition-colors">
              <div className="w-1 h-3 bg-brand-orange-500 rounded-full mt-2 group-hover:bg-brand-orange-600 transition-colors"></div>
            </div>
            <span className="text-xs text-gray-500 font-medium group-hover:text-gray-600 transition-colors">Explore Options</span>
          </div>
        </div> */}
        
        {/* Enhanced Floating Action Elements */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:block">
          <div className="space-y-4">
            <button 
              onClick={() => setActiveTab('call')}
              className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group relative"
            >
              <FaPhone className="text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors" />
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Call Now
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('form')}
              className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group relative"
            >
              <FaEnvelope className="text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors" />
              <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Send Email
              </div>
            </button>
            <button 
              onClick={() => setActiveTab('meeting')}
              className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group relative"
            >
              <FaCalendarAlt className="text-brand-orange-600 group-hover:text-brand-orange-700 transition-colors" />
              <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Schedule Meeting
              </div>
            </button>
          </div>
        </div>
        
      </section>

      {/* Contact Method Tabs */}
      <section id="contact-methods" className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveTab(method.id)}
                className={`tab-button p-6 rounded-2xl border-2 text-center transition-all hover-lift ${
                  activeTab === method.id 
                    ? 'active border-brand-blue-500 bg-brand-blue-50 text-brand-blue-700' 
                    : 'border-gray-200 hover:border-brand-blue-300 bg-white'
                }`}
              >
                <method.icon className="text-3xl mx-auto mb-3 text-brand-blue-600" />
                <div className="font-bold text-lg mb-1">{method.title}</div>
                <div className="text-sm text-gray-600 mb-2">{method.subtitle}</div>
                <div className="text-xs text-gray-500">{method.description}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === 'form' && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
                Tell Us About Your <span className="gradient-text">Needs</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our intelligent form ensures we gather the right information to provide you with the most relevant solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="glass-card-strong rounded-3xl p-8 md:p-12">
                  
                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="bg-brand-blue-50 border-2 border-brand-blue-200 rounded-2xl p-8 mb-8 text-center">
                      <div className="w-16 h-16 bg-brand-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCheckCircle className="text-2xl text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-brand-blue-800 mb-3">Message Sent Successfully!</h3>
                      <p className="text-brand-blue-700">We'll respond within 1 hour during business hours.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          First Name <span className="text-brand-orange-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="firstName" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`input-field w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                            formErrors.firstName ? 'error' : 'border-gray-200'
                          }`}
                          placeholder="Enter your first name" 
                        />
                        {formErrors.firstName && (
                          <div className="text-brand-orange-500 text-sm mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-2" />
                            {formErrors.firstName}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          Last Name <span className="text-brand-orange-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="lastName" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`input-field w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                            formErrors.lastName ? 'error' : 'border-gray-200'
                          }`}
                          placeholder="Enter your last name" 
                        />
                        {formErrors.lastName && (
                          <div className="text-brand-orange-500 text-sm mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-2" />
                            {formErrors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          <FaEnvelope className="inline mr-2 text-brand-blue-600" />
                          Email Address <span className="text-brand-orange-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`input-field w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                            formErrors.email ? 'error' : 'border-gray-200'
                          }`}
                          placeholder="john@company.com" 
                        />
                        {formErrors.email && (
                          <div className="text-brand-orange-500 text-sm mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-2" />
                            {formErrors.email}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          <FaPhone className="inline mr-2 text-brand-blue-600" />
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input-field w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none" 
                          placeholder="+1 (555) 123-4567" 
                        />
                      </div>
                    </div>
                    
                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          <FaBuilding className="inline mr-2 text-brand-blue-600" />
                          Company
                        </label>
                        <input 
                          type="text" 
                          name="company" 
                          value={formData.company}
                          onChange={handleInputChange}
                          className="input-field w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none" 
                          placeholder="Your Company Name" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          Job Title
                        </label>
                        <input 
                          type="text" 
                          name="jobTitle" 
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="input-field w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none" 
                          placeholder="Your Job Title" 
                        />
                      </div>
                    </div>
                    
                    {/* Service Interest */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          I'm interested in <span className="text-brand-orange-500">*</span>
                        </label>
                        <select 
                          name="interest" 
                          value={formData.interest}
                          onChange={handleInputChange}
                          className={`input-field w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                            formErrors.interest ? 'error' : 'border-gray-200'
                          }`}
                        >
                          <option value="">Select your primary interest</option>
                          {services.map((service, index) => (
                            <option key={index} value={service.name.toLowerCase().replace(' ', '-')}>
                              {service.icon} {service.name}
                            </option>
                          ))}
                        </select>
                        {formErrors.interest && (
                          <div className="text-brand-orange-500 text-sm mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-2" />
                            {formErrors.interest}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">
                          <FaClock className="inline mr-2 text-brand-blue-600" />
                          Urgency Level
                        </label>
                        <select 
                          name="urgency" 
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="input-field w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none"
                        >
                          <option value="">How urgent is this?</option>
                          <option value="immediate">🚨 Immediate (Within 24 hours)</option>
                          <option value="urgent">⚡ Urgent (Within 1 week)</option>
                          <option value="moderate">📅 Moderate (Within 1 month)</option>
                          <option value="planning">📋 Planning (3+ months)</option>
                        </select>
                      </div>
                    </div> */}
                    
                    {/* Budget Range */}
                    {/* <div>
                      <label className="block text-gray-800 font-semibold mb-2">
                        <FaChartLine className="inline mr-2 text-brand-blue-600" />
                        Budget Range (Optional)
                      </label>
                      <select 
                        name="budget" 
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="input-field w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none"
                      >
                        <option value="">Select your budget range</option>
                        <option value="under-10k">💰 Under $10,000</option>
                        <option value="10k-50k">💳 $10,000 - $50,000</option>
                        <option value="50k-100k">💎 $50,000 - $100,000</option>
                        <option value="100k-500k">🏆 $100,000 - $500,000</option>
                        <option value="over-500k">👑 Over $500,000</option>
                        <option value="discuss">💬 Prefer to discuss</option>
                      </select>
                    </div> */}
                    
                    {/* Message */}
                    <div>
                      <label className="block text-gray-800 font-semibold mb-2">
                        Tell us more about your needs <span className="text-brand-orange-500">*</span>
                      </label>
                      <textarea 
                        name="message" 
                        rows="6" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`input-field w-full px-4 py-3 rounded-xl border-2 focus:outline-none resize-none ${
                          formErrors.message ? 'error' : 'border-gray-200'
                        }`}
                        placeholder="Describe your project, timeline, specific requirements, team size needed, challenges you're facing, or any other details that would help us provide the best solution..."
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>💡 The more details you provide, the better we can help</span>
                        <span>{formData.message.length}/1000</span>
                      </div>
                      {formErrors.message && (
                        <div className="text-brand-orange-500 text-sm mt-2 flex items-center">
                          <FaExclamationTriangle className="mr-2" />
                          {formErrors.message}
                        </div>
                      )}
                    </div>
                    
                    {/* Consent Checkbox */}
                    {/* <div className="bg-brand-blue-50 border border-brand-blue-200 rounded-xl p-6">
                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          name="consent" 
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="mt-1 h-5 w-5 text-brand-blue-600 rounded focus:ring-brand-blue-500 border-brand-blue-300" 
                        />
                        <div>
                          <label className="text-gray-800 text-sm leading-relaxed cursor-pointer">
                            <span className="font-semibold">I agree to receive communications</span> from Arihant Staffing. 
                            I understand that I can unsubscribe at any time and my data will be handled according to our 
                            <span className="text-brand-blue-600 font-semibold"> Privacy Policy</span>. <span className="text-brand-orange-500">*</span>
                          </label>
                          <div className="text-xs text-gray-600 mt-1">
                            🔒 Your information is secure and will never be shared with third parties
                          </div>
                        </div>
                      </div>
                      {formErrors.consent && (
                        <div className="text-brand-orange-500 text-sm mt-3 flex items-center">
                          <FaExclamationTriangle className="mr-2" />
                          {formErrors.consent}
                        </div>
                      )}
                    </div> */}
                    
                    {/* Submit Button */}
                    <div className="pt-6">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary gradient-primary text-white px-12 py-4 rounded-full font-bold text-lg w-full md:w-auto hover-lift shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="inline mr-3 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="inline mr-3" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                    
                  </form>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Why Choose Us */}
                <div className="glass-card rounded-2xl p-6 sticky top-8">
                  <h3 className="text-xl font-black mb-6 gradient-text flex items-center">
                    <FaRocket className="mr-3 text-brand-blue-600" />
                    Why Choose Arihant?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: FaShieldAlt, text: "99% Success Rate", desc: "Proven track record" },
                      { icon: FaAward, text: "14+ Years Experience", desc: "Industry expertise" },
                      { icon: FaUsers, text: "150+ Companies", desc: "Trusted worldwide" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-brand-blue-50 transition-all">
                        <div className="w-10 h-10 bg-brand-blue-100 rounded-full flex items-center justify-center">
                          <item.icon className="text-brand-blue-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{item.text}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Current Testimonial */}
                {/* <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-bold mb-4 text-gray-800">What Our Clients Say</h4>
                  <div className="testimonial-card active">
                    <div className="flex mb-3">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="text-brand-orange-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
                    <div>
                      <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</div>
                      <div className="text-sm text-brand-blue-600">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2 mt-4">
                    {testimonials.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial ? 'bg-brand-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div> */}
                
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'call' && (
        <section className="py-20 bg-gradient-to-br from-brand-blue-100 to-brand-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card-strong rounded-3xl p-12">
              <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <FaPhone className="text-4xl text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6 text-gray-800">Ready to Talk?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Our staffing experts are standing by to discuss your needs. Average call duration: 15 minutes. Average time to solution: 24 hours.
              </p>
              
              <div className=" mb-8">
                <div className="text-center">
                  <div className="text-xl font-black text-brand-blue-600 mb-2">Main Office</div>
                  <a href="tel:+15551234567" className="text-3xl font-black text-gray-800 hover:text-brand-blue-600 transition-colors">
                   +1 973-891-7576
                  </a>
                  <div className="text-gray-600 mt-2">Mon-Fri: 8AM-8PM UTC</div>
                </div>
               
              </div>
              
              <div className="bg-brand-blue-100 border border-brand-blue-300 rounded-xl p-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-brand-blue-700">
                  <div className="w-3 h-3 bg-brand-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-bold">5 specialists available now</span>
                </div>
              </div>
              
              <button className="btn-primary gradient-primary text-white px-12 py-4 rounded-full font-bold text-lg">
                <FaPhone className="inline mr-3" />
                Call Now
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'meeting' && (
        <section className="py-20 bg-gradient-to-br from-brand-blue-100 to-brand-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card-strong rounded-3xl p-12">
              <div className="w-24 h-24 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                <FaVideo className="text-4xl text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6 text-gray-800">Book a Strategy Session</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Schedule a personalized 30-minute video consultation with our staffing strategists. We'll analyze your needs and provide actionable recommendations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <FaCalendarAlt className="text-3xl text-brand-blue-600 mx-auto mb-3" />
                  <div className="font-bold">Choose Your Time</div>
                  <div className="text-sm text-gray-600">Available 24/7</div>
                </div>
                <div className="text-center p-4">
                  <FaVideo className="text-3xl text-brand-blue-600 mx-auto mb-3" />
                  <div className="font-bold">Video Consultation</div>
                  <div className="text-sm text-gray-600">Face-to-face discussion</div>
                </div>
                <div className="text-center p-4">
                  <FaLightbulb className="text-3xl text-brand-blue-600 mx-auto mb-3" />
                  <div className="font-bold">Get Recommendations</div>
                  <div className="text-sm text-gray-600">Actionable insights</div>
                </div>
              </div>
              
              <button className="btn-primary gradient-secondary text-white px-12 py-4 rounded-full font-bold text-lg mb-4">
                <FaCalendarAlt className="inline mr-3" />
                Schedule Meeting
              </button>
              
              <div className="text-sm text-gray-600">
                <FaClock className="inline mr-2" />
                Average session: 30 minutes • No commitment required
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 animate-fade-up ${isVisible['faq'] ? 'visible' : ''}`}
            data-animate="faq"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get instant answers to common questions. Still have questions? Our team is ready to help.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl shadow-sm hover-lift"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                      <faq.icon className="text-white" />
                    </div>
                    <div className="font-bold text-lg text-gray-800">{faq.question}</div>
                  </div>
                  <FaChevronDown 
                    className={`text-gray-600 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div className={`faq-content ${openFaq === index ? 'open' : ''}`}>
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">Still have questions?</p>
            <button 
              onClick={() => setActiveTab('form')}
              className="btn-primary gradient-primary text-white px-8 py-3 rounded-full font-bold hover-lift"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Office Locations */}
  <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-blue-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
        Our Global <span className="gradient-text">Presence</span>
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Strategic locations worldwide ensure we're always close to our clients and candidates.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* USA Headquarters */}
      <div className="glass-card rounded-2xl p-8 text-center hover-lift">
        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
          <FaBuilding className="text-2xl text-white" />
        </div>
        <h4 className="font-black text-gray-800 text-xl mb-4">USA Headquarters</h4>
        <div className="space-y-2 text-gray-700 mb-6">
          <p className="font-semibold">New York, USA</p>
          <p>245 Madison Avenue</p>
          <p>Suite 1200, NY 10016</p>
          <a href="tel:+12125550123" className="block text-brand-blue-600 font-bold hover:text-brand-blue-700">
            +1 (212) 555-0123
          </a>
        </div>
        <div className="flex justify-center space-x-2">
         
         
        </div>
      </div>
      
      {/* India Office */}
      <div className="glass-card rounded-2xl p-8 text-center hover-lift">
        <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-6">
          <FaGlobeAmericas className="text-2xl text-white" />
        </div>
        <h4 className="font-black text-gray-800 text-xl mb-4">India Operations</h4>
        <div className="space-y-2 text-gray-700 mb-6">
          <p className="font-semibold">Vadodara, India</p>
          <p>88 Tech Park Road</p>
          <p>Koramangala, BLR 560034</p>
          <a href="tel:+918045678901" className="block text-brand-blue-600 font-bold hover:text-brand-blue-700">
            +91 80456 78901
          </a>
        </div>
        <div className="flex justify-center space-x-2">
           <span className="bg-brand-blue-100 text-brand-blue-700 px-3 py-1 rounded-full text-sm font-bold">HQ</span>
        
       
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Final CTA Section */}
     
      <Footer />
    </div>
  );
};

export default ContactUs;

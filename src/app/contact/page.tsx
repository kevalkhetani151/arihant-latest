"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaClock,
  FaPaperPlane,
  FaSpinner,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaAward,
  FaChevronDown,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaGlobeAmericas,
  FaBriefcase
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
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('form');
  const [isVisible, setIsVisible] = useState({});
  
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
        if (entry.isIntersecting && id) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
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
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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

    // Simulate API call
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
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Data
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
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-brand-blue-50 to-brand-blue-50 min-h-screen text-gray-900 font-sans">
      
      {/* Enhanced Styling */}
      <style jsx>{`
        .font-sans { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        
        .gradient-primary { 
          background: linear-gradient(135deg, #0099E6 0%, #007AB8 50%, #005C8A 100%); 
        }
        .gradient-warm { 
          background: linear-gradient(135deg, #F5911E 0%, #DB7A0A 50%, #DB7A0A 100%); 
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

      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-800">
                <span className="block text-animate-2">Your Trusted </span>
                <span className="gradient-text-warm block typewriter-text inline-block">Workforce</span>
                <span className="block text-animate-3" style={{animationDelay: '1.2s'}}>Solutions Partner</span>
              </h1>
            </div>
            
            <div className="text-animate-4 max-w-3xl mx-auto space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
                Whether you're hiring top talent or searching for your next career opportunity, our staffing specialists are ready to help. Contact us today.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                We help organizations build high-performing teams by connecting them with exceptional talent across Technology, Healthcare, Finance, Engineering, Manufacturing, and Professional Services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-animate-5 justify-center w-full">
              <button 
                onClick={() => setActiveTab('call')}
                className="group btn-primary gradient-warm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto"
              >
                <FaUsers className="text-sm sm:text-lg group-hover:animate-bounce" />
                <span>Request Talent</span>
                <FaArrowRight className="text-xs sm:text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setActiveTab('form')}
                className="group glass-morphism text-brand-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 backdrop-blur-xl border border-brand-orange-200 hover:border-brand-orange-300 w-full sm:w-auto"
              >
                <FaBriefcase className="text-sm sm:text-lg group-hover:text-brand-orange-800 transition-colors" />
                <span>Schedule a Consultation</span>
              </button>
            </div>
            
          
          </div>
        </div>

        {/* Floating Action Elements (Updated for two options) */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:flex flex-col space-y-4">
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
        </div>
      </section>

      {/* Contact Method Tabs */}
      <section id="contact-methods" className="py-12 bg-white/70 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <method.icon className={`text-3xl mx-auto mb-3 ${activeTab === method.id ? 'text-brand-blue-600' : 'text-gray-400'}`} />
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
        <section className="py-16 bg-gradient-to-br from-gray-50 to-brand-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
               How Can We Help?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our intelligent form ensures we gather the right information to provide you with the most relevant solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="glass-card-strong rounded-3xl p-8 md:p-10 shadow-lg border border-white/60">
                  {submitSuccess && (
                    <div className="bg-brand-blue-50 border-2 border-brand-blue-200 rounded-2xl p-6 mb-8 text-center animate-fade-up visible">
                      <div className="w-16 h-16 bg-brand-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaCheckCircle className="text-2xl text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-brand-blue-800 mb-2">Message Sent Successfully!</h3>
                      <p className="text-brand-blue-700">We'll respond within 1 hour during business hours.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2 text-sm">
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
                          placeholder="John" 
                        />
                        {formErrors.firstName && (
                          <div className="text-brand-orange-500 text-xs mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {formErrors.firstName}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2 text-sm">
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
                          placeholder="Doe" 
                        />
                        {formErrors.lastName && (
                          <div className="text-brand-orange-500 text-xs mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {formErrors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2 text-sm">
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
                          <div className="text-brand-orange-500 text-xs mt-2 flex items-center">
                            <FaExclamationTriangle className="mr-1" />
                            {formErrors.email}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2 text-sm">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2 text-sm">
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
                        <label className="block text-gray-800 font-semibold mb-2 text-sm">
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
                    
                    <div>
                      <label className="block text-gray-800 font-semibold mb-2 text-sm">
                        Tell us more about your needs <span className="text-brand-orange-500">*</span>
                      </label>
                      <textarea 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`input-field w-full px-4 py-3 rounded-xl border-2 focus:outline-none resize-none ${
                          formErrors.message ? 'error' : 'border-gray-200'
                        }`}
                        placeholder="Describe your project, timeline, specific requirements, team size needed, or any challenges..."
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>💡 The more details you provide, the better we can help</span>
                        <span>{formData.message.length}/1000</span>
                      </div>
                      {formErrors.message && (
                        <div className="text-brand-orange-500 text-xs mt-2 flex items-center">
                          <FaExclamationTriangle className="mr-1" />
                          {formErrors.message}
                        </div>
                      )}
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary gradient-primary text-white px-10 py-4 rounded-full font-bold text-lg w-full md:w-auto hover-lift shadow-xl flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="mr-3 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="mr-3" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card rounded-3xl p-8 border border-white/60 sticky top-24">
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
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-brand-blue-50 transition-all border border-transparent hover:border-brand-blue-100">
                        <div className="w-12 h-12 bg-white shadow-sm rounded-full flex flex-shrink-0 items-center justify-center">
                          <item.icon className="text-brand-blue-600 text-lg" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{item.text}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'call' && (
       <section className="py-20 bg-gradient-to-br from-brand-blue-50 to-brand-blue-100">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="glass-card-strong rounded-3xl p-12 shadow-xl border border-white/60">
      <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow shadow-lg shadow-brand-blue-500/20">
        <FaPhone className="text-4xl text-white" />
      </div>

      <h2 className="text-4xl font-black mb-4 text-gray-800">
        Ready to Talk?
      </h2>

      <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
        Our experts are ready to discuss your software development, AI automation,
        web applications, and digital solutions. Let's schedule a free consultation.
      </p>

      <div className="mb-10">
        <div className="text-xl font-bold text-brand-blue-600 mb-2 uppercase tracking-wide text-sm">
          India Office
        </div>

        <a
          href="tel:+917487960042"
          className="text-4xl md:text-5xl font-black text-gray-800 hover:text-brand-blue-600 transition-colors block mb-2"
        >
          +91 7487-960042
        </a>

        <div className="text-gray-500 font-medium">
          Mon - Sat: 9:00 AM - 7:00 PM IST
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur border border-brand-blue-200 rounded-2xl p-4 mb-10 inline-block px-8">
        <div className="flex items-center justify-center space-x-3 text-brand-blue-700">
          <div className="w-3 h-3 bg-brand-blue-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-sm">
            Our team is available to assist you
          </span>
        </div>
      </div>

      <div>
        <a
          href="tel:+917487960042"
          className="inline-flex items-center btn-primary gradient-primary text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover-lift"
        >
          <FaPhone className="mr-3" />
          Call Now
        </a>
      </div>
    </div>
  </div>
</section>
      )}

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 animate-fade-up ${isVisible['faq'] ? 'visible' : ''}`}
            data-animate="faq"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get instant answers to common questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl shadow-sm hover-lift border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-blue-50 rounded-full flex flex-shrink-0 items-center justify-center">
                      <faq.icon className="text-brand-blue-600 text-lg" />
                    </div>
                    <div className="font-bold text-lg text-gray-800">{faq.question}</div>
                  </div>
                  <FaChevronDown 
                    className={`text-gray-400 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180 text-brand-blue-600' : ''
                    }`} 
                  />
                </button>
                
                <div className={`faq-content ${openFaq === index ? 'open' : ''}`}>
                  <div className="px-6 pb-6 pt-0 pl-22 ml-16">
                    <p className="text-gray-600 leading-relaxed bg-gray-50/50 p-4 rounded-xl border border-gray-100/50">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-brand-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900">
              Our Global <span className="gradient-text">Presence</span>
            </h2>
            <p className="text-lg text-gray-600">
              Strategic locations worldwide ensure we're always close to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
         <div className="glass-card rounded-3xl p-10 text-center hover-lift border border-white/60 bg-white/40">
  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue-500/20">
    <FaBuilding className="text-2xl text-white" />
  </div>

  <h4 className="font-black text-gray-900 text-2xl mb-4">
    USA Headquarter
  </h4>

  <div className="space-y-1 text-gray-600 mb-6">
    <p className="font-medium text-gray-800 "><b>Sheridan, Wyoming, USA</b></p>
    <p>1309 Coffeen Avenue</p>
    <p>STE 1200</p>
    <p>Sheridan, WY 82801</p>
  </div>

  <a
    href="tel:+14696069505"
    className="inline-block text-brand-blue-600 font-bold hover:text-brand-blue-700 bg-brand-blue-50 px-6 py-2 rounded-full transition-colors"
  >
    +1 (469) 606-9505
  </a>
</div>
            
          <div className="glass-card rounded-3xl p-10 text-center hover-lift border border-white/60 bg-white/40">
  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue-500/20">
    <FaBuilding className="text-2xl text-white" />
  </div>

  <h4 className="font-black text-gray-900 text-2xl mb-4">
    India Operations
  </h4>

  <div className="space-y-1 text-gray-600 mb-6">
    <p className="font-medium text-gray-800"><b>Vadodara, Gujarat, India</b></p>
    <p>207 Lotus Elite, T B Sanatorium</p>
    <p>Near Old Gotri Jakat Naka</p>
    <p>Gotri, Vadodara, Gujarat - 390021</p>
  </div>

  <a
    href="tel:+917487960042"
    className="inline-block text-brand-orange-600 font-bold hover:text-brand-orange-700 bg-brand-orange-50 px-6 py-2 rounded-full transition-colors"
  >
    +91 7487-960042
  </a>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
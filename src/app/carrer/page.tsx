"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaGraduationCap,
  FaHeart,
  FaCoffee,
  FaLaptop,
  FaPlane,
  FaShieldAlt,
  FaMedkit,
  FaCalendarAlt,
  FaStar,
  FaArrowRight,
  FaFilter,
  FaTimes,
  FaChevronDown,
  FaPlay,
  FaQuoteLeft,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaRocket,
  FaTrophy,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaCode,
  FaChartLine,
  FaPalette,
  FaUserTie,
  FaHeadset,
  FaDatabase,
  FaVideo,
  FaUpload,
  FaCheckCircle,
  FaSpinner,
  FaEye,
  FaBookmark,
  FaShare,
  FaBuilding,
  FaAward,
  FaGamepad,
  FaPizzaSlice,
  FaDumbbell,
  FaTree,
  FaWifi,
  FaParking,
  FaBus,
  FaGift
} from 'react-icons/fa';
import Header from '../header/page';
import Footer from '../footer/page';

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [isVisible, setIsVisible] = useState({});
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    availability: '',
    salary: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const observerRef = useRef(null);

  // Animation Observer
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

  // Job Categories
  const categories = [
    { id: 'all', name: 'All Positions', icon: FaBriefcase, count: 47 },
    { id: 'engineering', name: 'Engineering', icon: FaCode, count: 15 },
    { id: 'design', name: 'Design', icon: FaPalette, count: 8 },
    { id: 'sales', name: 'Sales', icon: FaChartLine, count: 12 },
    { id: 'marketing', name: 'Marketing', icon: FaLightbulb, count: 6 },
    { id: 'hr', name: 'Human Resources', icon: FaUsers, count: 4 },
    { id: 'operations', name: 'Operations', icon: FaBuilding, count: 2 }
  ];

  // Job Listings
  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      level: 'Senior',
      salary: '$120,000 - $180,000',
      posted: '2 days ago',
      featured: true,
      urgent: false,
      remote: true,
      description: 'Join our dynamic engineering team to build next-generation staffing solutions using React, Node.js, and cloud technologies.',
      requirements: ['5+ years React/Node.js experience', 'Strong problem-solving skills', 'Experience with cloud platforms', 'Team collaboration skills'],
      benefits: ['Health Insurance', 'Remote Work', '401k Matching', 'Unlimited PTO'],
      category: 'engineering'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      level: 'Mid-level',
      salary: '$90,000 - $130,000',
      posted: '1 week ago',
      featured: true,
      urgent: true,
      remote: true,
      description: 'Design beautiful and intuitive user experiences for our staffing platform used by thousands of companies worldwide.',
      requirements: ['3+ years UX/UI design experience', 'Proficiency in Figma/Sketch', 'User research skills', 'Portfolio required'],
      benefits: ['Creative Freedom', 'Design Budget', 'Conference Attendance', 'Flexible Hours'],
      category: 'design'
    },
    {
      id: 3,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      level: 'Entry-level',
      salary: '$50,000 - $80,000 + Commission',
      posted: '3 days ago',
      featured: false,
      urgent: false,
      remote: true,
      description: 'Generate new business opportunities and build relationships with potential clients in the staffing industry.',
      requirements: ['1-2 years sales experience', 'Strong communication skills', 'CRM experience', 'Goal-oriented mindset'],
      benefits: ['High Commission', 'Sales Training', 'Career Growth', 'Team Events'],
      category: 'sales'
    },
    {
      id: 4,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'London, UK',
      type: 'Full-time',
      level: 'Mid-level',
      salary: '£60,000 - £80,000',
      posted: '5 days ago',
      featured: false,
      urgent: false,
      remote: false,
      description: 'Lead marketing campaigns and brand initiatives to drive growth and awareness in the European market.',
      requirements: ['4+ years marketing experience', 'Digital marketing expertise', 'Analytics skills', 'Campaign management'],
      benefits: ['International Team', 'Marketing Budget', 'Growth Opportunities', 'London Office'],
      category: 'marketing'
    },
    {
      id: 5,
      title: 'HR Business Partner',
      department: 'Human Resources',
      location: 'Chicago, IL',
      type: 'Full-time',
      level: 'Senior',
      salary: '$85,000 - $110,000',
      posted: '1 day ago',
      featured: true,
      urgent: true,
      remote: false,
      description: 'Partner with business leaders to drive HR initiatives and support our growing team across multiple locations.',
      requirements: ['5+ years HR experience', 'SHRM certification preferred', 'Business partnership skills', 'Change management'],
      benefits: ['HR Leadership', 'Professional Development', 'Certification Support', 'Impact Role'],
      category: 'hr'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      level: 'Mid-level',
      salary: '$100,000 - $140,000',
      posted: '4 days ago',
      featured: false,
      urgent: false,
      remote: true,
      description: 'Build and maintain our cloud infrastructure to support millions of users and thousands of transactions daily.',
      requirements: ['3+ years DevOps experience', 'AWS/Azure expertise', 'Docker/Kubernetes', 'CI/CD pipelines'],
      benefits: ['Cloud Training', 'Certification Budget', 'Remote First', 'Tech Stack Freedom'],
      category: 'engineering'
    }
  ];

  // Company Benefits
  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        { icon: FaMedkit, title: 'Premium Health Insurance', desc: '100% covered medical, dental, vision' },
        { icon: FaDumbbell, title: 'Fitness Membership', desc: 'Gym membership or fitness app subscription' },
        { icon: FaHeart, title: 'Mental Health Support', desc: 'Counseling services and wellness programs' },
        { icon: FaPizzaSlice, title: 'Healthy Snacks', desc: 'Unlimited healthy snacks and beverages' }
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        { icon: FaCalendarAlt, title: 'Unlimited PTO', desc: 'Take time off when you need it' },
        { icon: FaLaptop, title: 'Remote Work', desc: 'Work from anywhere in the world' },
        { icon: FaClock, title: 'Flexible Hours', desc: 'Set your own schedule' },
        { icon: FaPlane, title: 'Sabbatical Program', desc: '4-week paid sabbatical after 5 years' }
      ]
    },
    {
      category: 'Growth & Development',
      items: [
        { icon: FaGraduationCap, title: 'Learning Budget', desc: '$2,000 annual education allowance' },
        { icon: FaTrophy, title: 'Career Advancement', desc: 'Clear promotion paths and mentorship' },
        { icon: FaRocket, title: 'Conference Attendance', desc: 'Attend industry conferences worldwide' },
        { icon: FaAward, title: 'Certification Support', desc: 'Company-sponsored certifications' }
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        { icon: FaDollarSign, title: 'Competitive Salary', desc: 'Above-market compensation packages' },
        { icon: FaShieldAlt, title: '401(k) Matching', desc: '6% company matching contribution' },
        { icon: FaStar, title: 'Equity Program', desc: 'Stock options for all employees' },
        { icon: FaGift, title: 'Annual Bonuses', desc: 'Performance-based bonus program' }
      ]
    }
  ];

  // Employee Testimonials
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      department: 'Engineering',
      image: '/api/placeholder/100/100',
      quote: 'The growth opportunities here are incredible. In just 2 years, I\'ve grown from a junior developer to leading my own team. The company truly invests in your success.',
      rating: 5,
      tenure: '2 years',
      location: 'New York'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'UX Design Lead',
      department: 'Design',
      image: '/api/placeholder/100/100',
      quote: 'Working here feels like being part of a family. The collaborative culture and creative freedom allow me to do my best work while maintaining work-life balance.',
      rating: 5,
      tenure: '3 years',
      location: 'San Francisco'
    },
    {
      name: 'Emily Watson',
      role: 'Sales Director',
      department: 'Sales',
      image: '/api/placeholder/100/100',
      quote: 'The support system here is amazing. From onboarding to ongoing training, they set you up for success. I\'ve exceeded my targets every quarter!',
      rating: 5,
      tenure: '1.5 years',
      location: 'Remote'
    }
  ];

  // Career Paths
  const careerPaths = [
    {
      track: 'Engineering',
      icon: FaCode,
      color: 'bg-brand-blue-600',
      levels: [
        { title: 'Junior Developer', salary: '$60k-80k', years: '0-2' },
        { title: 'Software Engineer', salary: '$80k-120k', years: '2-4' },
        { title: 'Senior Engineer', salary: '$120k-160k', years: '4-7' },
        { title: 'Tech Lead', salary: '$150k-200k', years: '6-10' },
        { title: 'Engineering Manager', salary: '$180k-250k', years: '8+' }
      ]
    },
    {
      track: 'Design',
      icon: FaPalette,
      color: 'bg-brand-orange-500',
      levels: [
        { title: 'Junior Designer', salary: '$50k-70k', years: '0-2' },
        { title: 'UX/UI Designer', salary: '$70k-100k', years: '2-4' },
        { title: 'Senior Designer', salary: '$100k-130k', years: '4-6' },
        { title: 'Design Lead', salary: '$120k-160k', years: '5-8' },
        { title: 'Design Director', salary: '$150k-200k', years: '7+' }
      ]
    },
    {
      track: 'Sales & Marketing',
      icon: FaChartLine,
      color: 'bg-brand-blue-500',
      levels: [
        { title: 'SDR', salary: '$45k-65k', years: '0-1' },
        { title: 'Account Executive', salary: '$70k-100k', years: '1-3' },
        { title: 'Senior AE', salary: '$100k-140k', years: '3-5' },
        { title: 'Sales Manager', salary: '$130k-180k', years: '4-7' },
        { title: 'VP of Sales', salary: '$200k-300k', years: '7+' }
      ]
    }
  ];

  // Filter Jobs
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    const matchesLevel = selectedLevel === 'all' || job.level.toLowerCase() === selectedLevel.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesLocation && matchesLevel;
  });

  // Handle Job Save
  const handleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  // Handle Application Submit
  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setApplicationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        coverLetter: '',
        portfolio: '',
        linkedin: '',
        availability: '',
        salary: '',
        consent: false
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50 min-h-screen text-gray-800 font-inter">
      
      {/* Enhanced Styles */}
      <style jsx>{`
        .font-inter { font-family: 'Inter', sans-serif; }
        .gradient-primary { background: linear-gradient(135deg, #0099E6 0%, #3DBEFF 100%); }
        .gradient-text { 
          background: linear-gradient(135deg, #0099E6 0%, #3DBEFF 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-slide-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-slide-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .animate-slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-slide-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .job-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .job-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .benefit-item {
          transition: all 0.3s ease;
        }
        
        .benefit-item:hover {
          transform: scale(1.05);
        }
        
        .testimonial-card {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: scale(1.02);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
        
        .career-path {
          position: relative;
        }
        
        .career-path::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 60px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #0099E6, #3DBEFF);
        }
        
        .path-level {
          position: relative;
          z-index: 2;
        }
        
        .search-input {
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(0, 153, 230, 0.3);
        }
        
        .filter-tag {
          transition: all 0.2s ease;
        }
        
        .filter-tag:hover {
          transform: scale(1.05);
        }
        
        .apply-button {
          position: relative;
          overflow: hidden;
        }
        
        .apply-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .apply-button:hover::before {
          left: 100%;
        }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-blue-600 via-brand-blue-600 to-brand-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center animate-slide-up ${isVisible['hero'] ? 'visible' : ''}`} data-animate="hero">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight">
              Build Your <span className="text-brand-orange-300">Dream Career</span> With Us
            </h1>
         
          </div>
        </div>
      </section>

      {/* Job Search & Filter Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search positions, departments, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-brand-blue-500 focus:outline-none text-gray-800 font-medium"
              />
            </div>
            
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-4 bg-brand-blue-600 text-white rounded-2xl font-bold hover:bg-brand-blue-700 transition-all"
            >
              <FaFilter />
              <span>Filters</span>
              <FaChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-6 p-6 glass-morphism rounded-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue-500 focus:outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name} ({cat.count})</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue-500 focus:outline-none"
                  >
                    <option value="all">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="London">London</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Experience Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue-500 focus:outline-none"
                  >
                    <option value="all">All Levels</option>
                    <option value="entry-level">Entry Level</option>
                    <option value="mid-level">Mid Level</option>
                    <option value="senior">Senior Level</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {/* Quick Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.slice(1).map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-tag flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id 
                    ? 'bg-brand-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="text-sm" />
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-gradient-to-br from-brand-blue-50 via-brand-blue-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 animate-slide-up ${isVisible['jobs'] ? 'visible' : ''}`} data-animate="jobs">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-800">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover your next career opportunity. We have {filteredJobs.length} positions available across various departments and locations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className={`job-card glass-morphism rounded-2xl p-8 backdrop-blur-xl shadow-lg relative overflow-hidden animate-slide-up ${isVisible[`job-${index}`] ? 'visible' : ''}`}
                data-animate={`job-${index}`}
                onClick={() => setSelectedJob(job)}
              >
                {/* Job Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.featured && (
                    <span className="bg-brand-orange-400 text-brand-orange-900 px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </span>
                  )}
                  {job.urgent && (
                    <span className="bg-brand-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🔥 Urgent
                    </span>
                  )}
                  {job.remote && (
                    <span className="bg-brand-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🌐 Remote
                    </span>
                  )}
                </div>

                {/* Job Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <FaBuilding className="mr-2" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveJob(job.id);
                    }}
                    className={`p-2 rounded-full transition-all ${
                      savedJobs.includes(job.id)
                        ? 'bg-brand-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-brand-blue-100'
                    }`}
                  >
                    <FaBookmark />
                  </button>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <FaBriefcase className="mr-2" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <FaGraduationCap className="mr-2" />
                      {job.level}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <FaDollarSign className="mr-2" />
                      {job.salary}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <FaClock className="mr-2" />
                      {job.posted}
                    </span>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                  {job.description}
                </p>

                {/* Benefits Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.benefits.slice(0, 3).map((benefit, i) => (
                    <span key={i} className="bg-brand-blue-100 text-brand-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {benefit}
                    </span>
                  ))}
                  {job.benefits.length > 3 && (
                    <span className="text-gray-500 text-xs">+{job.benefits.length - 3} more</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="apply-button flex-1 gradient-primary text-white py-3 rounded-xl font-bold hover:scale-105 transition-all">
                    Apply Now
                  </button>
                  <button className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all">
                    <FaEye />
                  </button>
                  <button className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all">
                    <FaShare />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No positions found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 animate-slide-up ${isVisible['benefits'] ? 'visible' : ''}`} data-animate="benefits">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-800">
              Why You'll <span className="gradient-text">Love</span> Working Here
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We believe in taking care of our team members with comprehensive benefits that support your health, growth, and happiness.
            </p>
          </div>

          {benefits.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-black text-gray-800 mb-8 text-center">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((benefit, index) => (
                  <div
                    key={index}
                    className={`benefit-item glass-morphism rounded-2xl p-6 text-center backdrop-blur-xl shadow-lg animate-slide-up ${isVisible[`benefit-${categoryIndex}-${index}`] ? 'visible' : ''}`}
                    data-animate={`benefit-${categoryIndex}-${index}`}
                  >
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-2xl text-white" />
                    </div>
                    <h4 className="font-black text-gray-800 text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Employee Testimonials */}
      <section className="py-24 bg-gradient-to-br from-brand-blue-100 via-brand-blue-100 to-brand-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 animate-slide-up ${isVisible['testimonials'] ? 'visible' : ''}`} data-animate="testimonials">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-800">
              Hear From Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our team members have to say about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card glass-morphism rounded-2xl p-8 backdrop-blur-xl shadow-lg animate-slide-up ${isVisible[`testimonial-${index}`] ? 'visible' : ''}`}
                data-animate={`testimonial-${index}`}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-400 to-brand-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-black text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-brand-orange-400" />
                    ))}
                  </div>
                </div>

                <div className="relative mb-6">
                  <FaQuoteLeft className="text-3xl text-brand-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <div>{testimonial.department}</div>
                    <div>{testimonial.tenure} • {testimonial.location}</div>
                  </div>
                  <div className="flex space-x-2">
                    <FaLinkedinIn className="text-brand-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                    <FaTwitter className="text-brand-blue-400 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth Paths */}
      {/* <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 animate-slide-up ${isVisible['career-paths'] ? 'visible' : ''}`} data-animate="career-paths">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-800">
              Your <span className="gradient-text">Career Journey</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We believe in promoting from within. See the clear advancement opportunities available in each department.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {careerPaths.map((path, pathIndex) => (
              <div
                key={pathIndex}
                className={`career-path animate-slide-up ${isVisible[`path-${pathIndex}`] ? 'visible' : ''}`}
                data-animate={`path-${pathIndex}`}
              >
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${path.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <path.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800">{path.track}</h3>
                </div>

                <div className="space-y-6 pl-12">
                  {path.levels.map((level, levelIndex) => (
                    <div key={levelIndex} className="path-level relative">
                      <div className="absolute -left-12 top-1 w-10 h-10 bg-white border-4 border-brand-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-brand-blue-600 font-bold text-sm">{levelIndex + 1}</span>
                      </div>
                      <div className="glass-morphism rounded-xl p-4 backdrop-blur-xl">
                        <h4 className="font-black text-gray-800 mb-2">{level.title}</h4>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{level.years} years</span>
                          <span className="font-bold text-brand-blue-600">{level.salary}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Form Section */}
      {/* <section className="py-24 bg-gradient-to-br from-brand-blue-600 via-brand-blue-600 to-brand-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`text-center mb-16 animate-slide-up ${isVisible['application'] ? 'visible' : ''}`} data-animate="application">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              Ready to <span className="text-brand-orange-300">Join Us?</span>
            </h2>
            <p className="text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
              Submit your application and join our team of innovators. We review all applications within 48 hours.
            </p>
          </div>

          {submitSuccess ? (
            <div className="glass-morphism rounded-2xl p-12 text-center backdrop-blur-xl">
              <div className="w-24 h-24 bg-brand-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Application Submitted!</h3>
              <p className="text-lg opacity-90 mb-6">Thank you for your interest. We'll review your application and get back to you within 48 hours.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="bg-white text-brand-blue-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="glass-morphism rounded-2xl p-8 backdrop-blur-xl">
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={applicationData.firstName}
                      onChange={(e) => setApplicationData({...applicationData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={applicationData.lastName}
                      onChange={(e) => setApplicationData({...applicationData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">Position of Interest *</label>
                    <select
                      required
                      value={applicationData.position}
                      onChange={(e) => setApplicationData({...applicationData, position: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:border-brand-orange-300"
                    >
                      <option value="" className="text-gray-800">Select a position</option>
                      {jobListings.map(job => (
                        <option key={job.id} value={job.title} className="text-gray-800">{job.title}</option>
                      ))}
                      <option value="other" className="text-gray-800">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">Years of Experience</label>
                    <select
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:border-brand-orange-300"
                    >
                      <option value="" className="text-gray-800">Select experience</option>
                      <option value="0-1" className="text-gray-800">0-1 years</option>
                      <option value="2-4" className="text-gray-800">2-4 years</option>
                      <option value="5-7" className="text-gray-800">5-7 years</option>
                      <option value="8+" className="text-gray-800">8+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">Resume *</label>
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-brand-orange-300 transition-all cursor-pointer">
                    <FaUpload className="text-3xl text-white/70 mx-auto mb-3" />
                    <p className="text-white/90 mb-2">Drag & drop your resume here, or click to browse</p>
                    <p className="text-white/70 text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setApplicationData({...applicationData, resume: e.target.files[0]})}
                      className="hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">Cover Letter</label>
                  <textarea
                    rows="4"
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300 resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">Portfolio/Website</label>
                    <input
                      type="url"
                      value={applicationData.portfolio}
                      onChange={(e) => setApplicationData({...applicationData, portfolio: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      value={applicationData.linkedin}
                      onChange={(e) => setApplicationData({...applicationData, linkedin: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-brand-orange-300"
                      placeholder="https://linkedin.com/in/yourname"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={applicationData.consent}
                    onChange={(e) => setApplicationData({...applicationData, consent: e.target.checked})}
                    className="h-5 w-5 text-brand-orange-400 rounded focus:ring-brand-orange-300"
                  />
                  <label className="text-white/90 text-sm">
                    I agree to the processing of my personal data and understand that I can withdraw consent at any time. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange-400 text-brand-blue-900 py-4 rounded-xl font-black text-lg hover:bg-brand-orange-300 transition-all hover:scale-105 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <FaRocket />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section> */}

      {/* Office Culture & Perks */}
      {/* <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 animate-slide-up ${isVisible['culture'] ? 'visible' : ''}`} data-animate="culture">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-800">
              Office <span className="gradient-text">Culture & Perks</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Beyond great benefits, we've created an environment where creativity thrives and work feels like play.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {[
              { icon: FaGamepad, title: 'Game Room', desc: 'Pool, ping pong, video games' },
              { icon: FaCoffee, title: 'Free Coffee', desc: 'Premium coffee & tea bar' },
              { icon: FaPizzaSlice, title: 'Free Meals', desc: 'Catered lunch 3x per week' },
              { icon: FaWifi, title: 'High-Speed WiFi', desc: 'Gigabit internet everywhere' },
              { icon: FaParking, title: 'Free Parking', desc: 'Reserved parking spaces' },
              { icon: FaBus, title: 'Shuttle Service', desc: 'Free shuttle to transit' }
            ].map((perk, index) => (
              <div key={index} className="text-center p-4 glass-morphism rounded-xl backdrop-blur-xl hover:scale-105 transition-all">
                <perk.icon className="text-3xl text-brand-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 text-sm mb-1">{perk.title}</h4>
                <p className="text-gray-600 text-xs">{perk.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-morphism rounded-2xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-black text-gray-800 mb-4">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Innovation First', desc: 'We encourage bold ideas and creative solutions' },
                    { title: 'Work-Life Balance', desc: 'Your wellbeing is our priority' },
                    { title: 'Growth Mindset', desc: 'Continuous learning and development' },
                    { title: 'Diversity & Inclusion', desc: 'Everyone belongs and thrives here' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-morphism rounded-2xl p-6 backdrop-blur-xl text-center">
                <FaUsers className="text-4xl text-brand-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-gray-800 mb-2">Team Events</h3>
                <p className="text-gray-600 text-sm mb-4">Monthly team building activities and quarterly company retreats</p>
                <button className="bg-brand-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-blue-700 transition-all">
                  See Photos
                </button>
              </div>
              
              <div className="glass-morphism rounded-2xl p-6 backdrop-blur-xl text-center">
                <FaTree className="text-4xl text-brand-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-gray-800 mb-2">Green Initiative</h3>
                <p className="text-gray-600 text-sm mb-4">Carbon neutral office with sustainability programs</p>
                <button className="bg-brand-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-blue-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default CareersPage;

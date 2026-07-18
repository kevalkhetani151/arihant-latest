"use client";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import React from 'react';
import { motion } from 'framer-motion'; // Added for new Hero
import { Sparkles, ArrowRight, CheckCircle2, Globe2, Users } from 'lucide-react'; // Added for new Hero

import { 
  // Navigation & UI Icons
  FaBars, FaChevronDown, FaArrowRight, FaFileDownload, FaCalendar, FaPhone, FaEnvelope,
  // Service Icons
  FaUserPlus, FaUsersCog, FaCode, FaLaptopCode, FaNetworkWired, FaUsers, FaCrown, 
  FaRocket, FaGlobe, FaPuzzlePiece, FaFilter, FaSearch, FaTrophy, FaChartLine,
  FaAward, FaCogs, FaIndustry, FaShoppingCart, FaHeartbeat,
  // Social Icons
  FaLinkedinIn, FaTwitter, FaFacebookF,
  // Check & Status Icons
  FaCheckCircle, FaBounce, FaLightbulb, FaShieldAlt, FaClock, FaEye,
  FaPalette, FaUserTie, FaGraduationCap, FaLeaf, FaCog,
  // About section icons
  FaBriefcase, FaHandshake
} from 'react-icons/fa';

import {
  // Material Design Icons for additional variety
  MdDashboard, MdPeople, MdBarChart, MdSettings, MdNotifications, MdMail,
  MdVerified, MdSpeed, MdSecurity, MdSupport
} from 'react-icons/md';

import {
  // Bootstrap Icons for even more options
  BsHeartbeat, BsPulse, BsShieldCheck
} from 'react-icons/bs';
import Header from "../header/page";
import Footer from "../footer/page";
import Image from "next/image";

// --- DATA CONSTANTS ---

const steps = [
  {
    number: 1,
    title: 'Discovery & Analysis',
    description:
      'We deep-dive into your company culture, requirements, and success criteria using our proprietary assessment framework.',
    icon: <FaSearch className="w-4 h-4 text-brand-blue-500" />,
  },
  {
    number: 2,
    title: 'AI-Powered Sourcing',
    description:
      'Our AI algorithms scan millions of profiles across leading talent platforms to identify the perfect candidates for your role.',
    icon: <FaRocket className="w-4 h-4 text-brand-blue-500" />,
  },
  {
    number: 3,
    title: 'Smart Screening',
    description:
      'Multi-layered evaluation including skills assessment, cultural fit analysis, and predictive performance modeling.',
    icon: <FaShieldAlt className="w-4 h-4 text-brand-blue-500" />,
  },
  {
    number: 4,
    title: 'Expert Screening',
    description:
      'Our senior recruiters conduct in-depth screening to validate technical skills and ensure perfect alignment.',
    icon: <FaUserPlus className="w-4 h-4 text-brand-orange-500" />,
  },
  {
    number: 5,
    title: 'Seamless Integration',
    description:
      'We facilitate the entire placement process and provide ongoing support to ensure successful integration.',
    icon: <FaCheckCircle className="w-4 h-4 text-brand-blue-500" />,
  },
];



const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
    alt: "Students studying together with a laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=500&q=80&auto=format&fit=crop",
    alt: "Two women smiling and studying with a tablet",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80&auto=format&fit=crop",
    alt: "Happy students laughing together",
  },
];

const STATS = [
  {
    value: "15,2K",
    label: "Active students",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 18, height: 18 }}
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "4,5K",
    label: "Tutors",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 18, height: 18 }}
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    value: "Resources",
    label: null,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 18, height: 18 }}
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const styles = {
  black: "#111110",
  grayMid: "#6b6b68",
  grayLight: "#f5f5f3",
  border: "#e2e2de",
  accentBlue: "#F0FAFF",
  accentPurple: "#F0FAFF",
  indigo: "#0099E6",
};

const industries = [
  {
    title: 'Technology',
    description: 'Software Development, Gen AI, Data Engineer, SAP, SalesForce, AI/ML, Cybersecurity, Cloud Infrastructure',
    icon: <FaLaptopCode className="text-white text-2xl" />,
   
  },
  {
    title: 'Healthcare',
    description: 'Medical Professionals, Healthcare IT, Pharmaceutical Research',
    icon: <FaHeartbeat className="text-white text-2xl" />,
    
  },
  {
    title: 'Finance',
    description: 'Banking, Fintech, Investment Management, Accounting',
    icon: <FaChartLine className="text-white text-2xl" />,
   
  },
  {
    title: 'Manufacturing',
    description: 'Industrial Engineering, Supply Chain, Quality Assurance',
    icon: <FaCog className="text-white text-2xl" />,
   
  },
  {
    title: 'Education',
    description: 'EdTech, Online Learning, Academic Administration',
    icon: <FaGraduationCap className="text-white text-2xl" />,
    
  },
  {
    title: 'Clean Energy',
    description: 'Renewable Energy, Sustainability, Green Technology',
    icon: <FaLeaf className="text-white text-2xl" />,
    
  },
  {
    title: 'Creative',
    description: 'Design, Marketing, Content Creation, Media Production',
    icon: <FaPalette className="text-white text-2xl" />,
    
  },
  {
    title: 'Consulting & Advisory',
    description: 'Strategy Consulting, Business Transformation, Risk Advisory',
    icon: <FaUserTie className="text-white text-2xl" />,
   
  },
];

// Team members data
const teamMembers = [
  {
    name: 'Nishant Panchamiya',
    position: 'Founder & CEO',
    description: 'Visionary leader with extensive experience in staffing solutions and driving organizational growth.',
    initials: 'NP',
    linkedin: '#',
    email: 'nishant@arihantstaffing.com',
    gradient: 'from-brand-blue-400 to-brand-blue-600'
  },
  {
    name: 'Dhaval Panchamiya',
    position: 'Director Of Recruiting Operations',
    description: 'Expert in recruitment strategy and operations with a proven track record of delivering high-impact staffing solutions.',
    initials: 'DP',
    linkedin: '#',
    email: 'dhaval@arihantstaffing.com',
    gradient: 'from-brand-blue-500 to-brand-blue-700'
  }
];

// Enhanced Counter Component for animated numbers
const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const numericTarget = parseFloat(target.toString().replace(/[^\d.]/g, ''));
    const increment = numericTarget / (duration * 60); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      setCount(current);
    }, 1000 / 60);
  };

  const formatValue = () => {
    if (target.toString().includes('.')) {
      return `${prefix}${count.toFixed(1)}${suffix}`;
    } else {
      return `${prefix}${Math.floor(count)}${suffix}`;
    }
  };

  return <span ref={elementRef}>{formatValue()}</span>;
};


// --- HERO ANIMATION COMPONENTS ---

// 1. Drifting Particles (Abstract representation of Talent/Data)
const DriftingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ 
            opacity: [p.opacity, 1, p.opacity],
            y: [0, -30], // Upward drift = Growth/Ascension
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: p.delay
          }}
        />
      ))}
      <ShootingStar />
    </div>
  );
};

// 2. Moving Fog (Stable atmosphere)
const MovingFog = () => {
    return (
        <div className="absolute bottom-[-50px] w-full h-[200px] overflow-hidden z-20 opacity-40">
            <motion.div 
                className="absolute bottom-0 left-[-20%] w-[140%] h-full bg-gradient-to-t from-brand-blue-500/20 to-transparent blur-3xl"
                animate={{ x: ["-10%", "10%", "-10%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute bottom-0 right-[-20%] w-[140%] h-full bg-gradient-to-t from-brand-blue-500/20 to-transparent blur-3xl"
                animate={{ x: ["10%", "-10%", "10%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}

// 3. Shooting Star (The "Search" metaphor)
const ShootingStar = () => {
  return (
    <motion.div
      initial={{ left: "120%", top: "40%", opacity: 0 }}
      animate={{ 
        left: ["120%", "-20%"], 
        top: ["40%", "60%"],
        opacity: [0, 1, 0] 
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        repeatDelay: 8,
        ease: "linear"
      }}
      className="absolute w-[150px] h-[2px] bg-gradient-to-r from-transparent via-brand-blue-200 to-transparent rotate-[-10deg] blur-[1px]"
    />
  )
}



 function EduFlexHero() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
  });

  return (
    <section
      className="hero-section"
      style={{
        fontFamily: "'Manrope', 'Segoe UI', sans-serif",
        background: "#fff",
        color: styles.black,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        minHeight: "100vh",
        padding: "3rem 5% 4rem",
        gap: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style jsx>{`
      

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .btn-primary {
          background: ${styles.black};
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.85rem 1.8rem;
          border: 2px solid ${styles.black};
          border-radius: 100px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }

        .btn-primary:hover {
          background: #2a2a28;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: ${styles.black};
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.85rem 1.8rem;
          border: 2px solid ${styles.border};
          border-radius: 100px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }

        .btn-secondary:hover {
          border-color: ${styles.black};
          background: ${styles.grayLight};
          transform: translateY(-2px);
        }

        .img-card {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.11),
            0 2px 8px rgba(0,0,0,0.06);
          background: ${styles.grayLight};
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .img-card.card-1 {
          width: 62%;
          height: 52%;
          top: 0;
          left: 5%;
          z-index: 3;
          transform: rotate(-1deg);
        }

        .img-card.card-2 {
          width: 52%;
          height: 46%;
          top: 26%;
          right: 0;
          z-index: 4;
          transform: rotate(1.2deg);
        }

        .img-card.card-3 {
          width: 48%;
          height: 44%;
          bottom: 0;
          left: 8%;
          z-index: 2;
          transform: rotate(-0.8deg);
        }

        .img-card.card-1:hover {
          transform: rotate(-1deg) scale(1.04);
        }

        .img-card.card-2:hover {
          transform: rotate(1.2deg) scale(1.04);
        }

        .img-card.card-3:hover {
          transform: rotate(-0.8deg) scale(1.04);
        }

        .badge-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: ${styles.indigo};
          border-radius: 50%;
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }

          50% {
            transform: scale(1.45);
            opacity: 0.55;
          }
        }

        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
          }

          .img-stack {
            height: 360px !important;
            max-width: 440px !important;
          }
        }

        @media (max-width: 600px) {
          .hero-section {
            padding: 2rem 5% 2.5rem !important;
          }

          .hero-h1 {
            font-size: clamp(2rem, 9vw, 2.8rem) !important;
          }

          .img-stack {
            height: 290px !important;
          }

          .stats-row {
            gap: 1rem !important;
          }
        }

        @media (max-width: 430px) {
          .stats-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .stat-divider {
            display: none !important;
          }
        }
      `}</style>

      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          right: "5%",
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: styles.accentBlue,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "8%",
          right: "9%",
          width: 72,
          height: 72,
          borderRadius: 16,
          background: styles.accentPurple,
          zIndex: 0,
        }}
      />

      {/* LEFT */}
      <div style={{ position: "relative", zIndex: 1, ...fadeUp(0) }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#F0FAFF",
            color: styles.indigo,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            padding: "0.35rem 0.9rem",
            borderRadius: 100,
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          <span className="badge-dot" />
          New platform · 2026
        </div>

        <h1
          className="hero-h1"
          style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            marginBottom: "1.25rem",
          }}
        >
          A new way to learn
          <br />
          &amp; get <span style={{ color: styles.indigo }}>knowledge</span>
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: styles.grayMid,
            lineHeight: 1.7,
            maxWidth: 430,
            marginBottom: "2rem",
          }}
        >
          EduFlex is here for you with various courses &amp; materials from
          skilled tutors all around the world.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.875rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <button className="btn-primary">Join the Class</button>
          <button className="btn-secondary">Learn more</button>
        </div>

        <div
          className="stats-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div
                  className="stat-divider"
                  style={{
                    width: 1,
                    height: 32,
                    background: styles.border,
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: styles.grayLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.icon}
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: s.label ? "1rem" : "1.05rem",
                      fontWeight: 800,
                    }}
                  >
                    {s.value}
                  </span>

                  {s.label && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: styles.grayMid,
                      }}
                    >
                      {s.label}
                    </span>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 480,
          ...fadeUp(0.18),
        }}
      >
        <div
          className="img-stack"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 520,
            height: 480,
          }}
        >
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`img-card card-${i + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ zIndex: hovered === i ? 10 : undefined }}
            >
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frames: HTMLCanvasElement[] = [];

    let capturing = true;
    let lastTime = -1;
    let rafId = 0;

    const MAX_WIDTH = 960;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;

      lastTime = video.currentTime;

      const vw = video.videoWidth;
      const vh = video.videoHeight;

      if (!vw || !vh) return;

      const scale = Math.min(1, MAX_WIDTH / vw);

      const w = Math.round(vw * scale);
      const h = Math.round(vh * scale);

      const frameCanvas = document.createElement("canvas");
      frameCanvas.width = w;
      frameCanvas.height = h;

      const frameCtx = frameCanvas.getContext("2d");
      if (!frameCtx) return;

      frameCtx.drawImage(video, 0, 0, w, h);

      frames.push(frameCanvas);
    };

    const rafLoop = () => {
      captureFrame();

      if (capturing) {
        rafId = requestAnimationFrame(rafLoop);
      }
    };

    const startBoomerang = () => {
      if (!frames.length) return;

      canvas.width = frames[0].width;
      canvas.height = frames[0].height;

      video.style.display = "none";
      canvas.style.display = "block";

      let idx = 0;
      let dir = 1;
      let last = performance.now();

      const interval = 1000 / 30;

      const render = (now: number) => {
        if (now - last >= interval) {
          last = now;

          ctx.drawImage(frames[idx], 0, 0);

          idx += dir;

          if (idx >= frames.length - 1) {
            idx = frames.length - 1;
            dir = -1;
          } else if (idx <= 0) {
            idx = 0;
            dir = 1;
          }
        }

        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    };

    const onLoaded = () => {
      video.play().catch(() => {});
      rafId = requestAnimationFrame(rafLoop);
    };

    video.addEventListener("loadedmetadata", onLoaded);

    video.addEventListener("ended", () => {
      capturing = false;
      cancelAnimationFrame(rafId);
      startBoomerang();
    });

    if (video.readyState >= 1) {
      onLoaded();
    }

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[75vh] w-full overflow-hidden">
      <Image
        src="/hero-section2.jpeg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};


// --- MAIN COMPONENT ---




export default function CompleteBannerComponent({ backgroundRef, textRef }) {
  const [scrollY, setScrollY] = useState(0);
  
  // Header state management
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

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Enhanced navbar scroll effect
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Enhanced Custom Styles */}
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
        .navbar-scrolled {
          background: rgba(17, 24, 39, 0.95) !important;
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }
        .service-card:hover::before {
          left: 100%;
        }
        .floating-animation {
          animation: floating 6s ease-in-out infinite;
        }
        .morphing-shape {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph 8s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }
        .glass-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.15);
        }
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hover-lift:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
        }
        .process-step {
          transition: all 0.4s ease;
        }
        .process-step:hover {
          transform: translateY(-10px);
        }
        .process-step:hover .step-number {
          transform: scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .industry-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }
        .industry-card:hover::before {
          left: 100%;
        }
        .stats-section {
          background: linear-gradient(135deg, #3DBEFF 0%, #007AB8 100%);
        }
        .stats-item {
          transition: all 0.4s ease;
        }
        .stats-item:hover {
          transform: translateY(-10px) scale(1.05);
        }
        .team-member {
          transition: all 0.4s ease;
        }
        .team-member:hover {
          transform: translateY(-10px) scale(1.02);
        }
        .team-avatar {
          transition: all 0.3s ease;
        }
        .team-member:hover .team-avatar {
          transform: scale(1.1) rotate(5deg);
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
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

      {/* Enhanced Navigation Header */}
      <Header />

      {/* --- REPLACED HERO SECTION START --- */}
      <div className="mt-24">
     <HeroSection/>
     </div>
      {/* --- REPLACED HERO SECTION END --- */}

      {/* Enhanced Process Section */}
   <section id="process" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-5 py-2 bg-brand-blue-100 rounded-full text-brand-blue-600 font-semibold text-sm mb-5">
        <FaCogs className="mr-2" />
        Our Process
      </div>

      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
        How We <span className="text-brand-blue-600">Deliver Excellence</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Our proven 5-step process combines technology with human expertise to deliver exceptional results efficiently.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="text-center border border-gray-200 rounded-2xl p-6 bg-white shadow-sm"
        >
          <div className="relative mb-6 flex justify-center">
            <div className="w-20 h-20 bg-brand-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {step.number}
            </div>

            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center border border-gray-200">
              {step.icon}
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            {step.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <Link href="/about">
        <button className="bg-brand-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-brand-blue-700 transition">
          See Our Process
        </button>
      </Link>
    </div>
  </div>
</section>
      {/* Enhanced Industries Section */}
      <section id="industries" className="py-32 bg-gradient-to-br from-brand-blue-50 to-brand-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-brand-blue-100 rounded-full text-brand-blue-600 font-bold text-sm mb-6 shadow-lg">
              <FaIndustry className="mr-2" />
              Industry Expertise
              <FaTrophy className="ml-2 text-brand-orange-500" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              <span className="gradient-text">Expert</span> Across Multiple Domains
            </h2>
           <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
  Our deep industry experience and specialized recruitment team deliver targeted
  solutions for every domain.
</p>
          </div>

          {/* Enhanced Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="industry-card glass-card rounded-2xl p-8 text-center hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{industry.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Left Content */}
            <div className="space-y-10 animate-on-scroll">
              <div>
                <div className="inline-flex items-center px-6 py-3 bg-brand-blue-100 rounded-full text-brand-blue-600 font-bold text-sm mb-6 shadow-lg">
                  <FaAward className="mr-2" />
                  About Arihant Staffing
                  <MdVerified className="ml-2 text-lg" />
                </div>
                <h2 className="text-5xl lg:text-6xl font-black mb-8">
                  Why <span className="gradient-text">Leading Companies</span> Trust Us
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                    Led by two Co-Founders with 14+ years of industry expertise. We combine deep market knowledge with a consultative approach to deliver exceptional talent solutions.

                </p>
                <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                  Our focus is on quality, speed, and precision across every engagement.
                  Partner with us to build high-performing teams that drive lasting business success.

                </p>
              </div>

              <div className="space-y-8">
                {/* Enhanced Feature Items */}
                {[
                  {
                    icon: <FaBriefcase className="text-white text-xl" />,
                    title: 'Deep Industry Expertise',
                    color: 'from-brand-blue-400 to-brand-blue-600'
                  },
                  {
                    icon: <FaUsers className="text-white text-xl" />,
                    title: 'Vast Talent Network',
                    color: 'from-brand-orange-400 to-brand-orange-600'
                  },
                  {
                    icon: <FaHandshake className="text-white text-xl" />,
                    title: 'Proven Reliability',
                    color: 'from-brand-blue-500 to-brand-blue-700'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 animate-on-scroll hover:translate-x-2 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 hover:scale-110`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Call to Action */}
             
            </div>

            {/* Enhanced Right Content (Stats) */}
            <div className="relative animate-on-scroll">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="about-stat glass-card rounded-3xl p-8 text-center hover-lift">
                    <div className="text-5xl font-black gradient-text mb-3">
                      14+
                    </div>
                    <div className="text-gray-600 font-semibold">
                      Years Of Excellence
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-brand-blue-400 to-brand-blue-400 rounded-full mx-auto"></div>
                  </div>

                  <div className="about-stat glass-card rounded-3xl p-8 text-center hover-lift">
                    <div className="text-5xl font-black gradient-text mb-3">
                      50+
                    </div>
                    <div className="text-gray-600 font-semibold">
                     Expert Team Members
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-brand-blue-400 to-brand-blue-400 rounded-full mx-auto"></div>
                  </div>
                </div>

                <div className="space-y-8 mt-12">
                  <div className="about-stat glass-card rounded-3xl p-8 text-center hover-lift">
                    <div className="text-5xl font-black gradient-text mb-3">2M+</div>
                    <div className="text-gray-600 font-semibold">
                      Active Database
                    </div>
                    <div className="mt-3 w-12 h-1 bg-gradient-to-r from-brand-blue-400 to-brand-blue-400 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-brand-orange-400 to-brand-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FaRocket className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results That Speak Volumes Section */}
      <section className="py-32 stats-section text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="floating-animation absolute top-20 right-20 w-96 h-96 morphing-shape bg-white blur-3xl"></div>
          <div className="floating-animation absolute bottom-20 left-20 w-80 h-80 morphing-shape bg-brand-orange-300 blur-3xl" style={{ animationDelay: '-4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              Results That <span className="text-brand-orange-300">Speak Volumes</span>
            </h2>
            <p className="text-2xl text-brand-blue-100 max-w-4xl mx-auto leading-relaxed">
             Our track record of success demonstrates our commitment to delivering exceptional recruitment outcomes that transform businesses.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="500" suffix="+" />
              </div>
              <div className="text-2xl font-bold text-brand-blue-100 mb-2">
                Successful Placements
              </div>
            
            </div>

            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="50" suffix="+" />
              </div>
              <div className="text-2xl font-bold text-brand-blue-100 mb-2">
                Expert Team Members
              </div>

            </div>

            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="24" suffix="hrs" />
              </div>
              <div className="text-2xl font-bold text-brand-blue-100 mb-2">
                Average Match Time
              </div>
            
            </div>

            <div className="text-center stats-item animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6">
                <AnimatedCounter target="98.5" suffix="%" />
              </div>
              <div className="text-2xl font-bold text-brand-blue-100 mb-2">
                Client Retention Rate
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Experts Behind Your Success */}
      

     <section className="py-32 bg-white relative overflow-hidden">
  {/* Floating Background Effects */}
  <div className="absolute inset-0 opacity-10">
    <div className="floating-animation absolute top-20 left-20 w-96 h-96 morphing-shape bg-blue-500 blur-3xl"></div>
    <div
      className="floating-animation absolute bottom-20 right-20 w-80 h-80 morphing-shape bg-orange-400 blur-3xl"
      style={{ animationDelay: "-3s" }}
    ></div>
  </div>

  {/* Content */}
  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-gray-900">
      Ready to Transform Your <br />
      <span className="text-brand-orange-500">Hiring Process?</span>
    </h2>

    <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
     Join 200+ end clients and healthcare facilities that trust Arihant Staffing for their workforce needs. Experience the future of AI-powered recruitment and staffing.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
      <Link href="/contact">
        <button className="bg-brand-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl">
          <i className="fas fa-calendar mr-3"></i>
          Contact Us
        </button>
      </Link>

      <button className="border-2 border-brand-blue-600 text-brand-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-blue-600 hover:text-white transition-all duration-300">
        <i className="fas fa-phone mr-3"></i>
        Call : +1 973-891-7576
      </button>
    </div>
  </div>
</section>
      
      <Footer/>
    </div>
  );
}
"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function PremiumStaffingHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Subtle magnetic/parallax effect tracking for the trust badge
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden flex flex-col justify-center">
      
      {/* PRESERVED ORIGINAL SVG FILTERS */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* PRESERVED ORIGINAL BACKGROUND EFFECT */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#2563eb", "#1d4ed8", "#0f2f7a", "#f97316"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#2563eb", "#f97316"]}
        speed={0.2}
        wireframe={true}
        backgroundColor="transparent"
      />

      {/* PREMIUM CONTENT LAYER */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center h-full pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          
          {/* Refined Eyebrow Badge (using original glass-effect) */}
          {/* <motion.div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 shadow-lg"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.2em]">
              10,000+ Placements
            </span>
          </motion.div> */}

          {/* Elevated Headline mixing Sans and Italic Serif */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[1.05] tracking-tighter drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-white/90 font-medium">Where Companies</span>
            <span className="block">
              Meet Talent{" "}
              <motion.span
                className="font-serif italic font-light inline-block"
               
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                That Delivers.
              </motion.span>
            </span>
          </motion.h1>

          {/* Balanced Subtitle */}
          <motion.p
            className="text-lg md:text-xl font-light text-white/80 mb-12 leading-relaxed max-w-xl drop-shadow-md [text-wrap:balance]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Vantage Staffing connects ambitious companies with vetted, ready-to-work professionals — contract, contract-to-hire, or direct placement, matched in days instead of months.
          </motion.p>

          {/* Refined CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Find Work
              <motion.span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </motion.span>
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-100 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              I'm Hiring
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* TRUST STAMP (Pulsing Border with Mouse Parallax) */}
      <motion.div 
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-30 hidden md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: mousePosition.x * -30, 
          y: mousePosition.y * -30,
        }}
      >
        <div className="relative w-32 h-32 flex items-center justify-center">
          <PulsingBorder
            colors={["#2563eb", "#1d4ed8", "#f97316", "#fb923c", "#1e40af", "#fdba74", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.08}
            softness={0.2}
            intensity={5}
            spotsPerColor={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.7}
            rotation={0}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
            }}
          />

          <motion.svg
            className="absolute inset-0 w-full h-full drop-shadow-lg"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.1)" }}
          >
            <defs>
              <path id="textCircle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text className="text-[10.5px] fill-white/70 font-semibold tracking-[0.15em] uppercase">
              <textPath href="#textCircle" startOffset="0%">
                Vantage Staffing • Est. 2014 • Premium Talent •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </motion.div>
    </div>
  )
}
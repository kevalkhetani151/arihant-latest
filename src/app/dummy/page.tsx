"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
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
    <div
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black"
    >
      {/* PRESERVED ORIGINAL SVG FILTERS */}
      <svg className="absolute inset-0 h-0 w-0">
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
        className="absolute inset-0 h-full w-full"
        colors={["#000000", "#2563eb", "#1d4ed8", "#0f2f7a", "#f97316"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-60"
        colors={["#000000", "#ffffff", "#2563eb", "#f97316"]}
        speed={0.2}
        wireframe={true}
        backgroundColor="transparent"
      />

      {/* PREMIUM CONTENT LAYER */}
      <main className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="pointer-events-auto max-w-3xl">
          
          {/* Refined Eyebrow Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 shadow-lg backdrop-blur-sm"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              10,000+ Placements
            </span>
          </motion.div>

          {/* Elevated Headline mixing Sans and Italic Serif */}
          <motion.h1
            className="mb-8 text-5xl font-bold leading-[1.05] tracking-tighter text-white drop-shadow-2xl md:text-7xl lg:text-[5.5rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block font-medium text-white/90">Where Companies</span>
            <span className="block">
              Meet Talent{" "}
              <motion.span
                className="inline-block font-serif font-light italic"
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
            className="mb-12 max-w-xl text-lg font-light leading-relaxed text-white/80 drop-shadow-md [text-wrap:balance] md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Vantage Staffing connects ambitious companies with vetted, ready-to-work professionals — contract, contract-to-hire, or direct placement, matched in days instead of months.
          </motion.p>

          {/* Single Contact Us CTA Button */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-4 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <motion.span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* TRUST STAMP (Pulsing Border with Mouse Parallax) */}
      <motion.div 
        className="absolute bottom-8 right-8 z-30 hidden md:bottom-16 md:right-16 md:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          x: mousePosition.x * -30, 
          y: mousePosition.y * -30,
        }}
      >
        <div className="relative flex h-32 w-32 items-center justify-center">
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
            className="absolute inset-0 h-full w-full drop-shadow-lg"
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
            <text className="fill-white/70 text-[10.5px] font-semibold uppercase tracking-[0.15em]">
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
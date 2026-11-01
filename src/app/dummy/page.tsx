"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function PremiumStaffingHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 40, stiffness: 100, mass: 0.5 }
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig)
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - left) / width - 0.5)
      mouseY.set((e.clientY - top) / height - 0.5)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black font-sans selection:bg-blue-500/30"
    >
      {/* 1. ORIGINAL SVG FILTERS RESTORED */}
      <svg className="absolute inset-0 h-0 w-0 pointer-events-none">
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

      {/* 2. ORIGINAL BACKGROUND EFFECT RESTORED */}
      <div className="absolute inset-0 z-0">
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
        {/* Subtle vignette so the crisp text is easy to read against the bright mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-40 pointer-events-none" />
      </div>

      {/* 3. PREMIUM UI CONTENT */}
      <main className="pointer-events-none relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="pointer-events-auto max-w-4xl">
          
          {/* Eyebrow */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              Premium Talent Discovery
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mb-8 text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-white drop-shadow-xl md:text-7xl lg:text-[6rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-white">People</span>
            <span className="block">
            Potential
              <motion.span
                className="inline-block font-serif font-light italic text-white/80"
              >
               Performance.
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
         <motion.p
  className="mb-12 max-w-2xl text-justify text-lg font-light leading-relaxed text-white/80 drop-shadow-md md:text-xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
>
  We help organizations build exceptional teams by connecting them with skilled professionals across technology, engineering, healthcare, life sciences, and business functions.
</motion.p>

          {/* Call To Action */}
          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/contact" 
              className="group flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:scale-105 active:scale-95"
            >
              Start Hiring
              <svg 
                className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
           
          </motion.div>
        </div>
      </main>

      {/* 4. TRUST STAMP - Original colors restored, layout kept sleek */}
      <motion.div 
  className="absolute bottom-12 right-12 z-30 hidden md:block"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.8 }}
  style={{ x: parallaxX, y: parallaxY }}
>
  <div className="relative flex h-32 w-32 items-center justify-center opacity-90 transition-opacity hover:opacity-100">
    <PulsingBorder
      colors={["#2563eb", "#1d4ed8", "#f97316", "#fb923c", "#1e40af", "#fdba74", "#ffffff"]} // Restored original colors
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
      style={{ width: "80px", height: "80px", borderRadius: "50%" }}
    />

    <motion.svg
      className="absolute inset-0 h-full w-full drop-shadow-lg"
      viewBox="0 0 100 100"
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      style={{ transform: "scale(1.1)" }}
    >
      <defs>
        <path id="textCircle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
      </defs>
    <text className="fill-white/95 text-[10px] font-bold uppercase tracking-[0.24em]">
  <textPath
    href="#textCircle"
    startOffset="0%"
    textLength="226"
    lengthAdjust="spacing"
  >
    ✦ ARIHANT STAFFING  ✦ 2020{"\u00A0\u00A0"}
  </textPath>
</text>
    </motion.svg>
  </div>
</motion.div>
    </div>
  )
}
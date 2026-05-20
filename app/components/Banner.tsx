"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const visualReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 44,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25,
    },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Banner(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.45]);
  const backgroundTextOpacity = useTransform(scrollYProgress, [0, 0.65], [0.05, 0.12]);
  const backgroundTextY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const squareOneY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const squareTwoY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const squareThreeY = useTransform(scrollYProgress, [0, 1], [0, 130]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-white px-6 pb-20 pt-28"
    >
      {/* System Interface Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <motion.div
        aria-hidden="true"
        style={{
          scale: backgroundTextScale,
          opacity: backgroundTextOpacity,
          y: backgroundTextY,
        }}
        className="pointer-events-none absolute left-1/2 top-[25%] z-0 w-full -translate-x-1/2 select-none text-center text-[clamp(4rem,15vw,18rem)] font-black leading-none tracking-[-0.08em] text-slate-950/20"
      >
        SYSTEM_V1
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <motion.span
          style={{ y: squareOneY }}
          className="absolute left-[6%] top-[18%] h-36 w-36 rotate-32 rounded-4xl bg-violet-200/40 blur-[1px]"
        />

        <motion.span
          style={{ y: squareTwoY }}
          className="absolute right-[8%] top-[10%] h-44 w-44 rotate-31 rounded-[2.5rem] bg-cyan-200/50 blur-[1px]"
        />

        <motion.span
          style={{ y: squareThreeY }}
          className="absolute bottom-[12%] left-[45%] h-40 w-40 rotate-30 rounded-4xl bg-pink-200/40 blur-[1px]"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left side - Text content */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="visible"
            className="order-2 flex-1 space-y-8 text-center lg:order-1 lg:text-left"
          >            
            <div className="space-y-4">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-3 rounded-full border border-violet-100 bg-violet-50/50 px-4 py-1.5"
              >                
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">System_Ready</span>
                </span>
                <div className="w-px h-3 bg-violet-200"></div>
                <p className="text-[10px] font-black text-violet-600 uppercase tracking-[0.2em]">
                  Alejandra Maraasin // PORTFOLIO_INIT
                </p>
              </motion.div>
              
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-tight text-gray-950 lg:text-6xl tracking-tight"
              >
                Building <span className="bg-linear-to-r from-violet-600 via-cyan-500 to-pink-500 bg-clip-text text-transparent">Digital Infrastructures</span> for a connected world.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-lg leading-relaxed text-gray-600 font-medium"
              >
                Computer Engineering student specializing in full-stack web systems, embedded dashboards, and automated service solutions.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start"
            >  
              <a
                href="#lab"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-sm tracking-widest overflow-hidden transition-all hover:bg-violet-600 shadow-xl shadow-slate-200"
              >
                <span className="relative z-10">ACCESS_MODULES</span>
              </a>

              <a
                href="/ALEJANDRA-ARINGO-MARAASIN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-slate-950 border border-slate-200 font-black text-sm tracking-widest transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                DOCS.PDF
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - CSS Mockup Visual */}
          <motion.div
            variants={visualReveal}
            initial="hidden"
            animate="visible"
            className="order-1 w-full max-w-xl flex-1 lg:order-2"
          >            
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[3rem] bg-linear-to-r from-violet-100/30 via-cyan-100/30 to-pink-100/30 opacity-50 blur-2xl group-hover:opacity-100 transition-opacity" />              
              
              <div className="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden p-1.5 bg-linear-to-br from-gray-50 to-white">
                <div className="bg-white rounded-[2.2rem] overflow-hidden border border-gray-100 shadow-inner">
                  {/* Browser Header */}
                  <div className="bg-gray-50/80 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40"></div>
                    </div>
                    <div className="flex-1 max-w-[200px] mx-4 bg-gray-100/50 rounded-full py-1 text-[9px] font-black text-gray-400 text-center tracking-widest uppercase">
                      main_terminal_v1.0.4
                    </div>
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-8 bg-white min-h-[320px]">
                    <div className="mb-8">
                      <h4 className="text-xs font-black text-violet-600 uppercase tracking-widest mb-1">Architecture_Overview</h4>
                      <p className="text-xl font-black text-gray-950">System Interface</p>
                    </div>
                    
                    {/* Mockup Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 rounded-2xl border border-violet-100 bg-violet-50/30 group-hover:border-violet-300 transition-colors">
                        <p className="text-[10px] font-black text-violet-500 uppercase tracking-widest mb-2">Back_End</p>
                        <div className="flex gap-1">
                          <div className="h-1.5 w-8 bg-violet-400 rounded-full"></div>
                          <div className="h-1.5 w-4 bg-violet-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl border border-cyan-100 bg-cyan-50/30 group-hover:border-cyan-300 transition-colors">
                        <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-2">Front_End</p>
                        <div className="flex items-end gap-1">
                          <div className="w-1.5 h-4 bg-cyan-400 rounded-full"></div>
                          <div className="w-1.5 h-2 bg-cyan-300 rounded-full"></div>
                          <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                      {['Next.js', 'TypeScript', 'Tailwind', 'Motion'].map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[8px] font-black text-gray-400 uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Accents */}
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-gray-50 hidden lg:block animate-bounce [animation-duration:3s]">
                <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

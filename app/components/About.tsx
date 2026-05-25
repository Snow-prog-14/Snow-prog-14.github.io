"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scanVariants: Variants = {
  initial: { top: "-10%", opacity: 0 },
  animate: { 
    top: "110%", 
    opacity: [0, 1, 1, 0],
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "linear" 
    } 
  }
};

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
         
            <h3 className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
              Identity Scan
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
            {/* Profile Card Style */}
            <motion.div 
              variants={fadeUp}
              className="lg:col-span-5 relative group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-2xl">
                {/* Scan Line Effect */}
                <motion.div 
                  variants={scanVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute left-0 right-0 h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent z-20 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                />
                
                <Image
                  src="/pics/meAI.jpg"
                  alt="Alejandra Maraasin"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />

                {/* Status Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">Subject Status</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-900 uppercase">Active</span>
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-gray-900">Alejandra Maraasin</h4>
                  <p className="text-xs text-gray-500 font-medium tracking-tight">BS Computer Engineering | Rizal Technological University</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-violet-500 rounded-tl-xl opacity-40"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500 rounded-br-xl opacity-40"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              variants={fadeUp}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                </div>
                
                <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                  I am a <span className="text-violet-600">Computer Engineering student</span> focused on building software that bridges complexity and usability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 transition-colors">
                    <h5 className="text-sm font-black text-gray-900 uppercase mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Professional Focus
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Specializing in full-stack web development, system architectures, and UI/UX implementation.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-cyan-200 transition-colors">
                    <h5 className="text-sm font-black text-gray-900 uppercase mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Development Philo
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Prioritizing clean code, maintainable systems, and intuitive user experiences.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  My experience includes a 300-hour full-stack developer internship, academic software projects, UI layout design, and practical system development. I have worked with React TypeScript, ASP.NET Core, C#, SQL, and more to build structured, database-connected systems.
                </p>

                <div className="pt-4">
                  <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-violet-600 text-white rounded-2xl font-black text-sm tracking-widest overflow-hidden transition-all hover:bg-violet-700 shadow-xl shadow-violet-200 hover:-translate-y-1">
                    <span className="relative z-10">INITIALIZE CONNECTION</span>
                    <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

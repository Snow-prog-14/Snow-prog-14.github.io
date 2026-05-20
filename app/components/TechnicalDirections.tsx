"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

const technicalAreas = [
  {
    title: "Full-Stack Development",
    description: "Building end-to-end systems with React, ASP.NET Core, and SQL, focusing on scalability and clean architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
  },
  {
    title: "Embedded Systems",
    description: "Integrating hardware and software using Raspberry Pi, Arduino, and sensors for real-world automation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
  },
  {
    title: "Data Management",
    description: "Designing efficient database schemas and handling complex data workflows with SQL and REST APIs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm10 0v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3s-3.5 1-3.5 3z" />
      </svg>
    ),
    accent: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
  },
  {
    title: "AI-Assisted Systems",
    description: "Leveraging AI and machine learning concepts to enhance system capabilities and environmental monitoring.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
  },
  {
    title: "Dashboard Design",
    description: "Creating intuitive monitoring interfaces for real-time data visualization and system control.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
  },
  {
    title: "System Automation",
    description: "Developing automated workflows and kiosk systems for improved organizational efficiency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.31a2 2 0 00-1.002 1.183l-.531 1.702a2 2 0 01-1.161 1.412l-1.42.53a2 2 0 01-2.484-1.127l-1.062-2.124a2 2 0 00-1.022-.96l-2.124-1.062a2 2 0 01-1.127-2.484l.53-1.42a2 2 0 011.412-1.161l1.702-.531a2 2 0 001.183-1.002l.31-.691a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L6.572 1.572a2 2 0 011.127 2.484l1.062 2.124a2 2 0 001.022.96l2.124 1.062a2 2 0 011.127 2.484l-.53 1.42a2 2 0 01-1.412 1.161l-1.702.531a2 2 0 00-1.183 1.002l-.31.691a6 6 0 00-.517 3.86l.477 2.387a2 2 0 00.547 1.022l1.428 1.428z" />
      </svg>
    ),
    accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
  }
];

const skillTags = [
  "React", "TypeScript", "ASP.NET Core", "C#", "SQL", "Python", 
  "C++", "Raspberry Pi", "Arduino", "UI/UX", "REST API", "Git"
];

export default function TechnicalDirections(): React.JSX.Element {
  return (
    <section id="tech-directions" className="py-24 px-6 bg-slate-950 overflow-hidden relative">
      {/* Radar/Grid Visual Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800 rounded-full animate-[ping_10s_linear_infinite] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-800 rounded-full animate-[ping_15s_linear_infinite] opacity-10" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-cyan-400 mb-4">
              System.Signal_Map()
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Technical Directions
            </h3>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technicalAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={nodeVariants}
              className={`group relative p-8 rounded-3xl border ${area.accent} backdrop-blur-sm transition-all hover:-translate-y-1 ${area.glow}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-2xl ${area.accent} border transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {area.icon}
                </div>
                <h4 className="text-lg font-black text-white leading-tight">{area.title}</h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {area.description}
              </p>
              
              {/* Node Connector Decorative */}
              <div className="absolute -right-2 top-1/2 w-4 h-px bg-slate-800 group-hover:bg-cyan-500/50 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skillset Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md"
        >
          <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400/30"></span>
            Subsystem_Capabilities
          </h4>
          <div className="flex flex-wrap gap-3">
            {skillTags.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

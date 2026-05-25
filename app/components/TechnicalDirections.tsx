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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.31a2 2 0 00-1.002 1.183l-.531 1.702a2 2 0 01-1.161 1.412l-1.42.53a2 2 0 01-2.484-1.127l-1.062-2.124a2 2 0 00-1.022-.96l-2.124-1.062a2 2 0 01-1.127-2.484l.53-1.42a2 2 0 011.412-1.161l1.702-.531a2 2 0 001.183-1.002l.31-.691a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L6.572 1.572a2 2 0 011.127 2.484l1.062 2.124a2 2 0 001.022.96l2.124 1.062a2 2 0 011.127 2.484l-.53 1.42a2 2 0 01-1.412 1.161l-1.702.531a2 2 0 00-1.183 1.002l-.31.691a6 6 0 00-.517-3.86l.477-2.387a2 2 0 00.547-1.022l1.428 1.428z" />
      </svg>
    ),
    accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
  }
];

const capabilityModules = [
  {
    code: "UI_LAYER",
    label: "Frontend Interface",
    number: "01",
    skills: ["React", "TypeScript", "UI/UX"],
    color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
    glow: "group-hover:border-violet-500/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
    bars: [100, 80, 90]
  },
  {
    code: "API_CORE",
    label: "Backend Systems",
    number: "02",
    skills: ["ASP.NET Core", "C#", "REST API"],
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    glow: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]",
    bars: [90, 85, 95]
  },
  {
    code: "DATA_NODE",
    label: "Data Operations",
    number: "03",
    skills: ["SQL", "Python"],
    color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
    glow: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]",
    bars: [85, 75, 80]
  },
  {
    code: "EMBEDDED_IO",
    label: "Hardware Integration",
    number: "04",
    skills: ["Raspberry Pi", "Arduino", "C++"],
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    glow: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]",
    bars: [70, 90, 85]
  },
  {
    code: "DEPLOYMENT",
    label: "Version Control",
    number: "05",
    skills: ["Git"],
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    glow: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
    bars: [95, 90, 85]
  }
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
            viewport={{ once: false }}
          >
         
            <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Technical Directions
            </h3>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
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

        {/* Capability Console / Subsystem Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 p-1 bg-slate-900/40 rounded-[2.5rem] border border-slate-800 relative overflow-hidden group/console"
        >
          {/* Console Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:20px_20px] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />
          
          <div className="relative z-10 p-8 lg:p-10">
            {/* Console Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 blur-sm opacity-50" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-1">SUBSYSTEM CAPABILITIES</p>
                  <h4 className="text-xl font-black text-white uppercase tracking-tight">Active technical stack modules</h4>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-950/50 rounded-xl border border-slate-800 shadow-inner">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">STATUS:</span>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] animate-pulse">ONLINE</span>
              </div>
            </div>

            {/* Capability Modules Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {capabilityModules.map((module) => (
                <motion.div
                  key={module.code}
                  variants={nodeVariants}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${module.color} ${module.glow}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{module.number}</span>
                    <div className="flex gap-0.5 items-end h-4">
                      {module.bars.map((height, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 2 }}
                          whileInView={{ height: `${height / 6}%` }}
                          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 + i * 0.2 }}
                          className={`w-1 rounded-full ${module.color.split(' ')[0]} opacity-40 group-hover:opacity-100 transition-opacity`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className={`text-[8px] font-black uppercase tracking-[0.2em] mb-1 ${module.color.split(' ')[0]}`}>{module.code}</p>
                    <h5 className="text-xs font-black text-white uppercase tracking-wider group-hover:scale-105 origin-left transition-transform">{module.label}</h5>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {module.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[9px] font-bold text-slate-400 group-hover:text-white transition-colors"
                      >
                        {skill}{skill !== module.skills[module.skills.length - 1] ? " // " : ""}
                      </span>
                    ))}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-slate-700 rounded-tr-sm group-hover:border-cyan-500 transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

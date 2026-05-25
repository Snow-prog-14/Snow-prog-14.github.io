"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

interface ExperienceEntry {
  id: number;
  title: string;
  company: string;
  role: string;
  badge: "INTERNSHIP" | "PART-TIME" | "OPERATIONS" | "SERVICE";
  description: string;
  date: string;
  icon: string;
}

const experienceLog: ExperienceEntry[] = [
  {
    id: 1,
    title: "Full-Stack Developer Intern",
    company: "TAO Corporation",
    role: "Software Development",
    badge: "INTERNSHIP",
    description: "Developed a full-stack Policy Management System using React TypeScript and ASP.NET Core. Built modules for policy creation, approvals, audit logs, and integrated backend services for email notifications and PDF generation.",
    date: "2024",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Sales Operations and Data Records Assistant",
    company: "Livesmart Asia",
    role: "Data & Operations",
    badge: "PART-TIME",
    description: "Supports customer-facing sales operations, floor coordination, and organized data recording. This role strengthened my attention to detail, documentation habits, and workflow awareness.",
    date: "2023 - Present",
    icon: "/cards/card-4.png",
  },
  {
    id: 3,
    title: "Registrar’s Assistant Intern",
    company: "Gardner College Cainta",
    role: "Administrative Support",
    badge: "INTERNSHIP",
    description: "Organized and maintained student academic records, supported enrollment processes, and managed data entry tasks while handling confidential records professionally.",
    date: "2022",
    icon: "/cards/card-2.png",
  },
  {
    id: 4,
    title: "Service Crew",
    company: "NC’s Kitchen",
    role: "Customer Service",
    badge: "SERVICE",
    description: "Delivered customer service in a fast-paced environment, handled cash transactions, and developed strong communication and multitasking skills.",
    date: "2021",
    icon: "/cards/card-3.png",
  },
];

const badgeColors = {
  INTERNSHIP: "bg-violet-100 text-violet-600 border-violet-200",
  "PART-TIME": "bg-cyan-100 text-cyan-600 border-cyan-200",
  OPERATIONS: "bg-emerald-100 text-emerald-600 border-emerald-200",
  SERVICE: "bg-pink-100 text-pink-600 border-pink-200",
};

const entryVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Experience(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/30 overflow-hidden">
      <div className="container mx-auto max-w-4xl" ref={containerRef}>
        <div className="text-center mb-20">
       
          <h3 className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Work Experience
          </h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute top-0 bottom-0 w-full bg-linear-to-b from-violet-500 via-cyan-500 to-pink-500"
            />
          </div>

          <div className="space-y-16">
            {experienceLog.map((entry, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={entry.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={entryVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white border-4 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full ml-12 md:ml-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-violet-100/40 transition-all group`}>
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-gray-50 p-2 border border-gray-100 group-hover:scale-110 transition-transform">
                          <Image
                            src={entry.icon}
                            alt={entry.company}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{entry.date}</p>
                          <h4 className="text-lg font-black text-gray-900 leading-tight">{entry.title}</h4>
                        </div>
                      </div>

                      <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-black border ${badgeColors[entry.badge]}`}>
                          {entry.badge}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-black bg-gray-100 text-gray-500 border border-gray-200 uppercase">
                          {entry.role}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {entry.description}
                      </p>

                      <div className={`flex items-center gap-2 text-[10px] font-black text-violet-600 uppercase tracking-widest group-hover:gap-3 transition-all ${isEven ? 'flex-row-reverse' : ''}`}>
                        <span>{entry.company}</span>
                        <svg className={`w-3 h-3 ${isEven ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for MD+ */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


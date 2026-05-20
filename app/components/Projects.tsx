"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  image?: string;
  tech: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Policy Management System",
    type: "Full-Stack Web Application",
    image: "/pics/policy.png",
    description: "A web-based system for managing company policies, approval workflows, document tracking, audit history, archiving, role-based access, and dashboard monitoring.",
    tech: ["React TypeScript", "ASP.NET Core", "C#", "SQL", "REST API", "PDF Generation", "Email Integration"],
  },

  {
    id: 7,
    title: "Tenant Billing Management System",
    type: "Billing and Records Management System",
    description:
      "A tenant billing system for managing tenant records, monthly rent, utility charges, payment tracking, billing history, and organized reports for rental property management.",
    image: "/pics/tenant-billing.png",
    tech: ["React TypeScript", "ASP.NET Core", "C#", "SQL", "REST API"],
  },

  {
    id: 2,
    title: "Barangay Ugong Request Kiosk",
    type: "Barangay Service Request System",
    description: "A web-based request kiosk interface for managing barangay service requests and providing residents with a more organized way to access local services.",
    image: "/pics/brgyadmin.png",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    id: 3,
    title: "Air Pollution AI Mini Bot",
    type: "Environmental Monitoring Interface",
    description: "A web interface for displaying real-time AQI and IAQ readings collected by an autonomous air pollution monitoring minibot.",
    image: "/pics/air pol mini bot.png",
    tech: ["Python", "HTML", "SQL"],
  },
  {
    id: 4,
    title: "Embedded System Dashboard",
    type: "Sensor Monitoring Interface",
    description: "A dashboard interface for monitoring sensor outputs and system status updates from a Raspberry Pi-based embedded system.",
    image: "/pics/embedded-dashboard.png",
    tech: ["Python", "HTML", "SQL", "Raspberry Pi"],
  },
  {
    id: 5,
    title: "Smart Locker System",
    type: "NFC-Based Access Control System",
    description: "A locker management system with user registration, authentication, NFC-based access control, and locker status monitoring.",
    image: "/pics/locker.png",
    tech: ["C++", "Python", "HTML", "SQL", "Arduino", "Raspberry Pi"],
  },
  {
    id: 6,
    title: "Point of Sale System",
    type: "Inventory and Sales System",
    description: "A POS system for transaction processing, inventory tracking, and sales reporting with database-connected records.",
    image: "/pics/POS.png",
    tech: ["C#", "Python", "SQL"],
  },

    
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageMotion: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 32,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const chipContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.2,
    },
  },
};

const chipItem: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="relative overflow-hidden bg-white px-6 py-28">
      <div className="pointer-events-none absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-100/80 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-1/2 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[72px_72px]] opacity-40" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-violet-600">
            Selected Work
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-950 lg:text-6xl">
            Featured Projects
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 lg:text-lg">
            A focused collection of web systems, embedded dashboards, automation
            tools, and database-driven applications built with practical use in
            mind.
          </p>
        </motion.div>

        <div className="space-y-28">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="group relative"
              >
                <div className="absolute -inset-6 rounded-4x1 bg-linear-to-br from-violet-50 via-white to-cyan-50 opacity-0 shadow-2xl shadow-violet-100/40 transition duration-500 group-hover:opacity-100" />

                <div
                  className={`relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={isEven ? "lg:col-start-2" : ""}>
                    <div className="mb-5 flex items-center gap-4">
                      <span className="rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-black tracking-[0.25em] text-violet-600 shadow-sm">
                        {projectNumber}
                      </span>

                      <div className="h-px flex-1 bg-linear-to-r from-violet-200 to-transparent" />
                    </div>

                    <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-violet-600">
                      {project.type}
                    </p>

                    <h3 className="max-w-2xl text-3xl font-black tracking-tight text-gray-950 lg:text-5xl">
                      {project.title}
                    </h3>

                    <div className="relative z-10 mt-8 mb-6">
                      <div
                        className={`rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-2xl shadow-violet-100/40 backdrop-blur-md lg:p-8 ${
                          isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                        }`}
                      >
                        <p className="mb-6 text-base leading-relaxed text-gray-700 lg:text-lg">
                          {project.description}
                        </p>

                        <motion.div
                          variants={chipContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          className="flex flex-wrap gap-2"
                        >
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={chipItem}
                              className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-gray-500 transition duration-300 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="#contact"
                        className="group/link inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-black text-gray-500 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-100"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        PROJECT DETAILS
                      </a>
                    </div>
                  </div>

                  <motion.div
                    variants={imageMotion}
                    className={isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    <div className="relative">
                      <div className="absolute -inset-3 rounded-4x1 bg-linear-to-br from-violet-200 via-cyan-100 to-white opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-200/70 lg:p-3">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-125"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-violet-50 via-white to-cyan-50">
                              <svg
                                className="h-20 w-20 text-violet-100"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                          )}

                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
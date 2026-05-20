"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  description: string;
  image?: string;
  tech: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    slug: "policy-management",
    title: "Policy Management System",
    type: "Full-Stack Web Application",
    image: "/pics/policy.png",
    description: "A web-based system for managing company policies, approval workflows, document tracking, audit history, archiving, role-based access, and dashboard monitoring.",
    tech: ["React TypeScript", "ASP.NET Core", "C#", "SQL", "REST API", "PDF Generation", "Email Integration"],
  },
  {
    id: 7,
    slug: "tenant-billing",
    title: "Tenant Billing Management System",
    type: "Billing and Records Management System",
    description:
      "A tenant billing system for managing tenant records, monthly rent, utility charges, payment tracking, billing history, and organized reports for rental property management.",
    image: "/pics/tenant-billing.png",
    tech: ["React TypeScript", "ASP.NET Core", "C#", "SQL", "REST API"],
  },
  {
    id: 2,
    slug: "barangay-request-kiosk",
    title: "Barangay Ugong Request Kiosk",
    type: "Barangay Service Request System",
    description: "A web-based request kiosk interface for managing barangay service requests and providing residents with a more organized way to access local services.",
    image: "/pics/brgyadmin.png",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    id: 3,
    slug: "air-pollution-mini-bot",
    title: "Air Pollution AI Mini Bot",
    type: "Environmental Monitoring Interface",
    description: "A web interface for displaying real-time AQI and IAQ readings collected by an autonomous air pollution monitoring minibot.",
    image: "/pics/air pol mini bot.png",
    tech: ["Python", "HTML", "SQL"],
  },
  {
    id: 4,
    slug: "embedded-system-dashboard",
    title: "Embedded System Dashboard",
    type: "Sensor Monitoring Interface",
    description: "A dashboard interface for monitoring sensor outputs and system status updates from a Raspberry Pi-based embedded system.",
    image: "/pics/embedded-dashboard.png",
    tech: ["Python", "HTML", "SQL", "Raspberry Pi"],
  },
  {
    id: 5,
    slug: "smart-locker-system",
    title: "Smart Locker System",
    type: "NFC-Based Access Control System",
    description: "A locker management system with user registration, authentication, NFC-based access control, and locker status monitoring.",
    image: "/pics/locker.png",
    tech: ["C++", "Python", "HTML", "SQL", "Arduino", "Raspberry Pi"],
  },
  {
    id: 6,
    slug: "point-of-sale",
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
      {/* Background Accents */}
      <div className="pointer-events-none absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8%] top-1/2 h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">
            System.Module_Registry()
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-950 lg:text-6xl">
            System Modules
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 font-medium">
            A repository of functional systems, embedded dashboards, and automated infrastructures built to solve practical engineering challenges.
          </p>
        </motion.div>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                id={`project-${project.slug}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                className="group relative scroll-mt-32"
              >
                <div className="absolute -inset-8 rounded-[3rem] bg-linear-to-br from-violet-50/50 via-white to-cyan-50/50 opacity-0 group-hover:opacity-100 transition duration-500 shadow-2xl shadow-violet-100/20" />

                <div
                  className={`relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={isEven ? "lg:col-start-2" : ""}>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="rounded-xl border border-violet-100 bg-white px-3 py-1 text-[10px] font-black tracking-widest text-violet-600 shadow-sm">
                        SYSTEM MODULE {projectNumber}
                      </span>
                      <div className="h-px flex-1 bg-linear-to-r from-violet-200 to-transparent" />
                    </div>

                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">
                      {project.type}
                    </p>

                    <h3 className="text-3xl font-black tracking-tight text-gray-950 lg:text-5xl mb-8">
                      {project.title}
                    </h3>

                    <div className="relative z-10 mb-8">
                      <div
                        className={`rounded-3xl border border-gray-100 bg-white/80 p-6 lg:p-8 shadow-2xl shadow-violet-100/40 backdrop-blur-md ${
                          isEven ? "lg:ml-[-25%]" : "lg:w-[calc(100%+25%)]"
                        }`}
                      >
                        <p className="mb-8 text-base leading-relaxed text-gray-700 lg:text-lg font-medium">
                          {project.description}
                        </p>

                        <motion.div
                          variants={chipContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          className="flex flex-wrap gap-2"
                        >
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={chipItem}
                              className="rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-widest text-gray-500 transition duration-300 group-hover:border-violet-200 group-hover:bg-white group-hover:text-violet-600"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={`/projects/${project.slug}?returnTo=project-${project.slug}`}
                        className="group/link inline-flex items-center gap-3 px-6 py-3 bg-white text-violet-700 border border-violet-200 rounded-2xl font-black text-[10px] tracking-[0.2em] transition-all hover:bg-violet-600 hover:text-white hover:border-violet-600 hover:-translate-y-1 shadow-sm"
                      >
                        View Details
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <motion.div
                    variants={imageMotion}
                    className={`relative ${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div className="relative group/image">
                      <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-violet-200/50 to-cyan-100/50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-200/50">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-110"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-50">
                              <svg className="h-16 w-16 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
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

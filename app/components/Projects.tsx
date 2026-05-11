import Image from "next/image";

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

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-20 text-center">
          Featured Projects
        </h2>
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-24 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-violet-600 text-lg lg:text-xl mb-1 font-semibold">
                    {project.type}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {project.title}
                  </h3>
                  
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-white/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-xl shadow-violet-100/20 ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 bg-gray-50 text-[10px] font-bold text-gray-500 rounded-md border border-gray-100 uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Details Link */}
                  <div className="flex gap-4">
                    <a
                      href="#contact"
                      className="flex items-center gap-2 text-gray-400 hover:text-violet-600 transition-colors duration-200 font-bold text-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      PROJECT DETAILS
                    </a>
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 p-2 lg:p-3 shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-violet-50 via-white to-cyan-50 flex items-center justify-center">
                           <svg className="w-20 h-20 text-violet-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

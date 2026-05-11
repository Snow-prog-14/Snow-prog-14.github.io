import Image from "next/image";

export default function About(): React.JSX.Element {
  const skillTags = [
    "React TypeScript", "ASP.NET Core", "C#", "SQL", "REST API", 
    "JavaScript", "HTML", "CSS", "Python", "Java", "C++", 
    "Raspberry Pi", "Arduino", "UI Design", "Data Handling", "Documentation"
  ];

  const focusAreas = [
    {
      title: "Software and Web Development",
      description: "I enjoy creating clean interfaces, structured workflows, and practical systems through hands-on projects, internship experience, and continuous learning.",
      icon: (
        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      accent: "border-violet-100 bg-violet-50/50"
    },
    {
      title: "Frontend & UI Implementation",
      description: "Focused on building responsive, readable, and easy-to-use web layouts with React, HTML, and CSS.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      accent: "border-cyan-100 bg-cyan-50/50"
    },
    {
      title: "Academic Projects",
      description: "Practical experience with embedded systems, sensors, and database integration through university coursework.",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
      ),
      accent: "border-pink-100 bg-pink-50/50"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center lg:text-left">
           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-violet-400 rounded-full"></div>
          </h2>
        </div>

        {/* Top Section: Main Bio & Sidebar Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-xl shadow-gray-200/40 relative">
            <div className="space-y-6 relative z-10">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                I am completing my <span className="text-violet-600 font-bold">BS Computer Engineering degree</span> at Rizal Technological University and focusing on software and web development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My experience includes a 300-hour full-stack developer internship, academic software projects, UI layout design, and practical system development. I have worked with React TypeScript, ASP.NET Core, C#, SQL, JavaScript, HTML, and CSS to build structured web interfaces, workflow-based features, and database-connected systems. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy creating projects that are organized, readable, and easy to use. Although I have experience with embedded systems through academic projects, my main career direction is software development, web development, and frontend/UI implementation.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
                  Connect With Me
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Highlights */}
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl border border-violet-100 bg-violet-50/30 flex items-center gap-4 transition-transform hover:scale-102">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-violet-400 uppercase">Internship Experience</p>
                <p className="text-sm font-bold text-gray-800">300-hour Full-Stack Intern</p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-cyan-100 bg-cyan-50/30 flex items-center gap-4 transition-transform hover:scale-102">
              <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-cyan-400 uppercase">Academic Recognition</p>
                <p className="text-sm font-bold text-gray-800">Dean&apos;s Lister & Scholarship</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-pink-100 bg-pink-50/30 flex items-center gap-4 transition-transform hover:scale-102">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-pink-400 uppercase">Development Focus</p>
                <p className="text-sm font-bold text-gray-800">Software & UI Implementation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Directions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className={`p-8 rounded-2xl border ${area.accent} transition-all hover:shadow-lg hover:-translate-y-1`}>
                <div className="mb-4">{area.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Badges */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-violet-400 rounded-full"></span>
            Technical Skillset
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillTags.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-violet-300 hover:text-violet-600 transition-all cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

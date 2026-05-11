"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left side - Text content */}
          <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100">
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                <p className="text-xs font-bold text-violet-600 uppercase tracking-widest">
                  Hello! I&apos;m Alejandra Maraasin
                </p>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Software and Web Developer focused on{" "}
                <span className="bg-linear-to-r from-violet-600 via-cyan-500 to-pink-500 bg-clip-text text-transparent">
                  practical, user-friendly
                </span>{" "}
                systems.
              </h1>

              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                I build responsive web applications and software projects with clean interfaces, organized workflows, and a focus on usability.
              </p>
            </div>

            <div className="space-y-4">
              <div className=" items-center justify-center lg:justify-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 inline-flex">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Completed a <span className="font-bold text-gray-900">300-hour Full-Stack Developer Internship</span> at TAO Corporation.
                </p>
              </div>
            </div>

         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
  <a
    href="#lab"
    style={{ color: "#ffffff" }}
className="inline-flex items-center justify-center min-w-[150px] px-8 py-4 rounded-2xl bg-slate-950 text-white font-bold text-center shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 hover:-translate-y-1"  >
    <span style={{ color: "#ffffff" }}>View Projects</span>
  </a>

  <a
    href="/ALEJANDRA-ARINGO-MARAASIN.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center min-w-[150px] px-8 py-4 rounded-2xl bg-white text-slate-950 border border-slate-200 font-bold text-center transition-all hover:bg-slate-50 hover:-translate-y-1"
  >
    View Resume
  </a>
</div>
          </div>

          {/* Right side - CSS Mockup Visual */}
          <div className="flex-1 w-full max-w-xl order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-4b g-linear-to-r from-violet-100/50 via-cyan-100/50 to-pink-100/50 rounded-[3rem] blur-2xl opacity-50"></div>
              
              {/* CSS Browser Mockup */}
              <div className="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden p-1 bg-linear-to-br from-gray-50 to-white">
                <div className="bg-white rounded-[2.2rem] overflow-hidden border border-gray-50">
                  {/* Browser Header */}
                  <div className="bg-gray-50/80 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40"></div>
                    </div>
                    <div className="flex-1 max-w-[180px] mx-4 bg-gray-100/50 rounded-full py-1 text-[10px] text-gray-400 text-center font-medium">
                      policy-management-system.v1
                    </div>
                    <div className="w-6 h-6 rounded-full bg-violet-100"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 bg-white min-h-[300px]">
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-1">Policy Management System</h4>
                      <p className="text-[10px] text-gray-400">System Dashboard Overview</p>
                    </div>
                    
                    {/* Mockup Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 rounded-xl border border-violet-100 bg-violet-50/30">
                        <p className="text-[10px] font-bold text-violet-500 uppercase">Approvals</p>
                        <div className="mt-1 h-1 w-full bg-violet-100 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-violet-400"></div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-cyan-100 bg-cyan-50/30">
                        <p className="text-[10px] font-bold text-cyan-500 uppercase">Audit Logs</p>
                        <div className="mt-1 flex gap-1">
                          <div className="w-1 h-2 bg-cyan-300 rounded-full"></div>
                          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
                          <div className="w-1 h-2 bg-cyan-300 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-pink-100 bg-pink-50/30">
                        <p className="text-[10px] font-bold text-pink-500 uppercase">Documents</p>
                        <div className="mt-1 h-2 w-12 bg-pink-200 rounded-full"></div>
                      </div>
                      <div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/30">
                        <p className="text-[10px] font-bold text-emerald-500 uppercase">Role Access</p>
                        <div className="mt-1 flex -space-x-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-200 border border-white"></div>
                          <div className="w-4 h-4 rounded-full bg-emerald-300 border border-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                      {['React TS', 'ASP.NET Core', 'C#', 'SQL', 'REST API'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[9px] font-bold text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Accents */}
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-gray-50 animate-float hidden lg:block">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

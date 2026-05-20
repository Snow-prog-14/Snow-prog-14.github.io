"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Directions", href: "#tech-directions" },
  { label: "Projects", href: "#lab" },
];

export default function Header(): React.JSX.Element {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl"
    >
      <nav className="px-6 py-4">
        <div className="container mx-auto flex h-full max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="group text-2xl font-black tracking-tight text-gray-900 transition-colors hover:text-violet-600"
          >
            Alejandra
            <span className="ml-1 inline-block text-violet-500 transition-transform duration-300 group-hover:rotate-12">
              .
            </span>
          </Link>

          <ul className="m-0 hidden list-none items-center gap-2 p-0 md:flex">
            {navItems.map((item) => (
              <li key={item.href} className="m-0 p-0">
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-bold text-gray-600 transition-all duration-300 hover:bg-violet-50 hover:text-violet-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden rounded-full bg-gray-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-violet-200 md:inline-flex"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
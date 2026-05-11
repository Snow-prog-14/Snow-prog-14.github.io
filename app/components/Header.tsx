import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 hover:text-violet-600 transition-colors"
          >
            Alejandra
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link 
                href="#home" 
                className="text-gray-600 hover:text-violet-600 transition-colors text-base font-medium"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#about" 
                className="text-gray-600 hover:text-violet-600 transition-colors text-base font-medium"
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#experience" 
                className="text-gray-600 hover:text-violet-600 transition-colors text-base font-medium"
              >
                Experience
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link 
                href="#lab" 
                className="text-gray-600 hover:text-violet-600 transition-colors text-base font-medium"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


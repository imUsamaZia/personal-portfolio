import useVisibilityStore from "@/lib/visibilityStore";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { User } from "lucide-react";

const Header = () => {
  
  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contacts", href: "/contacts" },
  ];
  const { isVisible ,mousePosition, setMousePosition} = useVisibilityStore();
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      {/* Floating Cursor Effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
          opacity: 0.6,
        }}
      ></div>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo/Name Section with Profile Picture */}
              <Link href="/" className="flex items-center space-x-3 group">
                {/* Profile Picture Container */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/50 transition-all duration-300 group-hover:border-purple-400 group-hover:scale-110">
                    <img
                      src="/images/pic2.jpg"
                      alt="Usama Zia"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-pulse"></div>

                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-black/50 animate-pulse"></div>
                </div>

                {/* Name */}
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-300 group-hover:to-pink-300">
                  Usama Zia
                </div>
              </Link>

              {/* Navigation Menu */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative hover:text-purple-400 transition-all duration-300 transform hover:scale-110 group ${
                      isVisible ? "animate-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Hover underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button (Optional) */}
              <div className="md:hidden">
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                    <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                    <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

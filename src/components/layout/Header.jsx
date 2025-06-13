import useVisibilityStore from "@/pages/stores/visibilityStore";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contacts", href: "/contacts" },
  ];
  const { isVisible } = useVisibilityStore();
  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name} // ✅ Correct key
                  href={item.href}
                  className={`hover:text-purple-400 transition-all duration-300 transform hover:scale-110 ${
                    isVisible ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Sparkles } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contacts", href: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Nav */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-orange-100/50 border-b border-orange-100"
            : "bg-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />

        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Avatar */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-orange-200 shadow-md shadow-orange-100 group-hover:border-orange-400 transition-all duration-300"
                >
                  <img
                    src="/images/pic2.jpg"
                    alt="Usama Zia"
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                  />
                </motion.div>
                {/* Online dot */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm animate-pulse" />
              </div>

              {/* Name */}
              <div>
                <span className="block text-xl font-bold bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent leading-none">
                  Usama Zia
                </span>
                <span className="block text-xs font-semibold text-orange-500 tracking-widest uppercase mt-0.5">
                  Full Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      whileHover={{ y: -2 }}
                      className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer block ${
                        isActive
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"
                        />
                      )}
                    </motion.span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contacts" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(249,115,22,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-orange-200 hover:from-orange-600 hover:to-red-500 transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  Hire Me
                </motion.button>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 hover:bg-orange-100 transition-all"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white border-t border-orange-100"
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/contacts" onClick={() => setMenuOpen(false)}>
              <button className="w-full mt-3 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-sm shadow-md">
                Hire Me
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Sparkles,
  Code2,
  Layers,
  Server,
  Cloud,
  CheckCircle,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contacts", href: "/contacts" },
  ];

  const services = [
    "Full Stack Development",
    "Backend API Design",
    "E-Commerce Solutions",
    "Cloud Deployment",
    "UI/UX Development",
    "Database Architecture",
  ];

  const techStack = [
    "React.js", "Next.js", "TypeScript", "Node.js",
    "MongoDB", "PostgreSQL", "Tailwind CSS", "Docker", "AWS",
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/imUsamaZia", bg: "hover:bg-gray-900" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/usama-zia-06984a286/", bg: "hover:bg-blue-600" },
    { icon: Mail, label: "Email", href: "mailto:maharusamazia@gmail.com", bg: "hover:bg-orange-500" },
  ];

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-red-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      {/* CTA Banner */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 text-lg">
              Let's turn your idea into a powerful web application.
            </p>
          </div>
          <Link href="/contacts">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249,115,22,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:from-orange-600 hover:to-red-500 transition-all duration-300 whitespace-nowrap"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-orange-500/30">
                <img src="/images/pic2.jpg" alt="Usama Zia" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white leading-none">Usama Zia</span>
                <span className="block text-xs font-semibold text-orange-400 tracking-widest uppercase mt-0.5">Full Stack Dev</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Building end-to-end web applications with a passion for clean code,
              beautiful UI, and scalable architecture.
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">Available for Freelance</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  aria-label={s.label}
                  className={`p-3 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 ${s.bg} hover:border-transparent hover:text-white text-gray-400`}
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-orange-400 to-red-400 rounded-full inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-orange-400 to-red-400 rounded-full inline-block" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-orange-400 to-red-400 rounded-full inline-block" />
              Get In Touch
            </h4>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:maharusamazia@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors mt-0.5">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-sm font-medium break-all">maharusamazia@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923098943008"
                className="flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors mt-0.5">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                  <p className="text-sm font-medium">+92 309 8943008</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="p-2 bg-orange-500/10 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm font-medium">Pakistan</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">Stay Updated</p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl text-sm font-bold hover:from-orange-600 hover:to-red-500 transition-all duration-300 flex-shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack Row */}
        <div className="mt-14 mb-10 pt-10 border-t border-white/5">
          <p className="text-center text-xs font-bold text-gray-500 tracking-widest uppercase mb-5">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-1.5 bg-white/5 border border-white/10 hover:border-orange-400/40 hover:bg-orange-500/5 rounded-full text-xs font-semibold text-gray-400 hover:text-orange-300 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Usama Zia. Crafted with{" "}
            <Heart className="w-3.5 h-3.5 inline text-orange-500 fill-orange-500" /> using
            Next.js & Tailwind CSS
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-police" className="text-gray-500 hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/term-services" className="text-gray-500 hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
    </footer>
  );
};

export default Footer;
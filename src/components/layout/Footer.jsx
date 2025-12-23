import React from "react";
import { Mail, Github, Linkedin, Star } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-purple-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Frontend Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Passionate about creating beautiful, responsive, and user-friendly
              web experiences with modern technologies and clean code
              architecture.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/imUsamaZia",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/usama-zia-06984a286/",
                },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:maharusamazia@gmail.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="group p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Frontend Development",
                "React Applications",
                "UI/UX Design",
                "Website Optimization",
              ].map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <Star className="w-3 h-3 text-purple-400 mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Badges */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-white mb-6 text-center">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "JavaScript",
              "CSS3",
              "HTML5",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get notified about my latest projects and web development
              insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>
                &copy; 2025 Frontend Developer Portfolio. All rights reserved.
              </p>
              <p className="text-sm mt-1">
                Crafted with ❤️ using React, Next.js & Tailwind CSS
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/privacy-police"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/term-services"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div>
    </footer>
  );
};

export default Footer;

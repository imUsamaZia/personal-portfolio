"use client";
import React, { useState, useEffect, useRef } from "react";

import useVisibilityStore from "@/lib/visibilityStore";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  quotes,
  timeline,
  skill,
  interests,
  achievements,
  lucidIcons,
} from "@/lib/data";

const index = () => {
  const { isVisible, setIsVisible } = useVisibilityStore();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [skillProgress, setSkillProgress] = useState({});
  const aboutRef = useRef(null);
  const {
    Code,
    Book,
    Heart,
    Download,
    MapPin,
    Calendar,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Award,
    Users,
    Clock,
  } = lucidIcons;
  useEffect(() => {
    setIsVisible(true);

    // Animate skill progress bars
    const timer = setTimeout(() => {
      const progressObj = {};
      skill.forEach((skill) => {
        progressObj[skill.name] = skill.level;
      });
      setSkillProgress(progressObj);
    }, 1000);

    // Quote rotation
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    // Timeline animation
    const timelineInterval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timeline.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(quoteInterval);
      clearInterval(timelineInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <Header />
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative mb-16">
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm a Developer
              </h1>

              <div className="h-20 flex items-center justify-center">
                <p className="text-2xl md:text-3xl text-gray-300 italic transform transition-all duration-1000">
                  "{quotes[currentQuote]}"
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <achievement.icon
                    className={`w-8 h-8 ${achievement.color} mx-auto mb-3`}
                  />
                  <div className="text-sm font-semibold">
                    {achievement.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Story
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  My journey into web development began two years ago with a
                  simple curiosity about how websites work. What started as a
                  hobby quickly transformed into a passionate career path that I
                  absolutely love.
                </p>
                <p>
                  I believe in the power of clean, efficient code and beautiful
                  user interfaces. Every project I work on is an opportunity to
                  learn something new and create something meaningful that makes
                  a difference in people's lives.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I'm always excited
                  about the next challenge and the opportunity to push the
                  boundaries of what's possible on the web.
                </p>
              </div>

              {/* Personal Info */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>15+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>Available for Projects</span>
                </div>
              </div>

              <a href="/resume.pdf" download>
                <button className="mt-8 group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
            </div>

            <div className="relative">
              {/* Interactive skill Visualization */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Technical Expertise
                </h3>
                <div className="space-y-6">
                  {skill.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="w-5 h-5 text-purple-400" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1500 ease-out"
                          style={{
                            width: `${skillProgress[skill.name] || 0}%`,
                            transitionDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Journey
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-16`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform transition-all duration-500 hover:scale-105 ${
                      activeTimeline === index ? "bg-white/10 scale-105" : ""
                    }`}
                  >
                    <div
                      className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} mb-4`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold mb-3 text-purple-400">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Beyond Code
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{interest.name}</h3>
                <p className="text-gray-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centric Design",
                description:
                  "Every line of code should serve the user's needs and enhance their experience.",
                icon: Heart,
              },
              {
                title: "Continuous Learning",
                description:
                  "Technology evolves rapidly, and so should our skill and understanding.",
                icon: Book,
              },
              {
                title: "Quality Over Quantity",
                description:
                  "Better to build one excellent solution than ten mediocre ones.",
                icon: Award,
              },
            ].map((philosophy, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <philosophy.icon className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">{philosophy.title}</h3>
                <p className="text-gray-300">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or
            just having a chat about technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

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
                  icon: ExternalLink,
                  label: "Email",
                  href: "https://www.facebook.com/mhr.usamazia",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default index;

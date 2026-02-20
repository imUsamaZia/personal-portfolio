"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ChevronDown,
  Code,
  Palette,
  Rocket,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Star,
  Zap,
  Monitor,
  Smartphone,
  Lightbulb,
  Database,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Server,
  Cloud,
  Terminal,
  Layers,
  Box,
  GitBranch,
  Shield,
  Globe,
  Cpu,
} from "lucide-react";
import Link from "next/link";

// Import from your data file
import { skills, Projects, skill, skillCategories, services } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const HomePage = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold shadow-lg">
                <Sparkles className="w-4 h-4" />
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                Usama Zia
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-8 text-gray-800"
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center"
            >
              <span className="mr-4 text-gray-600 font-medium">
                Building with
              </span>
              <motion.span
                key={currentSkill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-orange-600 font-bold min-w-[250px] text-left"
              >
                {skills[currentSkill]}
              </motion.span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed"
            >
              Transforming ideas into powerful full stack applications with{" "}
              <span className="text-orange-600 font-semibold">3 years</span> of
              expertise in modern web technologies, from frontend to backend and
              deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>

              <Link href="/contacts">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-3 border-orange-500 text-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "20+", label: "Projects Completed", icon: Briefcase },
                { number: "3+", label: "Years Experience", icon: Award },
                { number: "100%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Support Available", icon: Zap },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-orange-100"
                >
                  <stat.icon className="w-8 h-8 text-orange-500 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </motion.div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Full Stack{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Expertise across the entire web development spectrum
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500 rounded-xl">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Frontend</h3>
              </div>
              <div className="space-y-3">
                {[
                  "React.js & Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Redux & Zustand",
                  "Responsive Design",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border border-red-100 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500 rounded-xl">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Backend</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Node.js & Express",
                  "RESTful APIs",
                  "MongoDB & PostgreSQL",
                  "Authentication",
                  "Microservices",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-600 rounded-xl">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DevOps</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Docker",
                  "AWS & Cloud",
                  "CI/CD Pipelines",
                  "Git & GitHub",
                  "Linux Server",
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="py-32 px-6 relative bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Meet the{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate about creating exceptional digital experiences from
              frontend to backend
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative"
            >
              <div className="relative group">
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 z-10" />
                  <img
                    src="/images/pic2.jpg"
                    alt="Usama Zia - Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code className="w-8 h-8 text-orange-500" />
                  <p className="text-sm font-bold mt-2 text-gray-900">
                    Frontend
                  </p>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-red-100"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Server className="w-8 h-8 text-red-500" />
                  <p className="text-sm font-bold mt-2 text-gray-900">
                    Backend
                  </p>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Cloud className="w-8 h-8 text-orange-600" />
                  <p className="text-sm font-bold mt-2 text-gray-900">DevOps</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <h3 className="text-4xl font-bold mb-6 text-gray-900">
                Building End-to-End Solutions
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With{" "}
                <span className="text-orange-600 font-semibold">
                  3 years of professional experience
                </span>{" "}
                in full stack development, I specialize in building complete web
                applications from database design to user interface, ensuring
                seamless integration and optimal performance at every layer.
              </p>

              {/* Education Timeline */}
              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-4 bg-orange-50 rounded-xl p-4">
                  <GraduationCap className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Bachelor of Science in Computer Science (BSCS)
                    </h4>
                    <p className="text-sm text-gray-600">2023 - 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <GraduationCap className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Bachelor of Science (BSc)
                    </h4>
                    <p className="text-sm text-gray-600">2021 - 2023</p>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Full Stack Development",
                  "API Design & Integration",
                  "Database Architecture",
                  "Cloud Deployment",
                ].map((competency, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="font-medium">{competency}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:maharusamazia@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>maharusamazia@gmail.com</span>
                  </a>
                  <a
                    href="tel:+923098943008"
                    className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>+92 309 8943008</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Services{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  I Offer
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Full Stack Development",
                  description:
                    "Complete web applications from design to deployment",
                  icon: Layers,
                  color: "orange",
                },
                {
                  title: "Backend API Development",
                  description: "Scalable RESTful and GraphQL APIs",
                  icon: Server,
                  color: "red",
                },
                {
                  title: "E-Commerce Solutions",
                  description: "Online stores with payment integration",
                  icon: Monitor,
                  color: "orange",
                },
                {
                  title: "Cloud Deployment",
                  description: "AWS and cloud infrastructure setup",
                  icon: Cloud,
                  color: "red",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-gradient-to-br ${
                    service.color === "orange"
                      ? "from-orange-50 to-white border-orange-100"
                      : "from-red-50 to-white border-red-100"
                  } rounded-3xl p-8 border shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div
                    className={`p-4 ${
                      service.color === "orange"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    } rounded-2xl w-fit mb-6`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Technical{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proficient across the full technology stack
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {skill.map((skillItem, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <skillItem.icon className="w-10 h-10 text-orange-500" />
                    <span className="text-sm font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {skillItem.level}%
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {skillItem.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {skillItem.category}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillItem.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Categories */}
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {skillCategories.map((group, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                >
                  <group.icon className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    {group.title}
                  </h3>
                  <div className="space-y-3">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full stack applications showcasing end-to-end development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={500}
                      className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                          project.status === "Live"
                            ? "bg-green-500 text-white"
                            : project.status === "In Progress"
                              ? "bg-orange-500 text-white"
                              : "bg-blue-500 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-6 font-medium">
                      {project.tech}
                    </p>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all"
                        >
                          View Project
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </a>
                    ) : (
                      <Link href="/projects">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all"
                        >
                          View Project
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Projects CTA */}
            <motion.div variants={fadeInUp} className="text-center mt-16">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 inline-flex items-center gap-3"
                >
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your full stack project to life? Let's
                collaborate and create powerful web applications together.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-6 mb-12"
            >
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/imUsamaZia",
                  color: "gray",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/usama-zia-06984a286/",
                  color: "blue",
                },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:maharusamazia@gmail.com",
                  color: "orange",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-6 bg-white rounded-2xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <social.icon className="w-10 h-10 text-orange-500 group-hover:text-orange-600 transition-colors" />
                  <p className="text-sm font-bold mt-3 text-gray-900">
                    {social.label}
                  </p>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <Link href="/contacts">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-14 py-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Project
                    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 bg-white rounded-3xl p-10 border border-orange-100 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Direct Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:maharusamazia@gmail.com"
                  className="flex items-center gap-4 text-gray-700 hover:text-orange-600 transition-colors bg-orange-50 rounded-xl p-4 shadow-sm hover:shadow-md"
                >
                  <Mail className="w-6 h-6 text-orange-500" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="font-bold">maharusamazia@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+923098943008"
                  className="flex items-center gap-4 text-gray-700 hover:text-orange-600 transition-colors bg-orange-50 rounded-xl p-4 shadow-sm hover:shadow-md"
                >
                  <Smartphone className="w-6 h-6 text-orange-500" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="font-bold">+92 309 8943008</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Full Stack Project?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            From frontend to backend, database to deployment - Let's build it
            together!
          </p>
          <Link href="/contacts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default HomePage;

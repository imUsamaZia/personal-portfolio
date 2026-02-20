"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  quotes,
  timeline,
  skill,
  interests,
  achievements,
} from "@/lib/data";
import {
  Code,
  Book,
  Heart,
  Download,
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Award,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Coffee,
  Lightbulb,
  Rocket,
  Globe,
  GraduationCap,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Phone,
} from "lucide-react";

// ── Animated counter ──────────────────────────────────────────────────────────
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Page ──────────────────────────────────────────────────────────────────────
const AboutPage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [activeTab, setActiveTab] = useState("education");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const id = setInterval(() => setCurrentQuote((p) => (p + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, []);

  // ── Animation variants ────────────────────────────────────────────────────
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const scaleIn = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // ── Data ──────────────────────────────────────────────────────────────────
  const stats = [
    { number: 3, suffix: "+", label: "Years Experience", icon: Clock },
    { number: 20, suffix: "+", label: "Projects Delivered", icon: Rocket },
    { number: 15, suffix: "+", label: "Happy Clients", icon: Users },
    { number: 100, suffix: "%", label: "Satisfaction Rate", icon: Star },
  ];

  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      school: "University of Management & Technology",
      period: "2023 – 2025",
      grade: "Currently Enrolled",
      icon: GraduationCap,
      color: "orange",
    },
    {
      degree: "Bachelor of Science (BSc)",
      school: "Government College University",
      period: "2021 – 2023",
      grade: "Completed",
      icon: GraduationCap,
      color: "red",
    },
  ];

  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2022 – Present",
      description: "Building complete web apps for clients worldwide — React/Next.js frontends, Node.js APIs, and cloud deployments.",
      skills: ["Next.js", "Node.js", "MongoDB", "AWS"],
      icon: Briefcase,
    },
    {
      role: "Frontend Developer",
      company: "Self-taught / Open Source",
      period: "2021 – 2022",
      description: "Started web development journey focusing on HTML, CSS, JavaScript, and React ecosystem.",
      skills: ["React", "Tailwind CSS", "JavaScript"],
      icon: Code,
    },
  ];

  const certifications = [
    { name: "Meta Front-End Developer", issuer: "Meta / Coursera", year: "2023", icon: Award },
    { name: "Node.js Developer Certification", issuer: "OpenJS Foundation", year: "2023", icon: Award },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024", icon: Award },
    { name: "MongoDB Associate Developer", issuer: "MongoDB University", year: "2024", icon: Award },
  ];

  const philosophies = [
    { title: "User-Centric Design", desc: "Every line of code should serve the user. If it doesn't improve the experience, it shouldn't exist.", icon: Heart, color: "orange" },
    { title: "Continuous Learning", desc: "Technology evolves daily. Staying still means falling behind. I dedicate time every day to learning something new.", icon: Book, color: "red" },
    { title: "Quality Over Quantity", desc: "One excellent, well-architected solution beats ten rushed, fragile ones. Craftsmanship matters.", icon: Star, color: "orange" },
    { title: "Transparent Communication", desc: "I believe in honest timelines, clear updates, and open feedback. Good code starts with good conversation.", icon: MessageSquare, color: "red" },
  ];

  const personalFacts = [
    { emoji: "☕", fact: "Fuelled by coffee and curiosity" },
    { emoji: "🌙", fact: "Night owl — best code written after midnight" },
    { emoji: "🎯", fact: "Goal-oriented: ship first, iterate fast" },
    { emoji: "📚", fact: "Currently reading: Clean Architecture" },
    { emoji: "🌍", fact: "Based in Lahore, working globally" },
    { emoji: "🎮", fact: "Gamer at heart — strategy & RPGs" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

        {/* ── Progress Bar ───────────────────────────────────────────────── */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 origin-left z-50"
          style={{ scaleX }}
        />

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
          {/* bg blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-16 right-16 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-16 left-16 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
              animate={{ scale: [1.1, 1, 1.1], rotate: [60, 0, 60] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left – text */}
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Get to Know Me
                </motion.span>

                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                    About Me
                  </span>
                </motion.h1>

                <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
                  Usama Zia —{" "}
                  <span className="text-orange-600">Full Stack Developer</span>
                </motion.h2>

                {/* rotating quote */}
                <motion.div
                  variants={fadeUp}
                  className="relative bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl px-6 py-4 mb-8 min-h-[80px] flex items-center"
                >
                  <motion.p
                    key={currentQuote}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-700 italic text-lg font-medium"
                  >
                    "{quotes[currentQuote]}"
                  </motion.p>
                </motion.div>

                <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm a passionate full stack developer from Lahore, Pakistan with{" "}
                  <span className="text-orange-600 font-semibold">3+ years</span> of professional experience
                  building end-to-end web applications. I love turning complex problems into elegant,
                  performant solutions — from pixel-perfect UIs to robust back-end APIs.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-orange-500" /> Lahore, Pakistan
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <Calendar className="w-4 h-4 text-orange-500" /> 3+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <Globe className="w-4 h-4 text-orange-500" /> Available Worldwide
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacts">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 16px 32px rgba(249,115,22,0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-base shadow-xl flex items-center gap-2 hover:from-orange-600 hover:to-red-500 transition-all duration-300"
                    >
                      Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <a href="/resume.pdf" download>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-2xl font-bold text-base hover:bg-orange-50 transition-all duration-300 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Download CV
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right – photo card */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative">
                  {/* main photo */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-red-500/15 z-10" />
                    <img
                      src="/images/pic2.jpg"
                      alt="Usama Zia"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* floating cards */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-orange-100"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Code className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Experience</p>
                        <p className="text-sm font-bold text-gray-900">3+ Years</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-orange-100"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Projects</p>
                        <p className="text-sm font-bold text-gray-900">20+ Done</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-2xl px-4 py-3 shadow-xl border border-orange-100"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <p className="text-xs font-bold text-gray-900 whitespace-nowrap">Available Now</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS ──────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center"
            >
              {stats.map((s, i) => (
                <motion.div key={i} variants={scaleIn} className="group">
                  <s.icon className="w-8 h-8 mx-auto mb-3 opacity-80 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold mb-1">
                    <Counter target={s.number} suffix={s.suffix} />
                  </div>
                  <p className="text-sm font-semibold opacity-90">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── MY STORY ───────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6">
                  <Heart className="w-4 h-4" /> My Story
                </span>
                <h2 className="text-5xl font-bold mb-8">
                  From Curiosity to{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Craft</span>
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                  <p>
                    It started with a simple question: <span className="text-orange-600 font-semibold">"How does a website actually work?"</span>{" "}
                    That curiosity three years ago kicked off a journey I haven't been able to stop since.
                  </p>
                  <p>
                    I taught myself HTML, CSS, and JavaScript through late nights and countless YouTube tutorials.
                    Then came React, then Node, then databases, then cloud infrastructure. Each layer I added
                    made me realise how deep the rabbit hole goes — and I love every bit of it.
                  </p>
                  <p>
                    Today I build full stack applications that real people use. I care about performance, accessibility,
                    clean architecture, and writing code that the next developer can actually read and maintain.
                  </p>
                  <p>
                    Outside the terminal, you'll find me reading about system design, playing strategy games,
                    or over-engineering my home automation setup for fun.
                  </p>
                </div>
              </motion.div>

              {/* skill bars */}
              <motion.div
                variants={scaleIn}
                className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  Technical Proficiency
                </h3>
                <div className="space-y-5">
                  {skill.map((s, i) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <s.icon className="w-4 h-4 text-orange-500" />
                          <span className="font-semibold text-gray-800 text-sm">{s.name}</span>
                        </div>
                        <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                          {s.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── EDUCATION + EXPERIENCE TABS ────────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4">
                  Education &{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Experience
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">The road that shaped who I am as a developer</p>
              </motion.div>

              {/* Tab switcher */}
              <motion.div variants={fadeUp} className="flex justify-center gap-3 mb-12">
                {["education", "experience"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-2xl font-bold text-sm capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600"
                    }`}
                  >
                    {tab === "education" ? "🎓 Education" : "💼 Experience"}
                  </button>
                ))}
              </motion.div>

              {/* Education */}
              {activeTab === "education" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-6"
                >
                  {educationData.map((ed, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className="bg-white rounded-3xl p-8 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          ed.color === "orange" ? "bg-orange-100" : "bg-red-100"
                        }`}>
                          <ed.icon className={`w-8 h-8 ${ed.color === "orange" ? "text-orange-500" : "text-red-500"}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{ed.degree}</h3>
                          <p className="text-orange-600 font-semibold mb-2">{ed.school}</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border">
                              <Calendar className="w-3 h-3" /> {ed.period}
                            </span>
                            <span className={`inline-flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${
                              ed.grade === "Completed"
                                ? "bg-green-50 text-green-600 border border-green-200"
                                : "bg-orange-50 text-orange-600 border border-orange-200"
                            }`}>
                              <CheckCircle className="w-3 h-3" /> {ed.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Experience */}
              {activeTab === "experience" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-6"
                >
                  {experienceData.map((exp, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className="bg-white rounded-3xl p-8 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <exp.icon className="w-8 h-8 text-orange-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                            <span className="px-3 py-1 bg-orange-50 text-orange-600 text-sm font-semibold rounded-full border border-orange-200">
                              {exp.company}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 font-medium mb-3 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {exp.period}
                          </p>
                          <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((sk, j) => (
                              <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── TIMELINE ───────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  My{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Key milestones that define my path</p>
              </motion.div>

              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-400" />

                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`relative flex items-start gap-8 mb-12 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-400 rounded-full border-4 border-white shadow-md z-10 mt-6" />

                    {/* spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />

                    {/* card */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="flex-1 ml-14 md:ml-0 bg-gradient-to-br from-orange-50 to-white rounded-3xl p-7 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4 shadow-md`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-3xl font-black text-orange-500 mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ─────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  Certifications &{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Achievements
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Validated expertise across the stack</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="bg-white rounded-3xl p-7 border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{cert.name}</h3>
                    <p className="text-sm text-orange-600 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 font-medium">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── INTERESTS ──────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  Beyond{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    the Code
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">What keeps me inspired outside the IDE</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {interests.map((interest, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200 group-hover:rotate-6 transition-transform duration-300">
                      <interest.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{interest.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PHILOSOPHY ─────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  My{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Philosophy
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">The principles that guide every project I touch</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {philosophies.map((p, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -8 }}
                    className={`rounded-3xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 ${
                      p.color === "orange"
                        ? "bg-gradient-to-br from-orange-50 to-white border-orange-100"
                        : "bg-gradient-to-br from-red-50 to-white border-red-100"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      p.color === "orange" ? "bg-orange-100" : "bg-red-100"
                    }`}>
                      <p.icon className={`w-7 h-7 ${p.color === "orange" ? "text-orange-500" : "text-red-500"}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FUN FACTS ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <h2 className="text-4xl font-bold mb-4">
                  Fun{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Facts
                  </span>{" "}
                  About Me
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {personalFacts.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-white rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <span className="text-3xl">{f.emoji}</span>
                    <p className="text-gray-700 font-medium text-sm">{f.fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Incredible?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              I'm always open to exciting new projects and collaborations.
              Let's have a conversation and see what we can create together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contacts">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 16px 32px rgba(0,0,0,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group px-10 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-2 hover:bg-orange-50 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/imUsamaZia", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/usama-zia-06984a286/", label: "LinkedIn" },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    aria-label={s.label}
                    className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
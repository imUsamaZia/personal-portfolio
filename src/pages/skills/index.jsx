"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronDown,
  Star,
  Monitor,
  GitBranch,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Award,
  Code,
  Rocket,
  Target,
  BookOpen,
  Coffee,
  Globe,
  Server,
  Cloud,
  Terminal,
  Box,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { skillCategories, achievement, learningPath } from "@/lib/data";

// ── Animated progress bar ─────────────────────────────────────────────────────
const SkillBar = ({ level, color, delay = 0 }) => (
  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className={`h-full rounded-full bg-gradient-to-r ${color}`}
    />
  </div>
);

// ── Status pill ───────────────────────────────────────────────────────────────
const StatusPill = ({ status }) => {
  const map = {
    Learning: "bg-green-50 text-green-600 border-green-200",
    Exploring: "bg-blue-50 text-blue-600 border-blue-200",
    Started: "bg-orange-50 text-orange-600 border-orange-200",
    Practicing: "bg-purple-50 text-purple-600 border-purple-200",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${map[status] || "bg-gray-100 text-gray-500 border-gray-200"}`}>
      {status}
    </span>
  );
};

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const scaleIn = {
    hidden: { scale: 0.88, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const devTools = [
    {
      title: "Code Editors",
      icon: Monitor,
      color: "from-orange-500 to-orange-600",
      items: [
        { name: "VS Code", note: "Primary editor" },
        { name: "WebStorm", note: "For large projects" },
        { name: "Sublime Text", note: "Quick edits" },
      ],
    },
    {
      title: "Design Tools",
      icon: Layers,
      color: "from-red-500 to-red-600",
      items: [
        { name: "Figma", note: "UI/UX design" },
        { name: "Adobe XD", note: "Wireframing" },
        { name: "Sketch", note: "Mockups" },
      ],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      color: "from-orange-600 to-red-500",
      items: [
        { name: "Git", note: "Daily workflow" },
        { name: "GitHub", note: "Open source" },
        { name: "GitLab", note: "CI/CD pipelines" },
      ],
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      color: "from-orange-400 to-orange-600",
      items: [
        { name: "Docker", note: "Containerization" },
        { name: "AWS EC2/S3", note: "Cloud hosting" },
        { name: "Vercel / Netlify", note: "Frontend deploy" },
      ],
    },
    {
      title: "Terminal & CLI",
      icon: Terminal,
      color: "from-red-600 to-orange-500",
      items: [
        { name: "Linux / Bash", note: "Server management" },
        { name: "npm / yarn", note: "Package management" },
        { name: "Postman", note: "API testing" },
      ],
    },
    {
      title: "Databases",
      icon: Server,
      color: "from-orange-500 to-red-600",
      items: [
        { name: "MongoDB", note: "NoSQL / Atlas" },
        { name: "PostgreSQL", note: "Relational DB" },
        { name: "Redis", note: "Caching layer" },
      ],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95, icon: Target },
    { name: "Team Collaboration", level: 90, icon: Globe },
    { name: "Communication", level: 88, icon: Coffee },
    { name: "Time Management", level: 85, icon: Zap },
    { name: "Adaptability", level: 92, icon: TrendingUp },
    { name: "Attention to Detail", level: 93, icon: CheckCircle },
  ];

  const milestones = [
    { year: "2021", title: "First line of HTML", desc: "Opened a browser, viewed source, and thought — I can do this.", icon: Code, color: "from-orange-400 to-orange-500" },
    { year: "2022", title: "React clicked", desc: "Components, props, state — the mental model finally made sense.", icon: Layers, color: "from-orange-500 to-red-400" },
    { year: "2023", title: "Went full stack", desc: "Node.js, Express, MongoDB — started building complete applications.", icon: Server, color: "from-red-400 to-orange-500" },
    { year: "2024", title: "Cloud & DevOps", desc: "Docker, AWS, CI/CD — learned to ship and scale reliably.", icon: Cloud, color: "from-orange-500 to-red-500" },
    { year: "2025", title: "TypeScript & more", desc: "Type safety, advanced patterns, and contributing to open source.", icon: Rocket, color: "from-red-500 to-orange-400" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 origin-left z-50"
          style={{ scaleX }}
        />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 16, repeat: Infinity }}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6 shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                Technical Expertise
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                  My Skills
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                A deep-dive into every technology, tool, and technique I bring to the table — 
                from <span className="text-orange-600 font-semibold">pixel-perfect frontends</span> to{" "}
                <span className="text-orange-600 font-semibold">scalable back-end systems.</span>
              </motion.p>

              {/* achievement stats */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-14"
              >
                {achievement.map((a, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-5 shadow-lg border border-orange-100"
                  >
                    <a.icon className="w-7 h-7 text-orange-500 mb-2 mx-auto" />
                    <div className="text-xl font-bold text-gray-900">{a.title}</div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">{a.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-orange-500" />
          </motion.div>
        </section>

        {/* ── SKILL CATEGORIES ─────────────────────────────────────────── */}
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
                  Technical{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Hover over any skill to see it light up</p>
              </motion.div>

              {/* Category tab selector */}
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-12">
                {skillCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                      activeTab === i
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200"
                        : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.title}
                  </button>
                ))}
              </motion.div>

              {/* Active category card */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-10 border border-orange-100 shadow-xl mb-12"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${skillCategories[activeTab]?.color} shadow-lg`}>
                    {skillCategories[activeTab] && 
                      React.createElement(skillCategories[activeTab].icon, { className: "w-8 h-8 text-white" })
                    }
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{skillCategories[activeTab]?.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{skillCategories[activeTab]?.skills?.length} skills in this category</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories[activeTab]?.skills?.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group cursor-default bg-white rounded-2xl p-5 border border-gray-100 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                      onMouseEnter={() => setActiveSkill(`${activeTab}-${i}`)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-bold transition-colors duration-200 ${
                          activeSkill === `${activeTab}-${i}` ? "text-orange-600" : "text-gray-800"
                        }`}>
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar
                        level={skill.level}
                        color={skillCategories[activeTab]?.color}
                        delay={i * 0.06}
                      />
                      {skill.experience && (
                        <p className="text-xs text-gray-400 font-medium mt-2">{skill.experience}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* All categories compact grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((cat, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setActiveTab(i)}
                    className={`rounded-2xl p-6 border cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl ${
                      activeTab === i
                        ? "bg-gradient-to-br from-orange-50 to-white border-orange-300"
                        : "bg-white border-gray-100 hover:border-orange-200"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center mb-4 shadow-md`}>
                      <cat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{cat.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.slice(0, 3).map((s, j) => (
                        <span key={j} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                          {s.name}
                        </span>
                      ))}
                      {cat.skills.length > 3 && (
                        <span className="text-xs text-orange-500 font-bold">+{cat.skills.length - 3}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SOFT SKILLS ──────────────────────────────────────────────── */}
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
                  Beyond the{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Keyboard
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">The soft skills that make collaboration smooth</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {softSkills.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-3xl p-7 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center">
                          <s.icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <span className="font-bold text-gray-900">{s.name}</span>
                      </div>
                      <span className="text-sm font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full">
                        {s.level}%
                      </span>
                    </div>
                    <SkillBar level={s.level} color="from-orange-400 to-red-400" delay={i * 0.07} />
                    {/* stars */}
                    <div className="flex gap-1 mt-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${j < Math.round(s.level / 20) ? "text-orange-400 fill-orange-400" : "text-gray-200 fill-gray-200"}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── DEV TOOLS ────────────────────────────────────────────────── */}
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
                  Development{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Environment
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Tools and platforms I rely on every day</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {devTools.map((group, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -7, scale: 1.02 }}
                    className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-7 border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${group.color} flex items-center justify-center mb-5 shadow-md`}>
                      <group.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{group.title}</h3>
                    <div className="space-y-3">
                      {group.items.map((item, j) => (
                        <motion.div
                          key={j}
                          whileHover={{ x: 4 }}
                          className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm transition-all duration-200"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-4 h-4 text-orange-400" />
                            <span className="font-semibold text-gray-800 text-sm">{item.name}</span>
                          </div>
                          <span className="text-xs text-gray-400 font-medium">{item.note}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CURRENTLY LEARNING ───────────────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-5">
                  <BookOpen className="w-4 h-4" />
                  Always Growing
                </span>
                <h2 className="text-5xl font-bold mb-4">
                  Currently{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Learning
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">What I'm actively studying and exploring right now</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-7">
                {learningPath.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl p-8 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.skill}</h3>
                        <p className="text-gray-500 text-sm">{item.description || "Actively learning this technology"}</p>
                      </div>
                      <StatusPill status={item.status} />
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 font-medium">Progress</span>
                        <span className="font-bold text-orange-600">{item.progress}%</span>
                      </div>
                      <SkillBar level={item.progress} color="from-orange-400 to-red-400" delay={i * 0.1} />
                    </div>

                    {/* progress milestones */}
                    <div className="flex justify-between mt-4">
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map((label, j) => (
                        <div key={j} className="flex flex-col items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${
                            item.progress >= (j + 1) * 25 ? "bg-orange-500" : "bg-gray-200"
                          }`} />
                          <span className="text-[9px] text-gray-400 font-medium hidden md:block">{label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SKILL JOURNEY TIMELINE ───────────────────────────────────── */}
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
                  Skills{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Timeline
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">How my technical abilities evolved year by year</p>
              </motion.div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-400" />

                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative flex gap-8 mb-10"
                  >
                    {/* dot */}
                    <div className="absolute left-8 -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-400 rounded-full border-4 border-white shadow-md mt-5 z-10" />

                    <div className="w-8 flex-shrink-0" />

                    <motion.div
                      whileHover={{ x: 5, scale: 1.01 }}
                      className="flex-1 bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-r ${m.color} shadow-sm`}>
                          <m.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-black text-orange-500">{m.year}</span>
                          <h3 className="text-base font-bold text-gray-900 leading-none">{m.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── WHAT I CAN BUILD ─────────────────────────────────────────── */}
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
                  What I Can{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Build For You
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Translating skills into real deliverables</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {[
                  { title: "React / Next.js Apps", desc: "Fast, SEO-ready, server-side rendered web applications with beautiful, responsive UIs.", icon: Code, color: "orange" },
                  { title: "REST & GraphQL APIs", desc: "Scalable Node.js back-end services with proper auth, validation, error handling, and docs.", icon: Server, color: "red" },
                  { title: "Database Design", desc: "MongoDB schemas, PostgreSQL tables, indexes, relationships, and query optimisation.", icon: Box, color: "orange" },
                  { title: "Authentication Systems", desc: "JWT, OAuth2, session-based auth, role-based access control, and social login.", icon: Award, color: "red" },
                  { title: "Cloud & DevOps", desc: "Docker setup, AWS deployment, environment configs, CI/CD pipelines with GitHub Actions.", icon: Cloud, color: "orange" },
                  { title: "Performance Optimisation", desc: "Lazy loading, code splitting, caching, CDN integration, and Core Web Vitals tuning.", icon: Zap, color: "red" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -7, scale: 1.02 }}
                    className={`rounded-3xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      item.color === "orange"
                        ? "bg-gradient-to-br from-orange-50 to-white border-orange-100"
                        : "bg-gradient-to-br from-red-50 to-white border-red-100"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md ${
                      item.color === "orange" ? "bg-orange-500" : "bg-red-500"
                    }`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Rocket className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Let's combine my skill set with your vision and build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 16px 32px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group px-10 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:bg-orange-50 transition-all duration-300 flex items-center gap-2"
                >
                  View My Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contacts">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 bg-white/20 border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
}
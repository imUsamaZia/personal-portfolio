"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Zap,
  Calendar,
  Filter,
  Search,
  ArrowRight,
  Award,
  Heart,
  Sparkles,
  Layers,
  Star,
  TrendingUp,
  CheckCircle,
  Globe,
  Rocket,
  Grid,
  List,
  X,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { filters, projects } from "@/lib/data";

// ── Status badge helper ───────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const map = {
    Live: "bg-green-50 text-green-600 border-green-200",
    "In Progress": "bg-orange-50 text-orange-600 border-orange-200",
    Completed: "bg-blue-50 text-blue-600 border-blue-200",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${map[status] || "bg-gray-100 text-gray-500 border-gray-200"}`}>
      {status}
    </span>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  // close modal on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ── Variants ──────────────────────────────────────────────────────────────
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

  const stats = [
    { number: "20+", label: "Projects Built", icon: Code },
    { number: "3+", label: "Years Coding", icon: Calendar },
    { number: "100%", label: "Success Rate", icon: Award },
    { number: "10+", label: "Technologies", icon: Zap },
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
        <section className="min-h-[70vh] flex items-center justify-center relative px-6 pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
          {/* blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-16 right-16 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
                Portfolio Showcase
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                  My Projects
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                A collection of full stack applications, experiments, and solutions —
                each one built with{" "}
                <span className="text-orange-600 font-semibold">purpose, precision, and passion.</span>
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-5 shadow-lg border border-orange-100"
                  >
                    <stat.icon className="w-7 h-7 text-orange-500 mb-2 mx-auto" />
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-5">
                  <Star className="w-4 h-4 fill-orange-400" />
                  Featured Work
                </span>
                <h2 className="text-5xl font-bold">
                  Highlighted{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, i) => (
                  <motion.div
                    key={project.id}
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="group relative bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-400 cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} shadow-md`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={project.status} />
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>

                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full border border-gray-200 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-orange-100">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4 text-red-400" /> {project.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-orange-400" /> {project.views}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600 rounded-xl transition-all duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECH USED BANNER ─────────────────────────────────────────── */}
        <section className="py-14 px-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-white/70 text-xs font-bold tracking-widest uppercase mb-8">
              Technologies Used Across Projects
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Docker", "AWS", "Redux", "Prisma"].map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold text-white hover:bg-white hover:text-orange-600 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALL PROJECTS (Filter + Grid) ─────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <h2 className="text-5xl font-bold mb-4">
                  All{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Filter, search, and explore every project</p>
              </motion.div>

              {/* Filter bar */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col lg:flex-row gap-5 items-center justify-between mb-12 bg-white rounded-2xl p-5 border border-orange-100 shadow-lg"
              >
                {/* Category filters */}
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        activeFilter === filter
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-200"
                          : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Search + View toggle */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200 w-52"
                    />
                    {searchTerm && (
                      <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                        <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-700" />
                      </button>
                    )}
                  </div>

                  <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow text-orange-500" : "text-gray-400 hover:text-gray-700"}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow text-orange-500" : "text-gray-400 hover:text-gray-700"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Results count */}
              <motion.p variants={fadeUp} className="text-sm text-gray-500 font-medium mb-8">
                Showing <span className="text-orange-600 font-bold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 && "s"}
                {activeFilter !== "All" && <span> in <span className="text-orange-600 font-bold">{activeFilter}</span></span>}
                {searchTerm && <span> matching "<span className="text-orange-600 font-bold">{searchTerm}</span>"</span>}
              </motion.p>

              {/* ── Grid Mode ── */}
              {viewMode === "grid" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
                >
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      variants={scaleIn}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-orange-200 transition-all duration-300 cursor-pointer overflow-hidden"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* color header strip */}
                      <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                      <div className="p-7">
                        <div className="flex items-start justify-between mb-5">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.color} shadow-md`}>
                            <project.icon className="w-6 h-6 text-white" />
                          </div>
                          <StatusBadge status={project.status} />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                          {project.description}
                        </p>

                        {/* tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.slice(0, 3).map((tag, j) => (
                            <span key={j} className="px-2.5 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full border border-orange-100">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        {/* footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{project.likes}</span>
                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{project.views}</span>
                          </div>
                          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                            <button className="p-2 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg text-gray-600 transition-all duration-200">
                              <Github className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-2 bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600 rounded-lg transition-all duration-200">
                              <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* ── List Mode ── */}
              {viewMode === "list" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-4"
                >
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      variants={fadeUp}
                      whileHover={{ x: 4 }}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-orange-200 transition-all duration-300 cursor-pointer overflow-hidden"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="flex items-center gap-6 p-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-md flex-shrink-0`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                              {project.title}
                            </h3>
                            <StatusBadge status={project.status} />
                          </div>
                          <p className="text-gray-500 text-sm truncate">{project.description}</p>
                        </div>
                        <div className="hidden md:flex flex-wrap gap-1.5 flex-shrink-0 max-w-xs">
                          {project.tags.slice(0, 3).map((tag, j) => (
                            <span key={j} className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full border border-orange-100">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                          <button className="p-2 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-200">
                            <Github className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-orange-100 hover:bg-orange-500 hover:text-white text-orange-600 rounded-lg transition-all duration-200">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Empty state */}
              {filteredProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-24"
                >
                  <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No projects found</h3>
                  <p className="text-gray-500 mb-6">Try a different filter or search term</p>
                  <button
                    onClick={() => { setActiveFilter("All"); setSearchTerm(""); }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── WHAT I BUILD SECTION ─────────────────────────────────────── */}
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
                  What I{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Build
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Types of solutions I specialise in</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Full Stack Web Apps", desc: "Complete applications from DB schema to deployed frontend — Next.js, Node.js, REST/GraphQL APIs.", icon: Layers, color: "orange" },
                  { title: "E-Commerce Platforms", desc: "Online stores with cart, checkout, payment integrations (Stripe), and admin dashboards.", icon: Globe, color: "red" },
                  { title: "SaaS Products", desc: "Multi-tenant platforms with auth, subscriptions, role-based access, and analytics.", icon: Rocket, color: "orange" },
                  { title: "REST & GraphQL APIs", desc: "Scalable, documented, and secured back-end services with rate limiting and caching.", icon: Code, color: "red" },
                  { title: "Dashboard & Analytics", desc: "Data-rich admin interfaces with charts, filters, exports, and real-time updates.", icon: TrendingUp, color: "orange" },
                  { title: "Cloud Deployments", desc: "CI/CD pipelines, Docker containers, AWS infrastructure, and zero-downtime deployments.", icon: Zap, color: "red" },
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
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      item.color === "orange" ? "bg-orange-500" : "bg-red-500"
                    } shadow-lg`}>
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

        {/* ── PROCESS SECTION ──────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  My Development{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Process
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">How every project gets from idea to shipped</p>
              </motion.div>

              <div className="relative">
                {/* connecting line (desktop) */}
                <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 mx-20" />

                <div className="grid md:grid-cols-5 gap-6">
                  {[
                    { step: "01", title: "Discover", desc: "Requirements gathering, wireframes, architecture planning.", icon: Lightbulb },
                    { step: "02", title: "Design", desc: "UI/UX mockups, component system, responsive layouts.", icon: Layers },
                    { step: "03", title: "Build", desc: "Iterative development with clean, tested, reviewed code.", icon: Code },
                    { step: "04", title: "Test", desc: "Unit, integration, and end-to-end testing before ship.", icon: CheckCircle },
                    { step: "05", title: "Deploy", desc: "CI/CD pipeline, cloud infrastructure, monitoring.", icon: Rocket },
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      className="relative bg-white rounded-3xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-orange-200 relative z-10">
                        <p.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-black text-orange-300 tracking-widest mb-1">{p.step}</div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── GITHUB CTA ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-950 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/8 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Explore on GitHub</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  All projects are open source. Dive into the code, raise issues, or fork and build on top of them.
                </p>
                <motion.a
                  href="https://github.com/imUsamaZia"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold shadow-xl hover:bg-orange-50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Let's collaborate and bring your idea to life with modern technology and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacts">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 16px 32px rgba(0,0,0,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group px-10 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:bg-orange-50 transition-all duration-300 flex items-center gap-2"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <motion.a
                href="https://github.com/imUsamaZia"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-white/20 border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>

      {/* ── PROJECT DETAIL MODAL ─────────────────────────────────────── */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* color bar */}
            <div className={`h-2 w-full rounded-t-3xl bg-gradient-to-r ${selectedProject.color}`} />

            <div className="p-8">
              {/* header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${selectedProject.color} shadow-md`}>
                    <selectedProject.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                    <StatusBadge status={selectedProject.status} />
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-orange-50 text-orange-600 text-sm font-semibold rounded-full border border-orange-200">
                    {tag}
                  </span>
                ))}
              </div>

              {/* stats */}
              <div className="flex items-center gap-6 py-4 border-t border-b border-gray-100 mb-6">
                <span className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Heart className="w-4 h-4 text-red-400" /> {selectedProject.likes} likes
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Eye className="w-4 h-4 text-orange-400" /> {selectedProject.views} views
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Calendar className="w-4 h-4 text-gray-400" /> {selectedProject.year || "2024"}
                </span>
              </div>

              {/* buttons */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-bold transition-all duration-200">
                  <Github className="w-4 h-4" /> View Code
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white rounded-2xl font-bold transition-all duration-200">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
}

// Quick import fix - Lightbulb wasn't in original imports
function Lightbulb(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  );
}
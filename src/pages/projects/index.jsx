import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Database,
  Server,
  Zap,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Filter,
  Search,
  Play,
  Award,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ArrowRight,
  Globe,
  ShoppingCart,
  FileText,
  Camera,
  Music,
  Calculator,
  Gamepad2,
  Coffee,
  MapPin,
} from "lucide-react";
import useVisibilityStore from "../stores/visibilityStore";
import Header from "@/components/layout/Header";

export default function index() {
  const {isVisible, setIsVisible,mousePosition, setMousePosition} = useVisibilityStore()
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filters = [
    "All",
    "Web Apps",
    "E-Commerce",
    "Mobile",
    "UI/UX",
    "Full Stack",
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      longDescription:
        "Built with Next.js and Node.js, this platform features user authentication, product management, shopping cart, order tracking, and integrated payment solutions.",
      category: "E-Commerce",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Live",
      duration: "3 months",
      team: "2 developers",
      likes: 124,
      views: 2340,
      featured: true,
      color: "from-purple-500 to-pink-500",
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "A comprehensive project management tool with team collaboration features, real-time updates, and analytics.",
      longDescription:
        "Features include drag-and-drop task boards, team chat, file sharing, time tracking, and detailed project analytics with beautiful data visualizations.",
      category: "Web Apps",
      tags: ["React", "Firebase", "Material-UI", "Chart.js", "WebSocket"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "In Progress",
      duration: "2 months",
      team: "Solo project",
      likes: 89,
      views: 1560,
      featured: true,
      color: "from-blue-500 to-cyan-500",
      icon: FileText,
    },
    {
      id: 3,
      title: "Social Media App",
      description:
        "A modern social platform with real-time messaging, story features, and advanced privacy controls.",
      longDescription:
        "Built with React Native and Node.js, featuring real-time chat, photo/video sharing, stories, user profiles, and social interactions.",
      category: "Mobile",
      tags: ["React Native", "Node.js", "Socket.io", "AWS S3", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Completed",
      duration: "4 months",
      team: "3 developers",
      likes: 156,
      views: 3200,
      featured: false,
      color: "from-green-500 to-emerald-500",
      icon: MessageCircle,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A stunning portfolio website with modern animations, dark mode, and responsive design.",
      longDescription:
        "Features include animated transitions, project showcases, contact forms, blog integration, and optimized performance.",
      category: "UI/UX",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Live",
      duration: "1 month",
      team: "Solo project",
      likes: 203,
      views: 4100,
      featured: true,
      color: "from-orange-500 to-red-500",
      icon: Globe,
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "A beautiful weather application with location-based forecasts and interactive maps.",
      longDescription:
        "Features current weather, 7-day forecast, weather maps, location search, and beautiful weather animations.",
      category: "Web Apps",
      tags: ["React", "Weather API", "Mapbox", "Chart.js"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Live",
      duration: "2 weeks",
      team: "Solo project",
      likes: 67,
      views: 890,
      featured: false,
      color: "from-cyan-500 to-blue-500",
      icon: MapPin,
    },
    {
      id: 6,
      title: "Expense Tracker",
      description:
        "A comprehensive expense tracking app with budget management and financial insights.",
      longDescription:
        "Track expenses, set budgets, categorize spending, generate reports, and get financial insights with beautiful charts.",
      category: "Full Stack",
      tags: ["Vue.js", "Express.js", "MySQL", "Chart.js", "JWT"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      status: "Completed",
      duration: "6 weeks",
      team: "Solo project",
      likes: 92,
      views: 1340,
      featured: false,
      color: "from-yellow-500 to-orange-500",
      icon: Calculator,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-6000"></div>
      </div>

      {/* Advanced Cursor Effect */}
      <div
        className="fixed w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: hoveredProject ? "scale(1.5)" : "scale(0.8)",
          opacity: 0.6,
        }}
      ></div>

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              A showcase of my creative journey through code, design, and
              innovation. Each project represents a unique challenge and
              learning experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "15+", label: "Projects Built", icon: Code },
                { number: "6", label: "Technologies", icon: Zap },
                { number: "100%", label: "Success Rate", icon: Award },
                { number: "2+", label: "Years Coding", icon: Calendar },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${project.color}`}
                    >
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors duration-300">
                        <Github className="w-5 h-5 text-purple-400" />
                      </button>
                      <button className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors duration-300">
                        <ExternalLink className="w-5 h-5 text-purple-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-16 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>

              <button
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "list" : "grid")
                }
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
              >
                <Filter className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.views}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="p-1 bg-purple-500/20 hover:bg-purple-500/30 rounded transition-colors duration-300">
                        <Github className="w-4 h-4 text-purple-400" />
                      </button>
                      <button className="p-1 bg-purple-500/20 hover:bg-purple-500/30 rounded transition-colors duration-300">
                        <ExternalLink className="w-4 h-4 text-purple-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with modern
            technology and beautiful design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400 hover:text-black flex items-center">
              <Github className="mr-2 w-5 h-5" />
              View All on GitHub
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
}

// data.js
import {
  Code,
  Palette,
  Rocket,
  Monitor,
  Smartphone,
  Zap,
  Coffee,
  Music,
  Camera,
  Book,
  Trophy,
  Target,
  Heart,
  Lightbulb,
  Download,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  ExternalLink,
  Star,
  Database,
  Award,
  Users,
  Clock,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Globe,
  MessageCircle,
  ShoppingCart,
  FileText,
  Calculator,
  TrendingUp,
  BookOpen,

} from "lucide-react";

export const lucidIcons = {
  Code,
  Palette,
  Rocket,
  Monitor,
  Smartphone,
  Zap,
  Coffee,
  Music,
  Camera,
  Book,
  Trophy,
  Target,
  Heart,
  Lightbulb,
  Download,
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Star,
  Database,
  Award,
  Users,
  Clock,
};

export const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];
export const Projects = [
  { name: "E-Commerce Platform", tech: "Next.js, Stripe", status: "Live" },
  {
    name: "Task Management App",
    tech: "React, Firebase",
    status: "In Progress",
  },
  { name: "Portfolio Website", tech: "Next.js, Tailwind", status: "Completed" },
];

export const quotes = [
  "Code is poetry written in logic",
  "Design is not just what it looks like - design is how it works",
  "The best way to predict the future is to create it",
  "Innovation distinguishes between a leader and a follower",
];

export const timeline = [
  {
    year: "2022",
    title: "Started Web Development Journey",
    description:
      "Began learning HTML, CSS, and JavaScript. Built my first responsive website.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2023",
    title: "Mastered React & Modern Frameworks",
    description:
      "Dove deep into React.js, Next.js, and modern development tools.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    title: "Professional Development",
    description:
      "Started working on real client projects and building complex applications.",
    icon: Trophy,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2025",
    title: "Current Focus",
    description:
      "Specializing in full-stack development and UI/UX optimization.",
    icon: Target,
    color: "from-orange-500 to-red-500",
  },
];

export const skill = [
  { name: "React.js", level: 90, icon: Code },
  { name: "Next.js", level: 85, icon: Rocket },
  { name: "TypeScript", level: 80, icon: Zap },
  { name: "Tailwind CSS", level: 95, icon: Palette },
  { name: "JavaScript", level: 88, icon: Lightbulb },
  { name: "Node.js", level: 75, icon: Monitor },
  { name: "MongoDB", level: 70, icon: Database },
  { name: "Git & GitHub", level: 85, icon: Github },
];

export const interests = [
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and beauty",
  },
  { name: "Music", icon: Music, description: "Playing guitar and composing" },
  { name: "Reading", icon: Book, description: "Tech blogs and sci-fi novels" },
  { name: "Coffee", icon: Coffee, description: "Fuel for late-night coding" },
];

export const achievements = [
  { title: "15+ Projects Completed", icon: Trophy, color: "text-yellow-400" },
  { title: "100% Client Satisfaction", icon: Heart, color: "text-red-400" },
  { title: "2 Years Experience", icon: Calendar, color: "text-blue-400" },
  { title: "5+ Technologies Mastered", icon: Star, color: "text-purple-400" },
];

export const contactFQA = [
  {
    question: "What's your typical response time?",
    answer:
      "I usually respond to emails within 24 hours, often much sooner. For urgent matters, feel free to mention it in your message.",
  },
  {
    question: "What types of projects do you work on?",
    answer:
      "I specialize in frontend development, including React applications, responsive websites, and modern web experiences. I also work on full-stack projects when needed.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! I work with clients worldwide and am comfortable with different time zones and communication preferences.",
  },
  {
    question: "What's included in your development process?",
    answer:
      "My process includes consultation, planning, design review, development, testing, deployment, and ongoing support. I keep you updated throughout the entire process.",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "maharusamazia@gmail.com",
    link: "mailto:maharusamazia@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 (309) 894-3008",
    link: "tel:+923098943008",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
    link: "https://maps.app.goo.gl/4rWQBsJXi521ZFDp6",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Website",
    value: "usama.com",
    link: "https://portfolio.com",
    color: "from-orange-500 to-red-500",
  },
];

export const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/imUsamaZia",
    color: "hover:text-gray-400",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/usama-zia-06984a286/",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://x.com/ChashmishM73005?t=CKcAvsyBEx6TvgqKC0Y9-A&s=09",
    color: "hover:text-sky-400",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://instagram.com",
    color: "hover:text-pink-400",
  },
];

export const availability = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM", available: true },
  { day: "Saturday", time: "10:00 AM - 4:00 PM", available: true },
  { day: "Sunday", time: "By Appointment", available: false },
];

export const filters = [
  "All",
  "Web Apps",
  "E-Commerce",
  "Mobile",
  "UI/UX",
  "Full Stack",
];

export const projects = [
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
export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 95, experience: "2+ years" },
      { name: "Next.js", level: 90, experience: "1.5+ years" },
      { name: "TypeScript", level: 85, experience: "1+ year" },
      { name: "JavaScript ES6+", level: 95, experience: "2+ years" },
      { name: "HTML5", level: 98, experience: "2+ years" },
      { name: "CSS3", level: 95, experience: "2+ years" },
    ],
  },
  {
    title: "Styling & UI/UX",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 95, experience: "1.5+ years" },
      { name: "Bootstrap", level: 85, experience: "2+ years" },
      { name: "Material-UI", level: 80, experience: "1+ year" },
      { name: "Styled Components", level: 75, experience: "1+ year" },
      { name: "Figma", level: 70, experience: "1+ year" },
      { name: "Responsive Design", level: 95, experience: "2+ years" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 80, experience: "1+ year" },
      { name: "Express.js", level: 75, experience: "1+ year" },
      { name: "MongoDB", level: 70, experience: "1+ year" },
      { name: "MySQL", level: 65, experience: "6+ months" },
      { name: "Firebase", level: 75, experience: "1+ year" },
      { name: "REST APIs", level: 85, experience: "1.5+ years" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 90, experience: "2+ years" },
      { name: "VS Code", level: 95, experience: "2+ years" },
      { name: "Webpack", level: 70, experience: "1+ year" },
      { name: "Vite", level: 80, experience: "1+ year" },
      { name: "npm/yarn", level: 90, experience: "2+ years" },
      { name: "Chrome DevTools", level: 85, experience: "2+ years" },
    ],
  },
];

export const achievement = [
  { icon: Award, title: "15+ Projects", desc: "Successfully completed" },
  { icon: TrendingUp, title: "100%", desc: "Client satisfaction rate" },
  { icon: BookOpen, title: "50+", desc: "Technologies learned" },
  { icon: Star, title: "2+ Years", desc: "Development experience" },
];

export const learningPath = [
  { skill: "React Native", progress: 60, status: "Learning" },
  { skill: "GraphQL", progress: 40, status: "Exploring" },
  { skill: "Docker", progress: 30, status: "Started" },
  { skill: "AWS", progress: 25, status: "Planning" },
];

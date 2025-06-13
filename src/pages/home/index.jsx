import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Rocket, Mail, Github, Linkedin, ExternalLink, Star, Zap, Monitor, Smartphone, User, Camera } from 'lucide-react';
import useVisibilityStore from '../stores/visibilityStore';
import Header from '@/components/layout/Header';
import Link from 'next/link';

const index = () => {
  const {isVisible, setIsVisible, mousePosition, setMousePosition} = useVisibilityStore()

  const [currentSkill, setCurrentSkill] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const skills = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'];
  const projects = [
    { name: 'E-Commerce Platform', tech: 'Next.js, Stripe', status: 'Live' },
    { name: 'Task Management App', tech: 'React, Firebase', status: 'In Progress' },
    { name: 'Portfolio Website', tech: 'Next.js, Tailwind', status: 'Completed' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Cursor Effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(0.8)',
          opacity: 0.6
        }}
      ></div>

      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative mt-[5rem] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Frontend Developer
            </h1>
            <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
              <span className="mr-4">Crafting with</span>
              <span className="text-purple-400 font-bold min-w-[200px] text-left">
                {skills[currentSkill]}
              </span>
            </div>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Passionate about creating beautiful, responsive, and user-friendly web experiences 
              with modern technologies and clean code architecture.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/projects" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span  className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ExternalLink className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link href="/contacts" className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400 hover:text-black">
                <Mail className="inline-block mr-2 w-5 h-5" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* NEW 3D Picture Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet the Developer
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Behind every great project is a passionate developer dedicated to bringing ideas to life through code.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative group perspective-1000">
              {/* 3D Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 transform-gpu transition-all duration-700 ease-out group-hover:rotate-y-12 group-hover:rotate-x-6 hover:scale-105">
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-purple-500/25">
                  {/* Floating Rings */}
                  <div className="absolute -inset-4 rounded-3xl border border-purple-400/30 animate-pulse"></div>
                  <div className="absolute -inset-8 rounded-3xl border border-pink-400/20 animate-pulse animation-delay-1000"></div>
                  
                  {/* Image Placeholder - Replace with your actual image */}
                  <div className="w-full h-full rounded-3xl overflow-hidden relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                   
                    <img 
                      src="/images/pic2.jpg" 
                      alt="Developer Portrait"
                      className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:scale-110"
                      onLoad={() => setImageLoaded(true)}
                    />
                   
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent rounded-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-900/30 rounded-3xl"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce animation-delay-500 shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce animation-delay-1500 shadow-lg"></div>
                  <div className="absolute top-8 -left-6 w-4 h-4 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-pulse shadow-lg"></div>
                </div>

                {/* Shadow/Base */}
                <div className="absolute top-8 left-8 w-full h-full bg-black/20 rounded-3xl blur-xl -z-10 transform transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>

              {/* Info Cards floating around the image */}
              <div className="absolute -left-20 top-1/4 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform transition-all duration-500 hover:scale-110 hover:bg-white/20">
                  <Code className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-sm font-semibold">Clean Code</p>
                </div>
              </div>

              <div className="absolute -right-20 top-1/2 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform transition-all duration-500 hover:scale-110 hover:bg-white/20 animation-delay-500">
                  <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                  <p className="text-sm font-semibold">Fast Performance</p>
                </div>
              </div>

              <div className="absolute -left-16 bottom-1/4 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transform transition-all duration-500 hover:scale-110 hover:bg-white/20 animation-delay-1000">
                  <Palette className="w-8 h-8 text-pink-400 mb-2" />
                  <p className="text-sm font-semibold">Creative Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description below the image */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">Passionate Developer & Designer</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              With a keen eye for detail and a passion for creating exceptional user experiences, 
              I bring ideas to life through innovative web solutions. Every project is an opportunity 
              to push boundaries and deliver something extraordinary.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '11+', label: 'Projects Completed' },
                { number: '2+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I'm a passionate frontend developer with 2 years of experience creating 
                exceptional digital experiences. My journey started with curiosity and 
                has evolved into a deep love for crafting pixel-perfect interfaces.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I specialize in React.js, Next.js, and modern CSS frameworks, always 
                staying updated with the latest technologies and best practices in web development.
              </p>
              
              {/* Skills Icons */}
              <div className="flex flex-wrap gap-4">
                {[Code, Palette, Rocket, Monitor, Smartphone, Zap].map((Icon, index) => (
                  <div key={index} className="p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Code className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Clean Code Enthusiast</h3>
                  <p className="text-gray-400">Writing maintainable and scalable solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: 'Frontend Frameworks', 
                skills: ['React.js', 'Next.js', 'Vue.js', 'Angular'],
                icon: Code 
              },
              { 
                category: 'Styling & UI', 
                skills: ['Tailwind CSS', 'Bootstrap', 'Material-UI', 'Styled Components'],
                icon: Palette 
              },
              { 
                category: 'Tools & Others', 
                skills: ['TypeScript', 'Git', 'Webpack', 'Node.js'],
                icon: Rocket 
              }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <skillGroup.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-6">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl mb-6 flex items-center justify-center group-hover:from-purple-600/50 group-hover:to-pink-600/50 transition-all duration-300">
                  <Monitor className="w-16 h-16 text-white/80" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.tech}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                  <ExternalLink className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something amazing together.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Mail, label: 'Email' }
            ].map((social, index) => (
              <button key={index} className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                <social.icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </button>
            ))}
          </div>
          
          <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* Enhanced Footer */}
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
                Passionate about creating beautiful, responsive, and user-friendly web experiences 
                with modern technologies and clean code architecture.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Mail, label: 'Email', href: 'mailto:your-email@example.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
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
              <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact', href: '/contact' }
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
                  'Frontend Development',
                  'React Applications',
                  'UI/UX Design',
                  'Website Optimization'
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
            <h4 className="text-xl font-semibold text-white mb-6 text-center">Technologies I Work With</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JavaScript', 'CSS3', 'HTML5'].map((tech, index) => (
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
              <p className="text-gray-300 mb-6">Get notified about my latest projects and web development insights.</p>
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
                <p>&copy; 2025 Frontend Developer Portfolio. All rights reserved.</p>
                <p className="text-sm mt-1">Crafted with ❤️ using React, Next.js & Tailwind CSS</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
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
    </div>
  );
}

export default index
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Rocket, Mail, Github, Linkedin, ExternalLink, Star, Zap, Monitor, Smartphone } from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSkill, setCurrentSkill] = useState(0);

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
      <nav className={`fixed top-0 w-full z-40 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </div>
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-purple-400 transition-all duration-300 transform hover:scale-110 ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

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
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ExternalLink className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400 hover:text-black">
                <Mail className="inline-block mr-2 w-5 h-5" />
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '15+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
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
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Portfolio. Crafted with passion and modern web technologies.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
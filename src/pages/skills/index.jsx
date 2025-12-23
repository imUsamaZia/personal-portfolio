import React, { useState, useEffect } from 'react';
import { ChevronDown,  Star,Monitor, GitBranch, Layers } from 'lucide-react';
import useVisibilityStore from '../stores/visibilityStore';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  skillCategories,
  achievement,
  learningPath,

} from "../data/data";
import Link from 'next/link';
export default function index() {
  const [activeSkill, setActiveSkill] = useState(null);
  const {isVisible, setIsVisible} = useVisibilityStore()
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <Header/>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative mt-[5rem] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              My Skills
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-300">
              Technologies & Expertise
            </p>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              A comprehensive overview of my technical skills, tools, and technologies 
              I use to create exceptional web experiences.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {achievement.map((achievement, index) => (
                <div key={index} className={`transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <achievement.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-purple-400 mb-2">{achievement.title}</div>
                    <div className="text-gray-400 text-sm">{achievement.desc}</div>
                  </div>
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

      {/* Skills Categories Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="group cursor-pointer"
                      onMouseEnter={() => setActiveSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">{skill.experience}</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                              activeSkill === `${categoryIndex}-${skillIndex}` ? 'animate-pulse' : ''
                            }`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                        <span className="absolute right-0 -top-8 text-sm font-bold text-purple-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Currently Learning
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {learningPath.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{item.skill}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    item.status === 'Learning' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'Exploring' ? 'bg-blue-500/20 text-blue-400' :
                    item.status === 'Started' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 -top-8 text-sm font-bold text-purple-400">
                    {item.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Environment Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Development Environment
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Code Editor',
                icon: Monitor,
                items: ['VS Code', 'Sublime Text', 'WebStorm'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Design Tools',
                icon: Layers,
                items: ['Figma', 'Adobe XD', 'Sketch'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Development',
                icon: GitBranch,
                items: ['Git', 'GitHub', 'GitLab'],
                color: 'from-green-500 to-emerald-500'
              }
            ].map((toolGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${toolGroup.color} w-fit mx-auto mb-6`}>
                  <toolGroup.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">{toolGroup.title}</h3>
                <div className="space-y-3">
                  {toolGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's combine my skills with your vision to create something amazing. 
            I'm always excited to work on new challenges and innovative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/projects" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/contacts" className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400 hover:text-black">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  );
}
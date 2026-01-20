import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import useVisibilityStore from '@/lib/visibilityStore';
import Header from '@/components/layout/Header';
import Link from 'next/link';

const index = () => {
  const { isVisible, setIsVisible } = useVisibilityStore();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle2,
      content: [
        'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.'
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: FileText,
      content: [
        'This website serves as a professional portfolio showcasing web development services and projects.',
        'Services include frontend development, React applications, UI/UX design, and website optimization.',
        'All project examples and case studies are presented for informational and promotional purposes.',
        'Contact forms and communication channels are provided for potential business inquiries.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Shield,
      content: [
        'All content, including but not limited to text, graphics, logos, images, and software, is the property of the website owner.',
        'Project showcases remain the intellectual property of their respective clients where applicable.',
        'You may not reproduce, distribute, or create derivative works without explicit written permission.',
        'Third-party libraries and frameworks are used under their respective licenses.'
      ]
    },
    {
      id: 'user-conduct',
      title: 'User Conduct',
      icon: AlertCircle,
      content: [
        'You agree not to use the website for any unlawful purpose or any purpose prohibited under this clause.',
        'You agree not to use the website in any way that could damage the website or impair anyone else\'s use.',
        'You agree not to attempt to gain unauthorized access to any part of the website.',
        'Harassment, abuse, or harmful behavior towards the website owner or other users is strictly prohibited.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8">
              <Link href="/" className="hover:text-purple-400 transition-colors duration-300">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Terms of Service</span>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-white/10">
                <FileText className="w-12 h-12 text-purple-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Please read these terms and conditions carefully before using our website and services.
            </p>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-gray-300">
                <strong className="text-white">Last Updated:</strong> January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={section.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                    <section.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Terms */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <AlertCircle className="w-6 h-6 text-yellow-400" />
                </div>
                Limitation of Liability
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  In no event shall the website owner be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest 
                  extent permitted by law, we exclude all representations, warranties, and conditions 
                  relating to our website and the use of this website.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                Changes to Terms
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting to the website. Your continued use of the website after 
                  any changes constitutes acceptance of the new terms.
                </p>
                <p>
                  We encourage you to review these terms periodically to stay informed of any updates.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                Contact Information
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about these Terms of Service, please contact us through 
                  the contact form on our website or via email.
                </p>
                <p>
                  We will respond to your inquiries as promptly as possible and work to resolve 
                  any concerns you may have.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-300 mb-6">
                We're here to help clarify any concerns you may have about our terms of service.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get In Touch
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer - Same as your main page */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-purple-500/20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Frontend Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Passionate about creating beautiful, responsive, and user-friendly web experiences 
                with modern technologies and clean code architecture.
              </p>
            </div>
          </div>

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
                <span className="text-purple-400 text-sm font-semibold">Terms of Service</span>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div>
      </footer>
    </div>
  );
};

export default index;
import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Eye, Lock, Database, Cookie, Mail, AlertTriangle } from 'lucide-react';
import useVisibilityStore from '../stores/visibilityStore';
import Header from '@/components/layout/Header';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const { isVisible, setIsVisible } = useVisibilityStore();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal Information: When you contact us through forms, we may collect your name, email address, phone number, and message content.',
        'Usage Data: We automatically collect information about how you interact with our website, including pages visited, time spent, and browser information.',
        'Device Information: We may collect information about the device you use to access our website, including IP address, browser type, and operating system.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Communication: To respond to your inquiries, provide customer support, and send you relevant information about our services.',
        'Website Improvement: To analyze website usage patterns and improve our content, design, and functionality.',
        'Marketing: With your consent, we may send you promotional materials about our services and industry insights.',
        'Legal Compliance: To comply with legal obligations and protect our rights and interests.'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Shield,
      content: [
        'We do not sell, trade, or rent your personal information to third parties for marketing purposes.',
        'Service Providers: We may share information with trusted third-party service providers who assist us in operating our website and conducting business.',
        'Legal Requirements: We may disclose information when required by law or to protect our rights, property, or safety.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'SSL encryption is used to secure data transmission between your browser and our servers.',
        'Regular security assessments are conducted to identify and address potential vulnerabilities.',
        'Access to personal information is restricted to authorized personnel who need it to perform their job functions.'
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
              <span className="text-white">Privacy Policy</span>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-white/10">
                <Shield className="w-12 h-12 text-purple-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-gray-300">
                <strong className="text-white">Last Updated:</strong> January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
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
                    <div key={pIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Cookies Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <Cookie className="w-6 h-6 text-yellow-400" />
                </div>
                Cookies and Tracking Technologies
              </h2>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                    <p className="text-gray-300 text-sm">
                      Required for basic website functionality, including navigation and access to secure areas.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                    <p className="text-gray-300 text-sm">
                      Help us understand how visitors interact with our website by collecting anonymous information.
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>

            {/* Your Rights Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
                Your Privacy Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Access', desc: 'Request access to your personal information we hold' },
                  { title: 'Correction', desc: 'Request correction of inaccurate personal information' },
                  { title: 'Deletion', desc: 'Request deletion of your personal information' },
                  { title: 'Portability', desc: 'Request transfer of your data in a structured format' },
                  { title: 'Objection', desc: 'Object to processing of your personal information' },
                  { title: 'Withdrawal', desc: 'Withdraw consent for data processing at any time' }
                ].map((right, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Retention */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                Data Retention
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Contact inquiries: 2 years from last communication</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Website analytics: 26 months from collection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Marketing communications: Until unsubscribed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                Contact Us About Privacy
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-semibold">Email Us</p>
                      <p className="text-gray-300">privacy@yourwebsite.com</p>
                    </div>
                  </div>
                </div>
                <p>
                  We will respond to your privacy-related inquiries within 30 days of receipt.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-3 bg-yellow-600/20 rounded-xl mr-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                </div>
                Changes to This Policy
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Posting the updated policy on our website</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Sending you an email notification if you've subscribed to our communications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Updating the "Last Updated" date at the top of this policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Your Privacy?</h3>
              <p className="text-gray-300 mb-6">
                We're committed to protecting your privacy and are happy to address any concerns you may have.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Contact Us
                <Mail className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

 
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
  )
}
export default PrivacyPolicy;
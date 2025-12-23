import React, { useState, useEffect } from "react";
import Modal from "./Modal";

import {
  ChevronDown,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Clock,
  Zap,
  Heart,
  Send,
  Loader2,
  Star,
} from "lucide-react";
import axios from "axios";
import {
  contactFQA,
  contactInfo,
  socialLinks,
  availability,
} from "../data/data";
import useVisibilityStore from "../stores/visibilityStore";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function index() {
  const { isVisible, setIsVisible } = useVisibilityStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/contact", formData);
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <Header />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative mt-[5rem] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Get In Touch
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-300">
              Let's Create Something Amazing Together
            </p>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say
              hello? I'd love to hear from you and discuss how we can bring your
              ideas to life.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { icon: MessageCircle, title: "24h", desc: "Response Time" },
                { icon: Calendar, title: "100+", desc: "Projects Delivered" },
                { icon: Star, title: "5 Star", desc: "Average Rating" },
                { icon: Heart, title: "99%", desc: "Happy Clients" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${
                    index * 200
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-purple-400 mb-2">
                      {stat.title}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-[48.5%] transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send Message
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter Your Name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter Your Email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Project Discussion"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-3 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                    {errorMessage ||
                      "Failed to send message. Please try again later."}
                  </div>
                )}
              </div>
            </form>
            <Modal
              isOpen={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
            >
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  Success!
                </h3>
                <p className="text-gray-300">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            </Modal>
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Contact Information
                </h2>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 block"
                    >
                      <div className="flex items-center">
                        <div
                          className={`p-4 rounded-xl bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-purple-400 mr-3" />
                  Availability
                </h3>
                <div className="space-y-4">
                  {availability.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                    >
                      <span className="font-semibold">{schedule.day}</span>
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-3">
                          {schedule.time}
                        </span>
                        <div
                          className={`w-3 h-3 rounded-full ${
                            schedule.available
                              ? "bg-green-400"
                              : "bg-yellow-400"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`group flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 mr-3" />
                      <span className="font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {contactFQA.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
            Don't let your ideas stay as ideas. Let's turn your vision into
            reality with clean code, modern design, and exceptional user
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Project Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400 hover:text-black">
              <Calendar className="w-5 h-5 mr-2 inline" />
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

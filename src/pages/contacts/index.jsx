"use client";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Github,
  Linkedin,
  CheckCircle,
  MessageSquare,
  Coffee,
  Rocket,
  Shield,
  Users,
  X,
} from "lucide-react";
import axios from "axios";
import { contactFQA, contactInfo, socialLinks, availability } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ── Success Modal ─────────────────────────────────────────────────────────────
function SuccessModal({ isOpen, onClose }) {
  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(onClose, 4000);
    return () => { document.body.style.overflow = "unset"; clearTimeout(t); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-orange-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* top color bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />

        <div className="p-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-500 mb-2">Thanks for reaching out. I'll get back to you within 24 hours.</p>
          <button onClick={onClose} className="mt-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm shadow-md">
            Close
          </button>
        </div>

        {/* progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-gradient-to-r from-orange-400 to-red-400"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── FAQ item ──────────────────────────────────────────────────────────────────
function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-orange-50 transition-colors duration-200"
      >
        <span className="font-bold text-gray-900 text-base pr-4">{faq.question}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
          <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ArrowRight className="w-3.5 h-3.5 text-orange-500 rotate-45" />
          </div>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-7 pb-5 text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", projectType: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("/api/contact", formData);
      setShowModal(true);
      setFormData({ name: "", email: "", subject: "", message: "", projectType: "" });
      setSubmitStatus("success");
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Variants ────────────────────────────────────────────────────────────
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

  const projectTypes = ["Web Application", "E-Commerce", "API / Backend", "Landing Page", "Mobile App", "Other"];

  const whyWork = [
    { title: "Fast Turnaround", desc: "I respect deadlines. Every project gets a realistic timeline and I stick to it.", icon: Zap, color: "orange" },
    { title: "Clean Code", desc: "Readable, maintainable, well-documented code that your next dev will thank you for.", icon: Shield, color: "red" },
    { title: "Full Communication", desc: "Daily updates, clear progress reports, and instant replies to your messages.", icon: MessageSquare, color: "orange" },
    { title: "Post-Launch Support", desc: "I don't disappear after delivery. Bug fixes and support are part of the deal.", icon: Heart, color: "red" },
  ];

  return (
    <>
      <Header />
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-400 origin-left z-50"
          style={{ scaleX }}
        />

        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
                Let's Work Together
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Have a project in mind or just want to say hello?
                I'd love to hear from you.{" "}
                <span className="text-orange-600 font-semibold">I respond within 24 hours.</span>
              </motion.p>

              {/* Quick stats */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
              >
                {[
                  { icon: MessageCircle, title: "24h", desc: "Response Time" },
                  { icon: Calendar, title: "20+", desc: "Projects Done" },
                  { icon: Star, title: "5★", desc: "Avg. Rating" },
                  { icon: Heart, title: "99%", desc: "Happy Clients" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-5 shadow-lg border border-orange-100"
                  >
                    <stat.icon className="w-7 h-7 text-orange-500 mb-2 mx-auto" />
                    <div className="text-2xl font-bold text-gray-900">{stat.title}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.desc}</div>
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

        {/* ── FORM + INFO ─────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >

              {/* ── Contact Form ── */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6">
                  <Send className="w-4 h-4" /> Send a Message
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Tell me about your{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">project</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* name + email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Usama Zia"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all duration-200 disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all duration-200 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* project type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, projectType: type }))}
                          className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                            formData.projectType === type
                              ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200"
                              : "bg-gray-50 text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Project Discussion / Freelance Work"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all duration-200 disabled:opacity-60"
                    />
                  </div>

                  {/* message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      placeholder="Tell me about your project, goals, timeline, and budget..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100 transition-all duration-200 resize-none disabled:opacity-60"
                    />
                    <p className="text-xs text-gray-400 mt-1 text-right">{formData.message.length} / 1000</p>
                  </div>

                  {/* submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 16px 32px rgba(249,115,22,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-red-500 text-white rounded-2xl font-bold text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </motion.button>

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium text-center">
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </motion.div>

              {/* ── Contact Info sidebar ── */}
              <motion.div variants={fadeUp} className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-6">
                    <MapPin className="w-4 h-4" /> Contact Details
                  </span>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    Reach me{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">directly</span>
                  </h2>

                  <div className="space-y-4">
                    {contactInfo.map((info, i) => (
                      <motion.a
                        key={i}
                        href={info.link}
                        whileHover={{ x: 5, scale: 1.01 }}
                        className="group flex items-center gap-4 bg-gradient-to-r from-orange-50 to-white rounded-2xl p-5 border border-orange-100 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{info.title}</p>
                          <p className="text-gray-900 font-bold group-hover:text-orange-600 transition-colors">{info.value}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 ml-auto transition-all group-hover:translate-x-1" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-7 border border-orange-100 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    Availability Schedule
                  </h3>
                  <div className="space-y-3">
                    {availability.map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-orange-100 last:border-0">
                        <span className="font-semibold text-gray-800 text-sm">{s.day}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-sm">{s.time}</span>
                          <div className={`w-2.5 h-2.5 rounded-full ${s.available ? "bg-green-400 shadow-sm shadow-green-200" : "bg-yellow-400"}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-orange-100">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-600 text-sm font-semibold">Currently available for new projects</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-7 border border-orange-100 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Follow & Connect</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, y: -2 }}
                        className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="font-semibold text-gray-800 text-sm">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── WHY WORK WITH ME ────────────────────────────────────────── */}
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
                  Why Work{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    With Me?
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">What you can expect when you reach out</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
                {whyWork.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.02 }}
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

        {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  How It{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Works
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">From first message to launched product</p>
              </motion.div>

              {/* connecting line */}
              <div className="relative">
                <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 mx-16" />
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "You Reach Out", desc: "Fill in the form or email me directly with your project idea.", icon: MessageSquare },
                    { step: "02", title: "Discovery Call", desc: "We hop on a quick call to align on scope, goals, and timeline.", icon: Coffee },
                    { step: "03", title: "I Get to Work", desc: "Development begins with regular updates and milestone reviews.", icon: Rocket },
                    { step: "04", title: "We Ship It", desc: "Final review, deployment, handoff, and post-launch support.", icon: CheckCircle },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      className="relative bg-gradient-to-br from-orange-50 to-white rounded-3xl p-7 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md relative z-10">
                        <s.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-black text-orange-300 tracking-widest mb-1">{s.step}</div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <section className="py-28 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <h2 className="text-5xl font-bold mb-4">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">Quick answers to common questions</p>
              </motion.div>

              <div className="space-y-4">
                {contactFQA.map((faq, i) => (
                  <FaqItem key={i} faq={faq} index={i} />
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-10 text-center">
                <p className="text-gray-500 text-sm">
                  Still have questions?{" "}
                  <a href="mailto:maharusamazia@gmail.com" className="text-orange-600 font-semibold hover:underline">
                    Email me directly →
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────── */}
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
              Don't let your ideas stay as ideas. Let's build something real together — on time, on budget, and beyond expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:maharusamazia@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 16px 32px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="group px-10 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:+923098943008"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 bg-white/20 border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
}
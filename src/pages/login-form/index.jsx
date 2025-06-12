import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, CheckCircle, X, AlertCircle, Zap } from "lucide-react";

// Custom Popup Component
const CustomPopup = ({ isVisible, type, title, message, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-4 transform transition-all duration-300 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Icon */}
                <div className="text-center mb-4">
                    {type === 'success' ? (
                        <div className="relative">
                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                            <Zap className="w-8 h-8 text-yellow-400 absolute top-0 right-1/3 animate-pulse" />
                        </div>
                    ) : (
                        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    )}
                </div>

                {/* Content */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 mb-6">{message}</p>
                    
                    <button
                        onClick={onClose}
                        className="group relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="relative z-10">
                            {type === 'success' ? 'Continue to Portfolio' : 'Try Again'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

const index = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [popup, setPopup] = useState({
        isVisible: false,
        type: 'success',
        title: '',
        message: ''
    });
    const route = useRouter();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const showPopup = (type, title, message) => {
        setPopup({
            isVisible: true,
            type,
            title,
            message
        });
    };

    const closePopup = () => {
        setPopup(prev => ({ ...prev, isVisible: false }));
        if (popup.type === 'success') {
            setTimeout(() => {
                route.push('/');
            }, 300);
        }
    };

    const signupHandle = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "/api/login",
                { email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            // Show success popup instead of alert
            showPopup(
                'success',
                'Welcome Back! 🚀',
                `Login successful! Welcome back to your portfolio dashboard. You're being redirected now.`
            );
            console.log("response", res.data);
        } catch (error) {
            // Show error popup instead of alert
            showPopup(
                'error',
                'Login Failed',
                error.response?.data?.message || "Invalid credentials. Please check your email and password and try again."
            );
            console.log("error baby", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative flex items-center justify-center">
            {/* Custom Popup */}
            <CustomPopup
                isVisible={popup.isVisible}
                type={popup.type}
                title={popup.title}
                message={popup.message}
                onClose={closePopup}
            />

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating Cursor Effect */}
            <div 
                className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-40 transition-all duration-100 ease-out"
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12,
                    transform: 'scale(0.8)',
                    opacity: 0.6
                }}
            ></div>

            {/* Login Form Container */}
            <div className={`w-full max-w-md mx-4 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        Portfolio
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                        Welcome Back
                    </h2>
                    <p className="text-gray-400">Sign in to access your portfolio</p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={signupHandle}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
                >
                    {/* Email Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                                className="w-full pl-12 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-white placeholder-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="mb-6 text-right">
                        <Link href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300">
                            Forgot your password?
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                        {/* Login Button */}
                        <button
                            type="submit"
                            className="group relative w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                Login
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        {/* Sign Up Link */}
                        <Link 
                            href="/signup-form" 
                            className="group w-full px-6 py-3 border-2 border-purple-400 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-purple-400 hover:text-black flex items-center justify-center"
                        >
                            <User className="mr-2 w-5 h-5" />
                            Create Account
                        </Link>
                    </div>
                </form>

                {/* Additional Links */}
                <div className="text-center mt-6">
                    <p className="text-gray-400">
                        Don't have an account? 
                        <Link href="/signup-form" className="text-purple-400 hover:text-purple-300 ml-1 transition-colors duration-300">
                            Sign up here
                        </Link>
                    </p>
                </div>

                {/* Quick Login Info */}
                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-400">
                                Secure & Fast Login
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default index;
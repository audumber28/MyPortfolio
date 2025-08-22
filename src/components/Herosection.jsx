"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub, FaCode, FaLaptopCode, FaBook, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodeforces } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';
import { HiOutlineChevronDown } from 'react-icons/hi';
import CountUp from 'react-countup';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [showGithubStats, setShowGithubStats] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const scrollToContent = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };
  
  // Student-relevant technologies
  const techStack = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Node.js', color: '#339933' },
    { name: 'C++', color: '#00599C' },
    { name: 'HTML/CSS', color: '#E34F26' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Git', color: '#F05032' },
  ];

  // Current date for student timeline display
  const currentYear = 2025; // Using the provided year
  const gradYear = 2028;
  const yearOfStudy = gradYear - currentYear<= 4 ? gradYear - currentYear : 4;

  const toggleGithubStats = () => {
    setShowGithubStats(!showGithubStats);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]" id="home" ref={containerRef}>
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Code lines background - subtle animation */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, x: -100 }}
              animate={{ 
                opacity: [0.05, 0.1, 0.05], 
                x: i % 2 === 0 ? [-100, window.innerWidth] : [window.innerWidth, -100] 
              }}
              transition={{ 
                duration: Math.random() * 100 + 150,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
              className="absolute h-px bg-red-500"
              style={{ 
                top: `${(i * 5) + Math.random() * 5}%`,
                width: `${Math.random() * 20 + 10}%`,
                opacity: 0.05
              }}
            />
          ))}
        </div>
        
        {/* Glow effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-red-500 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-red-700 blur-[120px]"
        />
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="container mx-auto px-4 pt-10 md:pt-10 relative z-10"
        style={{ opacity, y, scale }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-6"
          >
            {/* Student status badges */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block py-1 px-3 rounded-full border border-red-500/30 bg-red-500/5 text-sm text-red-400"
              >
                <span className="flex items-center gap-1.5">
                  <FaGraduationCap className="text-red-500" />
                  Computer Engineering @ GEC
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block py-1 px-3 rounded-full border border-green-500/30 bg-green-500/5 text-sm text-green-400"
              >
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-green-500" />
                  Class of 2027
                </span>
              </motion.div>
            </div>
            
            {/* Social Icons - Student Relevant */}
            <div className="flex items-center gap-4 mb-6">
              {[
                { icon: <FaGithub />, href: "https://github.com/audumber28", label: "GitHub", color: "#f5f5f5" },
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/audumber-shirodkar-a007072b5", label: "LinkedIn", color: "#0077B5" },
                
               
             
                { icon: <FaInstagram />, href: "https://www.instagram.com/audumber28", label: "Instagram", color: "#E1306C" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: "#dc2626",
                    color: social.color,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-gray-400 hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Hero Text */}
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-popins text-3xl md:text-5xl text-white leading-tight font-medium"
              >
                It&apos;m a Full Stack
              </motion.h2>
            </div>
            
            <div className="overflow-hidden flex flex-col">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-red-600 font-popins text-5xl md:text-7xl font-extrabold mb-1"
              >
                Web
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="font-popins text-5xl md:text-7xl font-extrabold text-white"
              >
                Developer
              </motion.h1>
            </div>
            
            {/* Typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="h-8 text-gray-300 text-lg"
            >
              <Typewriter
                options={{
                  strings: [
                    'Building responsive web apps',
                    'Learning new technologies',
                    'Solving coding challenges',
                    'Computer Engineering student',
                    'Open-source contributor'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            
            {/* Tech stack tags - student friendly */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="pt-2"
            >
              <div className="flex gap-2 flex-wrap max-w-md">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, color: tech.color }}
                    className="text-xs text-gray-400 bg-gray-900/80 px-3 py-1 rounded-full border border-gray-800"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* GitHub Stats Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="pt-2"
            >
              <div 
                className="cursor-pointer p-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors duration-300"
                onClick={toggleGithubStats}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-xl text-gray-400" />
                    <span className="font-medium text-white">GitHub Activity</span>
                  </div>
                  <HiOutlineChevronDown className={`text-gray-400 transition-transform duration-300 ${showGithubStats ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {showGithubStats && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-gray-800 overflow-hidden"
                    >
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="flex flex-col">
                          <CountUp 
                            start={0} 
                            end={12} 
                            duration={2.5} 
                            className="text-red-500 text-xl font-bold"
                          />
                          <span className="text-xs text-gray-400">Repositories</span>
                        </div>
                        <div className="flex flex-col">
                          <CountUp 
                            start={0} 
                            end={8} 
                            duration={2.5} 
                            className="text-red-500 text-xl font-bold"
                          />
                          <span className="text-xs text-gray-400">Followers</span>
                        </div>
                        <div className="flex flex-col">
                          <CountUp 
                            start={0} 
                            end={20} 
                            duration={2.5} 
                            className="text-red-500 text-xl font-bold"
                          />
                          <span className="text-xs text-gray-400">Following</span>
                        </div>
                        <div className="col-span-3 text-center mt-2">
                          <span className="text-xs text-gray-500">Last active: August 22, 2025</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            
            {/* Email and CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7 }}
              className="pt-6 space-y-6"
            >
              <div className="group flex items-center space-x-3">
                <div className="w-9 h-9 bg-gray-900 border border-gray-800 group-hover:border-red-500 rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="mailto:audumbershirodkar28@gmail.com" 
                  className="text-gray-300 group-hover:text-red-400 transition-colors duration-300"
                >
                  audumbershirodkar28@gmail.com
                </a>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/projects" passHref>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-red-700 to-red-500 text-white px-5 py-2.5 rounded-lg font-medium cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <FaLaptopCode />
                      My Projects
                    </span>
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-white"
                      initial={{ x: "100%", opacity: 0.1 }}
                      whileHover={{ x: "-100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </Link>
                <Link href="/contact" passHref>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative overflow-hidden border border-red-500 bg-transparent text-red-500 hover:text-white px-5 py-2.5 rounded-lg font-medium cursor-pointer"
                  >
                    <span className="relative z-10">
                      Contact Me
                    </span>
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-red-500"
                      initial={{ y: "-100%" }}
                      whileHover={{ y: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image with Student Journey */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative lg:w-2/5"
          >
            <div className="relative">
              {/* Education Timeline - Visual representation */}
              <div className="absolute -top-14 -right-6 z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-lg px-4 py-2 rounded-lg"
                >
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <FaGraduationCap className="text-red-500" />
                    <span>Academic Journey</span>
                  </h4>
                  
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((year) => (
                      <motion.div 
                        key={year}
                        className={`relative flex-1 h-2 rounded-full ${year <= yearOfStudy ? 'bg-red-500' : 'bg-gray-700'}`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                          Year {year}
                        </div>
                        {year === yearOfStudy && (
                          <motion.div 
                            className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-8 text-xs text-gray-400">
                    <span>2023</span>
                    <span className="text-red-400">Current</span>
                    <span>2027</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Student-themed elements */}
              <div className="absolute -bottom-4 -left-4 z-20">
                <motion.div
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-lg px-3 py-1 rounded-full flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-400">B.E Computer</span>
                </motion.div>
              </div>
              
              {/* Animated decorative elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-red-500/20 rounded-full -m-4"
              />
              
              {/* Profile Image with 3D Card Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="relative w-72 h-72 md:w-80 md:h-80 mx-auto perspective-card"
              >
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                  <Image 
                    src="/IMG20250330211809[1].jpg" 
                    alt="Audumber Shirodkar" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Student role tabs */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex p-1 rounded-full bg-gray-900/90 backdrop-blur-sm border border-gray-800"
                  >
                    <button 
                      className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 transition-colors duration-300 ${activeTab === 'student' ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-white'}`}
                      onClick={() => setActiveTab('student')}
                    >
                      <FaGraduationCap />
                      Student
                    </button>
                   <button 
  className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 transition-colors duration-300 ${activeTab === "developer" ? "bg-red-500 text-white" : "text-gray-400 hover:text-white"}`}
  onClick={() => setActiveTab("developer")}
>
  <BiCodeAlt />
  Developer
</button>

                  </motion.div>
                </div>
                
                {/* Decorative code elements for student theme */}
                <div className="absolute -right-8 top-10 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 text-xs font-mono rounded-lg p-2 shadow-lg"
                  >
                    <span className="text-green-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-400">'passionate'</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 border border-gray-700 rounded-full flex items-center justify-center"
            >
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-red-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* About Section - College Student Style */}
      <div id="about-section" className="container mx-auto px-4 py-24 mt-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              About <span className="text-red-500">Me</span>
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              </motion.div>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              Third-year Computer Engineering student with a passion for web development
            </motion.p>
          </motion.div>
          
          {/* Navigation Tabs for About Section */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              {['Education', 'Skills', 'Interests'].map((tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ backgroundColor: 'rgba(185, 28, 28, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-md text-sm transition-colors duration-300 ${
                    true ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* About Content - Student Friendly Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-gray-800 bg-gradient-to-br from-gray-900/90 to-black/90"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-10">
              {/* Profile Image */}
              <motion.div 
                className="md:col-span-5 lg:col-span-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                  
                  {/* Image Frame */}
                  <div className="relative rounded-xl overflow-hidden border border-gray-700 group-hover:border-red-500/50 transition-colors duration-300">
                    <Image 
                      src="/IMG20250330211532.jpg" 
                      alt="Audumber Shirodkar" 
                      width={400}
                      height={500}
                      className="object-cover w-full aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Academic Status Ribbon */}
                    <div className="absolute top-4 -right-8 transform rotate-45 bg-red-600 text-white text-xs py-1 px-8 shadow-lg">
                      {yearOfStudy === 1 ? "Freshman" : 
                       yearOfStudy === 2 ? "Sophomore" : 
                       yearOfStudy === 3 ? "Senior" : "Senior"}
                    </div>
                  </div>
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 p-5 z-20">
                    <h3 className="text-xl font-bold text-white">Audumber Shirodkar</h3>
                    <p className="text-red-400 text-sm">Computer Engineering Student</p>
                  </div>
                </div>
                
                {/* Student Info Cards */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-3 text-center"
                  >
                    <h4 className="text-red-500 text-2xl font-bold">{yearOfStudy}rd</h4>
                    <p className="text-xs text-gray-400 mt-1">Year Student</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-3 text-center"
                  >
                    <h4 className="text-red-500 text-2xl font-bold">12+</h4>
                    <p className="text-xs text-gray-400 mt-1">Projects</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-3 text-center"
                  >
                    <h4 className="text-red-500 text-2xl font-bold">8+</h4>
                    <p className="text-xs text-gray-400 mt-1">Tech Skills</p>
                  </motion.div>
                </div>
                
                {/* GitHub Card */}
                <motion.a
                  href="https://github.com/audumber28"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block mt-4 p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-white" />
                    <div>
                      <h4 className="font-medium text-white">@audumber28</h4>
                      <p className="text-xs text-gray-400">View my code repositories</p>
                    </div>
                    <div className="ml-auto text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
              
              {/* About Text Content - Student Edition */}
              <div className="md:col-span-7 lg:col-span-8 space-y-6">
                <div className="space-y-5">
                  {/* Bio Paragraphs with Student-Focused Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative pl-5 border-l-2 border-red-500"
                  >
                    <p className="text-gray-300 leading-relaxed">
Hi, I’m Audumber Shirodkar, a Computer Engineering student at Goa College of Engineering. I first got interested in technology when I started wondering how websites really work and how they connect people across the world. That curiosity slowly turned into a passion for exploring and learning more about the world of coding and development.                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-5 border-l-2 border-gray-700"
                  >
                    <p className="text-gray-300 leading-relaxed">
As a student and budding full stack developer, I enjoy experimenting with both front-end and back-end technologies. I like taking small ideas and turning them into real projects—whether it’s building simple apps or working on more complex web applications. For me, it’s all about learning, improving, and enjoying the process of creating something useful.                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-5 border-l-2 border-gray-700"
                  >
                    
                  </motion.div>
                </div>
                
                {/* Skills Section - Student Edition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                    Skills & Coursework
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Student Skill Bars */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">Web Development</span>
                        <span className="text-sm text-red-400">90%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          transition={{ duration: 1, delay: 0.8 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">Data Structures & Algorithms</span>
                        <span className="text-sm text-red-400">85%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.9 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">Object-Oriented Programming</span>
                        <span className="text-sm text-red-400">80%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '80%' }}
                          transition={{ duration: 1, delay: 1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Tech Stack Tags - College Student Edition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                    Tech Stack & Tools
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'React', color: '#61DAFB' },
                      { name: 'Next.js', color: '#ffffff' },
                      { name: 'JavaScript', color: '#F7DF1E' },
                      { name: 'Typescript', color: '#F7DF1E' },
                      { name: 'C/C++', color: '#00599C' },
                      { name: 'Node.js', color: '#339933' },
                      { name: 'HTML5', color: '#E34F26' },
                      { name: 'CSS3', color: '#1572B6' },
                      { name: 'Tailwind', color: '#06B6D4' },
                      { name: 'VS Code', color: '#007ACC' },
                      { name: 'Java', color: '#F05032' },
                      { name: 'Framer Motion', color: '#F05032' },
                      { name: 'Acertainity', color: '#F05032' },
                      { name: 'MongoDB', color: '#F05032' },
                      { name: 'Firebase', color: '#F05032' },
                      { name: 'Flutter', color: '#F05032' },
                      { name: 'Socket.io', color: '#F05032' },
                    ].map((skill, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          color: skill.color,
                          backgroundColor: "rgba(20, 20, 20, 0.9)",
                          borderColor: skill.color
                        }}
                        className="px-3 py-1 bg-gray-900/80 border border-gray-800 text-gray-300 rounded-full text-sm transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                {/* Current Courses Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                    Current Courses
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { name: 'Operating System' },
                      { name: 'Database Management And Query Processing' },
                      { name: 'Web Development'},
                      { name: 'Object Oriented Programming in Java' }
                    ].map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, borderColor: 'rgba(220, 38, 38, 0.5)' }}
                        className="px-3 py-2 bg-gray-900/50 border border-gray-800 rounded-lg"
                      >
                        <div className="text-sm text-gray-300">{course.name}</div>
                        <div className="text-xs text-red-400">{course.code}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* CTA Button - Student Edition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="pt-6 flex justify-start"
                >
                  <Link href="/about" passHref>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative overflow-hidden inline-block bg-gradient-to-r from-red-700 to-red-500 text-white px-6 py-3 rounded-lg font-medium cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        More About Me
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-full bg-white"
                        initial={{ x: "100%", opacity: 0.1 }}
                        whileHover={{ x: "-100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .perspective-card {
          perspective: 1000px;
        }
        
        .perspective-card:hover > div {
          transform: rotateY(5deg) rotateX(-5deg);
          transition: transform 0.5s ease;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
    const router = useRouter();
    const controls = useAnimation();
    
    useEffect(() => {
        controls.start((i) => ({
            opacity: 1,
            y: 0,
            transition: { 
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut" 
            }
        }));
    }, [controls]);
    
    const handleBackClick = () => {
        router.push('/');
    };
    
    const skills = [
        { name: 'C', icon: '/c only.svg' },
        { name: 'C++', icon: '/c PP.svg' },
        
        { name: 'HTML', icon: '/html.svg' },
        { name: 'CSS', icon: '/css-3.svg' },
        { name: 'JavaScript', icon: '/javascript.svg' },
        { name: 'Java', icon: '/Java.png' },
        { name: 'Framer-Motion', icon: '/framer-motion-seeklogo.png' },
        { name: 'Node.js', icon: '/nodejs-icon.svg' },
        { name: 'Flutter', icon: '/Flutter.png' },
        { name: 'MongoDB', icon: '/MongoDB.png' },
        { name: 'Material UI', icon: '/Material UI.png' },
        { name: 'NextJS', icon: '/icons8-next.js-48 (1).png' },
        
        { name: 'Firebase', icon: '/Firebase.png' },
        { name: 'Socket.io', icon: '/socket-io-logo-black-and-white.png' },
        { name: 'React', icon: '/react.svg' },
        { name: 'Tailwind CSS', icon: '/tailwind.svg' },
        { name: 'GitHub', icon: '/github-icon-2.svg' },
        { name: 'Git', icon: '/git.svg' },
    ];
      
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-700 rounded-full filter blur-[8rem] opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-700 rounded-full filter blur-[8rem] opacity-20"></div>
            </div>
            
            {/* Back Button - Top Left */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleBackClick}
                className="fixed top-6 left-6 z-50 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
            </motion.button>
            
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="flex flex-col items-center">
                    {/* Profile Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        <div className="relative inline-block group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full opacity-75 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500"></div>
                            <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
                                <Image
                                    src="/IMG20250330211809[1].jpg"
                                    fill
                                    sizes="250px"
                                    className="rounded-full object-cover"
                                    alt="Audumber Shirodkar"
                                    priority
                                />
                            </div>
                        </div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-6 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                        >
                            Audumber Shirodkar
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-gray-400 text-lg mt-2"
                        >
                            Full Stack Developer & Computer Engineering Student
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex justify-center mt-4 space-x-3"
                        >
                            <a href="https://github.com/audumber28" target="_blank" rel="noopener noreferrer" 
                                className="p-2 border border-gray-700 rounded-full hover:border-red-500 hover:bg-red-500/20 transition-all duration-300">
                                <Image src="/github-icon-2.svg" width={24} height={24} alt="GitHub" />
                            </a>
                            {/* Add more social links as needed */}
                        </motion.div>
                    </motion.div>
                    
                    {/* About Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="w-full max-w-3xl backdrop-blur-sm bg-black bg-opacity-30 border border-gray-800 p-8 rounded-2xl hover:border-red-700 hover:shadow-[0_0_25px_rgba(185,28,28,0.3)] transition-all duration-500"
                    >
                        <div className="space-y-6 text-center">
                            <h2 className="relative font-bold text-3xl inline-block">
                                ABOUT <span className="text-red-500">ME</span>
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                It&apos;m Audumber Shirodkar, a dedicated Computer Engineering student at Goa College of Engineering (GEC) with a passion for full-stack web development. My journey in technology is driven by a desire to build innovative and efficient solutions that improve user experiences.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                With proficiency in React, Next.js, CSS, HTML, Node.js, Bootstrap, C, and C++, I enjoy working across the entire web development stack, from creating sleek and responsive front-end interfaces to building robust back-end architectures.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                As a second-year engineering student, I constantly explore new technologies and frameworks, pushing the boundaries of my knowledge while actively contributing to open-source projects. I am excited to continue growing my skills and making impactful contributions in the world of web development.
                            </p>
                        </div>
                    </motion.div>
                    
                    {/* Education & Experience Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="w-full max-w-3xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* Education Card */}
                        <div className="backdrop-blur-sm bg-black bg-opacity-30 border border-gray-800 p-6 rounded-xl hover:border-red-700 hover:shadow-[0_0_15px_rgba(185,28,28,0.2)] transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                Education
                            </h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-red-500 pl-4">
                                    <h4 className="font-bold text-lg">Computer Engineering</h4>
                                    <p className="text-gray-400">Goa College of Engineering</p>
                                    <p className="text-sm text-gray-500">2023 - 2027</p>
                                </div>
                                <div className="border-l-2 border-gray-700 pl-4">
                                    <h4 className="font-bold text-lg">Higher Secondary Education</h4>
                                    <p className="text-gray-400">Your High School</p>
                                    <p className="text-sm text-gray-500">2021 - 2023</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Projects Card */}
                        <div className="backdrop-blur-sm bg-black bg-opacity-30 border border-gray-800 p-6 rounded-xl hover:border-red-700 hover:shadow-[0_0_15px_rgba(185,28,28,0.2)] transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                Projects
                            </h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-red-500 pl-4">
                                    <h4 className="font-bold text-lg">CollabPad</h4>
                                    <p className="text-gray-400">Real-time collaborative editor</p>
                                    <p className="text-sm text-gray-500">TypeScript, WebSockets</p>
                                </div>
                                <div className="border-l-2 border-gray-700 pl-4">
                                    <h4 className="font-bold text-lg">Peer Edge</h4>
                                    <p className="text-gray-400">Code review platform</p>
                                    <p className="text-sm text-gray-500">React, Node.js</p>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Link href="/projects">
                                        <button className="px-4 py-2 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-lg hover:from-red-800 hover:to-red-600 transition-colors duration-300 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            View All Projects
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Toolbox Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="w-full max-w-3xl mt-16 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-8 relative inline-block">
                            My <span className="text-red-500">Toolbox</span>
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                        </h2>
                        
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={controls}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="relative p-4 rounded-lg backdrop-blur-sm bg-black bg-opacity-30 border border-gray-800 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(185,28,28,0.3)] transition-all duration-300">
                                        <Image 
                                            src={skill.icon} 
                                            alt={skill.name} 
                                            width={48} 
                                            height={48} 
                                            className="hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default About;
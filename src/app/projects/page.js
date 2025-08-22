"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const Projects = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('all');

    const handleBackClick = () => {
        router.push('/');
    };

    // Project data
    const projects = [
        {
            id: 4,
            title: "CollabPad",
            description: "An app specially made for students where they can engage through chats or scribble guessing game to do timepass during boring lab sessions",
            tags: ["Nextjs", "Node.js", "socket.io"],
            category: "web",
            github: "https://github.com/audumber28/CollabPad",
            live: "#",
        },
         {
            id: 3,
            title: "Peer Edge",
            description: "Peer to Mentor matchmaking web app for students/learners to find their best mentor in their perticular field",
            tags: ["Typescript", "API", "CSS","React-icons","Stream","Tailwind"],
            category: "web",
            github: "https://github.com/audumber28/Peer-Edge",
            live: "#",
        },
        {
            id: 1,
            title: "Netflix Clone",
            description: "A responsive Netflix interface clone built with React and Firebase, featuring user authentication and dynamic content loading.",
            tags: ["HTML", "CSS"],
            category: "web",
            github: "https://github.com/audumber28/Netflix-Clone",
            live: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Personal Portfolio",
            description: "A modern portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
            tags: ["Next.js", "Tailwind CSS","Framer Motion", "React-Icons"],
            category: "web",
            github: "https://github.com/audumber28/portfolio",
            live: "#",
            featured: true,
        },
       
        
        {
            id: 5,
            title: "AI code reviewer",
            description: "Fun gemini api based porject which will review you code and suggets you any changes if needed",
            tags: ["Node.js", "Express", "Tailwind"],
            category: "backend",
            github: "https://github.com/audumber28/AI-Code-Reviewer",
            live: "#",
        },
        {
            id: 6,
            title: "Realtime User Tracker",
            description: "An web based app which shows users real location with the help of map",
            tags: ["React", "Leaflet"],
            category: "web",
            github: "https://github.com/audumber28/Realtime-Usertracker",
            live: "#",
        },
    ];

    // Filter projects based on active tab
    const filteredProjects = activeTab === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-6">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    className="fixed top-6 left-6 z-50 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-4 py-2 rounded-md flex items-center gap-2"
                >
                    
                    Back
                </button>

                {/* Header Section */}
                <div className="pt-24 pb-12 text-center">
                    <div className="relative inline-block">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            My <span className="text-red-500">Projects</span>
                        </h1>
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    </div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                        A curated collection of my work showcasing my skills in web development. 
                        Each project represents my passion for creating clean, efficient, and user-friendly applications.
                    </p>
                </div>

                {/* Featured Projects */}
               
                

                {/* All Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredProjects.map(project => (
                        <div 
                            key={project.id}
                            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:border-red-500 hover:shadow-[0_0_15px_rgba(185,28,28,0.2)] transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <div className="flex space-x-2">
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                                    >
                                        <FaGithub />
                                    </a>
                                    
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Profile Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="w-8 h-0.5 bg-red-500 mr-3"></span>
                        GitHub Contributions
                    </h2>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:border-red-500 hover:shadow-[0_0_15px_rgba(185,28,28,0.2)] transition-all duration-500 flex flex-col items-center">
                        <div className="mb-4">
                            <FaGithub className="text-6xl text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">@audumber28</h3>
                        <p className="text-gray-400 text-center mb-6">
                            Check out my open-source contributions and more projects on GitHub. 
                            I'm actively developing new projects and contributing to the developer community.
                        </p>
                        <a 
                            href="https://github.com/audumber28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
                        >
                            <FaGithub />
                            View GitHub Profile
                        </a>
                    </div>
                </div>

                {/* Get In Touch */}
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 text-center hover:border-red-500 hover:shadow-[0_0_15px_rgba(185,28,28,0.2)] transition-all duration-500 mb-16">
                    <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        I'm always open to new opportunities and collaborations. If you have a project in mind 
                        or just want to connect, feel free to reach out!
                    </p>
                    <button 
                        onClick={() => router.push('/contact')}
                        className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>

                {/* Footer */}
               
            </div>
        </div>
    );
}

export default Projects;